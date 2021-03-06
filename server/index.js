require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');

const app = express();
const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

//endpoints
app.get('/api/inventory',ctrl.getInventory);
app.get('/api/inventory/:id',ctrl.singleProd);
app.post('/api/product',ctrl.addInventory);
app.delete('/api/product/:id',ctrl.deleteProduct);
app.put('/api/product/:id',ctrl.editProduct);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then(db => {
    app.set('db', db);
    console.log(`Party on Sports fans`);
})
.catch(err => console.log(err));

app.listen(SERVER_PORT,console.log(`server is running on ${SERVER_PORT}`));