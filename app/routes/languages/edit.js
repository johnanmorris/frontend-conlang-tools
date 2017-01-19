import Ember from 'ember';

export default Ember.Route.extend({
 // store: Ember.inject.service(),
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
    saveLanguage(language) {
      // this.set('phonemeIds', 'phonemeIds');
      // var store = this.get('store');
      // var phonemeIds = language.get('phonemeIds');
      // phonemeIds.forEach(function(number){
      //   // var phoneme = store.findRecord('phoneme', number);
      //   // debugger;
      //   language.get('phonemes').pushObject(phoneme);
      // });
      language.save().then(() => this.transitionTo('language', language.id));
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
