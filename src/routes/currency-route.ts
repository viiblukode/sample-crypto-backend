import express, { Request, Response} from 'express';

const coinRoute = express.Router();

import { CurrencyType } from '../constants/CurrencyData';
import { discardData, getCurrencyList, getCurrencyStatus, populateData, searchCurrencyList } from '../services/currency-services';


coinRoute.post('/populate', 
    async (req:Request, res: Response) => {
        console.log('=== Executing populate data api call... ===');
        const insertRes = await populateData();
    
        res.status(200).json(insertRes);
});
    
coinRoute.get('/list',
    async (req: Request, res: Response) => {
        console.log('=== Executing get list data request... ===');
        const type = req.query?.type;
        const hasTypeDefined = type ? type : 'all';
        const formattedQuery = hasTypeDefined.toString().toUpperCase() as unknown as CurrencyType;

        const list = await getCurrencyList(formattedQuery);

        res.status(200).json(list);
    }
)

coinRoute.get('/find',
async (req: Request, res: Response) => {
    console.log('=== Executing find coin request... ===');
    const search = req.query?.search as string;
    const searchResults = await searchCurrencyList(search);

    res.status(200).json(searchResults); 
});

coinRoute.get('/status/:id',
    async (req: Request, res: Response) => {
        console.log('=== Executing get coin status request... ===');
        const coinId = req.params?.id as string;
        const searchResults = await getCurrencyStatus(coinId);

        res.status(200).json(searchResults);
    }
)

coinRoute.delete('/discard', async(req: Request, res: Response) => {
    console.log('=== Executing discard data request... ===');
    const discardRes = await discardData()

    res.status(200).json(discardRes); 
});


export default coinRoute;