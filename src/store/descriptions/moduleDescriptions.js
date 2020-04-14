import state from './moduleDescriptionsState.js';
import mutations from './moduleDescriptionsMutations.js';
import actions from './moduleDescriptionsActions.js';
import getters from './moduleDescriptionsGetters.js';

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
};