import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  buttonLabel: 'Save',
  phonemeIds: [],
  actions: {
    buttonClicked(param){
      this.sendAction('action', param);
    }
  },

  click(event) {
    // var clicked = $(event.target).("td");
    var clickedID = $(event.target).attr("id");
    if (clickedID === undefined) {
      clickedID = "ph-0";
    }
    var phoneID = parseInt(clickedID.slice(3));

    if(phoneID > 0) {
      console.log("clickedID: " + clickedID);
      console.log("ID to add to lang: " + phoneID);
      $(event.target).toggleClass("selected-phone");
      if(this.get('phonemeIds').includes(phoneID)) {
        this.get('phonemeIds').removeObject(phoneID);
      } else{
        this.get('phonemeIds').pushObject(phoneID);
      }
    }
  }
});
