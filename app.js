// OOP Racing Game example boilerplate code
var winnerDeclared = false;

function Game() {
  this.playerOne = new Player("one");
  this.playerTwo = new Player("two");
  //this.winnerDeclared = false;

}

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
  //var playerOne = new Player("orange");
  //var playerTwo = new Player("red");
  var _this = this;

    $(window).keydown(function(e){  
      var keyCode = e.keyCode;
      
      //PLAYER ONE 
      if(keyCode === 65) //KEY A
      {
        _this.playerOne.moveLeft();       
      } 
      else if(keyCode === 83) //KEY S
      {
        //console.log(_this.playerOne);
        _this.playerOne.moveRight();
      }
      else if(keyCode === 87) //KEY W
      {
        _this.playerOne.moveUp();        
      }   
      else if(keyCode === 90)
      {
        _this.playerOne.moveDown();
      }   

      //PLAYER TWO
      if(keyCode === 74) //KEY J
      {
        _this.playerTwo.moveLeft();
      } 
      else if(keyCode === 75) //KEY K
      {
        _this.playerTwo.moveRight();
      }
      else if(keyCode ===73)  //KEY I
      {
        _this.playerTwo.moveUp();
      }
      else if(keyCode === 77) //KEY M
      {
        _this.playerTwo.moveDown();
      }
    });

    $("#restart").click(function(){
      //alert("you clicked restart");
      //RESET PLAYER ONE
      var currentPosition = cellSelector(_this.playerOne.rowPosition, _this.playerOne.columnPosition);
      $(currentPosition).html('')
      _this.playerOne.rowPosition = 1;
      _this.playerOne.columnPosition = 0;
      currentPosition = cellSelector(_this.playerOne.rowPosition, _this.playerOne.columnPosition);
      //console.log("new position: " + currentPosition);
      $(currentPosition).html('<div class="racer1"></div>')

      //RESET PLAYER TWO
      var currentPosition = cellSelector(_this.playerTwo.rowPosition, _this.playerTwo.columnPosition);
      $(currentPosition).html('')
      _this.playerTwo.rowPosition = 4; //counter to keep track of the row position
      _this.playerTwo.columnPosition = 0; //counter to keep track of the column position
      currentPosition = cellSelector(_this.playerTwo.rowPosition, _this.playerTwo.columnPosition);
      //console.log("new position: " + currentPosition);
      $(currentPosition).html('<div class="racer2"></div>')

      //RESET WINNER
      $("#winner").html('')
      winnerDeclared = false;
    });
  
    $("#red").click(function(){
      $(".racer1").css("background-color", "red");
    });
    $("#orange").click(function(){
      $(".racer1").css("background-color", "orange");
    });
    $("#yellow").click(function(){
      $(".racer1").css("background-color", "yellow");
    });
    $("#green").click(function(){
      $(".racer1").css("background-color", "green");
    });
    $("#blue").click(function(){
      $(".racer1").css("background-color", "blue");
    });
    $("#violet").click(function(){
      $(".racer1").css("background-color", "purple");
    });

    $("#red_").click(function(){
      $(".racer2").css("background-color", "red");
    });
    $("#orange_").click(function(){
      $(".racer2").css("background-color", "orange");
    });
    $("#yellow_").click(function(){
      $(".racer2").css("background-color", "yellow");
    });
    $("#green_").click(function(){
      $(".racer2").css("background-color", "green");
    });
    $("#blue_").click(function(){
      $(".racer2").css("background-color", "blue");
    });
    $("#violet_").click(function(){
      $(".racer2").css("background-color", "purple");
    });

};


// A starter Player constructor.
function Player(team) {
  this.team = team;
  if(team === "one")
  {
    this.rowPosition = 1; //counter to keep track of the row position
    this.columnPosition = 0; //counter to keep track of the column position
    var currentPosition = cellSelector(this.rowPosition, this.columnPosition);
    $(currentPosition).html('<div class="racer1"></div>')

  }
  else if(team === "two")
  {
    this.rowPosition = 4; //counter to keep track of the row position
    this.columnPosition = 0; //counter to keep track of the column position
    var currentPosition = cellSelector(this.rowPosition, this.columnPosition);
    $(currentPosition).html('<div class="racer2"></div>')
  }
  

};


//PLAYER MOVES RIGHT 
Player.prototype.moveRight = function() {
  //console.log("begin to move right!");
  //If the player is reaching out of bounds, they will not move
  if((this.columnPosition >= 0) && (this.columnPosition < 11))
  {
    //REMOVE PREVIOUS POSITION
    var currentPosition = cellSelector(this.rowPosition, this.columnPosition); //string that contains the position id selector
    //console.log("current position: " + currentPosition);
    var currentRow = rowSelector(this.rowPosition); //string that contains the row selector
    //console.log("current row: " + currentRow);
    var currentCell = $(currentRow).find(currentPosition); //returns the DOM that we will be removing the player from
    //console.log("current cell: " + currentCell);
    //console.log("current cell's html: " + currentCell.html());
    currentCell.html('')

    //CHANGE COUNTER TO MOVE ONE CELL TO THE RIGHT
    this.columnPosition = this.columnPosition + 1;  //moves the counter to the right one cell
    //console.log("current column: " + this.columnPosition);
    currentPosition = cellSelector(this.rowPosition, this.columnPosition); //string that contains the selector for the new position
    //console.log("current position: " + currentPosition);

    //CHANGE POSITION TO MOVE ONE CELL TO THE RIGHT
    if(this.team === "one")
    {
      $(currentPosition).html('<div class="racer1"></div>')
    }
    else
    {
      $(currentPosition).html('<div class="racer2"></div>')
    }

  }
  else if(this.columnPosition === 11)
  {
    currentPosition = cellSelector(this.rowPosition, this.columnPosition); 
    //console.log("current position: " + currentPosition);
    if(this.team === "one")
    {
      $(currentPosition).html('<div class="racer1"></div>')
      //console.log("winner declared's value: " + winnerDeclared);
      if(winnerDeclared === false)
      {
        //alert("Winner is Player One");
        $("#winner").html('Winner is Player One!!!')
        winnerDeclared = true;
      }

    }
    else if(this.team === "two")
    {
      $(currentPosition).html('<div class="racer2"></div>')
      if(winnerDeclared === false)
      {
        $("#winner").html('Winner is Player Two!!!')
        winnerDeclared = true;
      }
    }
  }
  
};

//PLAYER MOVES LEFT
Player.prototype.moveLeft = function() {

  if((this.columnPosition > 0) && (this.columnPosition <= 11))
  {
    //REMOVE PREVIOUS POSITION
    var currentPosition = cellSelector(this.rowPosition, this.columnPosition); //string that contains the position id selector
    //console.log("current position: " + currentPosition);
    var currentRow = rowSelector(this.rowPosition); //string that contains the row selector
    //console.log("current row: " + currentRow);
    var currentCell = $(currentRow).find(currentPosition); //returns the DOM that we will be removing the player from
    //console.log("current cell: " + currentCell);
    //console.log("current cell's html: " + currentCell.html());
    currentCell.html('')

    //CHANGE COUNTER TO MOVE ONE CELL TO THE LEFT
    this.columnPosition = this.columnPosition - 1;  //moves the counter to the right one cell
    //console.log("current column: " + this.columnPosition);
    currentPosition = cellSelector(this.rowPosition, this.columnPosition); //string that contains the selector for the new position
    //console.log("current position: " + currentPosition);

    //CHANGE POSITION TO MOVE ONE CELL TO THE RIGHT
    //currentCell = $(currentPosition);
    //console.log("current position's html before adding racer:  " + $(currentPosition).html());
    if(this.team === "one")
    {
      $(currentPosition).html('<div class="racer1"></div>')
    }
    else
    {
      $(currentPosition).html('<div class="racer2"></div>')
    }

  }
  else if(this.columnPosition === 0)
  {
    //console.log("reached out of bounds!");
    currentPosition = cellSelector(this.rowPosition, this.columnPosition); 
    //console.log("current position: " + currentPosition);
    if(this.team === "one")
    {
      $(currentPosition).html('<div class="racer1"></div>')
    }
    else
    {
      $(currentPosition).html('<div class="racer2"></div>')
    }
  }
}

//PLAYER MOVES UP
Player.prototype.moveUp = function() {

  if((this.rowPosition > 0) && (this.rowPosition <= 5))
  {
    //REMOVE PREVIOUS POSITION
    var currentPosition = cellSelector(this.rowPosition, this.columnPosition); //string that contains the position id selector
    //console.log("current position: " + currentPosition);
    var currentRow = rowSelector(this.rowPosition); //string that contains the row selector
    //console.log("current row: " + currentRow);
    var currentCell = $(currentRow).find(currentPosition); //returns the DOM that we will be removing the player from
    //console.log("current cell: " + currentCell);
    //console.log("current cell's html: " + currentCell.html());
    currentCell.html('')

    //CHANGE COUNTER TO MOVE ONE CELL TO THE RIGHT
    this.rowPosition = this.rowPosition - 1;  //moves the counter to the right one cell
    //console.log("current column: " + this.columnPosition);
    currentPosition = cellSelector(this.rowPosition, this.columnPosition); //string that contains the selector for the new position
    //console.log("current position: " + currentPosition);

    //CHANGE POSITION TO MOVE ONE CELL TO THE RIGHT
    //currentCell = $(currentPosition);
    //console.log("current position's html before adding racer:  " + $(currentPosition).html());
    if(this.team === "one")
    {
      $(currentPosition).html('<div class="racer1"></div>')
    }
    else
    {
      $(currentPosition).html('<div class="racer2"></div>')
    }

  }
  else if(this.rowPosition === 0)
  {
    currentPosition = cellSelector(this.rowPosition, this.columnPosition); 
    //console.log("current position: " + currentPosition);
    if(this.team === "one")
    {
      $(currentPosition).html('<div class="racer1"></div>')
    }
    else
    {
      $(currentPosition).html('<div class="racer2"></div>')
    }
  }
}

//PLAYER MOVES DOWN
Player.prototype.moveDown = function() {

    if((this.rowPosition >= 0) && (this.rowPosition < 5))
  {
    //REMOVE PREVIOUS POSITION
    var currentPosition = cellSelector(this.rowPosition, this.columnPosition); //string that contains the position id selector
    //console.log("current position: " + currentPosition);
    var currentRow = rowSelector(this.rowPosition); //string that contains the row selector
    //console.log("current row: " + currentRow);
    var currentCell = $(currentRow).find(currentPosition); //returns the DOM that we will be removing the player from
    //console.log("current cell: " + currentCell);
    //console.log("current cell's html: " + currentCell.html());
    currentCell.html('')

    //CHANGE COUNTER TO MOVE ONE CELL TO THE RIGHT
    this.rowPosition = this.rowPosition + 1;  //moves the counter to the right one cell
    //console.log("current column: " + this.columnPosition);
    currentPosition = cellSelector(this.rowPosition, this.columnPosition); //string that contains the selector for the new position
    //console.log("current position: " + currentPosition);

    //CHANGE POSITION TO MOVE ONE CELL TO THE RIGHT
    //console.log("current position's html before adding racer:  " + $(currentPosition).html());
    if(this.team === "one")
    {
      $(currentPosition).html('<div class="racer1"></div>')
    }
    else
    {
      $(currentPosition).html('<div class="racer2"></div>')
    }

  }
  else if(this.rowPosition === 5)
  {
    currentPosition = cellSelector(this.rowPosition, this.columnPosition); 
    //console.log("current position: " + currentPosition);
    if(this.team === "one")
    {
      $(currentPosition).html('<div class="racer1"></div>')
    }
    else
    {
      $(currentPosition).html('<div class="racer2"></div>')
    }
  }

}

/* HELPER METHODS! */
/*FUNCTION THAT RETURNS A STRING THAT IS THE SELECTOR FOR A SPECIFIC CELL */
function cellSelector(row, column)
{
  return "#r" + row + "c" + column;
}

/*FUNCTION THAT RETURNS A STRING THAT IS THE SELECTOR FOR A SPECIFIC ROW */
function rowSelector(row)
{
  return "tr#row" + row;
}


// A starter Track constructor.
function Track() {
  
};

// Start the game!
$(document).ready(function(){
  var game = new Game();
  game.init();

});























