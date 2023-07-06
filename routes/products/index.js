const products = require('express').Router();

const productList = [
    {
        name: "zahnversicherung",
        value: {
            price: 10
        }
    },
    {
        name: "reiseversicherung",
        value: {
            price: 20
        }
    }
]

products.get("/", (req, res, next) => {
    res.status(200).json(productList);
})

module.exports = products;