import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteWord(word){
      let confirmation = confirm("Are you sure? this action is irreversible");
      if(confirmation){
        word.deleteRecord();
        word.save();
      }
    }
  }
});
