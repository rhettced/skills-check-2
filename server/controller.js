module.exports ={
    getInventory: (req,res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then( inv => res.status(200).send(inv))
        .catch(err => res.status(500).send(err))
    },
    addInventory: (req,res) => {
        console.log(req.body);
        const db = req.app.get('db');
        const{name,price,img} = req.body;

        db.create_product([name,price,img])
        .then(inv => {res.status(200).send(inv)})
        .catch(err => console.log(err))
    }
}