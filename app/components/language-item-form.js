import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  store: Ember.inject.service(),
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
    // var store = this.get('store');
    // var language = store.peekRecord('language', this.get('item.id'));
    // var phonemes = language.get('phonemes');
    var clickedID = $(event.target).attr("id");
    if (clickedID === undefined) {
      clickedID = "ph-0";
    }
    var phoneID = parseInt(clickedID.slice(3));

    if(phoneID > 0) {
      // var phone = store.findRecord('phoneme', phoneID);
      console.log("ID clicked: " + phoneID);
      $(event.target).toggleClass("selected-phone");
      if(this.get('phonemeIds').includes(phoneID)){
        this.get('phonemeIds').removeObject(phoneID);
      } else {
        this.get('phonemeIds').pushObject(phoneID);
      }
      console.log("phonemeIDS:");
      console.log(this.get('phonemeIds'));
      // if(this.get('phonemeIds').includes(phoneID)){
      //   console.log("remove!");
      //   this.get('item.phonemeIds').removeObject(phoneID);
      //
      //   // language.get('phonemes').removeObject(phone);
      // } else {
      //   // this.get('phonemeIds').pushObject(phoneID);
      //   console.log("add!");
      //   // language.get("phonemes").pushObject(phone);
      // }
      // // if(phonemes.includes(phone)) {
      // //   console.log("remove!");
      // //   language.get('phonemes').removeObject(phone);
      // // } else{
      // //   console.log("add!");
      // //   language.get('phonemes').pushObject(phone);
      // // }
    }
  }
});
