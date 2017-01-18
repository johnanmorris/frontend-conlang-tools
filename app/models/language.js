import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  phonemes: DS.hasMany('phoneme'),
  words: DS.hasMany('word'),

  consonants: Ember.computed.filterBy('phonemes', 'syllabic', false),
  vowels: Ember.computed.filterBy('phonemes', 'syllabic', true),
  isValid: Ember.computed.notEmpty('name'),
  tds: Ember.computed.map('phoneme_ids', function(phoneme_id) {
    return `#ph-${phoneme_id}`;
  }),
});
