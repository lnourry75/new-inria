
const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();


router.get('/',async (req, res) => {
    const global = await loadPostsCollection();
    res.send(await global.findOne({"param_fct.mu_prob": 0.05}));
 /* res.send(await global.find({}).toArray());*/

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