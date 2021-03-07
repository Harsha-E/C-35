var playerPos, database;
var player;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    console.log(database);
    player = createSprite(250,250,10,10);
    player.shapeColor = "red";
    playerPos = database.ref('ball/pos');
    playerPos.on("value",readPosition, showError);
}

function draw(){
    background("lavender");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/pos').set({
        'x': pos.x + x,
        'y': pos.y + y
    });
}

function readPosition(data){
    pos = data.val();
    console.log(pos.x);
    player.x = playerPos.x 
    player.y = playerPos.y 
}

function showError(){
    console.log('Check Your Database')
}