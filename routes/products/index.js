const {key} = require("joi/lib/types/state");
const products = require('express').Router();

const versicherungen= [
    {
        id: 1,
        name: "basic",
        title: "Schliessen Sie die grössten Versicherungslücken",
        description: "mit einer günstigen Zusatzversicherung ohne viel Schnickschnack, dafür mit Kostenbeiträgen an Ihr Sportabo, Auslandschutz und Kostenübernahme bei Notfalltransporten. Und das bereits ab CHF 13.50 pro Monat*.",
        price: 13.50,
        hero: {
            url: "https://a.storyblok.com/f/233982/1300x731/8ad6060815/2021_-27_21-023_altb_04_0093_srgb_16-9.jpg",
            texline1: "atupri Basic"
        }
    },
    {
        id: 2,
        name: "mitiva",
        title: "Mivita passt zu mir, weil ...",
        description: "Mit einer Zusatzversicherung schliessen Sie Versicherungslücken, die nicht durch die Grundversicherung gedeckt sind. Damit Sie immer sinnvoll versichert sind und Kosten sparen, erhalten Sie mit der cleveren Zusatzversicherung Mivita neben den allgemeinen Leistungen für jede Lebensphase auch spezifische Leistungen genau dann, wenn Sie diese im Leben brauchen – ganz ohne administrativen Aufwand und Vertragsanpassungen.",
        price: 35.50,
        hero: {
            url: "https://a.storyblok.com/f/233982/1300x731/3c7ad93211/atupri_wettbewerb_teaserbild_1600x900px.jpg",
            texline1: "Auf Sie abgestimmt"
        }
    }
]


const keyValue = versicherungen.map(v => {
    return {
        name: v.name,
        value: v.id
    }
})

products.get("/", (req, res) => {
    res.status(200).json(versicherungen);
})

products.get("/keyvalue",(req, res) => {
    res.status(200).json(keyValue);
})

products.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    let product = null;

    if(req.params.id){
        versicherungen.forEach(v =>{
           if (v.id === id){
                product = v;
           }
        })
    }

    if(product){
        res.status(200).json(product);
    }else{
        res.status(404).json("kein Produkt gefunden")
    }
})



module.exports = products;