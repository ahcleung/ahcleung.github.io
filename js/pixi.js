/*======================================================================================
*
*FileName:        pixi.js
*Project:         Project Elements
*Version:         1.03
*
*Author:          Alvin Leung <hello@ahcleung.com>
*Created on:      2019/12/06
*
*Description:     Project Elements production code
*
======================================================================================*/

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
		"img/additional.png",
		"img/additional_cancel.png",
		"img/additional_item.png",
		"img/additional_skip.png",
		"img/leper.ability.five.png",
		"img/flygon.json",
		"js/creatures.json",
		"js/skills.json",
		"js/elements.json",
	
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
		{name:'status_critical', url:'img/status_critical.png'},
		
		{name:'element_flora', url:'img/element_flora.png'},
		{name:'element_water', url:'img/element_water.png'},
		{name:'element_fire', url:'img/element_fire.png'},
		{name:'element_earth', url:'img/element_earth.png'},
		{name:'element_lightning', url:'img/element_lightning.png'},
		{name:'element_wind', url:'img/element_wind.png'},
		{name:'element_toxic', url:'img/element_toxic.png'},
		{name:'element_spirit', url:'img/element_spirit.png'},
		{name:'element_shadow', url:'img/element_shadow.png'},
		
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


/*
*	Creature class 
*/
class Creature{
	constructor({id = 0, level = 1, statDis = [0,0,0,0,0,0,0], skills=[0,0,0,0]}){
		this.id = id;
		this.level = level;
		this.statDis = statDis;
		this.skills = skills;
		this.pos = 0;
		
		// this.critDmg = Math.floor(Math.random() * 25) + 10;
		this.critDmg = 0;
		
		const creatureList = resources["js/creatures.json"];				//Load creature JSON list
		
		this.frames = creatureList.data.creatures[this.id].frames;			//Number of frames for creature animation
		this.code = creatureList.data.creatures[this.id].code;				//Creature code
		this.size = creatureList.data.creatures[this.id].size;				//Creature size
		
		this.name = creatureList.data.creatures[this.id].name;				//Creature name
		this.elements = creatureList.data.creatures[this.id].elements;		//Creature element
		
		this.overallHP = Math.round(((((2*creatureList.data.creatures[this.id].hp + this.statDis[0]) * this.level)/100) + this.level + 10) * this.size);
// 		this.overallHP = 100;
			
		this.EHP = this.overallHP - this.critDmg;

		this.statCalc = [
			this.EHP - Math.floor(Math.random() * ((this.EHP - 12) - 12 + 1)), 
			// this.EHP, 
// 			this.EHP - 25,
			creatureList.data.creatures[this.id].dodge + this.statDis[1]/2,
			creatureList.data.creatures[this.id].patk + this.statDis[2],
			creatureList.data.creatures[this.id].pdef + this.statDis[3],
			creatureList.data.creatures[this.id].satk + this.statDis[4],
			creatureList.data.creatures[this.id].sdef + this.statDis[5],
			creatureList.data.creatures[this.id].spd + this.statDis[6]
		];
		
		this.statMod = [0, 0, 0, 0, 0, 0, 0];
		this.statusArray = [
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
		this.statusSpriteArray = [];
	}
	
	heal(healAmount){
		this.statCalc[0] += healAmount;
		if(this.statCalc[0] > this.EHP){
			this.statCalc[0] = this.EHP;
		}
	}

	damage(dmgAmount){
		this.statCalc[0] -= dmgAmount;
		if(this.statCalc[0] < 0){
			this.statCalc[0] = 0;
		}
	}

	criticalHit(critAmount){
		this.critDmg += critAmount;
		this.EHP = this.overallHP - this.critDmg;
	}

	fullHeal(){
		this.statCalc[0] = this.EHP;	
	}

	get speed(){
		return this.statCalc[6];
	}

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


/*
*	Declare  variables
*/
const skillsList = resources["js/skills.json"];
const elementList = resources["js/elements.json"];

let state, onScreenStats, consoleScreen;

var styleFontFamily = 'Arvo';

const heroRoster = new PIXI.Container();			//Hero stage
const enemyRoster = new PIXI.Container();			//Enemy stage
const heroHP = new PIXI.Container();				//Hero HP
const enemyHP = new PIXI.Container();				//Enemy HP
const heroDMG = new PIXI.Container();				//Hero damage UI
const enemyDMG = new PIXI.Container();				//Enemy damage UI
const additionalContainer = new PIXI.Container();	//Additional actions

const rectTemp = new PIXI.Graphics();

// const rectHero = new PIXI.Graphics();
// const rectEnemy = new PIXI.Graphics();

var btnAdditional, btnSettings, textureAdditional, textureSettings;
var textureAdditionalCancel, textureAdditionalMove, textureAdditionalItem, textureAdditionalSkip;
var btnAdditionalCancel, btnAdditionalMove, btnAdditionalItem, btnAdditionalSkip;

var healthSpacing = 20;
var margin = 50;
var skillSpacer = 10;
var targetTextFontSize = 26;
var skillNameFontSize = 28;

var selectedVita = 0;
var selectedSkill = 0;

// var db = firebase.firestore();

const factory = dragonBones.PixiFactory.factory;

const heroArray = [];					//Array of hero vitas
const enemyArray = [];					//Array of enemy vitas
const additionalArray = [];				//Array of additional menu buttons

var turnArray = [];						//Array for turn order
var validSkillTargetArray = [];			//Array of valid skill targets
var validMoveTargetArray = [];			//Array of vaild move targets

const heroContainerArray = [];			//Array of hero sprite containers
const enemyContainerArray = [];			//Array of enemy sprite containers
const heroHPContainerArray = [];		//Array of hero HP containers
const enemyHPContainerArray = [];		//Array of enemy HP containers
const skillContainerArray = [];			//Array of skill containers
const heroArrayDmg = [];				//Array of hero dmg containers
const enemyArrayDmg = [];				//Array of enemy dmg containers

const hero = [];
hero[0] = {
	id: 11, level: 50, 
	skill1: 4, skill2: 1, skill3: 2, skill4: 1,
	statDODG: 20, statHP: 0, statPATK: 10, statPDEF: 0, statSATK: 0, statSDEF: 0, statSPD: 125
};
hero[1] = {
	id: 2, level: 47, 
	skill1: 4, skill2: 10, skill3: 11, skill4: 1,
	statDODG: 20, statHP: 35, statPATK: 0, statPDEF: 3, statSATK: 40, statSDEF: 20, statSPD: 39
};
hero[2] = {
	id: 10, level: 45, 
	skill1: 4, skill2: 10, skill3: 11, skill4: 1,
	statDODG: 20, statHP: 35, statPATK: 40, statPDEF: 10, statSATK: 0, statSDEF: 3, statSPD: 47
};
// hero[3] = {
// 	id: 9, level: 47, 
// 	skill1: 4, skill2: 0, skill3: 6, skill4: 1,
// 	statDODG: 20, statHP: 35, statPATK: 0, statPDEF: 3, statSATK: 40, statSDEF: 20, statSPD: 19
// };

const enemy = [];
enemy[0] = {
	id: 9, level: 49, 
	skill1: 4, skill2: 6, skill3: 1, skill4: 3,
	statDODG: 20, statHP: 20, statPATK: 0, statPDEF: 40, statSATK: 60, statSDEF: 0, statSPD: 50
};
enemy[1] = {
	id: 8, level: 46, 
	skill1: 4, skill2: 10, skill3: 11, skill4: 8,
	statDODG: 10, statHP: 20, statPATK: 0, statPDEF: 20, statSATK: 53, statSDEF: 0, statSPD: 55
};
enemy[2] = {
	id: 12, level: 45, 
	skill1: 4, skill2: 1, skill3: 5, skill4: 3,
	statDODG: 0, statHP: 0, statPATK: 0, statPDEF: 0, statSATK: 40, statSDEF: 0, statSPD: 95
};
// enemy[3] = {
// 	id: 11, level: 45, 
// 	skill1: 4, skill2: 0, skill3: 6, skill4: 1,
// 	statDODG: 10, statHP: 20, statPATK: 0, statPDEF: 40, statSATK: 65, statSDEF: 0, statSPD: 0
// };

//Write to firestore
// db.collection("enemy").doc("004").set({
// 	id: 10,
// 	level: 45,
// 	skill1: 1,
// 	skill2: 1,
// 	skill3: 2,
// 	skill4: 2,
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

// const framesIdleFlygon = [];				//Flygon spritesheet

function setup(){	
	textureAdditional = PIXI.Texture.from('img/additional.png');
	textureSettings = PIXI.Texture.from('img/leper.ability.five.png');
	textureAdditionalCancel = PIXI.Texture.from('img/additional_cancel.png');
	textureAdditionalMove = PIXI.Texture.from('img/ability_move.png');
	textureAdditionalItem = PIXI.Texture.from('img/additional_item.png');
	textureAdditionalSkip = PIXI.Texture.from('img/additional_skip.png');
	
	consolePrint("SETUP");
	// PIXI.settings.ROUND_PIXELS = true;
	rectTemp.beginFill(0xccffcc).drawRect(-50, -50, 100, 100);
	rectTemp.alpha = 0.1;
	// app.stage.add(rectTemp);

// 	rectHero.beginFill(0xaec6cf).drawRect(0, 0, -200, 100);
// 	rectHero.x = 0;
// 	rectHero.y = 0;
// 	heroHP.addChild(rectHero);
	
// 	rectEnemy.beginFill(0xff6961).drawRect(0, 0, 200, 100);
// 	rectEnemy.x = 0;
// 	rectEnemy.y = 0;
// 	enemyHP.addChild(rectEnemy);

	heroRoster.x = app.screen.width/2;
	heroRoster.y = app.screen.height/2;
	
	enemyRoster.x = app.screen.width/2;
	enemyRoster.y = app.screen.height/2;
	
	heroHP.x = app.screen.width/2;
	heroHP.y = 10;
	enemyHP.x = app.screen.width/2;
	enemyHP.y = 10;
	
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
// 				], skills:[
// 					doc.data().skill1, 
// 					doc.data().skill2, 
// 					doc.data().skill3, 
// 					doc.data().skill4
// 				]});
// 			heroArray.push(creature);
// 		});
// 	})
// 	.then(function() {
// 		console.log("Heroes created successfully!");
// 		heroArray.forEach(setPos);
// 		heroArray.forEach(function (item, index){
// 			createSprite(1, item, index)	
// 		});
// 	});
	
	hero.forEach(function(item, index){
		const newCreature = new Creature({
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
			], skills:[
				item.skill1,
				item.skill2,
				item.skill3,
				item.skill4
			]
		});
		heroArray.push(newCreature);
	});

	heroArray.forEach(setPos);
	heroArray.forEach(function (item, index){
		createSprite(1, item, index)	
	});
	
	enemy.forEach(function(item, index){
		const newCreature = new Creature({
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
			], skills:[
				item.skill1,
				item.skill2,
				item.skill3,
				item.skill4
			]
		});
		enemyArray.push(newCreature);
	});

	enemyArray.forEach(setPos);
	enemyArray.forEach(function (item, index){
		createSprite(-1, item, index)	
	});

	//Create initial skill buttons
	for(var i = 0; i < 4; i++){
// 		console.log(heroArray[1].skills[i]);
		let skillRect = new PIXI.Graphics();
		let skillSelectFill = new PIXI.Graphics();
		let skillSelectStroke = new PIXI.Graphics();
		let skillDisable = new PIXI.Graphics();
		
		const skillContainer = new PIXI.Container();
		const skillSelect = new PIXI.Container();
		
		// make the button interactive...
		skillContainer.buttonMode = true;
		skillContainer.interactive = true;
		skillContainer
		// set the mousedown and touchstart callback...
		.on('pointerdown', onSkillDown);
		
		//Identifier = [skill index, skill id, ]
		skillContainer.identifier = [i , heroArray[1].skills[i], 1];
		
		let skillName = new Text(skillsList.data.skills[heroArray[1].skills[i]].name, {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe});
		skillName.anchor.set(0, 0.5);
		
		skillRect.beginFill(0x222222).drawRect(0, 0, 50, 50);
		skillRect.x = 0;
		skillRect.y = 0;
		
		skillContainer.addChild(skillRect);
		skillContainer.rect = skillRect;
		
		skillSelectStroke.beginFill(0xFFD600).drawRect(0, 0, 50, 50);
		skillSelectStroke.x = 0;
		skillSelectStroke.y = 0;		
		skillSelectFill.beginFill(0x222222).drawRect(0, 0, 50, 50);
		skillSelectFill.x = 0;
		skillSelectFill.y = 0;
		
		skillDisable.beginFill(0x636363).drawRect(0, 0, 50, 50);
		skillDisable.alpha = 0.5;
		skillDisable.x = 0;
		skillDisable.y = 0;
		
		skillSelect.addChild(skillSelectStroke);
		skillSelect.addChild(skillSelectFill);
		skillSelect.stroke = skillSelectStroke;
		skillSelect.fill = skillSelectFill;
				
		skillContainer.addChild(skillSelect);
		skillContainer.selected = skillSelect;
		
		skillContainer.selected.visible = false;
		
		skillContainer.addChild(skillName);
		skillContainer.skillName = skillName;
		
		const markerContainer = new PIXI.Container();
		
		var w = 12.728;
		
		const markerPositionArray = [];
		const markerPositionContainer = new PIXI.Container();
		const markerTargetArray = [];
		const markerTargetContainer = new PIXI.Container();
		for (var j = 0; j < 2; j++){
			for (var k = 0; k < 4; k++){
				let defaultMarker = new PIXI.Graphics();
				defaultMarker.beginFill(0x636363).drawRect(0, -w, w, w);
				defaultMarker.x = 25 * j;
				defaultMarker.pivot.set(0.5);
				defaultMarker.angle = 45;

				let posMarker = new PIXI.Graphics();
				if(j == 0)		posMarker.beginFill(0x66cc66).drawRect(0, -w, w, w);
				else 			posMarker.beginFill(0xFF6961).drawRect(0, -w, w, w);

				posMarker.pivot.set(0.5);
				posMarker.angle = 45;

				if(j == 0){
					markerPositionArray.push(posMarker);
					markerPositionContainer.addChild(defaultMarker);
					markerPositionContainer.addChild(posMarker);
				}else{
					markerTargetArray.push(posMarker);
					markerTargetContainer.addChild(defaultMarker);
					markerTargetContainer.addChild(posMarker);
				}
			}
		}

		//Default position markers
		// const markerPositionArray = [];
		// const markerPositionContainer = new PIXI.Container();
		// for (var j = 0; j < 4; j++){
		// 	let defaultMarker = new PIXI.Graphics();
		// 	defaultMarker.beginFill(0x636363).drawRect(0, -w, w, w);
			
		// 	let posMarker = new PIXI.Graphics();			
		// 	posMarker.beginFill(0x66cc66).drawRect(0, -w, w, w);
			
		// 	// if(skillsList.data.skills[heroArray[1].skills[i]].position[j] == 0){
		// 	// 	posMarker.visible = false;
		// 	// }
			
		// 	defaultMarker.x = 25 * j;
		// 	posMarker.x = 25 * j;
			
		// 	defaultMarker.pivot.set(0.5);
		// 	defaultMarker.angle = 45;
		// 	posMarker.pivot.set(0.5);
		// 	posMarker.angle = 45;
		// 	markerPositionArray.push(posMarker);
		// 	markerPositionContainer.addChild(defaultMarker);
		// 	markerPositionContainer.addChild(posMarker);
		// }
		
		// //Default target markers
		// const markerTargetArray = [];
		// const markerTargetContainer = new PIXI.Container();
		// for (var j = 0; j < 4; j++){
		// 	let defaultMarker = new PIXI.Graphics();
		// 	defaultMarker.beginFill(0x636363).drawRect(0, -w, w, w);

		// 	let posMarker = new PIXI.Graphics();				
		// 	posMarker.beginFill(0xFF6961).drawRect(0, -w, w, w);

		// 	// if(skillsList.data.skills[heroArray[1].skills[i]].target[j] == 0){
		// 	// 	posMarker.visible = false;
		// 	// }

		// 	defaultMarker.x = 25 * j;
		// 	posMarker.x = 25 * j;

		// 	defaultMarker.pivot.set(0.5);
		// 	defaultMarker.angle = 45;
		// 	posMarker.pivot.set(0.5);
		// 	posMarker.angle = 45;
		// 	markerTargetArray.push(posMarker);
		// 	markerTargetContainer.addChild(defaultMarker);
		// 	markerTargetContainer.addChild(posMarker);
		// }
		
		//Target several markers
		const markerTargetSeveralArray = [];
		const markerTargetSeveralContainer = new PIXI.Container();		
		for (var j = 0; j < 3; j++){
			let posMarker = new PIXI.Graphics();				
			posMarker.beginFill(0xFF6961).drawRect(0, -4, 20, 6);
			posMarker.x = 25 * j;
			posMarker.visible = false;
			markerTargetSeveralArray.push(posMarker);
			markerTargetSeveralContainer.addChild(posMarker);
		}

		markerTargetContainer.x = 123;
		markerTargetSeveralContainer.x = 135;
		markerContainer.addChild(markerPositionContainer);
		markerContainer.addChild(markerTargetContainer);
		markerContainer.addChild(markerTargetSeveralContainer);

		skillContainer.markerTargetSeveralContainer = markerTargetSeveralContainer;
		skillContainer.markerTargetSeveralArray = markerTargetSeveralArray;
		skillContainer.markerTargetSeveralContainer.visible = false;
		
		skillContainer.addChild(markerContainer);
		skillContainer.markerContainer = markerContainer;		
		skillContainer.markerPositionArray = markerPositionArray;
		skillContainer.markerPositionContainer = markerPositionContainer;		
		skillContainer.markerTargetArray = markerTargetArray;
		skillContainer.markerTargetContainer = markerTargetContainer;
		
		let targetText = new Text("1►", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xFF6961});
		targetText.anchor.set(0, 0.5);
		skillContainer.addChild(targetText);
		skillContainer.targetText = targetText;
		skillContainer.targetText.visible = false;
		
		var skillElement;
		switch(skillsList.data.skills[heroArray[1].skills[i]].element){
			case 1:
				skillElement = new PIXI.Sprite(resources.element_earth.texture);
				break;
			case 2:
				skillElement = new PIXI.Sprite(resources.element_fire.texture);
				break;
			case 3:
				skillElement = new PIXI.Sprite(resources.element_flora.texture);
				break;
			case 4:
				skillElement = new PIXI.Sprite(resources.element_lightning.texture);
				break;
			case 5:
				skillElement = new PIXI.Sprite(resources.element_shadow.texture);
				break;
			case 6:
				skillElement = new PIXI.Sprite(resources.element_spirit.texture);
				break;
			case 7:
				skillElement = new PIXI.Sprite(resources.element_toxic.texture);
				break;
			case 8:
				skillElement = new PIXI.Sprite(resources.element_water.texture);
				break;
			case 9:
				skillElement = new PIXI.Sprite(resources.element_wind.texture);
				break;
			default:
				skillElement = new PIXI.Sprite(resources.element_fire.texture);
				break;
		}
		skillElement.anchor.set(0, 0.5);
		skillContainer.addChild(skillElement);
		skillContainer.skillElement = skillElement;
		
		skillContainer.addChild(skillDisable);
		skillContainer.disable = skillDisable;
		
		skillContainerArray.push(skillContainer);
		app.stage.addChild(skillContainer);
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
// 				], skills:[
// 					doc.data().skill1, 
// 					doc.data().skill2, 
// 					doc.data().skill3, 
// 					doc.data().skill4
// 				]});
// 			enemyArray.push(creature);
// 		});
// 	})
// 	.then(function() {
// 		console.log("Enemies created successfully!");
// 		enemyArray.forEach(setPos);
// 		enemyArray.forEach(function (item, index){
// 			createSprite(-1, item, index)	
// 		});
// 	});
	
	//Current display stats
	onScreenStats = new Text("Resolution: " + app.renderer.resolution +
		"\nInner Width: " + window.innerWidth + 
		"\nInner Height: " + window.innerHeight);
	

	//Console text printout
	consoleScreen = new Text("Console: ");
	
	consoleScreen.x = 300;
	
	onScreenStats.visible = false;
	consoleScreen.visible = false;
	
	btnSettings = new PIXI.Sprite(textureSettings);					//Button settings
    	btnSettings.buttonMode = true;
    	btnSettings.anchor.set(1,1);
    	btnSettings.position.x = 50;
    	btnSettings.position.y = 50;
	btnSettings.width = 50;
	btnSettings.height = 50;
    	// make the button interactive...
    	btnSettings.interactive = true;
	btnSettings.accessible = true;
	btnSettings.accessibleTitle = "Fullscreen button";
	btnSettings
        // set the mousedown and touchstart callback...
        .on('pointerdown', onButtonDown);
	
	btnAdditional = new PIXI.Sprite(textureAdditional);				//Button additional
	btnAdditional.anchor.set(0,1);
	btnAdditional.buttonMode = true;
    	btnAdditional.interactive = true;
	btnAdditional
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalDown);
	
	btnAdditionalCancel = new PIXI.Sprite(textureAdditionalCancel);	//Button additional cancel
	btnAdditionalCancel.anchor.set(0,1);
	btnAdditionalCancel.buttonMode = true;
    	btnAdditionalCancel.interactive = true;
	btnAdditionalCancel
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalCancelDown);	
	additionalContainer.addChild(btnAdditionalCancel);
	additionalArray.push(btnAdditionalCancel);
	
	btnAdditionalItem = new PIXI.Sprite(textureAdditionalItem);		//Button additional item
	btnAdditionalItem.anchor.set(0,1);
	btnAdditionalItem.buttonMode = true;
    	btnAdditionalItem.interactive = true;
	btnAdditionalItem
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalItemDown);
	additionalContainer.addChild(btnAdditionalItem);
	additionalArray.push(btnAdditionalItem);
	
	btnAdditionalMove = new PIXI.Sprite(textureAdditionalMove);		//Button additional move
	btnAdditionalMove.anchor.set(0,1);
	btnAdditionalMove.buttonMode = true;
    	btnAdditionalMove.interactive = true;
	btnAdditionalMove
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalMoveDown);
	additionalContainer.addChild(btnAdditionalMove);
	additionalArray.push(btnAdditionalMove);
	
	btnAdditionalSkip = new PIXI.Sprite(textureAdditionalSkip);		//Button additional skip
	btnAdditionalSkip.anchor.set(0,1);
	btnAdditionalSkip.buttonMode = true;
    	btnAdditionalSkip.interactive = true;
	btnAdditionalSkip
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalSkipDown);
	additionalContainer.addChild(btnAdditionalSkip);
	additionalArray.push(btnAdditionalSkip);
	
	//Add containers to stage
	app.stage.addChild(btnSettings);			//Settings button
	app.stage.addChild(btnAdditional);			//Additional button
	
	app.stage.addChild(heroRoster);				//Hero stage
	app.stage.addChild(enemyRoster);			//Enemy stage
	app.stage.addChild(heroHP);					//Hero HP
	app.stage.addChild(enemyHP);				//Enemy HP
	app.stage.addChild(heroDMG);				//Hero damage UI
	app.stage.addChild(enemyDMG);				//Enemy damage UI
	
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

	app.stage.addChild(additionalContainer);
	additionalContainer.visible = false;
	
	app.stage.addChild(onScreenStats);	
	app.stage.addChild(consoleScreen);

	calculateTurnOrder();
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
	heroHPContainerArray.forEach(hpContainer => {
		if(hpContainer.select.animate == true){
			hpContainer.select.width = hpContainer.select.indicatorBar1.width + (Math.cos(phase) + 1) * 10 + 1;
// 			hpContainer.select.scale.x = (Math.cos(phase) + 1) * 0.03 + 1;
		}
	});
	enemyHPContainerArray.forEach(hpContainer => {
		if(hpContainer.select.animate == true){
			hpContainer.select.width = hpContainer.select.indicatorBar1.width + (Math.cos(phase) + 1) * 10 + 1;
// 			hpContainer.select.scale.x = (Math.cos(phase) + 1) * 0.03 + 1;
		}
	});
// 	heroHPContainerArray[0].select.scale.x = (Math.cos(phase) + 1) * 0.04 + 1;

// 	tempContainer.damageText.y -= 5;
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
	console.log("ID: " + item.id + " |Size: " + item.size + " |Code: " + item.code + " |Position: " + item.pos + " |HP: " + item.statCalc[0] + "/" + item.EHP + "|Vital: " + item.critDmg);
			
	factory.parseDragonBonesData(resources[item.code + '_skeleton'].data);
	factory.parseTextureAtlasData(resources[item.code + '_texture_json'].data, resources[item.code + '_texture_png'].texture);

	const armatureHero = factory.buildArmatureDisplay(item.code, item.code);
	armatureHero.animation.gotoAndPlayByFrame('idle', Math.floor(Math.random() * item.frames) + 1);
//     		armatureHero.animation.play('idle');

	const creatureContainer = new PIXI.Container();	
	creatureContainer.addChild(armatureHero);
	
	creatureContainer.identifier = [direction, index, item.pos];
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
	
	const healthBar = new PIXI.Container();

	const dmgContainer = new PIXI.Container();

	const dmgPopup = new PIXI.Container();

	const style = new PIXI.TextStyle({
        fontFamily: 'Arvo',
        fontSize: 70,
        // fontStyle: 'italic',
        fontWeight: 700,
//         fill: ['#ff0000', '#D80000'], // gradient
		fill: '#D80000',	
		stroke: '#3B0000',
   		strokeThickness: 10,
    });

    const style2 = new PIXI.TextStyle({
        fontFamily: 'Arvo',
        fontSize: 24,
        // fontStyle: 'italic',
        fontWeight: 700,
//         fill: ['#ff0000', '#D80000'], // gradient
		fill: '#D80000',	
		stroke: '#222222',
   		strokeThickness: 5,
    });

    const style3 = new PIXI.TextStyle({
        fontFamily: 'Arvo',
        fontSize: 24,
        // fontStyle: 'italic',
        fontWeight: 700,
//         fill: ['#ff0000', '#D80000'], // gradient
		fill: '#ff7b00',	
		stroke: '#4E2600',
   		strokeThickness: 5,
    });


	let dmgNum = new Text("50", style);
	dmgNum.anchor.set(0.5, 0.5);
	// dmgNum.x = 100;
	// dmgNum.y = 500;

	let dmgCrit = new Text ("CRIT!", style3);
	dmgCrit.anchor.set(0.5, 0.5);
	dmgCrit.y = 50;
	dmgPopup.addChild(dmgCrit);
	dmgPopup.dmgCrit = dmgCrit;

	let dmgEffective = new Text ("Poor  x0.25", style2);
	dmgEffective.anchor.set(0.5, 0.5);
	dmgEffective.y = -50;
	dmgPopup.addChild(dmgEffective);
	dmgPopup.dmgEffective = dmgEffective;


	//GSAP3 version, not working?
	// var tween2 = gsap.timeline({paused: true});
	// tween2
	// 	.to(dmgNum, { duration: 0.5, ease:"expo.in", alpha: 1})
	// 	.to(dmgNum.scale, { duration: 0.5, ease:"expo.in", x: 2, y: 2}, 0);
	// tween2
	// 	.to(dmgNum, { duration: 1.25, ease:"expo.inOut", y: -300, alpha: 0})
	// 	.to(dmgNum.scale, { duration: 1.25, ease:"expo.inOut", x: 1, y: 1}, 0.1);

	//GSAP2
	var tween2 = new TimelineMax({paused: true});
	// var tween2 = new TimelineMax({paused: true, onComplete: function(){
	// 	dmgNum.visible = false;
	// }});
	tween2.to(dmgPopup, 0.2, {ease:Expo.easeIn, alpha: 1});
	tween2.fromTo(dmgPopup.scale, 0.2, {x: 0.5, y: 0.5}, {ease:Expo.easeIn, x: 1, y: 1}, 0);
	// tween2.to(dmgPopup.scale, 0.2, {ease:Expo.easeIn, x: 1, y: 1}, 0);
	tween2.to(dmgPopup, 1.5, {delay: 0.5, ease:Expo.easeInOut, y: 100, alpha: 0})
	tween2.to(dmgPopup.scale, 1.5, {delay: 0.5, ease:Expo.easeInOut, x: 0.5, y: 0.5}, 0.2);

	dmgPopup.alpha = 0;

	dmgPopup.tween = tween2;
	
	dmgPopup.addChild(dmgNum);
	dmgPopup.dmgNum = dmgNum;
	dmgContainer.addChild(dmgPopup);
	dmgContainer.dmgPopup = dmgPopup;

	var dmgBarContainer = new PIXI.Container();

	let dmgBar = new PIXI.Graphics();
	dmgBar.beginFill(0xFFFFFF);
	dmgBar.drawRect(0, 0, 10, 40);
	dmgBar.endFill();
	dmgBar.alpha = 0.9;
	dmgBar.visible = false;

	dmgBarContainer.addChild(dmgBar);
	dmgBarContainer.dmgBar = dmgBar;

	dmgContainer.addChild(dmgBarContainer);
	dmgContainer.dmgBarContainer = dmgBarContainer;

	healthBar.identifier = [direction, index];
	// healthBar.buttonMode = true;
	// healthBar.interactive = true;
	// healthBar
 //        // set the mousedown and touchstart callback...
 //        .on('pointerdown', onHPDown);
	
	let outerBar = new PIXI.Graphics();
	outerBar.beginFill(0x222222);
	outerBar.drawRect(0, 0, (app.screen.width-320)/8, 40);
	outerBar.endFill();
	healthBar.addChild(outerBar);
	healthBar.outer = outerBar;

	outerBar.identifier = [direction, index];
	outerBar.buttonMode = true;
	outerBar.interactive = true;
	outerBar
        // set the mousedown and touchstart callback...
        .on('pointerdown', onHPDown);
	
	let innerBar = new PIXI.Graphics();
	innerBar.beginFill(0x2C8A2C);
	innerBar.drawRect(0, 0, (app.screen.width-320)/8 * (item.statCalc[0]/item.EHP), 40);
	innerBar.endFill();
	healthBar.addChild(innerBar);
	healthBar.inner = innerBar;
	
	let critDmgBar = new PIXI.Graphics();
	critDmgBar.beginFill(0xff7b00);
	critDmgBar.drawRect(0, 0, 1, 40);
	critDmgBar.endFill();
	healthBar.addChild(critDmgBar);
	healthBar.critDmgBar = critDmgBar;
	
	let turnIndicator = new PIXI.Graphics();
	turnIndicator.beginFill(0xFFD600);
	turnIndicator.drawRect(0, 0, (app.screen.width-320)/8, 5);
	turnIndicator.endFill();
	healthBar.addChild(turnIndicator);
	healthBar.turn = turnIndicator;
	// healthBar.turn.visible = false;
	
	let statusEffect;
	
	item.statusArray.forEach(status => {
		switch(status[0]){
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
				statusEffect = new PIXI.Sprite(resources.status_critical.texture);
				break;
			default:
				statusEffect = new PIXI.Sprite(resources.status_buff.texture);
				
		}
		healthBar.addChild(statusEffect);
		item.statusSpriteArray.push(statusEffect);
	});	
	
	let textHP = new Text(item.statCalc[0] + " / " + item.EHP, {fontFamily : styleFontFamily, fontSize: 24, fill : 0xfefefe, align : 'center'});
	textHP.anchor.set(0.5);

	healthBar.addChild(textHP);
	healthBar.textHP = textHP;

	const select = new PIXI.Container();
	const target = new PIXI.Container();
	const heal = new PIXI.Container();
	const move = new PIXI.Container();
	
	for(var i = 0; i < 4; i++){
		var colour;
		if(i == 0){
			//Select
			colour = 0xFFD600;		
		}else if(i == 1){
			//Target
			colour = 0xFF392F;
		}else if(i == 2){
			//Heal
			colour = 0x28F828;
		}else if(i == 3){
			//Move
			colour = 0x6ee4ff;
		}
		let indicatorStart, indicatorEnd, indicatorBar1, indicatorBar2;

		indicatorEnd = new PIXI.Graphics();
		indicatorEnd.beginFill(colour);
		indicatorEnd.drawRect(0, 0, 4, 18);
		indicatorEnd.endFill();

		indicatorStart = new PIXI.Graphics();
		indicatorStart.beginFill(colour);
		indicatorStart.drawRect(0, 0, 4, 18);
		indicatorStart.endFill();

		indicatorBar1 = new PIXI.Graphics();
		indicatorBar1.beginFill(colour);
		indicatorBar1.drawRect(0, 0, (app.screen.width-320)/8, 7);
		indicatorBar1.endFill();

		indicatorBar2 = new PIXI.Graphics();
		indicatorBar2.beginFill(colour);
		indicatorBar2.drawRect(0, 0, (app.screen.width-320)/8, 2);
		indicatorBar2.endFill();

		if(i == 0){
			//Select
			select.addChild(indicatorEnd);
			select.indicatorEnd = indicatorEnd;
			select.addChild(indicatorStart);
			select.indicatorStart = indicatorStart;
			select.addChild(indicatorBar1);
			select.indicatorBar1 = indicatorBar1;
			select.addChild(indicatorBar2);
			select.indicatorBar2 = indicatorBar2;
			healthBar.addChild(select);
			healthBar.select = select;
			healthBar.select.visible = false;
		}else if(i == 1){
			//Target
			target.addChild(indicatorEnd);
			target.indicatorEnd = indicatorEnd;
			target.addChild(indicatorStart);
			target.indicatorStart = indicatorStart;
			target.addChild(indicatorBar1);
			target.indicatorBar1 = indicatorBar1;
			target.addChild(indicatorBar2);
			target.indicatorBar2 = indicatorBar2;
			healthBar.addChild(target);
			healthBar.target = target;
			healthBar.target.visible = false;
		}else if(i == 2){
			//Heal
			heal.addChild(indicatorEnd);
			heal.indicatorEnd = indicatorEnd;
			heal.addChild(indicatorStart);
			heal.indicatorStart = indicatorStart;
			heal.addChild(indicatorBar1);
			heal.indicatorBar1 = indicatorBar1;
			heal.addChild(indicatorBar2);
			heal.indicatorBar2 = indicatorBar2;
			healthBar.addChild(heal);
			healthBar.heal = heal;
			healthBar.heal.visible = false;
		}else if(i == 3){
			//Move
			move.addChild(indicatorEnd);
			move.indicatorEnd = indicatorEnd;
			move.addChild(indicatorStart);
			move.indicatorStart = indicatorStart;
			move.addChild(indicatorBar1);
			move.indicatorBar1 = indicatorBar1;
			move.addChild(indicatorBar2);
			move.indicatorBar2 = indicatorBar2;
			healthBar.addChild(move);
			healthBar.move = move;
			healthBar.move.visible = false;
		}
	}
	
	if(direction > 0){
		heroContainerArray.push(creatureContainer);
		heroHPContainerArray.push(healthBar);
		heroArrayDmg.push(dmgContainer);
// 		moveHeroContainerArray.push(moveContainer);
		
		heroRoster.addChild(creatureContainer);
		heroHP.addChild(healthBar);
		heroDMG.addChild(dmgContainer);
// 		heroHP.addChild(moveContainer);
	}else{
		enemyContainerArray.push(creatureContainer);
		enemyHPContainerArray.push(healthBar);
		enemyArrayDmg.push(dmgContainer);
// 		moveEnemyContainerArray.push(moveContainer);
		
		enemyRoster.addChild(creatureContainer);
		enemyHP.addChild(healthBar);

		enemyDMG.addChild(dmgContainer);
// 		enemyHP.addChild(moveContainer);
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

	// rectTemp.position.set(app.screen.width/2, app.screen.height/2);
	// tempContainer.position.set(app.screen.width/2, app.screen.height/2);
	
	var skillSelectPadding = 5;
	
	if(app.screen.width < 860){
		margin = 10;
		healthSpacing = 10;
		skillSpacer = 5;
		skillSelectPadding = 2;
		heroHP.position.set(margin, 20);
		enemyHP.position.set(app.screen.width/2+margin, 20);
		heroDMG.position.set(margin, 20);
		enemyDMG.position.set(app.screen.width/2+margin, 20);
		targetTextFontSize = 12;
		skillNameFontSize = 14;
	}else if(app.screen.width < 1366){
		margin = 15;
		healthSpacing = 10;
		skillSpacer = 8;
		skillSelectPadding = 3;
		heroHP.position.set(margin, 40);
		enemyHP.position.set(app.screen.width/2+margin, 40);
		heroDMG.position.set(margin, 40);
		enemyDMG.position.set(app.screen.width/2+margin, 40);
		targetTextFontSize = 16;
		skillNameFontSize = 18;
	}else{
		margin = 50;
		healthSpacing = 20;
		skillSpacer = 10;
		skillSelectPadding = 5;
		heroHP.position.set(margin, 40);
		enemyHP.position.set(app.screen.width/2+margin, 40);
		heroDMG.position.set(margin, 40);
		enemyDMG.position.set(app.screen.width/2+margin, 40);
		targetTextFontSize = 26;
		skillNameFontSize = 28;
	}
	
	var calcWidth = (2*app.screen.width - 4*margin - 10*healthSpacing)/9;
	
	btnSettings.width = calcWidth/4;
	btnSettings.height = btnSettings.width;
	btnSettings.position.set(app.screen.width - margin, app.screen.height - margin);
	
	btnAdditional.width = btnSettings.width;
	btnAdditional.height = btnSettings.width;
	btnAdditional.position.set(margin, app.screen.height - margin);
	
	additionalArray.forEach((additionalBtn, index) => {
		additionalBtn.width = btnSettings.width;
		additionalBtn.height = btnSettings.width;
		additionalBtn.y = -index * btnSettings.width;
	});
	
	additionalContainer.position.set(margin, app.screen.height - margin);
	
	skillContainerArray.forEach((skillContainer, index) => {
		skillContainer.rect.width = (2*app.screen.width - 4*margin - 10*healthSpacing)/9;
		skillContainer.rect.height = skillContainer.rect.width/4;
		skillContainer.selected.stroke.width = (2*app.screen.width - 4*margin - 10*healthSpacing)/9;
		skillContainer.selected.stroke.height = skillContainer.rect.width/4;
		skillContainer.selected.fill.width =  ((2*app.screen.width - 4*margin - 10*healthSpacing)/9) - skillSelectPadding*2;
		skillContainer.selected.fill.height = (skillContainer.rect.width/4) - skillSelectPadding*2;
		
		skillContainer.disable.width = (2*app.screen.width - 4*margin - 10*healthSpacing)/9;
		skillContainer.disable.height = skillContainer.rect.width/4;
		
		skillContainer.selected.fill.x = skillSelectPadding;
		skillContainer.selected.fill.y = skillSelectPadding;
		
		skillContainer.x = margin + skillContainer.rect.height + healthSpacing + (skillContainer.rect.width + healthSpacing)*index;
		skillContainer.y = app.screen.height - skillContainer.rect.height - margin;
		
		skillContainer.skillElement.width = skillContainer.rect.width/11;
		skillContainer.skillElement.height = skillContainer.skillElement.width * 2.3;
		skillContainer.skillElement.x = skillSpacer;
		skillContainer.skillElement.y = skillContainer.rect.height/2;
		
		skillContainer.markerContainer.width = (skillContainer.rect.width/3)*2;
		skillContainer.markerContainer.height = skillContainer.markerContainer.width/12;
// 		skillContainer.posMarkerContainer.scale.set(skillContainer.skillElement.width);
		
		skillContainer.targetText.style.fontSize = targetTextFontSize;
		skillContainer.skillName.style.fontSize = skillNameFontSize;
		
		skillContainer.skillName.x = skillContainer.rect.width/6;
		skillContainer.skillName.y = skillContainer.rect.height/3;
		
// 		skillContainer.skillName.x = skillContainer.rect.width;
// 		skillContainer.skillName.y = 0;
		
// 		skillContainer.skillID.x = (skillContainer.rect.width/15)*14;
// 		skillContainer.skillID.y = (skillContainer.rect.height/3)*2;
		
// 		skillContainer.posMarkerContainer.x = 0;
// 		skillContainer.posMarkerContainer.y = 0;
		
		skillContainer.markerContainer.x = skillContainer.rect.width/6;
		skillContainer.markerContainer.y = skillContainer.rect.height*3/4;
		
		skillContainer.targetText.x =  (skillContainer.rect.width/6) + (skillContainer.markerContainer.width * 0.569);
		skillContainer.targetText.y = skillContainer.rect.height*3/4;
	});
	
	heroRoster.position.set(app.screen.width/2-margin, app.screen.height*3/4);
	enemyRoster.position.set(app.screen.width/2+margin, app.screen.height*3/4);
	
	heroHPContainerArray.forEach(function (item, index){
		resizeHP(0, item, index)	
	});
	enemyHPContainerArray.forEach(function (item, index){
		resizeHP(1, item, index)	
	});
	
	heroContainerArray.forEach(function (item, index){
		resizeSprites(1, item, index)	
	});
	enemyContainerArray.forEach(function (item, index){
		resizeSprites(-1, item, index)	
	});

	heroArrayDmg.forEach(function (item, index){
		resizeDmg(0, item, index)
	});

	enemyArrayDmg.forEach(function (item, index){
		resizeDmg(1, item, index)
	});
	//Console log RESIZE
	consolePrint("RESIZE");
	consoleScreen.text = "RESIZE\n" + consoleScreen.text;
}

function resizeDmg(roster, item, index){
	var resizeWidth = (app.screen.width- (4*margin) - 6*(healthSpacing))/8;
	var resizeHeight = 40;

	if(app.screen.width < 860){
		resizeHeight = 20;
	}else if(app.screen.width < 1366){
		resizeHeight = 30;
	}else{
		resizeHeight = 40;
	}

	item.dmgBarContainer.dmgBar.height = resizeHeight;
	// item.critDmgBar.height = resizeHeight;

	if(roster == 0){
		var switcher = 0;
// 		moveHeroContainerArray[index].y = app.screen.height * 1/2;
		if(heroArray[index].size > 1){
			item.dmgPopup.x = (resizeWidth * 2 + healthSpacing)/2;
			item.dmgBarContainer.x = (resizeWidth * 2 + healthSpacing) * (heroArray[index].statCalc[0]/heroArray[index].overallHP);
			// item.critDmgBar.width = (resizeWidth * 2 + healthSpacing) * (heroArray[index].critDmg/heroArray[index].overallHP);
			// item.critDmgBar.x = resizeWidth * 2 + healthSpacing;
			switcher = 1;
		}else{
			item.dmgPopup.x = resizeWidth/2;
			item.dmgBarContainer.x = resizeWidth * (heroArray[index].statCalc[0]/heroArray[index].overallHP);
			// item.critDmgBar.width = resizeWidth * (heroArray[index].critDmg/heroArray[index].overallHP);
			// item.critDmgBar.x = resizeWidth;
		}
		switch(heroArray[index].pos) {
			case 1:
				item.x = (resizeWidth + healthSpacing) * (3 - switcher);
				break;
			case 2:
				item.x = (resizeWidth + healthSpacing) * (2 - switcher);
				break;
			case 3:
				if(heroArray[index].size == 1)	item.x = resizeWidth + healthSpacing * (1 - switcher)
				else 	item.x = 0
				break;
			case 4:
				item.x = 0;
				break;
			default:
				item.x = 0;
		}
	}else{
		if(enemyArray[index].size > 1){
			item.dmgPopup.x = (resizeWidth * 2 + healthSpacing)/2;
			item.dmgBarContainer.x = (resizeWidth * 2 + healthSpacing) * (enemyArray[index].statCalc[0]/enemyArray[index].overallHP);
			// item.critDmgBar.width = (resizeWidth * 2 + healthSpacing) * (heroArray[index].critDmg/heroArray[index].overallHP);
			// item.critDmgBar.x = resizeWidth * 2 + healthSpacing;
		}else{
			item.dmgPopup.x = resizeWidth/2;
			item.dmgBarContainer.x = resizeWidth * (enemyArray[index].statCalc[0]/enemyArray[index].overallHP);
			// item.critDmgBar.width = resizeWidth * (heroArray[index].critDmg/heroArray[index].overallHP);
			// item.critDmgBar.x = resizeWidth;
		}
		switch(enemyArray[index].pos) {
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

	// item.dmgBarContainer.x = item.inner.width;
	item.dmgPopup.y = app.screen.height/3;
}

function resizeHP(roster, item, index){
	console.log(app.screen.width + ", " + (app.screen.width-320)/8);
	var resizeWidth = (app.screen.width- (4*margin) - 6*(healthSpacing))/8;
	var resizeHeight = 40;
	var statusSpacing = 5;
	var HPSpacing = 3;
	var selectBarHeight = 7;
	var indicatorBar1Y = -15;
	var indicatorBar2Y = -20;
	var indicatorEndHeight = 18;
	var indicatorEndY = -23;
	
	if(app.screen.width < 860){
		resizeHeight = 20;
		// item.textHP.style = {fontFamily : 'Arial', fontSize: 14, fill : 0xfefefe, align : 'center'};
		item.textHP.style.fontSize = 14;
		statusSpacing = 2;
		HPSpacing = 1;
		selectBarHeight = 5;
		indicatorBar1Y = -10;
		indicatorBar2Y = -13;
		indicatorEndHeight = 12;
		indicatorEndY = -15;
		item.turn.height = 3;
		item.turn.y = resizeHeight;
	}else if(app.screen.width < 1366){
		resizeHeight = 30;
		// item.textHP.style = {fontFamily : 'Arial', fontSize: 18, fill : 0xfefefe, align : 'center'};
		item.textHP.style.fontSize = 18;
		statusSpacing = 4;
		HPSpacing = 2;
		selectBarHeight = 7;
		indicatorBar1Y = -15;
		indicatorBar2Y = -20;
		indicatorEndHeight = 18;
		indicatorEndY = -23;
		item.turn.height = 4;
		item.turn.y = resizeHeight + 2;
	}else{
		resizeHeight = 40;
		// item.textHP.style = {fontFamily : 'Arial', fontSize: 24, fill : 0xfefefe, align : 'center'};
		item.textHP.style.fontSize = 24;
		statusSpacing = 5;
		HPSpacing = 3;
		selectBarHeight = 7;
		indicatorBar1Y = -15;
		indicatorBar2Y = -20;
		indicatorEndHeight = 18;
		indicatorEndY = -23;
		item.turn.height = 5;
		item.turn.y = resizeHeight + 2;
	}
	
	item.outer.height = resizeHeight;
	item.inner.height = resizeHeight;

	item.critDmgBar.height = resizeHeight;
	// item.dmgBarContainer.dmgBar.height = resizeHeight;
	item.outer.width = resizeWidth;
	
	if(roster == 0){
		var switcher = 0;
// 		moveHeroContainerArray[index].y = app.screen.height * 1/2;
		if(heroArray[index].size > 1){
			item.outer.width = resizeWidth * 2 + healthSpacing;
			item.inner.width = (resizeWidth * 2 + healthSpacing) * (heroArray[index].statCalc[0]/heroArray[index].overallHP);
			item.critDmgBar.width = (resizeWidth * 2 + healthSpacing) * (heroArray[index].critDmg/heroArray[index].overallHP);
			item.critDmgBar.x = resizeWidth * 2 + healthSpacing;
			item.turn.width = resizeWidth * 2 + healthSpacing;
			
			item.select.indicatorBar1.width = resizeWidth * 2 + healthSpacing;
			item.select.indicatorBar2.width = resizeWidth * 2 + healthSpacing;			
			item.target.indicatorBar1.width = resizeWidth * 2 + healthSpacing;
			item.target.indicatorBar2.width = resizeWidth * 2 + healthSpacing;
			item.heal.indicatorBar1.width = resizeWidth * 2 + healthSpacing;
			item.heal.indicatorBar2.width = resizeWidth * 2 + healthSpacing;
			item.move.indicatorBar1.width = resizeWidth * 2 + healthSpacing;
			item.move.indicatorBar2.width = resizeWidth * 2 + healthSpacing;

			// item.dmgContainer.x = (resizeWidth * 2 + healthSpacing)/2;
			
// 			moveHeroContainerArray[index].right.x = resizeWidth * 2 + healthSpacing;
			
			switcher = 1;
			heroArray[index].statusSpriteArray.forEach((statusSprite, index) => {
				statusSprite.width = (resizeWidth - (statusSpacing * 5))/4;
				statusSprite.height = statusSprite.width;
				if(index < 8){
					statusSprite.x = statusSpacing + ((statusSpacing + statusSprite.width)*index);
					statusSprite.y = resizeHeight + statusSpacing*2;
				}else{
					statusSprite.x = statusSpacing + ((statusSpacing + statusSprite.width)*(index-8));
					statusSprite.y = resizeHeight + statusSpacing*3 + statusSprite.height;
				}
			});
		}else{
			item.inner.width = resizeWidth * (heroArray[index].statCalc[0]/heroArray[index].overallHP);
			item.critDmgBar.width = resizeWidth * (heroArray[index].critDmg/heroArray[index].overallHP);
			item.critDmgBar.x = resizeWidth;
			item.turn.width = resizeWidth;
			
			item.select.indicatorBar1.width = resizeWidth;
			item.select.indicatorBar2.width = resizeWidth;
			item.target.indicatorBar1.width = resizeWidth;
			item.target.indicatorBar2.width = resizeWidth;
			item.heal.indicatorBar1.width = resizeWidth;
			item.heal.indicatorBar2.width = resizeWidth;
			item.move.indicatorBar1.width = resizeWidth;
			item.move.indicatorBar2.width = resizeWidth;

			// item.dmgContainer.x = (resizeWidth)/2;

// 			moveHeroContainerArray[index].right.x = resizeWidth;
			
			heroArray[index].statusSpriteArray.forEach((statusSprite, index) => {
				statusSprite.width = (resizeWidth - (statusSpacing * 5))/4;
				statusSprite.height = statusSprite.width;
				if(index < 4){
					statusSprite.x = statusSpacing + ((statusSpacing + statusSprite.width)*index);
					statusSprite.y = resizeHeight + statusSpacing*2;
				}else if(index < 8){
					statusSprite.x = statusSpacing + ((statusSpacing + statusSprite.width)*(index-4));
					statusSprite.y = resizeHeight + statusSpacing*3 + statusSprite.height;
				}else{
					statusSprite.x = statusSpacing + ((statusSpacing + statusSprite.width)*(index-8));
					statusSprite.y = resizeHeight + statusSpacing*4 + statusSprite.height*2;
				}
			});
		}		
		switch(heroArray[index].pos) {
			case 1:
				item.x = (resizeWidth + healthSpacing) * (3 - switcher);
// 				moveHeroContainerArray[index].x = (resizeWidth + healthSpacing) * (3 - switcher);
				break;
			case 2:
				item.x = (resizeWidth + healthSpacing) * (2 - switcher);
// 				moveHeroContainerArray[index].x = (resizeWidth + healthSpacing) * (2 - switcher);
				break;
			case 3:
				if(heroArray[index].size == 1)	item.x = resizeWidth + healthSpacing * (1 - switcher)
				else 	item.x = 0
// 				moveHeroContainerArray[index].x = resizeWidth + healthSpacing * (1 - switcher);
				break;
			case 4:
				item.x = 0;
// 				moveHeroContainerArray[index].x = 0;
				break;
			default:
				item.x = 0;
				
		}
	}else{	
// 		moveEnemyContainerArray[index].y = app.screen.height * 1/2;
		if(enemyArray[index].size > 1){
			item.outer.width = resizeWidth * 2 + healthSpacing;
			item.inner.width = (resizeWidth * 2 + healthSpacing) * (enemyArray[index].statCalc[0]/enemyArray[index].overallHP);
			item.critDmgBar.width = (resizeWidth * 2 + healthSpacing) * (enemyArray[index].critDmg/enemyArray[index].overallHP);
			item.critDmgBar.x = resizeWidth * 2 + healthSpacing;
			item.turn.width = resizeWidth * 2 + healthSpacing;
			
			item.select.indicatorBar1.width = resizeWidth * 2 + healthSpacing;
			item.select.indicatorBar2.width = resizeWidth * 2 + healthSpacing;			
			item.target.indicatorBar1.width = resizeWidth * 2 + healthSpacing;
			item.target.indicatorBar2.width = resizeWidth * 2 + healthSpacing;
			item.heal.indicatorBar1.width = resizeWidth * 2 + healthSpacing;
			item.heal.indicatorBar2.width = resizeWidth * 2 + healthSpacing;
			item.move.indicatorBar1.width = resizeWidth * 2 + healthSpacing;
			item.move.indicatorBar2.width = resizeWidth * 2 + healthSpacing;

			// item.dmgContainer.x = (resizeWidth * 2 + healthSpacing)/2;
			
// 			moveEnemyContainerArray[index].right.x = resizeWidth * 2 + healthSpacing;
			
			enemyArray[index].statusSpriteArray.forEach((statusSprite, index) => {
				statusSprite.width = (resizeWidth - (statusSpacing * 5))/4;
				statusSprite.height = statusSprite.width;
				if(index < 8){
					statusSprite.x = statusSpacing + ((statusSpacing + statusSprite.width)*index);
					statusSprite.y = resizeHeight + statusSpacing*2;
				}else{
					statusSprite.x = statusSpacing + ((statusSpacing + statusSprite.width)*(index-8));
					statusSprite.y = resizeHeight + statusSpacing*3 + statusSprite.height;
				}
			});
		}else{
			item.inner.width = resizeWidth * (enemyArray[index].statCalc[0]/enemyArray[index].overallHP);
			item.critDmgBar.width = resizeWidth * (enemyArray[index].critDmg/enemyArray[index].overallHP);
			item.critDmgBar.x = resizeWidth;
			item.turn.width = resizeWidth;
			
			item.select.indicatorBar1.width = resizeWidth;
			item.select.indicatorBar2.width = resizeWidth;
			item.target.indicatorBar1.width = resizeWidth;
			item.target.indicatorBar2.width = resizeWidth;
			item.heal.indicatorBar1.width = resizeWidth;
			item.heal.indicatorBar2.width = resizeWidth;
			item.move.indicatorBar1.width = resizeWidth;
			item.move.indicatorBar2.width = resizeWidth;

			// item.dmgContainer.x = (resizeWidth)/2;
			
// 			moveEnemyContainerArray[index].right.x = resizeWidth;
			
			enemyArray[index].statusSpriteArray.forEach((statusSprite, index) => {
				statusSprite.width = (resizeWidth - (statusSpacing * 5))/4;
				statusSprite.height = statusSprite.width;
				if(index < 4){
					statusSprite.x = statusSpacing + ((statusSpacing + statusSprite.width)*index);
					statusSprite.y = resizeHeight + statusSpacing*2;
				}else if(index < 8){
					statusSprite.x = statusSpacing + ((statusSpacing + statusSprite.width)*(index-4));
					statusSprite.y = resizeHeight + statusSpacing*3 + statusSprite.height;
				}else{
					statusSprite.x = statusSpacing + ((statusSpacing + statusSprite.width)*(index-8));
					statusSprite.y = resizeHeight + statusSpacing*4 + statusSprite.height*2;
				}
			});
		}
		
		switch(enemyArray[index].pos) {
			case 1:
				item.x = 0;
// 				moveEnemyContainerArray[index].x = 0;
				break;
			case 2:
				item.x = resizeWidth + healthSpacing;
// 				moveEnemyContainerArray[index].x = resizeWidth + healthSpacing;
				break;
			case 3:				
				item.x = (resizeWidth + healthSpacing) * 2;
// 				moveEnemyContainerArray[index].x = (resizeWidth + healthSpacing) * 2;
				break;
			case 4:
				item.x = (resizeWidth + healthSpacing) * 3;
// 				moveEnemyContainerArray[index].x = (resizeWidth + healthSpacing) * 3;
				break;
			default:
				item.x = 0;
// 				moveEnemyContainerArray[index].x = 0;
				
		}

	}

	// item.dmgBarContainer.x = item.inner.width;

	// item.dmgContainer.y = app.screen.height/2;
	
	item.textHP.x = item.outer.width/2;
	item.textHP.y = item.outer.height/2;
	
	item.select.indicatorBar1.height = selectBarHeight;
	item.select.indicatorBar1.y = indicatorBar1Y;	
	item.select.indicatorBar2.y = indicatorBar2Y;	
	item.select.indicatorStart.height = indicatorEndHeight;
	item.select.indicatorStart.y = indicatorEndY;	
	item.select.indicatorEnd.height = indicatorEndHeight;	
	item.select.indicatorEnd.y = indicatorEndY;	
	item.select.indicatorEnd.x = item.outer.width - 4;	
	item.select.pivot.x = item.select.width/2;
	item.select.x = item.select.width/2;
	
	item.target.indicatorBar1.height = selectBarHeight;
	item.target.indicatorBar1.y = indicatorBar1Y;
	item.target.indicatorBar2.y = indicatorBar2Y;
	item.target.indicatorStart.height = indicatorEndHeight;
	item.target.indicatorStart.y = indicatorEndY;
	item.target.indicatorEnd.height = indicatorEndHeight;	
	item.target.indicatorEnd.y = indicatorEndY;	
	item.target.indicatorEnd.x = item.outer.width - 4;
	
	item.heal.indicatorBar1.height = selectBarHeight;
	item.heal.indicatorBar1.y = indicatorBar1Y;
	item.heal.indicatorBar2.y = indicatorBar2Y;
	item.heal.indicatorStart.height = indicatorEndHeight;
	item.heal.indicatorStart.y = indicatorEndY;
	item.heal.indicatorEnd.height = indicatorEndHeight;	
	item.heal.indicatorEnd.y = indicatorEndY;	
	item.heal.indicatorEnd.x = item.outer.width - 4;
	
	item.move.indicatorBar1.height = selectBarHeight;
	item.move.indicatorBar1.y = indicatorBar1Y;
	item.move.indicatorBar2.y = indicatorBar2Y;
	item.move.indicatorStart.height = indicatorEndHeight;
	item.move.indicatorStart.y = indicatorEndY;
	item.move.indicatorEnd.height = indicatorEndHeight;	
	item.move.indicatorEnd.y = indicatorEndY;	
	item.move.indicatorEnd.x = item.outer.width - 4;
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
		switch(heroArray[index].pos) {
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
		switch(enemyArray[index].pos) {
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

function onCreatureDown(){
	if(selectedSkill > -1){
		attackedVita = this.identifier[0] * (this.identifier[1]+1);				//direction * index+1
		console.log("Clicked target index: " + attackedVita);
		var correctTarget = false;
		var clickedTarget = 0;
		validSkillTargetArray.forEach((targeted, targetedIndex) => {
			if(Array.isArray(targeted)){
				targeted.forEach(arrayElement => {
					if(arrayElement == attackedVita){
						correctTarget = true;
						clickedTarget = targetedIndex;
					}	
				});
			}
			if(targeted == attackedVita){
				correctTarget = true;
				clickedTarget = targetedIndex;
			}
		});
		if(correctTarget){
			console.log(selectedVita + " uses " + skillsList.data.skills[selectedSkill].name + " on " + validSkillTargetArray[clickedTarget]);

			if(Array.isArray(validSkillTargetArray[clickedTarget])){
				validSkillTargetArray[clickedTarget].forEach(targeted => {
					var selectedIndex = Math.abs(selectedVita)-1;
					var targetedIndex = Math.abs(targeted)-1;
					var deltaHP = 0;
					var level = 0;
					var attack = 0;
					var defense = 0;
					var defendElements = [];
					var effectiveness = 1;

					//Get attack stat based on skill used
					if(selectedVita > 0){
						level = heroArray[selectedIndex].level;
						if(skillsList.data.skills[selectedSkill].type == "phy"){
							attack = heroArray[selectedIndex].statCalc[2];
							if(heroArray[selectedIndex].statMod[2] > 0){
								attack = attack * ((heroArray[selectedIndex].statMod[2]+2)/2);
							}else if(heroArray[selectedIndex].statMod[2] < 0){
								attack = attack * (2/(Math.abs(heroArray[selectedIndex].statMod[2])+2));
							}
						}else if(skillsList.data.skills[selectedSkill].type == "spe"){
							attack = heroArray[selectedIndex].statCalc[4];
							if(heroArray[selectedIndex].statMod[4] > 0){
								attack = attack * ((heroArray[selectedIndex].statMod[4]+2)/2);
							}else if(heroArray[selectedIndex].statMod[4] < 0){
								attack = attack * (2/(Math.abs(heroArray[selectedIndex].statMod[4])+2));
							}
						}
					}else{
						level = enemyArray[selectedIndex].level;
						if(skillsList.data.skills[selectedSkill].type == "phy"){
							attack = enemyArray[selectedIndex].statCalc[2];
							if(enemyArray[selectedIndex].statMod[2] > 0){
								attack = attack * ((enemyArray[selectedIndex].statMod[2]+2)/2);
							}else if(enemyArray[selectedIndex].statMod[2] < 0){
								attack = attack * (2/(Math.abs(enemyArray[selectedIndex].statMod[2])+2));
							}
						}else if(skillsList.data.skills[selectedSkill].type == "spe"){
							attack = enemyArray[selectedIndex].statCalc[4];
							if(enemyArray[selectedIndex].statMod[4] > 0){
								attack = attack * ((enemyArray[selectedIndex].statMod[4]+2)/2);
							}else if(enemyArray[selectedIndex].statMod[4] < 0){
								attack = attack * (2/(Math.abs(enemyArray[selectedIndex].statMod[4])+2));
							}
						}
					}

					//Get defense stat based on skill used					
					if(targeted > 0){
						if(skillsList.data.skills[selectedSkill].type == "phy"){
							defense = heroArray[targetedIndex].statCalc[3];
							if(heroArray[selectedIndex].statMod[3] > 0){
								defense = defense * ((heroArray[selectedIndex].statMod[3]+2)/2);
							}else if(heroArray[selectedIndex].statMod[3] < 0){
								defense = defense * (2/(Math.abs(heroArray[selectedIndex].statMod[3])+2));
							}
						}else if(skillsList.data.skills[selectedSkill].type == "spe"){
							defense = heroArray[targetedIndex].statCalc[5];
							if(heroArray[selectedIndex].statMod[5] > 0){
								defense = defense * ((heroArray[selectedIndex].statMod[5]+2)/2);
							}else if(heroArray[selectedIndex].statMod[5] < 0){
								defense = defense * (2/(Math.abs(heroArray[selectedIndex].statMod[5])+2));
							}
						}

						heroArray[targetedIndex].elements.forEach(element =>{
							defendElements.push(element);
						});
					}else{
						level = enemyArray[selectedIndex].level;
						if(skillsList.data.skills[selectedSkill].type == "phy"){
							defense = enemyArray[targetedIndex].statCalc[3];
							if(enemyArray[selectedIndex].statMod[3] > 0){
								defense = defense * ((enemyArray[selectedIndex].statMod[3]+2)/2);
							}else if(enemyArray[selectedIndex].statMod[3] < 0){
								defense = defense * (2/(Math.abs(enemyArray[selectedIndex].statMod[3])+2));
							}
						}else if(skillsList.data.skills[selectedSkill].type == "spe"){
							defense = enemyArray[targetedIndex].statCalc[5];
							if(enemyArray[selectedIndex].statMod[5] > 0){
								defense = defense * ((enemyArray[selectedIndex].statMod[5]+2)/2);
							}else if(enemyArray[selectedIndex].statMod[5] < 0){
								defense = defense * (2/(Math.abs(enemyArray[selectedIndex].statMod[5])+2));
							}
						}
						enemyArray[targetedIndex].elements.forEach(element =>{
							defendElements.push(element);
						});
					}

					//Get defenders elements to calculate effectiveness
					defendElements.forEach(defendElement=>{
						effectiveness = effectiveness * elementList.data.elements[skillsList.data.skills[selectedSkill].element-1][defendElement];
						// console.log("Skill element: " + elementList.data.elements[skillsList.data.skills[selectedSkill].element-1][defendElement]);
					});

					//Critical hit chance
					var criticalChance = Math.floor(Math.random() * 10000);
					var crit = 1;
					if(criticalChance > 5000){
						crit = 1.5;
					}

					
					// console.log("Level: " + level);
					// console.log("Attack: " + attack);
					// console.log("Defense: " + defense);
					// console.log("Power: " + skillsList.data.skills[selectedSkill].power);
					// console.log("Defender element: " + defendElements);
					// console.log("Effectiveness: " + effectiveness);

					//Calculate heal amount or damage amount
					if(attack == 0 && defense == 0){
						//calculate how much to heal
						deltaHP = 25;
						effectiveness = 1;
						crit = 1;
					}else{
						deltaHP = Math.round((((((2*level/5) + 2) * skillsList.data.skills[selectedSkill].power * (attack/defense))/150) + 2)*effectiveness*crit);
					}

					if(crit > 1){
						console.log("Critical damage: " + Math.floor(deltaHP/3));
					}
					// deltaHP = 25;

					console.log(targeted + " takes " + deltaHP + " damage");

					if(targeted > 0){
						if(attack == 0 && defense == 0){
							//add heal
							heroArray[targetedIndex].heal(deltaHP);
						}else{
							//subtract damage
							heroArray[targetedIndex].damage(deltaHP);
						}

						heroArrayDmg[targetedIndex].dmgPopup.dmgCrit.visible = false;
						heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.visible = true;
						heroArrayDmg[targetedIndex].dmgPopup.dmgNum.style.fill = '#D80000';
						heroArrayDmg[targetedIndex].dmgPopup.dmgNum.style.stroke = '#3B0000';						
						
						if(effectiveness == 0.25){
							heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "Resist  ×0.25";
							heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#9D9D9D';
						}else if(effectiveness == 0.5){
							heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "Resist  ×0.5";
							heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#FFFFFF';
						}else if(effectiveness == 2){
							heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "SUPER  ×2";
							heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#FFE81C';
						}else if(effectiveness == 4){
							heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "ULTRA  ×4";
							heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#DB00FF';
						}else{
							heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.visible = false;
						}
						
						if(crit > 1){
							heroArray[targetedIndex].criticalHit(Math.floor(deltaHP/3));

							var newCritWidth = -(heroHPContainerArray[targetedIndex].outer.width * (heroArray[targetedIndex].critDmg/heroArray[targetedIndex].overallHP));

							TweenMax.fromTo(heroHPContainerArray[targetedIndex].critDmgBar
								, 1, {
									width: heroHPContainerArray[targetedIndex].critDmgBar.width
								}, {delay:0.5, ease:Expo.easeIn, width:newCritWidth});

							heroArrayDmg[targetedIndex].dmgPopup.dmgCrit.visible = true;
							heroArrayDmg[targetedIndex].dmgPopup.dmgNum.style.fill = '#ff7b00';
							heroArrayDmg[targetedIndex].dmgPopup.dmgNum.style.stroke = '#4E2600';
						}

						if(attack == 0 && defense == 0){
							heroArrayDmg[targetedIndex].dmgPopup.dmgNum.style.fill = '#1bc617';
							heroArrayDmg[targetedIndex].dmgPopup.dmgNum.style.stroke = '#052805';

							var newWidth = (heroHPContainerArray[targetedIndex].outer.width * (heroArray[targetedIndex].statCalc[0]/heroArray[targetedIndex].overallHP)) - heroHPContainerArray[targetedIndex].inner.width;

							heroArrayDmg[targetedIndex].dmgBarContainer.x = heroHPContainerArray[targetedIndex].inner.width;
							heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = true;
							var tween = new TimelineMax({onComplete: function(){
								heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = false;	
								heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar.alpha = 0.9;
							}});
							tween.fromTo(heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar
								, 0.5, {width: 0}, {ease:Expo.easeIn, width:newWidth, onComplete:function(){
									heroHPContainerArray[targetedIndex].inner.width = heroHPContainerArray[targetedIndex].outer.width * (heroArray[targetedIndex].statCalc[0]/heroArray[targetedIndex].overallHP);
								}});
							tween.to(heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar
								, 1, {ease:Expo.easeIn, alpha:0});
						}else{
							var newWidth = heroHPContainerArray[targetedIndex].inner.width - (heroHPContainerArray[targetedIndex].outer.width * (heroArray[targetedIndex].statCalc[0]/heroArray[targetedIndex].overallHP));

							heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar.width = newWidth;
							heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = true;
							TweenMax.fromTo(heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar
								, 1, {
									width: newWidth
								}, {delay:0.5, ease:Expo.easeIn, width:0, onComplete: function(){
								heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = false;
							}});

							heroArrayDmg[targetedIndex].dmgBarContainer.x = heroHPContainerArray[targetedIndex].outer.width * (heroArray[targetedIndex].statCalc[0]/heroArray[targetedIndex].overallHP);
							heroHPContainerArray[targetedIndex].inner.width = heroHPContainerArray[targetedIndex].outer.width * (heroArray[targetedIndex].statCalc[0]/heroArray[targetedIndex].overallHP);	
						}
						
						heroHPContainerArray[targetedIndex].textHP.text = heroArray[targetedIndex].statCalc[0] + " / " + heroArray[targetedIndex].EHP;

						heroArrayDmg[targetedIndex].dmgPopup.dmgNum.text = deltaHP;
						heroArrayDmg[targetedIndex].dmgPopup.tween.play(0);
					}else{
						if(attack == 0 && defense == 0){
							//add heal
							enemyArray[targetedIndex].heal(deltaHP);
						}else{
							//subtract damage
							enemyArray[targetedIndex].damage(deltaHP);
						}

						enemyArrayDmg[targetedIndex].dmgPopup.dmgCrit.visible = false;
						enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.visible = true;					
						enemyArrayDmg[targetedIndex].dmgPopup.dmgNum.style.fill = '#D80000';
						enemyArrayDmg[targetedIndex].dmgPopup.dmgNum.style.stroke = '#3B0000';

						if(effectiveness == 0.25){
							enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "Resist  ×0.25";
							enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#9D9D9D';
						}else if(effectiveness == 0.5){
							enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "Resist  ×0.5";
							enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#FFFFFF';
						}else if(effectiveness == 2){
							enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "SUPER  ×2";
							enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#FFE81C';
						}else if(effectiveness == 4){
							enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "ULTRA  ×4";
							enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#DB00FF';
						}else{
							enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.visible = false;
						}

						if(crit > 1){
							enemyArray[targetedIndex].criticalHit(Math.floor(deltaHP/3));

							var newCritWidth = -(enemyHPContainerArray[targetedIndex].outer.width * (enemyArray[targetedIndex].critDmg/enemyArray[targetedIndex].overallHP));

							TweenMax.fromTo(enemyHPContainerArray[targetedIndex].critDmgBar
								, 1, {
									width: enemyHPContainerArray[targetedIndex].critDmgBar.width
								}, {delay:0.5, ease:Expo.easeIn, width:newCritWidth});

							enemyArrayDmg[targetedIndex].dmgPopup.dmgCrit.visible = true;
							enemyArrayDmg[targetedIndex].dmgPopup.dmgNum.style.fill = '#ff7b00';
							enemyArrayDmg[targetedIndex].dmgPopup.dmgNum.style.stroke = '#4E2600';
						}

						if(attack == 0 && defense == 0){
							enemyArrayDmg[targetedIndex].dmgPopup.dmgNum.style.fill = '#1bc617';
							enemyArrayDmg[targetedIndex].dmgPopup.dmgNum.style.stroke = '#052805';

							var newWidth = (enemyHPContainerArray[targetedIndex].outer.width * (enemyArray[targetedIndex].statCalc[0]/enemyArray[targetedIndex].overallHP)) - enemyHPContainerArray[targetedIndex].inner.width;

							enemyArrayDmg[targetedIndex].dmgBarContainer.x = enemyHPContainerArray[targetedIndex].inner.width;
							enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = true;
							var tween = new TimelineMax({onComplete: function(){
								enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = false;
								enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar.alpha = 0.9;
							}});
							tween.fromTo(enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar
								, 0.5, {width: 0}, {ease:Expo.easeIn, width:newWidth, onComplete:function(){
									enemyHPContainerArray[targetedIndex].inner.width = enemyHPContainerArray[targetedIndex].outer.width * (enemyArray[targetedIndex].statCalc[0]/enemyArray[targetedIndex].overallHP);
								}});
							tween.to(enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar
								, 1, {ease:Expo.easeIn, alpha:0});
						}else{
							var newWidth = enemyHPContainerArray[targetedIndex].inner.width - (enemyHPContainerArray[targetedIndex].outer.width * (enemyArray[targetedIndex].statCalc[0]/enemyArray[targetedIndex].overallHP));

							enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar.width = newWidth;
							enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = true;
							TweenMax.fromTo(enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar
								, 1, {
									width: newWidth
								}, {delay:0.5, ease:Expo.easeIn, width:0, onComplete: function(){
								enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = false;
							}});

							enemyArrayDmg[targetedIndex].dmgBarContainer.x = enemyHPContainerArray[targetedIndex].outer.width * (enemyArray[targetedIndex].statCalc[0]/enemyArray[targetedIndex].overallHP);
							enemyHPContainerArray[targetedIndex].inner.width = enemyHPContainerArray[targetedIndex].outer.width * (enemyArray[targetedIndex].statCalc[0]/enemyArray[targetedIndex].overallHP);					
						}	

						enemyHPContainerArray[targetedIndex].textHP.text = enemyArray[targetedIndex].statCalc[0] + " / " + enemyArray[targetedIndex].EHP;

						enemyArrayDmg[targetedIndex].dmgPopup.dmgNum.text = deltaHP;
						enemyArrayDmg[targetedIndex].dmgPopup.tween.play(0);
					}
				});
			}else{
				// console.log(validSkillTargetArray[clickedTarget] + " takes ## deltaHP");
				var targeted = validSkillTargetArray[clickedTarget];
				var selectedIndex = Math.abs(selectedVita)-1;
				var targetedIndex = Math.abs(targeted)-1;
				var deltaHP = 0;
				var level = 0;
				var attack = 0;
				var defense = 0;
				var defendElements = [];
				var effectiveness = 1;
				if(selectedVita > 0){
					level = heroArray[selectedIndex].level;
					if(skillsList.data.skills[selectedSkill].type == "phy"){
						attack = heroArray[selectedIndex].statCalc[2];
						if(heroArray[selectedIndex].statMod[2] > 0){
							attack = attack * ((heroArray[selectedIndex].statMod[2]+2)/2);
						}else if(heroArray[selectedIndex].statMod[2] < 0){
							attack = attack * (2/(Math.abs(heroArray[selectedIndex].statMod[2])+2));
						}
					}else if(skillsList.data.skills[selectedSkill].type == "spe"){
						attack = heroArray[selectedIndex].statCalc[4];
						if(heroArray[selectedIndex].statMod[4] > 0){
							attack = attack * ((heroArray[selectedIndex].statMod[4]+2)/2);
						}else if(heroArray[selectedIndex].statMod[4] < 0){
							attack = attack * (2/(Math.abs(heroArray[selectedIndex].statMod[4])+2));
						}
					}
				}else{
					level = enemyArray[selectedIndex].level;
					if(skillsList.data.skills[selectedSkill].type == "phy"){
						attack = enemyArray[selectedIndex].statCalc[2];
						if(enemyArray[selectedIndex].statMod[2] > 0){
							attack = attack * ((enemyArray[selectedIndex].statMod[2]+2)/2);
						}else if(enemyArray[selectedIndex].statMod[2] < 0){
							attack = attack * (2/(Math.abs(enemyArray[selectedIndex].statMod[2])+2));
						}
					}else if(skillsList.data.skills[selectedSkill].type == "spe"){
						attack = enemyArray[selectedIndex].statCalc[4];
						if(enemyArray[selectedIndex].statMod[4] > 0){
							attack = attack * ((enemyArray[selectedIndex].statMod[4]+2)/2);
						}else if(enemyArray[selectedIndex].statMod[4] < 0){
							attack = attack * (2/(Math.abs(enemyArray[selectedIndex].statMod[4])+2));
						}
					}
				}
				
				if(targeted > 0){
					if(skillsList.data.skills[selectedSkill].type == "phy"){
						defense = heroArray[targetedIndex].statCalc[3];
						if(heroArray[selectedIndex].statMod[3] > 0){
							defense = defense * ((heroArray[selectedIndex].statMod[3]+2)/2);
						}else if(heroArray[selectedIndex].statMod[3] < 0){
							defense = defense * (2/(Math.abs(heroArray[selectedIndex].statMod[3])+2));
						}
					}else if(skillsList.data.skills[selectedSkill].type == "spe"){
						defense = heroArray[targetedIndex].statCalc[5];
						if(heroArray[selectedIndex].statMod[5] > 0){
							defense = defense * ((heroArray[selectedIndex].statMod[5]+2)/2);
						}else if(heroArray[selectedIndex].statMod[5] < 0){
							defense = defense * (2/(Math.abs(heroArray[selectedIndex].statMod[5])+2));
						}
					}

					heroArray[targetedIndex].elements.forEach(element =>{
						defendElements.push(element);
					});
				}else{
					level = enemyArray[selectedIndex].level;
					if(skillsList.data.skills[selectedSkill].type == "phy"){
						defense = enemyArray[targetedIndex].statCalc[3];
						if(enemyArray[selectedIndex].statMod[3] > 0){
							defense = defense * ((enemyArray[selectedIndex].statMod[3]+2)/2);
						}else if(enemyArray[selectedIndex].statMod[3] < 0){
							defense = defense * (2/(Math.abs(enemyArray[selectedIndex].statMod[3])+2));
						}
					}else if(skillsList.data.skills[selectedSkill].type == "spe"){
						defense = enemyArray[targetedIndex].statCalc[5];
						if(enemyArray[selectedIndex].statMod[5] > 0){
							defense = defense * ((enemyArray[selectedIndex].statMod[5]+2)/2);
						}else if(enemyArray[selectedIndex].statMod[5] < 0){
							defense = defense * (2/(Math.abs(enemyArray[selectedIndex].statMod[5])+2));
						}
					}
					enemyArray[targetedIndex].elements.forEach(element =>{
						defendElements.push(element);
					});
				}
				defendElements.forEach(defendElement=>{
					effectiveness = effectiveness * elementList.data.elements[skillsList.data.skills[selectedSkill].element-1][defendElement];
					// console.log("Skill element: " + elementList.data.elements[skillsList.data.skills[selectedSkill].element-1][defendElement]);
				});

				var criticalChance = Math.floor(Math.random() * 10000);
				var crit = 1;
				if(criticalChance > 5000){
					crit = 1.5;
				}

				// console.log("Level: " + level);
				// console.log("Attack: " + attack);
				// console.log("Defense: " + defense);
				// console.log("Power: " + skillsList.data.skills[selectedSkill].power);
				// console.log("Defender element: " + defendElements);
				// console.log("Effectiveness: " + effectiveness);
				
				deltaHP = Math.round((((((2*level/5) + 2) * skillsList.data.skills[selectedSkill].power * (attack/defense))/150) + 2)*effectiveness*crit);

				if(crit > 1){
					console.log("Critical damage: " + Math.floor(deltaHP/3));
				}
				// deltaHP = 25;

				console.log(targeted + " takes " + deltaHP + " damage");

				if(targeted > 0){
					if(attack == 0 && defense == 0){
						//add heal
						heroArray[targetedIndex].heal(deltaHP);
					}else{
						//subtract damage
						heroArray[targetedIndex].damage(deltaHP);
					}

					heroArrayDmg[targetedIndex].dmgPopup.dmgCrit.visible = false;
					heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.visible = true;
					heroArrayDmg[targetedIndex].dmgPopup.dmgNum.style.fill = '#D80000';
					heroArrayDmg[targetedIndex].dmgPopup.dmgNum.style.stroke = '#3B0000';

					heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.visible = true;
					if(effectiveness == 0.25){
						heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "Resist  ×0.25";
						heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#9D9D9D';
					}else if(effectiveness == 0.5){
						heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "Resist  ×0.5";
						heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#FFFFFF';
					}else if(effectiveness == 2){
						heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "SUPER  ×2";
						heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#FFE81C';
					}else if(effectiveness == 4){
						heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "ULTRA  ×4";
						heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#DB00FF';
					}else{
						heroArrayDmg[targetedIndex].dmgPopup.dmgEffective.visible = false;
					}

					heroArrayDmg[targetedIndex].dmgPopup.dmgCrit.visible = false;
					if(crit > 1){
						heroArray[targetedIndex].criticalHit(Math.floor(deltaHP/3));

						var newCritWidth = -(heroHPContainerArray[targetedIndex].outer.width * (heroArray[targetedIndex].critDmg/heroArray[targetedIndex].overallHP));

						TweenMax.fromTo(heroHPContainerArray[targetedIndex].critDmgBar
							, 1, {
								width: heroHPContainerArray[targetedIndex].critDmgBar.width
							}, {delay:0.5, ease:Expo.easeIn, width:newCritWidth});

						heroArrayDmg[targetedIndex].dmgPopup.dmgCrit.visible = true;
						heroArrayDmg[targetedIndex].dmgPopup.dmgNum.style.fill = '#ff7b00';
						heroArrayDmg[targetedIndex].dmgPopup.dmgNum.style.stroke = '#4E2600';
					}
					if(attack == 0 && defense == 0){
						heroArrayDmg[targetedIndex].dmgPopup.dmgNum.style.fill = '#1bc617';
						heroArrayDmg[targetedIndex].dmgPopup.dmgNum.style.stroke = '#052805';

						var newWidth = (heroHPContainerArray[targetedIndex].outer.width * (heroArray[targetedIndex].statCalc[0]/heroArray[targetedIndex].overallHP)) - heroHPContainerArray[targetedIndex].inner.width;

						heroArrayDmg[targetedIndex].dmgBarContainer.x = heroHPContainerArray[targetedIndex].inner.width;
						heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = true;
						var tween = new TimelineMax({onComplete: function(){
							heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = false;	
							heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar.alpha = 0.9;
						}});
						tween.fromTo(heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar
							, 0.5, {width: 0}, {ease:Expo.easeIn, width:newWidth, onComplete:function(){
								heroHPContainerArray[targetedIndex].inner.width = heroHPContainerArray[targetedIndex].outer.width * (heroArray[targetedIndex].statCalc[0]/heroArray[targetedIndex].overallHP);
							}});
						tween.to(heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar
							, 1, {ease:Expo.easeIn, alpha:0});
					}else{
						var newWidth = heroHPContainerArray[targetedIndex].inner.width - (heroHPContainerArray[targetedIndex].outer.width * (heroArray[targetedIndex].statCalc[0]/heroArray[targetedIndex].overallHP));

						heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar.width = newWidth;
						heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = true;
						TweenMax.fromTo(heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar
							, 1, {
								width: newWidth
							}, {delay:0.5, ease:Expo.easeIn, width:0, onComplete: function(){
							heroArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = false;
						}});

						heroArrayDmg[targetedIndex].dmgBarContainer.x = heroHPContainerArray[targetedIndex].outer.width * (heroArray[targetedIndex].statCalc[0]/heroArray[targetedIndex].overallHP);
						heroHPContainerArray[targetedIndex].inner.width = heroHPContainerArray[targetedIndex].outer.width * (heroArray[targetedIndex].statCalc[0]/heroArray[targetedIndex].overallHP);	
					}
					heroHPContainerArray[targetedIndex].textHP.text = heroArray[targetedIndex].statCalc[0] + " / " + heroArray[targetedIndex].EHP;
					
					heroArrayDmg[targetedIndex].dmgPopup.dmgNum.text = deltaHP;
					heroArrayDmg[targetedIndex].dmgPopup.tween.play(0);
				}else{
					if(attack == 0 && defense == 0){
						//add heal
						enemyArray[targetedIndex].heal(deltaHP);
					}else{
						//subtract damage
						enemyArray[targetedIndex].damage(deltaHP);
					}

					enemyArrayDmg[targetedIndex].dmgPopup.dmgCrit.visible = false;
					enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.visible = true;
					enemyArrayDmg[targetedIndex].dmgPopup.dmgNum.style.fill = '#D80000';
					enemyArrayDmg[targetedIndex].dmgPopup.dmgNum.style.stroke = '#3B0000';

					if(effectiveness == 0.25){
						enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "Resist  ×0.25";
						enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#9D9D9D';
					}else if(effectiveness == 0.5){
						enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "Resist  ×0.5";
						enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#FFFFFF';
					}else if(effectiveness == 2){
						enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "SUPER  ×2";
						enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#FFE81C';
					}else if(effectiveness == 4){
						enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.text = "ULTRA  ×4";
						enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.style.fill = '#DB00FF';
					}else{
						enemyArrayDmg[targetedIndex].dmgPopup.dmgEffective.visible = false;
					}

					if(crit > 1){
						enemyArray[targetedIndex].criticalHit(Math.floor(deltaHP/3));

						var newCritWidth = -(enemyHPContainerArray[targetedIndex].outer.width * (enemyArray[targetedIndex].critDmg/enemyArray[targetedIndex].overallHP));

						TweenMax.fromTo(enemyHPContainerArray[targetedIndex].critDmgBar
							, 1, {
								width: enemyHPContainerArray[targetedIndex].critDmgBar.width
							}, {delay:0.5, ease:Expo.easeIn, width:newCritWidth});

						enemyArrayDmg[targetedIndex].dmgPopup.dmgCrit.visible = true;
						enemyArrayDmg[targetedIndex].dmgPopup.dmgNum.style.fill = '#ff7b00';
						enemyArrayDmg[targetedIndex].dmgPopup.dmgNum.style.stroke = '#4E2600';
					}

					if(attack == 0 && defense == 0){
						enemyArrayDmg[targetedIndex].dmgPopup.dmgNum.style.fill = '#1bc617';
						enemyArrayDmg[targetedIndex].dmgPopup.dmgNum.style.stroke = '#052805';

						var newWidth = (enemyHPContainerArray[targetedIndex].outer.width * (enemyArray[targetedIndex].statCalc[0]/enemyArray[targetedIndex].overallHP)) - enemyHPContainerArray[targetedIndex].inner.width;

						enemyArrayDmg[targetedIndex].dmgBarContainer.x = enemyHPContainerArray[targetedIndex].inner.width;
						enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = true;
						var tween = new TimelineMax({onComplete: function(){
							enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = false;
							enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar.alpha = 0.9;
						}});
						tween.fromTo(enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar
							, 0.5, {width: 0}, {ease:Expo.easeIn, width:newWidth, onComplete:function(){
								enemyHPContainerArray[targetedIndex].inner.width = enemyHPContainerArray[targetedIndex].outer.width * (enemyArray[targetedIndex].statCalc[0]/enemyArray[targetedIndex].overallHP);
							}});
						tween.to(enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar
							, 1, {ease:Expo.easeIn, alpha:0});
					}else{
						var newWidth = enemyHPContainerArray[targetedIndex].inner.width - (enemyHPContainerArray[targetedIndex].outer.width * (enemyArray[targetedIndex].statCalc[0]/enemyArray[targetedIndex].overallHP));

						enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar.width = newWidth;
						enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = true;
						TweenMax.fromTo(enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar
							, 1, {
								width: newWidth
							}, {delay:0.5, ease:Expo.easeIn, width:0, onComplete: function(){
							enemyArrayDmg[targetedIndex].dmgBarContainer.dmgBar.visible = false;
						}});

						enemyArrayDmg[targetedIndex].dmgBarContainer.x = enemyHPContainerArray[targetedIndex].outer.width * (enemyArray[targetedIndex].statCalc[0]/enemyArray[targetedIndex].overallHP);
						enemyHPContainerArray[targetedIndex].inner.width = enemyHPContainerArray[targetedIndex].outer.width * (enemyArray[targetedIndex].statCalc[0]/enemyArray[targetedIndex].overallHP);
					}
					enemyHPContainerArray[targetedIndex].textHP.text = enemyArray[targetedIndex].statCalc[0] + " / " + enemyArray[targetedIndex].EHP;

					enemyArrayDmg[targetedIndex].dmgPopup.dmgNum.text = deltaHP;
					enemyArrayDmg[targetedIndex].dmgPopup.tween.play(0);
				}
			}

			var identifier = [];
			if(turnArray[0] > 0){
				identifier[0] = 1;
				identifier[1] = Math.abs(turnArray[0])-1;
				// console.log(heroContainerArray[Math.abs(turnArray[0]-1)].identifier);
			}else{
				identifier[0] = -1;
				identifier[1] = Math.abs(turnArray[0])-1;
				// console.log(enemyContainerArray[Math.abs(turnArray[0]-1)].identifier);
			}
			// console.log(identifier);

			//If out of turns, and still have enemies, and still have heroes
			if(turnArray.length != 0){
				selectCreature(identifier);
			}else{
				calculateTurnOrder();
			}
			turnArray.shift();
			selectedSkill = -1;
		}else{
			console.log("Invalid target");
		}
	}
}


function onHPDown(){
	console.log("HP:" + this.identifier[0] * (this.identifier[1]+1));
	
	// heroHPContainerArray.forEach(hpContainer=>{
	// 	hpContainer.turn.visible = false;
	// });
	// enemyHPContainerArray.forEach(hpContainer=>{
	// 	hpContainer.turn.visible = false;
	// });
	
	// if(this.identifier[0] < 0){
	// 	enemyHPContainerArray[this.identifier[1]].turn.visible = true;
	// }else{
	// 	heroHPContainerArray[this.identifier[1]].turn.visible = true;
	// }
// 	heroHPContainerArray[this.identifier[1]].selected = visible;
}

function onSkillDown(){
	enemyHPContainerArray.forEach(hpContainer=>{
		hpContainer.target.visible = false;
		hpContainer.heal.visible = false;
		hpContainer.move.visible = false;
	});
	heroHPContainerArray.forEach(hpContainer=>{
		hpContainer.target.visible = false;
		hpContainer.heal.visible = false;
		hpContainer.move.visible = false;
	});
	skillContainerArray.forEach(skillContainer=>{
		skillContainer.selected.visible = false;
	});
	skillContainerArray[this.identifier[0]].selected.visible = true;
	selectedSkill = this.identifier[1];
	console.log("Skill: " + skillsList.data.skills[this.identifier[1]].name);
	var column = false;
	var several = false;
	var heal = false;
	skillsList.data.skills[this.identifier[1]].tags.forEach(tagName =>{
		if(tagName == "column"){
			//Column tag breakdown = [Number of targets, Decay, Direction, Heal/Damage]

			column = true;
			// if(this.identifier[2] > 0){
			// 	console.log("column => from: " + heroArray[this.identifier[3]].name + " to: " + skillsList.data.skills[this.identifier[1]][tagName][0]);
			// }else{
			// 	console.log("column => from: " + enemyArray[this.identifier[3]].name + " to: " + skillsList.data.skills[this.identifier[1]][tagName][0]);
			// }
			
			if(skillsList.data.skills[this.identifier[1]].column[3] > 0){
				heal = true;
			}else{
				heal = false;	
			}
		}
		if(tagName == "several"){
			several = true;
		}
	});
	
	validMoveTargetArray = [];
	validSkillTargetArray = [];
	var stageSide = 0;
	if(column){
		var columnArray = [];
		//Ahead
		if(skillsList.data.skills[this.identifier[1]].column[2] > 0){
			var switchSide = false;
			//Get position to increment from
			if(this.identifier[2] > 0){
				var temp = heroArray[this.identifier[3]].pos;
			}else{
				var temp = enemyArray[this.identifier[3]].pos;
			}			
			for(var i = 0; i < skillsList.data.skills[this.identifier[1]].column[0]; i++){
				if(temp > 1 && !switchSide){
					temp--;
				}else if(temp == 1 && !switchSide){
					switchSide = true;
				}else{
					temp++;
				}
				
				if(this.identifier[2] > 0){
					if(temp > 0 && !switchSide){
						heroArray.forEach((arrayCreature,arrayCreatureIndex) => {
							if(arrayCreature.pos == temp){
								// console.log(arrayCreature.name);
								if(heal){
									heroHPContainerArray[arrayCreatureIndex].heal.visible = true;
								}else{
									heroHPContainerArray[arrayCreatureIndex].target.visible = true;
								}
								stageSide = 1;
							}else{stageSide = 0;}
							if(stageSide != 0)	columnArray.push((arrayCreatureIndex+1)*stageSide);
						});
					}else{
						enemyArray.forEach((arrayCreature,arrayCreatureIndex) => {
							if(arrayCreature.pos == temp){
								// console.log(arrayCreature.name);
								if(heal){
									enemyHPContainerArray[arrayCreatureIndex].heal.visible = true;
								}else{
									enemyHPContainerArray[arrayCreatureIndex].target.visible = true;
								}
								stageSide = -1;
							}else{stageSide = 0;}
							if(stageSide != 0)	columnArray.push((arrayCreatureIndex+1)*stageSide);
						});
					}
				}else{
					if(temp > 0 && !switchSide){
						enemyArray.forEach((arrayCreature,arrayCreatureIndex) => {
							if(arrayCreature.pos == temp){
								// console.log(arrayCreature.name);
								if(heal){
									enemyHPContainerArray[arrayCreatureIndex].heal.visible = true;
								}else{
									enemyHPContainerArray[arrayCreatureIndex].target.visible = true;
								}
								stageSide = -1;
							}else{stageSide = 0;}
							if(stageSide != 0)	columnArray.push((arrayCreatureIndex+1)*stageSide);
						});
					}else{
						heroArray.forEach((arrayCreature,arrayCreatureIndex) => {
							if(arrayCreature.pos == temp){
								// console.log(arrayCreature.name);
								if(heal){
									heroHPContainerArray[arrayCreatureIndex].heal.visible = true;
								}else{
									heroHPContainerArray[arrayCreatureIndex].target.visible = true;
								}
								stageSide = 1;
							}else{stageSide = 0;}
							if(stageSide != 0)	columnArray.push((arrayCreatureIndex+1)*stageSide);
						});
					}
				}
			}
		}
		//Behind
		else{
			//Get position to increment from
			if(this.identifier[2] > 0){
				if(heroArray[this.identifier[3]].size == 2){
					var temp = heroArray[this.identifier[3]].pos+1;
				}else{
					var temp = heroArray[this.identifier[3]].pos;
				}				
			}else{
				if(enemyArray[this.identifier[3]].size == 2){
					var temp = enemyArray[this.identifier[3]].pos+1;
				}else{
					var temp = enemyArray[this.identifier[3]].pos;
				}				
			}			
			for(var i = 0; i < skillsList.data.skills[this.identifier[1]].column[0]; i++){
				temp++;
				if(this.identifier[2] > 0){
					heroArray.forEach((arrayCreature,arrayCreatureIndex) => {
						if(arrayCreature.pos == temp){
							// console.log(arrayCreature.name);
							if(heal){
								heroHPContainerArray[arrayCreatureIndex].heal.visible = true;
							}else{
								heroHPContainerArray[arrayCreatureIndex].target.visible = true;
							}
							stageSide = 1;
						}else{stageSide = 0;}
						if(stageSide != 0)	columnArray.push((arrayCreatureIndex+1)*stageSide);
					});
				}else{
					enemyArray.forEach((arrayCreature,arrayCreatureIndex) => {
						if(arrayCreature.pos == temp){
							// console.log(arrayCreature.name);
							if(heal){
								enemyHPContainerArray[arrayCreatureIndex].heal.visible = true;
							}else{
								enemyHPContainerArray[arrayCreatureIndex].target.visible = true;
							}
							stageSide = -1;
						}else{stageSide = 0;}
						if(stageSide != 0)	columnArray.push((arrayCreatureIndex+1)*stageSide);
					});
				}
			}			
		}
		validSkillTargetArray.push(columnArray);
	}

	//for each target in the skill
	skillsList.data.skills[this.identifier[1]].target.forEach((skillTarget, skillTargetIndex)=> {
		//if the position is a valid target
		if(skillTarget == 1){
			var posTracker = skillTargetIndex + 1;
			//if targeting enemies or heroes
			if(this.identifier[2] > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(posTracker == arrayCreature.pos){
							// console.log(arrayCreature.name);
							enemyHPContainerArray[arrayCreatureIndex].target.visible = true;						
							stageSide = -1;
						}else{stageSide = 0;}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(posTracker == pos1 || posTracker == pos2){
							// console.log(arrayCreature.name);
							enemyHPContainerArray[arrayCreatureIndex].target.visible = true;
							stageSide = -1;
						}else{stageSide = 0;}
					}
					if(stageSide != 0){
						var alreadyAdded = false;
						validSkillTargetArray.forEach(targeted => {
							if(targeted == arrayCreature.pos*stageSide)	alreadyAdded = true
						});
						if(!alreadyAdded)	validSkillTargetArray.push((arrayCreatureIndex+1)*stageSide)
						// validSkillTargetArray.push(arrayCreature.pos*stageSide);
					}					
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(posTracker == arrayCreature.pos){
							// console.log(arrayCreature.name);
							heroHPContainerArray[arrayCreatureIndex].target.visible = true;
							stageSide = 1;
						}else{stageSide = 0;}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(posTracker == pos1 || posTracker == pos2){
							// console.log(arrayCreature.name);
							heroHPContainerArray[arrayCreatureIndex].target.visible = true;
							stageSide = 1;
						}else{stageSide = 0;}
					}
					if(stageSide != 0){
						var alreadyAdded = false;
						validSkillTargetArray.forEach(targeted => {
							if(targeted == arrayCreature.pos*stageSide)	alreadyAdded = true
						});
						if(!alreadyAdded)	validSkillTargetArray.push((arrayCreatureIndex+1)*stageSide)
						// validSkillTargetArray.push(arrayCreature.pos*stageSide);
					}			
				});
			}
		}
	});

	// console.log(validSkillTargetArray);
	//validSkillTargetArray [1, 2, 4] = [[1,2],[2,4]]
	//several [1, 0, 1]
	//[001]
	//[010]
	//[011]
	//[100]
	//[101]
	//[110]
	//[111]
	if(several){
		var array1 = [];
		var joinedSeveral = skillsList.data.skills[this.identifier[1]].several.join();
		if(joinedSeveral == "0,0,1"){
			if(selectedVita > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4)	array1.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)	array1.push((arrayCreatureIndex+1)*-1)
					}
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4)	array1.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)	array1.push((arrayCreatureIndex+1))
					}
				});
			}
			validSkillTargetArray = [];
			validSkillTargetArray = [array1];
		}else if(joinedSeveral == "0,1,0"){
			if(selectedVita > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3)	array1.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3)	array1.push((arrayCreatureIndex+1)*-1)
					}
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3)	array1.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3)	array1.push((arrayCreatureIndex+1))
					}
				});
			}
			validSkillTargetArray = [];
			validSkillTargetArray = [array1];
		}else if(joinedSeveral == "1,0,0"){
			if(selectedVita > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2)	array1.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2)	array1.push((arrayCreatureIndex+1)*-1)
					}
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2)	array1.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2)	array1.push((arrayCreatureIndex+1))
					}
				});
			}
			validSkillTargetArray = [];
			validSkillTargetArray = [array1];
		}else if(joinedSeveral == "1,1,0"){
			if(selectedVita > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3)		array1.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3)		array1.push((arrayCreatureIndex+1)*-1)
					}
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3)		array1.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3)		array1.push((arrayCreatureIndex+1))
					}
				});
			}
			validSkillTargetArray = [];
			validSkillTargetArray = [array1];
		}else if(joinedSeveral == "0,1,1"){
			if(selectedVita > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4)		array1.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)		array1.push((arrayCreatureIndex+1)*-1)
					}
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4)		array1.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)		array1.push((arrayCreatureIndex+1))
					}
				});
			}
			validSkillTargetArray = [];
			validSkillTargetArray = [array1];
		}else if(joinedSeveral == "1,1,1"){
			if(selectedVita > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4)		array1.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)		array1.push((arrayCreatureIndex+1)*-1)
					}
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4)		array1.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)		array1.push((arrayCreatureIndex+1))
					}
				});
			}
			validSkillTargetArray = [];
			validSkillTargetArray = [array1];
		}else if(joinedSeveral == "1,0,1"){
			var array2 = [];
			if(selectedVita > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2)	array1.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2)	array1.push((arrayCreatureIndex+1)*-1)
					}
				});
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4)	array2.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)	array2.push((arrayCreatureIndex+1)*-1)
					}
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2)	array1.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2)	array1.push((arrayCreatureIndex+1))
					}
				});
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4)	array2.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)	array2.push((arrayCreatureIndex+1))
					}
				});
			}
			// validSkillTargetArray = [];
			validSkillTargetArray = [array1, array2];
		}
	}
	console.log("Targets: " + validSkillTargetArray);
}

function onAdditionalDown(){
// 	skillContainerArray[0].targetText.style.fill = '0x66cc66';
	console.log("Additional");
	additionalContainer.visible = true;
	// tween.invalidate();
	// tween.play(0);
}

function onAdditionalCancelDown(){
	console.log("Additional Cancel");
	additionalContainer.visible = false;
}

function onAdditionalMoveDown(){
	console.log("Additional Move " + selectedVita);
	validMoveTargetArray = [];
	validSkillTargetArray = [];
	additionalContainer.visible = false;
	enemyHPContainerArray.forEach(hpContainer=>{
		hpContainer.target.visible = false;
		hpContainer.heal.visible = false;
	});
	heroHPContainerArray.forEach(hpContainer=>{
		hpContainer.target.visible = false;
		hpContainer.heal.visible = false;
	});
	skillContainerArray.forEach(skillContainer=>{
		skillContainer.selected.visible = false;
	});

	if(selectedVita > 0){
		var temp = heroArray[Math.abs(selectedVita)-1].pos;

		var sizeDelta = 1;
		if(heroArray[Math.abs(selectedVita)-1].size == 2){
			sizeDelta = 2;
		}

		heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
			if(arrayCreature.pos == temp+sizeDelta){
				heroHPContainerArray[arrayCreatureIndex].move.visible = true;
				validMoveTargetArray.push(arrayCreatureIndex+1);
			}else if(arrayCreature.pos == temp-1){
				heroHPContainerArray[arrayCreatureIndex].move.visible = true;
				validMoveTargetArray.push(arrayCreatureIndex+1);
			}
			if(arrayCreature.size == 2){
				if(arrayCreature.pos == temp-2){
					heroHPContainerArray[arrayCreatureIndex].move.visible = true;
					validMoveTargetArray.push(arrayCreatureIndex+1);
				}
			}
		});
	}else{
		var temp = enemyArray[Math.abs(selectedVita)-1].pos;

		var sizeDelta = 1;
		if(enemyArray[Math.abs(selectedVita)-1].size == 2){
			sizeDelta = 2;
		}

		enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
			if(arrayCreature.pos == temp+sizeDelta){
				enemyHPContainerArray[arrayCreatureIndex].move.visible = true;
				validMoveTargetArray.push((arrayCreatureIndex+1)*-1);
			}else if(arrayCreature.pos == temp-1){
				enemyHPContainerArray[arrayCreatureIndex].move.visible = true;
				validMoveTargetArray.push((arrayCreatureIndex+1)*-1);
			}
			if(arrayCreature.size == 2){
				if(arrayCreature.pos == temp-2){
					enemyHPContainerArray[arrayCreatureIndex].move.visible = true;
					validMoveTargetArray.push((arrayCreatureIndex+1)*-1);
				}
			}
		});
	}

	console.log(validMoveTargetArray);
}

function onAdditionalItemDown(){
	console.log("Additional Item");
	onScreenStats.visible = true;
	consoleScreen.visible = true;
}

function onAdditionalSkipDown(){
	console.log("Additional Skip");
	// onScreenStats.visible = false;
	// consoleScreen.visible = false;

	//Hero Creature
	// switch(heroArray[index].pos) {
	// 	case 1:
	// 		item.x = 0;
	// 		break;
	// 	case 2:
	// 		item.x = -(resizeWidth + healthSpacing);
	// 		break;
	// 	case 3:				
	// 		item.x = -((resizeWidth + healthSpacing) * 2);
	// 		break;
	// 	case 4:
	// 		item.x = -((resizeWidth + healthSpacing) * 3);
	// 		break;
	// 	default:
	// 		item.x = 0;	
	// }

	//Hero HP and dmg containers
	// switch(heroArray[index].pos) {
	// 	case 1:
	// 		item.x = (resizeWidth + healthSpacing) * (3 - switcher);
	// 		break;
	// 	case 2:
	// 		item.x = (resizeWidth + healthSpacing) * (2 - switcher);
	// 		break;
	// 	case 3:
	// 		if(heroArray[index].size == 1)	item.x = resizeWidth + healthSpacing * (1 - switcher)
	// 		else 	item.x = 0
	// 		break;
	// 	case 4:
	// 		item.x = 0;
	// 		break;
	// 	default:
	// 		item.x = 0;	
	// }

	var resizeWidth = (app.screen.width- (4*margin) - 6*(healthSpacing))/8;

	var newX = -((resizeWidth + healthSpacing) * 3);
	var newX2 = 0;
	var newX3 = -((resizeWidth + healthSpacing) * 2);

	var hpX = 0;
	var hpX2 = (resizeWidth + healthSpacing) * (3 - 1);
	var hpX3 = resizeWidth + healthSpacing * 1;

	TweenMax.to(heroContainerArray[0], 0.5, {x: newX});
	TweenMax.to(heroContainerArray[1], 0.5, {x: newX2});
	TweenMax.to(heroContainerArray[2], 0.5, {x: newX3});
	TweenMax.to(heroHPContainerArray[0], 0.5, {x: hpX});
	TweenMax.to(heroHPContainerArray[1], 0.5, {x: hpX2});
	TweenMax.to(heroHPContainerArray[2], 0.5, {x: hpX3});
	TweenMax.to(heroArrayDmg[0], 0.5, {x: hpX});
	TweenMax.to(heroArrayDmg[1], 0.5, {x: hpX2});
	TweenMax.to(heroArrayDmg[2], 0.5, {x: hpX3});

	heroArray[0].pos = 4;
	heroArray[1].pos = 1;
	heroArray[2].pos = 3;
}

function calculateTurnOrder(){
	enemyHPContainerArray.forEach(hpContainer=>{
		hpContainer.turn.visible = true;
	});
	heroHPContainerArray.forEach(hpContainer=>{
		hpContainer.turn.visible = true;
	});

	var arrayCalcSpeedSorted = [];
	var arrayCalcSpeedPositions = [];

	turnArray = [];	

	heroArray.forEach((arrayCreature,arrayCreatureIndex) => {
		var calcSpeed;
		if(arrayCreature.statMod[6]>0){
			calcSpeed = (arrayCreature.speed/5) * ((Math.abs(arrayCreature.statMod[6])+2)/2) + (Math.floor(Math.random() * 7) + 1);
		}else{
			calcSpeed = (arrayCreature.speed/5) * (2/(Math.abs(arrayCreature.statMod[6])+2)) + (Math.floor(Math.random() * 7) + 1);
		}
		console.log(arrayCreatureIndex + " Pre-Speed: " + arrayCreature.speed + "| CalcSpeed: " + calcSpeed);
		arrayCalcSpeedSorted.push(calcSpeed);
		arrayCalcSpeedPositions.push(calcSpeed);
	});
	enemyArray.forEach((arrayCreature,arrayCreatureIndex) => {
		var calcSpeed;
		if(arrayCreature.statMod[6]>0){
			calcSpeed = (arrayCreature.speed/5) * ((Math.abs(arrayCreature.statMod[6])+2)/2) + (Math.floor(Math.random() * 7) + 1);
		}else{
			calcSpeed = (arrayCreature.speed/5) * (2/(Math.abs(arrayCreature.statMod[6])+2)) + (Math.floor(Math.random() * 7) + 1);
		}
		console.log(arrayCreatureIndex + " Pre-Speed: " + arrayCreature.speed + "| CalcSpeed: " + calcSpeed);
		arrayCalcSpeedSorted.push(calcSpeed);
		arrayCalcSpeedPositions.push(calcSpeed);
	});

	// console.log(arrayCalcSpeedSorted);
	
	arrayCalcSpeedSorted.sort(function(a, b){return b - a});
	// console.log("1: " + arrayCalcSpeedSorted);
	// console.log("2: " + arrayCalcSpeedPositions);

	arrayCalcSpeedSorted.forEach((speedNum,index) => {
		arrayCalcSpeedPositions.forEach((speedNum2,index2) => {
			if(speedNum == speedNum2){
				if(index2 < heroArray.length){
					var tempVar = index2+1;
					var index = turnArray.findIndex(x => x==tempVar);
					if (index === -1){
						turnArray.push(tempVar);
					}else console.log("object already exists")
				}else{
					var tempVar = -(index2+1-heroArray.length);
					var index = turnArray.findIndex(x => x==tempVar);
					if (index === -1){
						turnArray.push(tempVar);
					}else console.log("object already exists")
				}
			}
		});
	});

	// console.log(turnArray);
	var identifier = [];
	if(turnArray[0] > 0){
		identifier[0] = 1;
		identifier[1] = Math.abs(turnArray[0])-1;
		// console.log(heroContainerArray[Math.abs(turnArray[0]-1)].identifier);
	}else{
		identifier[0] = -1;
		identifier[1] = Math.abs(turnArray[0])-1;
		// console.log(enemyContainerArray[Math.abs(turnArray[0]-1)].identifier);
	}
	// console.log(identifier);
	selectCreature(identifier);
	turnArray.shift();
}

function selectCreature(identifier){	
	// console.log("Creature speed:" + heroArray[identifier[1]].statMod[6]);
	if(identifier[0] > 0){
		heroHPContainerArray[identifier[1]].turn.visible = false;
	}else{
		enemyHPContainerArray[identifier[1]].turn.visible = false;
	}
	selectedVita = identifier[0] * (identifier[1]+1);
	console.log("///////////////////////////////////////////////");
	console.log("Turn: " + selectedVita);
	//Reset the skillContainers
	skillContainerArray.forEach(skillContainer=>{
		skillContainer.selected.visible = false;
		skillContainer.disable.visible = true;
		skillContainer.buttonMode = false;
		skillContainer.interactive = false;
		skillContainer.markerTargetSeveralContainer.visible = false;
	});
	enemyHPContainerArray.forEach(hpContainer=>{
		hpContainer.select.visible = false;
		hpContainer.target.visible = false;
		hpContainer.heal.visible = false;
		hpContainer.move.visible = false;
		hpContainer.select.animate = false;
	});
	heroHPContainerArray.forEach(hpContainer=>{
		hpContainer.select.visible = false;
		hpContainer.target.visible = false;
		hpContainer.heal.visible = false;
		hpContainer.move.visible = false;
		hpContainer.select.animate = false;
	});

	var newSkills = [];
	var currPos = [];
	if(identifier[0] < 0){		
		enemyHPContainerArray[identifier[1]].select.visible = true;
		enemyHPContainerArray[identifier[1]].select.animate = true;
// 		moveEnemyContainerArray[identifier[1]].visible = true;
		enemyArray[identifier[1]].skills.forEach(skillID => {
			newSkills.push(skillID);
		});
		if(enemyArray[identifier[1]].size == 1){
			currPos.push(enemyArray[identifier[1]].pos);
		}else if(enemyArray[identifier[1]].size == 2){
			currPos.push(enemyArray[identifier[1]].pos);
			currPos.push(enemyArray[identifier[1]].pos+1);
		}
	}else{
		heroHPContainerArray[identifier[1]].select.visible = true;
		heroHPContainerArray[identifier[1]].select.animate = true;
// 		moveHeroContainerArray[identifier[1]].visible = true;
		heroArray[identifier[1]].skills.forEach(skillID => {
			newSkills.push(skillID);
		});
		if(heroArray[identifier[1]].size == 1){
			currPos.push(heroArray[identifier[1]].pos);
		}else if(heroArray[identifier[1]].size == 2){
			currPos.push(heroArray[identifier[1]].pos);
			currPos.push(heroArray[identifier[1]].pos+1);
		}
	}
	
	// console.log(identifier);
	
	newSkills.forEach((skillID, skillContainerIndex) => {
		switch(skillsList.data.skills[skillID].element){
			case 1:
				skillContainerArray[skillContainerIndex].skillElement.texture = resources.element_flora.texture;
				break;
			case 2:
				skillContainerArray[skillContainerIndex].skillElement.texture = resources.element_water.texture;
				break;
			case 3:
				skillContainerArray[skillContainerIndex].skillElement.texture = resources.element_fire.texture;
				break;
			case 4:
				skillContainerArray[skillContainerIndex].skillElement.texture = resources.element_earth.texture;
				break;
			case 5:
				skillContainerArray[skillContainerIndex].skillElement.texture = resources.element_lightning.texture;
				break;
			case 6:
				skillContainerArray[skillContainerIndex].skillElement.texture = resources.element_wind.texture;
				break;
			case 7:
				skillContainerArray[skillContainerIndex].skillElement.texture = resources.element_toxic.texture;
				break;
			case 8:
				skillContainerArray[skillContainerIndex].skillElement.texture = resources.element_spirit.texture;
				break;
			case 9:
				skillContainerArray[skillContainerIndex].skillElement.texture = resources.element_shadow.texture;
				break;
			default:
				skillContainerArray[skillContainerIndex].skillElement.texture = resources.element_fire.texture;
				break;
		}
		
		//identifier = [skillContainerIndex, skillID, stageSide, creaturePos]
		skillContainerArray[skillContainerIndex].identifier = [skillContainerIndex, skillID, identifier[0], identifier[1]];
		skillContainerArray[skillContainerIndex].skillName.text = skillsList.data.skills[skillID].name;		
		skillsList.data.skills[skillID].position.forEach((skillPos, skillPosIndex) => {
			if(skillPos == 1){				
				currPos.forEach(posNum => {
					var posTracker = Math.abs(skillPosIndex - 4);			
					if(posNum == posTracker){
						skillContainerArray[skillContainerIndex].disable.visible = false;
						skillContainerArray[skillContainerIndex].buttonMode = true;
						skillContainerArray[skillContainerIndex].interactive = true;
					}
				});
				skillContainerArray[skillContainerIndex].markerPositionArray[skillPosIndex].visible = true;
			}else{
				skillContainerArray[skillContainerIndex].markerPositionArray[skillPosIndex].visible = false;
			}
		});
		
		// console.log(skillContainerIndex + ": " + skillsList.data.skills[skillID].tags);
		var column = false;
		skillsList.data.skills[skillID].tags.forEach(tagName =>{
			if(tagName == "column"){
				column = true;
				if(skillsList.data.skills[skillID][tagName][2] > 0){
					skillContainerArray[skillContainerIndex].targetText.text = skillsList.data.skills[skillID][tagName][0] + " ►";
				}else{
					skillContainerArray[skillContainerIndex].targetText.text = "◄ " + skillsList.data.skills[skillID][tagName][0];
				}
				
				if(skillsList.data.skills[skillID][tagName][3] > 0){					
					skillContainerArray[skillContainerIndex].targetText.style.fill = '0x66cc66';
				}else{
					skillContainerArray[skillContainerIndex].targetText.style.fill = '0xFF6961';
				}
			}else if(tagName == "several"){
				skillContainerArray[skillContainerIndex].markerTargetSeveralContainer.visible = true;
				//Show target dashes if 1
				skillsList.data.skills[skillID][tagName].forEach((dash, dashIndex) => {
					if(dash == 1){
						skillContainerArray[skillContainerIndex].markerTargetSeveralArray[dashIndex].visible = true;
					}else{
						skillContainerArray[skillContainerIndex].markerTargetSeveralArray[dashIndex].visible = false;
					}
				});
			}
			// console.log(skillsList.data.skills[skillID][tagName]);
		});
		
		if(column){
			skillContainerArray[skillContainerIndex].markerTargetContainer.visible = false;
			skillContainerArray[skillContainerIndex].targetText.visible = true;
		}else{
			skillContainerArray[skillContainerIndex].markerTargetContainer.visible = true;
			skillContainerArray[skillContainerIndex].targetText.visible = false;
			skillsList.data.skills[skillID].target.forEach((skillTarget, targetIndex) => {
				if(skillTarget == 1){
					skillContainerArray[skillContainerIndex].markerTargetArray[targetIndex].visible = true;
				}else{
					skillContainerArray[skillContainerIndex].markerTargetArray[targetIndex].visible = false;
				}
			});
		}
	});	
}