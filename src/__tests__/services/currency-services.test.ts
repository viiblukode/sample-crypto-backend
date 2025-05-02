import { CurrencyType } from "../../constants/CurrencyData";
import CoinPurchaseStatus from "../../entities/coinPurchaseStatus";
import CurrencyInfo from "../../entities/currencyInfo";
import { populateData, discardData, getCurrencyList, searchCurrencyList, getCurrencyStatus  } from "../../services/currency-services";
import { Op } from 'sequelize';

jest.mock('../../entities/currencyInfo');
jest.mock('../../entities/CoinPurchaseStatus');


describe('currency-services', () => {
    beforeEach(() => {
        jest.clearAllMocks();
      });

    describe('populateData', () => {
        it('should bulk insert all lists and return true on success', async () => {
          (CurrencyInfo.bulkCreate as jest.Mock).mockResolvedValueOnce(undefined); // CryptoList
          (CoinPurchaseStatus.bulkCreate as jest.Mock).mockResolvedValueOnce(undefined); // CoinPurchaseAvailabilityList
          (CurrencyInfo.bulkCreate as jest.Mock).mockResolvedValueOnce(undefined); // FiatList
      
          const result = await populateData();
      
          expect(CurrencyInfo.bulkCreate).toHaveBeenCalledTimes(2);
          expect(CoinPurchaseStatus.bulkCreate).toHaveBeenCalledTimes(1);
          expect(result).toBe(true);
        });
      
        it('should return false and log error if any insert fails', async () => {
          // Mock the first insert to fail
          (CurrencyInfo.bulkCreate as jest.Mock).mockRejectedValueOnce(new Error('Insert failed'));
      
          const result = await populateData();
      
          expect(CurrencyInfo.bulkCreate).toHaveBeenCalledTimes(1); // Fails at first call
          expect(result).toBe(false);
        });
    });

    describe('discardData', () => {
        it('should destroy all records and return true on success', async () => {
          (CoinPurchaseStatus.destroy as jest.Mock).mockResolvedValueOnce(undefined);
          (CurrencyInfo.destroy as jest.Mock).mockResolvedValueOnce(undefined);
      
          const result = await discardData();
      
          expect(CoinPurchaseStatus.destroy).toHaveBeenCalledWith({ where: {} });
          expect(CurrencyInfo.destroy).toHaveBeenCalledWith({ where: {} });
          expect(result).toBe(true);
        });
      
        it('should return false if an error is thrown', async () => {
          (CoinPurchaseStatus.destroy as jest.Mock).mockRejectedValueOnce(new Error('fail'));
      
          const result = await discardData();
      
          expect(result).toBe(false);
        });
    });

    describe('getCurrencyList', () => {
        it('should query crypto list with code IS NULL', async () => {
          const mockResult = [{ id: 'BTC' }];
          (CurrencyInfo.findAll as jest.Mock).mockResolvedValueOnce(mockResult);
      
          const result = await getCurrencyList(CurrencyType.CRYPTO);
      
          expect(CurrencyInfo.findAll).toHaveBeenCalledWith({
            where: { code: { [Op.is]: null } },
          });
          expect(result).toEqual(mockResult);
        });
      
        it('should query fiat list with code NOT NULL', async () => {
          const mockResult = [{ id: 'USD' }];
          (CurrencyInfo.findAll as jest.Mock).mockResolvedValueOnce(mockResult);
      
          const result = await getCurrencyList(CurrencyType.FIAT);
      
          expect(CurrencyInfo.findAll).toHaveBeenCalledWith({
            where: { code: { [Op.not]: null } },
          });
          expect(result).toEqual(mockResult);
        });
    });

    describe('searchCurrencyList', () => {
        it('should query using Op.or with iLike on id and name', async () => {
          const mockResult = [{ id: 'BTC', name: 'Bitcoin' }];
          (CurrencyInfo.findAll as jest.Mock).mockResolvedValueOnce(mockResult);
      
          const searchVal = 'bit';
          const result = await searchCurrencyList(searchVal);
      
          expect(CurrencyInfo.findAll).toHaveBeenCalledWith({
            where: {
              [Op.or]: [
                { id: { [Op.iLike]: `${searchVal}%` } },
                { name: { [Op.iLike]: `%${searchVal}%` } },
              ],
            },
          });
          expect(result).toEqual(mockResult);
        });

        describe('getCurrencyStatus', () => {
            it('should query coin status by coinId', async () => {
              const mockStatus = {
                coinId: 'ETH',
                availability: 'YES',
                updatedAt: new Date(),
              };
              (CoinPurchaseStatus.findOne as jest.Mock).mockResolvedValueOnce(mockStatus);
          
              const result = await getCurrencyStatus('ETH');
          
              expect(CoinPurchaseStatus.findOne).toHaveBeenCalledWith({
                where: { coinId: 'ETH' },
                attributes: ['coinId', 'availability', 'updatedAt'],
              });
              expect(result).toEqual(mockStatus);
            });
        });
    });
      
})
