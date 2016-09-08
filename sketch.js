/* The first level has a timer and when you collect 3 balls it goes to the second level.
 * On the second level if you hit one of the blocks the game is over and you have to restart the game.
 * On the first level if 30 seconds run out you go to the end screen.
 * Clicking on the restart button restarts the game.
 */


var objects; //sets up GameObjects object
var gameState; //changes screens
var timer; //counts seconds
var gameOver; //end Screen

function setup() {
  createCanvas(900,450);
  
  objects = new GameObjects(); 
  gameOver = new GameOver();
  gameState = 1; //initial game state
 
}

function draw() {
  
  timer = millis(); // counts seconds
  
  // if game state equals one display everything on the first screen
  if (gameState == 1){
  background(199,191,230); //light purple
  objects.move();
  objects.ball();
  objects.display();
  objects.time();
  objects.collected();
  objects.level1();
  
    
    fill(109, 9, 55); //maroon counter
    textSize(40); 
    textAlign(CENTER);
    
    // counts down from 30 as the millis() function goes up
    if (timer > 0 && timer < 1000){
    text("30", 437, 45);
  } else if (timer < 2000){
    text("29", 437, 45);
  } else if (timer < 3000){ 
    text("28", 437, 45);
  } else if (timer < 4000){
    text("27", 437, 45);
  } else if (timer < 5000){ 
    text("26", 437, 45);
  } else if (timer < 6000){
    text("25", 437, 45);
  }   else if (timer < 7000){ 
    text("24", 437, 45);
  } else if (timer < 8000){
    text("23", 437, 45);
  }   else if (timer < 9000){ 
    text("22", 437, 45);
  } else if (timer < 10000){
    text("21", 437, 45);
  }   else if (timer < 11000){ 
    text("20", 437, 45);
  } else if (timer < 12000){
    text("19", 437, 45);
  }   else if (timer < 13000){ 
    text("18", 437, 45);
  } else if (timer < 14000){
    text("17", 437, 45);
  } else if (timer < 15000){ 
    text("16", 437, 45);
  } else if (timer < 16000){
    text("15", 437, 45);
  }   else if (timer < 17000){ 
    text("14", 437, 45);
  } else if (timer < 18000){
    text("13", 437, 45);
  }   else if (timer < 19000){ 
    text("12", 437, 45);
  } else if (timer < 20000){
    text("11", 437, 45);
  }   else if (timer < 21000){ 
    text("10", 437, 45);
  } else if (timer < 22000){
    text("9", 437, 45);
  }   else if (timer < 23000){ 
    text("8", 437, 45);
  } else if (timer < 24000){
    text("7", 437, 45);
  }   else if (timer < 25000){ 
    text("6", 437, 45);
  } else if (timer < 26000){
    text("5", 437, 45);
  }   else if (timer < 27000){ 
    text("4", 437, 45);
  } else if (timer < 28000){
    text("3", 437, 45);
  }   else if (timer < 29000){ 
    text("2", 437, 45);
  } else if (timer < 30000){
    text("1", 437, 45);
  } else if (timer < 31000){
    gameState = 3;
  }
  }
  
  //level 2 and what to display on the second screen
  if (gameState == 2){
    
  
    background(255, 201, 13); //yellow
    objects.move();
    objects.ball();
    objects.display();
    objects.time();
    objects.collected();
    objects.level1();
    objects.colObjects();
  }
  
  //end screen
  if (gameState == 3){
    
    background(0); // 
    gameOver.display(); //display gameOver end screen
  }
}

//player object
function GameObjects(){
  

   this.x = 0; //allows object to move to the right
    this.y = 0; //allows object to move to the left
    
    //balls are placed on random locations on the screen when collected
    this.ex =  random(width - 11);
    this.ey = Math.floor(Math.random() * (height - 90) + 75);
    
    //collision objects
    this.rectx1 = Math.floor(Math.random() * 800 + 50);
    this.rectx2 = Math.floor(Math.random() * 800 + 50);
    this.recty1 = Math.floor(Math.random() * 350 + 75);
    this.recty2 = Math.floor(Math.random() * 350 + 75);
     this.rectx3 = Math.floor(Math.random() * 800 + 50);
    this.rectx4 = Math.floor(Math.random() * 800 + 50);
    this.recty3 = Math.floor(Math.random() * 350 + 75);
    this.recty4 = Math.floor(Math.random() * 350 + 75);
     this.rectx5 = Math.floor(Math.random() * 800 + 50);
    this.rectx6 = Math.floor(Math.random() * 800 + 50);
    this.recty5 = Math.floor(Math.random() * 350 + 75);
    this.recty6 = Math.floor(Math.random() * 350 + 75);
    
 
    
    this.ballNumber = 0; //collected number of balls
    this.level = 1; //starting level before increases
    
    this.cx1 = 0;
    this.cy1 = 0;
    this.cx2 = 0;
    this.cy2 = 0;
    this.cx3 = 0;
    this.cy3 = 0;
    this.cx4 = 0;
    this.cy4 = 0;
    
    this.pointx1 = 0;
    this.pointy1 = 0;
    
    //coordinates of arrows
    this.cx1 = 83;
    this.cy1 = 182;
    this.cx2 = 110;
    this.cy2 = 194;
    this.cx3 = 83;
    this.cy3 = 205;
    this.cx4 = 91;
    this.cy4 = 194;
    
    
    
     
  this.display = function() {
    
    //sets up the points and allows for tracking collision easier
    this.pointx1 = this.x + this.cx1;
    this.pointy1 = this.y + this.cy1;
    this.pointx2 = this.x + this.cx2;
    this.pointy2 = this.y + this.cy2;
    this.pointx3 = this.x + this.cx3;
    this.pointy3 = this.y + this.cy3;
    this.pointx4 = this.x + this.cx4;
    this.pointy4 = this.y + this.cy4;
    
    //arrow player
     beginShape();
     fill(255, 0, 0); //red
     vertex(this.pointx1, this.pointy1);
     vertex(this.pointx2, this.pointy2);
     vertex(this.pointx3, this.pointy3);
     vertex(this.pointx4, this.pointy4);
     endShape(CLOSE);
  }
  
  //depending on which arrow you press the object moves in that directions. The coordinates are also changed to reflect
  //a change in direction and to point up, down, left, or right.
  this.move = function(){
      
   if (keyCode === RIGHT_ARROW){
     this.x += 2;
     
    this.cx1 = 83;
    this.cy1 = 182;
    this.cx2 = 110;
    this.cy2 = 194;
    this.cx3 = 83;
    this.cy3 = 205;
    this.cx4 = 91;
    this.cy4 = 194;
  
   } else if (keyCode === LEFT_ARROW){
     this.x -= 2;
  
     this.cx1 = 108;
     this.cy1 = 180;
     this.cx2 = 80;
     this.cy2 = 194;
     this.cx3 = 108;
     this.cy3 = 204;
     this.cx4 = 98;
     this.cy4 = 192;
  
  
   } else if (keyCode === DOWN_ARROW){
     this.y += 2;
          
     this.cx1 = 82;
     this.cy1 = 180;
     this.cx2 = 94;
     this.cy2 = 206;
     this.cx3 = 106;
     this.cy3 = 180;
     this.cx4 = 94;
     this.cy4 = 189;
     
     
     
     
  
   } else if (keyCode === UP_ARROW){
     this.y -= 2;
      
     this.cx1 = 84;
     this.cy1 = 206;
     this.cx2 = 95;
     this.cy2 = 180;
     this.cx3 = 107;
     this.cy3 = 206;
     this.cx4 = 96;
     this.cy4 = 198;
     
   }
   
  }
  
  //makes the ball appear and move to another location when player overlaps it.
  this.ball = function() {
    
    fill(58, 67, 214);
    ellipse(this.ex, this.ey, 22, 22); //sets ball at random location and the width and height is 22
    
    //if the arrow collides move the ball to a random location and add another ball to the collected number
    if (this.pointx2 >= this.ex - 11 && this.pointy2 <= this.ey + 11 && this.pointx2 <= this.ex + 11 && this.pointy2 >= this.ey -11){
      
      this.ex = random(width - 11);
      this.ey = Math.floor(Math.random() * (height - 90) + 75); //avoids text on the top of screen with +75
      this.ballNumber ++;
     
    }
    
     this.collected = function() {
     fill(0);
     textSize(20);
     text("Collected: " + this.ballNumber, 10, 33); //increases with ball number variable
     
     //if the ballNumber is 3 change the gameState and level
     if (this.ballNumber == 3){
       //clear();
       gameState = 2;
       this.level ++;
       this.ballNumber = 0;
     }
     //if this ballNumber equals 10
     //run function that changes screen
   }
   
    //tracks level
     this.level1 = function() {
       
     fill(0);
     textSize(20);
     
   text("Level: " + this.level, 822, 30);
    }
  }
     //Collision Objects
     this.colObjects = function() {
       fill(0);
       rect(this.rectx1, this.recty1, 30, 100);
       rect(this.rectx2, this.recty2, 30, 100);
       rect(this.rectx3, this.recty3, 30, 100);
       rect(this.rectx4, this.recty4, 30, 100);
       rect(this.rectx5, this.recty5, 30, 100);
       rect(this.rectx6, this.recty6, 30, 100);
      
      //if the arrow collides with any of these points go to the end screen
         if (this.pointx2 > this.rectx1 && this.pointx2 < this.rectx1 + 30 && this.pointy2 > this.recty1 && this.pointy2 < this.recty1 + 100){
           gameState = 3;
         }
          else if (this.pointx2 > this.rectx2 && this.pointx2 < this.rectx2 + 30 && this.pointy2 > this.recty2 && this.pointy2 < this.recty2 + 100){
             gameState = 3;
         }
           else if (this.pointx2 > this.rectx3 && this.pointx2 < this.rectx3 + 30 && this.pointy2 > this.recty3 && this.pointy2 < this.recty3 + 100){
              gameState = 3;
         }
             else if (this.pointx2 > this.rectx4 && this.pointx2 < this.rectx4 + 30 && this.pointy2 > this.recty4 && this.pointy2 < this.recty4 + 100){
                gameState = 3;
         }
              else if (this.pointx2 > this.rectx5 && this.pointx2 < this.rectx5 + 30 && this.pointy2 > this.recty5 && this.pointy2 < this.recty5 + 100){
                 gameState = 3;
         }
                else if (this.pointx2 > this.rectx6 && this.pointx2 < this.rectx6 + 30 && this.pointy2 > this.recty6 && this.pointy2 < this.recty6 + 100){
         gameState = 3;
      //ball equals random location
     
    }
               
             
         
     }
     
     
   //possibly use later   
   this.time = function() {   
     

}

}

//displays "Game Over" text and the rectangle with "Restart" in it. If the rectangle is clicked on go back to the first state of the game.
function GameOver() {
  
  this.display = function() {
    
    this.mouseX = mouseX;
    this.mouseY = mouseY;
    
     fill(255);
     textSize(80);
     textAlign(CENTER);
     
     text("Game Over", width/2, height/2);
     rect(width/2 - 70, height * 0.66, 140, 40);
     //does not affect text values outside of push and pop.
     push(); 
     fill(125); //gray
     textSize(34); 
     text("Restart", width/2, height * 0.74)
     pop();
     
     //if the mouseIsPressed and within boundaries then change the gameState.
     if (mouseIsPressed && this.mouseX > width/2 - 70 && this.mouseX < width/2 + 70 && this.mouseY > height * 0.66 && this.mouseY < height * 0.66 + 40){
           gameState = 1;
         }
  }
}


//uses milliseconds to have a timer up top that counts down from 30.
