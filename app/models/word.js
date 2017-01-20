import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  form: DS.attr('string'),
  translation: DS.attr('string'),
  language: DS.belongsTo('language', {async: true}),
  formIsValid: Ember.computed.notEmpty('form'),
  translationIsValid: Ember.computed.notEmpty('translation'),
  wordIsValid: Ember.computed('form','translation', function(){
    return (this.get('form') !== null) && (this.get('translation') !== null);
  })
});
