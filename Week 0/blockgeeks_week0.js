//Quincy Arthur
// October 28th, 2018

//Task 1: Repeating Numbers
var repeatNumbers = function(data){
    var output = '';
    var numItems = 0
    data.forEach(function(element) {
       numItems++;
       for(var x = 1;x <= element[1]; x++){
           output += element[0];
       }
       if (numItems < data.length ){
        output+=','
       }
    });
    return output;
};


//Task2:Conditional Sums
var conditionalSum = function(values, condition) {
    var output = 0;
    values.forEach(function(element){
        if(condition === "even"){
            if(element % 2 == 0){
                output+= element;
            }
        }
        else if (condition === "odd"){
            if(element % 2 != 0){
                output+= element;
            }
        }
    })     
    return output;
};

//Task3:Talking Calendar
var talkingCalendar = function(date) {
    var tempDate = new Date(date);
    var options = {year: 'numeric', month: 'long', day: 'numeric' };
    return tempDate.toLocaleDateString("en-US", options)
  };

//Task4:Challenge Calculator
var calculateChange = function(total, cash) {
   var dollars = Math.floor((cash - total)/100);
   var cents = (cash - total) - Math.floor((cash - total)/100) * 100;
   var output = {};

   if(Math.floor(dollars/20) > 0){
        output.twentyDollar = Math.floor(dollars/20);
        dollars-= (20 * Math.floor(dollars/20));
   }
   if(Math.floor(dollars/10) > 0){
    output.tenDollar = Math.floor(dollars/10);
    dollars-= (10 * Math.floor(dollars/10));
   }
   if(Math.floor(dollars/5) > 0){
    output.fiveDollar = Math.floor(dollars/5);
    dollars-= (5 * Math.floor(dollars/5));
   }
   if(Math.floor(dollars/2) > 0){
    output.twoDollar = Math.floor(dollars/2);
    dollars-= (2 * Math.floor(dollars/2));
   }
   if(Math.floor(dollars/1) > 0){
    output.oneDollar = Math.floor(dollars/1);
    dollars-= (1 * Math.floor(dollars/1));
   }


   if(Math.floor(cents/25) > 0){
    output.quarter = Math.floor(cents/25);
    cents-= (25 * Math.floor(cents/25));
   }
   if(Math.floor(cents/10) > 0){
    output.dime = Math.floor(cents/10);
    cents-= (10 * Math.floor(cents/10));
   }
   if(Math.floor(cents/5) > 0){
    output.nickel = Math.floor(cents/5);
    cents-= (5 * Math.floor(cents/5));
   }
   if(Math.floor(cents/1) > 0){
    output.penny = Math.floor(cents/1);
    cents-= (1 * Math.floor(cents/1));
   }

   return output;
  };