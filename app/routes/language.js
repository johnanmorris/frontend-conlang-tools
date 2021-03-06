import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('language', params.language_id);
  },

  actions: {
    error(error){
      Ember.Logger.error('error');  
      this.transitionTo('/not-found');
    }
  }
});
