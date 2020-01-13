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
		"img/flygon.json"
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

let state, stats, consoleScreen, anim;
const container = new PIXI.Container();
const rect = new PIXI.Graphics();
var textureButton, textureButtonDown;
//var isFullScreen = false;

const frames = [];

function setup(){	
	//app.stage.addChild(container);
	// Create a new texture
	const texture = PIXI.Texture.from('img/monkey3.png');
	
	textureButtonDown = PIXI.Texture.from('img/ability_move.png');
	textureButton = PIXI.Texture.from('img/leper.ability.five.png');
	
	consolePrint("SETUP");
	// PIXI.settings.ROUND_PIXELS = true;
	rect.beginFill(0xccffcc).drawRect(-50, -50, 100, 100);

	// Add it to the stage
	app.stage.addChild(rect);
	
	// Create a 5x5 grid of bunnies
// 	for (let i = 0; i < 25; i++) {
// 		const bunny = new Sprite(texture);
// 		bunny.anchor.set(0.5);
// 		bunny.x = (i % 5) * 40;
// 		bunny.y = Math.floor(i / 5) * 40;
// 		container.addChild(bunny);
// 	}

	// Move container to the center
	//container.x = app.renderer.width / 2;
	//container.y = app.renderer.height / 2;

	// Center bunny sprite in local container coordinates
	//container.pivot.x = container.width / 2;
	//container.pivot.y = container.height / 2;
	
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
	
	document.addEventListener('fullscreenerror', (event) => {
		alert('an error occurred changing into fullscreen');
		alert(event);
		console.error('an error occurred changing into fullscreen');
		console.log(event);
	});

	app.stage.addChild(button);
	
	//Load spritesheet
	for (let i = 0; i < 125; i++) {
        	const val = i < 10 ? `00${i}` : i;
        	// magically works since the spritesheet was loaded with the pixi loader
        	frames.push(PIXI.Texture.from(`idleSequence0${val}.png`));
    	}
	anim = new PIXI.AnimatedSprite(frames);
	anim.x = app.screen.width/2;
	anim.y = app.screen.height/2;
	anim.anchor.set(0.5);
	anim.animationSpeed = 0.5;
	anim.play();
	app.stage.addChild(anim);
	
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
	container.rotation -= 0.01 * delta;
	stats.text = "ResolutionTest5: " + app.renderer.resolution +
		"\nInner Width: " + window.innerWidth + 
		"\nInner Height: " + window.innerHeight +
		"\nAppScreen Width: " + app.screen.width + 
		"\nAppScreen Height: " + app.screen.height;
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
	anim.position.set(app.screen.width/2, app.screen.height/2);
	
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
