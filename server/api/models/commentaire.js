import mongoose from 'mongoose';


const commentaireSchema = new mongoose.Schema({
    user: {
        type: String
    },
    sujet: {
        type: String
    },
    comment: String,
    date: {
        type: Date,
        default: Date.now
    }
});


let model = mongoose.model('Commentaire', commentaireSchema);

export default class Commentaire {

    create(req, res) {
        model.create(req.body, function(err, commentaire) {
            res.json(commentaire);
        });
    }
    findAll(req, res) {
        model.find(req.body, function(err, commentaire) {
            res.json(commentaire);
        });
    }
    delete(req, res) {
            model.findByIdAndRemove(req.params.id, (err) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.sendStatus(200);
                }
            });
        }
        update(req, res) {
            model.update({
                _id: req.params.id
            }, req.body, (err, commentaire) => {
                if (err || !commentaire) {
                    res.status(500).send(err.message);
                };
                    res.json({
                        success: true,
                        commentaire: commentaire,
                        token: tk
                    });
                }
            );
        }
};
