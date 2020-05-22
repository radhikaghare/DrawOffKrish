class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');

    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("DrawOff");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);

    this.reset.position(30,30);
2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
     var name = this.input.value();
      //playerCount+=1;
      //player.index = playerCount;
      //player.update();
      //player.updateCount(playerCount);
      this.greeting.html("Hello " + name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      gameState = 1;
    })

    this.reset.mousePressed(()=>{
     /* game.update(0);
      player.updateCount(0);
      Player.updateRank(0);*/

     /* for(var i = 0 ; i < allPlayers.length ; i++){
        allPLayers[i].distance = 0;
      }*/
    })

  }
}
