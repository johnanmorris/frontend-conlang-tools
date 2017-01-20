import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('word', params.word_id);
  },

  renderTemplate(){
    this.render();
  },

  actions: {
    saveWord(word) {
      word.save().then(() => this.transitionTo('language.words.new'));
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



// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model(){
//     let language = this.modelFor('language');
//     return this.store.createRecord('word', {
//       language: language
//     });
//   },
//
//   renderTemplate(){
//     this.render();
//   },
//
//   actions: {
//     saveWord(word) {
//       word.save().then(() => this.refresh());
//     },
//     willTransition(){
//       // rollbackAttributes() removes the
//       // record from the store if the model
//       // 'isNew'
//       this.controller.get('model').rollbackAttributes();
//     }
//   }
// });
