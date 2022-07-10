const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();


router.get('/',async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.distinct("param_fct.mu_prob"));
/*  res.send(await posts.find({}).toArray());*/

});



router.post('/', async (req, res) =>  {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        quartier: req.body.quartier,
        population: req.body.population,
        choix: req.body.choix,
        probabilité: req.body.probabilité,
    });
    res.status(201).send();
});


async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb://127.0.0.1:27017/nicolas', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return client.db('nicolas').collection('test');
}

module.exports = router;