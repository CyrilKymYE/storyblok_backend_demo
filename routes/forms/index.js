const forms = require('express').Router();

const formsList = [
    {
        id: 1,
        name: "Eventanmeldung",
        type: "event",
        fields: [
            {
                label: "Name",
                name: "name",
                type: "text"
            },
            {
                label: "Vorname",
                name: "surname",
                type: "text"
            },
            {
                label: "Strasse",
                name: "street",
                type: "text"
            },
            {
                label: "Alter",
                name: "age",
                type: "number"
            },
            {
                label: "E-Mail",
                name: "email",
                type: "email"
            },
        ],
        submitUrl: "https://storyblok-backend-demo.vercel.app/api/forms"
    },
    {
        id: 2,
        name: "Kontaktanfrage",
        type: "contact",
        fields: [
            {
                label: "Name",
                name: "name",
                type: "text"
            },
            {
                label: "Vorname",
                name: "surname",
                type: "text"
            },
            {
                label: "E-Mail",
                name: "email",
                type: "email"
            },
            {
                label: "Telefon",
                name: "phone",
                type: "text"
            },
        ],
        submitUrl: "https://storyblok-backend-demo.vercel.app/api/forms"
    }
]

forms.get("/", (req, res, next) => {
    res.status(200).json(formsList);
})

forms.get("/keyvalue", (req, res, next) => {
    res.status(200).json(formsList.map(f => {
        return {
            name: f.name,
            value: f.id
        }
    }));
})

forms.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    let form = null;

    if(req.params.id){
        formsList.forEach(f =>{
            if (f.id === id){
                form = f;
            }
        })
    }

    if(form){
        res.status(200).json(form);
    }else{
        res.status(404).json("kein Formular gefunden")
    }
})

module.exports = forms;