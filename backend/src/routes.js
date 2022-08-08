import { Router } from 'express';
import { createTable, insertProduct, updateProduct, selectProducts, selectProduct, deleteProduct, selectProductsCat } from './Controller/products.js';

const router = Router();

router.get('/', (req, res) => { res.json({ "status": 200, "msg": "API RODANDO"});})
router.get('/products', selectProducts);
router.post('/products/category', selectProductsCat);
router.get('/product', selectProduct);
router.post('/products', insertProduct);
router.put('/products', updateProduct);
router.delete('/product', deleteProduct);

export default router;