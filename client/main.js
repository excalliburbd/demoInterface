import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './main.html';

Template.hello.events({
  'click .blink'(event) {
    Meteor.call('led.blink');
    Meteor.call('lcd.write',"fsfsdfdfsfsdfsj");
  },
  'click .off'(event) {
    Meteor.call('led.off');
  },
  'keyup input' ( event ) {
    let value = event.target.value;
    Meteor.call('lcd.write',value.toString());
  }
});
