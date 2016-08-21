/** 
 @module Battery
 */
var Battery = function() {
  'use strict';
  
  var self = this;
  
  this._elements = {};
  this._elements.battery = void(0);
  this._elements.percentage = void(0);
  
  this._level = 0;
  this._charging = false;
  
  /** Called when battery level changes */
  this._update = function _update(data) {
    this._level = Math.floor(data.level * 100);;
    this._isCharging = data.charging;
    
    this._elements.battery.className = 'charge-' + this._level;
    this._elements.percentage.innerText = this._level + '%';
    
    // Doesn't need to be reset because class list is reset above
    if(this._isCharging) {
      this._elements.battery.classList.add('is-charging');
    }
  };
  
  /** Called to initialize module */
  this._init = function _init() {
    this._elements.battery = document.getElementById('battery');
    this._elements.percentage = document.getElementById('battery-percentage');
    
    navigator.getBattery().then(function(battery) {
      battery.addEventListener('chargingchange', function(e) {
        self._update(battery);
      });
      battery.addEventListener('levelchange', function(e) {
        self._update(battery);
      });
      self._update(battery);
    });
  };
  
  // --- Implicit constructor
  this._init();
  
  return {};
};

// --- Kick off
var myBattery = new Battery();
