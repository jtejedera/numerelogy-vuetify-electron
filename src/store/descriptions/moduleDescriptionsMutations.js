
export default {
    upload_descriptions(state, payload){
        const index = state.NUMERO_MAESTRO.findIndex( x => x.VALOR === payload.VALOR)
        state.NUMERO_MAESTRO.splice(index, 1)
        state.NUMERO_MAESTRO.push(payload)
    },
    load_store(state, payload){
        state[payload.key] = payload.data
    }
}