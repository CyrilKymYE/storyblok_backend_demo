const forms = require('express').Router();

const formsList = [
    {
        name: "form 1",
        value: {
            fields: [
                ["name", "text"],
                ["age", "number"]
            ]
        }
    },
    {
        name: "form 2",
        value: {
            fields: [
                ["name", "text"],
                ["surname", "text"],
                ["age", "number"]
            ]
        }
    },
]

forms.get("/", (req, res, next) => {
    res.status(200).json(formsList);
})

module.exports = forms;