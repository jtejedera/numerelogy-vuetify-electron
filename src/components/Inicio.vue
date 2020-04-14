<template>
  <v-container>
    <v-row class="">
      <v-col cols="12" sm="12" md="12">
        <v-form v-model="valid">
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  md="3"
                >
                  <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    :counter="10"
                    label="Nombre"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="3"
                >
                  <v-text-field
                    v-model="lastName1"
                    :rules="nameRules"
                    :counter="10"
                    label="Primer Apellido"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="3"
                >
                  <v-text-field
                    v-model="lastName2"
                    
                    :counter="10"
                    label="Segundo Apellido"
                    required
                  ></v-text-field>
                </v-col>                

                <v-col
                  cols="12"
                  md="3"
                >
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Fecha de Nacimiento"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-container>
          </v-form>        
      <div class="my-2">
        <v-btn small color="primary" @click="numeroMaestro" :disabled="!valid">Buscar Número Mestro</v-btn>
      </div>  

      <div v-if="resultadoNumeroMaestro.length">
        <v-divider/>
            <v-chip
              class="ma-2"
              color="green"
              text-color="white"
              v-for="(numero, index) in resultadoNumeros"
              :key="index"
            >
              <v-avatar
                left
                class="green darken-4"
              >
                {{numero.VALOR}}
              </v-avatar>
              {{numero.TITULO}}
            </v-chip>
        <h1>Lectura numerológica del nombre</h1>
        <h2>NUMERO {{numero_nombre}}</h2>
        <p v-html="resultadoNumeroNombre[0].DESCRIPCION"></p>
        <h1>Lectura número Hereditario</h1>
        <h2>NUMERO {{numero_hereditario}}</h2>
        <p v-html="resultadoNumeroHereditario[0].DESCRIPCION"></p>                     
        <h1>Número Maestro</h1>        
        <h2>NUMERO {{resultadoNumeroMaestro[0].VALOR}} - {{resultadoNumeroMaestro[0].TITULO}}</h2></v-expansion-panel-header>
        <h3>INTRODUCCION</h3>
        <p v-html="resultadoNumeroMaestro[0].DESCRIPCION.INTRODUCCION"></p>
        <h3>POSITIVO</h3>
        <p v-html="resultadoNumeroMaestro[0].DESCRIPCION.POSITIVO"></p>
        <h3>NEGATIVO</h3>
        <p v-html="resultadoNumeroMaestro[0].DESCRIPCION.NEGATIVO"></p>
        <h1>Número de Alma</h1>        
        <h2>NÚMERO {{numero_alma}}</h2>
        <p v-html="resultadoNumeroAlma[0].DESCRIPCION"></p>
        <h1>Número de Personalidad</h1>        
        <h2>NÚMERO {{numero_personalidad}}</h2>
        <p v-html="resultadoNumeroPersonalidad[0].DESCRIPCION"></p>                                         
      </div>      
      </v-col>      
    </v-row>
  </v-container>
</template>

<script>
import VueTrix from "vue-trix";

  export default {
    name: 'Inicio',
    components: {
      VueTrix
    },
    data: () => ({
      disabled: true,
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],      
      editorContent: '',
      date: new Date().toISOString().substr(0, 10),
      name: '',
      lastName1: '',
      lastName2: '',
      menu: false,
      modal: false,
      menu2: false,
      resultadoNumeros: [],
      resultadoNumeroNombre: [],
      resultadoNumeroHereditario: [],
      resultadoNumeroMaestro: [],
      resultadoNumeroExpresion: [],
      resultadoNumeroAlma: [],
      resultadoNumeroPersonalidad: [],
      resultadoMisionCosmica: [],
      resultadoNumeroPotencial: [],
      resultadoNumeroIniciacionEspitirual: [],
      numero_nombre: 0,
      numero_hereditario: 0,
      numero_fuerza: 0,
      numero_maestro: 0,
      numero_expresion: 0,
      numero_alma: 0,
      numero_personalidad: 0,
      numero_cosmico: 0,
      numeroMestroNoR: 0,
      numeroAlmaNoR: 0,
      numeroPersonalidadNoR: 0,
      numeroExpresionNoR: 0
    }),
    computed: {
    },
    methods: {
      numerologiaNombre(){
        let nombre = this.firstname.toUpperCase().replace(/\s+/g, '');
        let aCalcular = 0;
        let num = '';

        for(let char in nombre){
          aCalcular += this.$store.state.descripciones.CHAR_MATRIX.find( x=> {
                        return x.CHARS.find(y => y === nombre[char] )
                      }).VALOR
        }

        aCalcular = this.reduccion(aCalcular)

        this.numero_nombre = aCalcular
        this.resultadoNumeroNombre.push(this.$store.state.descripciones.NUMERO_NOMBRE.find(x => x.VALOR == this.numero_nombre));
        this.resultadoNumeros.push({ 'VALOR': this.numero_nombre, "TITULO": 'Numerología Nombre'});
      },
      numeroMaestro(){
        let dateFormat = this.$moment(this.date).format('YYYYMMDD');
        let calcFuerza = this.$moment(this.date).format('MMDD');
        let num = '';

        this.numero_fuerza = this.reduccion(calcFuerza)

        for(let element in dateFormat){
          this.numero_maestro += parseInt(dateFormat[element])
        }

        this.numeroMestroNoR = this.numero_maestro

        if(this.numero_maestro >= 10 ){
          let num = this.numero_maestro.toString()
          this.numero_maestro = parseInt(num[0]) + parseInt(num[1])
        }
        this.numeroExpresion();
        this.numerologiaNombre();
        this.resultadoNumeroMaestro.push(this.$store.state.descripciones.NUMERO_MAESTRO.find(x => x.VALOR == this.numero_maestro));
        this.resultadoNumeros.push({ 'VALOR': this.numero_maestro, "TITULO": 'Número Maestro'});
      },
      numeroExpresion(){
        let nombre = this.firstname.concat(this.lastName1).concat(this.lastName2).toUpperCase().replace(/\s+/g, '');
        let aCalcular = 0;
        let num = '';

        for(let char in nombre){
          aCalcular += this.$store.state.descripciones.CHAR_MATRIX.find( x=> {
                        return x.CHARS.find(y => y === nombre[char] )
                      }).VALOR
        }

        this.numeroExpresionNoR = aCalcular

        aCalcular = this.reduccion(aCalcular)

        this.numero_expresion = aCalcular
        this.resultadoNumeros.push({ 'VALOR': this.numero_expresion, "TITULO": 'Número Expresión'});
        this.numeroAlma()
      },
      numeroAlma(){
        let nombre = this.firstname.toUpperCase().replace(/\s+/g, '');
        let aCalcular = 0;
        let num = '';       


        for(let char in nombre){
            let busca = ['A','E','I','O','U'].find(x => x === nombre[char])
            if(busca){
                aCalcular += this.$store.state.descripciones.CHAR_MATRIX.find( y=> {
                          return y.CHARS.find(z => z === busca )
                        }).VALOR
            }
        }   

        this.numeroAlmaNoR = aCalcular

        
        aCalcular = this.reduccion(aCalcular)

        this.numero_alma = aCalcular
        this.resultadoNumeroAlma.push(this.$store.state.descripciones.NUMERO_ALMA.find(x => x.VALOR === this.numero_alma))        
        this.numeroPersonalidad()
        this.resultadoNumeros.push({ 'VALOR': this.numero_alma, "TITULO": 'Número Alma'});
      },
      numeroPersonalidad(){
        let nombre = this.firstname.toUpperCase().replace(/\s+/g, '');
        let aCalcular = 0;
        let num = '';


        for(let char in nombre){
            let busca = ['A','E','I','O','U'].find(x => x === nombre[char])
            if(!busca){
                aCalcular += this.$store.state.descripciones.CHAR_MATRIX.find( y=> {
                          return y.CHARS.find(z => z === nombre[char] )
                        }).VALOR
            }
        }   

        this.numeroPersonalidadNoR = aCalcular
        
        aCalcular = this.reduccion(aCalcular)

        this.numero_personalidad = aCalcular
        this.resultadoNumeroPersonalidad.push(this.$store.state.descripciones.NUMERO_PERSONALIDAD.find(x => x.VALOR === this.numero_personalidad))        
        this.numeroMisionCosmica()
        this.resultadoNumeros.push({ 'VALOR': this.numero_personalidad, "TITULO": 'Número Personalidad'});
      },
      numeroMisionCosmica(){
        let aCalcular = this.numeroAlmaNoR + this.numeroExpresionNoR;
        let num = '';

        aCalcular = this.reduccion(aCalcular)

        this.numero_cosmico = aCalcular      
        this.numeroPotencial()
        this.resultadoNumeros.push({ 'VALOR': this.numero_cosmico, "TITULO": 'Misión Cósmica'});

      },
      numeroPotencial(){
        console.log(`Número Potencial: ${this.numero_maestro+this.numero_expresion}`)
        this.numeroIniciacionEspiritual()
      },
      numeroIniciacionEspiritual(){
        let day = this.$moment(this.date).format('DD');
        let aCalcular = this.numero_alma+this.numero_expresion+this.numero_maestro+day;
        let num = '';

        aCalcular = this.reduccion(aCalcular)
        this.numeroHereditario()
      },
      numeroHereditario(){
          let nombre = this.lastName1.concat(this.lastName2).toUpperCase().replace(/\s+/g, '');
          let aCalcular = 0;
          let num = '';

          for(let char in nombre){
            aCalcular += this.$store.state.descripciones.CHAR_MATRIX.find( x=> {
                          return x.CHARS.find(y => y === nombre[char] )
                        }).VALOR
          }

          aCalcular = this.reduccion(aCalcular)
          this.numero_hereditario = aCalcular  
          this.resultadoNumeroHereditario.push(this.$store.state.descripciones.NUMERO_HEREDITARIO.find(x => x.VALOR === this.numero_hereditario))    
          this.resultadoNumeros.push({ 'VALOR': this.numero_hereditario, "TITULO": 'NúmeroHereditario'});          
          
        },
        reduccion(aCalcular){
          let num ='';
          while(aCalcular>=10){
            num = aCalcular.toString()
            if(aCalcular > 100 ){
              aCalcular = parseInt(num[0]) + parseInt(num[1]) + parseInt(num[1])
            }else if(aCalcular >= 10){
              aCalcular = parseInt(num[0]) + parseInt(num[1])  
            }else if(aCalcular <= 10){
              aCalcular = parseInt(num[0]) + parseInt(num[1])   
            }
          }
          return aCalcular          
        }                                                       
      }
  }
</script>
