import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import * as five from 'johnny-five';


//Ardatas = new Mongo.Collection("Ardatas");


Meteor.startup(() => {
    board = new five.Board();
    board.on("ready", function() {
      // Create a new `button` hardware instance.
      button = new five.Button(2);
    });
});

Meteor.publish('board.button', function() {

  let self = this;
  // console.log(button.on);
  board.on("ready", function() {
    button.on("hold", function() {
      console.log( "Button held" );
    });
    button.on("press", function() {
      console.log(button.on);
      self.added('ardatas', 'pressed420', {event:"pressed"});
      self.ready();
      console.log( "Button pressed");
    });
    button.on("release", function() {
      console.log( "Button released" );
    });
  });
});

/*Meteor.startup(() => {
    board = new JohnnyFive.Board();

    board.on('error', function (error) {
        console.error('Johnny Five Error', error);
    });
      led = new JohnnyFive.Led(13);

});
Meteor.methods({
    'led.blink'(){
        led.blink(500);
    },
    'led.toggle'(){
      led.toggle();
    }
});*/

/*Meteor.startup(() => {
    board = new five.Board();

    board.on("ready", function() {

      lcd = new five.LCD({
        // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
        // Arduino pin # 7    8   9   10  11  12
        pins: [7, 8, 9, 10, 11, 12],
        backlight: 6,
        rows: 2,
        cols: 12
        // Options:
        // bitMode: 4 or 8, defaults to 4
        // lines: number of lines, defaults to 2
        // dots: matrix dimensions, defaults to "5x8"
      });
      // Tell the LCD you will use these characters:
      lcd.useChar("check");
      lcd.useChar("heart");
      lcd.useChar("duck");
      //Line 1: Hi rmurphey & hgstrp!
      lcd.clear().print("rmurphey & hgstrp!");
      lcd.cursor(1, 0);

      //Line 2: I <3 johnny-five
      //cd.print("I").write(7).print(" johnny-five");
      // can now be written as:
      lcd.print("I :heart: johnny-five");
    //this.wait(3000, function() {
    //    lcd.clear().cursor(0, 0).print(":heart: 2 :duck: :)");
    //  });
      this.repl.inject({
        lcd: lcd
      });
    });
})*/

/*Meteor.methods({
  'lcd.write'(message){
    if(message.length <= 16){
      lcd.cursor(0, 0);
      lcd.clear().print(message);
    }else{
      lcd.cursor(0, 0);
      lcd.clear();
      let msg = message.slice(0,16);
      lcd.print(msg);
      lcd.cursor(1, 0);
      lcd.print(message.slice(16));
    }
  }
});*/
