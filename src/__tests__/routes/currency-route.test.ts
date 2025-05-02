import request from 'supertest';
import express from 'express';
import coinRoute from '../../routes/currency-route';
import * as CurrencyServices from '../../services/currency-services';


jest.mock('../../services/currency-services');
const mockPopulateData = CurrencyServices.populateData as jest.Mock;
const mockListCurrencyData = CurrencyServices.getCurrencyList as jest.Mock;
const mockSearchCurrencyData = CurrencyServices.searchCurrencyList as jest.Mock;
const mockCurrencyStatusData = CurrencyServices.getCurrencyStatus as jest.Mock;
const mockDeleteData = CurrencyServices.discardData as jest.Mock;

const app = express();
app.use(express.json());
app.use('/coin', coinRoute);

describe('Coin Route', () => {

    describe('POST /populate', () => {
        it('should call populateData and return 200 with response', async () => {
            const mockResponse = { success: true };
            mockPopulateData.mockResolvedValue(mockResponse);
        
            const res = await request(app).post('/coin/populate');
        
            expect(mockPopulateData).toHaveBeenCalled();
            expect(res.status).toBe(200);
            expect(res.body).toEqual(mockResponse);
        });
    });

    describe('GET /list', () => {
        it('should call listData and return 200 with response', async () => {
            const mockResponse = [{
                id: 'BTC',
                name: 'Bitcoin',
                symbol: 'BTC'
              },
              {
                id: 'ETH',
                name: 'Ethereum',
                symbol: 'ETH'
              },
              {
                id: 'XRP',
                name: 'XRP',
                symbol: 'XRP'
              }];
            mockListCurrencyData.mockResolvedValue(mockResponse);
        
            const res = await request(app).get('/coin/list');
        
            expect(mockListCurrencyData).toHaveBeenCalled();
            expect(res.status).toBe(200);
            expect(res.body).toEqual(mockResponse);
        });

        it('should call listData and return 200 with empty array if no data', async () => {
            const mockResponse = [];
            mockListCurrencyData.mockResolvedValue(mockResponse);
        
            const res = await request(app).get('/coin/list');
        
            expect(mockListCurrencyData).toHaveBeenCalled();
            expect(res.status).toBe(200);
            expect(res.body).toEqual(mockResponse);
        });
    });

    describe('GET /find', () => {
        it('should call searchData and return 200 with response', async () => {
            const mockResponse = [{
                id: 'BTC',
                name: 'Bitcoin',
                symbol: 'BTC'
              },
              {
                id: 'BCH',
                name: 'Bitcoin Cash',
                symbol: 'BCH'
              },
              {
                id: 'GBP',
                name: 'British Pound',
                symbol: '£',
                code: 'GBP'
              }];
            mockSearchCurrencyData.mockResolvedValue(mockResponse);
        
            const res = await request(app).get('/coin/find?search=B');
        
            expect(mockSearchCurrencyData).toHaveBeenCalled();
            expect(res.status).toBe(200);
            expect(res.body).toEqual(mockResponse);
        });

        it('should call searchData and return 200 with empty array if term not found', async () => {
            const mockResponse = [];
            mockSearchCurrencyData.mockResolvedValue(mockResponse);
        
            const res = await request(app).get('/coin/find?search=Q');
        
            expect(mockSearchCurrencyData).toHaveBeenCalled();
            expect(res.status).toBe(200);
            expect(res.body).toEqual(mockResponse);
        });
    });

    describe('GET /status/:id', () => {
        it('should call coinStatusData and return 200 with response when search with valid id', async () => {
            const mockResponse = {
                coinId: 'BTC',
                availability: true,
                updatedAt: Date.now()
              };
              mockCurrencyStatusData.mockResolvedValue(mockResponse);
        
            const res = await request(app).get('/coin/status/BTC');
        
            expect(mockCurrencyStatusData).toHaveBeenCalled();
            expect(res.status).toBe(200);
            expect(res.body).toEqual(mockResponse);
        });
    });

    describe('DELLETE /discard', () => {
        it('should call discardData and return 200 with response', async () => {
            const mockResponse = { success: true };
            mockDeleteData.mockResolvedValue(mockResponse);
        
            const res = await request(app).delete('/coin/discard');
        
            expect(mockDeleteData).toHaveBeenCalled();
            expect(res.status).toBe(200);
            expect(res.body).toEqual(mockResponse);
        });
    })
  
});