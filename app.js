// OOP Racing Game example boilerplate code

function Game() {
  this.playerOne = new Player("one");
  this.playerTwo = new Player("two");
  

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
  console.log("begin to move right!");
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
    console.log("current column: " + this.columnPosition);
    currentPosition = cellSelector(this.rowPosition, this.columnPosition); //string that contains the selector for the new position
    console.log("current position: " + currentPosition);

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
    console.log("current position: " + currentPosition);
    if(this.team === "one")
    {
      $(currentPosition).html('<div class="racer1"></div>')
    }
    else
    {
      $(currentPosition).html('<div class="racer2"></div>')
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

    //CHANGE COUNTER TO MOVE ONE CELL TO THE RIGHT
    this.columnPosition = this.columnPosition - 1;  //moves the counter to the right one cell
    console.log("current column: " + this.columnPosition);
    currentPosition = cellSelector(this.rowPosition, this.columnPosition); //string that contains the selector for the new position
    console.log("current position: " + currentPosition);

    //CHANGE POSITION TO MOVE ONE CELL TO THE RIGHT
    //currentCell = $(currentPosition);
    console.log("current position's html before adding racer:  " + $(currentPosition).html());
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
    console.log("current column: " + this.columnPosition);
    currentPosition = cellSelector(this.rowPosition, this.columnPosition); //string that contains the selector for the new position
    console.log("current position: " + currentPosition);

    //CHANGE POSITION TO MOVE ONE CELL TO THE RIGHT
    //currentCell = $(currentPosition);
    console.log("current position's html before adding racer:  " + $(currentPosition).html());
    $(currentPosition).html('<div class="racer"></div>')
    //console.log("current position's html: " + $(currentPosition).html());

  }
  else if(this.rowPosition === 0)
  {
    currentPosition = cellSelector(this.rowPosition, this.columnPosition); 
    console.log("current position: " + currentPosition);
    $(currentPosition).html('<div class="racer"></div>')
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
    console.log("current column: " + this.columnPosition);
    currentPosition = cellSelector(this.rowPosition, this.columnPosition); //string that contains the selector for the new position
    console.log("current position: " + currentPosition);

    //CHANGE POSITION TO MOVE ONE CELL TO THE RIGHT
    //currentCell = $(currentPosition);
    console.log("current position's html before adding racer:  " + $(currentPosition).html());
    $(currentPosition).html('<div class="racer"></div>')
    //console.log("current position's html: " + $(currentPosition).html());

  }
  else if(this.rowPosition === 5)
  {
    currentPosition = cellSelector(this.rowPosition, this.columnPosition); 
    console.log("current position: " + currentPosition);
    $(currentPosition).html('<div class="racer"></div>')
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
  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
};

// Start the game!
$(document).ready(function(){
  var game = new Game();
  game.init();

});























