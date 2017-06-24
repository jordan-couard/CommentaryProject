import express from 'express';
import Commentaire from '../models/commentaire.js';
import Auth from '../middlewares/authorization.js';

let router = express.Router();

module.exports = (app) => {


    var commentaire = new Commentaire();

    // app.post('/login', commentaire.connect);

    // router.get('/', Auth.isAdministrator, commentaire.findAll);
    //
    // router.get('/:id', Auth.isAdministrator, commentaire.findById);

    router.post('/', commentaire.create);

    router.get('/', commentaire.findAll);

    router.put('/:id +  comment', commentaire.update);
    //
    router.delete('/:id', commentaire.delete);

    app.use('/commentaire', router);

};
