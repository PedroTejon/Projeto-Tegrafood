import { openDb } from '../configDB.js';

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS products ( id INTEGER PRIMARY KEY, title TEXT, price FLOAT, description TEXT, image TEXT, category TEXT)');
    });
}

export async function insertProduct(req, res) {
    let product = req.body;
    openDb().then(db => {
        db.run('INSERT INTO products ( title, price, description, image, category) VALUES (?, ?, ?, ?, ?)', [product.title, product.price, product.description, product.image, product.category])
        .then(() => res.send({"status": 200}));
    });
}

export async function updateProduct(req, res) {
    let product = req.body;
    openDb().then(db => {
        db.run('UPDATE products SET title=?, price=?, description=?, image=?, category=? WHERE id=?', [product.title, product.price, product.description, product.image, product.category, product.id])
        .then(() => res.send({"status": 200}));
    });
}

export async function selectProducts(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM products').then(products => res.json(products));
    });
}

export async function selectProduct(req, res) {
    openDb().then(db => {
        db.get('SELECT * FROM products WHERE id=?', [req.body.id]).then(product => res.json(product));
    });
}

export async function deleteProduct(req, res) {
    let product = req.body.id;
    openDb().then(db => {
        db.get('DELETE FROM products WHERE id=?', [product]).then(status => res.send({"status": 200}))
    });
}

export async function selectProductsCat(req, res) {
    openDb().then(db => {
        if (req.body.category != 'todos') {
            db.all('SELECT * FROM products WHERE category = ?', [req.body.category]).then(products => res.json(products));
        } else{
            db.all('SELECT * FROM products').then(products => res.json(products));
        }
    });
}