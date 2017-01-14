import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('language', params.language_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit Language');
    controller.set('buttonLabel', 'Save Changes');
  },

  renderTemplate(){
    this.render('languages/form');
  },

  actions: {
    cancelEdit(language){
      language.rollbackAttributes();
    },

    saveLanguage(language) {
      language.save().then(() => this.transitionTo('languages.show', language.id));
    },

    willTransition(transition) {
      let model = this.controller.get('model');
      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("You have unsaved changes. Would you like to leave without saving?");
        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
