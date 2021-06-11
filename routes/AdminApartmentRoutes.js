const express = require('express');
const router = express.Router();

const Apartment = require('../models/ApartmentModel');

// Vamos a registrar todas las rutas que tienen que ver con la manipulación de los apartamentos por parte de un usuario de tipo 'Administrador'

router.get('/', async (req, res)=> {
    const allApartments = await Apartment.findAll();
    res.send(allApartments);
})

router.get('/add-new', (req, res) => {
    res.render('add-apartment');
})

router.post('/add-new', (req, res) => {
    const title = req.body.title;
    const price = req.body.price;
    const size = req.body.size;
    const mainPhoto = req.body.mainPhoto;

    const apartment = new Apartment(title, price, size, mainPhoto);
    apartment.save();

    res.send("Apatamento creado.");
})

module.exports = router;