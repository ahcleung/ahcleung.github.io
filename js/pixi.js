/*======================================================================================
*
*FileName:        pixi.js
*Project:         Project Elements
*Version:         1.02
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
		{name:'status_vital', url:'img/status_vital.png'},
		
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
		
		this.vital = Math.floor(Math.random() * 25) + 10;
		
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
		this.statusArray = [
			// [Math.floor(Math.random() * 14) + 1, 1],
			// [Math.floor(Math.random() * 14) + 1, 3, 5],
			// [Math.floor(Math.random() * 14) + 1, 2],
			// [Math.floor(Math.random() * 14) + 1, 2],
			// [Math.floor(Math.random() * 14) + 1, 2],
			// [Math.floor(Math.random() * 14) + 1, 2],
			// [Math.floor(Math.random() * 14) + 1, 2],
			// [Math.floor(Math.random() * 14) + 1, 2],
			// [Math.floor(Math.random() * 14) + 1, 2],
			// [Math.floor(Math.random() * 14) + 1, 2],
			// [Math.floor(Math.random() * 14) + 1, 2],
		];
		this.statusSpriteArray = [];
	}
	
	heal(){
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

const rosterHero = new PIXI.Container();
const rosterEnemy = new PIXI.Container();
const hpHero = new PIXI.Container();
const hpEnemy = new PIXI.Container();
const additionalContainer = new PIXI.Container();

const dmgHero = new PIXI.Container();
const dmgEnemy = new PIXI.Container();

let dmgNum2;
const tempContainer = new PIXI.Container();
var tween;

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

var tween;

// var db = firebase.firestore();

const factory = dragonBones.PixiFactory.factory;

const arrayHero = [];			//Array of hero vitas
const arrayEnemy = [];			//Array of enemy vitas
const additionalArray = [];			//Array of additional menu buttons
const arrayHeroDmg = [];
const arrayEnemyDmg = [];
var turnArray = [];
var validPositionTargetArray = [];

const heroContainerArray = [];			//Array of hero sprite containers
const enemyContainerArray = [];			//Array of enemy sprite containers
const hpHeroContainerArray = [];		//Array of hero HP containers
const hpEnemyContainerArray = [];		//Array of enemy HP containers
const skillContainerArray = [];			//Array of skill containers

const hero = [];
hero[0] = {
	id: 11, level: 50, 
	skill1: 4, skill2: 1, skill3: 2, skill4: 1,
	statDODG: 20, statHP: 35, statPATK: 10, statPDEF: 50, statSATK: 0, statSDEF: 0, statSPD: 40
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

// const framesIdleFlygon = [];

function setup(){	
	textureAdditional = PIXI.Texture.from('img/additional.png');
	textureSettings = PIXI.Texture.from('img/leper.ability.five.png');
	textureAdditionalCancel = PIXI.Texture.from('img/additional_cancel.png');
	textureAdditionalMove = PIXI.Texture.from('img/ability_move.png');
	textureAdditionalItem = PIXI.Texture.from('img/additional_item.png');
	textureAdditionalSkip = PIXI.Texture.from('img/additional_skip.png');
// 	textureShift = PIXI.Texture.from('img/ui_move.png');
	
	consolePrint("SETUP");
	// PIXI.settings.ROUND_PIXELS = true;
	rectTemp.beginFill(0xccffcc).drawRect(-50, -50, 100, 100);
	rectTemp.alpha = 0.1;
	// Add it to the stage

// 	rectHero.beginFill(0xaec6cf).drawRect(0, 0, -200, 100);
// 	rectHero.x = 0;
// 	rectHero.y = 0;
// 	hpHero.addChild(rectHero);
	
// 	rectEnemy.beginFill(0xff6961).drawRect(0, 0, 200, 100);
// 	rectEnemy.x = 0;
// 	rectEnemy.y = 0;
// 	hpEnemy.addChild(rectEnemy);
	
	// const dmgContainer = new PIXI.Container();

// 	const style = new PIXI.TextStyle({
//         fontFamily: 'Arvo',
//         fontSize: 50,
//         // fontStyle: 'italic',
//         fontWeight: 700,
// //         fill: ['#ff0000', '#D80000'], // gradient
// 		fill: '#D80000',	
// 		stroke: '#ff0000',
//    		strokeThickness: 3,
//     });

// 	dmgNum2 = new Text("50", style);
// 	dmgNum2.anchor.set(0.5, 0.5);

// 	// tween = gsap.timeline({paused: true});
// 	// tween.to(dmgNum2, { duration: 0.1, ease:"expo.in", alpha: 1});
// 	// tween.to(dmgNum2.scale, { duration: 0.5, ease:"expo.in", x: 2, y: 2});
// 	// tween.to(dmgNum2, { duration: 1.25, ease:"expo.inOut", y: -300, alpha: 0})
// 	// tween.to(dmgNum2.scale, { duration: 1.25, ease:"expo.inOut", x: 1, y: 1}, 0.1);

// 	// dmgNum2.alpha = 0;

// 	tween = new TimelineMax({paused: true, onComplete: function(){
// 		this.visible = false;
// 	}});
// 	tween.to(dmgNum2, 0.5, {ease:Expo.easeIn, alpha: 1});
// 	tween.to(dmgNum2.scale, 0.5, {ease:Expo.easeIn, x: 2, y: 2},0);
// 	tween.to(dmgNum2, 1.25, {ease:Expo.easeInOut, y: -300, alpha: 0})
// 	tween.to(dmgNum2.scale, 1.25, {ease:Expo.easeInOut, x: 1, y: 1},0.5);


// 	dmgNum2.tween = tween;

// 	tempContainer.addChild(dmgNum2);
// 	tempContainer.dmgNum = dmgNum2;

// 	app.stage.addChild(tempContainer);


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
// 				], skills:[
// 					doc.data().skill1, 
// 					doc.data().skill2, 
// 					doc.data().skill3, 
// 					doc.data().skill4
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
		arrayHero.push(newCreature);
	});

	arrayHero.forEach(setPos);
	arrayHero.forEach(function (item, index){
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
		arrayEnemy.push(newCreature);
	});

	arrayEnemy.forEach(setPos);
	arrayEnemy.forEach(function (item, index){
		createSprite(-1, item, index)	
	});

	for(var i = 0; i < 4; i++){
// 		console.log(arrayHero[1].skills[i]);
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
		
		//
		skillContainer.identifier = [i , arrayHero[1].skills[i], 1];
		
		let skillName = new Text(skillsList.data.skills[arrayHero[1].skills[i]].name, {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe});
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
		
		const markerHeroArray = [];
		const markerHeroContainer = new PIXI.Container();
		
		var w = 12.728;
		
		for (var j = 0; j < 4; j++){
			let defaultMarker = new PIXI.Graphics();
			defaultMarker.beginFill(0x636363).drawRect(0, -w, w, w);
			
			let posMarker = new PIXI.Graphics();			
			posMarker.beginFill(0x66cc66).drawRect(0, -w, w, w);
			
			if(skillsList.data.skills[arrayHero[1].skills[i]].position[j] == 0){
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
			if(skillsList.data.skills[arrayHero[1].skills[i]].target[j] == 0){
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
		skillContainer.markerTargetEnemySeveralContainer = markerTargetEnemySeveralContainer;
		
		skillContainer.markerTargetEnemySeveralArray = markerTargetEnemySeveralArray;		
		skillContainer.markerTargetEnemySeveralContainer.visible = false;
		
		skillContainer.addChild(markerContainer);
// 		skillContainer.posMarkerArray = posMarkerArray;
		skillContainer.markerContainer = markerContainer;
		
		skillContainer.markerHeroArray = markerHeroArray;
		skillContainer.markerHeroContainer = markerHeroContainer;
		
		skillContainer.markerTargetEnemyArray = markerTargetEnemyArray;
		skillContainer.markerTargetEnemyContainer = markerTargetEnemyContainer;
		
		skillContainer.markerTargetHeroArray = markerTargetHeroArray;
		skillContainer.markerTargetHeroContainer = markerTargetHeroContainer;
		skillContainer.markerTargetHeroContainer.visible = false;
		
		let targetText = new Text("1►", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xFF6961});
		targetText.anchor.set(0, 0.5);
		skillContainer.addChild(targetText);
		skillContainer.targetText = targetText;
		skillContainer.targetText.visible = false;
// 		targetText.x = 123;
		
		var skillElement;
		switch(skillsList.data.skills[arrayHero[1].skills[i]].element){
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
	btnSettings = new PIXI.Sprite(textureSettings);
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
	
	btnAdditional = new PIXI.Sprite(textureAdditional);
	btnAdditional.anchor.set(0,1);
	btnAdditional.buttonMode = true;
    	btnAdditional.interactive = true;
	btnAdditional
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalDown);
	
	btnAdditionalCancel = new PIXI.Sprite(textureAdditionalCancel);
	btnAdditionalCancel.anchor.set(0,1);
	btnAdditionalCancel.buttonMode = true;
    	btnAdditionalCancel.interactive = true;
	btnAdditionalCancel
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalCancelDown);	
	additionalContainer.addChild(btnAdditionalCancel);
	additionalArray.push(btnAdditionalCancel);
	
	btnAdditionalItem = new PIXI.Sprite(textureAdditionalItem);
	btnAdditionalItem.anchor.set(0,1);
	btnAdditionalItem.buttonMode = true;
    	btnAdditionalItem.interactive = true;
	btnAdditionalItem
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalItemDown);
	additionalContainer.addChild(btnAdditionalItem);
	additionalArray.push(btnAdditionalItem);
	
	btnAdditionalMove = new PIXI.Sprite(textureAdditionalMove);
	btnAdditionalMove.anchor.set(0,1);
	btnAdditionalMove.buttonMode = true;
    	btnAdditionalMove.interactive = true;
	btnAdditionalMove
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalMoveDown);
	additionalContainer.addChild(btnAdditionalMove);
	additionalArray.push(btnAdditionalMove);
	
	btnAdditionalSkip = new PIXI.Sprite(textureAdditionalSkip);
	btnAdditionalSkip.anchor.set(0,1);
	btnAdditionalSkip.buttonMode = true;
    	btnAdditionalSkip.interactive = true;
	btnAdditionalSkip
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalSkipDown);
	additionalContainer.addChild(btnAdditionalSkip);
	additionalArray.push(btnAdditionalSkip);
	
	
	app.stage.addChild(btnSettings);	
	app.stage.addChild(btnAdditional);	
	
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
	app.stage.addChild(dmgHero);
	app.stage.addChild(dmgEnemy);
	
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
	hpHeroContainerArray.forEach(hpContainer => {
		if(hpContainer.select.animate == true){
			hpContainer.select.width = hpContainer.select.indicatorBar1.width + (Math.cos(phase) + 1) * 10 + 1;
// 			hpContainer.select.scale.x = (Math.cos(phase) + 1) * 0.03 + 1;
		}
	});
	hpEnemyContainerArray.forEach(hpContainer => {
		if(hpContainer.select.animate == true){
			hpContainer.select.width = hpContainer.select.indicatorBar1.width + (Math.cos(phase) + 1) * 10 + 1;
// 			hpContainer.select.scale.x = (Math.cos(phase) + 1) * 0.03 + 1;
		}
	});
// 	hpHeroContainerArray[0].select.scale.x = (Math.cos(phase) + 1) * 0.04 + 1;

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
	console.log("ID: " + item.id + " |Size: " + item.size + " |Code: " + item.code + " |Position: " + item.pos + " |HP: " + item.statCalc[0] + "/" + item.EHP + "|Vital: " + item.vital);
			
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
		stroke: '#3B0000',
   		strokeThickness: 5,
    });

	let dmgNum = new Text("50", style);
	dmgNum.anchor.set(0.5, 0.5);
	// dmgNum.x = 100;
	// dmgNum.y = 500;

	let dmgCrit = new Text ("CRIT!", style2);
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
	// dmgBar.visible = false;

	dmgBarContainer.addChild(dmgBar);
	dmgBarContainer.dmgBar = dmgBar;

	dmgContainer.addChild(dmgBarContainer);
	dmgContainer.dmgBarContainer = dmgBarContainer;



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
	vitalBar.endFill();
	healthBar.addChild(vitalBar);
	healthBar.vital = vitalBar;
	
	let turnIndicator = new PIXI.Graphics();
	turnIndicator.beginFill(0xffa500);
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
				statusEffect = new PIXI.Sprite(resources.status_vital.texture);
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
		hpHeroContainerArray.push(healthBar);
		arrayHeroDmg.push(dmgContainer);
// 		moveHeroContainerArray.push(moveContainer);
		
		rosterHero.addChild(creatureContainer);
		hpHero.addChild(healthBar);
		dmgHero.addChild(dmgContainer);
// 		hpHero.addChild(moveContainer);
	}else{
		enemyContainerArray.push(creatureContainer);
		hpEnemyContainerArray.push(healthBar);
		arrayEnemyDmg.push(dmgContainer);
// 		moveEnemyContainerArray.push(moveContainer);
		
		rosterEnemy.addChild(creatureContainer);
		hpEnemy.addChild(healthBar);

		dmgEnemy.addChild(dmgContainer);
// 		hpEnemy.addChild(moveContainer);
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
	tempContainer.position.set(app.screen.width/2, app.screen.height/2);
	
	var skillSelectPadding = 5;
	
	if(app.screen.width < 860){
		margin = 10;
		healthSpacing = 10;
		skillSpacer = 5;
		skillSelectPadding = 2;
		hpHero.position.set(margin, 20);
		hpEnemy.position.set(app.screen.width/2+margin, 20);
		dmgHero.position.set(margin, 20);
		dmgEnemy.position.set(app.screen.width/2+margin, 20);
		targetTextFontSize = 12;
		skillNameFontSize = 14;
	}else if(app.screen.width < 1366){
		margin = 15;
		healthSpacing = 10;
		skillSpacer = 8;
		skillSelectPadding = 3;
		hpHero.position.set(margin, 40);
		hpEnemy.position.set(app.screen.width/2+margin, 40);
		dmgHero.position.set(margin, 40);
		dmgEnemy.position.set(app.screen.width/2+margin, 40);
		targetTextFontSize = 16;
		skillNameFontSize = 18;
	}else{
		margin = 50;
		healthSpacing = 20;
		skillSpacer = 10;
		skillSelectPadding = 5;
		hpHero.position.set(margin, 40);
		hpEnemy.position.set(app.screen.width/2+margin, 40);
		dmgHero.position.set(margin, 40);
		dmgEnemy.position.set(app.screen.width/2+margin, 40);
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

	arrayHeroDmg.forEach(function (item, index){
		resizeDmg(0, item, index)
	});

	arrayEnemyDmg.forEach(function (item, index){
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

	if(roster == 0){
		var switcher = 0;
// 		moveHeroContainerArray[index].y = app.screen.height * 1/2;
		if(arrayHero[index].size > 1){
			item.dmgPopup.x = (resizeWidth * 2 + healthSpacing)/2;
			item.dmgBarContainer.x = (resizeWidth * 2 + healthSpacing) * (arrayHero[index].statCalc[0]/arrayHero[index].overallHP);
			switcher = 1;
		}else{
			item.dmgPopup.x = resizeWidth/2;
			item.dmgBarContainer.x = resizeWidth * (arrayHero[index].statCalc[0]/arrayHero[index].overallHP);
		}
		switch(arrayHero[index].pos) {
			case 1:
				item.x = (resizeWidth + healthSpacing) * (3 - switcher);
				break;
			case 2:
				item.x = (resizeWidth + healthSpacing) * (2 - switcher);
				break;
			case 3:
				if(arrayHero[index].size == 1)	item.x = resizeWidth + healthSpacing * (1 - switcher)
				else 	item.x = 0
				break;
			case 4:
				item.x = 0;
				break;
			default:
				item.x = 0;
		}
	}else{
		if(arrayEnemy[index].size > 1){
			item.dmgPopup.x = (resizeWidth * 2 + healthSpacing)/2;
			item.dmgBarContainer.x = (resizeWidth * 2 + healthSpacing) * (arrayEnemy[index].statCalc[0]/arrayEnemy[index].overallHP);
		}else{
			item.dmgPopup.x = resizeWidth/2;
			item.dmgBarContainer.x = resizeWidth * (arrayEnemy[index].statCalc[0]/arrayEnemy[index].overallHP);
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

	// item.dmgBarContainer.x = item.inner.width;
	item.dmgPopup.y = app.screen.height/2;
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
	item.vital.height = resizeHeight;
	// item.dmgBarContainer.dmgBar.height = resizeHeight;
	item.outer.width = resizeWidth;
	
	if(roster == 0){
		var switcher = 0;
// 		moveHeroContainerArray[index].y = app.screen.height * 1/2;
		if(arrayHero[index].size > 1){
			item.outer.width = resizeWidth * 2 + healthSpacing;
			item.inner.width = (resizeWidth * 2 + healthSpacing) * (arrayHero[index].statCalc[0]/arrayHero[index].overallHP);
			item.vital.width = (resizeWidth * 2 + healthSpacing) * (arrayHero[index].vital/arrayHero[index].overallHP);
			item.vital.x = resizeWidth * 2 + healthSpacing;
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
			arrayHero[index].statusSpriteArray.forEach((statusSprite, index) => {
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
			item.inner.width = resizeWidth * (arrayHero[index].statCalc[0]/arrayHero[index].overallHP);
			item.vital.width = resizeWidth * (arrayHero[index].vital/arrayHero[index].overallHP);
			item.vital.x = resizeWidth;
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
			
			arrayHero[index].statusSpriteArray.forEach((statusSprite, index) => {
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
		switch(arrayHero[index].pos) {
			case 1:
				item.x = (resizeWidth + healthSpacing) * (3 - switcher);
// 				moveHeroContainerArray[index].x = (resizeWidth + healthSpacing) * (3 - switcher);
				break;
			case 2:
				item.x = (resizeWidth + healthSpacing) * (2 - switcher);
// 				moveHeroContainerArray[index].x = (resizeWidth + healthSpacing) * (2 - switcher);
				break;
			case 3:
				if(arrayHero[index].size == 1)	item.x = resizeWidth + healthSpacing * (1 - switcher)
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
		if(arrayEnemy[index].size > 1){
			item.outer.width = resizeWidth * 2 + healthSpacing;
			item.inner.width = (resizeWidth * 2 + healthSpacing) * (arrayEnemy[index].statCalc[0]/arrayEnemy[index].overallHP);
			item.vital.width = (resizeWidth * 2 + healthSpacing) * (arrayEnemy[index].vital/arrayEnemy[index].overallHP);
			item.vital.x = resizeWidth * 2 + healthSpacing;
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
			
			arrayEnemy[index].statusSpriteArray.forEach((statusSprite, index) => {
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
			item.inner.width = resizeWidth * (arrayEnemy[index].statCalc[0]/arrayEnemy[index].overallHP);
			item.vital.width = resizeWidth * (arrayEnemy[index].vital/arrayEnemy[index].overallHP);
			item.vital.x = resizeWidth;
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
			
			arrayEnemy[index].statusSpriteArray.forEach((statusSprite, index) => {
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
		
		switch(arrayEnemy[index].pos) {
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
		attackedVita = this.identifier[0] * (this.identifier[1]+1);
		console.log("Clicked target index: " + attackedVita);
		var correctTarget = false;
		var clickedTarget = 0;
		validPositionTargetArray.forEach((targeted, targetedIndex) => {
			// console.log("Checking targeted");
			if(Array.isArray(targeted)){
				// console.log("Is Array");
				targeted.forEach(arrayElement => {
					// console.log("Each array element");
					if(arrayElement == attackedVita){
						correctTarget = true;
						// console.log("Target index: " + targetedIndex);
						clickedTarget = targetedIndex;
					}	
				});
			}
			if(targeted == attackedVita){
				correctTarget = true;
				clickedTarget = targetedIndex;
				// console.log("Target index: " + targetedIndex);
			}
		});
		if(correctTarget){
			console.log(selectedVita + " uses " + skillsList.data.skills[selectedSkill].name + " on " + validPositionTargetArray[clickedTarget]);

			if(Array.isArray(validPositionTargetArray[clickedTarget])){
				validPositionTargetArray[clickedTarget].forEach(targeted => {
					var selectedIndex = Math.abs(selectedVita)-1;
					var targetedIndex = Math.abs(targeted)-1;
					var damage = 0;
					var level = 0;
					var attack = 0;
					var defense = 0;
					var defendElements = [];
					var effectiveness = 1;
					if(selectedVita > 0){
						level = arrayHero[selectedIndex].level;
						if(skillsList.data.skills[selectedSkill].type == "phy"){
							attack = arrayHero[selectedIndex].statCalc[2];
							if(arrayHero[selectedIndex].statMod[2] > 0){
								attack = attack * ((arrayHero[selectedIndex].statMod[2]+2)/2);
							}else if(arrayHero[selectedIndex].statMod[2] < 0){
								attack = attack * (2/(Math.abs(arrayHero[selectedIndex].statMod[2])+2));
							}
						}else if(skillsList.data.skills[selectedSkill].type == "spe"){
							attack = arrayHero[selectedIndex].statCalc[4];
							if(arrayHero[selectedIndex].statMod[4] > 0){
								attack = attack * ((arrayHero[selectedIndex].statMod[4]+2)/2);
							}else if(arrayHero[selectedIndex].statMod[4] < 0){
								attack = attack * (2/(Math.abs(arrayHero[selectedIndex].statMod[4])+2));
							}
						}
						//else other
					}else{
						level = arrayEnemy[selectedIndex].level;
						if(skillsList.data.skills[selectedSkill].type == "phy"){
							attack = arrayEnemy[selectedIndex].statCalc[2];
							if(arrayEnemy[selectedIndex].statMod[2] > 0){
								attack = attack * ((arrayEnemy[selectedIndex].statMod[2]+2)/2);
							}else if(arrayEnemy[selectedIndex].statMod[2] < 0){
								attack = attack * (2/(Math.abs(arrayEnemy[selectedIndex].statMod[2])+2));
							}
						}else if(skillsList.data.skills[selectedSkill].type == "spe"){
							attack = arrayEnemy[selectedIndex].statCalc[4];
							if(arrayEnemy[selectedIndex].statMod[4] > 0){
								attack = attack * ((arrayEnemy[selectedIndex].statMod[4]+2)/2);
							}else if(arrayEnemy[selectedIndex].statMod[4] < 0){
								attack = attack * (2/(Math.abs(arrayEnemy[selectedIndex].statMod[4])+2));
							}
						}
					}
					
					if(targeted > 0){
						if(skillsList.data.skills[selectedSkill].type == "phy"){
							defense = arrayHero[targetedIndex].statCalc[3];
							if(arrayHero[selectedIndex].statMod[3] > 0){
								defense = defense * ((arrayHero[selectedIndex].statMod[3]+2)/2);
							}else if(arrayHero[selectedIndex].statMod[3] < 0){
								defense = defense * (2/(Math.abs(arrayHero[selectedIndex].statMod[3])+2));
							}
						}else if(skillsList.data.skills[selectedSkill].type == "spe"){
							defense = arrayHero[targetedIndex].statCalc[5];
							if(arrayHero[selectedIndex].statMod[5] > 0){
								defense = defense * ((arrayHero[selectedIndex].statMod[5]+2)/2);
							}else if(arrayHero[selectedIndex].statMod[5] < 0){
								defense = defense * (2/(Math.abs(arrayHero[selectedIndex].statMod[5])+2));
							}
						}

						arrayHero[targetedIndex].elements.forEach(element =>{
							defendElements.push(element);
						});
						//else other
					}else{
						level = arrayEnemy[selectedIndex].level;
						if(skillsList.data.skills[selectedSkill].type == "phy"){
							defense = arrayEnemy[targetedIndex].statCalc[3];
							if(arrayEnemy[selectedIndex].statMod[3] > 0){
								defense = defense * ((arrayEnemy[selectedIndex].statMod[3]+2)/2);
							}else if(arrayEnemy[selectedIndex].statMod[3] < 0){
								defense = defense * (2/(Math.abs(arrayEnemy[selectedIndex].statMod[3])+2));
							}
						}else if(skillsList.data.skills[selectedSkill].type == "spe"){
							defense = arrayEnemy[targetedIndex].statCalc[5];
							if(arrayEnemy[selectedIndex].statMod[5] > 0){
								defense = defense * ((arrayEnemy[selectedIndex].statMod[5]+2)/2);
							}else if(arrayEnemy[selectedIndex].statMod[5] < 0){
								defense = defense * (2/(Math.abs(arrayEnemy[selectedIndex].statMod[5])+2));
							}
						}
						arrayEnemy[targetedIndex].elements.forEach(element =>{
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

					damage = Math.round((((((2*level/5) + 2) * skillsList.data.skills[selectedSkill].power * (attack/defense))/150) + 2)*effectiveness*crit);

					// damage = 25;

					console.log(targeted + " takes " + damage + " damage");

					if(targeted > 0){
						arrayHero[targetedIndex].statCalc[0] -= damage;

						if(arrayHero[targetedIndex].statCalc[0] < 0){
							arrayHero[targetedIndex].statCalc[0] = 0;
						}

						arrayHeroDmg[targetedIndex].dmgPopup.dmgEffective.visible = true;
						if(effectiveness == 0.25){
							arrayHeroDmg[targetedIndex].dmgPopup.dmgEffective.text = "Poor  x0.25";
						}else if(effectiveness == 0.5){
							arrayHeroDmg[targetedIndex].dmgPopup.dmgEffective.text = "Bad  x0.5";
						}else if(effectiveness == 2){
							arrayHeroDmg[targetedIndex].dmgPopup.dmgEffective.text = "Great  x2";
						}else if(effectiveness == 4){
							arrayHeroDmg[targetedIndex].dmgPopup.dmgEffective.text = "Super  x4";
						}else{
							arrayHeroDmg[targetedIndex].dmgPopup.dmgEffective.visible = false;
						}

						arrayHeroDmg[targetedIndex].dmgPopup.dmgCrit.visible = false;
						if(crit > 1){
							arrayHeroDmg[targetedIndex].dmgPopup.dmgCrit.visible = true;
						}

						var newWidth = hpHeroContainerArray[targetedIndex].inner.width - (hpHeroContainerArray[targetedIndex].outer.width * (arrayHero[targetedIndex].statCalc[0]/arrayHero[targetedIndex].overallHP));

						arrayHeroDmg[targetedIndex].dmgBarContainer.dmgBar.width = newWidth;
						arrayHeroDmg[targetedIndex].dmgBarContainer.dmgBar.visible = true;
						TweenMax.fromTo(arrayHeroDmg[targetedIndex].dmgBarContainer.dmgBar
							, 1, {
								width: newWidth
							}, {delay:0.5, ease:Expo.easeIn, width:0, onComplete: function(){
							arrayHeroDmg[targetedIndex].dmgBarContainer.dmgBar.visible = false;
						}});
						arrayHeroDmg[targetedIndex].dmgBarContainer.x = hpHeroContainerArray[targetedIndex].outer.width * (arrayHero[targetedIndex].statCalc[0]/arrayHero[targetedIndex].overallHP);

						if(arrayHero[targetedIndex].statCalc[0] == 0){
							hpHeroContainerArray[targetedIndex].inner.visible = false;
						}else{
							hpHeroContainerArray[targetedIndex].inner.width = hpHeroContainerArray[targetedIndex].outer.width * (arrayHero[targetedIndex].statCalc[0]/arrayHero[targetedIndex].overallHP);	
						}
						hpHeroContainerArray[targetedIndex].textHP.text = arrayHero[targetedIndex].statCalc[0] + " / " + arrayHero[targetedIndex].EHP;

						arrayHeroDmg[targetedIndex].dmgPopup.dmgNum.text = damage;						
						arrayHeroDmg[targetedIndex].dmgPopup.dmgNum.style.fill = '#ff7b00';
						arrayHeroDmg[targetedIndex].dmgPopup.dmgNum.style.stroke = '#4E2600';
						arrayHeroDmg[targetedIndex].dmgPopup.tween.play(0);
					}else{
						arrayEnemy[targetedIndex].statCalc[0] -= damage;
						if(arrayEnemy[targetedIndex].statCalc[0] < 0){
							arrayEnemy[targetedIndex].statCalc[0] = 0;
						}

						arrayEnemyDmg[targetedIndex].dmgPopup.dmgEffective.visible = true;
						if(effectiveness == 0.25){
							arrayEnemyDmg[targetedIndex].dmgPopup.dmgEffective.text = "Poor  x0.25";
						}else if(effectiveness == 0.5){
							arrayEnemyDmg[targetedIndex].dmgPopup.dmgEffective.text = "Bad  x0.5";
						}else if(effectiveness == 2){
							arrayEnemyDmg[targetedIndex].dmgPopup.dmgEffective.text = "Great  x2";
						}else if(effectiveness == 4){
							arrayEnemyDmg[targetedIndex].dmgPopup.dmgEffective.text = "Super  x4";
						}else{
							arrayEnemyDmg[targetedIndex].dmgPopup.dmgEffective.visible = false;
						}

						arrayEnemyDmg[targetedIndex].dmgPopup.dmgCrit.visible = false;
						if(crit > 1){
							arrayEnemyDmg[targetedIndex].dmgPopup.dmgCrit.visible = true;
						}

						var newWidth = hpEnemyContainerArray[targetedIndex].inner.width - (hpEnemyContainerArray[targetedIndex].outer.width * (arrayEnemy[targetedIndex].statCalc[0]/arrayEnemy[targetedIndex].overallHP));

						arrayEnemyDmg[targetedIndex].dmgBarContainer.dmgBar.width = newWidth;
						arrayEnemyDmg[targetedIndex].dmgBarContainer.dmgBar.visible = true;
						TweenMax.fromTo(arrayEnemyDmg[targetedIndex].dmgBarContainer.dmgBar
							, 1, {
								width: newWidth
							}, {delay:0.5, ease:Expo.easeIn, width:0, onComplete: function(){
							arrayEnemyDmg[targetedIndex].dmgBarContainer.dmgBar.visible = false;
						}});
						arrayEnemyDmg[targetedIndex].dmgBarContainer.x = hpEnemyContainerArray[targetedIndex].outer.width * (arrayEnemy[targetedIndex].statCalc[0]/arrayEnemy[targetedIndex].overallHP);

						if(arrayEnemy[targetedIndex].statCalc[0] == 0){
							hpEnemyContainerArray[targetedIndex].inner.visible = false;
						}else{
							hpEnemyContainerArray[targetedIndex].inner.width = hpEnemyContainerArray[targetedIndex].outer.width * (arrayEnemy[targetedIndex].statCalc[0]/arrayEnemy[targetedIndex].overallHP);
						}						hpEnemyContainerArray[targetedIndex].textHP.text = arrayEnemy[targetedIndex].statCalc[0] + " / " + arrayEnemy[targetedIndex].EHP;

						arrayEnemyDmg[targetedIndex].dmgPopup.dmgNum.text = damage;
						arrayEnemyDmg[targetedIndex].dmgPopup.dmgNum.style.fill = '#00d800';
						arrayEnemyDmg[targetedIndex].dmgPopup.dmgNum.style.stroke = '#003B00';
						arrayEnemyDmg[targetedIndex].dmgPopup.tween.play(0);
					}
				});
			}else{
				// console.log(validPositionTargetArray[clickedTarget] + " takes ## damage");
				var targeted = validPositionTargetArray[clickedTarget];
				var selectedIndex = Math.abs(selectedVita)-1;
				var targetedIndex = Math.abs(targeted)-1;
				var damage = 0;
				var level = 0;
				var attack = 0;
				var defense = 0;
				var defendElements = [];
				var effectiveness = 1;
				if(selectedVita > 0){
					level = arrayHero[selectedIndex].level;
					if(skillsList.data.skills[selectedSkill].type == "phy"){
						attack = arrayHero[selectedIndex].statCalc[2];
						if(arrayHero[selectedIndex].statMod[2] > 0){
							attack = attack * ((arrayHero[selectedIndex].statMod[2]+2)/2);
						}else if(arrayHero[selectedIndex].statMod[2] < 0){
							attack = attack * (2/(Math.abs(arrayHero[selectedIndex].statMod[2])+2));
						}
					}else if(skillsList.data.skills[selectedSkill].type == "spe"){
						attack = arrayHero[selectedIndex].statCalc[4];
						if(arrayHero[selectedIndex].statMod[4] > 0){
							attack = attack * ((arrayHero[selectedIndex].statMod[4]+2)/2);
						}else if(arrayHero[selectedIndex].statMod[4] < 0){
							attack = attack * (2/(Math.abs(arrayHero[selectedIndex].statMod[4])+2));
						}
					}
					//else other
				}else{
					level = arrayEnemy[selectedIndex].level;
					if(skillsList.data.skills[selectedSkill].type == "phy"){
						attack = arrayEnemy[selectedIndex].statCalc[2];
						if(arrayEnemy[selectedIndex].statMod[2] > 0){
							attack = attack * ((arrayEnemy[selectedIndex].statMod[2]+2)/2);
						}else if(arrayEnemy[selectedIndex].statMod[2] < 0){
							attack = attack * (2/(Math.abs(arrayEnemy[selectedIndex].statMod[2])+2));
						}
					}else if(skillsList.data.skills[selectedSkill].type == "spe"){
						attack = arrayEnemy[selectedIndex].statCalc[4];
						if(arrayEnemy[selectedIndex].statMod[4] > 0){
							attack = attack * ((arrayEnemy[selectedIndex].statMod[4]+2)/2);
						}else if(arrayEnemy[selectedIndex].statMod[4] < 0){
							attack = attack * (2/(Math.abs(arrayEnemy[selectedIndex].statMod[4])+2));
						}
					}
				}
				
				if(targeted > 0){
					if(skillsList.data.skills[selectedSkill].type == "phy"){
						defense = arrayHero[targetedIndex].statCalc[3];
						if(arrayHero[selectedIndex].statMod[3] > 0){
							defense = defense * ((arrayHero[selectedIndex].statMod[3]+2)/2);
						}else if(arrayHero[selectedIndex].statMod[3] < 0){
							defense = defense * (2/(Math.abs(arrayHero[selectedIndex].statMod[3])+2));
						}
					}else if(skillsList.data.skills[selectedSkill].type == "spe"){
						defense = arrayHero[targetedIndex].statCalc[5];
						if(arrayHero[selectedIndex].statMod[5] > 0){
							defense = defense * ((arrayHero[selectedIndex].statMod[5]+2)/2);
						}else if(arrayHero[selectedIndex].statMod[5] < 0){
							defense = defense * (2/(Math.abs(arrayHero[selectedIndex].statMod[5])+2));
						}
					}

					arrayHero[targetedIndex].elements.forEach(element =>{
						defendElements.push(element);
					});
					//else other
				}else{
					level = arrayEnemy[selectedIndex].level;
					if(skillsList.data.skills[selectedSkill].type == "phy"){
						defense = arrayEnemy[targetedIndex].statCalc[3];
						if(arrayEnemy[selectedIndex].statMod[3] > 0){
							defense = defense * ((arrayEnemy[selectedIndex].statMod[3]+2)/2);
						}else if(arrayEnemy[selectedIndex].statMod[3] < 0){
							defense = defense * (2/(Math.abs(arrayEnemy[selectedIndex].statMod[3])+2));
						}
					}else if(skillsList.data.skills[selectedSkill].type == "spe"){
						defense = arrayEnemy[targetedIndex].statCalc[5];
						if(arrayEnemy[selectedIndex].statMod[5] > 0){
							defense = defense * ((arrayEnemy[selectedIndex].statMod[5]+2)/2);
						}else if(arrayEnemy[selectedIndex].statMod[5] < 0){
							defense = defense * (2/(Math.abs(arrayEnemy[selectedIndex].statMod[5])+2));
						}
					}
					arrayEnemy[targetedIndex].elements.forEach(element =>{
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
				
				damage = Math.round((((((2*level/5) + 2) * skillsList.data.skills[selectedSkill].power * (attack/defense))/150) + 2)*effectiveness*crit);

				// damage = 25;

				console.log(targeted + " takes " + damage + " damage");

				if(targeted > 0){
					arrayHero[targetedIndex].statCalc[0] -= damage;
					if(arrayHero[targetedIndex].statCalc[0] < 0){
						arrayHero[targetedIndex].statCalc[0] = 0;
					}

					arrayHeroDmg[targetedIndex].dmgPopup.dmgEffective.visible = true;
					if(effectiveness == 0.25){
						arrayHeroDmg[targetedIndex].dmgPopup.dmgEffective.text = "Poor  x0.25";
					}else if(effectiveness == 0.5){
						arrayHeroDmg[targetedIndex].dmgPopup.dmgEffective.text = "Bad  x0.5";
					}else if(effectiveness == 2){
						arrayHeroDmg[targetedIndex].dmgPopup.dmgEffective.text = "Great  x2";
					}else if(effectiveness == 4){
						arrayHeroDmg[targetedIndex].dmgPopup.dmgEffective.text = "Super  x4";
					}else{
						arrayHeroDmg[targetedIndex].dmgPopup.dmgEffective.visible = false;
					}

					arrayHeroDmg[targetedIndex].dmgPopup.dmgCrit.visible = false;
					if(crit > 1){
						arrayHeroDmg[targetedIndex].dmgPopup.dmgCrit.visible = true;
					}

					var newWidth = hpHeroContainerArray[targetedIndex].inner.width - (hpHeroContainerArray[targetedIndex].outer.width * (arrayHero[targetedIndex].statCalc[0]/arrayHero[targetedIndex].overallHP));

					arrayHeroDmg[targetedIndex].dmgBarContainer.dmgBar.width = newWidth;
					arrayHeroDmg[targetedIndex].dmgBarContainer.dmgBar.visible = true;
					TweenMax.fromTo(arrayHeroDmg[targetedIndex].dmgBarContainer.dmgBar
						, 1, {
							width: newWidth
						}, {delay:0.5, ease:Expo.easeIn, width:0, onComplete: function(){
						arrayHeroDmg[targetedIndex].dmgBarContainer.dmgBar.visible = false;
					}});
					arrayHeroDmg[targetedIndex].dmgBarContainer.x = hpHeroContainerArray[targetedIndex].outer.width * (arrayHero[targetedIndex].statCalc[0]/arrayHero[targetedIndex].overallHP);

					if(arrayHero[targetedIndex].statCalc[0] == 0){
						hpHeroContainerArray[targetedIndex].inner.visible = false;
					}else{
						hpHeroContainerArray[targetedIndex].inner.width = hpHeroContainerArray[targetedIndex].outer.width * (arrayHero[targetedIndex].statCalc[0]/arrayHero[targetedIndex].overallHP);	
					}
					hpHeroContainerArray[targetedIndex].textHP.text = arrayHero[targetedIndex].statCalc[0] + " / " + arrayHero[targetedIndex].EHP;
					
					arrayHeroDmg[targetedIndex].dmgPopup.dmgNum.text = damage;
					arrayHeroDmg[targetedIndex].dmgPopup.tween.play(0);
				}else{
					arrayEnemy[targetedIndex].statCalc[0] -= damage;
					if(arrayEnemy[targetedIndex].statCalc[0] < 0){
						arrayEnemy[targetedIndex].statCalc[0] = 0;
					}

					arrayEnemyDmg[targetedIndex].dmgPopup.dmgEffective.visible = true;
					if(effectiveness == 0.25){
						arrayEnemyDmg[targetedIndex].dmgPopup.dmgEffective.text = "Poor  x0.25";
					}else if(effectiveness == 0.5){
						arrayEnemyDmg[targetedIndex].dmgPopup.dmgEffective.text = "Bad  x0.5";
					}else if(effectiveness == 2){
						arrayEnemyDmg[targetedIndex].dmgPopup.dmgEffective.text = "Great  x2";
					}else if(effectiveness == 4){
						arrayEnemyDmg[targetedIndex].dmgPopup.dmgEffective.text = "Super  x4";
					}else{
						arrayEnemyDmg[targetedIndex].dmgPopup.dmgEffective.visible = false;
					}

					arrayEnemyDmg[targetedIndex].dmgPopup.dmgCrit.visible = false;
					if(crit > 1){
						arrayEnemyDmg[targetedIndex].dmgPopup.dmgCrit.visible = true;
					}

					var newWidth = hpEnemyContainerArray[targetedIndex].inner.width - (hpEnemyContainerArray[targetedIndex].outer.width * (arrayEnemy[targetedIndex].statCalc[0]/arrayEnemy[targetedIndex].overallHP));

					arrayEnemyDmg[targetedIndex].dmgBarContainer.dmgBar.width = newWidth;
					arrayEnemyDmg[targetedIndex].dmgBarContainer.dmgBar.visible = true;
					TweenMax.fromTo(arrayEnemyDmg[targetedIndex].dmgBarContainer.dmgBar
						, 1, {
							width: newWidth
						}, {delay:0.5, ease:Expo.easeIn, width:0, onComplete: function(){
						arrayEnemyDmg[targetedIndex].dmgBarContainer.dmgBar = false;
					}});
					arrayEnemyDmg[targetedIndex].dmgBarContainer.x = hpEnemyContainerArray[targetedIndex].outer.width * (arrayEnemy[targetedIndex].statCalc[0]/arrayEnemy[targetedIndex].overallHP);

					if(arrayEnemy[targetedIndex].statCalc[0] == 0){
						hpEnemyContainerArray[targetedIndex].inner.visible = false;
					}else{
						hpEnemyContainerArray[targetedIndex].inner.width = hpEnemyContainerArray[targetedIndex].outer.width * (arrayEnemy[targetedIndex].statCalc[0]/arrayEnemy[targetedIndex].overallHP);
					}
					hpEnemyContainerArray[targetedIndex].textHP.text = arrayEnemy[targetedIndex].statCalc[0] + " / " + arrayEnemy[targetedIndex].EHP;

					arrayEnemyDmg[targetedIndex].dmgPopup.dmgNum.text = damage;
					arrayEnemyDmg[targetedIndex].dmgPopup.tween.play(0);
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

			//Animate HP going down
			//Show battle scene
			//

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
	
	// hpHeroContainerArray.forEach(hpContainer=>{
	// 	hpContainer.turn.visible = false;
	// });
	// hpEnemyContainerArray.forEach(hpContainer=>{
	// 	hpContainer.turn.visible = false;
	// });
	
	// if(this.identifier[0] < 0){
	// 	hpEnemyContainerArray[this.identifier[1]].turn.visible = true;
	// }else{
	// 	hpHeroContainerArray[this.identifier[1]].turn.visible = true;
	// }
// 	hpHeroContainerArray[this.identifier[1]].selected = visible;
}

function onSkillDown(){
	hpEnemyContainerArray.forEach(hpContainer=>{
		hpContainer.target.visible = false;
		hpContainer.heal.visible = false;
		hpContainer.move.visible = false;
	});
	hpHeroContainerArray.forEach(hpContainer=>{
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
			column = true;
			// if(this.identifier[2] > 0){
			// 	console.log("column => from: " + arrayHero[this.identifier[3]].name + " to: " + skillsList.data.skills[this.identifier[1]][tagName][0]);
			// }else{
			// 	console.log("column => from: " + arrayEnemy[this.identifier[3]].name + " to: " + skillsList.data.skills[this.identifier[1]][tagName][0]);
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
	
	validPositionTargetArray = [];
	var stageSide = 0;
	if(column){
		var columnArray = [];
		//Ahead
		if(skillsList.data.skills[this.identifier[1]].column[2] > 0){
			var switchSide = false;
			if(this.identifier[2] > 0){
				var temp = arrayHero[this.identifier[3]].pos;
			}else{
				var temp = arrayEnemy[this.identifier[3]].pos;
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
						arrayHero.forEach((arrayCreature,arrayCreatureIndex) => {
							if(arrayCreature.pos == temp){
								// console.log(arrayCreature.name);
								if(heal){
									hpHeroContainerArray[arrayCreatureIndex].heal.visible = true;
								}else{
									hpHeroContainerArray[arrayCreatureIndex].target.visible = true;
								}
								stageSide = 1;
							}else{stageSide = 0;}
							if(stageSide != 0)	columnArray.push((arrayCreatureIndex+1)*stageSide);
						});
					}else{
						arrayEnemy.forEach((arrayCreature,arrayCreatureIndex) => {
							if(arrayCreature.pos == temp){
								// console.log(arrayCreature.name);
								if(heal){
									hpEnemyContainerArray[arrayCreatureIndex].heal.visible = true;
								}else{
									hpEnemyContainerArray[arrayCreatureIndex].target.visible = true;
								}
								stageSide = -1;
							}else{stageSide = 0;}
							if(stageSide != 0)	columnArray.push((arrayCreatureIndex+1)*stageSide);
						});
					}
				}else{
					if(temp > 0 && !switchSide){
						arrayEnemy.forEach((arrayCreature,arrayCreatureIndex) => {
							if(arrayCreature.pos == temp){
								// console.log(arrayCreature.name);
								if(heal){
									hpEnemyContainerArray[arrayCreatureIndex].heal.visible = true;
								}else{
									hpEnemyContainerArray[arrayCreatureIndex].target.visible = true;
								}
								stageSide = -1;
							}else{stageSide = 0;}
							if(stageSide != 0)	columnArray.push((arrayCreatureIndex+1)*stageSide);
						});
					}else{
						arrayHero.forEach((arrayCreature,arrayCreatureIndex) => {
							if(arrayCreature.pos == temp){
								// console.log(arrayCreature.name);
								if(heal){
									hpHeroContainerArray[arrayCreatureIndex].heal.visible = true;
								}else{
									hpHeroContainerArray[arrayCreatureIndex].target.visible = true;
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
			if(this.identifier[2] > 0){
				var temp = arrayHero[this.identifier[3]].pos;
			}else{
				var temp = arrayEnemy[this.identifier[3]].pos;
			}			
			for(var i = 0; i < skillsList.data.skills[this.identifier[1]].column[0]; i++){
				temp++;
				if(this.identifier[2] > 0){
					arrayHero.forEach((arrayCreature,arrayCreatureIndex) => {
						if(arrayCreature.pos == temp){
							// console.log(arrayCreature.name);
							if(heal){
								hpHeroContainerArray[arrayCreatureIndex].heal.visible = true;
							}else{
								hpHeroContainerArray[arrayCreatureIndex].target.visible = true;
							}
							stageSide = 1;
						}else{stageSide = 0;}
						if(stageSide != 0)	columnArray.push((arrayCreatureIndex+1)*stageSide);
					});
				}else{
					arrayEnemy.forEach((arrayCreature,arrayCreatureIndex) => {
						if(arrayCreature.pos == temp){
							// console.log(arrayCreature.name);
							if(heal){
								hpEnemyContainerArray[arrayCreatureIndex].heal.visible = true;
							}else{
								hpEnemyContainerArray[arrayCreatureIndex].target.visible = true;
							}
							stageSide = -1;
						}else{stageSide = 0;}
						if(stageSide != 0)	columnArray.push((arrayCreatureIndex+1)*stageSide);
					});
				}
			}			
		}
		validPositionTargetArray.push(columnArray);
	}

	//for each target in the skill
	skillsList.data.skills[this.identifier[1]].target.forEach((skillTarget, skillTargetIndex)=> {
		//if the position is a valid target
		if(skillTarget == 1){
			var posTracker = skillTargetIndex + 1;
			//if targeting enemies or heroes
			if(this.identifier[2] > 0){
				arrayEnemy.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(posTracker == arrayCreature.pos){
							// console.log(arrayCreature.name);
							hpEnemyContainerArray[arrayCreatureIndex].target.visible = true;						
							stageSide = -1;
						}else{stageSide = 0;}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(posTracker == pos1 || posTracker == pos2){
							// console.log(arrayCreature.name);
							hpEnemyContainerArray[arrayCreatureIndex].target.visible = true;
							stageSide = -1;
						}else{stageSide = 0;}
					}
					if(stageSide != 0){
						var alreadyAdded = false;
						validPositionTargetArray.forEach(targeted => {
							if(targeted == arrayCreature.pos*stageSide)	alreadyAdded = true
						});
						if(!alreadyAdded)	validPositionTargetArray.push((arrayCreatureIndex+1)*stageSide)
						// validPositionTargetArray.push(arrayCreature.pos*stageSide);
					}					
				});
			}else{
				arrayHero.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(posTracker == arrayCreature.pos){
							// console.log(arrayCreature.name);
							hpHeroContainerArray[arrayCreatureIndex].target.visible = true;
							stageSide = 1;
						}else{stageSide = 0;}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(posTracker == pos1 || posTracker == pos2){
							// console.log(arrayCreature.name);
							hpHeroContainerArray[arrayCreatureIndex].target.visible = true;
							stageSide = 1;
						}else{stageSide = 0;}
					}
					if(stageSide != 0){
						var alreadyAdded = false;
						validPositionTargetArray.forEach(targeted => {
							if(targeted == arrayCreature.pos*stageSide)	alreadyAdded = true
						});
						if(!alreadyAdded)	validPositionTargetArray.push((arrayCreatureIndex+1)*stageSide)
						// validPositionTargetArray.push(arrayCreature.pos*stageSide);
					}			
				});
			}
		}
	});

	// console.log(validPositionTargetArray);
	//validPositionTargetArray [1, 2, 4] = [[1,2],[2,4]]
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
				arrayEnemy.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4)	array1.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)	array1.push((arrayCreatureIndex+1)*-1)
					}
				});
			}else{
				arrayHero.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4)	array1.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)	array1.push((arrayCreatureIndex+1))
					}
				});
			}
			validPositionTargetArray = [];
			validPositionTargetArray = [array1];
		}else if(joinedSeveral == "0,1,0"){
			if(selectedVita > 0){
				arrayEnemy.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3)	array1.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3)	array1.push((arrayCreatureIndex+1)*-1)
					}
				});
			}else{
				arrayHero.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3)	array1.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3)	array1.push((arrayCreatureIndex+1))
					}
				});
			}
			validPositionTargetArray = [];
			validPositionTargetArray = [array1];
		}else if(joinedSeveral == "1,0,0"){
			if(selectedVita > 0){
				arrayEnemy.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2)	array1.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2)	array1.push((arrayCreatureIndex+1)*-1)
					}
				});
			}else{
				arrayHero.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2)	array1.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2)	array1.push((arrayCreatureIndex+1))
					}
				});
			}
			validPositionTargetArray = [];
			validPositionTargetArray = [array1];
		}else if(joinedSeveral == "1,1,0"){
			if(selectedVita > 0){
				arrayEnemy.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3)		array1.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3)		array1.push((arrayCreatureIndex+1)*-1)
					}
				});
			}else{
				arrayHero.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3)		array1.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3)		array1.push((arrayCreatureIndex+1))
					}
				});
			}
			validPositionTargetArray = [];
			validPositionTargetArray = [array1];
		}else if(joinedSeveral == "0,1,1"){
			if(selectedVita > 0){
				arrayEnemy.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4)		array1.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)		array1.push((arrayCreatureIndex+1)*-1)
					}
				});
			}else{
				arrayHero.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4)		array1.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)		array1.push((arrayCreatureIndex+1))
					}
				});
			}
			validPositionTargetArray = [];
			validPositionTargetArray = [array1];
		}else if(joinedSeveral == "1,1,1"){
			if(selectedVita > 0){
				arrayEnemy.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4)		array1.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)		array1.push((arrayCreatureIndex+1)*-1)
					}
				});
			}else{
				arrayHero.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4)		array1.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)		array1.push((arrayCreatureIndex+1))
					}
				});
			}
			validPositionTargetArray = [];
			validPositionTargetArray = [array1];
		}else if(joinedSeveral == "1,0,1"){
			var array2 = [];
			if(selectedVita > 0){
				arrayEnemy.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2)	array1.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2)	array1.push((arrayCreatureIndex+1)*-1)
					}
				});
				arrayEnemy.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4)	array2.push((arrayCreatureIndex+1)*-1)
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)	array2.push((arrayCreatureIndex+1)*-1)
					}
				});
			}else{
				arrayHero.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2)	array1.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2)	array1.push((arrayCreatureIndex+1))
					}
				});
				arrayHero.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4)	array2.push((arrayCreatureIndex+1))
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4)	array2.push((arrayCreatureIndex+1))
					}
				});
			}
			// validPositionTargetArray = [];
			validPositionTargetArray = [array1, array2];
		}
	}
	console.log("Targets: " + validPositionTargetArray);
}

function onAdditionalDown(){
// 	skillContainerArray[0].targetText.style.fill = '0x66cc66';
	console.log("Additional");
	additionalContainer.visible = true;
	// tween.invalidate();
	// tween.play(0);

	var resizeWidth = (app.screen.width- (4*margin) - 6*(healthSpacing))/8;

	// switch(arrayHero[index].pos) {
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


	// switch(arrayHero[index].pos) {
	// 	case 1:
	// 		item.x = (resizeWidth + healthSpacing) * (3 - switcher);
	// 		break;
	// 	case 2:
	// 		item.x = (resizeWidth + healthSpacing) * (2 - switcher);
	// 		break;
	// 	case 3:
	// 		if(arrayHero[index].size == 1)	item.x = resizeWidth + healthSpacing * (1 - switcher)
	// 		else 	item.x = 0
	// 		break;
	// 	case 4:
	// 		item.x = 0;
	// 		break;
	// 	default:
	// 		item.x = 0;
			
	// }

	var newX = -((resizeWidth + healthSpacing) * 2);
	var newX2 = 0;

	var hpX = resizeWidth + healthSpacing * 1;
	var hpX2 = (resizeWidth + healthSpacing) * (3 - 1);

	TweenMax.to(heroContainerArray[0], 0.5, {x: newX});
	TweenMax.to(heroContainerArray[1], 0.5, {x: newX2});
	TweenMax.to(hpHeroContainerArray[0], 0.5, {x: hpX});
	TweenMax.to(hpHeroContainerArray[1], 0.5, {x: hpX2});
	TweenMax.to(arrayHeroDmg[0], 0.5, {x: hpX});
	TweenMax.to(arrayHeroDmg[1], 0.5, {x: hpX2});

	arrayHero[0].pos = 3;
	arrayHero[1].pos = 1;


	// TweenMax.fromTo(arrayEnemyDmg[targetedIndex].dmgBarContainer.dmgBar
	// 					, 1, {
	// 						width: newWidth
	// 					}, {delay:0.5, ease:Expo.easeIn, width:0, onComplete: function(){
	// 					arrayEnemyDmg[targetedIndex].dmgBarContainer.dmgBar = false;
	// 				}});
}

function onAdditionalCancelDown(){
	console.log("Additional Cancel");
	additionalContainer.visible = false;
}

function onAdditionalMoveDown(){
	console.log("Additional Move " + selectedVita);
	additionalContainer.visible = false;
	hpEnemyContainerArray.forEach(hpContainer=>{
		hpContainer.target.visible = false;
		hpContainer.heal.visible = false;
	});
	hpHeroContainerArray.forEach(hpContainer=>{
		hpContainer.target.visible = false;
		hpContainer.heal.visible = false;
	});
	skillContainerArray.forEach(skillContainer=>{
		skillContainer.selected.visible = false;
	});

	// hpHeroContainerArray.forEach(hpContainer => {
	//  	hpContainer.move.visible =  true;
	//  });
	// hpEnemyContainerArray.forEach(hpContainer => {
	//  	hpContainer.move.visible =  true;
	//  });

	if(selectedVita > 0){
		var temp = Math.abs(selectedVita) - 2;
		if(temp > -1){
			hpHeroContainerArray[temp].move.visible = true;
		}
		var temp2 = Math.abs(selectedVita);
		if(temp2 < hpHeroContainerArray.length){
			hpHeroContainerArray[temp2].move.visible = true;
		}
	}else{
		var temp = Math.abs(selectedVita) - 2;
		if(temp > -1){
			hpEnemyContainerArray[temp].move.visible = true;
		}
		var temp2 = Math.abs(selectedVita);
		if(temp2 < hpEnemyContainerArray.length){
			hpEnemyContainerArray[temp2].move.visible = true;
		}

	}
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
}

function calculateTurnOrder(){
	hpEnemyContainerArray.forEach(hpContainer=>{
		hpContainer.turn.visible = true;
	});
	hpHeroContainerArray.forEach(hpContainer=>{
		hpContainer.turn.visible = true;
	});

	var arrayCalcSpeedSorted = [];
	var arrayCalcSpeedPositions = [];

	turnArray = [];	

	arrayHero.forEach((arrayCreature,arrayCreatureIndex) => {
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
	arrayEnemy.forEach((arrayCreature,arrayCreatureIndex) => {
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
				if(index2 < arrayHero.length){
					var tempVar = index2+1;
					var index = turnArray.findIndex(x => x==tempVar);
					if (index === -1){
						turnArray.push(tempVar);
					}else console.log("object already exists")
				}else{
					var tempVar = -(index2+1-arrayHero.length);
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
	// console.log("Creature speed:" + arrayHero[identifier[1]].statMod[6]);
	if(identifier[0] > 0){
		hpHeroContainerArray[identifier[1]].turn.visible = false;
	}else{
		hpEnemyContainerArray[identifier[1]].turn.visible = false;
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
		skillContainer.markerTargetEnemySeveralContainer.visible = false;
	});
	hpEnemyContainerArray.forEach(hpContainer=>{
		hpContainer.select.visible = false;
		hpContainer.target.visible = false;
		hpContainer.heal.visible = false;
		hpContainer.move.visible = false;
		hpContainer.select.animate = false;
	});
	hpHeroContainerArray.forEach(hpContainer=>{
		hpContainer.select.visible = false;
		hpContainer.target.visible = false;
		hpContainer.heal.visible = false;
		hpContainer.move.visible = false;
		hpContainer.select.animate = false;
	});

	var newSkills = [];
	var currPos = [];
	if(identifier[0] < 0){		
		hpEnemyContainerArray[identifier[1]].select.visible = true;
		hpEnemyContainerArray[identifier[1]].select.animate = true;
// 		moveEnemyContainerArray[identifier[1]].visible = true;
		arrayEnemy[identifier[1]].skills.forEach(skillID => {
			newSkills.push(skillID);
		});
		if(arrayEnemy[identifier[1]].size == 1){
			currPos.push(arrayEnemy[identifier[1]].pos);
		}else if(arrayEnemy[identifier[1]].size == 2){
			currPos.push(arrayEnemy[identifier[1]].pos);
			currPos.push(arrayEnemy[identifier[1]].pos+1);
		}
	}else{
		hpHeroContainerArray[identifier[1]].select.visible = true;
		hpHeroContainerArray[identifier[1]].select.animate = true;
// 		moveHeroContainerArray[identifier[1]].visible = true;
		arrayHero[identifier[1]].skills.forEach(skillID => {
			newSkills.push(skillID);
		});
		if(arrayHero[identifier[1]].size == 1){
			currPos.push(arrayHero[identifier[1]].pos);
		}else if(arrayHero[identifier[1]].size == 2){
			currPos.push(arrayHero[identifier[1]].pos);
			currPos.push(arrayHero[identifier[1]].pos+1);
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
				skillContainerArray[skillContainerIndex].markerHeroArray[skillPosIndex].visible = true;
			}else{
				skillContainerArray[skillContainerIndex].markerHeroArray[skillPosIndex].visible = false;
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
				skillContainerArray[skillContainerIndex].markerTargetEnemySeveralContainer.visible = true;
				//Show target dashes if 1
				skillsList.data.skills[skillID][tagName].forEach((dash, dashIndex) => {
					if(dash == 1){
						skillContainerArray[skillContainerIndex].markerTargetEnemySeveralArray[dashIndex].visible = true;
					}else{
						skillContainerArray[skillContainerIndex].markerTargetEnemySeveralArray[dashIndex].visible = false;
					}
				});
			}
			// console.log(skillsList.data.skills[skillID][tagName]);
		});
		
		if(column){
			skillContainerArray[skillContainerIndex].markerTargetEnemyContainer.visible = false;
			skillContainerArray[skillContainerIndex].targetText.visible = true;
		}else{
			skillContainerArray[skillContainerIndex].markerTargetEnemyContainer.visible = true;
			skillContainerArray[skillContainerIndex].targetText.visible = false;
			skillsList.data.skills[skillID].target.forEach((skillTarget, targetIndex) => {
				if(skillTarget == 1){
					skillContainerArray[skillContainerIndex].markerTargetEnemyArray[targetIndex].visible = true;
				}else{
					skillContainerArray[skillContainerIndex].markerTargetEnemyArray[targetIndex].visible = false;
				}
			});
		}
	});	
}