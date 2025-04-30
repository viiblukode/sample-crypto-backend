import { Sequelize } from "sequelize-typescript";
import CurrencyInfo from "../entities/currencyInfo";
import CoinPurchaseStatus from "../entities/coinPurchaseStatus";

const sequelize = new Sequelize(
    "cryptodb",
    "postgres",
    "",
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
        logging: false
    }
);

sequelize.addModels([
    CurrencyInfo,
    CoinPurchaseStatus
]);

export default sequelize;