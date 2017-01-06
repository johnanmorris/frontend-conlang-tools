import Ember from 'ember';

let languages = [
  {
    id: 1,
    name: "Vafuna",
    description: "some weird language"
  },
  {
    id: 2,
    name: "Nkalo",
    description: "another weird language"
  },
  {
    id: 3,
    name: "Kelen",
    description: "this language doesn't verb"
  },


];

export default Ember.Route.extend({
  model() {
    return languages;
  }
});
