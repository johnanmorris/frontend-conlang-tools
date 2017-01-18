import DS from 'ember-data';
// import Ember from 'ember';

export default DS.Model.extend({
  ipa: DS.attr('string'),
  place: DS.attr('string'),
  manner: DS.attr('string'),
  voice: DS.attr('boolean'),
  consonant: DS.attr('boolean'),
  front: DS.attr('boolean'),
  high: DS.attr('boolean'),
  syllabic: DS.attr('boolean'),
  low: DS.attr('boolean'),
  back: DS.attr('boolean'),
  tense: DS.attr('boolean'),
  languages: DS.hasMany('language')
});
