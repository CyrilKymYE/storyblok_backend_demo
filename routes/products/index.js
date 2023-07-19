const {key} = require("joi/lib/types/state");
const products = require('express').Router();

const versicherungen= [
    {
        id: 1,
        name: "Atupri - Basic",
        title: "Schliessen Sie die grössten Versicherungslücken",
        description: "Mit einer günstigen Zusatzversicherung ohne viel Schnickschnack, dafür mit Kostenbeiträgen an Ihr Sportabo, Auslandschutz und Kostenübernahme bei Notfalltransporten. Und das bereits ab CHF 13.50 pro Monat*.",
        price: 13.50,
        hero: {
            url: "https://a.storyblok.com/f/233982/1300x731/8ad6060815/2021_-27_21-023_altb_04_0093_srgb_16-9.jpg",
            texline1: "atupri Basic"
        },
        highlights: [
            "Sport und Fitness inkl. Online Kurse",
            "Notfalltransporte und Rettung auch im Ausland"
        ]
    },
    {
        id: 2,
        name: "Atupri - Mivita",
        title: "Mivita passt zu mir, weil ...",
        description: "Mit einer Zusatzversicherung schliessen Sie Versicherungslücken, die nicht durch die Grundversicherung gedeckt sind. Damit Sie immer sinnvoll versichert sind und Kosten sparen, erhalten Sie mit der cleveren Zusatzversicherung Mivita neben den allgemeinen Leistungen für jede Lebensphase auch spezifische Leistungen genau dann, wenn Sie diese im Leben brauchen – ganz ohne administrativen Aufwand und Vertragsanpassungen.",
        price: 35.50,
        hero: {
            url: "https://a.storyblok.com/f/233982/1248x420/b5b7b04c49/455-1248x420-grayscale.jpg",
            texline1: "Auf Sie abgestimmt"
        },
        highlights: [
            "Familien-Rabatt bis zu 50%",
            "Kombirabatt bis zu 5%"
        ]
    },
    {
        id: 3,
        name: "Atupri - Grundversicherung",
        title: "Die Versicherung für alle",
        description: "Bei Atupri wählen Sie für die obligatorische Grundversicherung das Modell, das am besten zu Ihnen passt. Ihr bevorzugter Erstkontakt, die Franchise und die Möglichkeiten der Arztwahl bestimmen, wie viel Sie dabei sparen.",
        price: 250.50,
        hero: {
            url: "https://a.storyblok.com/f/233982/1300x731/db358c6c9a/2021_-27_21-023_untr_03_0065_srgb_16-9.jpg",
            texline1: "für alle das richtige"
        },
        highlights: [
            "Gut und Günstig",
            "Einfache Handhabung mit myAtupri App"
        ]
    },
    {
        id: 4,
        name: "Atupri - Reiseversicherung",
        title: "Ich plane eine Reise",
        description: "Unkompliziert, preiswert und schnell: Mit der Atupri Reiseversicherung sind wir auch im Ausland für Sie da. Egal ob Kurz- oder Langaufenthalt, wir haben für Ihre Reise die passende Versicherungslösung parat.",
        price: 75.30,
        hero: {
            url: "https://a.storyblok.com/f/233982/1016x571/7f7ee1bd21/mann-packt-koffer3.gif",
            texline1: "sorgenfrei reisen"
        },
        highlights: [
            "24/7 für Sie da",
            "Wir übernehmen die Annulierungskosten"
        ]
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