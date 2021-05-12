class Game{
    constructor(){

    }

    getState(){
var gameStateRef = database.ref('gameState')
gameStateRef.on("value",function(data){
    gameState = data.val();
})
    }

    update(state){
database.ref('/').update({
    gameState: state
})
    }

    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }

        tank1 = createSprite(100,200);
        tank1.addImage(tank1);
        tank2 = createSprite(300,200);
        tank2.addImage(tank2);
        tank3 = createSprite(500,200);
        tank3.addImage(tank3);
        tank4 = createSprite(700,200);
        tank4.addImage(tank4);
        tanks = [tank1, tank2, tank3, tank4];
    }

    

    play(){
        form.hide();


    }
}