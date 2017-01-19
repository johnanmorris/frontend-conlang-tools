import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  buttonLabel: 'Save',
  phonemeIds: [],
  tds: [],
  actions: {
    buttonClicked(param){
      this.sendAction('action', param);
    }
  },

  init: function() {
    this._super(...arguments);
    var phoneIds = this.get('phonemeIds');
//    console.log(phoneIds[0]);
    if (phoneIds) {
//      console.log("Language has " + phoneIds.length + " phonemes");
      for(var i=0; i< phoneIds.length; i++) {
        this.tds.push("ph-" + phoneIds[i]);
      }
//      console.log("tds:");
//      console.log(this.tds);
    }
    console.log("init");
  },

  didInsertElement(){
    this._super(...arguments);
    console.log("didInsertElement");
    for(var i=0; i< this.tds.length; i++){
      $("#" + this.tds[i]).addClass("selected-phone");
    }
  },

  click(event) {
    var clickedID = $(event.target).attr("id");
    if (clickedID === undefined) {
      clickedID = "ph-0";
    }
    var phoneID = parseInt(clickedID.slice(3));

    if(phoneID > 0) {
      console.log("ID clicked: " + phoneID);
      $(event.target).toggleClass("selected-phone");
      if(this.get('phonemeIds').includes(phoneID)){
        this.get('phonemeIds').removeObject(phoneID);
      } else {
        this.get('phonemeIds').pushObject(phoneID);
      }
      console.log("phonemeIDS:");
      console.log(this.get('phonemeIds'));
    }
  }
});
