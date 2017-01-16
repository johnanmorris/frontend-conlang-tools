import Ember from 'ember';
import DS from 'ember-data';

const { String: { pluralize, underscore } } = Ember;

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000',

  pathForType(type) {
    return pluralize(underscore(type));
  }
});
