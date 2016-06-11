import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import * as five from 'johnny-five';
// import * as serialport from 'browser-serialport';

import './main.html';


// Ardatas = new Mongo.Collection(null);

Meteor.subscribe('board.button');

// Template.hello.events({
//   'click .blink'(event) {
//     Meteor.call('led.blink');
//     //Meteor.call('lcd.write',"fsfsdfdfsfsdfsj");
//   },
//   'click .off'(event) {
//     Meteor.call('led.off');
//   },
//   'keyup input' ( event ) {
//     let value = event.target.value;
//     Meteor.call('lcd.write',value.toString());
//   }
// });

Template.hello.onCreated(function() {
  this.subscribe('board.button');
  // console.log(this.button);
  this.status = new ReactiveVar("hidden");
  // console.log(Ardatas.find({_id:'pressed420'}));
  // this.event = Ardatas.find({_id:'pressed420'}).event;
  this.autorun(() => {
    let button = this.subscribe('board.button');
    if(button.ready()){
      console.log("doing");
      Template.instance().status.set(Ardatas.find({"_id":"pressed420"}).event);
      console.log(Template.instance().status.get());
    }
  });
});

// Template.hello.helpers({
//   buttonStatus: function(){
//     console.log(Template.instance().status.get());
//     return Template.instance().status.get();
//   },
// });
