// Constructor
function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  let timers = this;
  this.intervalId = setInterval(function() {
    timers.currentTime += 1;
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  let timers = this;
  let minutes = Math.floor(timers.currentTime / 60);
  return minutes;
};

Chronometer.prototype.setSeconds = function() {
  let timers = this;
  let seconds = timers.currentTime % 60;
  return seconds;
};

Chronometer.prototype.twoDigitsNumber = function(number) {
  let stringNumber = number.toString();
  if (stringNumber.length === 1) {
    return `0${stringNumber}`;
  }
  return stringNumber;
};

Chronometer.prototype.setTime = function() {
  this.minutes = this.twoDigitsNumber(this.setMinutes());
  this.seconds = this.twoDigitsNumber(this.setSeconds());
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function() {
  let timers = this;
  clearInterval(timers.intervalId);
};

Chronometer.prototype.resetClick = function() {
  let timers = this;
  timers.currentTime = 0;
};

// Chronometer.prototype.splitClick = function () {

// };
