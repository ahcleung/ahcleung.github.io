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

let state, stats, consoleScreen, 
    animIdleCrobat, animIdleFlygon, animIdleMagmortar, animIdleHippowdonm, animIdleMawile, animIdleQuilava, animIdleMamoswine;
const container = new PIXI.Container();
const rect = new PIXI.Graphics();
const rect2 = new PIXI.Graphics();
var textureButton, textureButtonDown;
//var isFullScreen = false;

const frames1 = [];
const frames2 = [];
const frames3 = [];
const frames4 = [];
const frames5 = [];
const frames6 = [];
const frames7 = [];

function setup(){	
	app.stage.addChild(container);
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
	app.stage.addChild(rect2);
	
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
		
	var anchorX = 0;
	var anchorY = 0;
	var globalScale = 2;
	
	//Load spritesheet
	//Flygon
	for (let i = 0; i < 125; i++) {
        	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
        	// magically works since the spritesheet was loaded with the pixi loader
        	frames1.push(PIXI.Texture.from(`flygonIdleSequence0${val}.png`));
    	}
	animIdleFlygon = new PIXI.AnimatedSprite(frames1);
	animIdleFlygon.x = 0;
	animIdleFlygon.y = 0;
	animIdleFlygon.scale.set(globalScale);
	animIdleFlygon.anchor.set(anchorX,anchorY);
	animIdleFlygon.animationSpeed = 0.5;
	animIdleFlygon.play();
	container.addChild(animIdleFlygon);
// 	app.stage.addChild(anim);
	
	//Hippowdon
	for (let i = 0; i < 91; i++) {
        	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
        	frames2.push(PIXI.Texture.from(`hippowdonIdleSequence0${val}.png`));
    	}
	animIdleHippowdon = new PIXI.AnimatedSprite(frames2);
	animIdleHippowdon.x = 50;
	animIdleHippowdon.y = 0;
	animIdleHippowdon.scale.set(globalScale);
	animIdleHippowdon.anchor.set(anchorX,anchorY);
	animIdleHippowdon.animationSpeed = 0.5;
	animIdleHippowdon.play();
	container.addChild(animIdleHippowdon);
	
	//Mawile
	for (let i = 0; i < 155; i++) {
        	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
        	frames3.push(PIXI.Texture.from(`mawileIdleSequence0${val}.png`));
    	}
	animIdleMawile = new PIXI.AnimatedSprite(frames3);
	animIdleMawile.x = 100;
	animIdleMawile.y = 0;
	animIdleMawile.scale.set(globalScale);
	animIdleMawile.anchor.set(anchorX,anchorY);
	animIdleMawile.animationSpeed = 0.5;
	animIdleMawile.play();
	container.addChild(animIdleMawile);
	
	//quilava
	for (let i = 0; i < 82; i++) {
        	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
        	// magically works since the spritesheet was loaded with the pixi loader
        	frames4.push(PIXI.Texture.from(`quilavaIdleSequence0${val}.png`));
    	}
	animIdleQuilava = new PIXI.AnimatedSprite(frames4);
	animIdleQuilava.x = 150;
	animIdleQuilava.y = 0;
	animIdleQuilava.scale.set(globalScale);
	animIdleQuilava.anchor.set(anchorX,anchorY);
	animIdleQuilava.animationSpeed = 0.5;
	animIdleQuilava.play();
	container.addChild(animIdleQuilava);
	
	//crobat
	for (let i = 0; i < 95; i++) {
        	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
        	frames5.push(PIXI.Texture.from(`crobatIdleSequence0${val}.png`));
    	}
	animIdleCrobat = new PIXI.AnimatedSprite(frames5);
	animIdleCrobat.x = 250;
	animIdleCrobat.y = 0;
	animIdleCrobat.scale.set(globalScale);
	animIdleCrobat.anchor.set(anchorX,anchorY);
	animIdleCrobat.animationSpeed = 0.5;
	animIdleCrobat.play();
	container.addChild(animIdleCrobat);	
	
	//magmortar
	for (let i = 0; i < 160; i++) {
        	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
        	// magically works since the spritesheet was loaded with the pixi loader
        	frames6.push(PIXI.Texture.from(`magmortarIdleSequence0${val}.png`));
    	}
	animIdleMagmortar = new PIXI.AnimatedSprite(frames6);
	animIdleMagmortar.x = 300;
	animIdleMagmortar.y = 0;
	animIdleMagmortar.scale.set(globalScale);
	animIdleMagmortar.anchor.set(anchorX,anchorY);
	animIdleMagmortar.animationSpeed = 0.5;
	animIdleMagmortar.play();
	container.addChild(animIdleMagmortar);
	
	//mamoswine
	for (let i = 0; i < 165; i++) {
        	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
        	// magically works since the spritesheet was loaded with the pixi loader
        	frames7.push(PIXI.Texture.from(`mamoswineIdleSequence0${val}.png`));
    	}
	animIdleMamoswine = new PIXI.AnimatedSprite(frames7);
	animIdleMamoswine.x = 350;
	animIdleMamoswine.y = 0;
	animIdleMamoswine.scale.set(globalScale);
	animIdleMamoswine.anchor.set(anchorX,anchorY);
	animIdleMamoswine.animationSpeed = 0.5;
	animIdleMamoswine.play();
	container.addChild(animIdleMamoswine);
	
	
	
	
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
// 	anim.position.set(app.screen.width/2, app.screen.height/2);
// 	anim2.position.set(app.screen.width/2, app.screen.height/2);
	
	rect2.position.set(app.screen.width/2, app.screen.height/3);
	rect2.width = app.screen.width/2;
	
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
