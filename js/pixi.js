let Application = PIXI.Application,
	loader = PIXI.Loader.shared,
	resources = PIXI.Loader.shared.resources,
	Sprite = PIXI.Sprite,
	Text = PIXI.Text;

const app = new Application({
	autoResize: true, transparent: true, resolution: devicePixelRatio || 1,
});
document.querySelector('#frame').appendChild(app.view);

loader
	.add([
		"img/monkey3.png",
		"img/monkey2.png",
		"img/ability_move.png",
		"img/leper.ability.five.png",
		"img/flygon.json",
		"js/creatures.json",
		"js/moves.json",
		{name:'toad3_skeleton', url:'img/toad3_2_ske.json'},
		{name:'toad3_texture_json', url:'img/toad3_2_tex.json'},
		{name:'toad3_texture_png', url:'img/toad3_2_tex.png'},
		{name:'fume_skeleton', url:'img/fume_ske.json'},
		{name:'fume_texture_json', url:'img/fume_tex.json'},
		{name:'fume_texture_png', url:'img/fume_tex.png'},
		{name:'fume2_skeleton', url:'img/fume2_ske.json'},
		{name:'fume2_texture_json', url:'img/fume2_tex.json'},
		{name:'fume2_texture_png', url:'img/fume2_tex.png'},
		{name:'goat2_2_skeleton', url:'img/goat2_2_ske.json'},
		{name:'goat2_2_texture_json', url:'img/goat2_2_tex.json'},
		{name:'goat2_2_texture_png', url:'img/goat2_2_tex.png'}
	])
	.on("progress", loadProgressHandler)
	.load(setup);

function loadProgressHandler(loader, resource) {

  //Display the file `url` currently being loaded
  console.log("loading: " + resource.url); 

  //Display the percentage of files currently loaded
  console.log("progress: " + loader.progress + "%"); 

  //If you gave your files names as the first argument 
  //of the `add` method, you can access them like this
  //console.log("loading: " + resource.name);
}

class Creature{
	constructor({id = 0, level = 1, statDis = [0,0,0,0,0,0,0], moves=[0,0,0,0]}){
		this.id = id;
		this.level = level;
		this.statDis = statDis;
		this.moves = moves;
		
		const creatureList = resources["js/creatures.json"];	
		console.log("Creature name: " + creatureList.data.creatures[this.id].name);
		
		this.name = creatureList.data.creatures[this.id].name;
		this.elements = creatureList.data.creatures[this.id].elements;
		
		this.EHP = Math.round((((2*creatureList.data.creatures[this.id].hp + this.statDis[0]) * this.level)/100) + this.level + 10);
		this.stats = [
			this.EHP, 
			creatureList.data.creatures[this.id].dodge + this.statDis[1]/2,
			creatureList.data.creatures[this.id].patk + this.statDis[2],
			creatureList.data.creatures[this.id].pdef + this.statDis[3],
			creatureList.data.creatures[this.id].satk + this.statDis[4],
			creatureList.data.creatures[this.id].sdef + this.statDis[5],
			creatureList.data.creatures[this.id].spd + this.statDis[6]
		];
// 		this.HP = this.EHP;
// 		this.Dodge = obj.data.creatures[this.id].dodge + this.statDis[1]/2;
// 		this.PAtk = obj.data.creatures[this.id].patk + this.statDis[2];
// 		this.PDef = obj.data.creatures[this.id].pdef + this.statDis[3];
// 		this.SAtk = obj.data.creatures[this.id].satk + this.statDis[4];
// 		this.SDef = obj.data.creatures[this.id].sdef + this.statDis[5];
// 		this.Spd = obj.data.creatures[this.id].spd + this.statDis[6];
	}
	
	heal(){
		this.stats[0] = this.EHP;	
	}
// 	get hp(){
// 		return this.calcHP();
// 	}
	
// 	get PAtk(){
// 		return this.calcPAtk();	
// 	}
	
// 	calcHP(){
// 		return this.level * 5;
// 	}
	
// 	calcPAtk(){
// 		return this.level * 2;	
// 	}
}

let state, stats, consoleScreen, hero1, hero2, hero3, hero4, enemy1, enemy2, enemy3, enemy4, debug;
const container = new PIXI.Container();

const rosterHero = new PIXI.Container();
const rosterEnemy = new PIXI.Container();

const hero1Container = new PIXI.Container();
const hero2Container = new PIXI.Container();
const hero3Container = new PIXI.Container();
const hero4Container = new PIXI.Container();
const enemy1Container = new PIXI.Container();
const enemy2Container = new PIXI.Container();
const enemy3Container = new PIXI.Container();
const enemy4Container = new PIXI.Container();

const rect = new PIXI.Graphics();
const rect2 = new PIXI.Graphics();

const rectHero = new PIXI.Graphics();
const rectEnemy = new PIXI.Graphics();

var textureButton, textureButtonDown;
//var isFullScreen = false;

const framesIdleFlygon = [];
const framesIdleHippowdon = [];
const framesIdleCarvanha = [];
const framesIdleQuilava = [];
const framesIdleCrobat = [];
const framesIdleMagmortar = [];
const framesIdleMamoswine = [];

function setup(){	
	
	// Create a new texture
	const texture = PIXI.Texture.from('img/monkey3.png');
	
	textureButtonDown = PIXI.Texture.from('img/ability_move.png');
	textureButton = PIXI.Texture.from('img/leper.ability.five.png');
	
	consolePrint("SETUP");
	// PIXI.settings.ROUND_PIXELS = true;
	rect.beginFill(0xccffcc).drawRect(-50, -50, 100, 100);

	// Add it to the stage
	app.stage.addChild(rect);
	
	rect2.beginFill(0xccffcc).drawRect(-50, -50, 100, 100);
	rect2.x = 100;
	rect2.y = 100;
// 	app.stage.addChild(rect2);
	
	rectHero.beginFill(0xaec6cf).drawRect(0, 0, -200, -100);
	rectHero.x = 0;
	rectHero.y = 0;
	rosterHero.addChild(rectHero);
	
	rectEnemy.beginFill(0xff6961).drawRect(0, 0, 200, -100);
	rectEnemy.x = 0;
	rectEnemy.y = 0;
	rosterEnemy.addChild(rectEnemy);
	
	rosterHero.x = app.screen.width/2;
	rosterHero.y = app.screen.height/2;
	
	rosterEnemy.x = app.screen.width/2;
	rosterEnemy.y = app.screen.height/2;
	
	const movesList = resources["js/moves.json"];	
	
	const creature1 = new Creature({id:2, level:45, statDis:[5, 0, 8, 12, 7, 13, 0], moves:[0, 1, 2, 3]});
// 	const creature1 = new Creature({id:2});
	
	console.log(creature1.EHP);
	console.log(creature1.stats[0]);
	creature1.stats[0] -= 21;
	console.log(creature1.stats[0]);
	creature1.heal();
	console.log(creature1.stats[0]);
	
	console.log(movesList.data.moves[creature1.moves[2]].name);
	console.log(movesList.data.moves[creature1.moves[2]].tags);
	
	//const obj = resources["js/creatures.json"];
	
	debug = new Text("Creature element: " + creature1.name);
	debug.x = 100;
	debug.y = 200;
	
	//Current display stats
	stats = new Text("Resolution: " + app.renderer.resolution +
		"\nInner Width: " + window.innerWidth + 
		"\nInner Height: " + window.innerHeight);
	app.stage.addChild(stats);	

	//Console text printout
	consoleScreen = new Text("Console: ");
	app.stage.addChild(consoleScreen);
	consoleScreen.x = 300;
	
	//Resize button
	var button = new PIXI.Sprite(textureButton);
    	button.buttonMode = true;
    	button.anchor.set(0.5);
    	button.position.x = 50;
    	button.position.y = 50;
    	// make the button interactive...
    	button.interactive = true;
	button.accessible = true;
	button.accessibleTitle = "Fullscreen button";
	button
        // set the mousedown and touchstart callback...
        .on('pointerdown', onButtonDown);
	
// 	document.addEventListener('fullscreenerror', (event) => {
// 		alert('an error occurred changing into fullscreen');
// 		alert(event);
// 		console.error('an error occurred changing into fullscreen');
// 		console.log(event);
// 	});

	app.stage.addChild(button);
	
	app.stage.addChild(container);
	var anchorX1 = 1;
	var anchorY1 = 1;
	var anchorX2 = 1;
	var anchorY2 = 1;
	var globalScale = 2;
	var spriteSpacer = 2;
	
	app.stage.addChild(rosterHero);
	app.stage.addChild(rosterEnemy);
	
	//Load spritesheet
	//Flygon
// 	const hero4Container  = new PIXI.Container();
// 	const healthBar = new PIXI.Container();
	
// 	let innerBar = new PIXI.Graphics();
// 	innerBar.beginFill(0x222222);
// 	innerBar.drawRoundedRect(0, 0, 120, 20, 10);
// 	innerBar.endFill();
// 	healthBar.addChild(innerBar);
	
// 	let outerBar = new PIXI.Graphics();
// 	outerBar.beginFill(0x2C8A2C);
// 	outerBar.drawRoundedRect(0, 0, 120, 20, 10);
// 	outerBar.endFill();
// 	healthBar.addChild(outerBar);
// 	healthBar.outer = outerBar;
	
// 	healthBar.outer.width = 50;
	
// 	hero4Container.addChild(healthBar);
	
// 	for (let i = 0; i < 125; i++) {
//         	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
//         	// magically works since the spritesheet was loaded with the pixi loader
//         	framesIdleFlygon.push(PIXI.Texture.from(`flygonIdleSequence0${val}.png`));
//     	}
// 	hero4 = new PIXI.AnimatedSprite(framesIdleFlygon);
// 	hero4.x = -3*50*spriteSpacer;
// 	hero4.y = 0;
// 	hero4.scale.set(globalScale);
// 	hero4.anchor.set(anchorX1,anchorY1);
// 	hero4.animationSpeed = 0.5;
// 	hero4.play();
	
// 	healthBar.x = -(hero4.width/2) - 60;
// 	healthBar.y = -300;
	
// 	hero4Container.addChild(hero4);
// 	hero4Container.x = -3*50*spriteSpacer;
// 	hero4Container.y = 0;
// 	app.stage.addChild(anim);
	
	
	const factory = dragonBones.PixiFactory.factory;
    	factory.parseDragonBonesData(resources.toad3_skeleton.data);
    	factory.parseTextureAtlasData(resources.toad3_texture_json.data, resources.toad3_texture_png.texture);
	factory.parseDragonBonesData(resources.goat2_2_skeleton.data);
    	factory.parseTextureAtlasData(resources.goat2_2_texture_json.data, resources.goat2_2_texture_png.texture);
	factory.parseDragonBonesData(resources.fume2_skeleton.data);
    	factory.parseTextureAtlasData(resources.fume2_texture_json.data, resources.fume2_texture_png.texture);
	
    	const armatureHero1 = factory.buildArmatureDisplay('toad3_2', 'toad3_2');
    	armatureHero1.animation.play('idle');
	armatureHero1.scale.set(0.35,0.35);	
	const armatureHero2 = factory.buildArmatureDisplay('goat2_2', 'goat2_2');
    	armatureHero2.animation.gotoAndPlayByFrame('idle', 24);
	armatureHero2.scale.set(0.25,0.25);
	const armatureHero3 = factory.buildArmatureDisplay('goat2_2', 'goat2_2');
    	armatureHero3.animation.gotoAndPlayByFrame('idle', 57);
	armatureHero3.scale.set(0.25,0.25);
	
	const armatureEnemy1 = factory.buildArmatureDisplay('goat2_2', 'goat2_2');
    	armatureEnemy1.animation.play('idle');
	armatureEnemy1.scale.set(-0.25,0.25);	
	const armatureEnemy2 = factory.buildArmatureDisplay('toad3_2', 'toad3_2');
	armatureEnemy2.animation.gotoAndPlayByFrame('idle', 12);
//     	armatureEnemy2.animation.play('idle');
	armatureEnemy2.scale.set(-0.35,0.35);	
// 	const armatureEnemy3 = factory.buildArmatureDisplay('goat2_2', 'goat2_2');
// 	armatureEnemy3.animation.gotoAndPlayByFrame('idle', 20);
// //     	armatureEnemy3.animation.play('idle');
// 	armatureEnemy3.scale.set(-0.25,0.25);	
	const armatureEnemy4 = factory.buildArmatureDisplay('goat2_2', 'goat2_2');
	armatureEnemy4.animation.gotoAndPlayByFrame('idle', 67);
//     	armatureEnemy4.animation.play('idle');
	armatureEnemy4.scale.set(-0.25,0.25);	

    	const fumeDisplay = factory.buildArmatureDisplay('Fume2', 'fume2');
    	fumeDisplay.animation.play('Fume2');
// 	fumeDisplay.animation.timeScale = 0.5;
	fumeDisplay.scale.set(0.30,0.30);
    	fumeDisplay.x = -180.0;
    	fumeDisplay.y = -130;	
	const fumeDisplay2 = factory.buildArmatureDisplay('Fume2', 'fume2');
	fumeDisplay2.animation.gotoAndPlayByFrame('Fume2', 12);
	fumeDisplay2.scale.set(0.35,0.35);
    	fumeDisplay2.x = -155.0;
    	fumeDisplay2.y = -245.0;	
	const fumeDisplay3 = factory.buildArmatureDisplay('Fume2', 'fume2');
	fumeDisplay3.animation.gotoAndPlayByFrame('Fume2', 30);
	fumeDisplay3.scale.set(0.32,0.32);
    	fumeDisplay3.x = -80.0;
    	fumeDisplay3.y = -240.0;
	
	hero1Container.addChild(fumeDisplay2);
	hero1Container.addChild(fumeDisplay3);
    	hero1Container.addChild(armatureHero1);
	hero1Container.addChild(fumeDisplay);
	
	hero2Container.addChild(armatureHero2);
	hero3Container.addChild(armatureHero3);
	
	enemy1Container.addChild(armatureEnemy1);
	enemy2Container.addChild(armatureEnemy2);
// 	enemy3Container.addChild(armatureEnemy3);
	enemy4Container.addChild(armatureEnemy4);
	
	hero1Container.x = 0;
	hero2Container.x = -2*50*spriteSpacer;
	hero3Container.x = -3*50*spriteSpacer;
	
	enemy1Container.x = 0;
	enemy2Container.x = 1*50*spriteSpacer;
// 	enemy3Container.x = 2*50*spriteSpacer;
	enemy4Container.x = 3*50*spriteSpacer;
	
	rosterHero.addChild(hero1Container);
	rosterHero.addChild(hero2Container);
	rosterHero.addChild(hero3Container);
	
	rosterEnemy.addChild(enemy1Container);
	rosterEnemy.addChild(enemy2Container);
// 	rosterEnemy.addChild(enemy3Container);
	rosterEnemy.addChild(enemy4Container);
	
	app.stage.addChild(debug);
	
	// Move container to the center
	container.x = app.screen.width/2;
	container.y = app.screen.height/2;
	
	// Center bunny sprite in local container coordinates
	container.pivot.x = container.width / 2;
	container.pivot.y = container.height / 2;
	
	//Console print setup phase
	consoleScreen.text = "Setup" + consoleScreen.text;
	
	//Resize the screen
	window.addEventListener('resize', resize);

	resize();

	state = play;
	app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){
	state(delta);
}

function play(delta){
// 	container.rotation -= 0.01 * delta;
	stats.text = "ResolutionTest5: " + app.renderer.resolution +
		"\nInner Width: " + window.innerWidth + 
		"\nInner Height: " + window.innerHeight +
		"\nAppScreen Width: " + app.screen.width + 
		"\nAppScreen Height: " + app.screen.height +
		"\nRect2 Width: " + rect2.width;
}

// // Listen for animate update
// app.ticker.add((delta) => {
// 	// rotate the container!
// 	// use delta to create frame-independent transform
// 	container.rotation -= 0.01 * delta;
// });

// Listen for window resize events


// Resize function window
function resize() {
	// Resize the renderer
	console.log(
		"PRE-RESIZE" + 
		"\nResolution: " + app.renderer.resolution +
		"\nInner Width: " + window.innerWidth + 
		"\nInner Height: " + window.innerHeight
		);
	const parent = app.view.parentNode;
	app.renderer.resize(parent.clientWidth, parent.clientHeight);
	rect.position.set(app.screen.width/2, app.screen.height/2);
	container.position.set(app.screen.width/2, app.screen.height/2);
// 	hero4.position.set(app.screen.width/2, app.screen.height/2);
// 	enemy1.position.set(app.screen.width/2, app.screen.height/2);
	
	rosterHero.position.set(app.screen.width/2-50, app.screen.height/2);
	rosterEnemy.position.set(app.screen.width/2+50, app.screen.height/2);
	
// 	armatureContainer.position.set(app.screen.width/2-50, app.screen.height/2);
	
// 	anim.position.set(app.screen.width/2, app.screen.height/2);
// 	anim2.position.set(app.screen.width/2, app.screen.height/2);
	
// 	rect2.position.set(app.screen.width/2, app.screen.height/3);
// 	rect2.width = app.screen.width/2;
	
	//Console log RESIZE
	consolePrint("RESIZE");
	consoleScreen.text = "RESIZE\n" + consoleScreen.text;
}

function consolePrint(fromText){
	console.log(
		fromText + 
		"\nResolution: " + app.renderer.resolution +
		"\nRendererWidth: " + app.renderer.width + 
		"\nRendererHeight: " + app.renderer.height
		);
}

function onButtonDown(){
	if (screenfull.isEnabled) {
		screenfull.toggle();
	}
}

function onButtonDown2(){
	//var elem = document.getElementById("frame");
	var elem = document.documentElement;
	if(!document.fullscreenElement && !document.mozFullScreenElement && !document.msFullScreenElement && !document.webkitFullScreenElement){
		//isFullScreen = true;
		this.texture = textureButtonDown;
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) { /* Firefox */
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) { /* IE/Edge */
			elem.msRequestFullscreen();
		}
		console.log("setFullScreen5");
		consoleScreen.text = "setFullScreen4\n" + consoleScreen.text;
	}else{
		//isFullScreen = false;
		this.texture = textureButton;
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) { /* Firefox */
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) { /* IE/Edge */
			document.msExitFullscreen();
		}
		console.log("exitFullScreen5");
		consoleScreen.text = "exitFullScreen4\n" + consoleScreen.text;
	}
}
