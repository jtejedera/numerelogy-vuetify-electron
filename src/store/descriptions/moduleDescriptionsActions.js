import LocalForage from 'localforage'

export default {
  async SAVE_DESCRIPTIONS({commit}, payload){
      console.log("datos: ", payload)
      commit('upload_descriptions', payload)
  },
  async LOAD_STORE({commit}, payload){
    console.log("Entra qqui")
      LocalForage.getItem(Object.keys(payload)).then( data => {
        commit('load_store', {"key":Object.keys(payload), "data":data})
      }).catch(function(err) {
          console.log(err);
      });         
  }
}
