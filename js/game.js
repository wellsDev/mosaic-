//intial scramble of game tiles
$(document).ready(function(){
  scrambleTiles();
});

//scramble function
//fix the random number error?
var scrambleTiles = function() {
  //array of tile ID's
    var all = $('.game').children();

  //Scrambe this array of IDs
    //loop through array and ask is x between y & z tiles
    for (i = 0;i < all.length; i++){
        var currentId = all[i].id;
        var ranNum=Math.floor(Math.random()*8)+1;
        var nextId = all[ranNum].id;
        //if so exchange tile x and tile z's places
        if (all[i] === all[i]) {
          all[i].id = nextId;
          all[ranNum].id = currentId;
          console.log(ranNum);
        }
      }
};

//Scramble the tiles on game BEGIN
$(".scramble").on("click", function(){
  scrambleTiles();
});

//identifys tile when clicked
$(".game").children( ).click(function(evt) {
  var currentTile = $(this);
  var game = $(".game").first();

  //functions
  var moveTile = function(location) {
      //remove class
        currentTile.removeClass();
      //add class
        currentTile.addClass(location).addClass("tile");
  };

  //col0 and row0
  if (currentTile.hasClass("col0") && currentTile.hasClass("row0")) {
    if (game.find(".col0.row1").length > 0) {
    }
    else {
      moveTile("col0 row1");
    }
    if (game.find(".col1.row0").length > 0) {
    }
    else {
      moveTile("col1 row0");
    }

  }

  //col0 and row1
  else if (currentTile.hasClass("col0") && currentTile.hasClass("row1")) {
    if (game.find(".col0.row0").length > 0) {
    }
    else {
      moveTile("col0 row0");
    }
    if (game.find(".col0.row2").length > 0) {
    }
    else {
      moveTile("col0 row2");
    }

    if (game.find(".col1.row1").length > 0) {
    }
    else {
      moveTile("col1 row1");
    }

  }

  //col0 and row2
  else if (currentTile.hasClass("col0") && currentTile.hasClass("row2")) {
    if (game.find(".col0.row1").length > 0) {
    }
    else {
      moveTile("col0 row1");

    }

    if (game.find(".col1.row2").length > 0) {
    }
    else {
      moveTile("col1 row2");
    }

  }

  //col1 and row0
  else if (currentTile.hasClass("col1") && currentTile.hasClass("row0")) {
    if (game.find(".col0.row0").length > 0) {
    }
    else {
      moveTile("col0 row0");
    }

    if (game.find(".col2.row0").length > 0) {
    }
    else {
      moveTile("col2 row0");
    }

    if (game.find(".col1.row1").length > 0) {
    }
    else {
      moveTile("col1 row1");
    }

  }

  //col1 and row1
  else if (currentTile.hasClass("col1") && currentTile.hasClass("row1")) {
    if (game.find(".col1.row0").length > 0) {
    }
    else {
      moveTile("col1 row0");
    }

    if (game.find(".col0.row1").length > 0) {
    }
    else {
      moveTile("col0 row1");
    }

    if (game.find(".col2.row1").length > 0) {
    }
    else {
      moveTile("col2 row1");
    }

    if (game.find(".col1.row2").length > 0) {
    }
    else {
      moveTile("col1 row2");
    }

  }

  //col1 and row2
  else if (currentTile.hasClass("col1") && currentTile.hasClass("row2")) {
    if (game.find(".col1.row1").length > 0) {
    }
    else {
      moveTile("col1 row1");
    }

    if (game.find(".col0.row2").length > 0) {
    }
    else {
      moveTile("col0 row2");
    }

    if (game.find(".col2.row2").length > 0) {
    }
    else {
      moveTile("col2 row2");
    }

  }

  //col2 and row0
  else if (currentTile.hasClass("col2") && currentTile.hasClass("row0")) {
    if (game.find(".col1.row0").length > 0) {
    }
    else {
      moveTile("col1 row0");
    }

    if (game.find(".col2.row1").length > 0) {
    }
    else {
      moveTile("col2 row1");
    }

  }

  //col2 and row1
  else if (currentTile.hasClass("col2") && currentTile.hasClass("row1")) {
    if (game.find(".col2.row2").length > 0) {
    }
    else {
      moveTile("col2 row2");
    }

    if (game.find(".col1.row1").length > 0) {
    }
    else {
      moveTile("col1 row1");
    }

    if (game.find(".col2.row0").length > 0) {
    }
    else {
      moveTile("col2 row0");
    }

  }

  //col2 and row2
  else if (currentTile.hasClass("col2") && currentTile.hasClass("row2")) {
    if (game.find(".col2.row1").length > 0) {
    }
    else {
      moveTile("col2 row1");
    }

    if (game.find(".col1.row2").length > 0) {
    }
    else {
      moveTile("col1 row2");
    }

  }

});

console.log("Mosaic has loaded!");
