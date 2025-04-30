import sequelize from "./dbConnection";

export const initDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('=== DB connected successfully! ===');

        await sequelize.sync();
        console.log('=== Tables synced! ===');
    } catch (err) {
        console.error(`=== Error encountered: ${JSON.stringify(err)}`);
    }
    
}