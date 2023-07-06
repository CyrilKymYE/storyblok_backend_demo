const products = require('express').Router();

const productList = [
    {
        name: "zahnversicherung",
        value: 10
    },
    {
        name: "reiseversicherung",
        value: 20
    }
]

products.get("/", (req, res, next) => {
    res.status(200).json(productList);
})

module.exports = products;