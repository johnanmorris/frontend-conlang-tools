import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('library');
  },

  actions: {
    saveLanguage(language) {
      language.save().then(() => this.transitionTo('languages'));
    },
    willTransition(){
      // rollbackAttributes() removes the
      // record from the store if the model
      // 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
