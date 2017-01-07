import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('language');
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('title', 'Create a New Language');
    controller.set('buttonLabel', 'Create language');
  },

  renderTemplate() {
    this.render('languages/form');
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
