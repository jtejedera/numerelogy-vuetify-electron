import db from './datastore'
import store from '../store/store'

const dbInitialization = () => {
   writeInDb(numero_equilibrio);     
};

const writeInDb = (data) => {
    db.insert(data, function(err, record) {
        if (err) {
            console.error(err);
            process.exit(0);
        }
        store.dispatch('descripciones/LOAD_STORE', record)
    });        
}

export default dbInitialization;