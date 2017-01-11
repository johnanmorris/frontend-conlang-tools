import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  click(event) {
    // var clicked = $(event.target).("td");
    var clickedID = $(event.target).attr("id");
    if (clickedID === undefined) {
      clickedID = "ph-0";
    }
    var phoneID = parseInt(clickedID.slice(3));
    console.log($(event.target));
    console.log("clickedID: " + clickedID);
    console.log("ID to add to lang: " + phoneID);
    if(phoneID > 0) {
      $(event.target).toggleClass("selected-phone");
    }
  }
});
