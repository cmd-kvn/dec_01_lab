'use strict';

// Get the element
var makeConversion = document.getElementById('form');
var displayMessage = document.getElementById('display_message');

// Add the listener
makeConversion.addEventListener('submit', handleSubmit);

// Create the handler
function handleSubmit(event) {
  event.preventDefault(); // Prevent the page from refreshing

  // Take in input
  var inputNumber = event.target.input_number.value;
  var conversionSelection = event.target.conversions.value;
  console.log('conversionSelection: ', conversionSelection);
  console.log('inputnum: ', inputNumber);
  // Handle input
  if (conversionSelection === 'inches_centimeters') {
    var conversion = convertInToCm(inputNumber);
    displayMessage.textContent = inputNumber + ' inch(es) is equal to ' + conversion + ' centimeters.';
  } else if (conversionSelection === 'centimeters_inches') {
    conversion = convertCmToIn(inputNumber);
    displayMessage.textContent = inputNumber + ' centimeter(s) is equal to ' + conversion + ' inches.';
  } else if (conversionSelection === 'ounces_milliliters') {
    conversion = convertFlOzToMl(inputNumber);
    displayMessage.textContent = inputNumber + ' fluid ounce(s) is equal to ' + conversion + ' milliliters.';
    console.log('conversion: ', conversion);
    console.log('inputNumber', inputNumber);
  } else if (conversionSelection === 'milliliters_ounces') {
    conversion = convertMlToFlOz(inputNumber);
    displayMessage.textContent = inputNumber + ' milliliter(s) is equal to ' + conversion + ' fluid ounces.';
  } else if (conversionSelection === 'miles_kilometers') {
    conversion = convertMiToKm(inputNumber);
    displayMessage.textContent = inputNumber + ' mile(s) is equal to ' + conversion + ' kilometers.';
  } else if (conversionSelection === 'kilometers_miles') {
    conversion = convertKmToMi(inputNumber);
    displayMessage.textContent = inputNumber + ' kilometer(s) is equal to ' + conversion + ' miles.';
  } else if (conversionSelection === 'pounds_kilograms') {
    conversion = convertLbToKg(inputNumber);
    displayMessage.textContent = inputNumber + ' pound(s) is equal to ' + conversion + ' kilograms.';
  } else if (conversionSelection === 'kilograms_pounds') {
    conversion = convertKgToLb(inputNumber);
    displayMessage.textContent = inputNumber + ' kilograms(s) is equal to ' + conversion + ' pounds.';
  } else if (conversionSelection === 'shit_ton') {
    displayMessage.textContent = convertEnglishShitTonToMetric(inputNumber);
  }
}

//////////////////////////////////////
// Capable of doing the following conversions:
// inches to/from centimeters
function convertInToCm (input) {
  var centimeters = 0;
  var conversionRate = 2.540;

  centimeters = input * conversionRate;

  // .toFixed(3) rounds the number object to the thousandth place
  return centimeters.toFixed(3);
  console.log('in to cm runs');
}

function convertCmToIn (input) {
  var inches = 0;
  var conversionRate = 0.394;

  inches = input * conversionRate;

  return inches.toFixed(3);
  console.log('cm to in runs');
}

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
