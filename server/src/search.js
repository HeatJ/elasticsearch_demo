import express from 'express'
import client from './connection.js';

const router = express.Router();

router.post('/api/search', async(req, res, next) => {
    try{
        const result = await client.search({
            index : "kibana_sample_data_ecommerce",
            body : {
                query : {
                    match : {
                        customer_full_name :"Abigail Dawson"
                    }
                }
            }
        })
        
        res.status(200).json(result.body.hits)

    }catch(err){
        console.error(err);
        next(err)
    }
})

export default router