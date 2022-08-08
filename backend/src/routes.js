import { Router } from 'express';
import { insertProduct, updateProduct, selectProducts, selectProduct, deleteProduct, selectProductsCat } from './Controller/products.js';
import { createTable, createAccount, selectAccounts, verifyLogin, deleteAccount, checkAccount } from './Controller/accounts.js'

const router = Router();

router.get('/', (req, res) => { res.json({ "status": 200, "msg": "API RODANDO" }); })

router.post('/accounts', createAccount)
router.get('/accounts', selectAccounts)
router.delete('/accounts', deleteAccount)
router.post('/account', verifyLogin)
router.post('/account/exist', checkAccount)

router.get('/products', selectProducts);
router.post('/products/category', selectProductsCat);
router.get('/product', selectProduct);
router.post('/products', insertProduct);
router.put('/products', updateProduct);
router.delete('/product', deleteProduct);

export default router;