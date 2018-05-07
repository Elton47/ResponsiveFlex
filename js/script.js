var direction = {
  up: false,
  right: false,
  bottom: false,
  left: false
};
$(document).ready(function() {
  var track = $('.driving-game-wrapper');
  var car = $('.car-wrapper');
  function move() {
    if(direction.up && car.position().top > 0)
      car.css("top", (car.position().top - 1) + "px");
    if(direction.right && car.position().left < track.width() - car.width())
      car.css("left", (car.position().left + 1) + "px");
    if(direction.down && car.position().top < track.height() - car.height())
      car.css("top", (car.position().top + 1) + "px");
    if(direction.left && car.position().left > 0)
      car.css("left", (car.position().left - 1) + "px");
  }
  setInterval(move, 1);
});
function toggleDrivingGame() {
  var gameWrapper = $('.driving-game-wrapper')[0];
  if(!gameWrapper.classList.contains('hidden')) {
    gameWrapper.classList.add('hidden');
    $(document).off('keydown', moveCar);
    $(document).off('keyup', stopCar);
  }
  else {
    gameWrapper.classList.remove('hidden');
    $(document).on('keydown', moveCar);
    $(document).on('keyup', stopCar);
  }
}
function moveCar(e) {
  var kc = e.keyCode;
  e.preventDefault();
  if(kc === 87 || kc === 38) direction.up = true;
  if(kc === 68 || kc === 39) direction.right = true;
  if(kc === 83 || kc === 40) direction.down = true;
  if(kc === 65 || kc === 37) direction.left = true;
}
function stopCar(e) {
  var kc = e.keyCode;
  e.preventDefault();
  if(kc === 87 || kc === 38) direction.up = false;
  if(kc === 68 || kc === 39) direction.right = false;
  if(kc === 83 || kc === 40) direction.down = false;
  if(kc === 65 || kc === 37) direction.left = false;
}