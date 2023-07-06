const forms = require('express').Router();

const formsList = [
    {
        name: "form 1",
        value: [
            ["name", "text"],
            ["alter", "number"]
        ]
    },
    {
        name: "form 2",
        value: [
            ["name", "text"],
            ["alter", "number"]
        ]
    },
]

forms.get('/', (req, res, next) => {
    return res.status(200).json(formsList);
})

module.exports = forms;
