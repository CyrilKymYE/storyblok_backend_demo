const products = require('express').Router();

const productList = [
    {
        name: "product 1",
        value: {
            price: 100
        }
    },
    {
        name: "product 2",
        value: {
            price: 200
        }
    }
]

products.get('/', (req, res, next) => {
    return res.status(200).json(productList);
})

module.exports = products;
