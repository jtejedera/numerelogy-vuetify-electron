<template>
  <v-container>
    <v-row class="">
      <v-col cols="12" sm="12" md="12">
        <template>
          <v-card>
            <v-toolbar flat color="primary" dark>
              <v-toolbar-title>User Profile</v-toolbar-title>
            </v-toolbar>
            <v-tabs>
              <v-tab>
                NÚMERO MAESTRO
              </v-tab>
              <v-tab>
                NÚMERO EMOCIONAL
              </v-tab>
              <v-tab>
                NÚMERO DE FUERZA
              </v-tab>          
              <v-tab>
                NÚMERO DE ALMA
              </v-tab>
              <v-tab>
                NÚMERO DE PERSONALIDAD
              </v-tab>
              <v-tab>
                NÚMERO DE DESTINO
              </v-tab>
              <v-tab>
                NÚMERO DE EXPRESIÓN
              </v-tab>
              <v-tab>
                NÚMERO DE MISIÓN CÓSMICA
              </v-tab>
              <v-tab>
                NÚMERO DE POTENCIAL
              </v-tab>
              <v-tab>
                NÚMERO DE INICIACIÓN ESPIRITUAL
              </v-tab>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <v-expansion-panels>
                      <v-expansion-panel v-for="maestro in numeros_maestro" :key="maestro.VALOR">
                        <v-expansion-panel-header><h2>{{maestro.VALOR}} - {{maestro.TITULO}}</h2></v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <h3>INTRODUCCIÓN</h3>
                          <p><VueTrix v-model="maestro.DESCRIPCION.INTRODUCCION" placeholder="Enter content" localStorage/></p>                          
                          <h3>POSITIVO</h3>
                          <p><VueTrix v-model="maestro.DESCRIPCION.POSITIVO" placeholder="Enter content" localStorage/></p>
                          <h3>NEGATIVO</h3>
                          <p><VueTrix v-model="maestro.DESCRIPCION.NEGATIVO" placeholder="Enter content" localStorage/></p>
                          <v-divider/>
                          <v-btn
                            class="ma-2"
                            :loading="loading"
                            :disabled="loading"
                            color="green"
                            @click="loader = 'loading', saveData(maestro,'NUMERO_MAESTRO')"
                          >
                            Guardar
                          </v-btn>                          
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>                     
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </template>

      </v-col>      
    </v-row>
  </v-container>
</template>

<script>
import VueTrix from "vue-trix";
import cloneDeep from "clone-deep"

  export default {
    name: 'Home',
    components: {
      VueTrix
    },
    data: () => ({
      loader: null,
      loading: false,
      editorContent: '',
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      resultadoNumeros: [],
      resultadoDescripciones: [],
      numero_maestro: 0,
      descripciones_maestro: []
    }),
    computed: {
      numeros_maestro(){
        console.log(this.$store.state.descripciones.NUMERO_MAESTRO)
        return cloneDeep(this.$store.state.descripciones.NUMERO_MAESTRO).sort((a,b) => (a.VALOR > b.VALOR) ? 1 : ((b.VALOR > a.VALOR) ? -1 : 0));
      }
    },
    mounted(){
      let descripciones = [...this.$store.state.descripciones.NUMERO_MAESTRO]
      this.descripciones_maestro = {...descripciones}
    },
    methods: {
      saveData(element,data){
        console.log(element)
        console.log(this.$store.state.descripciones[data].id)
        this.$store.dispatch('descripciones/SAVE_DESCRIPTIONS', {"data": element, "id": this.$store.state.descripciones[data].id})
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },    
  }
</script>

<style>
  .trix-button-group--file-tools {
    visibility: hidden;
  }
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>