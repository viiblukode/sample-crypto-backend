import express, { Request, Response} from 'express';
import { initDB } from './utils/dbUtils';
import coinRoute from '../src/routes/currency-route';

initDB();

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use('/coin', coinRoute)


app.get('/test', (req: Request, res: Response) => {
    res.send('Hello World!');
});
  
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});