import CurrencyInfo from "../entities/currencyInfo";
import { CoinPurchaseAvailabilityList, CryptoList, CurrencyType, FiatList } from "../constants/CurrencyData";
import { Op } from "sequelize";
import CoinPurchaseStatus from "../entities/coinPurchaseStatus";

export const populateData = async () => {
    try{
        console.log('=== [populateData] Inserting CryptoList.... ===');
        await CurrencyInfo.bulkCreate(CryptoList);
        await CoinPurchaseStatus.bulkCreate(CoinPurchaseAvailabilityList);
        console.log('=== [populateData] Inserting FiatList.... ===');
        await CurrencyInfo.bulkCreate(FiatList);

        return true;
    } catch (err) {
        console.error(`Error encountered while inserting data: ${err}`);
        return false;
    }
}

export const discardData = async () => {
    try {
        console.log('=== [discardData] Clearing db data... ===');
        //clear coin purchase table
        await CoinPurchaseStatus.destroy({
            where: {}
        });
         //clear currencyInfo table
        await CurrencyInfo.destroy({
            where: {},
        });

        return true;
    } catch (err) {
        console.error(`Error encountered while purging data: ${err}`);
        return false;
    }
}

export const getCurrencyList = async (type: CurrencyType) => {
    console.log(`=== [getCurrencyList] Querying list type: ${type} ... ===`);
    
    const searchCondition = (val: CurrencyType) => {
        let condition = {};
        switch(val) {
            case CurrencyType.CRYPTO:
                condition = {
                    code: {[Op.is]: null }
                }
                break;
            case CurrencyType.FIAT:
                condition =  {
                    code: { [Op.not]: null }
                }
                break;
            default:
                break;
        }
        return condition;
    }

    const queryResult = await CurrencyInfo.findAll({
        where: searchCondition(type)
    });

    return queryResult;
}

export const searchCurrencyList = async (searchVal: string) => {
    console.log(`=== [searchCurrencyList] searchVal: ${searchVal} ===`);
    const result = await CurrencyInfo.findAll({
        where: {
            [Op.or]: [
               { id: { [Op.iLike]:`${searchVal}%` }},
               { name: { [Op.iLike]: `${searchVal}%` }}
            ]}
        }, 
    );

    return result;
}

export const getCurrencyStatus = async (coinName: string) => {
    console.log(`=== [getCurrencyStatus] coinName: ${coinName} ===`);

    const result = await CoinPurchaseStatus.findOne({
        where: {
            coinId: coinName
        },
        attributes: ['coinId', 'availability', 'updatedAt']
    });

    return result;
}