'use strict';

// Capable of doing the following conversions:
// inches to/from centimeters
function convertInToCm (input) {
  var centimeters = 0;
  var conversionRate = 2.540;

  centimeters = input * conversionRate;

  // .toFixed(3) rounds the number object to the thousandth place
  return centimeters.toFixed(3);
}
console.log('test convert 3 in to cm:' + convertInToCm(3));

function convertCmToIn (input) {
  var inches = 0;
  var conversionRate = 0.394;

  inches = input * conversionRate;

  return inches.toFixed(3);
}
console.log('test convert 4 cm to in: ' + convertCmToIn(4));

// fluid ounces to/from milliliters
function convertFlOzToMl (input) {
  var milliliters = 0;
  var conversionRate = 29.574;

  milliliters = input * conversionRate;

  return milliliters.toFixed(3);
}

function convertMlToFlOz (input) {
  var fluidOunces = 0;
  var conversionRate = 0.034;

  fluidOunces = input * conversionRate;

  return fluidOunces.toFixed(3);
}

// miles to/from kilometers
function convertMiToKm (input) {
  var kilometers = 0;
  var conversionRate = 1.609;

  kilometers = input * conversionRate;

  return kilometers.toFixed(3);
}

function convertKmToMi (input) {
  var miles = 0;
  var conversionRate = 0.621;

  miles = input * conversionRate;

  return miles.toFixed(3);
}

// pounds to/from kilograms
function convertLbToKg (input) {
  var kilograms = 0;
  var conversionRate = 0.454;

  kilograms = input * conversionRate;

  return kilograms.toFixed(3);
}

function convertKgToLb (input) {
  var pounds = 0;
  var conversionRate = 2.205;

  pounds = input * conversionRate;

  return pounds.toFixed(3);
}

// English shit-ton to metric shit-ton
function convertEnglishShitTonToMetric (input) {
  return 'Are you that full of shit?';
}
