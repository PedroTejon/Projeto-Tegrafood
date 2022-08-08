import { openDb } from '../configDB.js';

export async function createTable() {
    openDb().then(db => {
        db.exec('CREATE TABLE IF NOT EXISTS accounts ( id INTEGER PRIMARY KEY, email TEXT, password TEXT, nome TEXT, admin INTEGER)');
    });
}

export async function createAccount(req, res) {
    let account = req.body;
    openDb().then(db => {
        db.run('INSERT INTO accounts ( email, password, nome, admin ) VALUES (?, ?, ?, ?)', [account.email, account.password, account.nome, account.admin])
            .then(() => res.send({ "status": 200 }));
    });
}

export async function selectAccounts(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM accounts').then(accounts => res.json(accounts));
    });
}

export async function checkAccount(req, res) {
    openDb().then(db => {
        db.all('SELECT * FROM accounts WHERE email=?', [req.body.email]).then((accounts) => {
            if (accounts.length === 0) {
                res.send({ "status": true })
            } else {
                res.send({ "status": false })
            }
        });
    });
}

export async function verifyLogin(req, res) {
    openDb().then(db => {
        db.get('SELECT * FROM accounts WHERE email=? AND password=?', [req.body.email, req.body.password]).then((account) => {
            if (account !== undefined) {
                return res.json({ "status": true, "admin": account.admin });
            } else {
                return res.json({ "status": false });
            }
        });
    });
}

export async function deleteAccount(req, res) {
    let product = req.body.id;
    openDb().then(db => {
        db.get('DELETE FROM accounts WHERE id=?', [product]).then(status => res.send({ "status": 200 }))
    });
}
