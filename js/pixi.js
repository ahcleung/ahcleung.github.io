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
		"img/ui_move.png",
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

const movesList = resources["js/moves.json"];

let state, onScreenStats, consoleScreen, debug;
// const container = new PIXI.Container();

const rosterHero = new PIXI.Container();
const rosterEnemy = new PIXI.Container();
const hpHero = new PIXI.Container();
const hpEnemy = new PIXI.Container();

const rect = new PIXI.Graphics();

const rectHero = new PIXI.Graphics();
const rectEnemy = new PIXI.Graphics();

var button, button2, textureButton, textureButtonDown, textureShift;

var healthSpacing = 20;
var margin = 50;
var moveSpacer = 10;
var targetTextSize = 28;

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
	move1: 4, move2: 1, move3: 2, move4: 1,
	statDODG: 20, statHP: 35, statPATK: 40, statPDEF: 50, statSATK: 0, statSDEF: 0, statSPD: 10
};
vita[1] = {
	id: 2, level: 45, 
	move1: 4, move2: 10, move3: 11, move4: 1,
	statDODG: 20, statHP: 35, statPATK: 40, statPDEF: 20, statSATK: 0, statSDEF: 3, statSPD: 17
};
vita[2] = {
	id: 10, level: 47, 
	move1: 4, move2: 0, move3: 6, move4: 1,
	statDODG: 20, statHP: 35, statPATK: 0, statPDEF: 3, statSATK: 40, statSDEF: 20, statSPD: 19
};
// vita[3] = {
// 	id: 9, level: 47, 
// 	move1: 8, move2: 0, move3: 1, move4: 2,
// 	statDODG: 20, statHP: 35, statPATK: 0, statPDEF: 3, statSATK: 40, statSDEF: 20, statSPD: 19
// };

const enemy = [];
enemy[0] = {
	id: 9, level: 49, 
	move1: 4, move2: 6, move3: 1, move4: 3,
	statDODG: 20, statHP: 20, statPATK: 0, statPDEF: 40, statSATK: 67, statSDEF: 0, statSPD: 0
};
enemy[1] = {
	id: 8, level: 46, 
	move1: 4, move2: 10, move3: 1, move4: 8,
	statDODG: 10, statHP: 20, statPATK: 0, statPDEF: 40, statSATK: 68, statSDEF: 0, statSPD: 0
};
enemy[2] = {
	id: 12, level: 45, 
	move1: 4, move2: 1, move3: 5, move4: 3,
	statDODG: 10, statHP: 20, statPATK: 0, statPDEF: 40, statSATK: 65, statSDEF: 0, statSPD: 0
};
// enemy[3] = {
// 	id: 11, level: 45, 
// 	move1: 4, move2: 1, move3: 7, move4: 3,
// 	statDODG: 10, statHP: 20, statPATK: 0, statPDEF: 40, statSATK: 65, statSDEF: 0, statSPD: 0
// };

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
	textureShift = PIXI.Texture.from('img/ui_move.png');
	
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
	
	for(var i = 0; i < 4; i++){
// 		console.log(arrayHero[1].moves[i]);
		let moveRect = new PIXI.Graphics();
		let moveSelectFill = new PIXI.Graphics();
		let moveSelectStroke = new PIXI.Graphics();
		let moveDisable = new PIXI.Graphics();
		
		const moveContainer = new PIXI.Container();
		const moveSelect = new PIXI.Container();
		
		// make the button interactive...
		moveContainer.buttonMode = true;
		moveContainer.interactive = true;
		moveContainer
		// set the mousedown and touchstart callback...
		.on('pointerdown', onMoveDown);
		
		moveContainer.identifier = [i , arrayHero[1].moves[i], 1];
		
		let moveName = new Text(movesList.data.moves[arrayHero[1].moves[i]].name, {fontFamily : 'Arial', fontSize: 28, fill : 0xfefefe});
		moveName.anchor.set(0, 0.5);
		
		moveRect.beginFill(0x222222).drawRect(0, 0, 50, 50);
		moveRect.x = 0;
		moveRect.y = 0;
		
		moveContainer.addChild(moveRect);
		moveContainer.rect = moveRect;
		
		moveSelectStroke.beginFill(0xFFD600).drawRect(0, 0, 50, 50);
		moveSelectStroke.x = 0;
		moveSelectStroke.y = 0;		
		moveSelectFill.beginFill(0x222222).drawRect(0, 0, 50, 50);
		moveSelectFill.x = 0;
		moveSelectFill.y = 0;
		
		moveDisable.beginFill(0x636363).drawRect(0, 0, 50, 50);
		moveDisable.alpha = 0.5;
		moveDisable.x = 0;
		moveDisable.y = 0;
		
		moveSelect.addChild(moveSelectStroke);
		moveSelect.addChild(moveSelectFill);
		moveSelect.stroke = moveSelectStroke;
		moveSelect.fill = moveSelectFill;
				
		moveContainer.addChild(moveSelect);
		moveContainer.selected = moveSelect;
		
		moveContainer.selected.visible = false;
		
		moveContainer.addChild(moveName);
		moveContainer.moveName = moveName;
		
		const markerContainer = new PIXI.Container();
		
		const markerHeroArray = [];
		const markerHeroContainer = new PIXI.Container();
		
		var w = 12.728;
		
		for (var j = 0; j < 4; j++){
			let defaultMarker = new PIXI.Graphics();
			defaultMarker.beginFill(0x636363).drawRect(0, -w, w, w);
			
			let posMarker = new PIXI.Graphics();			
			posMarker.beginFill(0x66cc66).drawRect(0, -w, w, w);
			
			if(movesList.data.moves[arrayHero[1].moves[i]].position[j] == 0){
				posMarker.visible = false;
			}
			
			defaultMarker.x = 25 * j;
			posMarker.x = 25 * j;
			
			defaultMarker.pivot.set(0.5);
			defaultMarker.angle = 45;
			posMarker.pivot.set(0.5);
			posMarker.angle = 45;
			markerHeroArray.push(posMarker);
			markerHeroContainer.addChild(defaultMarker);
			markerHeroContainer.addChild(posMarker);
		}
		
		const markerTargetEnemyArray = [];
		const markerTargetEnemyContainer = new PIXI.Container();
		
		for (var j = 0; j < 4; j++){
			let defaultMarker = new PIXI.Graphics();
			defaultMarker.beginFill(0x636363).drawRect(0, -w, w, w);
			let posMarker = new PIXI.Graphics();				
			posMarker.beginFill(0xFF6961).drawRect(0, -w, w, w);
			if(movesList.data.moves[arrayHero[1].moves[i]].target[j] == 0){
				posMarker.visible = false;
			}
			defaultMarker.x = 25 * j;
			posMarker.x = 25 * j;
			defaultMarker.pivot.set(0.5);
			defaultMarker.angle = 45;
			posMarker.pivot.set(0.5);
			posMarker.angle = 45;
			markerTargetEnemyArray.push(posMarker);
			markerTargetEnemyContainer.addChild(defaultMarker);
			markerTargetEnemyContainer.addChild(posMarker);
		}
		
		const markerTargetEnemySeveralArray = [];
		const markerTargetEnemySeveralContainer = new PIXI.Container();
		
		for (var j = 0; j < 3; j++){
			let posMarker = new PIXI.Graphics();				
			posMarker.beginFill(0xFF6961).drawRect(0, -4, 20, 6);
			posMarker.x = 25 * j;
			posMarker.visible = false;
			markerTargetEnemySeveralArray.push(posMarker);
			markerTargetEnemySeveralContainer.addChild(posMarker);
		}
		
		const markerTargetHeroArray = [];
		const markerTargetHeroContainer = new PIXI.Container();
		
		for (var j = 0; j < 4; j++){
			let posMarker = new PIXI.Graphics();				
			posMarker.beginFill(0x66cc66).drawRect(0, -w, w, w);
// 			posMarker.visible = false;
			posMarker.x = 25 * j;
			posMarker.pivot.set(0.5);
			posMarker.angle = 45;
			markerTargetHeroArray.push(posMarker);
			markerTargetHeroContainer.addChild(posMarker);
		}
		
		const markerTargetArray = [];
		const markerTargetContainer = new PIXI.Container();
		
		for (var j = 0; j < 4; j++){
			let posMarker = new PIXI.Graphics();				
			posMarker.beginFill(0x222222).drawRect(0, -w, w, w);
// 			posMarker.visible = false;
			posMarker.x = 25 * j;
			posMarker.pivot.set(0.5);
			posMarker.angle = 45;
// 			markerTargetHeroArray.push(posMarker);
			markerTargetContainer.addChild(posMarker);
		}
		markerTargetEnemyContainer.x = 123;
		markerTargetHeroContainer.x = 123;
		markerTargetContainer.x = 123;
		markerTargetEnemySeveralContainer.x = 135;
		
		markerContainer.addChild(markerHeroContainer);
		markerContainer.addChild(markerTargetContainer);		
		markerContainer.addChild(markerTargetEnemyContainer);
		markerContainer.addChild(markerTargetHeroContainer);		
		
		markerContainer.addChild(markerTargetEnemySeveralContainer);
		moveContainer.markerTargetEnemySeveralContainer = markerTargetEnemySeveralContainer;
		
		moveContainer.markerTargetEnemySeveralArray = markerTargetEnemySeveralArray;		
		moveContainer.markerTargetEnemySeveralContainer.visible = false;
		
		moveContainer.addChild(markerContainer);
// 		moveContainer.posMarkerArray = posMarkerArray;
		moveContainer.markerContainer = markerContainer;
		
		moveContainer.markerHeroArray = markerHeroArray;
		moveContainer.markerHeroContainer = markerHeroContainer;
		
		moveContainer.markerTargetEnemyArray = markerTargetEnemyArray;
		moveContainer.markerTargetEnemyContainer = markerTargetEnemyContainer;
		
		moveContainer.markerTargetHeroArray = markerTargetHeroArray;
		moveContainer.markerTargetHeroContainer = markerTargetHeroContainer;
		moveContainer.markerTargetHeroContainer.visible = false;
		
		let targetText = new Text("1►", {fontFamily : 'Arial', fontSize: 28, fill : 0xFF6961});
		targetText.anchor.set(0, 0.5);
		moveContainer.addChild(targetText);
		moveContainer.targetText = targetText;
		moveContainer.targetText.visible = false;
// 		targetText.x = 123;
		
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
		
		moveContainer.addChild(moveDisable);
		moveContainer.disable = moveDisable;
		
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
	

	//Console text printout
	consoleScreen = new Text("Console: ");
	
	consoleScreen.x = 300;
	
	onScreenStats.visible = false;
	consoleScreen.visible = false;
	
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
	button2.buttonMode = true;
    	button2.interactive = true;
	button2
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalDown);
	
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
	
	app.stage.addChild(onScreenStats);	
	app.stage.addChild(consoleScreen);
}

function gameLoop(delta){
	state(delta);
}

let phase = 0.0;
function play(delta){
	phase += delta / 25.0;
	onScreenStats.text = "ResolutionTest5: " + app.renderer.resolution +
		"\nInner Width: " + window.innerWidth + 
		"\nInner Height: " + window.innerHeight +
		"\nAppScreen Width: " + app.screen.width + 
		"\nAppScreen Height: ► ◄" + app.screen.height +
		"\nScale: " + (Math.cos(phase) + 1) * 10 + 1;
	hpHeroContainerArray.forEach(element => {
		if(element.select.play == true){
			element.select.width = element.select.selectBar1.width + (Math.cos(phase) + 1) * 10 + 1;
// 			element.select.scale.x = (Math.cos(phase) + 1) * 0.03 + 1;
		}
	});
	hpEnemyContainerArray.forEach(element => {
		if(element.select.play == true){
			element.select.width = element.select.selectBar1.width + (Math.cos(phase) + 1) * 10 + 1;
// 			element.select.scale.x = (Math.cos(phase) + 1) * 0.03 + 1;
		}
	});
// 	hpHeroContainerArray[0].select.scale.x = (Math.cos(phase) + 1) * 0.04 + 1;
}

// Listen for animate update
// app.ticker.add((delta) => {
// 	// rotate the container!
// 	// use delta to create frame-independent transform
	
// 	//container.rotation -= 0.01 * delta;
	
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
	
	creatureContainer.identifier = [direction, index];
	creatureContainer.buttonMode = true;
	creatureContainer.interactive = true;
	creatureContainer
        // set the mousedown and touchstart callback...
        .on('pointerdown', onCreatureDown);
	
	if(item.size == 2){		
		creatureContainer.scale.set(direction * 0.5, 0.5);
	}else{
		creatureContainer.scale.set(direction * 0.33, 0.33);
	}
	
	const shiftContainer = new PIXI.Container();
	let shiftLeft = new PIXI.Sprite(textureShift);
	let shiftRight = new PIXI.Sprite(textureShift);
	
	shiftRight.pivot.set(0.5);
	shiftRight.angle = 90;
// 	shiftRight.x = 50;
	
	shiftContainer.addChild(shiftLeft);
	shiftContainer.addChild(shiftRight);	
	
	const healthBar = new PIXI.Container();
	
	healthBar.identifier = [direction, index];
	healthBar.buttonMode = true;
	healthBar.interactive = true;
	healthBar
        // set the mousedown and touchstart callback...
        .on('pointerdown', onHPDown);
	
	let outerBar = new PIXI.Graphics();
	outerBar.beginFill(0x222222);
	outerBar.drawRect(0, 0, (app.screen.width-320)/8, 40);
	outerBar.endFill();
	healthBar.addChild(outerBar);
	healthBar.outer = outerBar;
	
	let innerBar = new PIXI.Graphics();
	innerBar.beginFill(0x2C8A2C);
	innerBar.drawRect(0, 0, (app.screen.width-320)/8 * (item.statCalc[0]/item.EHP), 40);
	innerBar.endFill();
	healthBar.addChild(innerBar);
	healthBar.inner = innerBar;
	
	let vitalBar = new PIXI.Graphics();
	vitalBar.beginFill(0xCE0000);
	vitalBar.drawRect(0, 0, -(app.screen.width-320)/8 * (item.statCalc[0]/item.vital), 40);
	innerBar.endFill();
	healthBar.addChild(vitalBar);
	healthBar.vital = vitalBar;
	
	let turnIndicator = new PIXI.Graphics();
	turnIndicator.beginFill(0xFFB800);
	turnIndicator.drawRect(0, 0, (app.screen.width-320)/8, 5);
	turnIndicator.endFill();
	healthBar.addChild(turnIndicator);
	healthBar.turn = turnIndicator;
	healthBar.turn.visible = false;
	
	let statusEffect;
	
	item.statusEffect.forEach((element) => {
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

	const select = new PIXI.Container();
		
	select.play = false;

	let selectEnd = new PIXI.Graphics();
	selectEnd.beginFill(0xFFD600);
	selectEnd.drawRect(0, 0, 4, 18);
	selectEnd.endFill();
	select.addChild(selectEnd);
	select.selectEnd = selectEnd;

	let selectStart = new PIXI.Graphics();
	selectStart.beginFill(0xFFD600);
	selectStart.drawRect(0, 0, 4, 18);
	selectStart.endFill();
	select.addChild(selectStart);
	select.selectStart = selectStart;

	let selectBar1 = new PIXI.Graphics();
	selectBar1.beginFill(0xFFD600);
	selectBar1.drawRect(0, 0, (app.screen.width-320)/8, 7);
	selectBar1.endFill();
	select.addChild(selectBar1);
	select.selectBar1 = selectBar1;

	let selectBar2 = new PIXI.Graphics();
	selectBar2.beginFill(0xFFD600);
	selectBar2.drawRect(0, 0, (app.screen.width-320)/8, 2);
	selectBar2.endFill();
	select.addChild(selectBar2);
	select.selectBar2 = selectBar2;

	healthBar.addChild(select);
	healthBar.select = select;
	healthBar.select.visible = false;
	
	const target = new PIXI.Container();
	
	let targetEnd = new PIXI.Graphics();
	targetEnd.beginFill(0xFF392F);
	targetEnd.drawRect(0, 0, 4, 18);
	targetEnd.endFill();
	target.addChild(targetEnd);
	target.targetEnd = targetEnd;

	let targetStart = new PIXI.Graphics();
	targetStart.beginFill(0xFF392F);
	targetStart.drawRect(0, 0, 4, 18);
	targetStart.endFill();
	target.addChild(targetStart);
	target.targetStart = targetStart;

	let targetBar1 = new PIXI.Graphics();
	targetBar1.beginFill(0xFF392F);
	targetBar1.drawRect(0, 0, (app.screen.width-320)/8, 7);
	targetBar1.endFill();
	target.addChild(targetBar1);
	target.targetBar1 = targetBar1;

	let targetBar2 = new PIXI.Graphics();
	targetBar2.beginFill(0xFF392F);
	targetBar2.drawRect(0, 0, (app.screen.width-320)/8, 2);
	targetBar2.endFill();
	target.addChild(targetBar2);
	target.targetBar2 = targetBar2;

	healthBar.addChild(target);
	healthBar.target = target;
	healthBar.target.visible = false;
	
	const heal = new PIXI.Container();
	
	let healEnd = new PIXI.Graphics();
	healEnd.beginFill(0x28F828);
	healEnd.drawRect(0, 0, 4, 18);
	healEnd.endFill();
	heal.addChild(healEnd);
	heal.healEnd = healEnd;

	let healStart = new PIXI.Graphics();
	healStart.beginFill(0x28F828);
	healStart.drawRect(0, 0, 4, 18);
	healStart.endFill();
	heal.addChild(healStart);
	heal.healStart = healStart;

	let healBar1 = new PIXI.Graphics();
	healBar1.beginFill(0x28F828);
	healBar1.drawRect(0, 0, (app.screen.width-320)/8, 7);
	healBar1.endFill();
	heal.addChild(healBar1);
	heal.healBar1 = healBar1;

	let healBar2 = new PIXI.Graphics();
	healBar2.beginFill(0x28F828);
	healBar2.drawRect(0, 0, (app.screen.width-320)/8, 2);
	healBar2.endFill();
	heal.addChild(healBar2);
	heal.healBar2 = healBar2;

	healthBar.addChild(heal);
	healthBar.heal = heal;
	healthBar.heal.visible = false;
	
	if(direction > 0){
		heroContainerArray.push(creatureContainer);
		hpHeroContainerArray.push(healthBar);
		
		rosterHero.addChild(creatureContainer);
		hpHero.addChild(healthBar);
		hpHero.addChild(shiftContainer);
	}else{
		enemyContainerArray.push(creatureContainer);
		hpEnemyContainerArray.push(healthBar);
		
		rosterEnemy.addChild(creatureContainer);
		hpEnemy.addChild(healthBar);
		hpEnemy.addChild(shiftContainer);
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
	
	var moveSelectPadding = 5;
	
	if(app.screen.width < 860){
		margin = 10;
		healthSpacing = 10;
		moveSpacer = 5;
		moveSelectPadding = 2;
		hpHero.position.set(margin, 20);
		hpEnemy.position.set(app.screen.width/2+margin, 20);
		targetTextSize = 12;
	}else if(app.screen.width < 1366){
		margin = 15;
		healthSpacing = 10;
		moveSpacer = 8;
		moveSelectPadding = 3;
		hpHero.position.set(margin, 40);
		hpEnemy.position.set(app.screen.width/2+margin, 40);
		targetTextSize = 16;
	}else{
		margin = 50;
		healthSpacing = 20;
		moveSpacer = 10;
		moveSelectPadding = 5;
		hpHero.position.set(margin, 40);
		hpEnemy.position.set(app.screen.width/2+margin, 40);
		targetTextSize = 26;
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
		element.selected.stroke.width = (2*app.screen.width - 4*margin - 10*healthSpacing)/9;
		element.selected.stroke.height = element.rect.width/4;
		element.selected.fill.width =  ((2*app.screen.width - 4*margin - 10*healthSpacing)/9) - moveSelectPadding*2;
		element.selected.fill.height = (element.rect.width/4) - moveSelectPadding*2;
		
		element.disable.width = (2*app.screen.width - 4*margin - 10*healthSpacing)/9;
		element.disable.height = element.rect.width/4;
		
		element.selected.fill.x = moveSelectPadding;
		element.selected.fill.y = moveSelectPadding;
		
		element.x = margin + element.rect.height + healthSpacing + (element.rect.width + healthSpacing)*index;
		element.y = app.screen.height - element.rect.height - margin;
		
		element.moveElement.width = element.rect.width/11;
		element.moveElement.height = element.moveElement.width * 2.3;
		element.moveElement.x = moveSpacer;
		element.moveElement.y = element.rect.height/2;
		
		element.markerContainer.width = (element.rect.width/3)*2;
		element.markerContainer.height = element.markerContainer.width/12;
// 		element.posMarkerContainer.scale.set(element.moveElement.width);
		
		if(app.screen.width < 860){
			element.moveName.style = {fontFamily : 'Arial', fontSize: 14, fill : 0xfefefe};
			element.targetText.style.fontSize = 12;
// 			element.moveNum.style = {fontFamily : 'Arial', fontSize: 14, fill : 0x636363, align : 'right'};	
// 			element.posMarkerContainer.scale.set(0.45);
		}else if(app.screen.width < 1366){
			element.moveName.style = {fontFamily : 'Arial', fontSize: 18, fill : 0xfefefe};	
			element.targetText.style.fontSize = 16;
// 			element.moveNum.style = {fontFamily : 'Arial', fontSize: 17, fill : 0x636363, align : 'right'};	
// 			element.posMarkerContainer.scale.set(0.5);
		}else{
			element.moveName.style = {fontFamily : 'Arial', fontSize: 28, fill : 0xfefefe};
			element.targetText.style.fontSize = 26;
// 			element.moveNum.style = {fontFamily : 'Arial', fontSize: 24, fill : 0x636363, align : 'right'};	
// 			element.posMarkerContainer.scale.set(1);
// 			console.log(element.posMarkerContainer.width + ", " + element.posMarkerContainer.height);
// 			console.log("Ratio: " + element.posMarkerContainer.width / element.posMarkerContainer.height);
		}
		
		element.moveName.x = element.rect.width/6;
		element.moveName.y = element.rect.height/3;
		
// 		element.moveName.x = element.rect.width;
// 		element.moveName.y = 0;
		
// 		element.moveNum.x = (element.rect.width/15)*14;
// 		element.moveNum.y = (element.rect.height/3)*2;
		
// 		element.posMarkerContainer.x = 0;
// 		element.posMarkerContainer.y = 0;
		
		element.markerContainer.x = element.rect.width/6;
		element.markerContainer.y = element.rect.height*3/4;
		
		element.targetText.x =  (element.rect.width/6) + (element.markerContainer.width * 0.569);
		element.targetText.y = element.rect.height*3/4;
	});
	
	rosterHero.position.set(app.screen.width/2-margin, app.screen.height*3/4);
	rosterEnemy.position.set(app.screen.width/2+margin, app.screen.height*3/4);
	
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
	var HPSpacing = 3;
	var selectBarHeight = 7;
	var selectBar1Y = -15;
	var selectBar2Y = -20;
	var selectEndHeight = 18;
	var selectEndY = -23;
	
	if(app.screen.width < 860){
		resizeHeight = 20;
		item.textHP.style = {fontFamily : 'Arial', fontSize: 14, fill : 0xfefefe, align : 'center'};	
		statusSpacing = 2;
		HPSpacing = 1;
		selectBarHeight = 5;
		selectBar1Y = -10;
		selectBar2Y = -13;
		selectEndHeight = 12;
		selectEndY = -15;
		item.turn.height = 3;
		item.turn.y = resizeHeight;
	}else if(app.screen.width < 1366){
		resizeHeight = 30;
		item.textHP.style = {fontFamily : 'Arial', fontSize: 18, fill : 0xfefefe, align : 'center'};	
		statusSpacing = 4;
		HPSpacing = 2;
		selectBarHeight = 7;
		selectBar1Y = -15;
		selectBar2Y = -20;
		selectEndHeight = 18;
		selectEndY = -23;
		item.turn.height = 4;
		item.turn.y = resizeHeight + 2;
	}else{
		resizeHeight = 40;
		item.textHP.style = {fontFamily : 'Arial', fontSize: 24, fill : 0xfefefe, align : 'center'};
		statusSpacing = 5;
		HPSpacing = 3;
		selectBarHeight = 7;
		selectBar1Y = -15;
		selectBar2Y = -20;
		selectEndHeight = 18;
		selectEndY = -23;
		item.turn.height = 5;
		item.turn.y = resizeHeight + 2;
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
			item.turn.width = resizeWidth * 2 + healthSpacing;
			
			item.select.selectBar1.width = resizeWidth * 2 + healthSpacing;
			item.select.selectBar2.width = resizeWidth * 2 + healthSpacing;			
			item.target.targetBar1.width = resizeWidth * 2 + healthSpacing;
			item.target.targetBar2.width = resizeWidth * 2 + healthSpacing;
			item.heal.healBar1.width = resizeWidth * 2 + healthSpacing;
			item.heal.healBar2.width = resizeWidth * 2 + healthSpacing;
			
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
			item.turn.width = resizeWidth;
			
			item.select.selectBar1.width = resizeWidth;
			item.select.selectBar2.width = resizeWidth;
			item.target.targetBar1.width = resizeWidth;
			item.target.targetBar2.width = resizeWidth;
			item.heal.healBar1.width = resizeWidth;
			item.heal.healBar2.width = resizeWidth;
			
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
			item.turn.width = resizeWidth * 2 + healthSpacing;
			
			item.select.selectBar1.width = resizeWidth * 2 + healthSpacing;
			item.select.selectBar2.width = resizeWidth * 2 + healthSpacing;			
			item.target.targetBar1.width = resizeWidth * 2 + healthSpacing;
			item.target.targetBar2.width = resizeWidth * 2 + healthSpacing;
			item.heal.healBar1.width = resizeWidth * 2 + healthSpacing;
			item.heal.healBar2.width = resizeWidth * 2 + healthSpacing;
			
			arrayEnemy[index].statusEffectSprite.forEach((element, index) => {
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
			item.inner.width = resizeWidth * (arrayEnemy[index].statCalc[0]/arrayEnemy[index].overallHP);
			item.vital.width = resizeWidth * (arrayEnemy[index].vital/arrayEnemy[index].overallHP);
			item.vital.x = resizeWidth;
			item.turn.width = resizeWidth;
			
			item.select.selectBar1.width = resizeWidth;
			item.select.selectBar2.width = resizeWidth;
			item.target.targetBar1.width = resizeWidth;
			item.target.targetBar2.width = resizeWidth;
			item.heal.healBar1.width = resizeWidth;
			item.heal.healBar2.width = resizeWidth;
			
			arrayEnemy[index].statusEffectSprite.forEach((element, index) => {
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
	
	item.select.selectBar1.height = selectBarHeight;
	item.select.selectBar1.y = selectBar1Y;
	
	item.select.selectBar2.y = selectBar2Y;
	
	item.select.selectStart.height = selectEndHeight;
	item.select.selectStart.y = selectEndY;
	
	item.select.selectEnd.height = selectEndHeight;	
	item.select.selectEnd.y = selectEndY;	
	item.select.selectEnd.x = item.outer.width - 4;
	
	item.select.pivot.x = item.select.width/2;
	item.select.x = item.select.width/2;
	
	item.target.targetBar1.height = selectBarHeight;
	item.target.targetBar1.y = selectBar1Y;

	item.target.targetBar2.y = selectBar2Y;

	item.target.targetStart.height = selectEndHeight;
	item.target.targetStart.y = selectEndY;

	item.target.targetEnd.height = selectEndHeight;	
	item.target.targetEnd.y = selectEndY;	
	item.target.targetEnd.x = item.outer.width - 4;
	
	item.heal.healBar1.height = selectBarHeight;
	item.heal.healBar1.y = selectBar1Y;

	item.heal.healBar2.y = selectBar2Y;

	item.heal.healStart.height = selectEndHeight;
	item.heal.healStart.y = selectEndY;

	item.heal.healEnd.height = selectEndHeight;	
	item.heal.healEnd.y = selectEndY;	
	item.heal.healEnd.x = item.outer.width - 4;
}

function resizeSprites(direction, item, index){
	var resizeWidth = (app.screen.width- (4*margin) - 6*(healthSpacing))/8;
	if(direction > 0){
		if(app.screen.width < 860){
			item.scale.set(direction * 0.23, 0.23);
		}else if(app.screen.width < 1366){
			item.scale.set(direction * 0.3, 0.3); 
		}else{
			item.scale.set(direction * 0.5, 0.5);
		}
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
		}else if(app.screen.width < 1366){
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

function onCreatureDown(){
// 	console.log("Creature:" + this.identifier);
	//Reset the moveContainers
	moveArray.forEach(element=>{
		element.selected.visible = false;
		element.disable.visible = true;
		element.buttonMode = false;
		element.interactive = false;
		element.markerTargetEnemySeveralContainer.visible = false;
	});
	hpEnemyContainerArray.forEach(element=>{
		element.select.visible = false;
		element.target.visible = false;
		element.heal.visible = false;
		element.select.play = false;
	});
	hpHeroContainerArray.forEach(element=>{
		element.select.visible = false;
		element.target.visible = false;
		element.heal.visible = false;
		element.select.play = false;
	});
	var newMoves = [];
	var currPos = [];
	if(this.identifier[0] < 0){		
		hpEnemyContainerArray[this.identifier[1]].select.visible = true;
		hpEnemyContainerArray[this.identifier[1]].select.play = true;
		arrayEnemy[this.identifier[1]].moves.forEach((element, index) => {
			newMoves.push(element);
		});
		if(arrayEnemy[this.identifier[1]].size == 1){
			currPos.push(arrayEnemy[this.identifier[1]].pos);
		}else if(arrayEnemy[this.identifier[1]].size == 2){
			currPos.push(arrayEnemy[this.identifier[1]].pos);
			currPos.push(arrayEnemy[this.identifier[1]].pos+1);
		}
	}else{
		hpHeroContainerArray[this.identifier[1]].select.visible = true;
		hpHeroContainerArray[this.identifier[1]].select.play = true;
		arrayHero[this.identifier[1]].moves.forEach((element, index) => {
			newMoves.push(element);
		});
		if(arrayHero[this.identifier[1]].size == 1){
			currPos.push(arrayHero[this.identifier[1]].pos);
		}else if(arrayHero[this.identifier[1]].size == 2){
			currPos.push(arrayHero[this.identifier[1]].pos);
			currPos.push(arrayHero[this.identifier[1]].pos+1);
		}
	}
	console.log("///////////////////////////////////////////////");
	console.log(currPos);
	
	newMoves.forEach((element, index) => {
		switch(movesList.data.moves[element].element){
			case 1:
				moveArray[index].moveElement.texture = resources.element_earth.texture;
				break;
			case 2:
				moveArray[index].moveElement.texture = resources.element_fire.texture;
				break;
			case 3:
				moveArray[index].moveElement.texture = resources.element_flora.texture;
				break;
			case 4:
				moveArray[index].moveElement.texture = resources.element_lightning.texture;
				break;
			case 5:
				moveArray[index].moveElement.texture = resources.element_shadow.texture;
				break;
			case 6:
				moveArray[index].moveElement.texture = resources.element_spirit.texture;
				break;
			case 7:
				moveArray[index].moveElement.texture = resources.element_toxic.texture;
				break;
			case 8:
				moveArray[index].moveElement.texture = resources.element_water.texture;
				break;
			case 9:
				moveArray[index].moveElement.texture = resources.element_wind.texture;
				break;
			default:
				moveArray[index].moveElement.texture = resources.element_fire.texture;
				break;
		}
		
		moveArray[index].identifier = [index, element, this.identifier[0], this.identifier[1]];
		moveArray[index].moveName.text = movesList.data.moves[element].name;		
		movesList.data.moves[element].position.forEach((element2, index2) => {
			if(element2 == 1){				
				currPos.forEach(element3 => {
					var posTracker = Math.abs(index2 - 4);			
					if(element3 == posTracker){
						moveArray[index].disable.visible = false;
						moveArray[index].buttonMode = true;
						moveArray[index].interactive = true;
					}
				});
				moveArray[index].markerHeroArray[index2].visible = true;
			}else{
				moveArray[index].markerHeroArray[index2].visible = false;
			}
		});
		
		console.log(index + ": " + movesList.data.moves[element].tags);
		var column = false;
		movesList.data.moves[element].tags.forEach(tagName =>{
			if(tagName == "column"){
				column = true;
				if(movesList.data.moves[element][tagName][2] > 0){
					moveArray[index].targetText.style.fill = '0xFF6961';
					moveArray[index].targetText.text = movesList.data.moves[element][tagName][0] + " ►";
				}else{
					moveArray[index].targetText.style.fill = '0x66cc66';
					moveArray[index].targetText.text = "◄ " + movesList.data.moves[element][tagName][0];
				}
			}else if(tagName == "several"){
				moveArray[index].markerTargetEnemySeveralContainer.visible = true;
				movesList.data.moves[element][tagName].forEach((position, index3) => {
					if(position == 1){
						moveArray[index].markerTargetEnemySeveralArray[index3].visible = true;
					}else{
						moveArray[index].markerTargetEnemySeveralArray[index3].visible = false;
					}
				});
			}
			console.log(movesList.data.moves[element][tagName]);
		});
		
		if(column){
			moveArray[index].markerTargetEnemyContainer.visible = false;
			moveArray[index].targetText.visible = true;
		}else{
			moveArray[index].markerTargetEnemyContainer.visible = true;
			moveArray[index].targetText.visible = false;
			movesList.data.moves[element].target.forEach((element3, index3) => {
				if(element3 == 1){
					moveArray[index].markerTargetEnemyArray[index3].visible = true;
				}else{
					moveArray[index].markerTargetEnemyArray[index3].visible = false;
				}
			});
		}
// 		console.log(index + " Position: " + movesList.data.moves[element].position + " |Target: " + movesList.data.moves[element].target);
	});	
	
// 	moveArray[0].posMarkerArray[0].visible = false;
}


function onHPDown(){
	console.log("HP:" + this.identifier[0]);
	
	hpHeroContainerArray.forEach(element=>{
		element.turn.visible = false;
	});
	hpEnemyContainerArray.forEach(element=>{
		element.turn.visible = false;
	});
	
	if(this.identifier[0] < 0){
		hpEnemyContainerArray[this.identifier[1]].turn.visible = true;
	}else{
		hpHeroContainerArray[this.identifier[1]].turn.visible = true;
	}
// 	hpHeroContainerArray[this.identifier[1]].selected = visible;
}

function onMoveDown(){
	hpEnemyContainerArray.forEach(element=>{
		element.target.visible = false;
		element.heal.visible = false;
	});
	hpHeroContainerArray.forEach(element=>{
		element.target.visible = false;
		element.heal.visible = false;
	});
	moveArray.forEach(element=>{
		element.selected.visible = false;
	});
	moveArray[this.identifier[0]].selected.visible = true;
	console.log(this.identifier);
	var column = false;
	movesList.data.moves[this.identifier[1]].tags.forEach(tagName =>{
		if(tagName == "column"){
			column = true;
			if(this.identifier[2] > 0){
				console.log("column => from: " + arrayHero[this.identifier[3]].name + " to: " + movesList.data.moves[this.identifier[1]][tagName][0]);
			}else{
				console.log("column => from: " + arrayEnemy[this.identifier[3]].name + " to: " + movesList.data.moves[this.identifier[1]][tagName][0]);
			}
		}
	});
	
	if(column){
		//Ahead
		if(movesList.data.moves[this.identifier[1]].column[2] > 0){
			var targetArray = [];
			var switchSide = false;
			if(this.identifier[2] > 0){
				var temp = arrayHero[this.identifier[3]].pos;
			}else{
				var temp = arrayEnemy[this.identifier[3]].pos;
			}			
			for(var i = 0; i < movesList.data.moves[this.identifier[1]].column[0]; i++){
				if(temp > 1 && !switchSide){
					temp--;
				}else if(temp == 1 && !switchSide){
					switchSide = true;
				}else{
					temp++;
				}
				
				if(this.identifier[2] > 0){
					if(temp > 0 && !switchSide){
						arrayHero.forEach((element,index) => {
							if(element.pos == temp){
								console.log(element.name);
								hpHeroContainerArray[index].target.visible = true;
							}
						});
					}else{
						arrayEnemy.forEach((element,index) => {
							if(element.pos == temp){
								console.log(element.name);
								hpEnemyContainerArray[index].target.visible = true;
							}
						});
					}
				}else{
					if(temp > 0 && !switchSide){
						arrayEnemy.forEach((element,index) => {
							if(element.pos == temp){
								console.log(element.name);
								hpEnemyContainerArray[index].target.visible = true;
							}
						});
					}else{
						arrayHero.forEach((element,index) => {
							if(element.pos == temp){
								console.log(element.name);
								hpHeroContainerArray[index].target.visible = true;
							}
						});
					}
				}
				targetArray.push(temp);
			}
			console.log("Targets: " + targetArray);
		}
		//Behind
		else{
			var targetArray = [];
			if(this.identifier[2] > 0){
				var temp = arrayHero[this.identifier[3]].pos;
			}else{
				var temp = arrayEnemy[this.identifier[3]].pos;
			}			
			for(var i = 0; i < movesList.data.moves[this.identifier[1]].column[0]; i++){
				temp++;
				if(this.identifier[2] > 0){
					arrayHero.forEach((element,index) => {
						if(element.pos == temp){
							console.log(element.name);
							hpHeroContainerArray[index].heal.visible = true;
						}
					});
				}else{
					arrayEnemy.forEach((element,index) => {
						if(element.pos == temp){
							console.log(element.name);
							hpEnemyContainerArray[index].heal.visible = true;
						}
					});
				}
				targetArray.push(temp);
			}
			console.log("Targets: " + targetArray);
		}
	}
	
	movesList.data.moves[this.identifier[1]].target.forEach((element1, index1)=> {
		if(element1 == 1){
			var posTracker = index1 + 1;
			if(this.identifier[2] > 0){
				arrayEnemy.forEach((element2, index2) => {
					if(element2.size == 1){
						if(posTracker == element2.pos){
							console.log("Targeted: " + element2.name);
							hpEnemyContainerArray[index2].target.visible = true;
// 							hpHeroContainerArray[index2].target.visible = true;
						}
					}else if(element2.size == 2){
						var pos1 = element2.pos;
						var pos2 = element2.pos + 1;
						if(posTracker == pos1){
							console.log("Targeted: " + element2.name);
							hpEnemyContainerArray[index2].target.visible = true;
// 							hpHeroContainerArray[index2].target.visible = true;
						}else if(posTracker == pos2){
							console.log("Targeted: " + element2.name);
							hpEnemyContainerArray[index2].target.visible = true;
// 							hpHeroContainerArray[index2].target.visible = true;
						}
					}				
				});
			}else{
				arrayHero.forEach((element2, index2) => {
					if(element2.size == 1){
						if(posTracker == element2.pos){
							console.log("Targeted: " + element2.name);
// 							hpEnemyContainerArray[index2].target.visible = true;
							hpHeroContainerArray[index2].target.visible = true;
						}
					}else if(element2.size == 2){
						var pos1 = element2.pos;
						var pos2 = element2.pos + 1;
						if(posTracker == pos1){
							console.log("Targeted: " + element2.name);
// 							hpEnemyContainerArray[index2].target.visible = true;
							hpHeroContainerArray[index2].target.visible = true;
						}else if(posTracker == pos2){
							console.log("Targeted: " + element2.name);
// 							hpEnemyContainerArray[index2].target.visible = true;
							hpHeroContainerArray[index2].target.visible = true;
						}
					}				
				});
			}
		}
	});
}

function onAdditionalDown(){
// 	moveArray[0].targetText.style.fill = '0x66cc66';	
	
	onScreenStats.visible = true;
	consoleScreen.visible = true;
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
