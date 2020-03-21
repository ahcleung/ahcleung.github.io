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
		"img/ability_move.png",
		"img/leper.ability.five.png",
		"img/flygon.json",
		"js/creatures.json",
		"js/moves.json",
		{name:'gorilla3_skeleton', url:'img/gorilla3_ske.json'},
		{name:'gorilla3_texture_json', url:'img/gorilla3_tex.json'},
		{name:'gorilla3_texture_png', url:'img/gorilla3_tex.png'},
		{name:'toad3_skeleton', url:'img/toad3_ske.json'},
		{name:'toad3_texture_json', url:'img/toad3_tex.json'},
		{name:'toad3_texture_png', url:'img/toad3_tex.png'},
		{name:'fume2_skeleton', url:'img/fume2_ske.json'},
		{name:'fume2_texture_json', url:'img/fume2_tex.json'},
		{name:'fume2_texture_png', url:'img/fume2_tex.png'},
		{name:'goat2_1_skeleton', url:'img/goat2_1_ske.json'},
		{name:'goat2_1_texture_json', url:'img/goat2_1_tex.json'},
		{name:'goat2_1_texture_png', url:'img/goat2_1_tex.png'},
		{name:'goat2_2_skeleton', url:'img/goat2_2_ske.json'},
		{name:'goat2_2_texture_json', url:'img/goat2_2_tex.json'},
		{name:'goat2_2_texture_png', url:'img/goat2_2_tex.png'},
		{name:'hel1_skeleton', url:'img/hel1_ske.json'},
		{name:'hel1_texture_json', url:'img/hel1_tex.json'},
		{name:'hel1_texture_png', url:'img/hel1_tex.png'},
		{name:'hel2_skeleton', url:'img/hel2_ske.json'},
		{name:'hel2_texture_json', url:'img/hel2_tex.json'},
		{name:'hel2_texture_png', url:'img/hel2_tex.png'}
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
		this.pos = 0;
		
		
		const creatureList = resources["js/creatures.json"];	
// 		console.log("Creature name: " + creatureList.data.creatures[this.id].name);
		
		this.frames = creatureList.data.creatures[this.id].frames;
		this.code = creatureList.data.creatures[this.id].code;
		this.size = creatureList.data.creatures[this.id].size;
		
		this.name = creatureList.data.creatures[this.id].name;
		this.elements = creatureList.data.creatures[this.id].elements;
		
		this.EHP = Math.round(((((2*creatureList.data.creatures[this.id].hp + this.statDis[0]) * this.level)/100) + this.level + 10) * this.size);
		this.statCalc = [
			this.EHP - Math.floor(Math.random() * ((this.EHP - 12) - 12 + 1)), 
			creatureList.data.creatures[this.id].dodge + this.statDis[1]/2,
			creatureList.data.creatures[this.id].patk + this.statDis[2],
			creatureList.data.creatures[this.id].pdef + this.statDis[3],
			creatureList.data.creatures[this.id].satk + this.statDis[4],
			creatureList.data.creatures[this.id].sdef + this.statDis[5],
			creatureList.data.creatures[this.id].spd + this.statDis[6]
		];
		
		this.statMod = [0, 0, 0, 0, 0, 0, 0];
	}
	
	heal(){
		this.statCalc[0] = this.EHP;	
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

let state, onScreenStats, consoleScreen, debug;
// const container = new PIXI.Container();

const rosterHero = new PIXI.Container();
const rosterEnemy = new PIXI.Container();
const hpHero = new PIXI.Container();
const hpEnemy = new PIXI.Container();

const rect = new PIXI.Graphics();

const rectHero = new PIXI.Graphics();
const rectEnemy = new PIXI.Graphics();

var textureButton, textureButtonDown;

var healthSpacing = 20;
var margin = 50;

// var db = firebase.firestore();

const factory = dragonBones.PixiFactory.factory;

const arrayHero = [];			//Array of hero vitas
const arrayEnemy = [];			//Array of enemy vitas
const heroContainerArray = [];		//Array of hero sprite containers
const enemyContainerArray = [];		//Array of enemy sprite containers
const hpHeroContainerArray = [];
const hpEnemyContainerArray = [];

const vita = [];
vita[0] = {
	id: 9, level: 50, 
	move1: 0, move2: 1, move3: 2, move4: 3,
	statDODG: 20, statHP: 35, statPATK: 40, statPDEF: 50, statSATK: 0, statSDEF: 0, statSPD: 10
};
vita[1] = {
	id: 11, level: 45, 
	move1: 0, move2: 0, move3: 0, move4: 0,
	statDODG: 20, statHP: 35, statPATK: 40, statPDEF: 20, statSATK: 0, statSDEF: 3, statSPD: 17
};
vita[2] = {
	id: 10, level: 47, 
	move1: 1, move2: 1, move3: 2, move4: 2,
	statDODG: 20, statHP: 35, statPATK: 0, statPDEF: 3, statSATK: 40, statSDEF: 20, statSPD: 19
};
vita[3] = {
	id: 12, level: 47, 
	move1: 1, move2: 1, move3: 2, move4: 2,
	statDODG: 20, statHP: 35, statPATK: 0, statPDEF: 3, statSATK: 40, statSDEF: 20, statSPD: 19
};

const enemy = [];
enemy[0] = {
	id: 9, level: 49, 
	move1: 2, move2: 2, move3: 2, move4: 2,
	statDODG: 20, statHP: 20, statPATK: 0, statPDEF: 40, statSATK: 67, statSDEF: 0, statSPD: 0
};
enemy[1] = {
	id: 10, level: 46, 
	move1: 1, move2: 1, move3: 2, move4: 2,
	statDODG: 10, statHP: 20, statPATK: 0, statPDEF: 40, statSATK: 68, statSDEF: 0, statSPD: 0
};
enemy[2] = {
	id: 12, level: 45, 
	move1: 1, move2: 1, move3: 2, move4: 2,
	statDODG: 10, statHP: 20, statPATK: 0, statPDEF: 40, statSATK: 65, statSDEF: 0, statSPD: 0
};
enemy[3] = {
	id: 11, level: 45, 
	move1: 1, move2: 1, move3: 2, move4: 2,
	statDODG: 10, statHP: 20, statPATK: 0, statPDEF: 40, statSATK: 65, statSDEF: 0, statSPD: 0
};

//Write to firestore
// db.collection("enemy").doc("004").set({
// 	id: 10,
// 	level: 45,
// 	move1: 1,
// 	move2: 1,
// 	move3: 2,
// 	move4: 2,
// 	statDODG: 10,
// 	statHP: 20,
// 	statPATK: 0,
// 	statPDEF: 40,
// 	statSATK: 65,
// 	statSDEF: 0,
// 	statSPD: 0
// })
// .then(function() {
// 	console.log("Document successfully written!");
// })
// .catch(function(error) {
// 	console.error("Error writing document: ", error);
// });

//Update firestore document
// db.collection("vita").doc("001").update({
// 	statHP: 35
// })
// .then(function() {
// 	console.log("Document successfully updated!");
// })
// .catch(function(error) {
// 	console.error("Error updating document: ", error);
// });

// const framesIdleFlygon = [];

function setup(){
	
	textureButtonDown = PIXI.Texture.from('img/ability_move.png');
	textureButton = PIXI.Texture.from('img/leper.ability.five.png');
	
	consolePrint("SETUP");
	// PIXI.settings.ROUND_PIXELS = true;
	rect.beginFill(0xccffcc).drawRect(-50, -50, 100, 100);

	// Add it to the stage
	app.stage.addChild(rect);
	
	rectHero.beginFill(0xaec6cf).drawRect(0, 0, -200, 100);
	rectHero.x = 0;
	rectHero.y = 0;
	hpHero.addChild(rectHero);
	
	rectEnemy.beginFill(0xff6961).drawRect(0, 0, 200, 100);
	rectEnemy.x = 0;
	rectEnemy.y = 0;
	hpEnemy.addChild(rectEnemy);
	
	rosterHero.x = app.screen.width/2;
	rosterHero.y = app.screen.height/2;
	
	rosterEnemy.x = app.screen.width/2;
	rosterEnemy.y = app.screen.height/2;
	
	hpHero.x = app.screen.width/2;
	hpHero.y = 10;
	hpEnemy.x = app.screen.width/2;
	hpEnemy.y = 10;
	
	const movesList = resources["js/moves.json"];	
	
	//Read from firestore
// 	db.collection("vita").get().then((querySnapshot) => {
// 		querySnapshot.forEach((doc) => {
// 			console.log(`${doc.id} => ${doc.data()}`);
// 			const creature = new Creature({
// 				id: doc.data().id, 
// 				level: doc.data().level, 
// 				statDis:[
// 					doc.data().statHP, 
// 					doc.data().statDODG, 
// 					doc.data().statPATK, 
// 					doc.data().statPDEF, 
// 					doc.data().statSATK, 
// 					doc.data().statSDEF, 
// 					doc.data().statSPD
// 				], moves:[
// 					doc.data().move1, 
// 					doc.data().move2, 
// 					doc.data().move3, 
// 					doc.data().move4
// 				]});
// 			arrayHero.push(creature);
// 		});
// 	})
// 	.then(function() {
// 		console.log("Heroes created successfully!");
// 		arrayHero.forEach(setPos);
// 		arrayHero.forEach(function (item, index){
// 			createSprite(1, item, index)	
// 		});
// 	});
	
	vita.forEach(function(item, index){
		const creature = new Creature({
			id: item.id,
			level: item.level,
			statDis:[
				item.statHP,
				item.statDODG,
				item.statPATK,
				item.statPDEF,
				item.statSATK,
				item.statSDEF,
				item.statSPD
			], moves:[
				item.move1,
				item.move2,
				item.move3,
				item.move4
			]
		});
		arrayHero.push(creature);
	});

	arrayHero.forEach(setPos);
	arrayHero.forEach(function (item, index){
		createSprite(1, item, index)	
	});
	
	enemy.forEach(function(item, index){
		const creature = new Creature({
			id: item.id,
			level: item.level,
			statDis:[
				item.statHP,
				item.statDODG,
				item.statPATK,
				item.statPDEF,
				item.statSATK,
				item.statSDEF,
				item.statSPD
			], moves:[
				item.move1,
				item.move2,
				item.move3,
				item.move4
			]
		});
		arrayEnemy.push(creature);
	});

	arrayEnemy.forEach(setPos);
	arrayEnemy.forEach(function (item, index){
		createSprite(-1, item, index)	
	});
	//Read from firestore
// 	db.collection("enemy").get().then((querySnapshot) => {
// 		querySnapshot.forEach((doc) => {
// 			console.log(`${doc.id} => ${doc.data()}`);
// 			const creature = new Creature({
// 				id: doc.data().id, 
// 				level: doc.data().level, 
// 				statDis:[
// 					doc.data().statHP, 
// 					doc.data().statDODG, 
// 					doc.data().statPATK, 
// 					doc.data().statPDEF, 
// 					doc.data().statSATK, 
// 					doc.data().statSDEF, 
// 					doc.data().statSPD
// 				], moves:[
// 					doc.data().move1, 
// 					doc.data().move2, 
// 					doc.data().move3, 
// 					doc.data().move4
// 				]});
// 			arrayEnemy.push(creature);
// 		});
// 	})
// 	.then(function() {
// 		console.log("Enemies created successfully!");
// 		arrayEnemy.forEach(setPos);
// 		arrayEnemy.forEach(function (item, index){
// 			createSprite(-1, item, index)	
// 		});
// 	});
	
	
// 	const creature1 = new Creature({id:2, level:45, statDis:[5, 0, 8, 12, 7, 13, 0], moves:[0, 1, 2, 3]});
// // 	const creature1 = new Creature({id:2});
	
// 	console.log(creature1);
	
// 	console.log(creature1.EHP);
// 	console.log(creature1.statCalc[0]);
// 	creature1.statCalc[0] -= 21;
// 	console.log(creature1.statCalc[0]);
// 	creature1.heal();
// 	console.log(creature1.statCalc[0]);
	
// 	console.log(movesList.data.moves[creature1.moves[2]].name);
// 	console.log(movesList.data.moves[creature1.moves[2]].tags);
	
	//const obj = resources["js/creatures.json"];
	
// 	debug = new Text("Creature element: " + creature1.name);
// 	debug.x = 100;
// 	debug.y = 200;
	
	//Current display stats
	onScreenStats = new Text("Resolution: " + app.renderer.resolution +
		"\nInner Width: " + window.innerWidth + 
		"\nInner Height: " + window.innerHeight);
	app.stage.addChild(onScreenStats);	

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
	
	var anchorX1 = 1;
	var anchorY1 = 1;
	var anchorX2 = 1;
	var anchorY2 = 1;
	var globalScale = 2;
	var spriteSpacer = 2;
	
	app.stage.addChild(rosterHero);
	app.stage.addChild(rosterEnemy);
	app.stage.addChild(hpHero);
	app.stage.addChild(hpEnemy);
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
	
// 	app.stage.addChild(debug);
	
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
	onScreenStats.text = "ResolutionTest5: " + app.renderer.resolution +
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

function setPos(item, index, array){
	if(index == 0){
		item.pos = 1;
	}else if(array[index-1].size == 2){
		item.pos = array[index-1].pos + 2;
	}else{
		item.pos = array[index-1].pos + 1;	
	}	
}

function createSprite(direction, item, index){
	console.log("ID: " + item.id + " |Size: " + item.size + " |Code: " + item.code + " |Position: " + item.pos + " |HP: " + item.statCalc[0] + "/" + item.EHP);
			
	factory.parseDragonBonesData(resources[item.code + '_skeleton'].data);
	factory.parseTextureAtlasData(resources[item.code + '_texture_json'].data, resources[item.code + '_texture_png'].texture);

	const armatureHero = factory.buildArmatureDisplay(item.code, item.code);
	armatureHero.animation.gotoAndPlayByFrame('idle', Math.floor(Math.random() * item.frames) + 1);
//     		armatureHero.animation.play('idle');
	

	const creatureContainer = new PIXI.Container();	
	creatureContainer.addChild(armatureHero);
	
	if(item.size == 2){		
		creatureContainer.scale.set(direction * 0.35, 0.35);
	}else{
		creatureContainer.scale.set(direction * 0.25, 0.25);
	}
	
	const healthBar = new PIXI.Container();
	let outerBar = new PIXI.Graphics();
	outerBar.beginFill(0x222222);
	outerBar.drawRect(0, 0, (app.screen.width-320)/8, 40);
// 	outerBar.drawRoundedRect(0, 0, 120, 20, 5);
	outerBar.endFill();
	healthBar.addChild(outerBar);
	healthBar.outer = outerBar;
	
	let innerBar = new PIXI.Graphics();
	innerBar.beginFill(0x2C8A2C);
	innerBar.drawRect(0, 0, (app.screen.width-320)/8 * (item.statCalc[0]/item.EHP), 40);
// 	innerBar.drawRoundedRect(0, 0, 80, 20, 5);
	innerBar.endFill();
	healthBar.addChild(innerBar);
	healthBar.inner = innerBar;	
	
	let textHP = new Text();
// 	let textHP = new Text(item.statCalc[0] + " / " + item.EHP, {fontFamily : 'Open Sans', fontSize: 24, fill : 0xffffff, align : 'center'});
// 	textHP.anchor.set(0.5);
// 	textHP.x = 94.5;
// 	textHP.y = 20;
// 	healthBar.addChild(textHP);
	
	switch(item.pos) {
		case 1:
			textHP = new Text(item.statCalc[0] + " / " + item.EHP, {fontFamily : 'Open Sans', fontSize: 24, fill : 0xffffff, align : 'center'});
			textHP.anchor.set(0.5);
			
			creatureContainer.x = 0;
			if(direction > 0){				
				healthBar.x = 627;
			}else{
				healthBar.x = 0;
			}
			break;
		case 2:
			textHP = new Text(item.statCalc[0] + " / " + item.EHP, {fontFamily : 'Open Sans', fontSize: 24, fill : 0xffffff, align : 'center'});
// 			textHP.anchor.set(0.5);
			
			creatureContainer.x = -209 * direction;
			if(direction > 0){	
				healthBar.x = 418;
			}else{
				healthBar.x = 209;
			}
			break;
		case 3:
			textHP = new Text(item.statCalc[0] + " / " + item.EHP, {fontFamily : 'Arial', fontSize: 24, fill : 0xffffff, align : 'center'});
			textHP.anchor.set(0.5);
			
			creatureContainer.x = -418 * direction;
			if(direction > 0){	
				healthBar.x = 209;
			}else{
				healthBar.x = 418;
			}
			break;
		case 4:
			textHP = new Text(item.statCalc[0] + " / " + item.EHP, {fontFamily : 'Arial', fontSize: 24, fill : 0xffffff, align : 'center'});
// 			textHP.anchor.set(0.5);
			
			creatureContainer.x = -627 * direction;
			if(direction > 0){	
				healthBar.x = 0;
			}else{
				healthBar.x = 627;
			}
			break;
		default:
			creatureContainer.x = 0;
			healthBar.x = 0;
	}
	
	textHP.x = 94.5;
	textHP.y = 20;
	healthBar.addChild(textHP);
	healthBar.textHP = textHP;

	if(direction > 0){
		heroContainerArray.push(creatureContainer);
		hpHeroContainerArray.push(healthBar);
		
		rosterHero.addChild(creatureContainer);
		hpHero.addChild(healthBar);
	}else{
		enemyContainerArray.push(creatureContainer);
		hpEnemyContainerArray.push(healthBar);
		
		rosterEnemy.addChild(creatureContainer);
		hpEnemy.addChild(healthBar);
	}	
}


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
	
	rosterHero.position.set(app.screen.width/2-margin, app.screen.height/2);
	rosterEnemy.position.set(app.screen.width/2+margin, app.screen.height/2);
	
	hpHero.position.set(margin, margin);
	hpEnemy.position.set(app.screen.width/2+margin, margin);
	
	
	hpHeroContainerArray.forEach(function (item, index){
		resizeHP(0, item, index)	
	});
	hpEnemyContainerArray.forEach(function (item, index){
		resizeHP(1, item, index)	
	});
	
	heroContainerArray.forEach(function (item, index){
		resizeSprites(1, item, index)	
	});
	enemyContainerArray.forEach(function (item, index){
		resizeSprites(-1, item, index)	
	});
	
	//Console log RESIZE
	consolePrint("RESIZE");
	consoleScreen.text = "RESIZE\n" + consoleScreen.text;
}

function resizeHP(roster, item, index){
	console.log(app.screen.width + ", " + (app.screen.width-320)/8);
	var resizeWidth = (app.screen.width- (4*margin) - 6*(healthSpacing))/8;
	item.outer.width = resizeWidth;
	item.textHP.x = resizeWidth/2;
	if(roster == 0){
		item.inner.width = resizeWidth * arrayHero[index].statCalc[0]/arrayHero[index].EHP;
		switch(arrayHero[index].pos) {
			case 1:
				item.x = (resizeWidth + healthSpacing) * 3;
				break;
			case 2:
				item.x = (resizeWidth + healthSpacing) * 2;
				break;
			case 3:
				item.x = resizeWidth + healthSpacing;
				break;
			case 4:
				item.x = 0;
				break;
			default:
				item.x = 0;
				
		}
	}else{		
		item.inner.width = resizeWidth * arrayEnemy[index].statCalc[0]/arrayEnemy[index].EHP;
		switch(arrayEnemy[index].pos) {
			case 1:
				item.x = 0;
				break;
			case 2:
				item.x = resizeWidth + healthSpacing;
				break;
			case 3:				
				item.x = (resizeWidth + healthSpacing) * 2;
				break;
			case 4:
				item.x = (resizeWidth + healthSpacing) * 3;
				break;
			default:
				item.x = 0;
				
		}
	}
}

function resizeSprites(direction, item, index){
	var resizeWidth = (app.screen.width- (4*margin) - 6*(healthSpacing))/8;
	if(direction > 0){
		switch(arrayHero[index].pos) {
			case 1:
				item.x = 0;
				break;
			case 2:
				item.x = -(resizeWidth + healthSpacing);
				break;
			case 3:				
				item.x = -((resizeWidth + healthSpacing) * 2);
				break;
			case 4:
				item.x = -((resizeWidth + healthSpacing) * 3);
				break;
			default:
				item.x = 0;
				
		}
	}else{		
// 		item.inner.width = resizeWidth * arrayEnemy[index].statCalc[0]/arrayEnemy[index].EHP;
		switch(arrayEnemy[index].pos) {
			case 1:
				item.x = 0;
				break;
			case 2:
				item.x = resizeWidth + healthSpacing;
				break;
			case 3:				
				item.x = (resizeWidth + healthSpacing) * 2;
				break;
			case 4:
				item.x = (resizeWidth + healthSpacing) * 3;
				break;
			default:
				item.x = 0;
				
		}
	}
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
