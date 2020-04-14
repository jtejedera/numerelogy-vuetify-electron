<template>
  <v-app>
    <v-app-bar
      app
      color="default"
      dark
    >
      <div class="d-flex align-center">
        <v-icon contain class="shrink mr-2" transition="scale-transition" x-large>filter_9</v-icon>   
        <v-btn
          to='/'
          text
        >
          <span class="mr-2">INICIO</span>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to='administracion'
        text
      >
        <span class="mr-2">Administración</span>
        <v-icon>settings</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import dbInitialization from './configuration/dbInitialization'
import LocalForage from 'localforage'
import store from './store/store'

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
  mounted(){
    LocalForage.keys().then(function(numberOfKeys) {
        if(numberOfKeys.length===0){
          console.log("No hay")
          dbInitialization()
        }else{
          store.dispatch('descripciones/LOAD_STORE', numberOfKeys)
          console.log("hay ", numberOfKeys)
        }
    }).catch(function(err) {
        console.log(err);
    });    
  }
};
</script>
