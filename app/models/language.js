import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  phonemes: DS.attr(),
  phoneme_ids: DS.attr(),
  words: DS.hasMany('word'),
  nonDeletedWords: Ember.computed.filterBy('words', 'isDeleted', false),
  isValid: Ember.computed.notEmpty('name'),

  consonants: Ember.computed.filterBy('phonemes', 'syllabic', false),
  vowels: Ember.computed.filterBy('phonemes', 'syllabic', true),

  plosives: Ember.computed.filterBy('consonants', 'manner', 'plosive'),
  nasals: Ember.computed.filterBy('consonants', 'manner', 'nasal'),
  trills: Ember.computed.filterBy('consonants', 'manner', 'trill'),
  taps: Ember.computed.filterBy('consonants', 'manner', 'tap'),
  fricatives: Ember.computed.filterBy('consonants', 'manner', 'fricative'),
  lateralFricatives: Ember.computed.filterBy('consonants', 'manner', 'lateral fricative'),
  approximants: Ember.computed.filterBy('consonants', 'manner', 'approximant'),
  lateralApproximants: Ember.computed.filterBy('consonants', 'manner', 'lateral approximant'),
  affricates: Ember.computed.filterBy('consonants', 'manner', 'affricate'),
  laterals: Ember.computed('lateralFricatives','lateralApproximants', function(){
    var lats = [];
    var fric = this.get('lateralFricatives');
    var approx = this.get('lateralApproximants');
    for(var i = 0; i < fric.length; i++) {
      lats.push(fric[i]);
    }
    for (var j= 0; j < approx.length; j++) {
      lats.push(approx[j]);
    }
    return lats;
  }),

  high: Ember.computed('vowels', function(){
    var hi = [];
    var vowels = this.get('vowels');
    for(var i=0; i< vowels.length; i++){
      if(vowels[i].high && !(vowels[i].low)) {
        hi.push(vowels[i]);
      }
    }
    return hi;
  }),

  mid: Ember.computed('vowels', function(){
    var mid = [];
    var vowels = this.get('vowels');
    for(var i=0; i< vowels.length; i++){
      if(!(vowels[i].high) && !(vowels[i].low)) {
        mid.push(vowels[i]);
      }
    }
    return mid;
  }),

  low: Ember.computed('vowels', function(){
    var lo = [];
    var vowels = this.get('vowels');
    for(var i=0; i< vowels.length; i++){
      if(!(vowels[i].high) && vowels[i].low) {
        lo.push(vowels[i]);
      }
    }
    return lo;
  }),

});
