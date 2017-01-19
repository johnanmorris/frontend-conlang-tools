import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  phonemes: DS.hasMany('phoneme'),
  // phonemeIds: DS.attr(),
  words: DS.hasMany('word'),
  phonemeIds: Ember.computed.map('phonemes', function(phoneme) {
    return parseInt(phoneme.get('id'));
  }),

  phonemeIdsChanged: Ember.observer('phonemeIds', function() {
      // console.log(`phonemeIds changed to: ${this.get('phonemeIds')}`);
    }),

  consonants: Ember.computed.filterBy('phonemes', 'syllabic', false),
  vowels: Ember.computed.filterBy('phonemes', 'syllabic', true),
  isValid: Ember.computed.notEmpty('name')
});
