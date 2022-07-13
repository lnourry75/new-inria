
<template>
<b-container>
    <label for="pet-select">Sélection du quartier:</label><br>
<select v-model="utilisateur.quartier" name="pets" id="pet-select">
    <option value="">--Choisisser votre quartier--</option>
    <option value="Paris V - Saint-Victor/Jussieu">Paris V - Saint-Victor/Jussieu</option>
</select>
<br><br>

<!--<tr v-for "utilisateur_alias in utilisateur">
  <td></td>
  </tr>-->
 <!--<label for="n_days">Probabilité de transmission <b-icon  v-b-modal.transmi icon="exclamation-circle-fill" variant="info"></b-icon> : </label>
                  <b-form-input id="ptransmi" v-model="utilisateur.probability" type="range" min="0.005" max="0.9" step="0.005"></b-form-input>-->
    <br><br>
    <label>Probabilité de transmission</label>
                  <select v-model="utilisateur.probability">
                  // eslint-disable-next-line
                  <option v-for="utilisateur in utilisateurs" v-bind:key="utilisateur"> {{utilisateur}} </option>
                  </select>
    <br><br>
    <label for="pet-select">Choix des indicateurs épidémiologiques</label><br>
<select v-model="utilisateur.choix" name="pets" id="pet-select">
    <option value="Nombre de nouvelles contaminations(biais)">Nombre de nouvelles contaminations(biais)</option>
    <option value="Nombre total de contaminations">Nombre total de contaminations</option>
        <option value="Nombre total d'individus sains">Nombre total d'individus sains</option>
            <option value="Nombre de nouvelles contaminations">Nombre de nouvelles contaminations</option>
                <option value="Nombre d'individus contagieux">Nombre d'individus contagieux</option>
                    <option value="Nombre d'individus guéris">Nombre d'individus guéris</option>
</select>
<br><br>

 <label for="pet-select">Population</label><br>
<select v-model="utilisateur.population" name="pets" id="pet-select">
    <option value="Quartier">Quartier</option>
    <option value="Flux entrant">Flux entrant</option>
        <option value="Flux sortant">Flux sortant</option>
            <option value="Ecolier">Ecolier</option>
                <option value="Etudiant">Etudiant</option>
                    <option value="Actif">Actif</option>
                    <option value="Retraité">Retraité</option>
</select>
  <br><br>
<!-- <b-form-input placeholder="Nom" v-model="utilisateur.nom"/>
    <b-form-input placeholder="Prenom" v-model="utilisateur.prenom"/>
  <b-form-input placeholder="Email" type="email" v-model="utilisateur.email"/>
   <b-form-textarea
      id="textarea"
      v-model="utilisateur.description"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea> -->

    <b-button @click="enregistrer">Valider</b-button>
    <br><br>

   <!-- {{this.utilisateur}} -->

   <p>Probabilité de transmission : {{utilisateur.probability}}</p>

  <p>Global infected : {{this.global}}</p>

</b-container>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

/* eslint-disable */
export default {
  name: 'MyFormulaire',
  
  data () {
    return {
         utilisateurs: [],

      utilisateur: {
        probability: ""
        
      },
     

      probabilitys:
      [	
'0.05',
'0.05641025641025641',
	'0.06282051282051282',
	'0.06923076923076923',
'0.07564102564102565',
'0.08205128205128205',
'0.08846153846153847',
'0.09487179487179487',
'0.10128205128205128',
'0.1076923076923077',
'0.11410256410256409',
'0.1205128205128205',
'0.12692307692307692',
'0.13333333333333333',
'0.13974358974358975',
'0.14615384615384616',
'0.15256410256410255',
'0.158974358974359',
'0.1653846153846154',
'0.17179487179487177',
'0.17820512820512818',
'0.1846153846153846',
'0.191025641025641',
'0.19743589743589746',
'0.20384615384615384',
'0.21025641025641026',
'0.21666666666666665',
'0.22307692307692306',
'0.22948717948717948',
'0.23589743589743592',
'0.2423076923076923',
'0.2487179487179487',
'0.2551282051282051',
'0.2615384615384615',
'0.26794871794871794',
'0.27435897435897433',
'0.28076923076923077',
'0.28717948717948716',
'0.29358974358974355',
'0.3']
    }
    
  },
  /* Vue.set(utilisateur, probability), */
  mounted(){
    axios.get('http://localhost:5000/api/posts')
    .then((response) => {
      console.log(response.data);
      this.utilisateurs = response.data;
     /* flatArray = json_decode(this.utilisateur, true);*/

    })
    .catch((error) => {
      console.log(error);
    })

     axios.get('http://localhost:5000/api/global')
    .then((response) => {
      console.log(response.data);
      this.global = response.data;
      
     

    })
        .catch((error) => {
      console.log(error);
    })
    
  },
methods: {
    enregistrer () {
      axios.post('http://localhost:5000/api/posts', {
        probability: parseFloat(this.utilisateur.probability),
        probability: ref(parseFloat(this.utilisateur.probability)), 
        
      })

      console.log(this.utilisateur)

      this.utilisateur = {}
     

    }
  }
}
</script>

<style scoped>

</style>
