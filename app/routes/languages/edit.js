import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('language', params.language_id);
  },

  actions: {
    saveLanguage(language) {
      language.save().then(() => this.transitionTo('languages'));
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
