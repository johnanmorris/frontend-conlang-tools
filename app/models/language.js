import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  phonemes: DS.attr(),

  isValid: Ember.computed.notEmpty('name'),
  phonemeIds: Ember.computed('phonemes', function(){
    var idArr = [];
    var phonemes = this.get('phonemes');
    for (var i = 0; i < phonemes.length; i++){
      idArr.push(phonemes[i].id);
    }
    return idArr;
  })
});
