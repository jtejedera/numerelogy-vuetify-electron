import db from './datastore'
import store from '../store/store'
import LocalForageFunctions from '../configuration/localForageFunctions'

const dbInitialization = () => {

    //LOAD CHART MATRIX TO DB
    const char_matrix = {
        CHAR_MATRIX: [
          {
              "VALOR": 1,
              "CHARS": ['A', 'J', 'S']
          },
          {
              "VALOR": 2,
              "CHARS": ['B', 'K', 'T']
          }
          ,
          {
              "VALOR": 3,
              "CHARS": ['C', 'L', 'U']
          }
          ,
          {
              "VALOR": 4,
              "CHARS": ['D', 'M', 'V']
          }
          ,
          {
              "VALOR": 5,
              "CHARS": ['E', 'N', 'W', 'Ñ']
          }
          ,
          {
              "VALOR": 6,
              "CHARS": ['F', 'O', 'X']
          }
          ,
          {
              "VALOR": 7,
              "CHARS": ['G', 'P', 'Y']
          }
          ,
          {
              "VALOR": 8,
              "CHARS": ['H', 'Q', 'Z']
          }
          ,
          {
              "VALOR": 9,
              "CHARS": ['I', 'R']
          }
  
      ]}
      writeInDb(char_matrix);

    //LOAD NUMERO NOMBRE TO DB
    const numero_nombre = {
        NUMERO_NOMBRE: [
            {
                "VALOR":1,
                "DESCRIPCION":`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`
             }      
        ]}
        writeInDb(numero_nombre);
    
    //LOAD NUMERO HEREDITARIO
    const numero_hereditario = {
        NUMERO_HEREDITARIO: [
            {
               "VALOR":1,
               "DESCRIPCION":`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`
            }               
         ]}
         writeInDb(numero_hereditario);  

    //LOAD NUMERO ALMA
    const numero_alma = {
        NUMERO_ALMA: [
            {
               "VALOR": 1,
               "DESCRIPCION": `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`
            }
         ]}
         writeInDb(numero_alma);
    
    //LOAD NUMERO PERSONALIDAD
    const numero_personalidad = {
        NUMERO_PERSONALIDAD: [
            {
               "VALOR": 1,
               "DESCRIPCION": `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`
            }   
         ]}
         writeInDb(numero_personalidad);
    
    //LOAD MISION COSMICA
    const mision_cosmica = {
        MISION_COSMICA: [
            {
               "VALOR": 1,
               "DESCRIPCION": `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`
            }
         ]}
         writeInDb(mision_cosmica); 
    
    //LOAD NUMERO MAESTRO
    const numero_maestro = {
        NUMERO_MAESTRO: [
            {
               "VALOR":1,
               "TITULO":"YO SOY",
               "DESCRIPCION":{
                  "INTRODUCCION":`"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."`
               }
            }
         ]}
         writeInDb(numero_maestro); 
    
    //LOAD NUMERO POTENCIAL
    const numero_potencial = {
        NUMERO_POTENCIAL: [
            {
               "VALOR": 1,
               "DESCRIPCION": `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`
            }
         ]}
         writeInDb(numero_potencial);   

    //LOAD NUMERO EQUILIBRIO
    const numero_equilibrio = {
        NUMERO_EQUILIBRIO: [
            {
                "VALOR": 1,
                "DESCRIPCION": `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`
            }
        ]}
        writeInDb(numero_equilibrio);     
};

const writeInDb = (data) => {
    let key = Object.keys(data)[0]

    LocalForageFunctions.setItem(key, data[key])
    store.dispatch('descripciones/LOAD_STORE', data)        
}

export default dbInitialization;