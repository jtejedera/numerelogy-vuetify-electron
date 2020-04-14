import LocalForage from 'localforage'
export default {
    setItem: function(stateName,state){
        LocalForage.setItem(stateName,JSON.stringify(state))
    },
    getItem: function(stateName){
      return LocalForage.getItem(stateName)
    }
  }
  