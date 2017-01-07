import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('language');
  },
  actions: {
    deleteLanguage(language) {
      let confirmation = confirm("Are you sure? This action is irreversible.");
      if (confirmation) {
        language.destroyRecord();
      }
    }
  }
});
