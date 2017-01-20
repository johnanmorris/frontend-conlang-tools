import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let language = this.modelFor('language');
    return this.store.createRecord('word', {
      language: language
    });
  },

  renderTemplate(){
    this.render();
  },

  actions: {
    saveWord(word) {
      word.save().then(() => this.refresh());
    },
    willTransition(){
      // rollbackAttributes() removes the
      // record from the store if the model
      // 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});


// // setupController: function(controller, model) {
// //   this._super(controller, model);
// //   controller.set('title', 'Create a New Language');
// //   controller.set('buttonLabel', 'Create language');
// // },
// //
// // renderTemplate() {
// //   this.render('languages/form');
// // },
