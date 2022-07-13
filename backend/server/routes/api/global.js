
const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();
var expressVue = require("express-vue");
/*  require('../../../../src/components/Formulaire.vue');  */

/* router.get('http://localhost:8080/', (req, res) => {
    const probabilité = {utilisateur};
    res.send(global.findOne({"param_fct.mu_prob": {utilisateur}}));
}) */


router.get('/',async (req, res) => {
    const global = await loadPostsCollection();
  res.send(await global.findOne({"param_fct.mu_prob": (req.body.probability)})); 
  console.log((await global.findOne({"param_fct.mu_prob": (0.05)}).exec()));
/*  console.log((await global.findOne({"param_fct.mu_prob": (0.05)}).exec())); */   
  /* res.send(await global.findOne({"param_fct.mu_prob": 0.05})); */
  /* res.view('../../../../src/components/Formulaire.vue', {utilisateur: { probabilité: global.findOne}})*/
/* expressVue.use(express, expressVueOptions).then(() => {
    res.renderVue('../../../../src/components/Formulaire.vue', {utilisateur: { probabilité: global.findOne}}) 
}); */
  

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