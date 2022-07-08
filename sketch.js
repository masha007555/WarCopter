// all the variables
// variables for sounds and musics
var BM1,BM2,BM3,BM4;
var buy,click,shoot,touch;

// variables for Images
var backImg
var BADSImg, BADSshop;
var BANSImg;
var bullet1_Img, bullet2_Img, bullet3_Img;
var homeBG_Img;
var play,playImg;
var shopImg, shopBG_Img;
var failImg;
var completedImg;
var storyImg;
var heartImg;
var infoImg;
var instaImg;
var teleImg;
var missionAccomplishedImg;
var replayImg;
var NECImg, NELImg;
var shopNowImg;
var gearimg;
var discImg;
var muteImg;
var musicImg;
var vImg;
var lockImg;
var FHImg;
var FVHImg;
var BSImg;
var LIFImg;

// variable for game states
var gameState = "home";

// amount given to variables
var bulletsR1 = 10;
var bulletsR2 = 5;
var tBullets1 = 10;
var tBullets2 = 5;
var coins = 100;
var current = 1;
var health = 100;
var vhealth = 100;
var life = 3;
var cost = 100;
var defaultM = 0;
var stage1WP = 200;
var stage2WP = 200;
var stage3WP = 300;
var stage4WP = 200;
var stage5WP = 300;
var stage6WP = 300;
var stage7WP = 400;
var stage8WP = 750;

// constent variables
const YES = 1;
const NO = 0;

// variables defined as YES and NO
var changeLife = YES;
var audio = YES;
var c = YES;
var locked1 = YES;
var locked2 = YES;
var locked3 = YES;
var G = YES;
var W2 = YES;
var WE = YES;
var W3 = YES;
var W4 = YES;
var W5 = YES;
var W6 = YES;
var W7 = YES;
var W8 = YES;

// variables defined as a text
var SD1 = "Cost: 50 Coins";
var SD2 = "Cost: 50 Coins";
var SD3 = "Cost: 50 Coins";

// variable for animations
var helicopterAnimation;
var vHelicopterAnimation;

// other Variables
var helicopter;
var vHelicopter;
var FH;
var FVH;
var BS;
var hBar;
var hBar1;
var hBar1Width;
var vhBar;
var vhBar1;
var vhBar1Width;
var s1,s2,s3,s4,s5,s6,s7,s8;
var fail;
var completed;
var divider;
var story;
var heart;
var info;
var insta;
var tele;
var dummyheli;
var missionAccomplished;
var replay;
var BL;
var NEC;
var NEL;
var shopNow1, shopNow2,shopNow3, shopNow4;
var gear;
var disc1,disc2,disc3,disc4;
var mute;
var music;
var v;
var BT1, BT2, BT3;
var lock1, lock2, lock3;
var DFBG;
var back,back2;
var Bbomb,VHbullet,Hbullet;
var shop;
var stage_B1,stage_B2;
var shop_B;
var LIF;

//----------------------------------------------------------------//

function preload() {
  // preload all the images 
  shopBG_Img = loadImage("images/shopBG.jpeg");
  backImg = loadImage("images/back.png");
  BADSImg = loadImage("images/BADS.jpeg");
  BANSImg = loadImage("images/BANS.jpeg");
  bullet1_Img = loadImage("images/bullet_1.png");
  bullet2_Img = loadImage("images/bullet_2.png");
  homeBG_Img = loadImage("images/homeBG.jpeg");
  playImg = loadImage("images/play.png");
  shopImg = loadImage("images/shop.png");
  BSImg = loadImage("images/BS.png");
  failImg = loadImage("images/fail.png");
  completedImg = loadImage("images/completed.png");
  bullet3_Img = loadImage("images/bullet_3.png");
  storyImg = loadImage("images/story.png");
  heartImg = loadImage("images/heart.png");
  infoImg = loadImage("images/info.png");
  instaImg = loadImage("images/insta.png");
  teleImg = loadImage("images/telegram.png");
  missionAccomplishedImg = loadImage("images/MissionAccomplished.png");
  replayImg = loadImage("images/replay.png");
  NECImg = loadImage("images/noCoins.png")
  NELImg = loadImage("images/noLife.png");
  shopNowImg = loadImage("images/buy.png");
  gearImg = loadImage("images/gear.png");
  discImg = loadImage("images/disc.png");
  muteImg = loadImage("images/mute.png");
  musicImg = loadImage("images/music.png");
  vImg = loadImage("images/V.png");
  lockImg = loadImage("images/lock.png");
  BADSshop = loadImage("images/BADS shop.jpeg");
  LIFImg = loadImage("images/full.png");

  // preload all the animations
  dummyheli = loadAnimation("images/h1.png","images/h2.png","images/h3.png","images/h4.png");
  helicopterAnimation = loadAnimation("images/h1.png","images/h2.png","images/h3.png","images/h4.png");
  vHelicopterAnimation = loadAnimation("images/vh1.png","images/vh2.png","images/vh3.png","images/vh4.png");

  // preload all the sounds and musics
  BM1 = loadSound("audio/Ex's & Oh's.m4a");
  BM2 = loadSound("audio/Dance Monkey.m4a");
  BM3 = loadSound("audio/Montero.m4a");
  BM4 = loadSound("audio/Havana.m4a");
  buy = loadSound("audio/buy.mp4");
  click = loadSound("audio/click.mpeg");
  shoot = loadSound("audio/shoot.mpeg");
  touch = loadSound("audio/touch.mp3");
}

//----------------------------------------------------------------//

function setup() {
  createCanvas(1500,700);
  
  // default background music
  BM1.loop();
  BM1.setVolume(0.2);

  // all the sprites
  play = createSprite(1400,300,10,10);
  play.addImage(playImg);
  play.scale = 0.25;

  DFBG = createSprite(1150, 405, 400, 200);
  DFBG.addImage(BADSshop);
  DFBG.scale = 1.47;

  shop = createSprite(1150,75,10,10);
  shop.addImage(shopImg);
  shop.scale = 0.06;

  stage_B1 = createSprite(width/2,height/2,1300,600);
  stage_B1.shapeColor = "orange";
  stage_B2 = createSprite(width/2,380,1090,500);
  stage_B2.shapeColor = "lightblue";
  shop_B = createSprite(width/2,height/2,1300,600);
  shop_B.shapeColor = "lightgreen";

  // sprites for the stages
  s1 = createSprite(350,250,200,150);
  s1.shapeColor = "yellow";
  s2 = createSprite(600,250,200,150);
  s2.shapeColor = "brown";
  s3 = createSprite(850,250,200,150);
  s3.shapeColor = "brown";
  s4 = createSprite(1100,250,200,150);
  s4.shapeColor = "brown";
  s5 = createSprite(350,500,200,150);
  s5.shapeColor = "brown";
  s6 = createSprite(600,500,200,150);
  s6.shapeColor = "brown";
  s7 = createSprite(850,500,200,150);
  s7.shapeColor = "brown";
  s8 = createSprite(1100,500,200,150);
  s8.shapeColor = "red";

  helicopter = createSprite(1200,height/2-100);
  helicopter.addAnimation("hFlying",helicopterAnimation);

  vHelicopter = createSprite(200,height/2-100);
  vHelicopter.addAnimation("vhFlying",vHelicopterAnimation);
  vHelicopter.scale = 0.6;

  FH = createSprite(1300,height/2-150);
  FH.addAnimation("FHFlying",helicopterAnimation);

  FVH = createSprite(200,height/2-50);
  FVH.addAnimation("FVHFlying",vHelicopterAnimation);
  FVH.scale = 0.6;

  BS = createSprite(200,height/2-100);
  BS.addImage(BSImg);
  BS.scale = 0.2;

  hBar = createSprite(1200,650,100,20);
  hBar.shapeColor = "blue";
  vhBar = createSprite(250,650,100,20);
  vhBar.shapeColor = "blue";

  fail = createSprite(width/2,height/2,100,100);
  fail.addImage(failImg);
  fail.scale = 0.3;
  completed = createSprite(width/2,height/2,100,100);
  completed.addImage(completedImg);
  completed.scale = 0.3;

  divider = createSprite(width/2,height/2,10,height);
  divider.visible = false;

  story = createSprite(1400,75,10,10);
  story.addImage(storyImg);
  story.scale = 0.75

  heart = createSprite(100,75,75,10,10);
  heart.addImage(heartImg);
  heart.scale = 0.45;

  info = createSprite(380,365,10,10);
  info.addImage(infoImg);
  info.scale = 0.3;
  
  insta = createSprite(950,400,75,10,10);
  insta.addImage(instaImg);
  insta.scale = 0.2;

  tele = createSprite(1050,400,75,10,10);
  tele.addImage(teleImg);
  tele.scale = 0.15;

  missionAccomplished = createSprite(width/2, height/2-100, 10, 10);
  missionAccomplished.addImage(missionAccomplishedImg);
  missionAccomplished.scale = 0.7;
  
  replay = createSprite(150, height/2-75, 10, 10);
  replay.addImage(replayImg);
  replay.scale = 0.2;

  BL = createSprite(200, 250, 10, 10);
  BL.addImage(heartImg);
  BL.scale = 0.4;

  BT1 = createSprite(200, 370, 10, 10);
  BT1.addImage(discImg);
  BT1.scale = 0.25;

  BT2 = createSprite(200, 480, 10, 10);
  BT2.addImage(discImg);
  BT2.scale = 0.25;

  BT3 = createSprite(200, 590, 10, 10);
  BT3.addImage(discImg);
  BT3.scale = 0.25;
  
  shopNow1 = createSprite(725, 250, 10, 10);
  shopNow1.addImage(shopNowImg);
  shopNow1.scale = 0.13;
  
  shopNow2 = createSprite(725, 390, 10, 10);
  shopNow2.addImage(shopNowImg);
  shopNow2.scale = 0.13;
    
  shopNow3 = createSprite(725, 500, 10, 10);
  shopNow3.addImage(shopNowImg);
  shopNow3.scale = 0.13;

  shopNow4 = createSprite(725, 610, 10, 10);
  shopNow4.addImage(shopNowImg);
  shopNow4.scale = 0.13;

  gear = createSprite(80, 650, 10, 10);
  gear.addImage(gearImg);
  gear.scale = 0.1;

  disc1 = createSprite(350, 380, 10, 10);
  disc1.addImage(discImg);
  disc1.scale = 0.48;

  disc2 = createSprite(590, 380, 10, 10);
  disc2.addImage(discImg);
  disc2.scale = 0.48;
  
  disc3 = createSprite(850, 380, 10, 10);
  disc3.addImage(discImg);
  disc3.scale = 0.48;
  
  disc4 = createSprite(1100, 380, 10, 10);
  disc4.addImage(discImg);
  disc4.scale = 0.48;
  
  mute = createSprite(760, 200, 10, 10);
  mute.addImage(muteImg);
  mute.scale = 0.2;

  music = createSprite(750,360,10,10);
  music.addImage(musicImg);
  music.scale = 0.12;

  v = createSprite(1060, 360, 10, 10);
  v.addImage(vImg);
  v.scale = 0.07;

  lock1 = createSprite(590, 380, 10,10);
  lock1.addImage(lockImg);
  lock1.scale = 0.2;

  lock2 = createSprite(850, 380, 10,10);
  lock2.addImage(lockImg);
  lock2.scale = 0.2;

  lock3 = createSprite(1100, 380, 10,10);
  lock3.addImage(lockImg);
  lock3.scale = 0.2;

  back = createSprite(160,110,10,10);
  back.addImage(backImg);
  back.scale = 0.2;

  back2 = createSprite(50,650,10,10);
  back2.addImage(backImg);
  back2.scale = 0.2;

  // all the groups
  Vbullet = new Group();
  HHbullet = new Group();
  Bbullets = new Group();
}

//----------------------------------------------------------------//

function draw(){
  background(homeBG_Img);

  // code for the health bars
  hBar1Width = health;
  hBar1 = createSprite(1200,650,hBar1Width,20);
  hBar1.shapeColor = "red";
  hBar1.lifetime = 1;
  vhBar1Width = vhealth;
  vhBar1 = createSprite(250,650,vhBar1Width,20);
  vhBar1.shapeColor = "red";
  vhBar1.lifetime = 1;

  drawSprites();
  edges = createEdgeSprites();
  DFBG.depth = shop_B.depth + 1;

  // code to play the default background music
  if (defaultM === 0) {
    disc1.rotationSpeed = 5;
    audio = NO;
  }

  // defining gamestates to their respective functions
  if (gameState ==="home"){
    home();
  }
  if (gameState === "stages"){
    stages();
  }
  if (gameState === "shop"){
    Shop();
  }
  if (gameState === "story"){
    Story();
  }
  if (gameState === "info"){
    Info();
  }
  if (gameState === "more"){
    more();
  }
  if (gameState === "soundTracks"){
    soundTracks();
  }
  if (gameState === "versionList"){
    vList();
  }
  if (gameState === "end"){
    end();
  }

  if (gameState === "stage1"){
    stage1();
  }
  if (gameState === "stage2"){
    stage2();
  }
  if (gameState === "stage3"){
    stage3();
  }
  if (gameState === "stage4"){
    stage4();
  }
  if (gameState === "stage5"){
    stage5();
  }
  if (gameState === "stage6"){
    stage6();
  }
  if (gameState === "stage7"){
    stage7();
  }
  if (gameState === "stage8"){
    stage8();
  }

  helicopter.collide(edges);
  helicopter.collide(divider);
  vHelicopter.collide(edges);

  // code for decreasing the life when loose
  if (changeLife === YES){
    if (bulletsR1 === 0 && life === 3 || bulletsR2 === 0 && life === 3 || health <= 0 && life === 3){
      life = 2;
      changeLife = NO;

    }else if (bulletsR1 === 0 && life === 2 || bulletsR2 === 0 && life === 2 || health <= 0 && life === 2){
      life = 1
      changeLife = NO;

    }else if (bulletsR1 === 0 && life === 1 || bulletsR2 === 0 && life === 1 || health <= 0 && life === 1){
      life = 0
      changeLife = NO;
    }
  }

  // Increases the coins when win
  if (coins >= 2751){
    coins = 2750;
  }

  if (current === 2 && W2 === YES){
    coins += 200;
    W2 = NO;
  }
  
  if (current === 3 && W3 === YES){
    coins += 200;
    W3 = NO;
  }
  
  if (current === 4 && W4 === YES){
    coins += 250;
    W4 = NO;
  }
  
  if (current === 5 && W5 === YES){
    coins += 300;
    W5 = NO;
  }

  if (current === 6 && W6 === YES){
    coins += 300;
    W6 = NO;
  }
  
  if (current === 7 && W7 === YES){
    coins += 350;
    W7 = NO;
  }
  
  if (current === 8 && W8 === YES){
    coins += 750;
    W8 = NO;
  }

  // change the position of "back" icon
  if (gameState === "info" || gameState === "soundTracks" || gameState === "versionList"){
    back2.x = 150;
    back2.y = 340;
  }
  else{
    back2.x = 50;
    back2.y = 650;
  }

  // make the helicopter move according to the mouse in the shop 
  var imgx = 1150;
  var imgy = 380;
  var angle = atan2(mouseY - imgy, mouseX + imgx);

  // make the helicopter vibrates so it seems natural in the shop
  push();
  translate(imgx,imgy);
  rotate(angle);
  imageMode(CENTER);
  animation(dummyheli, random(0,1.5), random(0,0.5), 100, 100);
  pop();
}

//----------------------------------------------------------------//

function home(){
  drawSprites();

  // making the necessary sprites visible
  story.visible = true;
  play.visible = true;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = true;
  FVH.visible = true;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = true;
  info.visible = false;
  insta.visible = false;
  tele.visible = false;
  shop.visible = true;
  dummyheli.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = false;
  gear.visible = true;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;
  v.visible =  false;
  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;
  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  push();
  // displays "WarCopter" and "Time To Battle" on the top of home page
  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("WarCopter",550,100);
  textSize(30);
  strokeWeight(3);
  text("Time To Battle",650,150);

  // displays life
  textSize(50);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  text(life,85,87.5);
  pop();
  
  // make both the helicopters fly infinitely from left to right and right to left in home
  push();  
  FH.velocityX = -3;
  FVH.velocityX = 3;

  if(FH.x < -100){
    FH.x = width+100;
  }
  if(FVH.x > width+100){
    FVH.x = -100;
  }
  pop();

  // increases the size of the sprites when mouse is over them in home
  push();
  if (mouseIsOver(story)){
    story.scale = 0.85;
  }else{
    story.scale = 0.75;
  }
  if (mouseIsOver(shop)){
    shop.scale = 0.075;
  }else{
    shop.scale = 0.06;
  }
  if (mouseIsOver(play)){
    play.scale = 0.29;
  }else{
    play.scale = 0.25;
  }
  if (mouseIsOver(gear)){
    gear.scale = 0.125;
  }else{
    gear.scale = 0.1; 
  }
  pop();

  // changing the game state when mouse is pressed on any perticular sprite
  if (mousePressedOver(play)){
    click.play();
    gameState = "stages";
  }
  if (mousePressedOver(shop)){
    click.play();
    gameState = "shop";
  }
  if (mousePressedOver(story)){
    click.play();
    gameState = "story";
  }
  if (mousePressedOver(gear)){
    click.play();
    gameState = "more";
  }
}

//----------------------------------------------------------------//

function Shop(){
  background(shopBG_Img);
  drawSprites();

  // making the necessary sprites visible
  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = true;
  stage_B2.visible = false;
  shop_B.visible = true;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;
  info.visible = false;
  shop.visible = false;
  insta.visible = false;
  tele.visible = false;
  dummyheli.visible = true;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL.visible = true;
  shopNow1.visible = true;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;
  v.visible =  false;
  shopNow2.visible = true;
  shopNow3.visible = true;
  shopNow4.visible = true;
  BT1.visible = true;
  BT2.visible = true;
  BT3.visible = true;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = true;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  push();
  // displays "Shop" on the top of shop page
  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("SHOP",600,130);

  // displays "1" on the heart in shop
  textSize(70);
  strokeWeight(4);
  text("1", 180, 275);

  // tells the ammoun, cost and purchased or not, in shop
  textSize(35);
  text("Coins "+coins,1000,120);
  text("Cost: "+cost+" Coins", 300, 260);
  
  text(SD1, 300, 400);
  text(SD2, 300, 510);
  text(SD3, 300, 620);

  // describes the product in the shop
  textSize(25);
  strokeWeight(3);
  text("Dance Monkey (Background Music)", 300, 350);
  text("Call me by your name (BackGround Music)", 300, 460);
  text("Havana (BackGround Music)", 300, 570);
  pop();

  // draws all the lines in th shop
  strokeWeight(5);
  // top 2nd line
  line(100, 310, width/2 + 150, 310);

  // last 3nd line
  line(100, 425, width/2 + 150, 425);

  // last 2nd line
  line(100, 535, width/2 + 150, 535);

  push();
  strokeWeight(10);
  //top line
  line(100, 160, 1400, 160);

  //mid line
  line(width/2 + 150, 165, width/2 + 150, 645);
  
  // right line
  line(1400, 160, 1400, 650);
  
  // last line
  line(width/2 + 150, 650, 1400, 650);
  pop();

  // increases the size of the icons when hover them
  push();
  if (mouseIsOver(back)){
    back.scale = 0.29;
  }else{
    back.scale = 0.25;
  }

  if (mouseIsOver(shopNow1)){
    shopNow1.scale = 0.16;
  }else{
    shopNow1.scale = 0.13;
  }

  if (mouseIsOver(shopNow2)){
    shopNow2.scale = 0.16;
  }else{
    shopNow2.scale = 0.13;
  }

  if (mouseIsOver(shopNow3)){
    shopNow3.scale = 0.16;
  }else{
    shopNow3.scale = 0.13;
  }

  if (mouseIsOver(shopNow4)){
    shopNow4.scale = 0.16;
  }else{
    shopNow4.scale = 0.13;
  }
  pop();

  // code for buying prodicts
  if (mousePressedOver(shopNow1) && life < 3 && c === YES && cost < coins || mousePressedOver(shopNow1) && life < 3 && c === YES && cost <= coins){
    buy.play();
    life +=1;
    coins = coins - cost;
    c = NO;

    setTimeout(function(){
      c = YES;
    }, 500);
  }else if(mousePressedOver(shopNow1) && life < 3 && c === YES && cost > coins){
    NEC = createSprite(500, 685, 10, 10);
    NEC.velocityX = 5;
    NEC.addImage(NECImg);
    NEC.lifetime = 80;
    c = NO;

    setTimeout(function(){
      c = YES;
    }, 1500);
  }else if(mousePressedOver(shopNow1) && life === 3 && c === YES){
    LIF = createSprite(500, 675, 10, 10);
    LIF.velocityX = 5;
    LIF.addImage(LIFImg);
    LIF.scale = 0.2;
    LIF.lifetime = 80;
    c = NO;

    setTimeout(function(){
      c = YES;
    }, 1500);
  }

  if (mousePressedOver(shopNow2) && locked1 === YES && coins > 50 || mousePressedOver(shopNow2) && locked1 === YES && coins >= 50 ){
    shopNow2.destroy();
    buy.play();
    coins -=50;
    locked1 = NO;
    SD1 = "Purchased :)"
    lock1.destroy();
  }else if (mousePressedOver(shopNow2) && coins < 50 && c === YES){
    NEC = createSprite(500, 685, 10, 10);
    NEC.velocityX = 5;
    NEC.addImage(NECImg);
    NEC.lifetime = 80;
    c = NO;

    setTimeout(function(){
      c = YES;
    }, 1500);
  }

  if (mousePressedOver(shopNow3) && locked2 === YES && coins > 50 || mousePressedOver(shopNow3) && locked2 === YES && coins >= 50 ){
    buy.play();
    coins -=50;
    locked2 = NO;
    SD2 = "Purchased :)"
    shopNow3.destroy();
    lock2.destroy();
  }else if (mousePressedOver(shopNow3) && coins < 50 && c === YES){
    NEC = createSprite(500, 685, 10, 10);
    NEC.velocityX = 5;
    NEC.addImage(NECImg);
    NEC.lifetime = 80;
    c = NO;

    setTimeout(function(){
      c = YES;
    }, 1500);
  }

  if (mousePressedOver(shopNow4) && locked3 === YES && coins > 50 || mousePressedOver(shopNow4) && locked3 === YES && coins >= 50 ){
    buy.play();
    coins -=50;
    locked3 = NO;
    SD3 = "Purchased :)"
    shopNow4.destroy();
    lock3.destroy();
  }else if (mousePressedOver(shopNow4) && coins < 50 && c === YES){
    NEC = createSprite(500, 685, 10, 10);
    NEC.velocityX = 5;
    NEC.addImage(NECImg);
    NEC.lifetime = 80;
    c = NO;

    setTimeout(function(){
      c = YES;
    }, 1500);
  }

  // change the game state to "home"
  if (mousePressedOver(back)){
    click.play();
    gameState = "home";
  }
}

//----------------------------------------------------------------//

function Story(){
  background(shopBG_Img);
  drawSprites();

  // making the necessary sprites visible
  story.visible = false;
  play.visible = false;
  stage_B1.visible = true;
  back.visible = true;
  stage_B2.visible = true;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;
  info.visible = false;
  insta.visible = false;
  tele.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = false;

  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;
  v.visible =  false;
  
  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  // displays the "story" on top and the story of this game
  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("STORY",600,120);
  textSize(50);
  strokeWeight(4);
  text("The villain named Lupin has steal all the",230,200);
  text("money of the city, so now there is an entry",230,270);
  text("of our Guardian in a helicopter, fighting",230,340);
  text("with the army of Lupin to bring the money",230,410);
  text("back to the city.",230,480);

  // increases the size of the back button when hover
  push();
  if (mouseIsOver(back)){
    back.scale = 0.29;
  }else{
    back.scale = 0.25;
  }
  pop();

  // change the game state to "home" or "end" according to the situations
  if (current === 9 && mousePressedOver(back)){
    click.play();
    gameState = "end";
  }else if (mousePressedOver(back)){
    click.play();
    gameState = "home";
  }
}

//----------------------------------------------------------------//

function Info(){
  background(shopBG_Img);
  drawSprites();

  // making the necessary sprites visible
  story.visible = false;
  play.visible = false;
  stage_B1.visible = true;
  back.visible = false;
  stage_B2.visible = true;
  shop_B.visible = false;
  back2.visible = true;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;
  info.visible = false;
  insta.visible = true;
  tele.visible = true;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  dummyheli.visible = false;
  BL.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = false;

  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;
  v.visible =  false;
  
  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;
  
  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  // displays the "info" on top and tells my short info
  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("INFO",600,120);
  textSize(50);
  strokeWeight(4);
  text("This game is build by Masha 007, if you",260,200);
  text("want to contact me then you can message",260,270);
  text("me on my Instagram and Telegram.",260,340);
  text("My profile pages are here:",260,410);

  // displays the game version and the news
  textSize(30);
  strokeWeight(0);
  stroke("red");
  fill("red");
  text("New Update Comming Soon!!",230,600);
  textSize(20);
  strokeWeight(2);
  stroke("grey");
  fill("black");
  text("v1.4.2",1200,600);

  // increases the size of the sprites when hover
  push();
  if (mouseIsOver(back2)){
    back2.scale = 0.29;
  }else{
    back2.scale = 0.25;
  }

  if (mouseIsOver(insta)){
    insta.scale = 0.28;
  }else{
    insta.scale = 0.2;
  }

  if (mouseIsOver(tele)){
    tele.scale = 0.20;
  }else{
    tele.scale = 0.15;
  }
  pop();

  // alert and shows me instagram and telegram profile games link
  if (mousePressedOver(tele)){
    click.play();
    alert("My Telegram profile URL is https://t.me/sleepy_zenitsu_agatsuma");
  }

  if (mousePressedOver(insta)){
    click.play();
    alert("My Instagram profile URL is https://www.instagram.com/sleepy_zenitsu_agatsuma/");
  }

  // change the game state to "more"
  if(mousePressedOver(back2)){
    click.play();
    gameState = "more";
  }
}

//----------------------------------------------------------------//

function stages(){
  background(shopBG_Img);
  drawSprites();

  // making the necessary sprites visible
  story.visible = false;
  play.visible = false;
  stage_B1.visible = true;
  back.visible = true;
  stage_B2.visible = true;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  dummyheli.visible = false;
  BL.visible = false;
  shopNow1.visible = false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = false;

  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;
  v.visible =  false;
  
  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  s1.visible = true;
  s2.visible = true;
  s3.visible = true;
  s4.visible = true;
  s5.visible = true;
  s6.visible = true;
  s7.visible = true;
  s8.visible = true;

  // shows the stage numbers
  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("STAGES",600,120);
  text("1",325,275);
  text("2",575,275);
  text("3",825,275);
  text("4",1075,275);
  text("5",325,525);
  text("6",575,525);
  text("7",825,525);
  text("8",1075,525);

  // displys the note
  push();
  textStyle(BOLD);
  stroke("grey");
  fill("red");
  textSize(30);
  strokeWeight(3);
  text("NOTE: Bullet's damage depends on the movement of the helicopters.",250,690);
  pop();

  // code to change the colours of the stages
  if(current === 1){
    s1.shapeColor = "yellow";
    s2.shapeColor = "brown";
    s3.shapeColor = "brown";
    s4.shapeColor = "brown";
    s5.shapeColor = "brown";
    s6.shapeColor = "brown";
    s7.shapeColor = "brown";
    s8.shapeColor = "red";
  }else if(current === 2){
    s1.shapeColor = "green";
    s2.shapeColor = "yellow";
    s3.shapeColor = "brown";
    s4.shapeColor = "brown";
    s5.shapeColor = "brown";
    s6.shapeColor = "brown";
    s7.shapeColor = "brown";
    s8.shapeColor = "red";  
  }else if(current === 3){
    s1.shapeColor = "green";
    s2.shapeColor = "green";
    s3.shapeColor = "yellow";
    s4.shapeColor = "brown";
    s5.shapeColor = "brown";
    s6.shapeColor = "brown";
    s7.shapeColor = "brown";
    s8.shapeColor = "red";  
  }else if(current === 4){
    s1.shapeColor = "green";
    s2.shapeColor = "green";
    s3.shapeColor = "green";
    s4.shapeColor = "yellow";
    s5.shapeColor = "brown";
    s6.shapeColor = "brown";
    s7.shapeColor = "brown";
    s8.shapeColor = "red";  
  }else if(current === 5){
    s1.shapeColor = "green";
    s2.shapeColor = "green";
    s3.shapeColor = "green";
    s4.shapeColor = "green";
    s5.shapeColor = "yellow";
    s6.shapeColor = "brown";
    s7.shapeColor = "brown";
    s8.shapeColor = "red";  
  }else if(current === 6){
    s1.shapeColor = "green";
    s2.shapeColor = "green";
    s3.shapeColor = "green";
    s4.shapeColor = "green";
    s5.shapeColor = "green";
    s6.shapeColor = "yellow";
    s7.shapeColor = "brown";
    s8.shapeColor = "red";  
  }else if(current === 7){
    s1.shapeColor = "green";
    s2.shapeColor = "green";
    s3.shapeColor = "green";
    s4.shapeColor = "green";
    s5.shapeColor = "green";
    s6.shapeColor = "green";
    s7.shapeColor = "yellow";
    s8.shapeColor = "red";  
  }else if(current === 8){
    s1.shapeColor = "green";
    s2.shapeColor = "green";
    s3.shapeColor = "green";
    s4.shapeColor = "green";
    s5.shapeColor = "green";
    s6.shapeColor = "green";
    s7.shapeColor = "green";
    s8.shapeColor = "purple";
  }

  // code to display "Not Enough Life" when life is 0
  changeLife = YES;

  if (mousePressedOver(s1) && current === 1 && life !== 0 || mousePressedOver(s1) && current === 2 && life !== 0 || 
    mousePressedOver(s1) && current === 3 && life !== 0 || mousePressedOver(s1) && current === 4 && life !== 0 || 
    mousePressedOver(s1) && current === 5 && life !== 0 || mousePressedOver(s1) && current === 6 && life !== 0 || 
    mousePressedOver(s1) && current === 7 && life !== 0 || mousePressedOver(s1) && current === 8 && life !== 0 ){
    click.play();
    gameState = "stage1";
  }else if (mousePressedOver(s1) && current === 1 && life === 0 && G === YES|| mousePressedOver(s1) && current === 2 && life === 0  && G === YES|| 
    mousePressedOver(s1) && current === 3 && life === 0 && G === YES || mousePressedOver(s1) && current === 4 && life === 0 && G === YES || 
    mousePressedOver(s1) && current === 5 && life === 0 && G === YES || mousePressedOver(s1) && current === 6 && life === 0 && G === YES || 
    mousePressedOver(s1) && current === 7 && life === 0 && G === YES || mousePressedOver(s1) && current === 8 && life === 0 && G === YES){
    G = NO;
    NEL = createSprite(500, 25, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;

    setTimeout(function(){
      G =  YES;
    }, 2000);
  }
  
  if (mousePressedOver(s2) && current === 2 && life !== 0 || mousePressedOver(s2) && current === 3 && life !== 0 || 
    mousePressedOver(s2) && current === 4 && life !== 0 || mousePressedOver(s2) && current === 5 && life !== 0 || 
    mousePressedOver(s2) && current === 6 && life !== 0 || mousePressedOver(s2) && current === 7 && life !== 0 || 
    mousePressedOver(s2) && current === 8 && life !== 0 ){
    click.play();
    gameState = "stage2";
  }else if(mousePressedOver(s2) && current === 2 && life === 0 && G === YES || mousePressedOver(s2) && current === 3 && life === 0 && G === YES || 
    mousePressedOver(s2) && current === 4 && life === 0 && G === YES || mousePressedOver(s2) && current === 5 && life === 0 && G === YES || 
    mousePressedOver(s2) && current === 6 && life === 0 && G === YES || mousePressedOver(s2) && current === 7 && life === 0 && G === YES || 
    mousePressedOver(s2) && current === 8 && life === 0 && G === YES){
    G = NO;
    NEL = createSprite(500, 25, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;

    setTimeout(function(){
      G =  YES;
    }, 2000);
  }

  if (mousePressedOver(s3) && current === 3 && life !== 0 || mousePressedOver(s3) && current === 4 && life !== 0 || 
    mousePressedOver(s3) && current === 5 && life !== 0 || mousePressedOver(s3) && current === 6 && life !== 0 || 
    mousePressedOver(s3) && current === 7 && life !== 0 || mousePressedOver(s3) && current === 8 && life !== 0 ){
    click.play();
    gameState = "stage3";
  }else if(mousePressedOver(s3) && current === 3 && life === 0 && G === YES || mousePressedOver(s3) && current === 4 && life === 0 && G === YES || 
    mousePressedOver(s3) && current === 5 && life === 0 && G === YES || mousePressedOver(s3) && current === 6 && life === 0 && G === YES || 
    mousePressedOver(s3) && current === 7 && life === 0 && G === YES || mousePressedOver(s3) && current === 8 && life === 0 && G === YES){
    G = NO;
    NEL = createSprite(500, 25, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;

    setTimeout(function(){
      G =  YES;
    }, 2000);
  }

  if (mousePressedOver(s4) && current === 4 && life !== 0 || mousePressedOver(s4) && current === 5 && life !== 0 || 
    mousePressedOver(s4) && current === 6 && life !== 0 || mousePressedOver(s4) && current === 7 && life !== 0 || 
    mousePressedOver(s4) && current === 8 && life !== 0 ){
    click.play();
    gameState = "stage4";
  }else if(mousePressedOver(s4) && current === 4 && life === 0 && G === YES || mousePressedOver(s4) && current === 5 && life === 0 && G === YES || 
    mousePressedOver(s4) && current === 6 && life === 0 && G === YES || mousePressedOver(s4) && current === 7 && life === 0 && G === YES || 
    mousePressedOver(s4) && current === 8 && life === 0 && G === YES){
    G = NO;
    NEL = createSprite(500, 25, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;

    setTimeout(function(){
      G =  YES;
    }, 2000);
  }

  if (mousePressedOver(s5) && current === 5 && life !== 0 || mousePressedOver(s5) && current === 6 && life !== 0 || 
    mousePressedOver(s5) && current === 7 && life !== 0 || mousePressedOver(s5) && current === 8 && life !== 0 ){
    click.play();
    gameState = "stage5";
  }else if(mousePressedOver(s5) && current === 5 && life === 0 && G === YES || mousePressedOver(s5) && current === 6 && life === 0 && G === YES || 
    mousePressedOver(s5) && current === 7 && life === 0 && G === YES || mousePressedOver(s5) && current === 8 && life === 0 && G === YES){
    G = NO;
    NEL = createSprite(500, 25, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;

    setTimeout(function(){
      G =  YES;
    }, 2000);
  }

  if (mousePressedOver(s6) && current === 6 && life !== 0 || mousePressedOver(s6) && current === 7 && life !== 0 || 
    mousePressedOver(s6) && current === 8 && life !== 0 ){
    click.play();
    gameState = "stage6";
  }else if(mousePressedOver(s6) && current === 6 && life === 0 && G === YES || mousePressedOver(s6) && current === 7 && life === 0 && G === YES || 
    mousePressedOver(s6) && current === 8 && life === 0 && G === YES){
    G = NO;
    NEL = createSprite(500, 25, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;

    setTimeout(function(){
      G =  YES;
    }, 2000);
  }

  if (mousePressedOver(s7) && current === 7 && life !== 0 || mousePressedOver(s7) && current === 8  && life !== 0){
    click.play();
    gameState = "stage7";
  }else if(mousePressedOver(s7) && current === 7 && life === 0 && G === YES || mousePressedOver(s7) && current === 8 && life === 0 && G === YES){
    G = NO;
    NEL = createSprite(500, 25, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;

    setTimeout(function(){
      G =  YES;
    }, 2000);
  }

  if (mousePressedOver(s8) && current === 8 && life !== 0){
    click.play();
    gameState = "stage8";
  }else if(mousePressedOver(s8) && current === 8 && life === 0 && G === YES){
    G = NO;
    NEL = createSprite(500, 25, 10, 10);
    NEL.velocityX = 5;
    NEL.addImage(NELImg);
    NEL.lifetime = 80;

    setTimeout(function(){
      G =  YES;
    }, 2000);
  }

  // increases the size of the sprites when hover them
  push();
  if (mouseIsOver(back)){
    back.scale = 0.29;
  }else{
    back.scale = 0.25;
  }

  if (mouseIsOver(s1) && current === 1 || mouseIsOver(s1) && current === 2 || mouseIsOver(s1) && current === 3 || 
    mouseIsOver(s1) && current === 4 || mouseIsOver(s1) && current === 5 || mouseIsOver(s1) && current === 6 || 
    mouseIsOver(s1) && current === 7 || mouseIsOver(s1) && current === 8){
    s1.width = 220;
    s1.height = 170;
  }else{
    s1.width = 200;
    s1.height = 150;
  }
  if (mouseIsOver(s2) && current === 2 || mouseIsOver(s2) && current === 3 || mouseIsOver(s2) && current === 4 || 
    mouseIsOver(s2) && current === 5 || mouseIsOver(s2) && current === 6 || mouseIsOver(s2) && current === 7 || 
    mouseIsOver(s2) && current === 8){
    s2.width = 220;
    s2.height = 170;
  }else{
    s2.width = 200;
    s2.height = 150;
  }
  if (mouseIsOver(s3) && current === 3 || mouseIsOver(s3) && current === 4 || mouseIsOver(s3) && current === 5 || 
    mouseIsOver(s3) && current === 6 || mouseIsOver(s3) && current === 7 || mouseIsOver(s3) && current === 8){
    s3.width = 220;
    s3.height = 170;
  }else{
    s3.width = 200;
    s3.height = 150;
  }
  if (mouseIsOver(s4) && current === 4 || mouseIsOver(s4) && current === 5 || mouseIsOver(s4) && current === 6 || 
    mouseIsOver(s4) && current === 7 || mouseIsOver(s4) && current === 8){
    s4.width = 220;
    s4.height = 170;
  }else{
    s4.width = 200;
    s4.height = 150;
  }
  if (mouseIsOver(s5) && current === 5 || mouseIsOver(s5) && current === 6 || mouseIsOver(s5) && current === 7 || 
    mouseIsOver(s5) && current === 8){
    s5.width = 220;
    s5.height = 170;
  }else{
    s5.width = 200;
    s5.height = 150;
  }
  if (mouseIsOver(s6) && current === 6 || mouseIsOver(s6) && current === 7 || mouseIsOver(s6) && current === 8){
    s6.width = 220;
    s6.height = 170;
  }else{
    s6.width = 200;
    s6.height = 150;
  }
  if (mouseIsOver(s7) && current === 7 || mouseIsOver(s7) && current === 8){
    s7.width = 220;
    s7.height = 170;
  }else{
    s7.width = 200;
    s7.height = 150;
  }
  if (mouseIsOver(s8) && current === 8){
    s8.width = 220;
    s8.height = 170;
  }else{
    s8.width = 200;
    s8.height = 150;
  }
  pop();

  // change the game state to "home"
 if (mousePressedOver(back)){
    click.play();
    gameState = "home";
  }
}

//----------------------------------------------------------------//

function more(){
  background(shopBG_Img);
  drawSprites();

  // making the necessary sprites visible
  story.visible = false;
  play.visible = false;
  stage_B1.visible = true;
  back.visible = true;
  stage_B2.visible = true;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;
  info.visible = true;
  insta.visible = false;
  tele.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL.visible = false;
  shopNow1.visible = false;
  gear.visible = false;
  dummyheli.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = true;
  v.visible =  true;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = false;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  // displays "More Option" on the top of more oage and the " info, versions list, background musics" too
  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("More Options",525,120);

  textSize(40);
  strokeWeight(4);
  text("Info",350, 510);
  text("Versions List",960, 510);
  text("Background",600, 510);
  text("Musics",650, 560);

  // increases the size of the sprites when hover
  push();
  if (mouseIsOver(back)){
    back.scale = 0.29;
  }else{
    back.scale = 0.25;
  }
  
  if (mouseIsOver(info)){
    info.scale = 0.35;
  }else{
    info.scale = 0.3; 
  }

  if (mouseIsOver(music)){
    music.scale = 0.15;
  }else{
    music.scale = 0.12; 
  }

  if (mouseIsOver(v)){
    v.scale = 0.09;
  }else{
    v.scale = 0.07; 
  }
  pop();

  // change the game state according to their respective sprites and conditions
  if (mousePressedOver(info)){
    click.play();
    gameState = "info";
  }

  if (mousePressedOver(music)){
    click.play();
    gameState = "soundTracks";
  }

  if (mousePressedOver(v)){
    click.play();
    gameState = "versionList";
  }

  if (mousePressedOver(back) && current === 9){
    click.play();
    gameState = "end";
  }else if (mousePressedOver(back)){
    click.play();
    gameState = "home";
  }
}

//----------------------------------------------------------------//

function soundTracks(){
  background(shopBG_Img);
  drawSprites();

  // making the necessary sprites visible
  story.visible = false;
  play.visible = false;
  stage_B1.visible = true;
  back.visible = false;
  stage_B2.visible = true;
  shop_B.visible = false;
  back2.visible = true;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;
  info.visible = false;
  insta.visible = false;
  tele.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL.visible = false;
  shopNow1.visible = false;
  gear.visible = false;
  dummyheli.visible = false;
  disc1.visible = true;
  disc2.visible = true;
  disc3.visible = true;
  disc4.visible = true;
  mute.visible = true;
  music.visible = false;
  v.visible =  false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = true;
  lock2.visible = true
  lock3.visible = true;
  
  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  // displays "Sound tracks" and songs names in the sound tracks
  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("Sound Tracks",500,120);
  textSize(40);
  strokeWeight(4);
  text("Havana",1030,525);

  textSize(30);
  text("Ex's & Oh's",280,525);

  textSize(35);
  strokeWeight(3);
  text("Dance Monkey",470,525);

  textSize(30);
  text("Call Me By",780,525);
  text("Your Name",778, 555);

  textSize(40);
  strokeWeight(4);

  // increases the size of the sprites when hover
  push();
  if (mouseIsOver(back2)){
    back2.scale = 0.29;
  }else{
    back2.scale = 0.25;
  }
  if (mouseIsOver(disc1)){
    disc1.scale = 0.55;
  }else{
    disc1.scale = 0.48;
  }
  if (mouseIsOver(disc2) && locked1 === NO){
    disc2.scale = 0.55;
  }else{
    disc2.scale = 0.48;
  }
  if (mouseIsOver(disc3) && locked2 === NO){
    disc3.scale = 0.55;
  }else{
    disc3.scale = 0.48;
  }
  if (mouseIsOver(disc4) && locked3 === NO){
    disc4.scale = 0.55;
  }else{
    disc4.scale = 0.48;
  }
  if (mouseIsOver(mute)){
    mute.scale = 0.3;
  }else{
    mute.scale = 0.2;
  }
  pop();

  // mute the background the music when press mute
  if (mousePressedOver(mute)){
    ED();
    defaultM = 1;
    audio = YES;
  }

  // play the selected music and make the disc rotate
  if (mousePressedOver(disc1) && audio === YES){
    d1();
    disc1.rotationSpeed = 5;
    disc2.rotationSpeed = 0;
    disc3.rotationSpeed = 0;
    disc4.rotationSpeed = 0;
    audio = NO;
  }else if (mousePressedOver(disc2) && audio === YES && locked1 === NO){
    d2();
    disc1.rotationSpeed = 0;
    disc2.rotationSpeed = 5;
    disc3.rotationSpeed = 0;
    disc4.rotationSpeed = 0;
    audio = NO;
  }else if (mousePressedOver(disc3) && audio === YES && locked2 === NO){
    d3();
    disc1.rotationSpeed = 0;
    disc2.rotationSpeed = 0;
    disc3.rotationSpeed = 5;
    disc4.rotationSpeed = 0;
    audio = NO;
  }else if (mousePressedOver(disc4) && audio === YES && locked3 === NO){
    d4();
    disc1.rotationSpeed = 0;
    disc2.rotationSpeed = 0;
    disc3.rotationSpeed = 0;
    disc4.rotationSpeed = 5;
    audio = NO;
  }

  // change the game state to "more"
  if (mousePressedOver(back2)){
    click.play();
    gameState = "more";
  }
}

//----------------------------------------------------------------//

function stage1(){
  background(BADSImg);
  drawSprites();
  // displays the stage number, number of bullets, winning prize and health of both the helicopters
  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black")
  text("STAGE: 1", width/2-100,75);
  text("Bullets: "+bulletsR1+"/"+tBullets1, 1150,75);
  text("Winning Prize: "+stage1WP,25,50);
  text("My Health: "+health, width/2+400,125);
  text("Enemy's Health: "+vhealth, width/2-725,125);

  // making the necessary sprites visible
  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  helicopter.visible = true;
  vHelicopter.visible = true;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL.visible = false;
  shopNow1.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;
  v.visible =  false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  // make the helicopter move with the arrow and "WAD" keys
  push();  
  VHshoot1();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  pop();

  // make the health of both the helicopters stay as zero when helicopter health is zero
  if (health < 0){
    health = 0;
  }

  if (vhealth < 0){
    vhealth = 0;
  }

  // shoot the bullets when space bar is pressed
  if (keyWentDown(32) && bulletsR1>0){
    Hshoot1();
    bulletsR1 -= 1;
  }
 
  // destroys the bullet
  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 10;
  }

  // conditions for loosing and winning in the battle
  if (bulletsR1 === 0 && vhealth > 0 && health > 0 || bulletsR1 === 0 && vhealth > 0 && health <= 0 || bulletsR2 === 0 && vhealth > 0 && health > 0 || bulletsR2 === 0 && vhealth > 0 && health <= 0 || bulletsR1 > 0 && vhealth > 0 && health <= 0|| bulletsR2 > 0 && vhealth > 0 && health <= 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1580);

    setTimeout(function(){
    bulletsR1 = 10;
    gameState = "stages";
    health = 100;
    vhealth = 100;
    },3505);

  }else if (bulletsR1 === 0 && vhealth <= 0 && health > 0 || bulletsR2 === 0 && vhealth <= 0 && health > 0 || bulletsR1 > 0 && vhealth <= 0 && health > 0 || bulletsR2 > 0 && vhealth <= 0 && health > 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;

    setTimeout(function(){
      gameState = "stages";
      bulletsR1 = 10;
      health = 100;
      vhealth = 100;
      stage1WP = 0;
      current = 2;
    },1200);
    cost = 500;

  }

  // increases the size of the back button when hover
  push();
  if (mouseIsOver(back2)){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();
  
  // change the game state to "stages"
  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR1 = 10;
    health = 100;
    vhealth = 100;
  }
}

//----------------------------------------------------------------//

function stage2(){
  background(BANSImg);
  drawSprites();

  // displays the stage number, number of bullets, winning prize and health of both the helicopters
  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white")
  text("STAGE: 2", width/2-100,75);
  text("Bullets: "+bulletsR1+"/"+tBullets1, 1150,75);
  text("Winning Prize: "+stage2WP,25,50);
  text("My Health: "+health, width/2+400,125);
  text("Enemy's Health: "+vhealth, width/2-725,125);

  // making the necessary sprites visible
  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL.visible = false;
  shopNow1.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;
  v.visible =  false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  push();  
  VHshoot2();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  // make the helicopter move with the arrow and "WAD" keys
  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;
  pop();

  // make the health of both the helicopters stay as zero when helicopter health is zero
  if (health < 0){
    health = 0;
  }

  if (vhealth < 0){
    vhealth = 0;
  }

  // shoot the bullets when space bar is pressed
  if (keyWentDown(32) && bulletsR1>0){
    Hshoot2();
    bulletsR1 -= 1;
  }

  // destroys the bullet
  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 15;
  }

  // conditions for loosing and winning in the battle
  if (bulletsR1 === 0 && vhealth > 0 && health > 0 || bulletsR1 === 0 && vhealth > 0 && health <= 0 || bulletsR2 === 0 && vhealth > 0 && health > 0 || bulletsR2 === 0 && vhealth > 0 && health <= 0 || bulletsR1 > 0 && vhealth > 0 && health <= 0|| bulletsR2 > 0 && vhealth > 0 && health <= 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1580);

    setTimeout(function(){
    bulletsR1 = 10;
    gameState = "stages";
    health = 100;
    vhealth = 100;
    },3505);

  }else if (bulletsR1 === 0 && vhealth <= 0 && health > 0 || bulletsR1 > 0 && vhealth <= 0 && health > 0 || bulletsR2 === 0 && vhealth <= 0 && health > 0 || bulletsR2 > 0 && vhealth <= 0 && health > 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;
  
    setTimeout(function(){
      gameState = "stages";
      bulletsR1 = 10;
      health = 100;
      vhealth = 100;
      stage2WP = 0;
      current = 3;
    },1200);
    cost = 500;

  }

  // increases the size of the back button when hover
  push();
  if (mouseIsOver(back2)){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  // change the game state to "stages"
  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR1 = 10;
    health = 100;
    vhealth = 100;
  }
}

//----------------------------------------------------------------//

function stage3(){
  background(BANSImg);
  drawSprites();

  // displays the stage number, number of bullets, winning prize and health of both the helicopters
  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white")
  text("STAGE: 3", width/2-100,75);
  text("Bullets: "+bulletsR1+"/"+tBullets1, 1150,75);
  text("Winning Prize: "+stage3WP,25,50);
  text("My Health: "+health, width/2+400,125);
  text("Enemy's Health: "+vhealth, width/2-725,125);

  // making the necessary sprites visible
  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL.visible = false;
  shopNow1.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;
  v.visible =  false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();  
  VHshoot3();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  // make the helicopter move with the arrow and "WAD" keys
  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  pop();

  // make the health of both the helicopters stay as zero when helicopter health is zero
  if (health < 0){
    health = 0;
  }

  if (vhealth < 0){
    vhealth = 0;
  }

  // shoot the bullets when space bar is pressed
  if (keyWentDown(32) && bulletsR1>0){
    Hshoot3();
    bulletsR1 -= 1;
  }

  // destroys the bullet
  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 20;
  }

  // conditions for loosing and winning in the battle
  if (bulletsR1 === 0 && vhealth > 0 && health > 0 || bulletsR1 === 0 && vhealth > 0 && health <= 0 || bulletsR2 === 0 && vhealth > 0 && health > 0 || bulletsR2 === 0 && vhealth > 0 && health <= 0 || bulletsR1 > 0 && vhealth > 0 && health <= 0 || bulletsR2 > 0 && vhealth > 0 && health <= 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1580);

    setTimeout(function(){
    bulletsR1 = 10;
    gameState = "stages";
    health = 100;
    vhealth = 100;
    },3505);

  }else if (bulletsR1 === 0 && vhealth <= 0 && health > 0 || bulletsR2 === 0 && vhealth <= 0 && health > 0 || bulletsR1 > 0 && vhealth <= 0 && health > 0|| bulletsR2 > 0 && vhealth <= 0 && health > 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;
  
    setTimeout(function(){
      gameState = "stages";
      bulletsR1 = 10;
      health = 100;
      vhealth = 100;
      stage3WP = 0;
      current = 4;
    },1200);
    cost = 700;

  }
  
  // increases the size of the back button when hover
  push();
  if (mouseIsOver(back2)){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  // change the game state to "stages"
  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR1 = 10;
    health = 100;
    vhealth = 100;
  }
}

//----------------------------------------------------------------//

function stage4(){
  background(BADSImg);
  drawSprites();

  // displays the stage number, number of bullets, winning prize and health of both the helicopters
  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black")
  text("STAGE: 4", width/2-100,75);
  text("Bullets: "+bulletsR1+"/"+tBullets1, 1150,75);
  text("Winning Prize: "+stage4WP,25,50);
  text("My Health: "+health, width/2+400,125);
  text("Enemy's Health: "+vhealth, width/2-725,125);

  // making the necessary sprites visible
  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL.visible = false;
  shopNow1.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;
  v.visible =  false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();  
  VHshoot4();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  // make the helicopter move with the arrow and "WAD" keys
  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-15;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 15;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-15;
  }
  helicopter.velocityY +=0.9;

  pop();

  // make the health of both the helicopters stay as zero when helicopter health is zero
  if (health < 0){
    health = 0;
  }

  if (vhealth < 0){
    vhealth = 0;
  }

  // shoot the bullets when space bar is pressed
  if (keyWentDown(32) && bulletsR1>0){
    Hshoot4();
    bulletsR1 -= 1;
  }

  // destroys the bullet
  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 25;
  }

  // conditions for loosing and winning in the battle
  if (bulletsR1 === 0 && vhealth > 0 && health > 0 || bulletsR1 === 0 && vhealth > 0 && health <= 0 || bulletsR2 === 0 && vhealth > 0 && health > 0 || bulletsR2 === 0 && vhealth > 0 && health <= 0 || bulletsR1 > 0 && vhealth > 0 && health <= 0|| bulletsR2 > 0 && vhealth > 0 && health <= 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1580);

    setTimeout(function(){
    bulletsR1 = 10;
    gameState = "stages";
    health = 100;
    vhealth = 100;
    },3505);

  }else if (bulletsR1 === 0 && vhealth <= 0 && health > 0 || bulletsR2 === 0 && vhealth <= 0 && health > 0 || bulletsR1 > 0 && vhealth <= 0 && health > 0||bulletsR2 > 0 && vhealth <= 0 && health > 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;

    setTimeout(function(){
      gameState = "stages";
      bulletsR1 = 10;
      health = 100;
      vhealth = 100;
      stage4WP = 0;
      current = 5;
    },1200);
    cost = 900;

  }
  
  // increases the size of the back button when hover
  push();
  if (mouseIsOver(back2)){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  // change the game state to "stages"
  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR1 = 10;
    health = 100;
    vhealth = 100;
  }
}

//----------------------------------------------------------------//

function stage5(){
  background(BANSImg);
  drawSprites();

  // displays the stage number, number of bullets, winning prize and health of both the helicopters
  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white");
  text("STAGE: 5", width/2-100,75);
  text("Bullets: "+bulletsR2+"/"+tBullets2, 1150,75);
  text("Winning Prize: "+stage5WP,25,50);
  text("My Health: "+health, width/2+400,125);
  text("Enemy's Health: "+vhealth, width/2-725,125);

  // making the necessary sprites visible
  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL.visible = false;
  shopNow1.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;
  v.visible =  false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();  
  VHshoot5();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  // make the helicopter move with the arrow and "WAD" keys
  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-15;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 15;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-15;
  }
  helicopter.velocityY +=0.9;

  pop();

  // make the health of both the helicopters stay as zero when helicopter health is zero
  if (health < 0){
    health = 0;
  }

  if (vhealth < 0){
    vhealth = 0;
  }

  // shoot the bullets when space bar is pressed
  if (keyWentDown(32) && bulletsR2>0){
    Hshoot5();
    bulletsR2 -= 1;
  }

  // destroys the bullet
  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 30;
  }

  // conditions for loosing and winning in the battle
  if (bulletsR2 === 0 && vhealth > 0 && health > 0 || bulletsR2 === 0 && vhealth > 0 && health <= 0 || bulletsR1 === 0 && vhealth > 0 && health > 0 || bulletsR1 === 0 && vhealth > 0 && health <= 0 || bulletsR1 > 0 && vhealth > 0 && health <= 0|| bulletsR2 > 0 && vhealth > 0 && health <= 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1580);

    setTimeout(function(){
    bulletsR2 = 5;
    gameState = "stages";
    health = 100;
    vhealth = 100;
    },3505);

  }else if (bulletsR2 === 0 && vhealth <= 0 && health > 0 || bulletsR1 === 0 && vhealth <= 0 && health > 0 || bulletsR1 > 0 && vhealth <= 0 && health > 0|| bulletsR2 > 0 && vhealth <= 0 && health > 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;
  
    setTimeout(function(){
      gameState = "stages";
      bulletsR2 = 5;
      health = 100;
      vhealth = 100;
      stage5WP = 0;
      current = 6;
    },1200);
    cost = 1000;  

  }
  
  // increases the size of the back button when hover
  push();
  if (mouseIsOver(back2)){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  // change the game state to "stages"
  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR2 = 5;
    health = 100;
    vhealth = 100;
  }
}

//----------------------------------------------------------------//

function stage6(){
  background(BADSImg);
  drawSprites();

  // displays the stage number, number of bullets, winning prize and health of both the helicopters
  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black");
  text("STAGE: 6", width/2-100,75);
  text("Bullets: "+bulletsR2+"/"+tBullets2, 1150,75);
  text("Winning Prize: "+stage6WP,25,50);
  text("My Health: "+health, width/2+400,125);
  text("Enemy's Health: "+vhealth, width/2-725,125);

  // making the necessary sprites visible
  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL.visible = false;
  shopNow1.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;
  v.visible =  false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = false;

  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();

  VHshoot6();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  // make the helicopter move with the arrow and "WAD" keys
  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-15;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 15;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-15;
  }
  helicopter.velocityY +=0.9;

  pop();

  // make the health of both the helicopters stay as zero when helicopter health is zero
  if (health < 0){
    health = 0;
  }

  if (vhealth < 0){
    vhealth = 0;
  }

  // shoot the bullets when space bar is pressed
  if (keyWentDown(32) && bulletsR2>0){
    Hshoot6();
    bulletsR2 -= 1;
  }

  // destroys the bullet
  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 35;
  }

  // conditions for loosing and winning in the battle
  if (bulletsR2 === 0 && vhealth > 0 && health > 0 || bulletsR2 === 0 && vhealth > 0 && health <= 0 || bulletsR1 === 0 && vhealth > 0 && health > 0 || bulletsR1 === 0 && vhealth > 0 && health <= 0 || bulletsR1 > 0 && vhealth > 0 && health <= 0|| bulletsR2 > 0 && vhealth > 0 && health <= 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1580);

    setTimeout(function(){
    bulletsR2 = 5;
    gameState = "stages";
    health = 100;
    vhealth = 100;
    },3505);

  }else if (bulletsR2 === 0 && vhealth <= 0 && health > 0 || bulletsR1 === 0 && vhealth <= 0 && health > 0 || bulletsR1 > 0 && vhealth <= 0 && health > 0|| bulletsR2 > 0 && vhealth <= 0 && health > 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;
  
    setTimeout(function(){
      gameState = "stages";
      bulletsR2 = 5;
      health = 100;
      vhealth = 100;
      stage6WP = 0;
      current = 7;
    },1200);

  }
  
  // increases the size of the back button when hover
  push();
  if (mouseIsOver(back2)){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  // change the game state to "stages"
  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR2 = 5;
    health = 100;
    vhealth = 100;
  }
}

//----------------------------------------------------------------//

function stage7(){
  background(BADSImg);
  drawSprites();

  // displays the stage number, number of bullets, winning prize and health of both the helicopters
  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("black");
  text("STAGE: 7", width/2-100,75);
  text("Bullets: "+bulletsR2+"/"+tBullets2, 1150,75);
  text("Winning Prize: "+stage7WP,25,50);
  text("My Health: "+health, width/2+400,125);
  text("Enemy's Health: "+vhealth, width/2-725,125);

  // making the necessary sprites visible
  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = true;
  BS.visible = false;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL.visible = false;
  shopNow1.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;
  v.visible =  false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  push();

  VHshoot7();
  helicopter.velocityX = 0;
  vHelicopter.velocityX = 0;

  // make the helicopter move with the arrow and "WAD" keys
  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-15;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 15;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-15;
  }
  helicopter.velocityY +=0.9;

  pop();

  // make the health of both the helicopters stay as zero when helicopter health is zero
  if (health < 0){
    health = 0;
  }

  if (vhealth < 0){
    vhealth = 0;
  }

  // shoot the bullets when space bar is pressed
  if (keyWentDown(32) && bulletsR2>0){
    Hshoot7();
    bulletsR2 -= 1;
  }

  // destroys the bullet
  if (HHbullet.isTouching(vHelicopter)){
    Hbullet.destroy();
    vhealth -= 40;
  }

  // conditions for loosing and winning in the battle
  if (bulletsR2 === 0 && vhealth > 0 && health > 0 || bulletsR2 === 0 && vhealth > 0 && health <= 0 || bulletsR1 === 0 && vhealth > 0 && health > 0 || bulletsR1 === 0 && vhealth > 0 && health <= 0 || bulletsR2 > 0 && vhealth > 0 && health <= 0|| bulletsR1 > 0 && vhealth > 0 && health <= 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1580);

    setTimeout(function(){
    bulletsR2 = 5;
    gameState = "stages";
    health = 100;
    vhealth = 100;
    },3505);

  }else if (bulletsR2 === 0 && vhealth <= 0 && health > 0 ||bulletsR1 === 0 && vhealth <= 0 && health > 0 || bulletsR1 > 0 && vhealth <= 0 && health > 0|| bulletsR2 > 0 && vhealth <= 0 && health > 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;
  
    setTimeout(function(){
      gameState = "stages";
      bulletsR2 = 5;
      health = 100;
      vhealth = 100;
      stage7WP = 0;
      current = 8;
    },1200);

  }
  
  // increases the size of the back button when hover
  push();
  if (mouseIsOver(back2)){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  // change the game state to "stages"
  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR2 = 5;
    health = 100;
    vhealth = 100;
  }
}

//----------------------------------------------------------------//

function stage8(){
  background(BANSImg);
  drawSprites();

  // displays the stage number, number of bullets, winning prize and health of both the helicopters
  textSize(40);
  strokeWeight(3);
  stroke("black");
  fill("white");
  text("STAGE: 8 (BOSS LEVEL)", width/2-200,75);
  text("Bullets: "+bulletsR2+"/"+tBullets2, 1150,75);
  text("Winning Prize: "+stage8WP,25,50);
  text("My Health: "+health, width/2+400,125);
  text("Enemy's Health: "+vhealth, width/2-725,125);

  // making the necessary sprites visible
  story.visible = false;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = true;
  FH.visible = false;
  FVH.visible = false;
  helicopter.visible = true;
  vHelicopter.visible = false;
  BS.visible = true;
  heart.visible = false;
  info.visible = false;
  tele.visible = false;
  insta.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL.visible = false;
  shopNow1.visible = false;
  gear.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;
  v.visible =  false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = false;

  hBar1.visible = true;
  hBar1.visible = true;
  vhBar.visible = true;
  vhBar1.visible = true;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;
 
  push();
  helicopter.velocityX = 0;
  BS.velocityX = 0;

  BSshoot();

  // make the helicopter move with the arrow and "WAD" keys
  if (keyDown("LEFT_ARROW") || keyDown(65)){
    helicopter.velocityX =-10;
  }
  if (keyDown("RIGHT_ARROW") || keyDown(68)){
    helicopter.velocityX = 10;
  }
  if (keyDown("UP_ARROW") || keyDown(87)){
    helicopter.velocityY =-10;
  }
  helicopter.velocityY +=0.6;

  pop();

  // make the health of both the helicopters stay as zero when helicopter health is zero
  if (health < 0){
    health = 0;
  }

  if (vhealth < 0){
    vhealth = 0;
  }

  // shoot the bullets when space bar is pressed
  if (keyWentDown(32) && bulletsR2>0){
    Hshoot8();
    bulletsR2 -= 1;
  }

  // destroys the bullet
  if (HHbullet.isTouching(BS)){
    Hbullet.destroy();
    vhealth -= 45;
  }

  // conditions for loosing and winning in the battle
  if (bulletsR2 === 0 && vhealth > 0 && health > 0 || bulletsR2 === 0 && vhealth > 0 && health <= 0 || bulletsR1 === 0 && vhealth > 0 && health > 0 || bulletsR1 === 0 && vhealth > 0 && health <= 0 || bulletsR1 > 0 && vhealth > 0 && health <= 0|| bulletsR2 > 0 && vhealth > 0 && health <= 0){
    setTimeout(function(){ 
      fail.visible = true;
      helicopter.velocityX = 0;
      helicopter.velocityY = 0;
    }, 1580);

    setTimeout(function(){
    bulletsR2 = 5;
    gameState = "stages";
    health = 100;
    vhealth = 100;
    },3505);

  }else if (bulletsR2 === 0 && vhealth <= 0 && health > 0|| bulletsR1 === 0 && vhealth <= 0 && health > 0 || bulletsR2 > 0 && vhealth <= 0 && health > 0|| bulletsR2 > 0 && vhealth <= 0 && health > 0){
    completed.visible = true;
    helicopter.velocityX = 0;
    helicopter.velocityY = 0;
  
    setTimeout(function(){
      gameState = "end";
      bulletsR2 = 5;
      health = 100;
      vhealth = 100;
      stage8WP = 0;
      current = 9;
    },1200);

  }

  // increases the size of the back button when hover
  push();
  if (mouseIsOver(back2)){
    back2.scale = 0.25;
  }else{
    back2.scale = 0.2;
  }
  pop();

  // change the game state to "stages"
  if (mousePressedOver(back2)){
    click.play();
    gameState = "stages";
    bulletsR2 = 5;
    health = 100;
    vhealth = 100;
  }
}

//----------------------------------------------------------------//

function end(){
  drawSprites();

  // making the necessary sprites visible
  story.visible = true;
  play.visible = false;
  stage_B1.visible = false;
  back.visible = false;
  stage_B2.visible = false;
  shop_B.visible = false;
  back2.visible = false;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;
  info.visible = false;
  insta.visible = false;
  tele.visible = false;
  shop.visible = false;
  dummyheli.visible = false;
  missionAccomplished.visible = true;
  replay.visible = true;
  BL.visible = false;
  shopNow1.visible = false;
  gear.visible = true;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;
  v.visible =  false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = false;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  // display "warcopter, time to battle and news" in the end
  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("WarCopter",50,100);

  textSize(30);
  strokeWeight(3);
  text("Time To Battle",650,150);
  stroke("black");
  fill("grey");
  text("NEW LEVELS COMMING SOON!!", 500, 660);
  push();

  // increases the size of the sprites when hover
  if (mouseIsOver(story)){
    story.scale = 0.85;
  }else{
    story.scale = 0.75;
  }
  if (mouseIsOver(gear)){
    gear.scale = 0.125;
  }else{
    gear.scale = 0.1; 
  }
  if (mouseIsOver(replay)){
    replay.scale = 0.25;
  }else{
    replay.scale = 0.2;
  }
  pop();

  // chance the game state according t o their respective sprites
  if (mousePressedOver(replay)){
    click.play();
    gameState = "home";
    life = 3
    current = 1;
    coins = 100;
    changeLife = YES
  }

  if (mousePressedOver(story)){
    click.play();
    gameState = "story";
  }

  if (mousePressedOver(gear)){
    click.play();
    gameState = "more";
  }
}

//----------------------------------------------------------------//

function vList(){
  background(shopBG_Img);
  drawSprites();

  // making the necessary sprites visible
  story.visible = false;
  play.visible = false;
  stage_B1.visible = true;
  back.visible = false;
  stage_B2.visible = true;
  shop_B.visible = false;
  back2.visible = true;
  helicopter.visible = false;
  vHelicopter.visible = false;
  FH.visible = false;
  FVH.visible = false;
  BS.visible = false;
  fail.visible = false;
  completed.visible = false;
  heart.visible = false;
  info.visible = false;
  insta.visible = false;
  tele.visible = false;
  shop.visible = false;
  missionAccomplished.visible = false;
  replay.visible = false;
  BL.visible = false;
  shopNow1.visible = false;
  gear.visible = false;
  dummyheli.visible = false;
  disc1.visible = false;
  disc2.visible = false;
  disc3.visible = false;
  disc4.visible = false;
  mute.visible = false;
  music.visible = false;
  v.visible =  false;
  shopNow2.visible = false;
  shopNow3.visible = false;
  shopNow4.visible = false;
  BT1.visible = false;
  BT2.visible = false;
  BT3.visible = false;
  lock1.visible = false;
  lock2.visible = false
  lock3.visible = false;
  DFBG.visible = false;

  hBar1.visible = false;
  hBar1.visible = false;
  vhBar.visible = false;
  vhBar1.visible = false;

  s1.visible = false;
  s2.visible = false;
  s3.visible = false;
  s4.visible = false;
  s5.visible = false;
  s6.visible = false;
  s7.visible = false;
  s8.visible = false;

  // displays "version list"
  textSize(80);
  textStyle(BOLD);
  strokeWeight(8);
  stroke("grey");
  fill("black");
  text("Versions List",525,120);

  // shoes the list of versions
  textSize(20);
  strokeWeight(3);
  text("v1.1.0 - (NEW) Structured the game, Stages, Battle and background Music is added.",250,180);
  text("v1.1.1 - Major bug fixes, Stages and Battle area are improved.",250,210);
  text("v1.2.0 - (NEW) Life is added which is given by 5, coins are added, minor bug fixes.",250,240);
  text("v1.2.1 - (NEW) Story, Info and Shop are added, major bug fixes.",250,270);
  text("v1.2.2 - Story Info and Shop are improved",250,300);
  text("v1.3.0 - Stages and Info are improved, major bug fixes in battle area",250,330);
  text("v1.3.1 - Shop is improved, Life is decreased from 5 to 3, munor bug fixes.",250,360);
  text("v1.3.2 - Improved battle area, munor bug fixes.",250,390);
  text("v1.3.3 - Shop is improved, Battelling become more smoother, minor bug fixes.",250,420);
  text("v1.4.0 - (NEW) More icon and Music icon are added with 3 new Background Musics",250,450);
  text("v1.4.1 - (NEW) Versions List is added, Mojor bug fixes.",250,480);
  text("v1.4.2 - Major bug fixes, shop, background Music and info are improved.",250,510);

  push();
  fill("red");
  text("v1.5.0 - Under Process!!",250,540);
  pop();

  // increases the size of the back button when hover
  push();
  if (mouseIsOver(back2)){
    back2.scale = 0.29;
  }else{
    back2.scale = 0.25;
  }
  pop();

  // change the game state to "more"
  if (mousePressedOver(back2)){
    click.play();
    gameState = "more";
  }
}

//----------------------------------------------------------------//

// functions for shooting bullets by pressing "space bar"
function Hshoot1(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -25;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 50;
  Hbullet.y = helicopter.y;
  shoot.play();
  shoot.setVolume(0.2);
  HHbullet.add(Hbullet);
}

//----------------------------------------------------------------//

function Hshoot2(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -30;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  shoot.play();
  shoot.setVolume(0.2);

  HHbullet.add(Hbullet);
}

//----------------------------------------------------------------//

function Hshoot3(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -35;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  shoot.play();  
  shoot.setVolume(0.2);

  HHbullet.add(Hbullet);
}

//----------------------------------------------------------------//

function Hshoot4(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -40;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  shoot.play();  
  shoot.setVolume(0.2);
  HHbullet.add(Hbullet);
}

//----------------------------------------------------------------//

function Hshoot5(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -40;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  shoot.play();  
  shoot.setVolume(0.2);
  HHbullet.add(Hbullet);
}

//----------------------------------------------------------------//

function Hshoot6(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -40;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  shoot.play();  
  shoot.setVolume(0.2);
  HHbullet.add(Hbullet);
}

//----------------------------------------------------------------//

function Hshoot7(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -45;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  shoot.play();  
  shoot.setVolume(0.2);
  HHbullet.add(Hbullet);
}

//----------------------------------------------------------------//

function Hshoot8(){
  Hbullet= createSprite(helicopter.x,helicopter.y, 10, 10);
  Hbullet.velocityX = -50;
  Hbullet.addImage(bullet3_Img);
  Hbullet.scale=0.02;
  Hbullet.lifetime = 1000;
  Hbullet.y = helicopter.y;
  shoot.play();  
  shoot.setVolume(0.2);
  HHbullet.add(Hbullet);
}

//----------------------------------------------------------------//

// functions for shooting bullets by enemy helicopters
function VHshoot1() {
  if(frameCount % 40 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 25;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    shoot.play();  
    shoot.setVolume(0.2);

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 15;
  }
}

//----------------------------------------------------------------//

function VHshoot2() {
  if(frameCount % 40 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 30;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    shoot.play();  
    shoot.setVolume(0.2);

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 20;
  }
}

//----------------------------------------------------------------//

function VHshoot3() {
  if(frameCount % 40 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 35;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    shoot.play();  
    shoot.setVolume(0.2);

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 25;
  }
}

//----------------------------------------------------------------//

function VHshoot4() {
  if(frameCount % 30 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 40;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    shoot.play();  
    shoot.setVolume(0.2);

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 30;
  }
}

//----------------------------------------------------------------//

function VHshoot5() {
  if(frameCount % 25 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 40;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    shoot.play();  
    shoot.setVolume(0.2);

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 35;
  }
}

//----------------------------------------------------------------//

function VHshoot6() {
  if(frameCount % 25 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 40;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    shoot.play();  
    shoot.setVolume(0.2);

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 40;
  }
}

//----------------------------------------------------------------//

function VHshoot7() {
  if(frameCount % 25 === 0){
    VHbullet= createSprite(200,random(150,600), 10, 10);
    VHbullet.velocityX = 45;
    VHbullet.addImage(bullet2_Img);
    VHbullet.scale=0.02;
    VHbullet.lifetime = 1000;
    vHelicopter.y = VHbullet.y;
    shoot.play();  
    shoot.setVolume(0.2);

    Vbullet.add(VHbullet);
  }

  if (Vbullet.isTouching(helicopter)){
    VHbullet.destroy();
    health -= 45;
  }
}

//----------------------------------------------------------------//

// functions for shooting bullets by enemy space ship
function BSshoot(){
  if(frameCount % 20 === 0){
    Bbullet= createSprite(200,random(150,600), 10, 10);
    Bbullet.velocityX = 50; 
    Bbullet.addImage(bullet1_Img);
    Bbullet.scale=0.08;
    Bbullet.lifetime = 1000;
    BS.y = Bbullet.y;
    shoot.play();  
    shoot.setVolume(0.2);

    Bbullets.add(Bbullet);
  }

  if (Bbullets.isTouching(helicopter)){
    Bbullet.destroy();
    health -= 50;
  }
}

//----------------------------------------------------------------//

// function to stop the background music
function ED(){
  BM1.stop();
  BM2.stop();
  BM3.stop();
  BM4.stop();

  disc1.rotationSpeed = 0;
  disc2.rotationSpeed = 0;
  disc3.rotationSpeed = 0;
  disc4.rotationSpeed = 0;
}

//----------------------------------------------------------------//

// functions to play different musics
function d1(){
  BM2.stop();
  BM3.stop();
  BM4.stop();

  BM1.loop();
  BM1.setVolume(0.2);
}

//----------------------------------------------------------------//

function d2(){
  BM1.stop();
  BM3.stop();
  BM4.stop();
  
  BM2.loop();
  BM2.setVolume(0.1);
}

//----------------------------------------------------------------//

function d3(){
  BM1.stop();
  BM2.stop();
  BM4.stop();

  BM3.loop();
  BM3.setVolume(0.1);
}

//----------------------------------------------------------------//

function d4(){
  BM1.stop();
  BM2.stop();
  BM3.stop();

  BM4.loop();
  BM4.setVolume(0.1);
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//                                                                                                                                                                  //
//      ////////////////       ////          ////         //////////////////                   //////////////////         //////      ///       ////////////        //
//            ///              ////          ////         /////                                /////                     ///  ///     ///       ///       ///       //
//            ///              ////          ////         /////                                /////                     ///   ///    ///       ///        ///      //
//            ///              //////////////////         //////////////                       //////////////            ///    ///   ///       ///        ///      //
//            ///              ////          ////         /////                                /////                     ///     ///  ///       ///        ///      //
//            ///              ////          ////         /////                                /////                     ///      /// ///       ///       ///       //
//            ///              ////          ////         //////////////////                   //////////////////        ///       /////        ////////////        //
//                                                                                                                                                                  //
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//
