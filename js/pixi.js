let Application = PIXI.Application,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
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
		"img/crobat.json",
		"img/magmortar.json",
		"img/hippowdon.json",
		"img/mawile.json",
		"img/quilava.json",
		"img/mamoswine.json"
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

let state, stats, consoleScreen, hero1, hero2, hero3, hero4, enemy1, enemy2, enemy3, enemy4;
const container = new PIXI.Container();

const rosterHero = new PIXI.Container();
const rosterEnemy = new PIXI.Container();

const rect = new PIXI.Graphics();
const rect2 = new PIXI.Graphics();

const rectHero = new PIXI.Graphics();
const rectEnemy = new PIXI.Graphics();

var textureButton, textureButtonDown;
//var isFullScreen = false;

const framesIdleFlygon = [];
const framesIdleHippowdon = [];
const framesIdleMawile = [];
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
	
	// Create a 5x5 grid of bunnies
// 	for (let i = 0; i < 25; i++) {
// 		const bunny = new Sprite(texture);
// 		bunny.anchor.set(0.5);
// 		bunny.x = (i % 5) * 40;
// 		bunny.y = Math.floor(i / 5) * 40;
// 		container.addChild(bunny);
// 	}

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
	for (let i = 0; i < 125; i++) {
        	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
        	// magically works since the spritesheet was loaded with the pixi loader
        	framesIdleFlygon.push(PIXI.Texture.from(`flygonIdleSequence0${val}.png`));
    	}
	hero1 = new PIXI.AnimatedSprite(framesIdleFlygon);
	hero1.x = 0;
	hero1.y = 0;
	hero1.scale.set(globalScale);
	hero1.anchor.set(anchorX1,anchorY1);
	hero1.animationSpeed = 0.5;
	hero1.play();
	
// 	app.stage.addChild(anim);
	
	//Hippowdon
	for (let i = 0; i < 91; i++) {
        	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
        	framesIdleHippowdon.push(PIXI.Texture.from(`hippowdonIdleSequence0${val}.png`));
    	}
	hero2 = new PIXI.AnimatedSprite(framesIdleHippowdon);
	hero2.x = -1*50*spriteSpacer;
	hero2.y = 0;
	hero2.scale.set(globalScale);
	hero2.anchor.set(anchorX1,anchorY1);
	hero2.animationSpeed = 0.5;
	hero2.play();	
	
	//Mawile
	for (let i = 0; i < 155; i++) {
        	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
        	framesIdleMawile.push(PIXI.Texture.from(`mawileIdleSequence0${val}.png`));
    	}
	hero3 = new PIXI.AnimatedSprite(framesIdleMawile);
	hero3.x = -2*50*spriteSpacer;
	hero3.y = 0;
	hero3.scale.set(globalScale);
	hero3.anchor.set(anchorX1,anchorY1);
	hero3.animationSpeed = 0.5;
	hero3.play();	
	
	//quilava
	for (let i = 0; i < 82; i++) {
        	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
        	// magically works since the spritesheet was loaded with the pixi loader
        	framesIdleQuilava.push(PIXI.Texture.from(`quilavaIdleSequence0${val}.png`));
    	}
	hero4 = new PIXI.AnimatedSprite(framesIdleQuilava);	
	hero4.x = 0;
	hero4.y = 0;
	hero4.scale.set(globalScale);
	hero4.anchor.set(anchorX1,anchorY1);
	hero4.animationSpeed = 0.5;
	hero4.play();	
// 	app.stage.addChild(hero4);
	
	
	//crobat
	for (let i = 0; i < 95; i++) {
        	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
        	framesIdleCrobat.push(PIXI.Texture.from(`crobatIdleSequence0${val}.png`));
    	}
	enemy1 = new PIXI.AnimatedSprite(framesIdleQuilava);
	enemy1.x = 0;
	enemy1.y = 0;
	enemy1.scale.set(-globalScale, globalScale);
	enemy1.anchor.set(anchorX2,anchorY2);
	enemy1.animationSpeed = 0.5;
	enemy1.play();	
// 	app.stage.addChild(enemy1);
	
	//magmortar
	for (let i = 0; i < 160; i++) {
        	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
        	// magically works since the spritesheet was loaded with the pixi loader
        	framesIdleMagmortar.push(PIXI.Texture.from(`magmortarIdleSequence0${val}.png`));
    	}
	enemy2 = new PIXI.AnimatedSprite(framesIdleMawile);
	enemy2.x = 1*50*spriteSpacer;
	enemy2.y = 0;
	enemy2.scale.set(-globalScale, globalScale);
	enemy2.anchor.set(anchorX2,anchorY2)
	enemy2.animationSpeed = 0.5;
	enemy2.play();	
	
	//mamoswine
	for (let i = 0; i < 165; i++) {
        	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
        	// magically works since the spritesheet was loaded with the pixi loader
        	framesIdleMamoswine.push(PIXI.Texture.from(`mamoswineIdleSequence0${val}.png`));
    	}
	enemy3 = new PIXI.AnimatedSprite(framesIdleHippowdon);
	enemy3.x = 2*50*spriteSpacer;
	enemy3.y = 0;
	enemy3.scale.set(-globalScale, globalScale);
	enemy3.anchor.set(anchorX2,anchorY2)
	enemy3.animationSpeed = 0.5;
	enemy3.play();
	
	enemy4 = new PIXI.AnimatedSprite(framesIdleFlygon);
	enemy4.x = 3*50*spriteSpacer;
	enemy4.y = 0;
	enemy4.scale.set(-globalScale, globalScale);
	enemy4.anchor.set(anchorX2,anchorY2)
	enemy4.animationSpeed = 0.5;
	enemy4.play();
	
	
	rosterHero.addChild(hero4);
	rosterEnemy.addChild(enemy1);
// 	container.addChild(hero4);
// 	container.addChild(hero3);
// 	container.addChild(hero2);
// 	container.addChild(hero1);
// 	container.addChild(enemy1);
// 	container.addChild(enemy2);
// 	container.addChild(enemy3);
// 	container.addChild(enemy4);
	
// 	app.stage.addChild(anim2);
// 	container.scale.set(2);
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
	
	rosterHero.position.set(app.screen.width/2, app.screen.height/2);
	rosterEnemy.position.set(app.screen.width/2, app.screen.height/2);
	
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
