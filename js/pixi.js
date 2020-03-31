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
	
		{name:'status_bleed', url:'img/status_bleed.png'},
		{name:'status_buff', url:'img/status_buff.png'},
		{name:'status_burned', url:'img/status_burned.png'},
		{name:'status_debuff', url:'img/status_debuff.png'},
		{name:'status_depressed', url:'img/status_depressed.png'},
		{name:'status_guard', url:'img/status_guard.png'},
		{name:'status_immune', url:'img/status_immune.png'},
		{name:'status_paralyzed', url:'img/status_paralyzed.png'},
		{name:'status_poisoned', url:'img/status_poisoned.png'},
		{name:'status_recover', url:'img/status_recover.png'},
		{name:'status_secured', url:'img/status_secured.png'},
		{name:'status_silenced', url:'img/status_silenced.png'},
		{name:'status_stunned', url:'img/status_stunned.png'},
		{name:'status_vital', url:'img/status_vital.png'},
	
		{name:'element_earth', url:'img/element_earth.png'},
		{name:'element_fire', url:'img/element_fire.png'},
		{name:'element_flora', url:'img/element_flora.png'},
		{name:'element_lightning', url:'img/element_lightning.png'},
		{name:'element_shadow', url:'img/element_shadow.png'},
		{name:'element_spirit', url:'img/element_spirit.png'},
		{name:'element_toxic', url:'img/element_toxic.png'},
		{name:'element_water', url:'img/element_water.png'},
		{name:'element_wind', url:'img/element_wind.png'},
		
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
		
		this.vital = Math.floor(Math.random() * 50) + 10;
// 		this.vital = 25;
		
		const creatureList = resources["js/creatures.json"];	
// 		console.log("Creature name: " + creatureList.data.creatures[this.id].name);
		
		this.frames = creatureList.data.creatures[this.id].frames;
		this.code = creatureList.data.creatures[this.id].code;
		this.size = creatureList.data.creatures[this.id].size;
		
		this.name = creatureList.data.creatures[this.id].name;
		this.elements = creatureList.data.creatures[this.id].elements;
		
		this.overallHP = Math.round(((((2*creatureList.data.creatures[this.id].hp + this.statDis[0]) * this.level)/100) + this.level + 10) * this.size);
// 		this.overallHP = 100;
			
		this.EHP = this.overallHP - this.vital;

		this.statCalc = [
			this.EHP - Math.floor(Math.random() * ((this.EHP - 12) - 12 + 1)), 
// 			this.EHP - 25,
			creatureList.data.creatures[this.id].dodge + this.statDis[1]/2,
			creatureList.data.creatures[this.id].patk + this.statDis[2],
			creatureList.data.creatures[this.id].pdef + this.statDis[3],
			creatureList.data.creatures[this.id].satk + this.statDis[4],
			creatureList.data.creatures[this.id].sdef + this.statDis[5],
			creatureList.data.creatures[this.id].spd + this.statDis[6]
		];
		
		this.statMod = [0, 0, 0, 0, 0, 0, 0];
		this.statusEffect = [
			[Math.floor(Math.random() * 14) + 1, 1],
			[Math.floor(Math.random() * 14) + 1, 3, 5],
			[Math.floor(Math.random() * 14) + 1, 2],
			[Math.floor(Math.random() * 14) + 1, 2],
			[Math.floor(Math.random() * 14) + 1, 2],
			[Math.floor(Math.random() * 14) + 1, 2],
			[Math.floor(Math.random() * 14) + 1, 2],
			[Math.floor(Math.random() * 14) + 1, 2],
			[Math.floor(Math.random() * 14) + 1, 2],
			[Math.floor(Math.random() * 14) + 1, 2],
			[Math.floor(Math.random() * 14) + 1, 2],
		];
		this.statusEffectSprite = [];
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

var button, button2, textureButton, textureButtonDown;

var healthSpacing = 20;
var margin = 50;
var moveSpacer = 10;

// var db = firebase.firestore();

const factory = dragonBones.PixiFactory.factory;

const arrayHero = [];			//Array of hero vitas
const arrayEnemy = [];			//Array of enemy vitas
const heroContainerArray = [];		//Array of hero sprite containers
const enemyContainerArray = [];		//Array of enemy sprite containers
const hpHeroContainerArray = [];	//Array of hero HP containers
const hpEnemyContainerArray = [];	//Array of enemy HP containers
const moveArray = [];			//Array of move containers

const vita = [];
vita[0] = {
	id: 11, level: 50, 
	move1: 0, move2: 1, move3: 2, move4: 3,
	statDODG: 20, statHP: 35, statPATK: 40, statPDEF: 50, statSATK: 0, statSDEF: 0, statSPD: 10
};
vita[1] = {
	id: 2, level: 45, 
	move1: 4, move2: 5, move3: 6, move4: 7,
	statDODG: 20, statHP: 35, statPATK: 40, statPDEF: 20, statSATK: 0, statSDEF: 3, statSPD: 17
};
vita[2] = {
	id: 10, level: 47, 
	move1: 8, move2: 0, move3: 1, move4: 2,
	statDODG: 20, statHP: 35, statPATK: 0, statPDEF: 3, statSATK: 40, statSDEF: 20, statSPD: 19
};

const enemy = [];
enemy[0] = {
	id: 9, level: 49, 
	move1: 7, move2: 6, move3: 2, move4: 3,
	statDODG: 20, statHP: 20, statPATK: 0, statPDEF: 40, statSATK: 67, statSDEF: 0, statSPD: 0
};
enemy[1] = {
	id: 8, level: 46, 
	move1: 0, move2: 1, move3: 5, move4: 8,
	statDODG: 10, statHP: 20, statPATK: 0, statPDEF: 40, statSATK: 68, statSDEF: 0, statSPD: 0
};
enemy[2] = {
	id: 12, level: 45, 
	move1: 4, move2: 6, move3: 7, move4: 3,
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
	rect.alpha = 0.1;
	// Add it to the stage
	app.stage.addChild(rect);
	
// 	rectHero.beginFill(0xaec6cf).drawRect(0, 0, -200, 100);
// 	rectHero.x = 0;
// 	rectHero.y = 0;
// 	hpHero.addChild(rectHero);
	
// 	rectEnemy.beginFill(0xff6961).drawRect(0, 0, 200, 100);
// 	rectEnemy.x = 0;
// 	rectEnemy.y = 0;
// 	hpEnemy.addChild(rectEnemy);
	
	rosterHero.x = app.screen.width/2;
	rosterHero.y = app.screen.height/2;
	
	rosterEnemy.x = app.screen.width/2;
	rosterEnemy.y = app.screen.height/2;
	
	hpHero.x = app.screen.width/2;
	hpHero.y = 10;
	hpEnemy.x = app.screen.width/2;
	hpEnemy.y = 10;
	
// 	const movesList = resources["js/moves.json"];	
	
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
	
	const movesList = resources["js/moves.json"];
	
	for(var i = 0; i < 4; i++){
// 		console.log(arrayHero[1].moves[i]);
		let moveRect = new PIXI.Graphics();
		const moveContainer = new PIXI.Container();
		let moveName = new Text(movesList.data.moves[arrayHero[1].moves[i]].name, {fontFamily : 'Arial', fontSize: 28, fill : 0xfefefe});
// 		let moveName = new Text(movesList.data.moves[i].name, {fontFamily : 'Arial', fontSize: 28, fill : 0xfefefe});
		moveName.anchor.set(0, 0.5);
		
// 		let moveNum = new Text("8/10", {fontFamily : 'Arial', fontSize: 24, fill : 0x636363, align : 'right'});
// 		moveNum.anchor.set(1, 0.5);
		
		moveRect.beginFill(0x222222).drawRect(0, 0, 50, 50);
		moveRect.x = 0;
		moveRect.y = 0;
		
		moveContainer.addChild(moveRect);
		moveContainer.rect = moveRect;
		moveContainer.addChild(moveName);
		moveContainer.moveName = moveName;
// 		moveContainer.addChild(moveNum);
// 		moveContainer.moveNum = moveNum;
		
		const posMarkerArray = [];		
		const posMarkerContainer = new PIXI.Container();
		
		for (var j = 0; j < 2; j++){			
			for (var k = 0; k < 4; k++){
				let posMarker = new PIXI.Graphics();
				if(j == 0){
					if(movesList.data.moves[arrayHero[1].moves[i]].position[k] == 1){
						posMarker.beginFill(0x66cc66).drawRect(0, -13, 13, 13);
					}else{
						posMarker.beginFill(0x636363).drawRect(0, -13, 13, 13);
					}
					posMarker.x = 25 * (j+k);
				}else{
					if(movesList.data.moves[arrayHero[1].moves[i]].target[k] == 1){
						posMarker.beginFill(0xFF6961).drawRect(0, -13, 13, 13);
					}else{
						posMarker.beginFill(0x636363).drawRect(0, -13, 13, 13);
					}
					posMarker.x = 25 * (k+4) + 15;
				}
				posMarker.pivot.set(0.5);
				posMarker.angle = 45;
				posMarkerArray.push(posMarker);
				posMarkerContainer.addChild(posMarker);
			}
		}
		
		moveContainer.addChild(posMarkerContainer);
		moveContainer.posMarkerArray = posMarkerArray;
		moveContainer.posMarkerContainer = posMarkerContainer;
		
// 		var elementID = Math.floor(Math.random() * 9) + 1;
		var moveElement;
		switch(movesList.data.moves[arrayHero[1].moves[i]].element){
			case 1:
				moveElement = new PIXI.Sprite(resources.element_earth.texture);
				break;
			case 2:
				moveElement = new PIXI.Sprite(resources.element_fire.texture);
				break;
			case 3:
				moveElement = new PIXI.Sprite(resources.element_flora.texture);
				break;
			case 4:
				moveElement = new PIXI.Sprite(resources.element_lightning.texture);
				break;
			case 5:
				moveElement = new PIXI.Sprite(resources.element_shadow.texture);
				break;
			case 6:
				moveElement = new PIXI.Sprite(resources.element_spirit.texture);
				break;
			case 7:
				moveElement = new PIXI.Sprite(resources.element_toxic.texture);
				break;
			case 8:
				moveElement = new PIXI.Sprite(resources.element_water.texture);
				break;
			case 9:
				moveElement = new PIXI.Sprite(resources.element_wind.texture);
				break;
			default:
				moveElement = new PIXI.Sprite(resources.element_fire.texture);
				break;
		}
		moveElement.anchor.set(0, 0.5);
		moveContainer.addChild(moveElement);
		moveContainer.moveElement = moveElement;
	
		moveArray.push(moveContainer);
		app.stage.addChild(moveContainer);
	}
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
	button = new PIXI.Sprite(textureButton);
    	button.buttonMode = true;
    	button.anchor.set(1,1);
    	button.position.x = 50;
    	button.position.y = 50;
	button.width = 50;
	button.height = 50;
    	// make the button interactive...
    	button.interactive = true;
	button.accessible = true;
	button.accessibleTitle = "Fullscreen button";
	button
        // set the mousedown and touchstart callback...
        .on('pointerdown', onButtonDown);
	
	button2 = new PIXI.Sprite(textureButtonDown);
	button2.anchor.set(0,1);
	
	app.stage.addChild(button);	
	app.stage.addChild(button2);	
	
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
	
	//Console print setup phase
	consoleScreen.text = "Setup" + consoleScreen.text;
	
	//Resize the screen
	window.addEventListener('resize', resize);

	resize();

	state = play;
	app.ticker.add(delta => gameLoop(delta));
	
// 	document.addEventListener('fullscreenerror', (event) => {
// 		alert('an error occurred changing into fullscreen');
// 		alert(event);
// 		console.error('an error occurred changing into fullscreen');
// 		console.log(event);
// 	});
	
	//Load spritesheet	
	//Flygon	
// 	for (let i = 0; i < 125; i++) {
//         	const val = i < 10 ? `00${i}` : i < 100 ? `0${i}` : i;
//         	// magically works since the spritesheet was loaded with the pixi loader
//         	framesIdleFlygon.push(PIXI.Texture.from(`flygonIdleSequence0${val}.png`));
//     	}
// 	hero4 = new PIXI.AnimatedSprite(framesIdleFlygon);
// 	hero4.animationSpeed = 0.5;
// 	hero4.play();	
// 	hero4Container.addChild(hero4);
// 	app.stage.addChild(anim);
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
	console.log("ID: " + item.id + " |Size: " + item.size + " |Code: " + item.code + " |Position: " + item.pos + " |HP: " + item.statCalc[0] + "/" + item.EHP + "|Vital: " + item.vital);
			
	factory.parseDragonBonesData(resources[item.code + '_skeleton'].data);
	factory.parseTextureAtlasData(resources[item.code + '_texture_json'].data, resources[item.code + '_texture_png'].texture);

	const armatureHero = factory.buildArmatureDisplay(item.code, item.code);
	armatureHero.animation.gotoAndPlayByFrame('idle', Math.floor(Math.random() * item.frames) + 1);
//     		armatureHero.animation.play('idle');

	const creatureContainer = new PIXI.Container();	
	creatureContainer.addChild(armatureHero);
	
	if(item.size == 2){		
		creatureContainer.scale.set(direction * 0.5, 0.5);
	}else{
		creatureContainer.scale.set(direction * 0.33, 0.33);
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
	
	let vitalBar = new PIXI.Graphics();
	vitalBar.beginFill(0xCE0000);
	vitalBar.drawRect(0, 0, -(app.screen.width-320)/8 * (item.statCalc[0]/item.vital), 40);
	innerBar.endFill();
	healthBar.addChild(vitalBar);
	healthBar.vital = vitalBar;
	
	let statusEffect;
	
	item.statusEffect.forEach((element) => {
// 		console.log(element[0]);
		switch(element[0]){
			case 1:
				statusEffect = new PIXI.Sprite(resources.status_bleed.texture);
				break;
			case 2:
				statusEffect = new PIXI.Sprite(resources.status_buff.texture);
				break;
			case 3:
				statusEffect = new PIXI.Sprite(resources.status_burned.texture);
				break;
			case 4:
				statusEffect = new PIXI.Sprite(resources.status_debuff.texture);
				break;
			case 5:
				statusEffect = new PIXI.Sprite(resources.status_depressed.texture);
				break;
			case 6:
				statusEffect = new PIXI.Sprite(resources.status_guard.texture);
				break;
			case 7:
				statusEffect = new PIXI.Sprite(resources.status_immune.texture);
				break;
			case 8:
				statusEffect = new PIXI.Sprite(resources.status_paralyzed.texture);
				break;
			case 9:
				statusEffect = new PIXI.Sprite(resources.status_poisoned.texture);
				break;
			case 10:
				statusEffect = new PIXI.Sprite(resources.status_recover.texture);
				break;
			case 11:
				statusEffect = new PIXI.Sprite(resources.status_secured.texture);
				break;
			case 12:
				statusEffect = new PIXI.Sprite(resources.status_silenced.texture);
				break;
			case 13:
				statusEffect = new PIXI.Sprite(resources.status_stunned.texture);
				break;
			case 14:
				statusEffect = new PIXI.Sprite(resources.status_vital.texture);
				break;
			default:
				statusEffect = new PIXI.Sprite(resources.status_buff.texture);
				
		}
		healthBar.addChild(statusEffect);
		item.statusEffectSprite.push(statusEffect);
	});	
	
	let textHP = new Text(item.statCalc[0] + " / " + item.EHP, {fontFamily : 'Arial', fontSize: 24, fill : 0xfefefe, align : 'center'});
	textHP.anchor.set(0.5);

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
	
	if(app.screen.width < 860){
		margin = 10;
		healthSpacing = 10;
		moveSpacer = 5;
	}else if(app.screen.width < 1000){
		margin = 15;
		healthSpacing = 10;
		moveSpacer = 8;
	}else{
		margin = 50;
		healthSpacing = 20;
		moveSpacer = 10;
	}
	
	var calcWidth = (2*app.screen.width - 4*margin - 10*healthSpacing)/9;
	
	button.width = calcWidth/4;
	button.height = button.width;
	button.position.set(app.screen.width - margin, app.screen.height - margin);
	
	button2.width = button.width;
	button2.height = button.width;
	button2.position.set(margin, app.screen.height - margin);
	
	moveArray.forEach((element, index) => {
		element.rect.width = (2*app.screen.width - 4*margin - 10*healthSpacing)/9;
		element.rect.height = element.rect.width/4;
		element.x = margin + element.rect.height + healthSpacing + (element.rect.width + healthSpacing)*index;
		element.y = app.screen.height - element.rect.height - margin;
		
		element.moveElement.width = element.rect.width/11;
		element.moveElement.height = element.moveElement.width * 2.3;
		element.moveElement.x = moveSpacer;
		element.moveElement.y = element.rect.height/2;
				
		if(app.screen.width < 860){
			element.moveName.style = {fontFamily : 'Arial', fontSize: 14, fill : 0xfefefe};	
// 			element.moveNum.style = {fontFamily : 'Arial', fontSize: 14, fill : 0x636363, align : 'right'};	
			element.posMarkerContainer.scale.set(0.45);
		}else if(app.screen.width < 1000){
			element.moveName.style = {fontFamily : 'Arial', fontSize: 18, fill : 0xfefefe};	
// 			element.moveNum.style = {fontFamily : 'Arial', fontSize: 17, fill : 0x636363, align : 'right'};	
			element.posMarkerContainer.scale.set(0.5);
		}else{
			element.moveName.style = {fontFamily : 'Arial', fontSize: 28, fill : 0xfefefe};
// 			element.moveNum.style = {fontFamily : 'Arial', fontSize: 24, fill : 0x636363, align : 'right'};	
			element.posMarkerContainer.scale.set(1);
		}
		
		element.moveName.x = element.rect.width/6;
		element.moveName.y = element.rect.height/3;
		
// 		element.moveName.x = element.rect.width;
// 		element.moveName.y = 0;
		
// 		element.moveNum.x = (element.rect.width/15)*14;
// 		element.moveNum.y = (element.rect.height/3)*2;
		
// 		element.posMarkerContainer.x = 0;
// 		element.posMarkerContainer.y = 0;
		
		element.posMarkerContainer.x = element.rect.width/6;
		element.posMarkerContainer.y = (element.rect.height/3)*2;
	});
	
	
	rosterHero.position.set(app.screen.width/2-margin, app.screen.height*2/3);
	rosterEnemy.position.set(app.screen.width/2+margin, app.screen.height*2/3);
	
	hpHero.position.set(margin, 20);
	hpEnemy.position.set(app.screen.width/2+margin, 20);
	
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
	var resizeHeight = 40;
	var statusSpacing = 5;
	if(app.screen.width < 860){
		resizeHeight = 20;
		item.textHP.style = {fontFamily : 'Arial', fontSize: 14, fill : 0xfefefe, align : 'center'};	
		statusSpacing = 2;
	}else if(app.screen.width < 1000){
		resizeHeight = 30;
		item.textHP.style = {fontFamily : 'Arial', fontSize: 18, fill : 0xfefefe, align : 'center'};	
		statusSpacing = 4;
	}else{
		resizeHeight = 40;
		item.textHP.style = {fontFamily : 'Arial', fontSize: 24, fill : 0xfefefe, align : 'center'};
		statusSpacing = 5;
	}
	
	item.outer.height = resizeHeight;
	item.inner.height = resizeHeight;
	item.vital.height = resizeHeight;
	item.outer.width = resizeWidth;
// 	item.textHP.x = resizeWidth/2;
	
	
// 	item.status.width = (resizeWidth - (statusSpacing * 5))/4;
// 	item.status.height = item.status.width;
// 	item.status.x = statusSpacing;
// 	item.status.y = item.outer.height + statusSpacing;
	
	if(roster == 0){
		var switcher = 0;
		if(arrayHero[index].size > 1){
			item.outer.width = resizeWidth * 2 + healthSpacing;
			item.inner.width = (resizeWidth * 2 + healthSpacing) * (arrayHero[index].statCalc[0]/arrayHero[index].overallHP);
			item.vital.width = (resizeWidth * 2 + healthSpacing) * (arrayHero[index].vital/arrayHero[index].overallHP);
			item.vital.x = resizeWidth * 2 + healthSpacing;
			switcher = 1;
			arrayHero[index].statusEffectSprite.forEach((element, index) => {
				element.width = (resizeWidth - (statusSpacing * 5))/4;
				element.height = element.width;
				if(index < 8){
					element.x = statusSpacing + ((statusSpacing + element.width)*index);
					element.y = resizeHeight + statusSpacing*2;
				}else{
					element.x = statusSpacing + ((statusSpacing + element.width)*(index-8));
					element.y = resizeHeight + statusSpacing*3 + element.height;
				}
			});
		}else{
			item.inner.width = resizeWidth * (arrayHero[index].statCalc[0]/arrayHero[index].overallHP);
			item.vital.width = resizeWidth * (arrayHero[index].vital/arrayHero[index].overallHP);
			item.vital.x = resizeWidth;
			arrayHero[index].statusEffectSprite.forEach((element, index) => {
				element.width = (resizeWidth - (statusSpacing * 5))/4;
				element.height = element.width;
				if(index < 4){
					element.x = statusSpacing + ((statusSpacing + element.width)*index);
					element.y = resizeHeight + statusSpacing*2;
				}else if(index < 8){
					element.x = statusSpacing + ((statusSpacing + element.width)*(index-4));
					element.y = resizeHeight + statusSpacing*3 + element.height;
				}else{
					element.x = statusSpacing + ((statusSpacing + element.width)*(index-8));
					element.y = resizeHeight + statusSpacing*4 + element.height*2;
				}
			});
		}		
		switch(arrayHero[index].pos) {
			case 1:
				item.x = (resizeWidth + healthSpacing) * (3 - switcher);
				break;
			case 2:
				item.x = (resizeWidth + healthSpacing) * (2 - switcher);
				break;
			case 3:
				item.x = resizeWidth + healthSpacing * (1 - switcher);
				break;
			case 4:
				item.x = 0;
				break;
			default:
				item.x = 0;
				
		}
	}else{	
		if(arrayEnemy[index].size > 1){
			item.outer.width = resizeWidth * 2 + healthSpacing;
			item.inner.width = (resizeWidth * 2 + healthSpacing) * (arrayEnemy[index].statCalc[0]/arrayEnemy[index].overallHP);
			item.vital.width = (resizeWidth * 2 + healthSpacing) * (arrayEnemy[index].vital/arrayEnemy[index].overallHP);
			item.vital.x = resizeWidth * 2 + healthSpacing;
			arrayEnemy[index].statusEffectSprite.forEach((element, index) => {
				element.width = (resizeWidth - (statusSpacing * 5))/4;
				element.height = element.width;
				if(index < 8){
					element.x = statusSpacing + ((statusSpacing + element.width)*index);
					element.y = resizeHeight + statusSpacing;
				}else{
					element.x = statusSpacing + ((statusSpacing + element.width)*(index-8));
					element.y = resizeHeight + statusSpacing*2 + element.height;
				}
			});
		}else{
			item.inner.width = resizeWidth * (arrayEnemy[index].statCalc[0]/arrayEnemy[index].overallHP);
			item.vital.width = resizeWidth * (arrayEnemy[index].vital/arrayEnemy[index].overallHP);
			item.vital.x = resizeWidth;
			arrayEnemy[index].statusEffectSprite.forEach((element, index) => {
				element.width = (resizeWidth - (statusSpacing * 5))/4;
				element.height = element.width;
				if(index < 4){
					element.x = statusSpacing + ((statusSpacing + element.width)*index);
					element.y = resizeHeight + statusSpacing;
				}else if(index < 8){
					element.x = statusSpacing + ((statusSpacing + element.width)*(index-4));
					element.y = resizeHeight + statusSpacing*2 + element.height;
				}else{
					element.x = statusSpacing + ((statusSpacing + element.width)*(index-8));
					element.y = resizeHeight + statusSpacing*3 + element.height*2;
				}
			});
		}
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
	
	item.textHP.x = item.outer.width/2;
	item.textHP.y = item.outer.height/2;
}

function resizeSprites(direction, item, index){
	var resizeWidth = (app.screen.width- (4*margin) - 6*(healthSpacing))/8;
	if(direction > 0){
		if(app.screen.width < 860){
			item.scale.set(direction * 0.23, 0.23);
		}else if(app.screen.width < 1000){
			item.scale.set(direction * 0.3, 0.3); 
		}else{
			item.scale.set(direction * 0.5, 0.5);
		}
// 		if(app.screen.width < 860){
// 			if(arrayHero[index].size == 2){		
// 				item.scale.set(direction * 0.22, 0.22);
// 			}else{
// 				item.scale.set(direction * 0.15, 0.15);
// 			}
// 		}else if(app.screen.width < 1000){
// 			if(arrayHero[index].size == 2){		
// 				item.scale.set(direction * 0.3, 0.3);
// 			}else{
// 				item.scale.set(direction * 0.22, 0.22);
// 			} 
// 		}else{
// 			if(arrayHero[index].size == 2){		
// 				item.scale.set(direction * 0.5, 0.5);
// 			}else{
// 				item.scale.set(direction * 0.33, 0.33);
// 			}
// 		}
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
		if(app.screen.width < 860){
			item.scale.set(direction * 0.23, 0.23);
		}else if(app.screen.width < 1000){
			item.scale.set(direction * 0.3, 0.3); 
		}else{
			item.scale.set(direction * 0.5, 0.5);
		}
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

function resizeMove(element){
	
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

// function onButtonDown2(){
// 	//var elem = document.getElementById("frame");
// 	var elem = document.documentElement;
// 	if(!document.fullscreenElement && !document.mozFullScreenElement && !document.msFullScreenElement && !document.webkitFullScreenElement){
// 		//isFullScreen = true;
// 		this.texture = textureButtonDown;
// 		if (elem.requestFullscreen) {
// 			elem.requestFullscreen();
// 		} else if (elem.mozRequestFullScreen) { /* Firefox */
// 			elem.mozRequestFullScreen();
// 		} else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
// 			elem.webkitRequestFullscreen();
// 		} else if (elem.msRequestFullscreen) { /* IE/Edge */
// 			elem.msRequestFullscreen();
// 		}
// 		console.log("setFullScreen5");
// 		consoleScreen.text = "setFullScreen4\n" + consoleScreen.text;
// 	}else{
// 		//isFullScreen = false;
// 		this.texture = textureButton;
// 		if (document.exitFullscreen) {
// 			document.exitFullscreen();
// 		} else if (document.mozCancelFullScreen) { /* Firefox */
// 			document.mozCancelFullScreen();
// 		} else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
// 			document.webkitExitFullscreen();
// 		} else if (document.msExitFullscreen) { /* IE/Edge */
// 			document.msExitFullscreen();
// 		}
// 		console.log("exitFullScreen5");
// 		consoleScreen.text = "exitFullScreen4\n" + consoleScreen.text;
// 	}
// }
