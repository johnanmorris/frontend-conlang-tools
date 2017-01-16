import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var language = this.modelFor('language');
    return language.get('words');
  }
});
