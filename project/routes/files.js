var express = require('express');
var router = express.Router();

let model = require('../model/model');

router.get('/', function (req, res, next) {
    console.log(res);
    return res.json(model.files);
});

router.get('/id/:id', function (req, res, next) {
    try {
        let file = model.viewFile(req.params.id);
        return res.json(file);
    } catch (e) {
        res.statusMessage = e.message;
        console.error(e);
        return res.status(404).send();
    }
});

router.delete('/id/:id', function (req, res, next) {
   try {
        model.deleteFile(req.params.id);
        return res.status(200).send();
    } catch (e) {
        res.statusMessage = e.message;
        console.error(e); 
        return res.status(404).send();
    }
});

router.post('/', function (req, res, next) {
    let tarea = model.addFile(req.body.name, req.body.file)
    return res.json(file);
});

/*router.put('/id/:id', function (req, res, next) {
    try {
        let tarea = model.modificarTarea(req.params.id, req.body.titulo, req.body.descripcion);
       
        return res.status(200).send(tarea);
    } catch (e) {
        res.statusMessage = e.message;
        console.error(e);
        return res.status(404).send();
    }
});*/


module.exports = router;