let doorImage1 = document.querySelector('#door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg'
let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let numClosedDoors = 3;
let openDoor1 = '';
let openDoor2 = '';
let openDoor3 = '';
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let startButton = document.getElementById('start');

function isBot(door){
  if(door.src===botDoorPath){
    return true;
  }else{
    return false;
  }
}

function isClicked(door){
  if(door.src===closedDoorPath){
    return false;
  } else{
    return true;
  }
}

function playDoor(){
  numClosedDoors--;
  if(numClosedDoors===0){
    gameOver('win');
  }else if(isBot(door)){
    gameOver();
  }
}

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if(choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath
    openDoor3 = beachDoorPath;
  }else if(choreDoor === 2){
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorpath;
  }
}

doorImage1.onclick = () => {
 if(!isClicked(doorImage1)){doorImage1.src = openDoor1}
}
playDoor();
doorImage2.onclick = () => {
  if(!isClicked(doorImage2)){doorImage2.src = openDoor2}
}
playDoor();
doorImage3.onclick = () => {
  if(!isClicked(doorImage3)){doorImage3.src = openDoor3}
}
playDoor();

function gameOver(status){
  if(status==='win'){
    startButton.innerHTML = 'You win! Play Again?';
  }
}
randomChoreDoorGenerator();