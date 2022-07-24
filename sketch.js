var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz(); //creamos un objeto de la clase quiz
  
  //llamamos funciones
  quiz.getState(); 
  quiz.start();
}


function draw(){
  background("pink");

  //el juego empieza si hay dos jugadores 
  if(contestantCount === 2){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
