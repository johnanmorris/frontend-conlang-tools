import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // let language = this.get('store').peekRecord('language');
    return this.get('store').findRecord('language', params.language_id, {include: 'phonemes'});
  }
});
