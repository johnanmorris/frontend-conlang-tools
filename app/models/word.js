import DS from 'ember-data';

export default DS.Model.extend({
  form: DS.attr('string'),
  translation: DS.attr('string'),
  language: DS.belongsTo('language', {async: true})
});
