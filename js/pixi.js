/*======================================================================================
*
*FileName:        pixi.js
*Project:         Project Elements
*Version:         2.0
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

let loadText = new Text("Loading...%", {fontFamily : 'Arvo', fontSize: 36, fill : 0xfefefe});
app.stage.addChild(loadText);

loader
	.add([
		"img/ability_move.png",
		"img/additional.png",
		"img/additional_cancel.png",
		"img/additional_item.png",
		"img/additional_skip.png",
		"img/leper.ability.five.png",
		"img/actionLines.png",
		"img/bg3.png",
		"js/creature.json",
		"js/skill.json",
		"js/element.json",
		"js/item.json",

		{name:'icon_plus', url:'img/icon_plus.png'},

		{name:'arrow_up_d', url:'img/arrow_up_d.png'},
		{name:'arrow_up_n', url:'img/arrow_up_n.png'},
		{name:'arrow_down_d', url:'img/arrow_down_d.png'},
		{name:'arrow_down_n', url:'img/arrow_down_n.png'},

		{name:'hazard_lit', url:'img/hazard_lit.png'},
		{name:'hazard_spikes', url:'img/hazard_spikes.png'},
		{name:'hazard_spores', url:'img/hazard_spores.png'},

		{name:'gorilla3_p_ready', url:'img/gorilla3_p_ready.png'},
		{name:'gorilla3_p_main', url:'img/gorilla3_p_main.png'},
		{name:'gorilla3_p_back', url:'img/gorilla3_p_back.png'},
		{name:'gorilla3_p_top', url:'img/gorilla3_p_top.png'},
		{name:'gorilla3_s_ready', url:'img/gorilla3_s_ready.png'},
		{name:'gorilla3_s_main', url:'img/gorilla3_s_main.png'},
		{name:'gorilla3_s_back', url:'img/gorilla3_s_back.png'},
		{name:'gorilla3_s_top', url:'img/gorilla3_s_top.png'},
		{name:'gorilla3_d_ready', url:'img/gorilla3_d_ready.png'},
		{name:'gorilla3_d_miss', url:'img/gorilla3_d_miss.png'},
		{name:'gorilla3_d_dmg', url:'img/gorilla3_d_dmg.png'},

		{name:'toad1_p_ready', url:'img/toad1_p_ready.png'},
		{name:'toad1_p_main', url:'img/toad1_p_main.png'},
		{name:'toad1_p_back', url:'img/toad1_p_back.png'},
		{name:'toad1_p_top', url:'img/toad1_p_top.png'},
		{name:'toad1_s_ready', url:'img/toad1_s_ready.png'},
		{name:'toad1_s_main', url:'img/toad1_s_main.png'},
		{name:'toad1_s_back', url:'img/toad1_s_back.png'},
		{name:'toad1_s_top', url:'img/toad1_s_top.png'},
		{name:'toad1_d_ready', url:'img/toad1_d_ready.png'},
		{name:'toad1_d_miss', url:'img/toad1_d_miss.png'},
		{name:'toad1_d_dmg', url:'img/toad1_d_dmg.png'},

		{name:'toad3_p_ready', url:'img/toad3_p_ready.png'},
		{name:'toad3_p_main', url:'img/toad3_p_main.png'},
		{name:'toad3_p_back', url:'img/toad3_p_back.png'},
		{name:'toad3_p_top', url:'img/toad3_p_top.png'},
		{name:'toad3_s_ready', url:'img/toad3_s_ready.png'},
		{name:'toad3_s_main', url:'img/toad3_s_main.png'},
		{name:'toad3_s_back', url:'img/toad3_s_back.png'},
		{name:'toad3_s_top', url:'img/toad3_s_top.png'},
		{name:'toad3_d_ready', url:'img/toad3_d_ready.png'},
		{name:'toad3_d_miss', url:'img/toad3_d_miss.png'},
		{name:'toad3_d_dmg', url:'img/toad3_d_dmg.png'},

		{name:'raccoon3_p_ready', url:'img/raccoon3_p_ready.png'},
		{name:'raccoon3_p_main', url:'img/raccoon3_p_main.png'},
		{name:'raccoon3_p_back', url:'img/raccoon3_p_back.png'},
		{name:'raccoon3_p_top', url:'img/raccoon3_p_top.png'},
		{name:'raccoon3_s_ready', url:'img/raccoon3_s_ready.png'},
		{name:'raccoon3_s_main', url:'img/raccoon3_s_main.png'},
		{name:'raccoon3_s_back', url:'img/raccoon3_s_back.png'},
		{name:'raccoon3_s_top', url:'img/raccoon3_s_top.png'},
		{name:'raccoon3_d_ready', url:'img/raccoon3_d_ready.png'},
		{name:'raccoon3_d_miss', url:'img/raccoon3_d_miss.png'},
		{name:'raccoon3_d_dmg', url:'img/raccoon3_d_dmg.png'},

		{name:'goat2_1_p_ready', url:'img/goat2_1_p_ready.png'},
		{name:'goat2_1_p_main', url:'img/goat2_1_p_main.png'},
		{name:'goat2_1_p_back', url:'img/goat2_1_p_back.png'},
		{name:'goat2_1_p_top', url:'img/goat2_1_p_top.png'},
		{name:'goat2_1_s_ready', url:'img/goat2_1_s_ready.png'},
		{name:'goat2_1_s_main', url:'img/goat2_1_s_main.png'},
		{name:'goat2_1_s_back', url:'img/goat2_1_s_back.png'},
		{name:'goat2_1_s_top', url:'img/goat2_1_s_top.png'},
		{name:'goat2_1_d_ready', url:'img/goat2_1_d_ready.png'},
		{name:'goat2_1_d_miss', url:'img/goat2_1_d_miss.png'},
		{name:'goat2_1_d_dmg', url:'img/goat2_1_d_dmg.png'},

		{name:'goat2_2_p_ready', url:'img/goat2_2_p_ready.png'},
		{name:'goat2_2_p_main', url:'img/goat2_2_p_main.png'},
		{name:'goat2_2_p_back', url:'img/goat2_2_p_back.png'},
		{name:'goat2_2_p_top', url:'img/goat2_2_p_top.png'},
		{name:'goat2_2_s_ready', url:'img/goat2_2_s_ready.png'},
		{name:'goat2_2_s_main', url:'img/goat2_2_s_main.png'},
		{name:'goat2_2_s_back', url:'img/goat2_2_s_back.png'},
		{name:'goat2_2_s_top', url:'img/goat2_2_s_top.png'},
		{name:'goat2_2_d_ready', url:'img/goat2_2_d_ready.png'},
		{name:'goat2_2_d_miss', url:'img/goat2_2_d_miss.png'},
		{name:'goat2_2_d_dmg', url:'img/goat2_2_d_dmg.png'},

		{name:'hel1_p_ready', url:'img/hel1_p_ready.png'},
		{name:'hel1_p_main', url:'img/hel1_p_main.png'},
		{name:'hel1_p_back', url:'img/hel1_p_back.png'},
		{name:'hel1_p_top', url:'img/hel1_p_top.png'},
		{name:'hel1_s_ready', url:'img/hel1_s_ready.png'},
		{name:'hel1_s_main', url:'img/hel1_s_main.png'},
		{name:'hel1_s_back', url:'img/hel1_s_back.png'},
		{name:'hel1_s_top', url:'img/hel1_s_top.png'},
		{name:'hel1_d_ready', url:'img/hel1_d_ready.png'},
		{name:'hel1_d_miss', url:'img/hel1_d_miss.png'},
		{name:'hel1_d_dmg', url:'img/hel1_d_dmg.png'},

		{name:'hel2_p_ready', url:'img/hel2_p_ready.png'},
		{name:'hel2_p_main', url:'img/hel2_p_main.png'},
		{name:'hel2_p_back', url:'img/hel2_p_back.png'},
		{name:'hel2_p_top', url:'img/hel2_p_top.png'},
		{name:'hel2_s_ready', url:'img/hel2_s_ready.png'},
		{name:'hel2_s_main', url:'img/hel2_s_main.png'},
		{name:'hel2_s_back', url:'img/hel2_s_back.png'},
		{name:'hel2_s_top', url:'img/hel2_s_top.png'},
		{name:'hel2_d_ready', url:'img/hel2_d_ready.png'},
		{name:'hel2_d_miss', url:'img/hel2_d_miss.png'},
		{name:'hel2_d_dmg', url:'img/hel2_d_dmg.png'},

		{name:'wolf2_p_ready', url:'img/wolf2_p_ready.png'},
		{name:'wolf2_p_main', url:'img/wolf2_p_main.png'},
		{name:'wolf2_p_back', url:'img/wolf2_p_back.png'},
		{name:'wolf2_p_top', url:'img/wolf2_p_top.png'},
		{name:'wolf2_s_ready', url:'img/wolf2_s_ready.png'},
		{name:'wolf2_s_main', url:'img/wolf2_s_main.png'},
		{name:'wolf2_s_back', url:'img/wolf2_s_back.png'},
		{name:'wolf2_s_top', url:'img/wolf2_s_top.png'},
		{name:'wolf2_d_ready', url:'img/wolf2_d_ready.png'},
		{name:'wolf2_d_miss', url:'img/wolf2_d_miss.png'},
		{name:'wolf2_d_dmg', url:'img/wolf2_d_dmg.png'},

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
		{name:'element_storm', url:'img/element_storm.png'},
		{name:'element_wind', url:'img/element_wind.png'},
		{name:'element_toxic', url:'img/element_toxic.png'},
		{name:'element_spirit', url:'img/element_spirit.png'},
		{name:'element_void', url:'img/element_void.png'},

		{name:'fume2_skeleton', url:'img/fume2_ske.json'},
		{name:'fume2_texture_json', url:'img/fume2_tex.json'},
		{name:'fume2_texture_png', url:'img/fume2_tex.png'},

		{name:'item_jade_war_paint', url:'img/item_jade_war_paint.png'},
		{name:'item_crimson_vine', url:'img/item_crimson_vine.png'},
		
		{name:'gorilla3_skeleton', url:'img/gorilla3_ske.json'},
		{name:'gorilla3_texture_json', url:'img/gorilla3_tex.json'},
		{name:'gorilla3_texture_png', url:'img/gorilla3_tex.png'},
		{name:'toad1_skeleton', url:'img/toad1_ske.json'},
		{name:'toad1_texture_json', url:'img/toad1_tex.json'},
		{name:'toad1_texture_png', url:'img/toad1_tex.png'},
		{name:'toad3_skeleton', url:'img/toad3_ske.json'},
		{name:'toad3_texture_json', url:'img/toad3_tex.json'},
		{name:'toad3_texture_png', url:'img/toad3_tex.png'},
		{name:'raccoon3_skeleton', url:'img/raccoon3_ske.json'},
		{name:'raccoon3_texture_json', url:'img/raccoon3_tex.json'},
		{name:'raccoon3_texture_png', url:'img/raccoon3_tex.png'},
		{name:'goat2_1_skeleton', url:'img/goat2_1_ske.json'},
		{name:'goat2_1_texture_json', url:'img/goat2_1_tex.json'},
		{name:'goat2_1_texture_png', url:'img/goat2_1_tex.png'},
		{name:'goat2_2_skeleton', url:'img/goat2_2_ske.json'},
		{name:'goat2_2_texture_json', url:'img/goat2_2_tex.json'},
		{name:'goat2_2_texture_png', url:'img/goat2_2_tex.png'},
		{name:'wolf2_skeleton', url:'img/wolf2_ske.json'},
		{name:'wolf2_texture_json', url:'img/wolf2_tex.json'},
		{name:'wolf2_texture_png', url:'img/wolf2_tex.png'},
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

  loadText.text = "Loading..." + Math.floor(loader.progress) + "%";
  
  //If you gave your files names as the first argument 
  //of the `add` method, you can access them like this
  //console.log("loading: " + resource.name);
}
/*
*	Declare  variables
*/
const skillList = resources["js/skill.json"];
const elementList = resources["js/element.json"];
const creatureList = resources["js/creature.json"];
const itemList = resources["js/item.json"];

let state, onScreenStats, consoleScreen, turnText;

var styleFontFamily = 'Arvo';

const gameScene = new PIXI.Container();

const spriteHolder = new PIXI.Container();		
	const heroSprites = new PIXI.Container();			//Hero stage
	const enemySprites = new PIXI.Container();			//Enemy stage
const interfaceHeroHealth = new PIXI.Container();				//Hero HP
const interfaceEnemyHealth = new PIXI.Container();				//Enemy HP
const interfaceHeroFloatingInfo = new PIXI.Container();				//Hero damage UI
const interfaceEnemyFloatingInfo = new PIXI.Container();				//Enemy damage UI
const interfaceAdditional = new PIXI.Container();	//Additional actions
const interfaceHolder = new PIXI.Container();

const actionContainer = new PIXI.Container();
const stageContainer = new PIXI.Container();

const creatureInfo = new PIXI.Container();

var backgroundImage, actionLines, actionBlack;
var btnAdditional, btnSettings, textureAdditional, textureSettings;
var textureAdditionalCancel, textureAdditionalMove, textureAdditionalItem, textureAdditionalSkip;
var btnAdditionalCancel, btnAdditionalMove, btnAdditionalItem, btnAdditionalSkip;

var creatureInfoBG;
const blurFilterInfo = new PIXI.filters.BlurFilter();
const creatureInfoSprite = new PIXI.Container();

const infoBtnArray = [];	

//Interface spacing variables
var healthMargin = 20;
var margin = 50;
var skillMargin = 10;
var targetTextFontSize = 26;
var skillNameFontSize = 28;
var skillSelectPadding = 5;
var resizeWidth = 0;
var hazardSize = 0.5;
var turnNumber = 0;
var spriteScale = 0;
var userInput = false;

//Selected element tracker
var selectedVita;
var selectedSkill = -1;
var selectedHP;

//Animation speed
var anim1 = 0.5;
var anim2 = 1.5;

// var db = firebase.firestore();

const factory = dragonBones.PixiFactory.factory;

const heroArray = [];					//Array of hero vitas
const enemyArray = [];					//Array of enemy vitas
const additionalArray = [];				//Array of additional menu buttons

const heroHazardSprite = [];
const enemyHazardSprite = [];

const fieldHeroHazard = [];
const fieldEnemyHazard = [];

const heroHazardContainer = new PIXI.Container();
const enemyHazardContainer = new PIXI.Container();

var spriteResizeXPosition = [];
var heroHealthXPosition = [];

var turnArray = [];					//Array for turn order
// var movedCreature = [];

var validSkillObjectArray = [];			//Array of valid skill targets
var validMoveObjectArray = [];			//Array of vaild move targ

const skillContainerArray = [];			//Array of skill containers

const hero = [];
hero[0] = {
	id: 6, level: 51, 
	skill1: 4, skill2: 1, skill3: 3, skill4: 2,
	statDODG: 0, statHP: 0, statPATK: 0, statPDEF: 0, statSATK: 150, statSDEF: 0, statSPD: 0,
	hero: true
};
hero[1] = {
	id: 12, level: 47, 
	skill1: 1, skill2: 10, skill3: 22, skill4: 3,
	statDODG: 95, statHP: 0, statPATK: 0, statPDEF: 21, statSATK: 0, statSDEF: 25, statSPD: 0,
	hero: true
};
hero[2] = {
	id: 11, level: 51, 
	skill1: 17, skill2: 14, skill3: 5, skill4: 12,
	statDODG: 2, statHP: 0, statPATK: 0, statPDEF: 0, statSATK: 0, statSDEF: 0, statSPD: 148,
	hero: true
};
// hero[3] = {
// 	id: 11, level: 47, 
// 	skill1: 4, skill2: 0, skill3: 6, skill4: 1,
// 	statDODG: 20, statHP: 35, statPATK: 0, statPDEF: 3, statSATK: 40, statSDEF: 20, statSPD: 19
// };

const enemy = [];

enemy[0] = {
	id: 8, level: 46, 
	skill1: 4, skill2: 10, skill3: 11, skill4: 2,
	statDODG: 10, statHP: 0, statPATK: 0, statPDEF: 0, statSATK: 0, statSDEF: 120, statSPD: 0,
	hero: false
};
enemy[1] = {
	id: 5, level: 49, 
	skill1: 4, skill2: 6, skill3: 1, skill4: 2,
	statDODG: 70, statHP: 12, statPATK: 0, statPDEF: 0, statSATK: 0, statSDEF: 0, statSPD: 60,
	hero: false
};
enemy[2] = {
	id: 13, level: 45, 
	skill1: 4, skill2: 1, skill3: 5, skill4: 2,
	statDODG: 0, statHP: 0, statPATK: 0, statPDEF: 85, statSATK: 40, statSDEF: 0, statSPD: 0,
	hero: false
};
// enemy[3] = {
// 	id: 11, level: 45, 
// 	skill1: 4, skill2: 5, skill3: 6, skill4: 1,
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
	loadText.destroy();
	consolePrint("SETUP");
	// app.stage.addChild(spriteHolder);
	backgroundImage = new PIXI.Sprite.from('img/bg3.png');
	backgroundImage.anchor.set(0.5);
	spriteHolder.addChild(backgroundImage);

	textureSettings = PIXI.Texture.from('img/leper.ability.five.png');
	textureAdditional = PIXI.Texture.from('img/additional.png');	
	textureAdditionalCancel = PIXI.Texture.from('img/additional_cancel.png');
	textureAdditionalMove = PIXI.Texture.from('img/ability_move.png');
	textureAdditionalItem = PIXI.Texture.from('img/additional_item.png');
	textureAdditionalSkip = PIXI.Texture.from('img/additional_skip.png');

	// const turnStyle = new PIXI.TextStyle({
 //        fontFamily: 'Arvo',
 //        fontSize: 50,
 //        fontWeight: 700,
	// 	fill: '#D80000',	
	// 	stroke: '#222222',
 //   		strokeThickness: 10,
 //    });

    turnText = new Text(turnNumber, {fontFamily : styleFontFamily, fontSize: 36, fill : 0xfefefe});
    turnText.anchor.set(0.5, 0);

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
// 				], skill:[
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
			], skill:[
				item.skill1,
				item.skill2,
				item.skill3,
				item.skill4
			], hero: item.hero
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
			], skill:[ 
				item.skill1,
				item.skill2,
				item.skill3,
				item.skill4
			], hero: item.hero
		});
		enemyArray.push(newCreature);
	});

	enemyArray.forEach(setPos);
	enemyArray.forEach(function (item, index){
		createSprite(-1, item, index)	
	});

	spriteHolder.addChild(heroSprites);
	spriteHolder.addChild(enemySprites);
	stageContainer.addChild(spriteHolder);

	// PIXI.settings.ROUND_PIXELS = true;
	// rectTemp.beginFill(0xccffcc).drawRect(-50, -50, 100, 100);
	// rectTemp.alpha = 0.1;
	// app.stage.add(rectTemp);

// 	rectHero.beginFill(0xaec6cf).drawRect(0, 0, -200, 100);
// 	rectHero.x = 0;
// 	rectHero.y = 0;
// 	interfaceHeroHealth.addChild(rectHero);
	
// 	rectEnemy.beginFill(0xff6961).drawRect(0, 0, 200, 100);
// 	rectEnemy.x = 0;
// 	rectEnemy.y = 0;
// 	interfaceEnemyHealth.addChild(rectEnemy);

	actionBlack = new PIXI.Graphics();
	actionBlack.beginFill(0x000000);
	actionBlack.drawRect(-25, -25, app.screen.width+50, app.screen.height+50);
	actionBlack.endFill();
	actionBlack.alpha = 0;

	actionBlackTween = new TimelineMax({paused: true});
	actionBlackTween.to(actionBlack, 0.167, {alpha:0.75});
	actionBlackTween.to(actionBlack, 0.1, {delay:1.75, alpha:0});

	stageContainer.addChild(actionBlack);
	stageContainer.actionBlackTween = actionBlackTween;

	actionLines = new PIXI.Sprite.from("img/actionLines.png");
	actionLines.anchor.set(0.5);
	actionLines.visible = false;
	stageContainer.addChild(actionLines);
	// actionContainer.actionLines = actionLines
	stageContainer.addChild(actionContainer);
	
	interfaceHeroHealth.x = app.screen.width/2;
	interfaceHeroHealth.y = 10;
	interfaceEnemyHealth.x = app.screen.width/2;
	interfaceEnemyHealth.y = 10;

	interfaceHolder.addChild(interfaceHeroHealth);
	interfaceHolder.addChild(interfaceEnemyHealth);

	// for(var i = 0; i < 8; i++){
	// 	factory.parseDragonBonesData(resources['fume2_skeleton'].data);
	// 	factory.parseTextureAtlasData(resources['fume2_texture_json'].data, resources['fume2_texture_png'].texture);

	// 	// const hazardSprite = factory.buildArmatureDisplay('fume2', 'fume2');
	// 	// hazardSprite.animation.gotoAndPlayByFrame('fume2', Math.floor(Math.random() * 45) + 1);
	// 	// hazardSprite.visible = false;
	// 	// hazardSprite.x = 100*i;
	// 	const hazardSprite = new PIXI.Sprite(resources.hazard_lit.texture);
	// 	hazardSprite.anchor.set(0.5,1);
	// 	// const hazardSprite2 = new PIXI.Sprite(resources.hazard_lit.texture);
	// 	// hazardSprite2.anchor.set(0.5,1);
	// 	if(i<4){
	// 		fieldHeroHazard.push([i+1,1,10,5]);
	// 		heroHazardSprite.push(hazardSprite);
	// 		heroHazardContainer.addChild(hazardSprite);
	// 	}else{
	// 		fieldEnemyHazard.push([i+1-4,1,10,5]);
	// 		enemyHazardSprite.push(hazardSprite);
	// 		enemyHazardContainer.addChild(hazardSprite);
	// 	}
	// }
	spriteHolder.addChild(heroHazardContainer);
	spriteHolder.addChild(enemyHazardContainer);

	//Create initial skill buttons
	for(var i = 0; i < 4; i++){
// 		console.log(heroArray[1].skill[i]);
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
		skillContainer.identifier = [i , heroArray[1].skill[i], 1];
		
		let skillName = new Text(skillList.data.skill[heroArray[1].skill[i]].name, {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe});
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
		
		//Skill position and target markers
		const markerContainer = new PIXI.Container();
		var w = 12.728;	
		const markerPositionArray = [];
		const markerPositionContainer = new PIXI.Container();
		const markerTargetArray = [];
		const markerTargetContainer = new PIXI.Container();
		const markerTargetTeamArray = [];
		const markerTargetTeamContainer = new PIXI.Container();
		
		for (var j = 0; j < 3; j++){
			for (var k = 0; k < 4; k++){
				let defaultMarker = new PIXI.Graphics();
				defaultMarker.beginFill(0x636363).drawRect(0, -w, w, w);
				defaultMarker.x = 25 * k;
				defaultMarker.pivot.set(0.5);
				defaultMarker.angle = 45;

				let posMarker = new PIXI.Graphics();
				let posMarker2 = new PIXI.Graphics();
				if(j == 0)			posMarker.beginFill(0x66cc66).drawRect(0, -w, w, w);
				else if(j == 1){
					posMarker.beginFill(0xFF6961).drawRect(0, -w, w, w);
					posMarker2.beginFill(0x66cc66).drawRect(0, -w, w, w);
				}	

				posMarker.x = 25 * k;
				posMarker.pivot.set(0.5);
				posMarker.angle = 45;
				posMarker2.x = 25 * k;
				posMarker2.pivot.set(0.5);
				posMarker2.angle = 45;

				if(j == 0){
					markerPositionArray.push(posMarker);
					markerPositionContainer.addChild(defaultMarker);
					markerPositionContainer.addChild(posMarker);
				}else if(j == 1){
					markerTargetArray.push(posMarker);
					markerTargetContainer.addChild(defaultMarker);
					markerTargetContainer.addChild(posMarker);

					markerTargetTeamArray.push(posMarker2);
					markerTargetTeamContainer.addChild(posMarker2);
				}
			}
		}
		
		//Filler targets for proper resize and spacing
		const markerSpacerContainer = new PIXI.Container();
		for (var j = 0; j < 4; j++){
			let posMarker = new PIXI.Graphics();				
			posMarker.beginFill(0x222222).drawRect(0, -w, w, w);
			posMarker.x = 25 * j;
			posMarker.pivot.set(0.5);
			posMarker.angle = 45;
			markerSpacerContainer.addChild(posMarker);
		}

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
		markerTargetTeamContainer.x = 123;
		markerSpacerContainer.x = 123;

		markerTargetSeveralContainer.x = 135;		

		markerContainer.addChild(markerSpacerContainer);
		markerContainer.addChild(markerPositionContainer);
		markerContainer.addChild(markerTargetContainer);
		markerContainer.addChild(markerTargetTeamContainer);
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
		skillContainer.markerTargetTeamArray = markerTargetTeamArray;
		skillContainer.markerTargetTeamContainer = markerTargetTeamContainer;
		skillContainer.markerTargetTeamContainer.visible = false;
		
		let targetText = new Text("1►", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xFF6961});
		targetText.anchor.set(0, 0.5);
		skillContainer.addChild(targetText);
		skillContainer.targetText = targetText;
		skillContainer.targetText.visible = false;
		
		var skillElement;
		switch(skillList.data.skill[heroArray[1].skill[i]].element){
			case 1:
				skillElement = new PIXI.Sprite(resources.element_flora.texture);
				break;
			case 2:
				skillElement = new PIXI.Sprite(resources.element_water.texture);
				break;
			case 3:
				skillElement = new PIXI.Sprite(resources.element_fire.texture);
				break;
			case 4:
				skillElement = new PIXI.Sprite(resources.element_earth.texture);
				break;
			case 5:
				skillElement = new PIXI.Sprite(resources.element_storm.texture);
				break;
			case 6:
				skillElement = new PIXI.Sprite(resources.element_wind.texture);
				break;
			case 7:
				skillElement = new PIXI.Sprite(resources.element_toxic.texture);
				break;
			case 8:
				skillElement = new PIXI.Sprite(resources.element_spirit.texture);
				break;
			case 9:
				skillElement = new PIXI.Sprite(resources.element_void.texture);
				break;
			default:
				skillElement = new PIXI.Sprite(resources.element_flora.texture);
				break;
		}
		skillElement.anchor.set(0, 0.5);
		skillContainer.addChild(skillElement);
		skillContainer.skillElement = skillElement;
		
		skillContainer.addChild(skillDisable);
		skillContainer.disable = skillDisable;
		
		skillContainerArray.push(skillContainer);
		interfaceHolder.addChild(skillContainer);
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
// 				], skill:[
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
	//Console print setup phase
	consoleScreen.text = "Setup" + consoleScreen.text;
	
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
        .on('pointerdown', onMenuDown);
    interfaceHolder.addChild(btnSettings);
	
	btnAdditional = new PIXI.Sprite(textureAdditional);				//Button additional
	btnAdditional.anchor.set(0,1);
	btnAdditional.buttonMode = true;
    	btnAdditional.interactive = true;
	btnAdditional
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalDown);
    interfaceHolder.addChild(btnAdditional);
	
	btnAdditionalCancel = new PIXI.Sprite(textureAdditionalCancel);	//Button additional cancel
	btnAdditionalCancel.anchor.set(0,1);
	btnAdditionalCancel.buttonMode = true;
    	btnAdditionalCancel.interactive = true;
	btnAdditionalCancel
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalCancelDown);	
	interfaceAdditional.addChild(btnAdditionalCancel);
	additionalArray.push(btnAdditionalCancel);
	
	btnAdditionalItem = new PIXI.Sprite(textureAdditionalItem);		//Button additional item
	btnAdditionalItem.anchor.set(0,1);
	btnAdditionalItem.buttonMode = true;
    	btnAdditionalItem.interactive = true;
	btnAdditionalItem
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalItemDown);
	interfaceAdditional.addChild(btnAdditionalItem);
	additionalArray.push(btnAdditionalItem);
	
	btnAdditionalMove = new PIXI.Sprite(textureAdditionalMove);		//Button additional move
	btnAdditionalMove.anchor.set(0,1);
	btnAdditionalMove.buttonMode = true;
    	btnAdditionalMove.interactive = true;
	btnAdditionalMove
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalMoveDown);
	interfaceAdditional.addChild(btnAdditionalMove);
	additionalArray.push(btnAdditionalMove);
	
	btnAdditionalSkip = new PIXI.Sprite(textureAdditionalSkip);		//Button additional skip
	btnAdditionalSkip.anchor.set(0,1);
	btnAdditionalSkip.buttonMode = true;
    	btnAdditionalSkip.interactive = true;
	btnAdditionalSkip
        // set the mousedown and touchstart callback...
        .on('pointerdown', onAdditionalSkipDown);
	interfaceAdditional.addChild(btnAdditionalSkip);
	additionalArray.push(btnAdditionalSkip);

	interfaceAdditional.visible = false;
	interfaceHolder.addChild(interfaceAdditional);
	
	//Add containers to stage
	app.stage.addChild(gameScene);
	gameScene.addChild(stageContainer);
	gameScene.addChild(turnText);
	gameScene.addChild(interfaceHeroFloatingInfo);				//Hero damage UI
	gameScene.addChild(interfaceEnemyFloatingInfo);				//Enemy damage UI

	gameScene.addChild(interfaceHolder);
	
	app.stage.addChild(onScreenStats);
	app.stage.addChild(consoleScreen);

	creatureInfoBG = new PIXI.Graphics();
	creatureInfoBG.beginFill(0x222222);
	creatureInfoBG.drawRect(0, 0, app.screen.width+50, app.screen.height+50);
	creatureInfoBG.endFill();
	creatureInfoBG.alpha = 0.9;
	creatureInfo.addChild(creatureInfoBG);

	const creatureInfoMain = new PIXI.Container();
	const creatureInfoStatus = new PIXI.Container();
	creatureInfo.addChild(creatureInfoStatus);
	creatureInfo.status = creatureInfoStatus;
	const creatureInfoSkill = new PIXI.Container();
	creatureInfo.addChild(creatureInfoSkill);
	creatureInfo.skill = creatureInfoSkill;
	const creatureInfoItem = new PIXI.Container();
	creatureInfo.addChild(creatureInfoItem);
	creatureInfo.item = creatureInfoItem;
	const creatureInfoStat = new PIXI.Container();
	creatureInfo.addChild(creatureInfoStat);
	creatureInfo.stat = creatureInfoStat;

	blurFilterInfo.blur = 0;
	turnText.filters = [blurFilterInfo];
	stageContainer.filters = [blurFilterInfo];
	interfaceHolder.filters = [blurFilterInfo];

	var info_main_text = [];
	var info_skill_text = [];
	var info_item_text = [];
	var info_stat_text = [];

	let info_main_name1 = new Text("Species:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
	info_main_name1.anchor.set(1,0);
	info_main_text.push(info_main_name1);
	creatureInfoMain.addChild(info_main_name1);
	let info_main_name2 = new Text("Name:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left'});
	info_main_text.push(info_main_name2);
	creatureInfoMain.addChild(info_main_name2);
	let info_main_level1 = new Text("Level:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
	info_main_level1.anchor.set(1,0);
	info_main_text.push(info_main_level1);
	creatureInfoMain.addChild(info_main_level1);
	let info_main_level2 = new Text("Name:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left'});
	info_main_text.push(info_main_level2);
	creatureInfoMain.addChild(info_main_level2);
	// let info_main_species1 = new Text("Species:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
	// info_main_species1.anchor.set(1,0);
	// info_main_text.push(info_main_species1);
	// creatureInfoMain.addChild(info_main_species1);
	// let info_main_species2 = new Text("Name:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left'});
	// info_main_text.push(info_main_species2);
	// creatureInfoMain.addChild(info_main_species2);
	let info_main_element1 = new Text("Element:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
	info_main_element1.anchor.set(1,0);
	info_main_text.push(info_main_element1);
	creatureInfoMain.addChild(info_main_element1);

	var info_main_element = [];
	let info_main_element2 = new Text("Name:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left'});
	// info_main_element2.anchor.set(0,0.5);
	info_main_element.push(info_main_element2);
	creatureInfoMain.addChild(info_main_element2);
	let info_main_element3 = new Text("Name:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left'});
	// info_main_element3.anchor.set(0,0.5);
	info_main_element.push(info_main_element3);
	creatureInfoMain.addChild(info_main_element3);

	creatureInfo.info_main_text = info_main_text;
	creatureInfo.info_main_element = info_main_element;
	creatureInfo.addChild(creatureInfoMain);
	creatureInfo.main = creatureInfoMain;

	var info_main_elementIcon = [];
	var info_main_elementIcon1 = new PIXI.Sprite(resources.element_flora.texture);
	info_main_elementIcon1.scale.set(0.5);
	info_main_elementIcon1.anchor.set(0,0.5);
	creatureInfoMain.addChild(info_main_elementIcon1);
	info_main_elementIcon.push(info_main_elementIcon1);
	var info_main_elementIcon2 = new PIXI.Sprite(resources.element_flora.texture);
	info_main_elementIcon2.scale.set(0.5);
	info_main_elementIcon2.anchor.set(0,0.5);
	creatureInfoMain.addChild(info_main_elementIcon2);
	info_main_elementIcon.push(info_main_elementIcon2);

	creatureInfo.info_main_elementIcon = info_main_elementIcon;

	var info_main_exp1 = new Text("Experience:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
	info_main_exp1.anchor.set(1,0);
	info_main_text.push(info_main_exp1);
	creatureInfoMain.addChild(info_main_exp1);
	var info_main_exp2 = new Text("Experience:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left'});
	info_main_text.push(info_main_exp2);
	creatureInfoMain.addChild(info_main_exp2);
	var info_main_expBar = [];
	let expBarGained = new PIXI.Graphics();
	expBarGained.beginFill(0x66cc66).drawRect(0, 0, 100, 50);
	expBarGained.x = 0;
	expBarGained.y = 0;
	info_main_expBar.push(expBarGained);
	let expBarOverall = new PIXI.Graphics();
	expBarOverall.beginFill(0x636363).drawRect(0, 0, 500, 50);
	expBarOverall.x = 0;
	expBarOverall.y = 0;
	info_main_expBar.push(expBarOverall);
	creatureInfoMain.addChild(expBarOverall);
	creatureInfoMain.addChild(expBarGained);
	creatureInfo.info_main_expBar = info_main_expBar;

	let info_main_desc1 = new Text("Description:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
	info_main_desc1.anchor.set(1,0);
	info_main_text.push(info_main_desc1);
	creatureInfoMain.addChild(info_main_desc1);
	let info_main_desc2 = new Text("Name:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left', wordWrap:true, wordWrapWidth:500});
	info_main_text.push(info_main_desc2);
	creatureInfoMain.addChild(info_main_desc2);

	var btnStatusUp = new PIXI.Sprite(resources.arrow_up_d.texture);				//Button additional
	btnStatusUp.anchor.set(0,0.5);
	btnStatusUp.buttonMode = true;
    	btnStatusUp.interactive = false;
	btnStatusUp
        // set the mousedown and touchstart callback...
        .on('pointerdown', onBtnStatusUp);
	creatureInfo.status.addChild(btnStatusUp);
	creatureInfo.status.arrowUp = btnStatusUp;

	var btnStatusDown = new PIXI.Sprite(resources.arrow_down_n.texture);				//Button additional
	btnStatusDown.anchor.set(0,0.5);
	btnStatusDown.buttonMode = true;
    	btnStatusDown.interactive = true;
	btnStatusDown
        // set the mousedown and touchstart callback...
        .on('pointerdown', onBtnStatusDown);
	creatureInfo.status.addChild(btnStatusDown);
	creatureInfo.status.arrowDown = btnStatusDown;

	var info_skill_power1 = new Text("Power:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
	info_skill_power1.anchor.set(1,0);
	info_skill_text.push(info_skill_power1);
	creatureInfoSkill.addChild(info_skill_power1);
	var info_skill_power2 = new Text("99", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left'});
	info_skill_text.push(info_skill_power2);
	creatureInfoSkill.addChild(info_skill_power2);
	var info_skill_acc1 = new Text("Accuracy:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
	info_skill_acc1.anchor.set(1,0);
	info_skill_text.push(info_skill_acc1);
	creatureInfoSkill.addChild(info_skill_acc1);
	var info_skill_acc2 = new Text("99", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left'});
	info_skill_text.push(info_skill_acc2);
	creatureInfoSkill.addChild(info_skill_acc2);
	var info_skill_type1 = new Text("Type:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
	info_skill_type1.anchor.set(1,0);
	info_skill_text.push(info_skill_type1);
	creatureInfoSkill.addChild(info_skill_type1);
	var info_skill_type2 = new Text("99", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left'});
	info_skill_text.push(info_skill_type2);
	creatureInfoSkill.addChild(info_skill_type2);
	var info_skill_des1 = new Text("Description:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
	info_skill_des1.anchor.set(1,0);
	info_skill_text.push(info_skill_des1);
	creatureInfoSkill.addChild(info_skill_des1);
	var info_skill_des2 = new Text("99", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left', wordWrap:true, wordWrapWidth:500});
	info_skill_text.push(info_skill_des2);
	creatureInfoSkill.addChild(info_skill_des2);

	creatureInfo.info_skill_text = info_skill_text;

	var info_item_name1 = new Text("Name:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
	info_item_name1.anchor.set(1,0);
	info_item_text.push(info_item_name1);
	creatureInfoItem.addChild(info_item_name1);
	var info_item_name2 = new Text("99", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left'});
	info_item_text.push(info_item_name2);
	creatureInfoItem.addChild(info_item_name2);
	var info_item_type1 = new Text("Type:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
	info_item_type1.anchor.set(1,0);
	info_item_text.push(info_item_type1);
	creatureInfoItem.addChild(info_item_type1);
	var info_item_type2 = new Text("99", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left'});
	info_item_text.push(info_item_type2);
	creatureInfoItem.addChild(info_item_type2);
	var info_item_cat1 = new Text("Category:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
	info_item_cat1.anchor.set(1,0);
	info_item_text.push(info_item_cat1);
	creatureInfoItem.addChild(info_item_cat1);
	var info_item_cat2 = new Text("99", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left'});
	info_item_text.push(info_item_cat2);
	creatureInfoItem.addChild(info_item_cat2);
	var info_item_des1 = new Text("Description:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
	info_item_des1.anchor.set(1,0);
	info_item_text.push(info_item_des1);
	creatureInfoItem.addChild(info_item_des1);
	var info_item_des2 = new Text("99", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left', wordWrap:true, wordWrapWidth:500});
	info_item_text.push(info_item_des2);
	creatureInfoItem.addChild(info_item_des2);

	creatureInfo.info_item_text = info_item_text;

	for(var i = 0; i < 24; i++){
		var info_stat = new Text("Name:", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
		if(i%3 == 0 && i != 0){
			info_stat.anchor.set(1,0.5);
		}else{
			info_stat.anchor.set(0,0.5);
		}
		info_stat_text.push(info_stat);
		creatureInfoStat.addChild(info_stat);
	}

	var info_stat_increase = [];
	var info_stat_maxed = [];
	for(var i = 0; i < 7; i++){
		const creatureStatIncrease = new PIXI.Container();
		creatureStatIncrease.identifier = i;
		var info_stat_increaseIcon = new PIXI.Sprite(resources.icon_plus.texture);
		info_stat_increaseIcon.width = app.screen.height/25;
		info_stat_increaseIcon.height = app.screen.height/25;
		// info_stat_increaseIcon.x = -info_stat_increaseIcon.width;
		info_stat_increaseIcon.anchor.set(0,0.5);
		creatureStatIncrease.addChild(info_stat_increaseIcon);
		var info_stat_increaseText = new Text("Increase", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
		var info_stat_maxedText = new Text("Maxed", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xFFD600, align : 'right'});

		info_stat_increaseText.x = info_stat_increaseIcon.width + app.screen.width/100;
		info_stat_maxedText.x = info_stat_increaseIcon.width + app.screen.width/100;
		info_stat_increaseText.anchor.set(0,0.5);
		info_stat_maxedText.anchor.set(0,0.5);
		// info_item_text.push(info_stat_increaseIcon);
		creatureStatIncrease.addChild(info_stat_increaseText);
		// info_stat_increaseIcon.y = info_stat_increaseText.height/2;
		creatureStatIncrease.buttonMode = true;
	    	creatureStatIncrease.interactive = true;
		creatureStatIncrease
	        // set the mousedown and touchstart callback...
	        .on('pointerdown', onBtnStatUp);
	    creatureStatIncrease.increaseText = info_stat_increaseText;
	    creatureStatIncrease.increaseIcon = info_stat_increaseIcon;
	    info_stat_increase.push(creatureStatIncrease);
	    info_stat_maxed.push(info_stat_maxedText);
		creatureInfoStat.addChild(creatureStatIncrease);
		creatureInfoStat.addChild(info_stat_maxedText);
	}

	creatureInfo.info_stat_increase = info_stat_increase;
	creatureInfo.info_stat_maxed = info_stat_maxed;
	// info_main_elementIcon.push(info_stat_increaseIcon);

	creatureInfo.info_stat_text = info_stat_text;

	var info_text = ["General", "Stats", "Status", "Skills", "Items", "Close"];

	for(var i = 0; i < 6; i++){
// 		console.log(heroArray[1].skill[i]);
		let infoRect = new PIXI.Graphics();
		let infoSelectFill = new PIXI.Graphics();
		let infoSelectStroke = new PIXI.Graphics();
		
		const infoBtn = new PIXI.Container();
		const infoBtnSelect = new PIXI.Container();
		
		// make the button interactive...
		infoBtn.buttonMode = true;
		infoBtn.interactive = true;
		infoBtn
		// set the mousedown and touchstart callback...
		.on('pointerdown', onInfoDown);
		
		infoBtn.identifier = [i];
		let infoBtnText = new Text(info_text[i], {fontFamily : styleFontFamily, fontSize: 36, fill : 0xfefefe, align : 'center'});
		infoBtnText.anchor.set(0.5, 0.5);
		
		infoRect.beginFill(0x636363).drawRect(0, 0, 50, 50);
		infoRect.x = 0;
		infoRect.y = 0;
		
		infoBtn.addChild(infoRect);
		infoBtn.rect = infoRect;
		
		infoSelectStroke.beginFill(0xFFD600).drawRect(0, 0, 50, 50);
		infoSelectStroke.x = 0;
		infoSelectStroke.y = 0;		
		infoSelectFill.beginFill(0x636363).drawRect(0, 0, 50, 50);
		infoSelectFill.x = 0;
		infoSelectFill.y = 0;
		
		infoBtnSelect.addChild(infoSelectStroke);
		infoBtnSelect.addChild(infoSelectFill);
		infoBtnSelect.stroke = infoSelectStroke;
		infoBtnSelect.fill = infoSelectFill;
				
		infoBtn.addChild(infoBtnSelect);
		infoBtn.selected = infoBtnSelect;
		
		infoBtn.selected.visible = false;
		
		infoBtn.addChild(infoBtnText);
		infoBtn.infoBtnText = infoBtnText;
		
		infoBtnArray.push(infoBtn);
		creatureInfo.addChild(infoBtn);
	}

	creatureInfo.visible = false;
	gameScene.addChild(creatureInfo);

	//Resize the screen
	window.addEventListener('resize', resize);

	resize();

	state = play;
	
	app.ticker.add(delta => gameLoop(delta));

	calculateTurnOrder();
}

function gameLoop(delta){
	state(delta);
}

// let phase = 0.0;
function play(delta){
	// phase += delta / 25.0;
	onScreenStats.text = "ResolutionTest: " + app.renderer.resolution +
		"\nInner Width: " + window.innerWidth + 
		"\nInner Height: " + window.innerHeight +
		"\nAppScreen Width: " + app.screen.width + 
		"\nAppScreen Height: " + app.screen.height;
	// turnText.text = turnNumber;
}

function consolePrint(fromText){
	console.log(
		fromText + 
		"\nResolution: " + app.renderer.resolution +
		"\nRendererWidth: " + app.renderer.width + 
		"\nRendererHeight: " + app.renderer.height
		);
}

// Listen for animate update
// app.ticker.add((delta) => {
// 	// rotate the container!
// 	// use delta to create frame-independent transform	
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

function statusEffectSprite(identifier){
	let statusEffectIcon;
	switch(identifier){
		case 1:
			statusEffectIcon = new PIXI.Sprite(resources.status_bleed.texture);
			break;
		case 2:
			statusEffectIcon = new PIXI.Sprite(resources.status_buff.texture);
			break;
		case 3:
			statusEffectIcon = new PIXI.Sprite(resources.status_burned.texture);
			break;
		case 4:
			statusEffectIcon = new PIXI.Sprite(resources.status_debuff.texture);
			break;
		case 5:
			statusEffectIcon = new PIXI.Sprite(resources.status_depressed.texture);
			break;
		case 6:
			statusEffectIcon = new PIXI.Sprite(resources.status_guard.texture);
			break;
		case 7:
			statusEffectIcon = new PIXI.Sprite(resources.status_immune.texture);
			break;
		case 8:
			statusEffectIcon = new PIXI.Sprite(resources.status_paralyzed.texture);
			break;
		case 9:
			statusEffectIcon = new PIXI.Sprite(resources.status_poisoned.texture);
			break;
		case 10:
			statusEffectIcon = new PIXI.Sprite(resources.status_recover.texture);
			break;
		case 11:
			statusEffectIcon = new PIXI.Sprite(resources.status_secured.texture);
			break;
		case 12:
			statusEffectIcon = new PIXI.Sprite(resources.status_silenced.texture);
			break;
		case 13:
			statusEffectIcon = new PIXI.Sprite(resources.status_stunned.texture);
			break;
		case 14:
			statusEffectIcon = new PIXI.Sprite(resources.status_critical.texture);
			break;
		default:
			statusEffectIcon = new PIXI.Sprite(resources.status_buff.texture);
			
	}
	return statusEffectIcon;
}

function createSprite(direction, item, index){
	console.log("ID: " + item.id + " |Size: " + item.size + " |Code: " + item.code + " |Position: " + item.pos + " |HP: " + item.hp + "/" + item.EHP + "|Vital: " + item.critDmg);
			
	factory.parseDragonBonesData(resources[item.code + '_skeleton'].data);
	factory.parseTextureAtlasData(resources[item.code + '_texture_json'].data, resources[item.code + '_texture_png'].texture);

	const armatureHero = factory.buildArmatureDisplay(item.code, item.code);
	armatureHero.animation.gotoAndPlayByFrame('idle', Math.floor(Math.random() * item.frames) + 1);
//     		armatureHero.animation.play('idle');

	const creatureContainer = new PIXI.Container();	
	creatureContainer.addChild(armatureHero);

	creatureContainer.identifier = [direction, index, item.pos];
	creatureContainer.object = item;
	creatureContainer.buttonMode = true;
	creatureContainer.interactive = true;
	creatureContainer
        // set the mousedown and touchstart callback...
        .on('pointerdown', onCreatureDown);

	const creatureAction = new PIXI.Container();	//container holding all creature action sprites
	// const actionArray = [];
	var sprite_p_ready = new PIXI.Sprite(resources[item.code + '_p_ready'].texture);
	sprite_p_ready.anchor.set(1);
	sprite_p_ready.alpha = 0;
	creatureAction.addChild(sprite_p_ready);

	var sprite_p_back = new PIXI.Sprite(resources[item.code + '_p_back'].texture);
	sprite_p_back.anchor.set(1);
	sprite_p_back.alpha = 0;
	sprite_p_back.visible = false;
	creatureAction.addChild(sprite_p_back);
	creatureAction.fxBack = sprite_p_back;

	var sprite_p_main = new PIXI.Sprite(resources[item.code + '_p_main'].texture);
	sprite_p_main.anchor.set(1);
	sprite_p_main.visible = false;
	creatureAction.addChild(sprite_p_main);

	var sprite_p_top = new PIXI.Sprite(resources[item.code + '_p_top'].texture);
	sprite_p_top.anchor.set(1);
	sprite_p_top.alpha = 0;
	sprite_p_top.visible = false;
	creatureAction.addChild(sprite_p_top);
	creatureAction.fxTop = sprite_p_top;

	var sprite_s_ready = new PIXI.Sprite(resources[item.code + '_s_ready'].texture);
	sprite_s_ready.anchor.set(1);
	sprite_s_ready.alpha = 0;
	creatureAction.addChild(sprite_s_ready);

	var sprite_s_back = new PIXI.Sprite(resources[item.code + '_s_back'].texture);
	sprite_s_back.anchor.set(1);
	sprite_s_back.alpha = 0;
	sprite_s_back.visible = false;
	creatureAction.addChild(sprite_s_back);
	creatureAction.fxBack = sprite_s_back;

	var sprite_s_main = new PIXI.Sprite(resources[item.code + '_s_main'].texture);
	sprite_s_main.anchor.set(1);
	sprite_s_main.visible = false;
	creatureAction.addChild(sprite_s_main);

	var sprite_s_top = new PIXI.Sprite(resources[item.code + '_s_top'].texture);
	sprite_s_top.anchor.set(1);
	sprite_s_top.alpha = 0;
	sprite_s_top.visible = false;
	creatureAction.addChild(sprite_s_top);
	creatureAction.fxTop = sprite_s_top;

	var sprite_d_ready = new PIXI.Sprite(resources[item.code + '_d_ready'].texture);
	sprite_d_ready.anchor.set(1);
	sprite_d_ready.alpha = 0;
	creatureAction.addChild(sprite_d_ready);

	var sprite_d_miss = new PIXI.Sprite(resources[item.code + '_d_miss'].texture);
	sprite_d_miss.anchor.set(1);
	sprite_d_miss.visible = false;
	creatureAction.addChild(sprite_d_miss);
	creatureAction.dMiss = sprite_d_miss;

	var sprite_d_dmg = new PIXI.Sprite(resources[item.code + '_d_dmg'].texture);
	sprite_d_dmg.anchor.set(1);
	sprite_d_dmg.visible = false;
	creatureAction.addChild(sprite_d_dmg);
	creatureAction.dDmg = sprite_d_dmg;

	CustomEase.create("custom", "M0,0 C0,0 0.01158,0.37382 0.02895,0.59744 0.03199,0.63651 0.03945,0.66471 0.05428,0.69882 0.06786,0.73005 0.08443,0.75214 0.10756,0.77829 0.12925,0.80281 0.14837,0.81604 0.17595,0.83638 0.2018,0.85545 0.21847,0.86832 0.24711,0.88122 0.30415,0.90691 0.34361,0.92278 0.40429,0.93921 0.45566,0.95312 0.48924,0.95608 0.54432,0.9617 0.72192,0.97982 1,1 1,1 ");

	anim1 = 0.5;
	anim2 = 1.25;

	// pAtkTween = new TimelineMax({paused: true});
	// pAtkTween.to(sprite_p_ready, 0, {alpha:1});
	// pAtkTween.fromTo(sprite_p_ready, anim1, {x:item.action[0][0], y:item.action[0][1]},{ease:"custom", x:item.action[0][2], y:item.action[0][3], onComplete: function(){
	// 	sprite_p_ready.alpha = 0;
	// 	sprite_p_main.visible = true;
	// 	sprite_p_back.visible = true;
	// 	sprite_p_top.visible = true;
	// 	actionLines.visible = true;
	// }});
	// pAtkTween.to(creatureAction, 0.5, {x:0});

	pReadyTween = new TimelineMax({paused: true});
	pReadyTween.to(sprite_p_ready, 0, {alpha:1});
	pReadyTween.fromTo(sprite_p_ready, anim1, {x:item.action[0][0], y:item.action[0][1]}, {ease:"custom", x:item.action[0][2], y:item.action[0][3], onComplete: function(){
		sprite_p_ready.alpha = 0;
		sprite_p_main.visible = true;
		sprite_p_back.visible = true;
		sprite_p_top.visible = true;
		actionLines.visible = true;
	}});

	pAtkTween = new TimelineMax({paused: true});
	pAtkTween.fromTo(sprite_p_back, anim2, {x:item.action[1][0], y:item.action[1][1]}, {ease:"custom", x:item.action[1][2], y:item.action[1][3]});
	pAtkTween.fromTo(sprite_p_back, 0.3, {alpha:0}, {alpha:1},0);
	pAtkTween.fromTo(sprite_p_back, 0.25, {alpha:1}, {alpha:0},0.73);
	pAtkTween.fromTo(sprite_p_main, anim2, {x:item.action[2][0], y:item.action[2][1]}, {ease:"custom", x:item.action[2][2], y:item.action[2][3]},0);
	pAtkTween.fromTo(sprite_p_top, 0.33, {alpha:0}, {alpha:1},0);
	pAtkTween.fromTo(sprite_p_top, 0.25, {alpha:1}, {alpha:0},1);
	pAtkTween.fromTo(sprite_p_top, anim2, {x:item.action[3][0], y:item.action[3][1]}, {ease:"custom", x:item.action[3][2], y:item.action[3][3], onComplete: function(){
		sprite_p_back.visible = false;
		sprite_p_main.visible = false;
		sprite_p_top.alpha = 0;
		sprite_p_back.alpha = 0;
		sprite_p_top.visible = false;
		creatureAction.visible = false;
		actionLines.visible = false;
		actionContainer.removeChild(creatureAction);
	}},0);

	sReadyTween = new TimelineMax({paused: true});
	sReadyTween.to(sprite_s_ready, 0, {alpha:1});
	sReadyTween.fromTo(sprite_s_ready, anim1, {x:item.action[4][0], y:item.action[4][1]}, {ease:"custom", x:item.action[4][2], y:item.action[4][3], onComplete: function(){
		sprite_s_ready.alpha = 0;
		sprite_s_main.visible = true;
		sprite_s_back.visible = true;
		sprite_s_top.visible = true;
		actionLines.visible = true;
	}});

	sAtkTween = new TimelineMax({paused: true});
	sAtkTween.fromTo(sprite_s_back, anim2, {x:item.action[5][0], y:item.action[5][1]}, {ease:"custom", x:item.action[5][2], y:item.action[5][3]});
	sAtkTween.fromTo(sprite_s_back, 0.3, {alpha:0}, {alpha:1},0);
	sAtkTween.fromTo(sprite_s_back, 0.25, {alpha:1}, {alpha:0},0.73);
	sAtkTween.fromTo(sprite_s_main, anim2, {x:item.action[6][0], y:item.action[6][1]}, {ease:"custom", x:item.action[6][2], y:item.action[6][3]},0);
	sAtkTween.fromTo(sprite_s_top, 0.33, {alpha:0}, {alpha:1},0);
	sAtkTween.fromTo(sprite_s_top, 0.25, {alpha:1}, {alpha:0},1);
	sAtkTween.fromTo(sprite_s_top, anim2, {x:item.action[7][0], y:item.action[7][1]}, {ease:"custom", x:item.action[7][2], y:item.action[7][3], onComplete: function(){
		sprite_s_back.visible = false;
		sprite_s_main.visible = false;
		sprite_s_top.alpha = 0;
		sprite_s_back.alpha = 0;
		sprite_s_top.visible = false;
		creatureAction.visible = false;
		actionLines.visible = false;
		actionContainer.removeChild(creatureAction);
	}},0);

	// pAtkTween = new TimelineMax({paused: true});
	// pAtkTween.to(sprite_p_ready, 0, {alpha:1});
	// pAtkTween.fromTo(sprite_p_ready, anim1, {x:0, y:0},{ease:"custom", x:-40, y:0, onComplete: function(){
	// 	sprite_p_ready.alpha = 0;
	// 	sprite_p_main.visible = true;
	// 	sprite_p_back.visible = true;
	// 	sprite_p_top.visible = true;
	// 	actionLines.visible = true;
	// }});	
	// pAtkTween.fromTo(sprite_p_back, anim2, {x:225, y:0}, {ease:"custom", x:350, y:0});
	// pAtkTween.fromTo(sprite_p_back, 0.33, {alpha:0}, {alpha:1}, anim1);
	// pAtkTween.fromTo(sprite_p_back, 0.25, {alpha:1}, {alpha:0}, anim1+anim2-0.25);
	// pAtkTween.fromTo(sprite_p_main, anim2, {x:375, y:-75}, {ease:"custom", x:750, y:-75}, anim1);
	// pAtkTween.fromTo(sprite_p_top, 0.5, {alpha:0}, {alpha:1}, anim1);
	// pAtkTween.fromTo(sprite_p_top, 0.33, {alpha:1}, {alpha:0}, anim1+anim2-0.33);
	// pAtkTween.fromTo(sprite_p_top, anim2, {x:350, y:-75}, {ease:"custom", x:550, y:-75, onComplete: function(){
	// 	sprite_p_back.visible = false;
	// 	sprite_p_main.visible = false;
	// 	sprite_p_top.alpha = 0;
	// 	sprite_p_back.alpha = 0;
	// 	sprite_p_top.visible = false;
	// 	creatureAction.visible = false;
	// 	actionLines.visible = false;
	// 	actionContainer.removeChild(creatureAction);
	// }},anim1);

	creatureAction.pReadyTween = pReadyTween;
	creatureAction.pAtkTween = pAtkTween;
	creatureAction.sReadyTween = sReadyTween;
	creatureAction.sAtkTween = sAtkTween;

	dReadyTween = new TimelineMax({paused: true});
	dReadyTween.to(sprite_d_ready, 0, {alpha:1});
	// dMissTween.to(creatureAction, 0.5, {x:0});
	dReadyTween.fromTo(sprite_d_ready, anim1, {x:item.action[8][0], y:item.action[8][1]}, {ease:"custom", x:item.action[8][2], y:item.action[8][3], onComplete: function(){
		sprite_d_ready.alpha = 0;
		// sprite_d_miss.visible = true;
		// sprite_d_dmg.visible = true;
	}});
	dMissTween = new TimelineMax({paused: true});
	dMissTween.fromTo(sprite_d_miss, anim2, {x:item.action[9][0], y:item.action[9][1]}, {ease:"custom", x:item.action[9][2], y:item.action[9][3], onComplete: function(){
		sprite_d_miss.visible = false;
		creatureAction.visible = false;
		actionContainer.removeChild(creatureAction);
	}});
	dDmgTween = new TimelineMax({paused: true});
	dDmgTween.fromTo(sprite_d_dmg, anim2, {x:item.action[10][0], y:item.action[10][1]}, {ease:"custom", x:item.action[10][2], y:item.action[10][3], onComplete: function(){
		sprite_d_dmg.visible = false;
		creatureAction.visible = false;
		actionContainer.removeChild(creatureAction);
	}});


	// dMissTween = new TimelineMax({paused: true});
	// dMissTween.to(sprite_d_ready, 0, {alpha:1});
	// dMissTween.fromTo(sprite_d_ready, anim1, {x:0, y:0}, {ease:"custom", x:-10, y:0, onComplete: function(){
	// 	sprite_d_ready.alpha = 0;
	// 	sprite_d_miss.visible = true;
	// }});
	// dMissTween.fromTo(sprite_d_miss, anim2, {x:-200, y:0}, {ease:"custom", x:-250, y:0, onComplete: function(){
	// 	sprite_d_miss.visible = false;
	// 	creatureAction.visible = false;
	// 	actionContainer.removeChild(creatureAction);
	// }});
	creatureAction.dReadyTween = dReadyTween;
	creatureAction.dMissTween = dMissTween;
	creatureAction.dDmgTween = dDmgTween;
	const dmgContainer = new PIXI.Container();
	const dmgPopup = new PIXI.Container();
	const dmgStatus = new PIXI.Container();

	var dmgNumArray = [];
	
	for(var i = 0; i < 5; i++){
		const dmgNumStyle = new PIXI.TextStyle({
	        fontFamily: 'Arvo',
	        fontSize: 50,
	        fontWeight: 700,
			fill: '#D80000',	
			stroke: '#222222',
	   		strokeThickness: 10,
	    });

	    let dmgNum = new Text("25", dmgNumStyle);
		dmgNum.anchor.set(0.5, 0.5);
		if (i%2 != 0)	dmgNum.x = 50;
		dmgNum.y = -(i*50);
		dmgNum.visible = false;
		dmgNumArray.push(dmgNum);
		dmgPopup.addChild(dmgNum);
	}

    const dmgEffectiveStyle = new PIXI.TextStyle({
        fontFamily: 'Arvo',
        fontSize: 24,
        fontWeight: 700,
		fill: '#D80000',	
		stroke: '#222222',
   		strokeThickness: 5,
    });

	let dmgEffective = new Text ("Poor  x0.25", dmgEffectiveStyle);
	dmgEffective.anchor.set(0.5, 0.5);
	dmgEffective.y = 50;
	dmgEffective.visible = false;
	dmgPopup.addChild(dmgEffective);
	dmgPopup.dmgEffective = dmgEffective;

	var statusTextArray = [];
	var statusImageArray = [];

	for(var i = 0; i < 3; i++){
		const statusStyle = new PIXI.TextStyle({
	        fontFamily: 'Arvo',
	        fontSize: 24,
	        fontWeight: 700,
			fill: '#FFDEBF',	
			stroke: '#FF7B00',
	   		strokeThickness: 5,
	    });

	    let statusText = new Text ("Critical" + i, statusStyle);
		statusText.anchor.set(0.5,0.5);
		statusText.visible = false;
		dmgStatus.addChild(statusText);
		statusTextArray.push(statusText);

		let statusImage = new PIXI.Sprite(resources.status_critical.texture);
		statusImage.anchor.set(0.5,0.5);
		statusImage.scale.set(0.4);
		statusImage.visible = false;
		dmgStatus.addChild(statusImage);
		statusImageArray.push(statusImage);
	}

	dmgStatus.statusTextArray = statusTextArray;
	dmgStatus.statusImageArray = statusImageArray;

	var dmgStatusTween = new TimelineMax({paused:true});
	dmgStatusTween.to(dmgStatus, 0.1, {ease:Expo.easeIn, alpha: 1});
	dmgStatusTween.fromTo(dmgStatus.scale, 0.2, {x: 0, y: 0}, {ease:Back.easeOut.config(1.7), x: 1, y: 1},0);

	dmgStatusTween.to(dmgStatus, 0.2, {delay: 0.6, ease:Expo.easeInOut, y: 0, alpha: 0});
	dmgStatusTween.to(dmgStatus.scale, 0.2, {delay: 0.6, ease:Expo.easeInOut, x: 0, y: 0}, 0.2);

	dmgStatus.tween = dmgStatusTween;

	//GSAP2
	// var dmgPopupTween = new TimelineMax({paused: true});
	// dmgPopupTween.to(dmgNumArray[0], 0.1, {delay:anim1, ease:Expo.easeIn, alpha: 1});
	// dmgPopupTween.fromTo(dmgNumArray[0].scale, 0.2, {x: 0, y: 0}, {delay:anim1, ease:Back.easeOut.config(1.7), x: 1, y: 1},0);

	// dmgPopupTween.to(dmgEffective, 0.1, {delay:anim1, ease:Expo.easeIn, alpha: 1},0);
	// dmgPopupTween.fromTo(dmgEffective.scale, 0.2, {x: 0, y: 0}, {delay:anim1, ease:Back.easeOut.config(1.7), x: 1, y: 1},0);

	// dmgPopupTween.to(dmgNumArray[1], 0.1, {delay:anim1, ease:Expo.easeIn, alpha: 1},0.033);
	// dmgPopupTween.fromTo(dmgNumArray[1].scale, 0.2, {x: 0, y: 0}, {delay:anim1, ease:Back.easeOut.config(1.7), x: 1, y: 1},0.033);

	// dmgPopupTween.to(dmgNumArray[2], 0.1, {delay:anim1, ease:Expo.easeIn, alpha: 1},0.067);
	// dmgPopupTween.fromTo(dmgNumArray[2].scale, 0.2, {x: 0, y: 0}, {delay:anim1, ease:Back.easeOut.config(1.7), x: 1, y: 1},0.067);

	// dmgPopupTween.to(dmgNumArray[3], 0.1, {delay:anim1, ease:Expo.easeIn, alpha: 1},0.1);
	// dmgPopupTween.fromTo(dmgNumArray[3].scale, 0.2, {x: 0, y: 0}, {delay:anim1, ease:Back.easeOut.config(1.7), x: 1, y: 1},0.1);

	// dmgPopupTween.to(dmgNumArray[4], 0.1, {delay:anim1, ease:Expo.easeIn, alpha: 1},0.133);
	// dmgPopupTween.fromTo(dmgNumArray[4].scale, 0.2, {x: 0, y: 0}, {delay:anim1, ease:Back.easeOut.config(1.7), x: 1, y: 1},0.133);

	// dmgPopupTween.to(dmgPopup, 0.267, {delay: 0.6, ease:Expo.easeInOut, y: 100, alpha: 0});
	// dmgPopupTween.to(dmgPopup.scale, 0.267, {delay: 0.6, ease:Expo.easeInOut, x: 0, y: 0}, 0.333+anim1);

	var dmgPopupTween = new TimelineMax({paused: true});
	dmgPopupTween.to(dmgNumArray[0], 0.1, {ease:Expo.easeIn, alpha: 1});
	dmgPopupTween.fromTo(dmgNumArray[0].scale, 0.2, {x: 0, y: 0}, {ease:Back.easeOut.config(1.7), x: 1, y: 1},0);

	dmgPopupTween.to(dmgEffective, 0.1, {ease:Expo.easeIn, alpha: 1},0);
	dmgPopupTween.fromTo(dmgEffective.scale, 0.2, {x: 0, y: 0}, {ease:Back.easeOut.config(1.7), x: 1, y: 1},0);

	dmgPopupTween.to(dmgNumArray[1], 0.1, {ease:Expo.easeIn, alpha: 1},0.033);
	dmgPopupTween.fromTo(dmgNumArray[1].scale, 0.2, {x: 0, y: 0}, {ease:Back.easeOut.config(1.7), x: 1, y: 1},0.033);

	dmgPopupTween.to(dmgNumArray[2], 0.1, {ease:Expo.easeIn, alpha: 1},0.067);
	dmgPopupTween.fromTo(dmgNumArray[2].scale, 0.2, {x: 0, y: 0}, {ease:Back.easeOut.config(1.7), x: 1, y: 1},0.067);

	dmgPopupTween.to(dmgNumArray[3], 0.1, {ease:Expo.easeIn, alpha: 1},0.1);
	dmgPopupTween.fromTo(dmgNumArray[3].scale, 0.2, {x: 0, y: 0}, {ease:Back.easeOut.config(1.7), x: 1, y: 1},0.1);

	dmgPopupTween.to(dmgNumArray[4], 0.1, {ease:Expo.easeIn, alpha: 1},0.133);
	dmgPopupTween.fromTo(dmgNumArray[4].scale, 0.2, {x: 0, y: 0}, {ease:Back.easeOut.config(1.7), x: 1, y: 1},0.133);

	dmgPopupTween.to(dmgPopup, 0.267, {delay: 0.6, ease:Expo.easeInOut, y: 100, alpha: 0});
	dmgPopupTween.to(dmgPopup.scale, 0.267, {delay: 0.6, ease:Expo.easeInOut, x: 0, y: 0}, 0.333);

	dmgPopup.tween = dmgPopupTween;	
	dmgPopup.dmgNumArray = dmgNumArray;

	dmgContainer.addChild(dmgStatus);
	dmgContainer.dmgStatus = dmgStatus;

	dmgContainer.addChild(dmgPopup);
	dmgContainer.dmgPopup = dmgPopup;

	const healthBar = new PIXI.Container();	
	const healthBarIndicators = [];
	healthBar.healthBarIndicators = healthBarIndicators;
	
	let outerBar = new PIXI.Graphics();
	outerBar.beginFill(0x222222);
	outerBar.drawRect(0, 0, (app.screen.width-320)/8, 40);
	outerBar.endFill();
	healthBar.addChild(outerBar);
	healthBar.outer = outerBar;

	//Make healthbar interactive
	outerBar.identifier = [direction, index];
	outerBar.object = item;
	outerBar.buttonMode = true;
	outerBar.interactive = true;
	outerBar
        // set the mousedown and touchstart callback...
        .on('pointerdown', onHPDown);
	
	let innerBar = new PIXI.Graphics();
	innerBar.beginFill(0x2C8A2C);
	innerBar.drawRect(0, 0, (app.screen.width-320)/8 * (item.hp/item.EHP), 40);
	innerBar.endFill();
	healthBar.addChild(innerBar);
	healthBar.inner = innerBar;
	
	let critDmgBar = new PIXI.Graphics();
	critDmgBar.beginFill(0xff7b00);
	critDmgBar.drawRect(0, 0, 1, 40);
	critDmgBar.endFill();
	healthBar.addChild(critDmgBar);
	healthBar.critDmgBar = critDmgBar;

	const dmgBarContainer = new PIXI.Container();
	let dmgBar = new PIXI.Graphics();
	dmgBar.beginFill(0xFFFFFF);
	dmgBar.drawRect(0, 0, 10, 40);
	dmgBar.endFill();
	dmgBar.alpha = 0.9;
	dmgBar.visible = false;

	// var dmgBarTween = new TimelineMax({paused:true});
	// dmgBar.animate = dmgBarTween;

	dmgBarContainer.addChild(dmgBar);
	dmgBarContainer.dmgBar = dmgBar;
	healthBar.addChild(dmgBarContainer);
	healthBar.dmgBarContainer = dmgBarContainer;
	
	let turnIndicator = new PIXI.Graphics();
	turnIndicator.beginFill(0xFFD600);
	turnIndicator.drawRect(0, 0, (app.screen.width-320)/8, 5);
	turnIndicator.endFill();
	healthBar.addChild(turnIndicator);
	healthBar.turn = turnIndicator;
	// healthBar.turn.visible = false;


	var creatureStatusInfoArray = [];
	item.statusArray.forEach(status =>{
		// console.log(status);
		var tracker = false;
		creatureStatusInfoArray.forEach(statusTracked =>{
			if(statusTracked == status[0])		tracker = true;
		});
		if(!tracker){
			creatureStatusInfoArray.push(status[0]);
		}
	});
	
	creatureStatusInfoArray.forEach(status => {
		let statusEffect = statusEffectSprite(status);
		healthBar.addChild(statusEffect);
		item.statusSpriteArray.push(statusEffect);
	});	
	
	let textHP = new Text(item.hp + " / " + item.EHP, {fontFamily : styleFontFamily, fontSize: 24, fill : 0xfefefe, align : 'center'});
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

			var selectTween = new TimelineMax({paused:true, repeat:-1});
			select.animate = selectTween;

			healthBar.addChild(select);
			healthBar.select = select;
			healthBar.select.visible = false;
			healthBar.healthBarIndicators.push(select);
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
			healthBar.healthBarIndicators.push(target);
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

			var healTween = new TimelineMax({paused:true, repeat:-1});
			heal.animate = healTween;

			healthBar.addChild(heal);
			healthBar.heal = heal;
			healthBar.heal.visible = false;
			healthBar.healthBarIndicators.push(heal);
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
			healthBar.healthBarIndicators.push(move);
		}
	}
	
	if(direction > 0){
		heroSprites.addChild(creatureContainer);
		interfaceHeroHealth.addChild(healthBar);
		interfaceHeroFloatingInfo.addChild(dmgContainer);
	}else{
		enemySprites.addChild(creatureContainer);
		interfaceEnemyHealth.addChild(healthBar);
		interfaceEnemyFloatingInfo.addChild(dmgContainer);
	}
	item.dmgContainer = dmgContainer;
	item.healthBar = healthBar;
	item.sprite = creatureContainer;
	item.action = creatureAction;
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

	var widthMath = app.screen.width/16;
	var heightMath = app.screen.height/9;

	if(widthMath > heightMath){
		backgroundImage.width = app.screen.width;
		backgroundImage.height = app.screen.width * 9/16;
		actionLines.width = app.screen.width+50;
		actionLines.height = (app.screen.width * 9/16)+50;
	}else{
		backgroundImage.height = app.screen.height;
		backgroundImage.width = app.screen.height * 16/9;
		actionLines.height = app.screen.height+50;
		actionLines.width = (app.screen.height * 16/9)+50;
	}
	backgroundImage.position.set(app.screen.width/2, app.screen.height/2);
	actionLines.position.set((app.screen.width/2)-25, (app.screen.height/2)-25);
	actionBlack.width = app.screen.width+100;
	actionBlack.height = app.screen.height+100;
	actionContainer.position.set(app.screen.width/2, app.screen.height*3/4);
	
	// var skillSelectPadding = 5;
	var hazardMargin = 50;
	margin = app.screen.height/21.6;
	healthMargin = app.screen.width/96;
	skillMargin = app.screen.width/192;
	skillSelectPadding = app.screen.height/216;

	if(app.screen.width < 860){
		margin = app.screen.height/72;
		targetTextFontSize = 12;
		skillNameFontSize = 14;
		hazardSize = 0.35;
		hazardMargin = 20;
	}else if(app.screen.width < 1366){
		margin = app.screen.height/72;
		targetTextFontSize = 16;
		skillNameFontSize = 18;
		hazardSize = 0.58;
		hazardMargin = 40;
	}else{
		targetTextFontSize = 26;
		skillNameFontSize = 28;
		hazardSize = 0.75;
		hazardMargin = 50;
	}

	var interfaceY = app.screen.height/27;
	interfaceHeroHealth.position.set(margin, interfaceY);
	interfaceEnemyHealth.position.set(app.screen.width/2+margin, interfaceY);
	interfaceHeroFloatingInfo.position.set(margin, interfaceY);
	interfaceEnemyFloatingInfo.position.set(app.screen.width/2+margin, interfaceY);

	resizeWidth = (app.screen.width- (4*margin) - 6*(healthMargin))/8;
	spriteResizeXPosition[0] = 0;
	spriteResizeXPosition[1] = resizeWidth + healthMargin;
	spriteResizeXPosition[2] = (resizeWidth + healthMargin) * 2;
	spriteResizeXPosition[3] = (resizeWidth + healthMargin) * 3;

	heroHealthXPosition[0] = (resizeWidth + healthMargin) * 3;
	heroHealthXPosition[1] = (resizeWidth + healthMargin) * 2;
	heroHealthXPosition[2] = resizeWidth + healthMargin;
	heroHealthXPosition[3] = 0;
	
	var calcWidth = (2*app.screen.width - 4*margin - 10*healthMargin)/9;
	
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
	
	creatureInfoBG.width = app.screen.width-40;
	creatureInfoBG.height = app.screen.height-40;
	creatureInfoBG.x = 20;
	creatureInfoBG.y = 20;

	interfaceAdditional.position.set(margin, app.screen.height - margin);
	
	skillContainerArray.forEach((skillContainer, index) => {
		skillContainer.rect.width = (2*app.screen.width - 4*margin - 10*healthMargin)/9;
		skillContainer.rect.height = skillContainer.rect.width/4;
		skillContainer.selected.stroke.width = (2*app.screen.width - 4*margin - 10*healthMargin)/9;
		skillContainer.selected.stroke.height = skillContainer.rect.width/4;
		skillContainer.selected.fill.width =  ((2*app.screen.width - 4*margin - 10*healthMargin)/9) - skillSelectPadding*2;
		skillContainer.selected.fill.height = (skillContainer.rect.width/4) - skillSelectPadding*2;
		
		skillContainer.disable.width = (2*app.screen.width - 4*margin - 10*healthMargin)/9;
		skillContainer.disable.height = skillContainer.rect.width/4;
		
		skillContainer.selected.fill.x = skillSelectPadding;
		skillContainer.selected.fill.y = skillSelectPadding;
		
		skillContainer.x = margin + skillContainer.rect.height + healthMargin + (skillContainer.rect.width + healthMargin)*index;
		skillContainer.y = app.screen.height - skillContainer.rect.height - margin;
		
		skillContainer.skillElement.width = skillContainer.rect.width/11;
		skillContainer.skillElement.height = skillContainer.skillElement.width * 2.3;
		skillContainer.skillElement.x = skillMargin;
		skillContainer.skillElement.y = skillContainer.rect.height/2;

		skillContainer.markerContainer.width = (skillContainer.rect.width/3)*2;
		skillContainer.markerContainer.height = skillContainer.markerContainer.width/12;

		skillContainer.skillName.style.fontSize = skillNameFontSize;
		skillContainer.skillName.x = skillContainer.rect.width/6;
		skillContainer.skillName.y = skillContainer.rect.height/3;

		skillContainer.markerContainer.x = skillContainer.rect.width/6;
		skillContainer.markerContainer.y = skillContainer.rect.height*3/4;

		skillContainer.targetText.style.fontSize = targetTextFontSize;
		skillContainer.targetText.x =  (skillContainer.rect.width/6) + (skillContainer.markerContainer.width * 0.569);
		skillContainer.targetText.y = skillContainer.rect.height*3/4;
	});
	
	heroSprites.position.set(app.screen.width/2-margin, app.screen.height*3/4);
	enemySprites.position.set(app.screen.width/2+margin, app.screen.height*3/4);

	heroHazardContainer.position.set(app.screen.width/2-margin, app.screen.height*3/4+hazardMargin);
	enemyHazardContainer.position.set(app.screen.width/2+margin, app.screen.height*3/4+hazardMargin);

	heroHazardSprite.forEach((hazard, index)=>{
		hazard.scale.set(hazardSize, hazardSize);
		hazard.x = -(spriteResizeXPosition[fieldHeroHazard[index][0]] + spriteResizeXPosition[1]/2);
	});
	enemyHazardSprite.forEach((hazard, index)=>{
		hazard.scale.set(-hazardSize, hazardSize);
		hazard.x = spriteResizeXPosition[fieldEnemyHazard[index][0]] + spriteResizeXPosition[1]/2;
	});

	heroArray.forEach(function (item, index){
		resizeSprite(1, item.sprite, index);
		resizeSprite(1, item.action, index);
		resizeHP(0, item);
		resizeDmg(0, item);
	});	

	enemyArray.forEach(function (item, index){
		resizeSprite(-1, item.sprite, index);
		resizeSprite(-1, item.action, index);
		resizeHP(1, item);
		resizeDmg(1, item);
	});

	//Console log RESIZE
	consolePrint("RESIZE");
	// consoleScreen.text = "RESIZE\n" + consoleScreen.text;
}

function resizeDmg(roster, item){
	// var resizeWidth = (app.screen.width- (4*margin) - 6*(healthMargin))/8;
	// var resizeHeight = 40;
	// var statusSpacing = app.screen.width/384;
	var statusFontSize = 24;
	// var statusSpacer1 = app.screen.height/27;
	// var statusSpacer2 = app.screen.height/10.8;
	// var statusStrokeSize = app.screen.height/270;
	if(app.screen.width < 860){
		item.dmgContainer.dmgPopup.scale.set(0.4,0.4);
		statusFontSize = 12;
	}else if(app.screen.width < 1366){
		item.dmgContainer.dmgPopup.scale.set(0.6,0.6);
		statusFontSize = 20;
	}else if(app.screen.width < 1500){
		item.dmgContainer.dmgPopup.scale.set(0.75,0.75);
	}
	else{
		item.dmgContainer.dmgPopup.scale.set(1,1);
	}

	item.dmgContainer.dmgStatus.statusImageArray.forEach((statusImage,arrayIndex)=>{
		statusImage.width = (resizeWidth - (app.screen.width/384 * 5))/4;
		statusImage.height = statusImage.width;
		statusImage.y = -(app.screen.height/27 + (arrayIndex*app.screen.height/10.8));
	});

	item.dmgContainer.dmgStatus.statusTextArray.forEach((statusText,arrayIndex)=>{
		statusText.style.fontSize = statusFontSize;
		statusText.style.strokeThickness = app.screen.height/270;
		statusText.y = -(arrayIndex*app.screen.height/10.8);
	});

	var switcher = 0;
	if(item.size > 1){
		item.dmgContainer.dmgPopup.x = (resizeWidth * 2 + healthMargin)/2;
		item.dmgContainer.dmgStatus.x = (resizeWidth * 2 + healthMargin)/2;
		switcher = 1;
	}else{
		item.dmgContainer.dmgPopup.x = resizeWidth/2;
		item.dmgContainer.dmgStatus.x = resizeWidth/2;
	}

	if(roster == 0){
		item.dmgContainer.x = heroHealthXPosition[item.pos-1+switcher];
	}else{
		item.dmgContainer.x = spriteResizeXPosition[item.pos-1];
	}

	item.dmgContainer.dmgPopup.y = app.screen.height/3;
	item.dmgContainer.dmgStatus.y = app.screen.height*2/5;
}

function resizeHP(roster, item){
	console.log(app.screen.width + ", " + (app.screen.width-320)/8);
	// var resizeWidth = (app.screen.width- (4*margin) - 6*(healthMargin))/8;
	var resizeHeight = app.screen.width/48;
	var statusSpacing = app.screen.width/384;
	
	item.healthBar.turn.height = app.screen.width/320;
	item.healthBar.turn.y = resizeHeight;

	if(app.screen.width < 860){
		item.healthBar.textHP.style.fontSize = 14;
	}else if(app.screen.width < 1366){
		item.healthBar.textHP.style.fontSize = 18;
	}else{
		item.healthBar.textHP.style.fontSize = 24;
	}
	
	turnText.position.set(app.screen.width/2, resizeHeight);

	item.healthBar.outer.height = resizeHeight;
	item.healthBar.inner.height = resizeHeight;

	item.healthBar.critDmgBar.height = resizeHeight;
	item.healthBar.dmgBarContainer.dmgBar.height = resizeHeight;
	item.healthBar.outer.width = resizeWidth;

	var switcher = 0;
	if(item.size > 1){
		item.healthBar.outer.width = resizeWidth * 2 + healthMargin;
		item.healthBar.inner.width = (resizeWidth * 2 + healthMargin) * (item.hp/item.overallHP);
		item.healthBar.critDmgBar.width = -((resizeWidth * 2 + healthMargin) * (item.critDmg/item.overallHP));
		item.healthBar.critDmgBar.x = resizeWidth * 2 + healthMargin;
		item.healthBar.turn.width = resizeWidth * 2 + healthMargin;
		
		item.healthBar.healthBarIndicators.forEach(indicator => {
			indicator.indicatorBar1.width = resizeWidth * 2 + healthMargin;
			indicator.indicatorBar2.width = resizeWidth * 2 + healthMargin;
		});
		
		switcher = 1;
		item.statusSpriteArray.forEach((statusSprite, index) => {
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
		item.healthBar.inner.width = resizeWidth * (item.hp/item.overallHP);
		item.healthBar.critDmgBar.width = -(resizeWidth * (item.critDmg/item.overallHP));
		item.healthBar.critDmgBar.x = resizeWidth;
		item.healthBar.turn.width = resizeWidth;

		item.healthBar.healthBarIndicators.forEach(indicator => {
			indicator.indicatorBar1.width = resizeWidth;
			indicator.indicatorBar2.width = resizeWidth;
		});
		
		item.statusSpriteArray.forEach((statusSprite, index) => {
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

	if(roster == 0){
		item.healthBar.x = heroHealthXPosition[item.pos-1+switcher];
	}else{		
		item.healthBar.x = spriteResizeXPosition[item.pos-1];
	}

	item.healthBar.dmgBarContainer.x = item.healthBar.inner.width;	
	item.healthBar.textHP.x = item.healthBar.outer.width/2;
	item.healthBar.textHP.y = item.healthBar.outer.height/2;

	item.healthBar.healthBarIndicators.forEach(indicator => {		
		indicator.indicatorStart.height = app.screen.height/55;
		indicator.indicatorStart.y = -app.screen.height/47;	
		indicator.indicatorEnd.height = app.screen.height/55;	
		indicator.indicatorEnd.y = -app.screen.height/47;	
		indicator.indicatorEnd.x = item.healthBar.outer.width - 4;
		indicator.indicatorBar1.height = app.screen.height/154;
		indicator.indicatorBar1.y = indicator.indicatorEnd.y+indicator.indicatorEnd.height-indicator.indicatorBar1.height-2;	
		indicator.indicatorBar2.y = indicator.indicatorEnd.y+2
	});
	
	item.healthBar.select.pivot.x = item.healthBar.select.width/2;
	item.healthBar.select.x = item.healthBar.select.width/2;
	item.healthBar.heal.pivot.x = item.healthBar.heal.width/2;
	item.healthBar.heal.x = item.healthBar.heal.width/2;

	item.healthBar.select.animate.clear();
	var selectWidth = item.healthBar.outer.width;
	item.healthBar.select.width = item.healthBar.outer.width;
	item.healthBar.select.animate.to(item.healthBar.select, 1, {width:selectWidth+20, ease:Sine.easeInOut});
	item.healthBar.select.animate.to(item.healthBar.select, 0.5, {width:selectWidth, ease:Sine.easeInOut});
	item.healthBar.select.animate.play(0);
}

function resizeSprite(direction, item, index){
	spriteScale = app.screen.width/3840;	
	// if(app.screen.width < 860){
	// 	spriteScale = 0.23;
	// }else if(app.screen.width < 1366){
	// 	spriteScale = 0.3;
	// }else{
	// 	spriteScale = 0.5;
	// }
	item.scale.set(direction * spriteScale, spriteScale);

	if(direction > 0){
		item.x = -spriteResizeXPosition[heroArray[index].pos-1];
	}else{
		item.x = spriteResizeXPosition[enemyArray[index].pos-1];
	}	
}

function resizeStatus(item){
	var resizeHeight = app.screen.width/48;
	var statusSpacing = app.screen.width/384;
	
	// if(app.screen.width < 860){
	// 	resizeHeight = 20;
	// 	statusSpacing = 2;
	// }else if(app.screen.width < 1366){
	// 	resizeHeight = 30;
	// 	statusSpacing = 4;
	// }else{
	// 	resizeHeight = 40;
	// 	statusSpacing = 5;
	// }
	
	if(item.size > 1){
		item.statusSpriteArray.forEach((statusSprite, index) => {
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
		item.statusSpriteArray.forEach((statusSprite, index) => {
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
}

function onMenuDown(){
	stageContainer.visible = false;
	turnText.visible = false;
	selectedVita.healthBar.select.animate.kill();
	// interfaceHolder.visible = false;

	stageContainer.destroy(true);
	turnText.destroy(true);
	interfaceHolder.destroy(true);

	console.log("explore");
	// if (screenfull.isEnabled) {
	// 	screenfull.toggle();
	// }
}

function onAdditionalDown(){
// 	skillContainerArray[0].targetText.style.fill = '0x66cc66';
	console.log("Additional");
	// stageContainer.visible = true;
	interfaceAdditional.visible = true;

	//Remove hazard
	// console.log("1: " + enemyHazardSprite);
	// enemyHazardContainer.removeChild(enemyHazardSprite[1]);
	// console.log("2: " + enemyHazardSprite);
	// enemyHazardSprite[1].destroy();
	// console.log("3: " + enemyHazardSprite);
	// enemyHazardSprite.splice(1,1);
	// console.log("4: " + enemyHazardSprite);

	// 0xccffcc
	// backgroundImage.tint = 0x3D85C6;	
}

function onAdditionalCancelDown(){
	console.log("Additional Cancel");
	interfaceAdditional.visible = false;
}

function onAdditionalMoveDown(){
	console.log("Additional Move " + selectedVita.name);
	validMoveObjectArray = [];
	validSkillObjectArray = [];
	selectedSkill = -1
	interfaceAdditional.visible = false;

	enemyArray.forEach(enemyObject=>{
		enemyObject.healthBar.target.visible = false;
		enemyObject.healthBar.heal.visible = false;
	});
	heroArray.forEach(heroObject=>{
		heroObject.healthBar.target.visible = false;
		heroObject.healthBar.heal.visible = false;
	});
	skillContainerArray.forEach(skillContainer=>{
		skillContainer.selected.visible = false;
	});

	var moveDelta = selectedVita.move[1];
	var forward= false;
	var backward = false;
	if(selectedVita.move[0] == "+"){
		forward = true;
	}else if(selectedVita.move[0] == "-"){
		backward = true;
	}else{
		forward = true;
		backward = true;
	}

	if(selectedVita.hero){
		heroArray.forEach(object=>{
			if(object != selectedVita){
				var positionCheck = [];
				if(object.size > 1){
					positionCheck.push(object.pos);
					positionCheck.push(object.pos+1);
				}else{
					positionCheck.push(object.pos);
				}
				for(var i = 1; i <= moveDelta; i++){
					positionCheck.forEach(position=>{
						if(position == selectedVita.pos-i && forward){
							object.healthBar.move.visible = true;
							validMoveObjectArray.push(object);
						}else if(position == selectedVita.pos+i+selectedVita.size-1 && backward){
							object.healthBar.move.visible = true;
							validMoveObjectArray.push(object);
						}
					});				
				}
			}
		});
	}else{
		enemyArray.forEach(object=>{
			if(object != selectedVita){
				var positionCheck = [];
				if(object.size > 1){
					positionCheck.push(object.pos);
					positionCheck.push(object.pos+1);
				}else{
					positionCheck.push(object.pos);
				}
				for(var i = 1; i <= moveDelta; i++){
					positionCheck.forEach(position=>{
						if(position == selectedVita.pos-i && forward){
							object.healthBar.move.visible = true;
							validMoveObjectArray.push(object);
						}else if(position == selectedVita.pos+i+selectedVita.size-1 && backward){
							object.healthBar.move.visible = true;
							validMoveObjectArray.push(object);
						}
					});				
				}
			}
		});
	}

	validMoveObjectArray.forEach(object=>{
		console.log("validMoveObjectArray: " + object.name);
	});
}

function onAdditionalItemDown(){
	console.log("Additional Item");
	onScreenStats.visible = true;
	consoleScreen.visible = true;
}

function onAdditionalSkipDown(){
	console.log("Additional Skip");
	if(turnArray.length != 0){
		selectCreature(turnArray[0]);
		turnArray.shift();
	}else{
		calculateTurnOrder();
	}

	selectedSkill = -1;

	interfaceAdditional.visible = false;
	// onScreenStats.visible = false;
	// consoleScreen.visible = false;
}


function onInfoDown(){
	console.log(
		"\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n>>>>>>>>>>>>>> Info: " + 
		this.identifier[0] + 
		" <<<<<<<<<<<<<<\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n");

	infoBtnArray.forEach(btn=>{
		btn.selected.visible = false;
	});
	
	if(this.identifier[0] == 0){
		creatureInfo.main.visible = true;
		creatureInfo.stat.visible = false;
		creatureInfo.status.visible = false;
		creatureInfo.skill.visible = false;
		creatureInfo.item.visible = false;
		this.selected.visible = true;
	}else if(this.identifier[0] == 1){
		creatureInfo.main.visible = false;
		creatureInfo.stat.visible = true;
		creatureInfo.status.visible = false;
		creatureInfo.skill.visible = false;
		creatureInfo.item.visible = false;
		this.selected.visible = true;
	}else if(this.identifier[0] == 2){
		creatureInfo.main.visible = false;
		creatureInfo.stat.visible = false;
		creatureInfo.status.visible = true;
		creatureInfo.skill.visible = false;
		creatureInfo.item.visible = false;
		this.selected.visible = true;
	}else if(this.identifier[0] == 3){
		creatureInfo.main.visible = false;
		creatureInfo.stat.visible = false;
		creatureInfo.status.visible = false;
		creatureInfo.skill.visible = true;
		creatureInfo.item.visible = false;
		this.selected.visible = true;
	}else if(this.identifier[0] == 4){
		creatureInfo.main.visible = false;
		creatureInfo.stat.visible = false;
		creatureInfo.status.visible = false;
		creatureInfo.skill.visible = false;
		creatureInfo.item.visible = true;
		this.selected.visible = true;
	}
	else if(this.identifier[0] == 5){
		console.log("Info close");
		blurFilterInfo.blur = 0;
		creatureInfo.visible = false;

		creatureInfo.statusIcon.forEach(icon=>{
			console.log("destroy icon");
			icon.destroy();
		});
		creatureInfo.statusText.forEach(text=>{
			console.log("destroy text");
			text.destroy();
		});

		creatureInfo.skillText.forEach(text=>{
			console.log("destroy text");
			text.destroy();
		});

		creatureInfo.infoSkillArray.forEach(skillContainer=>{
			skillContainer.destroy();
		});

		creatureInfo.infoItemSprite.forEach(icon=>{
			console.log("destroy item sprite");
			icon.destroy();
		});

		creatureInfoSprite.getChildAt(0).destroy();
		// heroHazardSprite[arrayNum].destroy();

		skillContainerArray.forEach(skillContainer=>{
			skillContainer.interactive = true;
		});

		heroArray.forEach(creature=>{
			creature.sprite.interactive = true;
			creature.healthBar.outer.interactive = true;
		});	
		enemyArray.forEach(creature=>{
			creature.sprite.interactive = true;
			creature.healthBar.outer.interactive = true;
		});

		btnAdditional.interactive = true;
		btnSettings.interactive = true;
	}else{
		creatureInfo.main.visible = false;
		this.selected.visible = true;
	}
}

function onHPDown(){
	selectedHP = this.object;
	blurFilterInfo.blur = 30;
	creatureInfo.visible = true;
	creatureInfo.main.visible = true;
	// creatureInfo.main.visible = false;
	creatureInfo.stat.visible = false;
	creatureInfo.skill.visible = false;
	creatureInfo.item.visible = false;
	skillContainerArray.forEach(skillContainer=>{
		skillContainer.interactive = false;
	});	

	heroArray.forEach(creature=>{
		creature.sprite.interactive = false;
		creature.healthBar.outer.interactive = false;
	});	
	enemyArray.forEach(creature=>{
		creature.sprite.interactive = false;
		creature.healthBar.outer.interactive = false;
	});	

	btnAdditional.interactive = false;
	btnSettings.interactive = false;

	infoBtnArray[0].selected.visible = true;

	// factory.parseDragonBonesData(resources[this.object.code + '_skeleton'].data);
	// factory.parseTextureAtlasData(resources[this.object.code + '_texture_json'].data, resources[this.object.code + '_texture_png'].texture);

	const armatureHero = factory.buildArmatureDisplay(this.object.code, this.object.code);
	armatureHero.animation.gotoAndPlayByFrame('idle', Math.floor(Math.random() * this.object.frames) + 1);
	// creatureInfo.addChild(armatureHero);
	// const creatureInfoSprite = new PIXI.Container();

	var infoSpacer = app.screen.width/77;
	var infoBtnTextSize = 36;
	var statusMargin = [app.screen.width/20,app.screen.height/17];
	var turnMargin = app.screen.width/192;
	var textOrigin = [app.screen.width/2,app.screen.height/6];
	var infoMainMargin = app.screen.height/20;
	var infoInnerMargin = app.screen.width/19.2;
	var infoSelectPadding = app.screen.width/384;

	if(app.screen.width < 860){
		infoBtnTextSize = 16;
	}else if(app.screen.width < 1366){
		infoBtnTextSize = 26;
	}else{
		infoBtnTextSize = 36;
	}
	
	creatureInfoSprite.addChild(armatureHero);
	creatureInfoSprite.scale.set(app.screen.width/3200);
	// console.log("Width: " + creatureInfoSprite.width);

	creatureInfoSprite.position.set((app.screen.width/4)+(creatureInfoSprite.width/2), app.screen.height*3/4);
	creatureInfo.addChild(creatureInfoSprite);
	creatureInfo.main.x = textOrigin[0];
	creatureInfo.main.y = textOrigin[1];

	creatureInfo.info_main_text[6].text = this.object.experienceGained + " / " + this.object.experienceNext;

	creatureInfo.info_main_text.forEach((text,textIndex) =>{
		text.style.fontSize = skillNameFontSize;
		if(textIndex < 5){
			if(textIndex%2 == 0){
				text.x = app.screen.width/15;
				text.y = textIndex * infoMainMargin;
			}else{
				text.x = app.screen.width/12;
				text.y = (textIndex-1) * infoMainMargin;
			}
		}else{
			if(textIndex%2 == 0){
				text.x = app.screen.width/12;
				text.y = textIndex * infoMainMargin;
			}else{
				text.x = app.screen.width/15;
				text.y = (textIndex+1) * infoMainMargin;
			}
		}
	});

	creatureInfo.info_main_text[1].text = this.object.name;
	creatureInfo.info_main_text[3].text = this.object.level;
	// creatureInfo.info_main_text[8].text = "It's dominant hand is encrusted with a rock-like formation that it uses as a shield and a weapon. The rock is bejeweled with spiritual gems.";
	creatureInfo.info_main_text[8].text = creatureList.data.creature[this.object.id].desc;
	creatureInfo.info_main_text[8].style.wordWrapWidth = app.screen.width/3;
	// creatureInfo.info_main_text[5].text = this.object.name;

	creatureInfo.info_main_elementIcon[0].x = app.screen.width/12;
	creatureInfo.info_main_elementIcon[0].y = 4.4*infoMainMargin;
	creatureInfo.info_main_elementIcon[1].x = app.screen.width/5;
	creatureInfo.info_main_elementIcon[1].y = 4.4*infoMainMargin;
	creatureInfo.info_main_elementIcon[0].scale.set(app.screen.height/2160);
	creatureInfo.info_main_elementIcon[1].scale.set(app.screen.height/2160);
	creatureInfo.info_main_elementIcon[0].visible = false;
	creatureInfo.info_main_elementIcon[1].visible = false;

	creatureInfo.info_main_element[0].x = app.screen.width/12 + creatureInfo.info_main_elementIcon[0].width + 10;
	creatureInfo.info_main_element[0].y = 4*infoMainMargin;
	creatureInfo.info_main_element[1].x = app.screen.width/5 +  creatureInfo.info_main_elementIcon[1].width + 10;
	creatureInfo.info_main_element[1].y = 4*infoMainMargin;
	creatureInfo.info_main_element[0].text = "";
	creatureInfo.info_main_element[1].text = "";
	creatureInfo.info_main_element[0].style.fontSize = skillNameFontSize;
	creatureInfo.info_main_element[1].style.fontSize = skillNameFontSize;
	creatureInfo.info_main_element[0].visible = false;
	creatureInfo.info_main_element[1].visible = false;

	// creatureInfo.info_main_expBar[0].x = 100;
	creatureInfo.info_main_expBar[0].x = app.screen.width/12;
	creatureInfo.info_main_expBar[1].x = app.screen.width/12;
	creatureInfo.info_main_expBar[0].y = 6.8*infoMainMargin;
	creatureInfo.info_main_expBar[1].y = 6.8*infoMainMargin;
	creatureInfo.info_main_expBar[0].width = (this.object.experienceGained / this.object.experienceNext) * app.screen.width/3.84;
	creatureInfo.info_main_expBar[1].width = app.screen.width/3.84;
	creatureInfo.info_main_expBar[0].height = app.screen.height/75;
	creatureInfo.info_main_expBar[1].height = app.screen.height/75;
	// creatureInfo.info_main_expBar[1].x = 100;

	// creatureInfo.info_main_expBar[1].y = 11.8*infoMainMargin;

	this.object.element.forEach((element, elementIndex) =>{
		creatureInfo.info_main_element[elementIndex].visible = true;
		creatureInfo.info_main_elementIcon[elementIndex].visible = true;
		if(element == 1){
			creatureInfo.info_main_element[elementIndex].text = "Flora";
			creatureInfo.info_main_elementIcon[elementIndex].texture = resources.element_flora.texture;
		}else if(element == 2){
			creatureInfo.info_main_element[elementIndex].text = "Water";
			creatureInfo.info_main_elementIcon[elementIndex].texture = resources.element_water.texture;
		}else if(element == 3){
			creatureInfo.info_main_element[elementIndex].text = "Fire";
			creatureInfo.info_main_elementIcon[elementIndex].texture = resources.element_fire.texture;
		}else if(element == 4){
			creatureInfo.info_main_element[elementIndex].text = "Earth";
			creatureInfo.info_main_elementIcon[elementIndex].texture = resources.element_earth.texture;
		}else if(element == 5){
			creatureInfo.info_main_element[elementIndex].text = "Storm";
			creatureInfo.info_main_elementIcon[elementIndex].texture = resources.element_storm.texture;
		}else if(element == 6){
			creatureInfo.info_main_element[elementIndex].text = "Wind";
			creatureInfo.info_main_elementIcon[elementIndex].texture = resources.element_wind.texture;
		}else if(element == 7){
			creatureInfo.info_main_element[elementIndex].text = "Toxic";
			creatureInfo.info_main_elementIcon[elementIndex].texture = resources.element_toxic.texture;
		}else if(element == 8){
			creatureInfo.info_main_element[elementIndex].text = "Spirit";
			creatureInfo.info_main_elementIcon[elementIndex].texture = resources.element_spirit.texture;
		}else if(element == 9){
			creatureInfo.info_main_element[elementIndex].text = "Void";
			creatureInfo.info_main_elementIcon[elementIndex].texture = resources.element_void.texture;
		}
	});
	
	infoBtnArray.forEach((btn, btnIndex)=>{
		btn.rect.width = (app.screen.width - (2*healthMargin) - (2*infoInnerMargin) - (4*infoSpacer))/6;
		btn.rect.height = app.screen.height/14;
		btn.selected.stroke.width = (app.screen.width - (2*healthMargin) - (2*infoInnerMargin) - (4*infoSpacer))/6;
		btn.selected.stroke.height = app.screen.height/14;
		btn.selected.fill.width =  (app.screen.width - (2*healthMargin) - (2*infoInnerMargin) - (4*infoSpacer))/6 - (infoSelectPadding*2);
		btn.selected.fill.height = app.screen.height/14 - (infoSelectPadding*2);

		btn.infoBtnText.style.fontSize = infoBtnTextSize;

		btn.selected.fill.x = infoSelectPadding;
		btn.selected.fill.y = infoSelectPadding;

		btn.infoBtnText.x = btn.rect.width/2;
		btn.infoBtnText.y = btn.rect.height/2;
		btn.x = healthMargin + infoInnerMargin + (btn.rect.width + infoSpacer)*btnIndex;
		btn.y = app.screen.height*5/6;
	});

	var creatureStatusInfoArray = [];
	// const creatureInfoStatus = new PIXI.Container();
	
	creatureInfo.status.visible = false;
	creatureInfo.status.x = textOrigin[0];
	creatureInfo.status.y = textOrigin[1];

	console.log("Name: " + this.object.name + "\nHP: " + this.object.statCalc[0] + "\nStats: " + this.object.statMod);
	this.object.statusArray.forEach(status =>{
		// console.log(status);
		var tracker = false;
		creatureStatusInfoArray.forEach(statusTracked =>{
			if(statusTracked == status[0])		tracker = true;
		});
		if(!tracker){
			creatureStatusInfoArray.push(status[0]);
		}
	});
	// console.log("Status: " + creatureStatusInfoArray);
	var statusIcon = [];
	var statusText = [];
	var textLevel = 0;
	var textLevelTracker = 0;
	var statusYAdjust = 0;
	var statusXAdjust = 0;

	const statusPage = new PIXI.Container();
	var statusPages = [];
	creatureInfo.status.addChild(statusPage);
	statusPages.push(statusPage);
	creatureInfo.status.pages = statusPages;

	creatureStatusInfoArray.forEach((statusNum, statusIndex) =>{
		const statusContainer = new PIXI.Container();
		let statusEffectIcon;
		let textStatus = new Text("Status", {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xfefefe, align : 'left'});
		switch(statusNum){
			case 1:
				statusEffectIcon = new PIXI.Sprite(resources.status_bleed.texture);
				textStatus.text = "Bleed";
				console.log("Bleed:");
				break;
			case 2:
				statusEffectIcon = new PIXI.Sprite(resources.status_buff.texture);
				textStatus.text = "Buff";
				console.log("Buff:");
				break;
			case 3:
				statusEffectIcon = new PIXI.Sprite(resources.status_burned.texture);
				textStatus.text = "Burned";
				console.log("Burned:");
				break;
			case 4:
				statusEffectIcon = new PIXI.Sprite(resources.status_debuff.texture);
				textStatus.text = "Debuff";
				console.log("Debuff:");
				break;
			case 5:
				statusEffectIcon = new PIXI.Sprite(resources.status_depressed.texture);
				textStatus.text = "Depressed";
				console.log("Depressed:");
				break;
			case 6:
				statusEffectIcon = new PIXI.Sprite(resources.status_guard.texture);
				textStatus.text = "Guard";
				console.log("Guard:");
				break;
			case 7:
				statusEffectIcon = new PIXI.Sprite(resources.status_immune.texture);
				textStatus.text = "Immune";
				console.log("Immune:");
				break;
			case 8:
				statusEffectIcon = new PIXI.Sprite(resources.status_paralyzed.texture);
				textStatus.text = "Paralyzed";
				console.log("Paralyzed:");
				break;
			case 9:
				statusEffectIcon = new PIXI.Sprite(resources.status_poisoned.texture);
				textStatus.text = "Poisoned";
				console.log("Poisoned:");
				break;
			case 10:
				statusEffectIcon = new PIXI.Sprite(resources.status_recover.texture);
				textStatus.text = "Recover";
				console.log("Recover:");
				break;
			case 11:
				statusEffectIcon = new PIXI.Sprite(resources.status_secured.texture);
				textStatus.text = "Secured";
				console.log("Secured:");
				break;
			case 12:
				statusEffectIcon = new PIXI.Sprite(resources.status_silenced.texture);
				textStatus.text = "Silenced";
				console.log("Silenced:");
				break;
			case 13:
				statusEffectIcon = new PIXI.Sprite(resources.status_stunned.texture);
				textStatus.text = "Stunned";
				console.log("Stunned:");
				break;
			case 14:
				statusEffectIcon = new PIXI.Sprite(resources.status_critical.texture);
				textStatus.text = "Critical";
				console.log("Critical:");
				break;
			default:
				statusEffectIcon = new PIXI.Sprite(resources.status_buff.texture);
				textStatus.text = "Buff";
				console.log("Buff:");
		}
		statusIcon.push(statusEffectIcon);
		statusContainer.addChild(statusEffectIcon);
		statusEffectIcon.width = app.screen.width/38;
		statusEffectIcon.height = statusEffectIcon.width;
		statusEffectIcon.anchor.set(0,0.5);
		statusContainer.addChild(textStatus);
		textStatus.x = statusEffectIcon.width + turnMargin;
		textStatus.anchor.set(0,0.5);
		statusText.push(textStatus);
		textLevel++;

		var detailLevel = 1;
		this.object.statusArray.forEach((status,sIndex) =>{
			if(status[0] == statusNum){
				if(statusNum == 2){
					var buffStat;
					switch(status[2]+1){
						case 1:
							buffStat = "HP  +" + status[3];
							break;
						case 2:
							buffStat = "Dodge  +" + status[3];
							break;
						case 3:
							buffStat = "Physical attack  +" + status[3];
							break;
						case 4:
							buffStat = "Physical defense  +" + status[3];
							break;
						case 5:
							buffStat = "Special attack  +" + status[3];
							break;
						case 6:
							buffStat = "Special defense  +" + status[3];
							break;
						case 7:
							buffStat = "Speed  +" + status[3];
							break;
						case 8:
							buffStat = "Accuracy  +" + status[3];
							break;
					}
					console.log(buffStat + " [" + status[1] + "]");
					let textBuff = new Text(buffStat, {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xfefefe, align : 'left'});
					textBuff.x = statusMargin[0];
					textBuff.y = detailLevel*statusMargin[1];
					textBuff.anchor.set(0,0.5);
					let textBuffTurn = new Text("[" + status[1] + "]" , {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xFFD600, align : 'left'});
					textBuffTurn.x = statusMargin[0] + turnMargin + textBuff.width;
					textBuffTurn.y = detailLevel*statusMargin[1];
					textBuffTurn.anchor.set(0,0.5);
					statusContainer.addChild(textBuff);
					statusText.push(textBuff);
					statusContainer.addChild(textBuffTurn);
					statusText.push(textBuffTurn);
					detailLevel++;
					textLevel++;
				}
				if(statusNum == 1 || statusNum == 3 || statusNum == 5 || statusNum == 9){
					let textDamageStatus = new Text(Math.floor(this.object.EHP/16) + " damage per turn" , {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xfefefe, align : 'left'});
					textDamageStatus.x = statusMargin[0];
					textDamageStatus.y = detailLevel*statusMargin[1];
					textDamageStatus.anchor.set(0,0.5);
					let textDamageStatusTurn = new Text("[" + status[1] + "]" , {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xFFD600, align : 'left'});
					textDamageStatusTurn.x = statusMargin[0] + turnMargin + textDamageStatus.width;
					textDamageStatusTurn.y = detailLevel*statusMargin[1];
					textDamageStatusTurn.anchor.set(0,0.5);
					console.log("	10 Dmg" + " [" + status[1] + "]");
					statusContainer.addChild(textDamageStatus);
					statusText.push(textDamageStatus);
					statusContainer.addChild(textDamageStatusTurn);
					statusText.push(textDamageStatusTurn);
					detailLevel++;
					textLevel++;
				}
				if(statusNum == 10){
					let textHealStatus = new Text("Heal " + Math.floor(this.object.EHP/16) + " per turn", {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xfefefe, align : 'left'});
					textHealStatus.x = statusMargin[0];
					textHealStatus.y = detailLevel*statusMargin[1];
					textHealStatus.anchor.set(0,0.5);
					let textHealStatusTurn = new Text("[" + status[1] + "]" , {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xFFD600, align : 'left'});
					textHealStatusTurn.x = statusMargin[0] + turnMargin + textHealStatus.width;
					textHealStatusTurn.y = detailLevel*statusMargin[1];
					textHealStatusTurn.anchor.set(0,0.5);
					// console.log("	10 Dmg" + " [" + status[1] + "]");
					statusContainer.addChild(textHealStatus);
					statusText.push(textHealStatus);
					statusContainer.addChild(textHealStatusTurn);
					statusText.push(textHealStatusTurn);
					detailLevel++;
					textLevel++;
				}
				if(statusNum == 4){
					var debuffStat;
					switch(status[2]+1){
						case 1:
							debuffStat = "HP  " + status[3];
							break;
						case 2:
							debuffStat = "Dodge  " + status[3];
							break;
						case 3:
							debuffStat = "Physical attack  " + status[3];
							break;
						case 4:
							debuffStat = "Physical defense  " + status[3];
							break;
						case 5:
							debuffStat = "Special attack  " + status[3];
							break;
						case 6:
							debuffStat = "Special defense  " + status[3];
							break;
						case 7:
							debuffStat = "Speed  " + status[3];
							break;
						case 8:
							debuffStat = "Accuracy  " + status[3];
							break;
					}
					let textDebuff = new Text(debuffStat, {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xfefefe, align : 'left'});
					textDebuff.x = statusMargin[0];
					textDebuff.y = detailLevel*statusMargin[1];
					textDebuff.anchor.set(0,0.5);
					let textDebuffTurn = new Text("[" + status[1] + "]" , {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xFFD600, align : 'left'});
					textDebuffTurn.x = statusMargin[0] + turnMargin + textDebuff.width;
					textDebuffTurn.y = detailLevel*statusMargin[1];
					textDebuffTurn.anchor.set(0,0.5);
					statusContainer.addChild(textDebuff);
					statusText.push(textDebuff);
					statusContainer.addChild(textDebuffTurn);
					statusText.push(textDebuffTurn);
					detailLevel++;
					textLevel++;
					console.log(debuffStat + " [" + status[1] + "]");
				}
				if(statusNum == 6 || statusNum == 7 || statusNum == 8 || statusNum == 11 || statusNum == 12 || statusNum == 13){
					let textTurn = new Text("[" + status[1] + "]" , {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xFFD600, align : 'left'});
					textTurn.x = (turnMargin*2) + textStatus.width + statusEffectIcon.width;
					textTurn.y = (detailLevel-1)*statusMargin[1];
					textTurn.anchor.set(0,0.5);
					statusContainer.addChild(textTurn);
					statusText.push(textTurn);
					console.log("	[" + status[1] + "]");
				}
				if(statusNum == 14){
					let textCritical = new Text("-" + this.object.critDmg + " health points", {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xfefefe, align : 'left'});
					textCritical.x = statusMargin[0];
					textCritical.y = detailLevel*statusMargin[1];
					textCritical.anchor.set(0,0.5);
					statusContainer.addChild(textCritical);
					statusText.push(textCritical);
					detailLevel++;
					textLevel++;
					console.log("	-" + this.object.critDmg);
				}
			}
		});
		// console.log("textLevel " + textLevel);
		
		if(textLevel > 10){
			textLevel -= textLevelTracker;
			const statusPage = new PIXI.Container();
			statusPage.visible = false;
			creatureInfo.status.addChild(statusPage);
			creatureInfo.status.pages.push(statusPage);
			statusYAdjust = textLevel-detailLevel;
			// statusXAdjust = 1;
		}else{
			textLevelTracker = textLevel;
		}

		// creatureInfo.status.addChild(statusContainer);
		// statusContainer.x = statusXAdjust*((app.screen.width - (2*infoInnerMargin))/4);
		// statusContainer.y = statusMargin[1]*(textLevel-detailLevel-statusYAdjust);
		statusContainer.y = statusMargin[1]*(textLevel-detailLevel-statusYAdjust);

		creatureInfo.status.pages[creatureInfo.status.pages.length-1].addChild(statusContainer);
	});

	creatureInfo.status.arrowUp.interactive = false;
	creatureInfo.status.arrowUp.texture = resources.arrow_up_d.texture;

	if(creatureInfo.status.pages.length>1){
		creatureInfo.status.arrowDown.interactive = true;
		creatureInfo.status.arrowDown.texture = resources.arrow_down_n.texture;
	}else{
		creatureInfo.status.arrowDown.interactive = false;
		creatureInfo.status.arrowDown.texture = resources.arrow_down_d.texture;
	}
	
	creatureInfo.status.arrowUp.scale.set(app.screen.width/2160);
	creatureInfo.status.arrowDown.scale.set(app.screen.width/2160);
	creatureInfo.status.arrowUp.x = app.screen.width/3;
	creatureInfo.status.arrowUp.y = (app.screen.height*2/5)-textOrigin[1];
	creatureInfo.status.arrowDown.x = app.screen.width/3;
	creatureInfo.status.arrowDown.y = (app.screen.height*3/5)-textOrigin[1];

	creatureInfo.statusIcon = statusIcon;
	creatureInfo.statusText = statusText;
	// var creatureInfoSkill = new PIXI.Container();

	////////////////////
	//INFO SKILL
	////////////////////
	creatureInfo.skill.x = textOrigin[0];
	creatureInfo.skill.y = textOrigin[1];

	var skillText = [];
	var infoSkillArray = [];
	var infoSkillWidth = app.screen.width/4.5;
	var infoSkillHeight = infoSkillWidth/4;
	this.object.skill.forEach((skill,skillIndex) =>{
		let skillName = new Text(skillList.data.skill[skill].name, {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xfefefe, align : 'left'});
		skillName.anchor.set(0,0.5);
		skillName.x = infoSkillWidth/6;
		skillName.y = infoSkillHeight/3;

		// creatureInfoSkill.addChild(skillName);
		// skillText.push(skillName);

		let skillRect = new PIXI.Graphics();
		let skillSelectFill = new PIXI.Graphics();
		let skillSelectStroke = new PIXI.Graphics();

		const skillContainer = new PIXI.Container();
		const skillSelect = new PIXI.Container();
		
		// make the button interactive...
		skillContainer.skillID = skill;
		skillContainer.buttonMode = true;
		skillContainer.interactive = true;
		skillContainer
		// set the mousedown and touchstart callback...
		.on('pointerdown', onInfoSkillDown);

		skillRect.beginFill(0x222222).drawRect(0, 0, infoSkillWidth, infoSkillHeight);
		// skillRect.x = 0;
		// skillRect.y = 0;

		skillContainer.addChild(skillRect);
		skillContainer.rect = skillRect;

		skillSelectStroke.beginFill(0xFFD600).drawRect(0, 0, infoSkillWidth, infoSkillHeight);
		// skillSelectStroke.x = 0;
		// skillSelectStroke.y = 0;
		skillSelectFill.beginFill(0x222222).drawRect(0, 0, infoSkillWidth-skillSelectPadding*2, infoSkillHeight-skillSelectPadding*2);
		skillSelectFill.x = skillSelectPadding;
		skillSelectFill.y = skillSelectPadding;

		skillSelect.addChild(skillSelectStroke);
		skillSelect.addChild(skillSelectFill);
		skillSelect.stroke = skillSelectStroke;
		skillSelect.fill = skillSelectFill;

		skillContainer.addChild(skillSelect);
		skillContainer.selected = skillSelect;

		skillContainer.selected.visible = false;
		
		skillContainer.addChild(skillName);
		// skillContainer.skillName = skillName;

		//Skill position and target markers

		const markerContainer = new PIXI.Container();
		var w = 12.728;	
		const markerPositionArray = [];
		const markerPositionContainer = new PIXI.Container();
		const markerTargetArray = [];
		const markerTargetContainer = new PIXI.Container();
		const markerTargetTeamArray = [];
		const markerTargetTeamContainer = new PIXI.Container();
		const markerTargetSeveralArray = [];
		const markerTargetSeveralContainer = new PIXI.Container();
		skillContainer.addChild(markerContainer);
		// skillContainer.markerContainer = markerContainer;
		
		for(var i = 0; i < 4; i++){
			let posMarker = new PIXI.Graphics();
			if(skillList.data.skill[skill].position[i] == 1){
				posMarker.beginFill(0x66cc66).drawRect(0, -w, w, w);
			}else{
				posMarker.beginFill(0x636363).drawRect(0, -w, w, w);
			}
			posMarker.x = 25 * i;
			posMarker.pivot.set(0.5);
			posMarker.angle = 45;
			markerPositionArray.push(posMarker);
			markerPositionContainer.addChild(posMarker);
		}
		markerContainer.addChild(markerPositionContainer);

		//Filler targets for proper resize and spacing
		const markerSpacerContainer = new PIXI.Container();
		for (var j = 0; j < 4; j++){
			let posMarker = new PIXI.Graphics();				
			posMarker.beginFill(0x222222).drawRect(0, -w, w, w);
			posMarker.x = 25 * j;
			posMarker.pivot.set(0.5);
			posMarker.angle = 45;
			markerSpacerContainer.addChild(posMarker);
		}
		markerContainer.addChild(markerSpacerContainer);

		var skillTargeting = 0;
		skillList.data.skill[skill].tags.forEach(tagName =>{
			if(tagName == "self")		skillTargeting = 1
			if(tagName == "team")		skillTargeting = 2
			if(tagName == "column")		skillTargeting = 3
			if(tagName == "several"){	
				for (var j = 0; j < 3; j++){
					if(skillList.data.skill[skill].several[j] == 1){
						let posMarker = new PIXI.Graphics();				
						posMarker.beginFill(0xFF6961).drawRect(0, -4, 20, 6);
						posMarker.x = 25 * j;
						markerTargetSeveralArray.push(posMarker);
						markerTargetSeveralContainer.addChild(posMarker);
					}	
				}
			}
		});

		if(skillTargeting == 1){
			let targetText = new Text("Self", {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0x66cc66});
			targetText.anchor.set(0, 0.5);
			// skillContainer.targetText.x =  (skillContainer.rect.width/6) + (skillContainer.markerContainer.width * 0.569);
			targetText.x = (infoSkillWidth/6) + ((infoSkillWidth*2/3) * 0.569);
			targetText.y = infoSkillHeight*3/4;
			skillContainer.addChild(targetText);
			skillContainer.targetText = targetText;
		}else if(skillTargeting == 2){
			for(var i = 0; i < 4; i++){
				let posMarker = new PIXI.Graphics();
				if(skillList.data.skill[skill].target[i] == 1){
					posMarker.beginFill(0x66cc66).drawRect(0, -w, w, w);
				}else{
					posMarker.beginFill(0x636363).drawRect(0, -w, w, w);
				}
				posMarker.x = 25 * i;
				posMarker.pivot.set(0.5);
				posMarker.angle = 45;
				markerTargetArray.push(posMarker);
				markerTargetContainer.addChild(posMarker);
			}
		}else if(skillTargeting == 3){
			var columnText = "";
			if(skillList.data.skill[skill]["column"][2] > 0){
				columnText = "+ " + skillList.data.skill[skill]["column"][0];
			}else{
				columnText = "- " + skillList.data.skill[skill]["column"][0];
			}
			let targetText;
			if(skillList.data.skill[skill]["column"][3] > 0){					
				targetText = new Text(columnText, {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0x66cc66});
			}else{
				targetText = new Text(columnText, {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xFF6961});
			}
			targetText.anchor.set(0, 0.5);
			// targetText.x =  (skillContainer.rect.width/6) + (skillContainer.markerContainer.width * 0.569);
			targetText.x = (infoSkillWidth/6) + ((infoSkillWidth*2/3) * 0.569);
			targetText.y = infoSkillHeight*3/4;
			skillContainer.addChild(targetText);
			skillContainer.targetText = targetText;
		}else{
			for(var i = 0; i < 4; i++){
				let posMarker = new PIXI.Graphics();
				if(skillList.data.skill[skill].target[i] == 1){
					posMarker.beginFill(0xFF6961).drawRect(0, -w, w, w);
				}else{
					posMarker.beginFill(0x636363).drawRect(0, -w, w, w);
				}
				posMarker.x = 25 * i;
				posMarker.pivot.set(0.5);
				posMarker.angle = 45;
				markerTargetArray.push(posMarker);
				markerTargetContainer.addChild(posMarker);
			}
		}

		markerTargetContainer.x = 123;
		markerTargetTeamContainer.x = 123;
		markerSpacerContainer.x = 123;

		markerTargetSeveralContainer.x = 135;		

		// markerContainer.addChild(markerPositionContainer);
		markerContainer.addChild(markerTargetContainer);
		markerContainer.addChild(markerTargetTeamContainer);
		markerContainer.addChild(markerTargetSeveralContainer);		

		markerContainer.width = (infoSkillWidth/3)*2;
		markerContainer.height = markerContainer.width/12;

		markerContainer.x = infoSkillWidth/6;
		markerContainer.y = infoSkillHeight*3/4;

		skillContainer.markerTargetSeveralContainer = markerTargetSeveralContainer;
		skillContainer.markerTargetSeveralArray = markerTargetSeveralArray;
		
		skillContainer.markerContainer = markerContainer;		
		skillContainer.markerPositionArray = markerPositionArray;
		skillContainer.markerPositionContainer = markerPositionContainer;		
		skillContainer.markerTargetArray = markerTargetArray;
		skillContainer.markerTargetContainer = markerTargetContainer;
		skillContainer.markerTargetTeamArray = markerTargetTeamArray;
		skillContainer.markerTargetTeamContainer = markerTargetTeamContainer;
		skillContainer.markerTargetTeamContainer.visible = false;

		var skillElement;
		switch(skillList.data.skill[skill].element){
			case 1:
				skillElement = new PIXI.Sprite(resources.element_flora.texture);
				break;
			case 2:
				skillElement = new PIXI.Sprite(resources.element_water.texture);
				break;
			case 3:
				skillElement = new PIXI.Sprite(resources.element_fire.texture);
				break;
			case 4:
				skillElement = new PIXI.Sprite(resources.element_earth.texture);
				break;
			case 5:
				skillElement = new PIXI.Sprite(resources.element_storm.texture);
				break;
			case 6:
				skillElement = new PIXI.Sprite(resources.element_wind.texture);
				break;
			case 7:
				skillElement = new PIXI.Sprite(resources.element_toxic.texture);
				break;
			case 8:
				skillElement = new PIXI.Sprite(resources.element_spirit.texture);
				break;
			case 9:
				skillElement = new PIXI.Sprite(resources.element_void.texture);
				break;
			default:
				skillElement = new PIXI.Sprite(resources.element_flora.texture);
				break;
		}
		skillElement.anchor.set(0, 0.5);
		// skillElement.scale.set(elementIconSize);
		skillElement.width = infoSkillWidth/11;
		skillElement.height = skillElement.width * 2.3;
		skillElement.x = skillMargin;
		skillElement.y = infoSkillHeight/2;
		skillContainer.addChild(skillElement);
		skillContainer.skillElement = skillElement;
		creatureInfo.skill.addChild(skillContainer);

		if(skillIndex%2 == 0){
			skillContainer.x = 0;
			skillContainer.y = ((infoSkillHeight+10)/2)*skillIndex;
		}else{
			skillContainer.x = infoSkillWidth + 10;
			skillContainer.y = ((infoSkillHeight+10)/2)*(skillIndex-1);
		}

		infoSkillArray.push(skillContainer);
	});
	
	infoSkillArray[0].selected.visible = true;

	creatureInfo.info_skill_text.forEach((text,textIndex) =>{
		text.style.fontSize = skillNameFontSize;
		if(textIndex%2 == 0 && textIndex<7){
			text.x = app.screen.width/10;
			text.y = textIndex * app.screen.height/36 + infoSkillHeight*2+30;
			// text.y = textIndex * infoSkillMargin[0] + infoSkillMargin[1];
		}else{
			// text.x = creatureInfo.info_skill_text[textIndex-1].width + app.screen.width/96;
			text.x = app.screen.width/10 + 25;
			// text.y = (textIndex-1) * infoSkillMargin[0] + infoSkillMargin[1];
			text.y = (textIndex-1) * app.screen.height/36 + infoSkillHeight*2+30;
		}
	});

	if(skillList.data.skill[this.object.skill[0]].power == 0){
		creatureInfo.info_skill_text[1].text = "--";
	}else{
		creatureInfo.info_skill_text[1].text = skillList.data.skill[this.object.skill[0]].power;
	}
	if(skillList.data.skill[this.object.skill[0]].accuracy == 110){
		creatureInfo.info_skill_text[3].text = "--";
	}else{
		creatureInfo.info_skill_text[3].text = skillList.data.skill[this.object.skill[0]].accuracy;
	}
	creatureInfo.info_skill_text[5].text = skillList.data.skill[this.object.skill[0]].type;
	creatureInfo.info_skill_text[7].text = skillList.data.skill[this.object.skill[0]].description;
	creatureInfo.info_skill_text[7].style.wordWrapWidth = app.screen.width/3.5;

	creatureInfo.skillText = skillText;
	creatureInfo.infoSkillArray = infoSkillArray;

	////////////////////
	//INFO ITEM
	////////////////////
	creatureInfo.item.x = textOrigin[0];
	creatureInfo.item.y = textOrigin[1];
	var infoItemArray = [];
	var infoItemSprite = [];
	var infoItemHeight = (app.screen.width/18)*2 + 10;
	var infoItemWidth = infoItemHeight/2;

	for(var i = 0; i < 2; i++){
		let itemRect = new PIXI.Graphics();
		itemRect.beginFill(0x222222).drawRect(0, 0, infoItemWidth, infoItemHeight);
		creatureInfo.item.addChild(itemRect);
		if(i%2 == 0){
			itemRect.x = 0;
			itemRect.y = ((infoItemHeight+10)/2)*i;
		}else{
			itemRect.x = infoItemWidth + 10;
			itemRect.y = ((infoItemHeight+10)/2)*(i-1);
		}
	}

	this.object.item.forEach((item,itemIndex) =>{
		// if(itemList.data.item[item].size == 2){
		// 	infoItemWidth = infoItemHeight+10;
		// }
		
		let itemRect = new PIXI.Graphics();
		let itemSelectFill = new PIXI.Graphics();
		let itemSelectStroke = new PIXI.Graphics();

		const itemContainer = new PIXI.Container();
		const itemSelect = new PIXI.Container();
		
		// make the button interactive...
		itemContainer.itemID = item;
		itemContainer.buttonMode = true;
		itemContainer.interactive = true;
		itemContainer
		// set the mousedown and touchstart callback...
		.on('pointerdown', onInfoItemDown);

		itemRect.beginFill(0x222222).drawRect(0, 0, infoItemWidth, infoItemHeight);

		itemContainer.addChild(itemRect);
		itemContainer.rect = itemRect;

		itemSelectStroke.beginFill(0xFFD600).drawRect(0, 0, infoItemWidth, infoItemHeight);
		itemSelectFill.beginFill(0x222222).drawRect(0, 0, infoItemWidth-skillSelectPadding*2, infoItemHeight-skillSelectPadding*2);
		itemSelectFill.x = skillSelectPadding;
		itemSelectFill.y = skillSelectPadding;

		itemSelect.addChild(itemSelectStroke);
		itemSelect.addChild(itemSelectFill);
		itemSelect.stroke = itemSelectStroke;
		itemSelect.fill = itemSelectFill;

		itemContainer.addChild(itemSelect);
		itemContainer.selected = itemSelect;

		let spriteItem = new PIXI.Sprite(resources[itemList.data.item[item].code].texture);
		spriteItem.width = infoItemWidth-skillSelectPadding*2;
		spriteItem.height = infoItemHeight-skillSelectPadding*2;
		spriteItem.x = skillSelectPadding;
		spriteItem.y = skillSelectPadding;
		itemContainer.addChild(spriteItem);
		infoItemSprite.push(spriteItem);

		if(itemList.data.item[item].size == 2){
			let spriteItem = new PIXI.Sprite(resources[itemList.data.item[item].code].texture);

			const filter1 = new PIXI.filters.ColorMatrixFilter();
			filter1.desaturate();
			// filter1.greyscale(0.5);
			spriteItem.filters = [filter1];

			spriteItem.width = infoItemWidth-skillSelectPadding*2;
			spriteItem.height = infoItemHeight-skillSelectPadding*2;
			spriteItem.x = infoItemWidth + 10 + skillSelectPadding;
			spriteItem.y = skillSelectPadding;
			// itemContainer.addChild(spriteItem);
			creatureInfo.item.addChild(spriteItem);
			infoItemSprite.push(spriteItem);
		}

		itemContainer.selected.visible = false;

		creatureInfo.item.addChild(itemContainer);

		if(itemIndex%2 == 0){
			itemContainer.x = 0;
			// itemContainer.y = ((infoItemHeight+10)/2)*itemIndex;
		}else{
			itemContainer.x = infoItemWidth + 10;
			// itemContainer.y = ((infoItemHeight+10)/2)*(itemIndex-1);
		}

		infoItemArray.push(itemContainer);
	});
	infoItemArray[0].selected.visible = true;

	creatureInfo.info_item_text.forEach((text,textIndex) =>{
		text.style.fontSize = skillNameFontSize;
		if(textIndex%2 == 0 && textIndex<7){
			text.x = app.screen.width/10;
			text.y = textIndex * app.screen.height/36 + infoSkillHeight*2+30;
		}else{
			text.x = app.screen.width/10 + 25;
			text.y = (textIndex-1) * app.screen.height/36 + infoSkillHeight*2+30;
		}
	});

	creatureInfo.info_item_text[1].text = itemList.data.item[this.object.item[0]].name;
	creatureInfo.info_item_text[3].text = itemList.data.item[this.object.item[0]].type;
	creatureInfo.info_item_text[5].text = itemList.data.item[this.object.item[0]].category;
	creatureInfo.info_item_text[7].text = itemList.data.item[this.object.item[0]].description;
	creatureInfo.info_item_text[7].style.wordWrapWidth = app.screen.width/3.5;

	creatureInfo.infoItemArray = infoItemArray;
	creatureInfo.infoItemSprite = infoItemSprite;

	////////////////////
	//INFO STAT
	////////////////////

	// var textOrigin = [app.screen.width/2,app.screen.height/6];

	creatureInfo.stat.x = textOrigin[0];
	creatureInfo.stat.y = app.screen.height/8;

	creatureInfo.info_stat_text.forEach((text,textIndex) =>{
		text.style.fontSize = skillNameFontSize;
		if(textIndex < 3){
			text.x = ((textIndex%3)+1) * app.screen.width/10 + app.screen.width/50;
		}else if(textIndex%3 != 0){
			text.x = (textIndex%3) * app.screen.width/10 + app.screen.width/50;
			text.y = Math.floor(textIndex/3) * app.screen.height/12;
		}else{
			text.x = app.screen.width/15;
			text.y = Math.floor(textIndex/3) * app.screen.height/12;
		}
	});

	var toAllocate = this.object.level * 3;
	this.object.statDis.forEach(statDis =>{
		toAllocate -= statDis;
	});

	creatureInfo.info_stat_increase.forEach((increase, increaseIndex)=>{
		increase.increaseText.style.fontSize = skillNameFontSize;
		increase.x = 3 * app.screen.width/10 + app.screen.width/50;
		increase.y = (increaseIndex+1) * app.screen.height/12;

		creatureInfo.info_stat_maxed[increaseIndex].style.fontSize = skillNameFontSize;
		creatureInfo.info_stat_maxed[increaseIndex].x = 3 * app.screen.width/10 + app.screen.width/50 + increase.increaseText.x;
		creatureInfo.info_stat_maxed[increaseIndex].y = (increaseIndex+1) * app.screen.height/12;
		if(this.object.statDis[increaseIndex] == 150){
			increase.visible = false;
			creatureInfo.info_stat_maxed[increaseIndex].visible = true;
			creatureInfo.info_stat_text[increaseIndex*3+5].style.fill = '#FFd600';
		}else if(toAllocate == 0){
			increase.visible = false;
			creatureInfo.info_stat_maxed[increaseIndex].visible = false;
			creatureInfo.info_stat_text[increaseIndex*3+5].style.fill = '#fefefe';
		}else{
			increase.visible = true;
			creatureInfo.info_stat_maxed[increaseIndex].visible = false;
			creatureInfo.info_stat_text[increaseIndex*3+5].style.fill = '#fefefe';
		}
	});

	creatureInfo.info_stat_text[0].text = "Base";
	creatureInfo.info_stat_text[1].text = "Allocated";
	
	creatureInfo.info_stat_text[2].text = "To allocate: " + toAllocate;
	creatureInfo.info_stat_text[3].text = "Health points:";
	creatureInfo.info_stat_text[4].text = creatureList.data.creature[this.object.id].hp;
	creatureInfo.info_stat_text[5].text = this.object.statDis[0];
	creatureInfo.info_stat_text[6].text = "Dodge:";
	creatureInfo.info_stat_text[7].text = creatureList.data.creature[this.object.id].dodge;
	creatureInfo.info_stat_text[8].text = this.object.statDis[1];
	creatureInfo.info_stat_text[9].text = "Physical attack:";
	creatureInfo.info_stat_text[10].text = creatureList.data.creature[this.object.id].patk;
	creatureInfo.info_stat_text[11].text = this.object.statDis[2];
	creatureInfo.info_stat_text[12].text = "Physical defense:";
	creatureInfo.info_stat_text[13].text = creatureList.data.creature[this.object.id].pdef;
	creatureInfo.info_stat_text[14].text = this.object.statDis[3];
	creatureInfo.info_stat_text[15].text = "Special attack:";
	creatureInfo.info_stat_text[16].text = creatureList.data.creature[this.object.id].satk;
	creatureInfo.info_stat_text[17].text = this.object.statDis[4];
	creatureInfo.info_stat_text[18].text = "Special defense:";
	creatureInfo.info_stat_text[19].text = creatureList.data.creature[this.object.id].sdef;
	creatureInfo.info_stat_text[20].text = this.object.statDis[5];
	creatureInfo.info_stat_text[21].text = "Speed:";
	creatureInfo.info_stat_text[22].text = creatureList.data.creature[this.object.id].spd;
	creatureInfo.info_stat_text[23].text = this.object.statDis[6];
	// if(skillIndex%2 == 0){
	// 	textSkill.x = 0;
	// 	textSkill.y = 100*skillIndex;
	// }else{
	// 	textSkill.x = 200;
	// 	textSkill.y = 100*(skillIndex-1);
	// }

	// console.log(app.screen.width/2 + ", " + creatureInfo.status.width);
}

function onBtnStatUp(){
	console.log(selectedHP.name);
	var toAllocate = selectedHP.level * 3;
	selectedHP.statDis.forEach(statDis =>{
		toAllocate -= statDis;
	});
	if(toAllocate > 0){
		selectedHP.statDis[this.identifier] += 1;
		if(selectedHP.statDis[this.identifier] == 150){
			creatureInfo.info_stat_maxed[this.identifier].visible = true;
			creatureInfo.info_stat_increase[this.identifier].visible = false;
			creatureInfo.info_stat_text[this.identifier*3+5].style.fill = '#FFd600';
		}
		toAllocate--;
		creatureInfo.info_stat_text[this.identifier*3+5].text = selectedHP.statDis[this.identifier];
		creatureInfo.info_stat_text[2].text = "To allocate: " + toAllocate;
		if(toAllocate==0){
			creatureInfo.info_stat_increase.forEach((increase, increaseIndex)=>{
				increase.visible = false;
			});
		}
	}else{
		console.log("No stat to allocate");
	}
}

function onBtnStatusUp(){
	console.log("status up");
	var currIndex = 0;
	creatureInfo.status.pages.forEach((statusPage,pageIndex)=>{
		if(statusPage.visible == true){
			currIndex = pageIndex;
		}
	});
	creatureInfo.status.arrowDown.interactive = true;
	creatureInfo.status.arrowDown.texture = resources.arrow_down_n.texture;
	creatureInfo.status.pages[currIndex].visible = false;
	creatureInfo.status.pages[currIndex-1].visible = true;
	if(currIndex-1 == 0){
		this.texture = resources.arrow_up_d.texture;
		this.interactive = false;
	}
}

function onBtnStatusDown(){	
	console.log("status down " + creatureInfo.status.pages.length);
	var currIndex = 0;
	creatureInfo.status.pages.forEach((statusPage,pageIndex)=>{
		if(statusPage.visible == true){
			currIndex = pageIndex;
		}
	});
	creatureInfo.status.arrowUp.interactive = true;
	creatureInfo.status.arrowUp.texture = resources.arrow_up_n.texture;
	creatureInfo.status.pages[currIndex].visible = false;
	creatureInfo.status.pages[currIndex+1].visible = true;
	if(currIndex+1 == creatureInfo.status.pages.length-1){
		this.texture = resources.arrow_down_d.texture;
		this.interactive = false;
	}
}

function onInfoSkillDown(){
	creatureInfo.infoSkillArray.forEach(skillContainer=>{
		skillContainer.selected.visible = false;
	});
	this.selected.visible = true;

	if(skillList.data.skill[this.skillID].power == 0){
		creatureInfo.info_skill_text[1].text = "--";
	}else{
		creatureInfo.info_skill_text[1].text = skillList.data.skill[this.skillID].power;
	}
	if(skillList.data.skill[this.skillID].accuracy == 110){
		creatureInfo.info_skill_text[3].text = "--";
	}else{
		creatureInfo.info_skill_text[3].text = skillList.data.skill[this.skillID].accuracy;
	}
	// creatureInfo.info_skill_text[1].text = skillList.data.skill[this.skillID].power;
	// creatureInfo.info_skill_text[3].text = skillList.data.skill[this.skillID].accuracy;
	creatureInfo.info_skill_text[5].text = skillList.data.skill[this.skillID].type;
	creatureInfo.info_skill_text[7].text = skillList.data.skill[this.skillID].description;
}

function onInfoItemDown(){
	creatureInfo.infoItemArray.forEach(itemContainer=>{
		itemContainer.selected.visible = false;
	});
	this.selected.visible = true;

	creatureInfo.info_item_text[1].text = itemList.data.item[this.itemID].name;
	creatureInfo.info_item_text[3].text = itemList.data.item[this.itemID].type;
	creatureInfo.info_item_text[5].text = itemList.data.item[this.itemID].category;
	creatureInfo.info_item_text[7].text = itemList.data.item[this.itemID].description;
}

function onSkillDown(){
	enemyArray.forEach(enemyObject=>{
		enemyObject.healthBar.target.visible = false;
		enemyObject.healthBar.heal.visible = false;
		enemyObject.healthBar.move.visible = false;
	});
	heroArray.forEach(heroObject=>{
		heroObject.healthBar.target.visible = false;
		heroObject.healthBar.heal.visible = false;
		heroObject.healthBar.move.visible = false;
	});
	skillContainerArray.forEach(skillContainer=>{
		skillContainer.selected.visible = false;
	});
	skillContainerArray[this.identifier[0]].selected.visible = true;
	selectedSkill = this.identifier[1];						//Skill ID
	console.log(
		"\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n>>>>>>>>>>>>>> Skill: " + 
		skillList.data.skill[this.identifier[1]].name + 
		" <<<<<<<<<<<<<<\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n");

	// console.log("Skill: " + skillList.data.skill[this.identifier[1]].name);
	var column = false;
	var several = false;
	var displace = false;
	var heal = false;
	var splash = false;
	var self = false;
	var team = false;
	skillList.data.skill[this.identifier[1]].tags.forEach(tagName =>{
		if(tagName == "column")			column = true;
			//Column tag breakdown = [Number of targets, Decay, Direction, Heal/Damage]						
		if(tagName == "heal")			heal = true;
		if(tagName == "several")		several = true
		if(tagName == "displace")		displace = true
		if(tagName == "splash")			splash = true
		if(tagName == "self")			self = true
		if(tagName == "team")			team = true
	});
	validMoveObjectArray = [];
	validSkillObjectArray = [];
	if(column){
		var columnObjectArray = [];
		//Ahead
		if(skillList.data.skill[this.identifier[1]].column[2] > 0){
			var switchSide = false;
			//Get position to increment from
			var temp = selectedVita.pos;			
			for(var i = 0; i < skillList.data.skill[this.identifier[1]].column[0]; i++){
				if(temp > 1 && !switchSide){
					temp--;
				}else if(temp == 1 && !switchSide){
					switchSide = true;
				}else{
					temp++;
				}
				if(selectedVita.hero){
					if(!switchSide){
						heroArray.forEach(arrayCreature => {
							if(arrayCreature.pos == temp)		columnObjectArray.push(arrayCreature)
						});
					}else{
						enemyArray.forEach(arrayCreature => {
							if(arrayCreature.pos == temp)		columnObjectArray.push(arrayCreature)
						});
					}
				}else{
					if(!switchSide){
						enemyArray.forEach(arrayCreature => {
							if(arrayCreature.pos == temp)		columnObjectArray.push(arrayCreature)
						});
					}else{
						heroArray.forEach(arrayCreature => {
							if(arrayCreature.pos == temp)		columnObjectArray.push(arrayCreature)
						});
					}
				}
			}
		}
		//Behind
		else{
			//Get position to increment from
			var temp = selectedVita.pos + selectedVita.size - 1;

			for(var i = 0; i < skillList.data.skill[this.identifier[1]].column[0]; i++){
				temp++;
				console.log("=================================" + temp);
				if(selectedVita.hero){
					heroArray.forEach(arrayCreature => {
						if(arrayCreature.pos == temp)			columnObjectArray.push(arrayCreature)
					});
				}else{
					enemyArray.forEach(arrayCreature => {
						if(arrayCreature.pos == temp)			columnObjectArray.push(arrayCreature)
					});
				}
			}			
		}
		validSkillObjectArray.push(columnObjectArray);
	}

	if(selectedVita.hero){
		if(team){
			heroArray.forEach(arrayCreature =>{
				var targeted = false;
				skillList.data.skill[this.identifier[1]].target.forEach((skillTarget, skillTargetIndex)=> {
					if(skillTarget == 1 && !targeted){
						var posTracker = skillTargetIndex+1;
						if(arrayCreature.size == 2){
							var pos1 = arrayCreature.pos;
							var pos2 = arrayCreature.pos + 1;
							if(posTracker == pos1 || posTracker == pos2){
								validSkillObjectArray.push([arrayCreature]);
								targeted = true;
							}
						}else{
							if(posTracker == arrayCreature.pos){
								validSkillObjectArray.push([arrayCreature]);
								targeted = true;
							}
						}
					}
				});
			});
		}
		else{
			enemyArray.forEach(arrayCreature =>{
				var targeted = false;
				skillList.data.skill[this.identifier[1]].target.forEach((skillTarget, skillTargetIndex)=> {
					if(skillTarget == 1 && !targeted){
						var posTracker = skillTargetIndex+1;
						if(arrayCreature.size == 2){
							var pos1 = arrayCreature.pos;
							var pos2 = arrayCreature.pos + 1;
							if(posTracker == pos1 || posTracker == pos2){
								validSkillObjectArray.push([arrayCreature]);
								targeted = true;
							}
						}else{
							if(posTracker == arrayCreature.pos){
								validSkillObjectArray.push([arrayCreature]);
								targeted = true;
							}
						}
					}
				});
			});
		}
	}else{
		heroArray.forEach(arrayCreature =>{
			var targeted = false;
			skillList.data.skill[this.identifier[1]].target.forEach((skillTarget, skillTargetIndex)=> {
				if(skillTarget == 1 && !targeted){
					var posTracker = skillTargetIndex+1;
					if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(posTracker == pos1 || posTracker == pos2){
							validSkillObjectArray.push([arrayCreature]);
							targeted = true;
						}
					}else{
						if(posTracker == arrayCreature.pos){
							validSkillObjectArray.push([arrayCreature]);
							targeted = true;
						}
					}
				}
			});
		});
	}
	if(self){
		validSkillObjectArray = [];
		validSkillObjectArray.push([selectedVita]);
	}
	if(splash){
		validSkillObjectArray = [];
		if(selectedVita.hero){
			enemyArray.forEach(arrayCreature =>{
				var targeted = false;
				skillList.data.skill[this.identifier[1]].target.forEach((skillTarget, skillTargetIndex)=> {
					if(skillTarget == 1 && !targeted){
						var posTracker = skillTargetIndex+1;
						if(arrayCreature.size == 2){
							var pos1 = arrayCreature.pos;
							var pos2 = arrayCreature.pos + 1;
							if(posTracker == pos1 || posTracker == pos2){
								var arrayTarget = [];
								arrayTarget.push(arrayCreature);
								enemyArray.forEach(arrayCreature2 =>{
									if(arrayCreature2.size == 2){
										if(arrayCreature2.pos+1 == pos1-1){
											arrayTarget.push(arrayCreature2);
										}else if(arrayCreature2.pos == pos2+1){
											arrayTarget.push(arrayCreature2);
										}
									}else if(arrayCreature2.size == 1){
										if(arrayCreature2.pos == pos1-1){
											arrayTarget.push(arrayCreature2);
										}else if(arrayCreature2.pos == pos2+1){
											arrayTarget.push(arrayCreature2);
										}
									}
								});
								validSkillObjectArray.push(arrayTarget);
								targeted = true;
							}
						}else{
							if(posTracker == arrayCreature.pos){
								var arrayTarget = [];
								arrayTarget.push(arrayCreature);
								enemyArray.forEach(arrayCreature2 =>{
									if(arrayCreature2.size == 2){
										if(arrayCreature2.pos+1 == arrayCreature.pos-1){
											arrayTarget.push(arrayCreature2);
										}else if(arrayCreature2.pos == arrayCreature.pos+1){
											arrayTarget.push(arrayCreature2);
										}
									}else if(arrayCreature2.size == 1){
										if(arrayCreature2.pos == arrayCreature.pos-1){
											arrayTarget.push(arrayCreature2);
										}else if(arrayCreature2.pos == arrayCreature.pos+1){
											arrayTarget.push(arrayCreature2);
										}
									}
								});
								validSkillObjectArray.push(arrayTarget);
								targeted = true;
							}
						}
					}
				});
			});
		}else{
			heroArray.forEach(arrayCreature =>{
				var targeted = false;
				skillList.data.skill[this.identifier[1]].target.forEach((skillTarget, skillTargetIndex)=> {
					if(skillTarget == 1 && !targeted){
						var posTracker = skillTargetIndex+1;
						if(arrayCreature.size == 2){
							var pos1 = arrayCreature.pos;
							var pos2 = arrayCreature.pos + 1;
							if(posTracker == pos1 || posTracker == pos2){
								validSkillObjectArray.push([arrayCreature]);
								targeted = true;
							}
						}else{
							if(posTracker == arrayCreature.pos){
								validSkillObjectArray.push([arrayCreature]);
								targeted = true;
							}
						}
					}
				});
			});
		}
	}

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
		var array11 = [];
		var joinedSeveral = skillList.data.skill[this.identifier[1]].several.join();
		if(joinedSeveral == "0,0,1"){
			if(selectedVita.hero){
				enemyArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array11.push(arrayCreature);
						}	
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array11.push(arrayCreature);
						}
					}
				});
			}else{
				heroArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array11.push(arrayCreature);
						}	
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array11.push(arrayCreature);
						}	
					}
				});
			}
			validSkillObjectArray = [];
			validSkillObjectArray = [array11];
		}else if(joinedSeveral == "0,1,0"){
			if(selectedVita.hero){
				enemyArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3){
							array11.push(arrayCreature);
						}	
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3){
							array11.push(arrayCreature);
						}	
					}
				});
			}else{
				heroArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3){
							array11.push(arrayCreature);
						}	
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3){
							array11.push(arrayCreature);
						}	
					}
				});
			}
			validSkillObjectArray = [];
			validSkillObjectArray = [array11];
		}else if(joinedSeveral == "1,0,0"){
			if(selectedVita.hero){
				enemyArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2){
							array11.push(arrayCreature);
						}	
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2){
							array11.push(arrayCreature);
						}	
					}
				});
			}else{
				heroArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2){
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2){
							array11.push(arrayCreature);
						}
					}
				});
			}
			validSkillObjectArray = [];
			validSkillObjectArray = [array11];
		}else if(joinedSeveral == "1,1,0"){
			if(selectedVita.hero){
				enemyArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3){
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3){
							array11.push(arrayCreature);
						}
					}
				});
			}else{
				heroArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3){
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3){
							array11.push(arrayCreature);
						}
					}
				});
			}
			validSkillObjectArray = [];
			validSkillObjectArray = [array11];
		}else if(joinedSeveral == "0,1,1"){
			if(selectedVita.hero){
				enemyArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array11.push(arrayCreature);
						}
					}
				});
			}else{
				heroArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array11.push(arrayCreature);
						}
					}
				});
			}
			validSkillObjectArray = [];
			validSkillObjectArray = [array11];
		}else if(joinedSeveral == "1,1,1"){
			if(selectedVita.hero){
				enemyArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array11.push(arrayCreature);
						}
					}
				});
			}else{
				heroArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array11.push(arrayCreature);
						}
					}
				});
			}
			validSkillObjectArray = [];
			validSkillObjectArray = [array11];
		}else if(joinedSeveral == "1,0,1"){
			var array22 = [];
			if(selectedVita.hero){
				enemyArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2){
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2){
							array11.push(arrayCreature);
						}
					}
				});
				enemyArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array22.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array22.push(arrayCreature);
						}
					}
				});
			}else{
				heroArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2){
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2){
							array11.push(arrayCreature);
						}
					}
				});
				heroArray.forEach(arrayCreature => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array22.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array22.push(arrayCreature);
						}
					}
				});
			}
			validSkillObjectArray = [array11, array22];
		}
	}
	// console.log("validSkillObjectArray: " + validSkillObjectArray);

	validSkillObjectArray.forEach(object1=>{
		object1.forEach(object2=>{
			console.log("Target: " + object2.name);
			if(heal || self || team){
				if(object2 == selectedVita){
					object2.healthBar.select.animate.kill();
					object2.healthBar.select.visible = false;
					var healWidth = object2.healthBar.heal.width;
					object2.healthBar.heal.animate.to(object2.healthBar.heal, 1, {width:healWidth+20, ease:Sine.easeInOut});
					object2.healthBar.heal.animate.to(object2.healthBar.heal, 0.5, {width:healWidth, ease:Sine.easeInOut});
					object2.healthBar.heal.animate.play(0);
					object2.healthBar.heal.visible = true;
				}else{
					object2.healthBar.heal.visible = true;	
				}
			}else{
				if(object2 == selectedVita){
					object2.healthBar.target.visible = true;
				}else{
					object2.healthBar.target.visible = true;
				}
			}
		});
	});
	
}

function onCreatureDown(){
	console.log("\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
	console.log("================================  DAMAGE  CALCULATIONS  ================================");
	console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n\n");
	var targetedVitaIndex = 0;
	var animateBattle = false;
	var animatePopup = false;
	var animateMove = false;
	var animateStatus = false;
	var animateHealth = false;
	var correctTarget = false;
	userInput = true;
	if(validSkillObjectArray.length > 0){
		skillContainerArray.forEach(skillContainer=>{
			skillContainer.interactive = false;
		});		
		var tagSplash = false;
		var tagMultiple = false;
		var tagStatus = false;
		var tagStatChange = false;
		var tagHazard = false;
		var tagTurns = false;
		var tagDisplace = false;
		skillList.data.skill[selectedSkill].tags.forEach(tagName =>{
			if(tagName == "splash")			tagSplash = true;
			if(tagName == "displace")		tagDisplace = true;
			if(tagName == "status")			tagStatus = true;
			if(tagName == "statchange")		tagStatus = true;
			if(tagName == "hazard")			tagHazard = true;
		});
		validSkillObjectArray.forEach((targeted, targetedIndex) => {
			if(tagSplash){
				if(this.object == targeted[0]){
					correctTarget = true;
					targetedVitaIndex = targetedIndex;
				}
			}
			else{
				targeted.forEach(arrayElement => {
					if(this.object == arrayElement){
						correctTarget = true;
						targetedVitaIndex = targetedIndex;
					}
				});
			}
		});

		//Rearrange array for splash targets
		if(tagSplash){
			var tempArray = [];
			validSkillObjectArray[targetedVitaIndex].forEach(arrayElement =>{
				tempArray[arrayElement.pos-1] = arrayElement;
			});
			var filtered = tempArray.filter(function (el) {
				return el != null;
			});
			validSkillObjectArray[targetedVitaIndex] = filtered;
		}

		if(correctTarget){
			animateBattle = true;
			animatePopup = true;

			console.log(selectedVita.name + " uses " + skillList.data.skill[selectedSkill].name + " on:");
			validSkillObjectArray[targetedVitaIndex].forEach(arrayElement =>{
				console.log(arrayElement.name + "\n");
			});

			var hitArray = calculateHit(selectedVita, validSkillObjectArray[targetedVitaIndex]);
			console.log("Hit/miss: " + hitArray);
			hitArray.forEach(hitValue =>{
				if(hitValue && tagDisplace)		animateMove = true;
				if(hitValue && tagStatus)		animateStatus = true;
			});
			var dmgArray = calculateDamage(selectedVita, validSkillObjectArray[targetedVitaIndex], hitArray);
			console.log("Damage: " + dmgArray);
			// console.log(dmgArray[0]);
			// console.log(dmgArray[0][0]);
			dmgArray.forEach(dmgValue => {
				if(dmgValue[0] > 0)				animateHealth = true;
				if(dmgValue[1] > 0)				animateStatus = true;
			});
		}else{
			console.log("Invalid skill target");
		}
		animationSequence(selectedVita, validSkillObjectArray[targetedVitaIndex], animateBattle, animatePopup, animateStatus, animateHealth, animateMove);
	}else if(validMoveObjectArray.length > 0){
		var targetedVita = 0;
		validMoveObjectArray.forEach((targeted, targetedIndex) => {
			if(Array.isArray(targeted)){
				targeted.forEach(arrayElement => {
					if(this.object == arrayElement){
						correctTarget = true;
						targetedVita = targeted;
						targetedVitaIndex = targetedIndex;
					}	
				});
			}
			if(this.object == targeted){
				correctTarget = true;
				targetedVita = targeted;
				targetedVitaIndex = targetedIndex;
			}
		});

		if(correctTarget){
			animateMove = true;
			console.log(selectedVita.name + " moves with " + targetedVita.name);
			var moveTo, moveFrom, displacement;
			if(selectedVita.hero){
				heroArray.forEach((object,objectIndex)=>{
					if(selectedVita == object)			moveFrom = objectIndex;
					if(targetedVita == object)			moveTo = objectIndex;
				});
				// fieldHeroHazard.forEach(arrayItem =>{
				// 	// dmgArray = [];
				// 	if(arrayItem[0] == moveTo)			animateHealth = true;
				// });
			}else{
				enemyArray.forEach((object,objectIndex)=>{
					if(selectedVita == object)			moveFrom = objectIndex;
					if(targetedVita == object)			moveTo = objectIndex;
				});
				// fieldEnemyHazard.forEach(arrayItem =>{
				// 	// dmgArray = [];
				// 	if(arrayItem[0] == moveTo)			animateHealth = true;
				// });
			}
			displacement = moveFrom - moveTo;
			selectedVita.newMove = displacement;
		}else{
			console.log("Invalid move target");	
		}
		animationSequence(selectedVita, [selectedVita], animateBattle, animatePopup, animateStatus, animateHealth, animateMove);
	}else{
		console.log("Action not selected");	
	}
	
	console.log("animateBattle: " + animateBattle + "\nanimatePopup: " + animatePopup + "\nanimateMove: " + animateMove + "\nanimateStatus: " + animateStatus + "\nanimateHealth: " + animateHealth);
	console.log("\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
	console.log("========================================================================================");
	console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n\n");
}

function calculateHit(attacker, defender){
	var hitArray = [];
	var attackerAccMod = attacker.accMod;
	defender.forEach(targeted =>{
		var defenderDodge = targeted.dodge;
		var defenderDodgeMod = targeted.dodgeMod;
		var accDifference = attackerAccMod - defenderDodgeMod;
		var hitMod = 1;
		if(accDifference > 0){
			hitMod = (Math.abs(accDifference) + 3)/3;
		}else if(accDifference < 0){
			hitMod = 3/(Math.abs(accDifference) + 3);
		}

		if(skillList.data.skill[selectedSkill].accuracy == 110){
			var hitChance = 1;
		}else{
			var hitChance = ((skillList.data.skill[selectedSkill].accuracy/100) - (defenderDodge/200)) * hitMod;
		}
		var hitRoll = Math.random();

		console.log("AccMod: " + attackerAccMod + " Dodge: " + defenderDodge + " DodgeMod: " + defenderDodgeMod + " Diff: " + accDifference + "\nHitMod: " + hitMod + " HitChance: " + hitChance + " HitRoll: " + hitRoll);

		if(hitRoll < hitChance){
			hitArray.push(true);
		}else{
			hitArray.push(false);
		}
	});
	return hitArray;
}

function calculateDamage(attacker, defender, hitArray){
	var dmgArray = [];
	var level = attacker.level;
	var attack = 0;
	var SEAB = 1;
	// var attackerElements = [];
	var defense = 1;
	// var defenderElements = [];
	var effectiveness = 1;
	var skillPower = skillList.data.skill[selectedSkill].power;
	// var totalDamage = 0;
	// var critDamage = 0;
	var skillHeal = false;
	var skillOther = false;
	var skillStatus = false;

	if(skillList.data.skill[selectedSkill].type == "Physical"){
		attack = attacker.patk;
	}else if(skillList.data.skill[selectedSkill].type == "Special"){
		attack = attacker.satk;
	}else{
		skillOther = true;
	}
	
	attacker.element.forEach(creatureElement =>{
		if(creatureElement == skillList.data.skill[selectedSkill].element)		SEAB = 1.5;
	});

	defender.forEach((targeted, targetedIndex) => {
		var targetStatus = [];
		var effectiveness = 1;
		var totalDamage = 0;
		var critDamage = 0;

		targeted.dmgContainer.dmgPopup.dmgEffective.visible = true;
		targeted.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
			dmgNumArrayItem.style.fill = '#D80000';
			dmgNumArrayItem.style.stroke = '#222222';
			dmgNumArrayItem.visible = false;
		});	

		if(hitArray[targetedIndex]){
			var multiHitNum = 1;
			skillList.data.skill[selectedSkill].tags.forEach(tagName =>{
				if(tagName == "heal"){
					skillHeal = true;
					targeted.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
						dmgNumArrayItem.style.fill = '#1bc617';
						dmgNumArrayItem.style.stroke = '#052805';
					});
				}
				if(tagName == "multiple"){
					multiHitNum = Math.floor(Math.random() * (skillList.data.skill[selectedSkill].multiple[1] - skillList.data.skill[selectedSkill].multiple[0] + 1) + skillList.data.skill[selectedSkill].multiple[0]);
				}

				if(tagName == "status"){
					skillStatus = true;
					targetStatus.push([skillList.data.skill[selectedSkill].status, skillList.data.skill[selectedSkill].turns]);
				}

				if(tagName == "displace"){
					targeted.newMove = skillList.data.skill[selectedSkill].displace[0];
				}

				if(tagName == "hazard"){
					console.log("HAZARD");
					let hazardSprite, hazardSprite2;
					switch(skillList.data.skill[selectedSkill].hazard[0]){
						case 1:
							hazardSprite = new PIXI.Sprite(resources.hazard_lit.texture);
							hazardSprite2 = new PIXI.Sprite(resources.hazard_lit.texture);
							break;
						case 2:
							hazardSprite = new PIXI.Sprite(resources.hazard_spikes.texture);
							hazardSprite2 = new PIXI.Sprite(resources.hazard_spikes.texture);
							break;
						case 3:
							hazardSprite = new PIXI.Sprite(resources.hazard_spores.texture);
							hazardSprite2 = new PIXI.Sprite(resources.hazard_spores.texture);
							break;
						default:
							hazardSprite = new PIXI.Sprite(resources.hazard_lit.texture);
							hazardSprite2 = new PIXI.Sprite(resources.hazard_lit.texture);
					}
					
					hazardSprite.anchor.set(0.5,1);	
					hazardSprite2.anchor.set(0.5,1);

					if(targeted.hero){
						hazardSprite.scale.set(hazardSize,hazardSize);
						hazardSprite2.scale.set(hazardSize,hazardSize);
						if(targeted.size > 1){
							//[position, hazardType, damage, turn]
							fieldHeroHazard.push([targeted.pos,skillList.data.skill[selectedSkill].hazard[0],skillList.data.skill[selectedSkill].hazard[1],skillList.data.skill[selectedSkill].turns]);
							hazardSprite2.x = -(spriteResizeXPosition[targeted.pos] + spriteResizeXPosition[1]/2);
							heroHazardSprite.push(hazardSprite2);
							heroHazardContainer.addChild(hazardSprite2);
						}
						fieldHeroHazard.push([targeted.pos-1,skillList.data.skill[selectedSkill].hazard[0],skillList.data.skill[selectedSkill].hazard[1],skillList.data.skill[selectedSkill].turns]);
						hazardSprite.x = -(spriteResizeXPosition[targeted.pos-1] + spriteResizeXPosition[1]/2);
						heroHazardSprite.push(hazardSprite);
						heroHazardContainer.addChild(hazardSprite);
					}else{
						hazardSprite.scale.set(-hazardSize,hazardSize);
						hazardSprite2.scale.set(-hazardSize,hazardSize);
						if(targeted.size > 1){
							fieldEnemyHazard.push([targeted.pos,skillList.data.skill[selectedSkill].hazard[0],skillList.data.skill[selectedSkill].hazard[1],skillList.data.skill[selectedSkill].turns]);
							hazardSprite2.x = spriteResizeXPosition[targeted.pos] + spriteResizeXPosition[1]/2;
							enemyHazardSprite.push(hazardSprite2);
							enemyHazardContainer.addChild(hazardSprite2);
						}
						fieldEnemyHazard.push([targeted.pos-1,skillList.data.skill[selectedSkill].hazard[0],skillList.data.skill[selectedSkill].hazard[1],skillList.data.skill[selectedSkill].turns]);
						hazardSprite.x = spriteResizeXPosition[targeted.pos-1] + spriteResizeXPosition[1]/2;
						enemyHazardSprite.push(hazardSprite);
						enemyHazardContainer.addChild(hazardSprite);
					}
				}
				
				if(tagName == "statchange"){
					if(skillList.data.skill[selectedSkill].statchange[2] > 0){
						var newStatus = [2, skillList.data.skill[selectedSkill].turns, skillList.data.skill[selectedSkill].statchange[1], skillList.data.skill[selectedSkill].statchange[2]];
					}else{
						var newStatus = [4, skillList.data.skill[selectedSkill].turns, skillList.data.skill[selectedSkill].statchange[1], skillList.data.skill[selectedSkill].statchange[2]];
					}
					for(var i = 0; i < 3; i++){
						selectedVita.dmgContainer.dmgStatus.statusImageArray[i].visible = false;
						selectedVita.dmgContainer.dmgStatus.statusTextArray[i].visible = false;	
						targeted.dmgContainer.dmgStatus.statusImageArray[i].visible = false;
						targeted.dmgContainer.dmgStatus.statusTextArray[i].visible = false;	
					}
					if(skillList.data.skill[selectedSkill].statchange[0]){	
						var statusStored = false;
						selectedVita.statusArray.forEach(storedStatus =>{
							if(storedStatus[0] == newStatus[0])		statusStored = true;
						});

						if(!statusStored){
							let newStatusEffect = statusEffectSprite(newStatus[0]);				
							newStatusEffect.visible = false;
							selectedVita.healthBar.addChild(newStatusEffect);
							selectedVita.statusSpriteArray.push(newStatusEffect);
						}
						selectedVita.dmgContainer.dmgStatus.statusImageArray[0].visible = true;
						selectedVita.dmgContainer.dmgStatus.statusTextArray[0].visible = true;
						updateDmgStatus(selectedVita.dmgContainer, newStatus[0], 0);
						selectedVita.statusArray.push(newStatus);
						selectedVita.statMod[newStatus[2]] += newStatus[3];
						resizeStatus(selectedVita);
					}else{
						var statusStored = false;
						targeted.statusArray.forEach(storedStatus =>{
							if(storedStatus[0] == newStatus[0])		statusStored = true;
						});

						if(!statusStored){
							let newStatusEffect = statusEffectSprite(newStatus[0]);				
							newStatusEffect.visible = false;
							targeted.healthBar.addChild(newStatusEffect);
							targeted.statusSpriteArray.push(newStatusEffect);
						}
						targeted.dmgContainer.dmgStatus.statusImageArray[0].visible = true;
						targeted.dmgContainer.dmgStatus.statusTextArray[0].visible = true;
						updateDmgStatus(targeted.dmgContainer, newStatus[0], 0);
						targeted.statusArray.push(newStatus);
						targeted.statMod[newStatus[2]] += newStatus[3];
						resizeStatus(targeted);
					}					
				}
			});

			if(skillList.data.skill[selectedSkill].type == "Physical"){
				defense = targeted.pdef;
			}else if(skillList.data.skill[selectedSkill].type == "Special"){
				defense = targeted.sdef;
			}
			targeted.element.forEach(element =>{
				var element1 = skillList.data.skill[selectedSkill].element-1;
				var element2 = element-1;
				effectiveness *= elementList.data.element[element1]["effect"][element2];
			});
			if(effectiveness == 0.25 && !skillHeal){
				targeted.dmgContainer.dmgPopup.dmgEffective.text = "Resist  ×0.25";
				targeted.dmgContainer.dmgPopup.dmgEffective.style.fill = '#9D9D9D';
				targeted.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
					dmgNumArrayItem.style.fill = '#9D9D9D';
				});
			}else if(effectiveness == 0.5 && !skillHeal){
				targeted.dmgContainer.dmgPopup.dmgEffective.text = "Resist  ×0.5";
				targeted.dmgContainer.dmgPopup.dmgEffective.style.fill = '#FFFFFF';
				targeted.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
					dmgNumArrayItem.style.fill = '#FFFFFF';
				});
			}else if(effectiveness == 2 && !skillHeal){
				targeted.dmgContainer.dmgPopup.dmgEffective.text = "SUPER  ×2";
				targeted.dmgContainer.dmgPopup.dmgEffective.style.fill = '#FFE81C';
				targeted.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
					dmgNumArrayItem.style.fill = '#FFE81C';
				});
			}else if(effectiveness == 4 && !skillHeal){
				targeted.dmgContainer.dmgPopup.dmgEffective.text = "ULTRA  ×4";
				targeted.dmgContainer.dmgPopup.dmgEffective.style.fill = '#DB00FF';
				targeted.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
					dmgNumArrayItem.style.fill = '#DB00FF';
				});
			}else{
				targeted.dmgContainer.dmgPopup.dmgEffective.visible = false;
			}

			var damageCalc = Math.round((((((2*level/5) + 2) * skillPower * (attack/defense))/150) + 2)*effectiveness*SEAB);
			console.log("Level: " + level + " SkillPower: " + skillPower + " Attack: " + attack + " Defense: " + defense + " Effectiveness: " + effectiveness + " SEAB: " + SEAB);
			// console.log("damageCalc: " + damageCalc);

			// var dmgNumbers = [];
			// var critTracker = [];
			if(!skillOther){
				var ifCrit = false;
				for(var i = 0; i < multiHitNum; i++){
					var randModifier = ((Math.floor(Math.random() * (100 - 85 + 1) + 85))/100);
					damageCalc = Math.floor(damageCalc*randModifier);
					// console.log("damageCalc: " + damageCalc);

					var criticalChance = Math.floor(Math.random() * 10000);
					var critMultiplier = 1;
					if(criticalChance > 5000){
						critMultiplier = 1.5;
						ifCrit = true;
						targeted.dmgContainer.dmgPopup.dmgNumArray[i].style.fill = '#ff7b00';
						targeted.dmgContainer.dmgPopup.dmgNumArray[i].style.stroke = '#4E2600';
						skillStatus = true;
					}
					var finalDmgCalc = Math.floor(damageCalc * critMultiplier);
					if(finalDmgCalc == 0)	finalDmgCalc = 1;
					console.log("finalDmgCalc: " + finalDmgCalc);
					totalDamage += finalDmgCalc;
					critDamage += finalDmgCalc-damageCalc;

					targeted.dmgContainer.dmgPopup.dmgNumArray[i].visible = true;
					targeted.dmgContainer.dmgPopup.dmgNumArray[i].text = finalDmgCalc;

					// critTracker.push(finalDmgCalc-damageCalc);
					// dmgNumbers.push(finalDmgCalc);
					dmgArray.push([finalDmgCalc,finalDmgCalc-damageCalc]);	//May not need dmgNumber and critTracker
				}
				if(ifCrit)		targetStatus.push([14]);
			}

			if(skillHeal){
				totalDamage = skillList.data.skill[selectedSkill].heal;
				targeted.dmgContainer.dmgPopup.dmgNumArray[0].visible = true;
				targeted.dmgContainer.dmgPopup.dmgNumArray[0].text = totalDamage;
				targeted.heal(totalDamage);
				targeted.newHP = true;
				// dmgNumbers.push(totalDamage);
				// critTracker.push(false);
				dmgArray.push([totalDamage,0]);

				var newWidth = (targeted.healthBar.outer.width * (targeted.hp/targeted.overallHP)) - targeted.healthBar.inner.width;
				targeted.healthBar.dmgBarContainer.x = targeted.healthBar.inner.width;
				targeted.healthBar.dmgBarContainer.dmgBar.visible = true;
				// targeted.healthBar.dmgBarContainer.dmgBar.animate.kill();
				var dmgBarTween = new TimelineMax({paused:true});
				
				dmgBarTween.fromTo(targeted.healthBar.dmgBarContainer.dmgBar
					, 0.5 , {width: 0}, {ease:Expo.easeIn, width:newWidth, onComplete:function(){
						targeted.healthBar.inner.width = targeted.healthBar.outer.width * (targeted.hp/targeted.overallHP);
					}});
				dmgBarTween.to(targeted.healthBar.dmgBarContainer.dmgBar
					, 0.5, {ease:Expo.easeIn, alpha:0, onComplete: function(){
						targeted.healthBar.dmgBarContainer.dmgBar.visible = false;
						targeted.healthBar.dmgBarContainer.dmgBar.alpha = 1;
						targeted.newHP = false;
					}});
				targeted.healthBar.dmgBarContainer.dmgBar.animate = dmgBarTween;
			}else{
				targeted.damage(totalDamage);
				targeted.newHP = true;
				if(critDamage > 0){
					targeted.criticalHit(critDamage);
					var newCritWidth = -(targeted.healthBar.outer.width * (targeted.critDmg/targeted.overallHP));
					var critBarTween = new TimelineMax({paused:true});
					critBarTween.fromTo(targeted.healthBar.critDmgBar
						, 1, {
							width: targeted.healthBar.critDmgBar.width
						}, {ease:Expo.easeIn, width:newCritWidth, onComplete: function(){
							targeted.newCrit = false;
						}});
					targeted.healthBar.critDmgBar.animate = critBarTween;
					// targetStatus.push([14]);
				}
				var newWidth = targeted.healthBar.inner.width - (targeted.healthBar.outer.width * (targeted.hp/targeted.overallHP));
				targeted.healthBar.dmgBarContainer.dmgBar.width = newWidth;
				targeted.healthBar.dmgBarContainer.dmgBar.visible = true;
				// targeted.healthBar.dmgBarContainer.dmgBar.animate.kill();
				var dmgBarTween = new TimelineMax({paused:true});
				dmgBarTween.fromTo(targeted.healthBar.dmgBarContainer.dmgBar
					, 1, {
						width: newWidth
					}, {ease:Expo.easeIn, width:0, onComplete: function(){
						targeted.healthBar.dmgBarContainer.dmgBar.visible = false;
						targeted.newHP = false;
				}});
				targeted.healthBar.dmgBarContainer.dmgBar.animate = dmgBarTween;
				targeted.healthBar.dmgBarContainer.x = targeted.healthBar.outer.width * (targeted.hp/targeted.overallHP);
				targeted.healthBar.inner.width = targeted.healthBar.outer.width * (targeted.hp/targeted.overallHP);
			}
			
			if(skillList.data.skill[selectedSkill].type == "Other" && !skillHeal){
				targeted.dmgContainer.dmgPopup.dmgNumArray[0].visible = false;
				targeted.dmgContainer.dmgPopup.dmgEffective.visible = false;
			}

			if(skillStatus){
				for(var i = 0; i < 3; i++){
					targeted.dmgContainer.dmgStatus.statusImageArray[i].visible = false;
					targeted.dmgContainer.dmgStatus.statusTextArray[i].visible = false;	
				}
				console.log("Status: " + targetStatus);
				targetStatus.forEach((statusElement, statusIndex)=>{
					var statusStored = false;
					targeted.statusArray.forEach(storedStatus =>{
						if(storedStatus[0] == statusElement[0]){
							statusStored = true;
							if(statusElement[0] == 6 || statusElement[0] == 7 || statusElement[0] == 8 || statusElement[0] == 11 || statusElement[0] == 12 || statusElement[0] == 13){
								storedStatus[1] = statusElement[1];
							}
						}
					});

					if(!statusStored){
						let newStatusEffect = statusEffectSprite(statusElement[0]);				
						newStatusEffect.visible = false;
						targeted.healthBar.addChild(newStatusEffect);
						targeted.statusSpriteArray.push(newStatusEffect);
						targeted.statusArray.push(statusElement);
					}else{
						if(statusElement[0] != 6 || statusElement[0] != 7 || statusElement[0] != 8 || statusElement[0] != 11 || statusElement[0] != 12 || statusElement[0] != 13){
							targeted.statusArray.push(statusElement);
						}
					}
					targeted.dmgContainer.dmgStatus.statusImageArray[statusIndex].visible = true;
					targeted.dmgContainer.dmgStatus.statusTextArray[statusIndex].visible = true;
					updateDmgStatus(targeted.dmgContainer, statusElement[0], statusIndex);
				});
				resizeStatus(targeted);
			}

			
		}else{
			targeted.dmgContainer.dmgPopup.dmgEffective.text = "MISS!";
			targeted.dmgContainer.dmgPopup.dmgEffective.style.fill = '#D80000';
			targeted.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
				dmgNumArrayItem.style.fill = '#D80000';
			});
			
			targeted.dmgContainer.dmgPopup.dmgNumArray[0].visible = true;
			targeted.dmgContainer.dmgPopup.dmgNumArray[0].text = 0;

			dmgArray.push([[0],[0]]);
		}
	});
	return dmgArray;
}

function animationSequence(attacker, defender, animateBattle, animatePopup, animateStatus, animateHealth, animateMove){
	if(animateBattle){
		var animateArray = [];
		stageContainer.actionBlackTween.play(0);

		//Blur
		const blurFilter1 = new PIXI.filters.BlurFilter();
		blurFilter1.blur = 0;
		spriteHolder.filters = [blurFilter1];
		TweenMax.fromTo(blurFilter1, 0.167, {blur:0}, {blur:10});

		// var attackHero = attacker.hero;
		var sameParty = false;
		defender.forEach(arrayCreature=>{
			if(arrayCreature.hero == attacker.hero)	sameParty = true;
			actionContainer.addChild(arrayCreature.action);
			arrayCreature.action.visible = true;
			arrayCreature.sprite.visible = false;
			animateArray.push(arrayCreature);
			
			arrayCreature.action.dReadyTween.play(0);
			// TweenMax.to(arrayCreature.action, 0.5, {x:0,ease:Expo.easeOut});
			// TweenMax.to(arrayCreature.dmgContainer, 0.5, {x:0,ease:Expo.easeOut});
		});

		actionContainer.addChild(attacker.action);
		var arrayInsert = 0;
		var posTracker = 0;
		if(sameParty){
			animateArray.forEach((arrayCreature,arrayCreatureIndex)=>{
				if(arrayCreature.hero == attacker.hero && attacker.pos < arrayCreature.pos && attacker.pos > posTracker){
					posTracker = arrayCreature.pos;
					arrayInsert = arrayCreatureIndex;
				}
			});
			if(posTracker > 0){
				animateArray.splice(arrayInsert, 0, attacker);
			}else{
				animateArray.push(attacker);
			}			
		}else{
			animateArray.push(attacker);
		}
		
		attacker.action.visible = true;
		attacker.sprite.visible = false;
		attacker.action.sReadyTween.play(0);
		
		// TweenMax.to(attacker.action, 0.5, {x:0,ease:Expo.easeOut});
		// TweenMax.to(attacker.dmgContainer.dmgPopup, 0.5, {x:0,ease:Expo.easeOut});
		var heroTracker = 0;
		var enemyTracker = 0;
		animateArray.forEach(arrayCreature=>{
			if(arrayCreature.hero){
				TweenMax.to(arrayCreature.action, 0.5, {x:-spriteResizeXPosition[heroTracker],ease:Expo.easeOut});
				TweenMax.to(arrayCreature.dmgContainer, 0.5, {x:heroHealthXPosition[heroTracker+arrayCreature.size-1],ease:Expo.easeOut});
				heroTracker+=arrayCreature.size;
			}else{
				TweenMax.to(arrayCreature.action, 0.5, {x:spriteResizeXPosition[enemyTracker],ease:Expo.easeOut});
				TweenMax.to(arrayCreature.dmgContainer, 0.5, {x:spriteResizeXPosition[enemyTracker],ease:Expo.easeOut});
				enemyTracker+=arrayCreature.size;
			}
		});

		attacker.action.pReadyTween.eventCallback("onComplete", function(){
			//Camera shake
			TweenMax.fromTo(stageContainer, 0.05, {x:-10}, {x:10, yoyo:true, ease:Sine.easeOut, repeat:10, onComplete:function(){
				TweenMax.to(stageContainer,0.5, {x:0,ease:Elastic.easeOut})
			}});

			defender.forEach(arrayCreature=>{
				if(arrayCreature.newHP){
					arrayCreature.action.dDmg.visible = true;
					arrayCreature.action.dDmgTween.play(0);
				}else{
					arrayCreature.action.dMiss.visible = true;
					arrayCreature.action.dMissTween.play(0);
				}
				
				// arrayCreature.action.dMissTween.play(0);
				arrayCreature.dmgContainer.dmgPopup.tween.play(0);
			});
			
			attacker.action.sAtkTween.play(0);

			if(animateMove){
				var movedCreatureArray = moveCreature(defender[0], defender[0].newMove);
				movedCreatureArray.forEach(creatureObject=>{
					creatureObject.moveTween.play(0);
				});
			}

			attacker.action.sAtkTween.eventCallback("onComplete", function(){
				animateArray.forEach(item =>{

					// if(attacker.hero){
					// 	attacker.action.x = -spriteResizeXPosition[attacker.pos-1];
					// }else{
					// 	attacker.action.x = spriteResizeXPosition[attacker.pos-1];
					// }
					TweenMax.fromTo(blurFilter1, 0.1, {blur:10}, {blur:0});
					if(item.hero){
						item.action.x = -spriteResizeXPosition[item.pos-1];
						item.dmgContainer.x = heroHealthXPosition[item.pos-1+(item.size-1)];
					}else{
						item.action.x = spriteResizeXPosition[item.pos-1];
						item.dmgContainer.x = spriteResizeXPosition[item.pos-1];
					}

					// if(roster == 0){
					// 	item.dmgContainer.x = heroHealthXPosition[item.pos-1+switcher];
					// }else{
					// 	item.dmgContainer.x = spriteResizeXPosition[item.pos-1];
					// }

					item.sprite.visible = true;
				});
				if(animateStatus){
					attacker.dmgContainer.dmgStatus.tween.play(0);
					if(animateHealth){
						defender.forEach(arrayCreature=>{
							if(arrayCreature.newCrit)		arrayCreature.healthBar.critDmgBar.animate.play(0);
							if(arrayCreature.newHP){
								arrayCreature.healthBar.dmgBarContainer.dmgBar.animate.play(0);
								arrayCreature.healthBar.dmgBarContainer.dmgBar.animate.eventCallback("onComplete", function(){
									arrayCreature.healthBar.textHP.text = arrayCreature.hp + " / " + arrayCreature.EHP;
									if(userInput){
										console.log("endTurn1");
										endTurn();
									}	
								});
							}			
						});
						console.log("animateHealth");
					}
					defender.forEach(arrayCreature=>{
						arrayCreature.dmgContainer.dmgStatus.tween.play(0);
						arrayCreature.dmgContainer.dmgStatus.tween.eventCallback("onComplete", function(){
							attacker.statusSpriteArray.forEach(statusSprite=>{
								statusSprite.visible = true;
							});
							arrayCreature.statusSpriteArray.forEach(statusSprite=>{
								statusSprite.visible = true;
							});
							if(userInput && !animateHealth){
								console.log("endTurn2");
								endTurn();
							}	
							// if(animateHealth){
							// 	defender.forEach(arrayCreature=>{
							// 		if(arrayCreature.newCrit)		arrayCreature.healthBar.critDmgBar.animate.play(0);
							// 		arrayCreature.healthBar.dmgBarContainer.dmgBar.animate.play(0);
							// 		arrayCreature.healthBar.dmgBarContainer.dmgBar.animate.eventCallback("onComplete", function(){
							// 			arrayCreature.healthBar.textHP.text = arrayCreature.hp + " / " + arrayCreature.EHP;
							// 			if(userInput)	endTurn();
							// 		});
							// 	});
							// 	console.log("animateHealth");
							// }else{
							// 	if(userInput)	endTurn();
							// }
						});
					});
				}

				else if(animateHealth){
					defender.forEach(arrayCreature=>{
						if(arrayCreature.newCrit)		arrayCreature.healthBar.critDmgBar.animate.play(0);
						if(arrayCreature.newHP){
							arrayCreature.healthBar.dmgBarContainer.dmgBar.animate.play(0);
							arrayCreature.healthBar.dmgBarContainer.dmgBar.animate.eventCallback("onComplete", function(){
								arrayCreature.healthBar.textHP.text = arrayCreature.hp + " / " + arrayCreature.EHP;
								if(userInput){
									console.log("endTurn3");
									endTurn();
								}	
							});
						}
					});
					console.log("animateHealth");
				}else{
					if(userInput){
						console.log("endTurn4");
						endTurn();
					}	
				}
			});
		});
	}
	else if(animateMove){
		var movedCreatureArray = moveCreature(defender[0], defender[0].newMove);
		movedCreatureArray.forEach(creatureObject=>{
			creatureObject.moveTween.play(0);
			creatureObject.moveTween.eventCallback("onComplete", function(){
				if(userInput){
					console.log("moveEndTurn");
					endTurn();
				}
			});
		});
	}
}


//function moveCreature(movingCreature, displace(1, -2))
function moveCreature(movingCreature, displacement){
	console.log(movingCreature.name + " wants to move shift: " + displacement);
	var moveFrom, moveTo;
	var tempArray = [];
	var movedCreature = [];
	if(movingCreature.hero){
		heroArray.forEach((object,objectIndex)=>{
			if(movingCreature == object)		moveFrom = objectIndex;
		});
		moveTo = moveFrom - displacement;
		heroArray.forEach(object=>{
			tempArray.push(object);
		});
		heroArray.splice(moveTo, 0, heroArray.splice(moveFrom,1)[0]);

		heroArray.forEach((object,objectIndex)=>{
			if(objectIndex == 0){
				object.pos = 1;
			}else if(heroArray[objectIndex-1].size == 2){
				object.pos = heroArray[objectIndex-1].pos + 2;
			}else{
				object.pos = heroArray[objectIndex-1].pos + 1;
			}

			if(object != tempArray[objectIndex])		movedCreature.push(object)

			//Hero Creature
			var newCreatureX, newHPX;
			newCreatureX = -spriteResizeXPosition[object.pos-1];

			//Hero HP and dmg containers
			var switcher = 0;
			if(object.size > 1)	switcher = 1

			newHPX = heroHealthXPosition[object.pos-1+switcher];

			var moveTween = new TimelineMax({paused:true});
			moveTween.to(object.sprite, 0.5, {x: newCreatureX},0);
			moveTween.to(object.action, 0.5, {x: newCreatureX},0);
			moveTween.to(object.healthBar, 0.5, {x: newHPX},0);
			moveTween.to(object.dmgContainer, 0.5, {x: newHPX, onComplete:function(){
				object.newMove = 0;
			}},0);

			object.moveTween = moveTween;
		});
	}else{
		// console.log(moveFrom + " wants to move to: " + moveTo);
		enemyArray.forEach((object,objectIndex)=>{
			if(movingCreature == object)		moveFrom = objectIndex;
		});
		moveTo = moveFrom - displacement;
		enemyArray.forEach(object=>{
			tempArray.push(object);
		});
		enemyArray.splice(moveTo, 0, enemyArray.splice(moveFrom,1)[0]);

		enemyArray.forEach((object,objectIndex)=>{
			if(objectIndex == 0){
				object.pos = 1;
			}else if(enemyArray[objectIndex-1].size == 2){
				object.pos = enemyArray[objectIndex-1].pos + 2;
			}else{
				object.pos = enemyArray[objectIndex-1].pos + 1;
			}

			if(object != tempArray[objectIndex])		movedCreature.push(object)

			//Enemy Creature
			var newCreatureX, newHPX;
			newCreatureX = spriteResizeXPosition[object.pos-1];
			newHPX = spriteResizeXPosition[object.pos-1];

			var moveTween = new TimelineMax({paused:true});
			moveTween.to(object.sprite, 0.5, {x: newCreatureX},0);
			moveTween.to(object.action, 0.5, {x: newCreatureX},0);
			moveTween.to(object.healthBar, 0.5, {x: newHPX},0);
			moveTween.to(object.dmgContainer, 0.5, {x: newHPX, onComplete:function(){
				object.newMove = 0;
			}},0);

			object.moveTween = moveTween;
		});
	}
	return movedCreature;
}

// function animateBattle(attacker, defender){
// 	const blurFilter1 = new PIXI.filters.BlurFilter();
// 	// const blurFilter2 = new PIXI.filters.BlurFilter();
// 	blurFilter1.blur = 0;
// 	// blurFilter2.blur = 0;

// 	spriteHolder.filters = [blurFilter1];
// 	TweenMax.fromTo(blurFilter1, 0.167, {blur:0}, {blur:10});

// 	TweenMax.fromTo(stageContainer, 0.05, {x:-10}, {delay:anim1, x:10, yoyo:true, ease:Sine.easeOut, repeat:10, onComplete:function(){
// 		TweenMax.to(stageContainer,0.5, {x:0,ease:Elastic.easeOut})
// 	}});

// 	var animateArray = [];

// 	defender.forEach(arrayCreature => {
// 		actionContainer.addChild(arrayCreature.action);
// 		arrayCreature.action.visible = true;
// 		arrayCreature.sprite.visible = false;
// 		animateArray.push(arrayCreature.sprite);
// 	});

// 	actionContainer.addChild(attacker.action);
// 	attacker.action.visible = true;
// 	attacker.sprite.visible = false;
// 	animateArray.push(attacker.sprite);

// 	stageContainer.actionBlackTween.play(0);

// 	var heroShiftSizeTracker = 0;
// 	var enemyShiftSizeTracker = 0;

// 	defender.forEach((arrayCreature,arrayCreatureIndex) => {
// 		if(arrayCreature.hero){
// 			var originalX = arrayCreature.action.x;
// 			var originalFloatX = arrayCreature.dmgContainer.x;
// 			TweenMax.to(arrayCreature.action, 0.25, {x:-spriteResizeXPosition[heroShiftSizeTracker]});

// 			if(arrayCreature.size > 1)	heroShiftSizeTracker++;
// 			TweenMax.to(arrayCreature.dmgContainer, 0.25, {x:heroHealthXPosition[heroShiftSizeTracker]});

// 			arrayCreature.action.dMissTween.play(0);
// 			arrayCreature.action.dMissTween.eventCallback("onComplete", function(){
// 				arrayCreature.action.x = originalX;
// 				arrayCreature.dmgContainer.x = originalFloatX;
// 				arrayCreature.dmgContainer.dmgStatus.tween.play(0);
// 				arrayCreature.dmgContainer.dmgStatus.tween.eventCallback("onComplete", function(){
// 					arrayCreature.statusSpriteArray.forEach(statusSprite => {
// 						statusSprite.visible = true;
// 					});
// 				});
// 			});

// 			heroShiftSizeTracker++;			
// 		}else{
// 			var originalX = arrayCreature.action.x;
// 			TweenMax.to(arrayCreature.action, 0.25, {x:spriteResizeXPosition[enemyShiftSizeTracker]});
// 			TweenMax.to(arrayCreature.dmgContainer, 0.25, {x:spriteResizeXPosition[enemyShiftSizeTracker]});

// 			arrayCreature.action.dMissTween.play(0);
// 			arrayCreature.action.dMissTween.eventCallback("onComplete", function(){
// 				arrayCreature.action.x = originalX;
// 				arrayCreature.dmgContainer.x = originalX;
// 				arrayCreature.dmgContainer.dmgStatus.tween.play(0);
// 				arrayCreature.dmgContainer.dmgStatus.tween.eventCallback("onComplete", function(){
// 					arrayCreature.statusSpriteArray.forEach(statusSprite => {
// 						statusSprite.visible = true;
// 					});
// 				});
// 			});

// 			enemyShiftSizeTracker++;
// 			if(arrayCreature.size > 1)	enemyShiftSizeTracker++;
// 		}	
// 	});	

// 	var originalX = attacker.action.x;
// 	TweenMax.to(attacker.action, 0.25, {x:0});

// 	attacker.action.pAtkTween.play(0);
// 	attacker.action.pAtkTween.eventCallback("onComplete", function(){
// 		animateArray.forEach(item =>{
// 			item.visible = true;
// 		});
// 		attacker.action.x = originalX;
// 		TweenMax.fromTo(blurFilter1, 0.1, {blur:10}, {blur:0});
// 		attacker.dmgContainer.dmgStatus.tween.play(0);
// 		attacker.dmgContainer.dmgStatus.tween.eventCallback("onComplete", function(){
// 			attacker.statusSpriteArray.forEach(statusSprite => {
// 				statusSprite.visible = true;
// 			});
// 			if(userInput)	endTurn();
// 		});
// 	});
// 	// actionHero[0].pAtkTween.play(0);
// }

function updateDmgStatus(container, newStatus, newStatusIndex){
	switch(newStatus){
		case 1:
			container.dmgStatus.statusImageArray[newStatusIndex].texture = resources.status_bleed.texture;
			container.dmgStatus.statusTextArray[newStatusIndex].text = "Bleed";
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#E3C2C2';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#910A0A';
			break;
		case 2:
			container.dmgStatus.statusImageArray[newStatusIndex].texture = resources.status_buff.texture;
			container.dmgStatus.statusTextArray[newStatusIndex].text = "Buff";
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#FFE7C1';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#FF9F06';
			break;
		case 3:
			container.dmgStatus.statusImageArray[newStatusIndex].texture = resources.status_burned.texture;
			container.dmgStatus.statusTextArray[newStatusIndex].text = "Burned";
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#ECCFC6';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#B23F1B';
			break;
		case 4:
			container.dmgStatus.statusImageArray[newStatusIndex].texture = resources.status_debuff.texture;
			container.dmgStatus.statusTextArray[newStatusIndex].text = "Debuff";
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#C1D9FF';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#0666FF';
			break;
		case 5:
			container.dmgStatus.statusImageArray[newStatusIndex].texture = resources.status_depressed.texture;
			container.dmgStatus.statusTextArray[newStatusIndex].text = "Depressed";
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#CCCCCC';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#353535';
			break;
		case 6:
			container.dmgStatus.statusImageArray[newStatusIndex].texture = resources.status_guard.texture;
			container.dmgStatus.statusTextArray[newStatusIndex].text = "Guard";
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#BFE9F0';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#00A8C4';
			break;
		case 7:
			container.dmgStatus.statusImageArray[newStatusIndex].texture = resources.status_immune.texture;
			container.dmgStatus.statusTextArray[newStatusIndex].text = "Immune";
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#E8C2EC';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#A50BB2';
			break;
		case 8:
			container.dmgStatus.statusImageArray[newStatusIndex].texture = resources.status_paralyzed.texture;
			container.dmgStatus.statusTextArray[newStatusIndex].text = "Paralyzed";
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#EFDFBF';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#C18100';
			break;
		case 9:
			container.dmgStatus.statusImageArray[newStatusIndex].texture = resources.status_poisoned.texture;
			container.dmgStatus.statusTextArray[newStatusIndex].text = "Poisoned";
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#DEC2ED';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#7C0BB7';
			break;
		case 10:
			container.dmgStatus.statusImageArray[newStatusIndex].texture = resources.status_recover.texture;
			container.dmgStatus.statusTextArray[newStatusIndex].text = "Recover";
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#C6F1C5';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#1BC617';
			break;
		case 11:
			container.dmgStatus.statusImageArray[newStatusIndex].texture = resources.status_secured.texture;
			container.dmgStatus.statusTextArray[newStatusIndex].text = "Secured";
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#CBE1D9';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#2E8966';
			break;
		case 12:
			container.dmgStatus.statusImageArray[newStatusIndex].texture = resources.status_silenced.texture;
			container.dmgStatus.statusTextArray[newStatusIndex].text = "Silenced";
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#DACDEE';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#6A37BC';
			break;
		case 13:
			container.dmgStatus.statusImageArray[newStatusIndex].texture = resources.status_stunned.texture;
			container.dmgStatus.statusTextArray[newStatusIndex].text = "Stunned";
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#F9EFD2';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#E6C04B';
			break;
		case 14:
			container.dmgStatus.statusImageArray[newStatusIndex].texture = resources.status_critical.texture;
			container.dmgStatus.statusTextArray[newStatusIndex].text = "Critical";
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#FFDEBF';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#FF7B00';
			break;
		default:
			container.dmgStatus.statusImageArray[newStatusIndex].texture = resources.status_buff.texture;
			container.dmgStatus.statusTextArray[newStatusIndex].text = "Buff";
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#FFE7C1';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#FF9F06';
	}
}

// function updateDamage(object, effective, skillCrit, critTracker, dmgArray, skillHeal, attackerStatus, defenderStatus, skillStatus, skillStatusTarget){
// 	var totalDmgCalc = 0;
// 	dmgArray.forEach(dmg => {
// 		totalDmgCalc += dmg;
// 	});

// 	if(skillHeal){
// 		object.heal(totalDmgCalc);			//add heal
// 	}else{
// 		object.damage(totalDmgCalc);		//subtract damage
// 	}

// 	object.dmgContainer.dmgPopup.dmgEffective.visible = true;
// 	object.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
// 		dmgNumArrayItem.style.fill = '#D80000';
// 		dmgNumArrayItem.style.stroke = '#222222';
// 		dmgNumArrayItem.visible = false;
// 	});

// 	object.dmgContainer.dmgStatus.statusImageArray.forEach(dmgStatusImageItem =>{
// 		dmgStatusImageItem.visible = false;
// 	});
// 	object.dmgContainer.dmgStatus.statusTextArray.forEach(dmgStatusTextItem =>{
// 		dmgStatusTextItem.visible = false;
// 	});

// 	if(Array.isArray(effective)){
// 		object.dmgContainer.dmgPopup.dmgEffective.visible = false;
// 		effective.forEach((effectiveNum, effectiveIndex) => {
// 			var colour = '#D80000';
// 			if(effectiveNum == 0.25){
// 				colour = '#9D9D9D';
// 			}else if(effectiveNum == 0.5){
// 				colour = '#FFFFFF';
// 			}else if(effectiveNum == 2){
// 				colour = '#FFE81C';
// 			}else if(effectiveNum == 4){
// 				colour = '#DB00FF';
// 			}
// 			object.dmgContainer.dmgPopup.dmgNumArray[effectiveIndex].style.fill = colour;
// 		});
// 	}else{
// 		if(effective == 0.25){
// 			object.dmgContainer.dmgPopup.dmgEffective.text = "Resist  ×0.25";
// 			object.dmgContainer.dmgPopup.dmgEffective.style.fill = '#9D9D9D';
// 			object.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
// 				dmgNumArrayItem.style.fill = '#9D9D9D';
// 			});
// 		}else if(effective == 0.5){
// 			object.dmgContainer.dmgPopup.dmgEffective.text = "Resist  ×0.5";
// 			object.dmgContainer.dmgPopup.dmgEffective.style.fill = '#FFFFFF';
// 			object.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
// 				dmgNumArrayItem.style.fill = '#FFFFFF';
// 			});
// 		}else if(effective == 2){
// 			object.dmgContainer.dmgPopup.dmgEffective.text = "SUPER  ×2";
// 			object.dmgContainer.dmgPopup.dmgEffective.style.fill = '#FFE81C';
// 			object.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
// 				dmgNumArrayItem.style.fill = '#FFE81C';
// 			});
// 		}else if(effective == 4){
// 			object.dmgContainer.dmgPopup.dmgEffective.text = "ULTRA  ×4";
// 			object.dmgContainer.dmgPopup.dmgEffective.style.fill = '#DB00FF';
// 			object.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
// 				dmgNumArrayItem.style.fill = '#DB00FF';
// 			});
// 		}else if(effective == 0){
// 			object.dmgContainer.dmgPopup.dmgEffective.text = "MISS!";
// 			object.dmgContainer.dmgPopup.dmgEffective.style.fill = '#D80000';
// 			object.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
// 				dmgNumArrayItem.style.fill = '#D80000';
// 			});
// 		}else{
// 			object.dmgContainer.dmgPopup.dmgEffective.visible = false;
// 		}
// 	}
	
// 	if(skillCrit){
// 		var critTotal = 0;
// 		dmgArray.forEach((dmgArrayNum, dmgArrayIndex) => {
// 			if(critTracker[dmgArrayIndex] == 1)		critTotal = critTotal + (dmgArrayNum/3)
// 		});

// 		object.criticalHit(Math.floor(critTotal));

// 		var newCritWidth = -(object.healthBar.outer.width * (object.critDmg/object.overallHP));

// 		TweenMax.fromTo(object.healthBar.critDmgBar
// 			, 1, {
// 				width: object.healthBar.critDmgBar.width
// 			}, {delay: 1.75, ease:Expo.easeIn, width:newCritWidth});

// 		object.dmgContainer.dmgPopup.dmgNumArray.forEach((dmgNumArrayItem, dmgNumArrayIndex) =>{
// 			if(critTracker[dmgNumArrayIndex] == 1){
// 				dmgNumArrayItem.style.fill = '#ff7b00';
// 				dmgNumArrayItem.style.stroke = '#4E2600';
// 			}
// 		});
// 	}

// 	if(skillHeal){
// 		object.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
// 			dmgNumArrayItem.style.fill = '#1bc617';
// 			dmgNumArrayItem.style.stroke = '#052805';
// 		});

// 		var newWidth = (object.healthBar.outer.width * (object.hp/object.overallHP)) - object.healthBar.inner.width;

// 		object.healthBar.dmgBarContainer.x = object.healthBar.inner.width;
// 		object.healthBar.dmgBarContainer.dmgBar.visible = true;
// 		var tween = new TimelineMax({onComplete: function(){
// 			object.healthBar.dmgBarContainer.dmgBar.visible = false;	
// 			object.healthBar.dmgBarContainer.dmgBar.alpha = 0.9;
// 		}});
// 		tween.fromTo(object.healthBar.dmgBarContainer.dmgBar
// 			, 1 , {width: 0}, {ease:Expo.easeIn, width:newWidth, onComplete:function(){
// 				object.healthBar.inner.width = object.healthBar.outer.width * (object.hp/object.overallHP);
// 			}});
// 		tween.to(object.healthBar.dmgBarContainer.dmgBar
// 			, 1, {ease:Expo.easeIn, alpha:0, onComplete:function(){
// 				if(userInput)	endTurn();
// 			}});
// 	}else{
// 		var newWidth = object.healthBar.inner.width - (object.healthBar.outer.width * (object.hp/object.overallHP));

// 		object.healthBar.dmgBarContainer.dmgBar.width = newWidth;
// 		object.healthBar.dmgBarContainer.dmgBar.visible = true;
// 		TweenMax.fromTo(object.healthBar.dmgBarContainer.dmgBar
// 			, 1, {
// 				width: newWidth
// 			}, {delay: 1.75, ease:Expo.easeIn, width:0, onComplete: function(){
// 			object.healthBar.dmgBarContainer.dmgBar.visible = false;
// 			if(userInput)	endTurn();
// 		}});

// 		object.healthBar.dmgBarContainer.x = object.healthBar.outer.width * (object.hp/object.overallHP);
// 		object.healthBar.inner.width = object.healthBar.outer.width * (object.hp/object.overallHP);
// 	}

// 	if(skillStatus){
// 		skillStatusTarget.dmgContainer.dmgStatus.statusImageArray.forEach(dmgStatusImageItem =>{
// 			dmgStatusImageItem.visible = false;
// 		});
// 		skillStatusTarget.dmgContainer.dmgStatus.statusTextArray.forEach(dmgStatusTextItem =>{
// 			dmgStatusTextItem.visible = false;
// 		});
// 		defenderStatus.forEach((statusNumber, statusNumberIndex)=>{
// 			var statusStored = false;
// 			object.statusArray.forEach(statusElement =>{
// 				if(statusElement[0] == statusNumber[0])	statusStored = true
// 			});
// 			if(!statusStored){
// 				let newStatusEffect = statusEffectSprite(statusNumber[0]);				
// 				newStatusEffect.visible = false;
// 				object.healthBar.addChild(newStatusEffect);
// 				object.statusSpriteArray.push(newStatusEffect);
// 			}
// 			object.dmgContainer.dmgStatus.statusImageArray[statusNumberIndex].visible = true;
// 			object.dmgContainer.dmgStatus.statusTextArray[statusNumberIndex].visible = true;
// 			updateDmgStatus(object.dmgContainer, statusNumber[0], statusNumberIndex);
// 			object.statusArray.push(statusNumber);
// 		});
// 		resizeStatus(object);
// 		attackerStatus.forEach((statusNumber, statusNumberIndex)=>{
// 			var statusStored = false;
// 			object.statusArray.forEach(statusElement =>{
// 				if(statusElement[0] == statusNumber[0])	statusStored = true
// 			});
// 			if(!statusStored){
// 				let newStatusEffect = statusEffectSprite(statusNumber[0]);
// 				newStatusEffect.visible = false;
// 				skillStatusTarget.healthBar.addChild(newStatusEffect);
// 				skillStatusTarget.statusSpriteArray.push(newStatusEffect);
// 			}
// 			skillStatusTarget.dmgContainer.dmgStatus.statusImageArray[statusNumberIndex].visible = true;
// 			skillStatusTarget.dmgContainer.dmgStatus.statusTextArray[statusNumberIndex].visible = true;			
// 			updateDmgStatus(skillStatusTarget.dmgContainer, statusNumber[0], statusNumberIndex);			
// 			skillStatusTarget.statusArray.push([statusNumber]);
// 		});
// 		resizeStatus(skillStatusTarget);
// 	}

// 	object.healthBar.textHP.text = object.hp + " / " + object.EHP;

// 	dmgArray.forEach((dmgArrayNum, dmgArrayIndex) => {
// 		object.dmgContainer.dmgPopup.dmgNumArray[dmgArrayIndex].visible = true;
// 		object.dmgContainer.dmgPopup.dmgNumArray[dmgArrayIndex].text = dmgArrayNum;
// 	});

// 	object.dmgContainer.dmgPopup.tween.play(0);
// }

function calculateTurnOrder(){
	turnNumber++;
	turnText.text = turnNumber;
	console.log("\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n" +
		"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   " + "ROUND " + turnNumber + "   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n"+
		"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n\n");
	// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   " + "ROUND " + turnNumber + "   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n\n");
	var enemyHazardDeletion = [];
	var heroHazardDeletion = [];
	if(turnNumber > 1){
		fieldHeroHazard.forEach((hazardElement,hazardElementIndex) =>{
			hazardElement[3]--;
			if(hazardElement[3] < 0){
				heroHazardDeletion.push(hazardElementIndex);
			}
			console.log("Position: " + hazardElement[0] + "Turns: " + hazardElement[3]);
		});
		fieldEnemyHazard.forEach((hazardElement,hazardElementIndex) =>{
			hazardElement[3]--;
			if(hazardElement[3] < 0){
				enemyHazardDeletion.push(hazardElementIndex);
			}
			console.log("Position: " + hazardElement[0] + "Turns: " + hazardElement[3]);
		});
		// console.log(enemyHazardDeletion);
		heroHazardDeletion.sort(function(a,b){ return b - a; });
		heroHazardDeletion.forEach(arrayNum =>{
			heroHazardContainer.removeChild(arrayNum);
			heroHazardSprite[arrayNum].destroy();
			heroHazardSprite.splice(arrayNum,1);
			fieldHeroHazard.splice(arrayNum,1);
		});

		enemyHazardDeletion.sort(function(a,b){ return b - a; });			//sort it so it's largest to smallest
		enemyHazardDeletion.forEach(arrayNum =>{
			enemyHazardContainer.removeChild(arrayNum);
			enemyHazardSprite[arrayNum].destroy();
			enemyHazardSprite.splice(arrayNum,1);
			fieldEnemyHazard.splice(arrayNum,1);
		});
	}

	enemyArray.forEach(enemyObject=>{
		enemyObject.healthBar.turn.visible = true;
	});
	heroArray.forEach(heroObject=>{
		heroObject.healthBar.turn.visible = true;
	});

	var arrayCalcSpeedSorted = [];
	var arrayCalcSpeedPositions = [];

	turnArray = [];

	heroArray.forEach((arrayCreature,arrayCreatureIndex) => {
		var calcSpeed;
		if(arrayCreature.statMod[6]>0){
			calcSpeed = (arrayCreature.spd/5) * ((Math.abs(arrayCreature.statMod[6])+2)/2) + (Math.floor(Math.random() * 7) + 1);
		}else{
			calcSpeed = (arrayCreature.spd/5) * (2/(Math.abs(arrayCreature.statMod[6])+2)) + (Math.floor(Math.random() * 7) + 1);
		}
		console.log(arrayCreatureIndex + ": " + arrayCreature.name + " Pre-Speed: " + arrayCreature.spd + "| CalcSpeed: " + calcSpeed);
		arrayCalcSpeedSorted.push(calcSpeed);
		arrayCalcSpeedPositions.push(calcSpeed);
	});
	enemyArray.forEach((arrayCreature,arrayCreatureIndex) => {
		var calcSpeed;
		if(arrayCreature.statMod[6]>0){
			calcSpeed = (arrayCreature.spd/5) * ((Math.abs(arrayCreature.statMod[6])+2)/2) + (Math.floor(Math.random() * 7) + 1);
		}else{
			calcSpeed = (arrayCreature.spd/5) * (2/(Math.abs(arrayCreature.statMod[6])+2)) + (Math.floor(Math.random() * 7) + 1);
		}
		console.log(arrayCreatureIndex + ": " + arrayCreature.name + " Pre-Speed: " + arrayCreature.spd + "| CalcSpeed: " + calcSpeed);
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
					var index = turnArray.findIndex(element => element == heroArray[index2]);
					if (index === -1){
						turnArray.push(heroArray[index2]);
					}else console.log("object already exists")
				}else{
					var index = turnArray.findIndex(element => element == enemyArray[index2-heroArray.length]);
					if (index === -1){
						turnArray.push(enemyArray[index2-heroArray.length]);
					}else console.log("object already exists")
				}
			}
		});
	});
	console.log("\n");
	turnArray.forEach((object, objectIndex)=>{
		console.log(objectIndex+1 + ": " + object.name);
	});
	// console.log("\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
	// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n\n");

	selectCreature(turnArray[0]);
	turnArray.shift();
}

function selectCreature(object2){	
	userInput = false;
	validSkillObjectArray = [];
	validMoveObjectArray = [];

	selectedVita = object2;
	console.log("\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n");
	console.log("Turn: " + selectedVita.name);
	console.log("Side: " + selectedVita.sprite.identifier[0]);
	console.log("Position: " + selectedVita.pos);

	//Reset the skillContainers
	skillContainerArray.forEach(skillContainer=>{
		skillContainer.selected.visible = false;
		skillContainer.disable.visible = true;
		skillContainer.buttonMode = false;
		skillContainer.interactive = false;
		skillContainer.markerTargetSeveralContainer.visible = false;
		skillContainer.markerTargetTeamContainer.visible = false;
	});

	enemyArray.forEach(object=>{
		object.healthBar.select.visible = false;
		object.healthBar.target.visible = false;
		object.healthBar.heal.visible = false;
		object.healthBar.move.visible = false;
		object.healthBar.select.animate.kill();
		object.healthBar.heal.animate.kill();
		object.healthBar.heal.width = object.healthBar.target.width;
		// object.healthBar.select.animate = false;
	});
	heroArray.forEach(object=>{
		object.healthBar.select.visible = false;
		object.healthBar.target.visible = false;
		object.healthBar.heal.visible = false;
		object.healthBar.move.visible = false;
		object.healthBar.select.animate.kill();
		object.healthBar.heal.animate.kill();
		object.healthBar.heal.width = object.healthBar.target.width;
		// object.healthBar.select.animate = false;
	});

	var newSkills = [];
	var currPos = [];

	var dmgStatusArray = [];
	selectedVita.statusArray.forEach(storedStatus =>{
		if(storedStatus[0] == 1 || storedStatus[0] == 3 || storedStatus[0] == 5 || storedStatus[0] == 9 || storedStatus[0] == 10){
			dmgStatusArray.push([storedStatus[0]]);
		}
	});

	if(selectedVita.hero){
		fieldHeroHazard.forEach(hazardItem=>{
			var effectiveCalc = 1;
			var hazardElement = 0;
			switch(hazardItem[1]){
				case 1: 
					hazardElement = 2;
					break;
				case 2:
					hazardElement = 1;
					break;
				case 3:
					hazardElement = 3;
					break;
				case 4:
					hazardElement = 7;
					break;
				default:
					hazardElement = 1;
			}
			selectedVita.element.forEach(creatureElement =>{
				var element2 = creatureElement-1;
				effectiveCalc *= elementList.data.element[hazardElement]["effect"][element2];
			});
			if(selectedVita.size > 1){
				if(hazardItem[0]+1 == selectedVita.pos+1 || hazardItem[0]+1 == selectedVita.pos){
					console.log("HAZARD DAMAGE");
					dmgStatusArray.push([11,Math.round(hazardItem[2]*effectiveCalc),effectiveCalc]);
				}
			}else{
				if(hazardItem[0]+1 == selectedVita.pos){
					console.log("HAZARD DAMAGE");
					dmgStatusArray.push([11,Math.round(hazardItem[2]*effectiveCalc),effectiveCalc]);
				}
			}
		});
	}else{
		fieldEnemyHazard.forEach(hazardItem=>{
			// console.log(fieldEnemyHazard);
			// console.log(hazardItem[1]);
			var effectiveCalc = 1;
			var hazardElement = 0;
			switch(hazardItem[1]){
				case 1: 
					hazardElement = 2;
					break;
				case 2:
					hazardElement = 1;
					break;
				case 3:
					hazardElement = 3;
					break;
				case 4:
					hazardElement = 7;
					break;
				default:
					hazardElement = 1;
			}
			selectedVita.element.forEach(creatureElement =>{
				var element2 = creatureElement-1;
				effectiveCalc *= elementList.data.element[hazardElement]["effect"][element2];
			});
			if(selectedVita.size > 1){
				if(hazardItem[0]+1 == selectedVita.pos+1 || hazardItem[0]+1 == selectedVita.pos){
					console.log("HAZARD DAMAGE");
					dmgStatusArray.push([11,Math.round(hazardItem[2]*effectiveCalc),effectiveCalc]);
				}
			}else{
				if(hazardItem[0]+1 == selectedVita.pos){
					console.log("HAZARD DAMAGE");
					dmgStatusArray.push([11,Math.round(hazardItem[2]*effectiveCalc),effectiveCalc]);
				}
			}
		});
	}

	//Change so that status damage is only one damage number, remove split
	if(dmgStatusArray.length > 0){
		selectedVita.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
			dmgNumArrayItem.style.fill = '#D80000';
			dmgNumArrayItem.style.stroke = '#222222';
			dmgNumArrayItem.visible = false;
		});	
		var dmgTotal = 0;
		console.log(dmgStatusArray);
		selectedVita.dmgContainer.dmgPopup.dmgEffective.visible = false;
		dmgStatusArray.forEach((dmgStatus, dmgStatusIndex) =>{
			if(dmgStatus[0] == 11){
				dmgTotal += dmgStatus[1];
			}else{
				var statusDamage = Math.floor(selectedVita.EHP/16);
				dmgTotal += statusDamage;
			}
			// if(dmgStatus[0] == 1){		//bleed
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.fill = '#E3C2C2';
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.stroke = '#910A0A';
			// 	var statusDamage = Math.floor(selectedVita.EHP/16);
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].text = statusDamage;
			// 	dmgTotal += statusDamage;
			// }else if (dmgStatus[0] == 3){		//burn
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.fill = '#ECCFC6';
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.stroke = '#B23F1B';
			// 	var statusDamage = Math.floor(selectedVita.EHP/16);
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].text = statusDamage;
			// 	dmgTotal += statusDamage;
			// 	// selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].text = 10;
			// 	// dmgTotal += 10;
			// }else if (dmgStatus[0] == 5){		//depressed
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.fill = '#CCCCCC';
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.stroke = '#353535';
			// 	var statusDamage = Math.floor(selectedVita.EHP/16);
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].text = statusDamage;
			// 	dmgTotal += statusDamage;
			// }else if (dmgStatus[0] == 9){		//poisoned
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.fill = '#DEC2ED';
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.stroke = '#7C0BB7';
			// 	var statusDamage = Math.floor(selectedVita.EHP/16);
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].text = statusDamage;
			// 	dmgTotal += statusDamage;
			// }else if (dmgStatus[0] == 10){		//recover
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.fill = '#C6F1C5';
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.stroke = '#1BC617';
			// 	var statusDamage = Math.floor(selectedVita.EHP/16);
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].text = statusDamage;
			// 	dmgTotal += statusDamage;
			// }else{			//hazard
			// 	selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.stroke = '#222222';
			// 	if(dmgStatus[2] == 0.25){
			// 		selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.fill = '#9D9D9D';
			// 		selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].text = dmgStatus[1];
			// 	}else if(dmgStatus[2] == 0.5){
			// 		selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.fill = '#FFFFFF';
			// 		selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].text = dmgStatus[1];
			// 	}else if(dmgStatus[2] == 2){
			// 		selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.fill = '#FFE81C';
			// 		selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].text = dmgStatus[1];
			// 	}else if(dmgStatus[2] == 4){
			// 		selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.fill = '#DB00FF';
			// 		selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].text = dmgStatus[1];
			// 	}else if(dmgStatus[2] == 0){
			// 		selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].style.fill = '#D80000';
			// 		selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].text = dmgStatus[1];
			// 	}
			// 	dmgTotal += dmgStatus[1];
			// }
			// selectedVita.dmgContainer.dmgPopup.dmgNumArray[dmgStatusIndex].visible = true;
			// console.log("dmgStatusIndex: " + dmgStatusIndex);
		});
		selectedVita.dmgContainer.dmgPopup.dmgNumArray[0].visible = true;
		selectedVita.dmgContainer.dmgPopup.dmgNumArray[0].text = dmgTotal;
		// console.log("dmgTotal1: " + selectedVita.hp);
		selectedVita.damage(dmgTotal);
		// console.log("dmgTotal2: " + selectedVita.hp);
		var newWidth = selectedVita.healthBar.inner.width - (selectedVita.healthBar.outer.width * (selectedVita.hp/selectedVita.overallHP));
		selectedVita.healthBar.dmgBarContainer.dmgBar.width = newWidth;
		// console.log("newWidth: " + newWidth);
		selectedVita.healthBar.dmgBarContainer.dmgBar.visible = true;
		// selectedVita.healthBar.dmgBarContainer.dmgBar.animate.kill();
		var dmgBarTween = new TimelineMax({paused:true});
		dmgBarTween.fromTo(selectedVita.healthBar.dmgBarContainer.dmgBar
			, 1, {
				width: newWidth
			}, {ease:Expo.easeIn, width:0, onComplete: function(){
				selectedVita.healthBar.dmgBarContainer.dmgBar.visible = false;
		}});
		selectedVita.healthBar.dmgBarContainer.dmgBar.animate = dmgBarTween;
		// console.log("TWEEN");
		selectedVita.healthBar.dmgBarContainer.x = selectedVita.healthBar.outer.width * (selectedVita.hp/selectedVita.overallHP);
		selectedVita.healthBar.inner.width = selectedVita.healthBar.outer.width * (selectedVita.hp/selectedVita.overallHP);

		selectedVita.dmgContainer.dmgPopup.tween.play(0);
		// console.log("dmgPopup tween");
		selectedVita.healthBar.dmgBarContainer.dmgBar.animate.play(0);
		// console.log("dmgBar tween");
		selectedVita.healthBar.dmgBarContainer.dmgBar.animate.eventCallback("onComplete", function(){
			selectedVita.healthBar.textHP.text = selectedVita.hp + " / " + selectedVita.EHP;
			// console.log("new HP");
		});
		// selectedVita.dmgContainer.dmgPopup.tween.eventCallback("onComplete", function(){
			
		// });
	}

	selectSpriteTween = new TimelineMax({onComplete: function(){
		// var selectTween = new TimelineMax({paused: true});
		var selectWidth = selectedVita.healthBar.outer.width;
		selectedVita.healthBar.select.animate.to(selectedVita.healthBar.select, 1, {width:selectWidth+20, ease:Sine.easeInOut});
		selectedVita.healthBar.select.animate.to(selectedVita.healthBar.select, 0.5, {width:selectWidth, ease:Sine.easeInOut});
		selectedVita.healthBar.select.animate.play(0);
	}});
	selectSpriteTween.to(selectedVita.sprite.scale, 0.2, {x:selectedVita.sprite.identifier[0]*spriteScale*1.1, y:spriteScale*1.1});
	selectSpriteTween.to(selectedVita.healthBar.select.scale, 0.2, {x:1.25},0);
	selectSpriteTween.to(selectedVita.sprite.scale, 0.2, {x:selectedVita.sprite.identifier[0]*spriteScale, y:spriteScale});
	selectSpriteTween.to(selectedVita.healthBar.select.scale, 0.2, {x:1},0.2);

	object2.healthBar.turn.visible = false;
	object2.healthBar.select.visible = true;
	// object2.healthBar.select.animate = true;

	object2.skill.forEach(skillID=>{
		newSkills.push(skillID);
	});

	if(object2.size == 1){
		currPos.push(object2.pos);
	}else if(object2.size == 2){
		currPos.push(object2.pos);
		currPos.push(object2.pos+1);
	}	
	
	newSkills.forEach((skillID, skillContainerIndex) => {
		switch(skillList.data.skill[skillID].element){
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
				skillContainerArray[skillContainerIndex].skillElement.texture = resources.element_storm.texture;
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
				skillContainerArray[skillContainerIndex].skillElement.texture = resources.element_void.texture;
				break;
			default:
				skillContainerArray[skillContainerIndex].skillElement.texture = resources.element_fire.texture;
				break;
		}
		
		//identifier = [skillContainerIndex, skillID, stageSide, creaturePos]
		skillContainerArray[skillContainerIndex].identifier = [skillContainerIndex, skillID];
		// skillContainerArray[skillContainerIndex].identifier = [skillContainerIndex, skillID, identifier[0], identifier[1]];
		skillContainerArray[skillContainerIndex].skillName.text = skillList.data.skill[skillID].name;		
		skillList.data.skill[skillID].position.forEach((skillPos, skillPosIndex) => {
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
		
		// console.log(skillContainerIndex + ": " + skillList.data.skill[skillID].tags);
		var column = false;
		var skillSelf = false;
		skillList.data.skill[skillID].tags.forEach(tagName =>{
			if(tagName == "column"){
				column = true;
				if(skillList.data.skill[skillID][tagName][2] > 0){
					skillContainerArray[skillContainerIndex].targetText.text = skillList.data.skill[skillID][tagName][0] + " ►";
				}else{
					skillContainerArray[skillContainerIndex].targetText.text = "◄ " + skillList.data.skill[skillID][tagName][0];
				}
				
				if(skillList.data.skill[skillID][tagName][3] > 0){					
					skillContainerArray[skillContainerIndex].targetText.style.fill = '0x66cc66';
				}else{
					skillContainerArray[skillContainerIndex].targetText.style.fill = '0xFF6961';
				}
			}else if(tagName == "several"){
				skillContainerArray[skillContainerIndex].markerTargetSeveralContainer.visible = true;
				//Show target dashes if 1
				skillList.data.skill[skillID][tagName].forEach((dash, dashIndex) => {
					if(dash == 1){
						skillContainerArray[skillContainerIndex].markerTargetSeveralArray[dashIndex].visible = true;
					}else{
						skillContainerArray[skillContainerIndex].markerTargetSeveralArray[dashIndex].visible = false;
					}
				});
			}
			else if(tagName == "self"){
				skillSelf = true;
				skillContainerArray[skillContainerIndex].targetText.text = "Self";
				skillContainerArray[skillContainerIndex].targetText.style.fill = '0x66cc66';
			}
			else if(tagName == "team"){
				skillContainerArray[skillContainerIndex].markerTargetTeamContainer.visible = true;
				skillContainerArray[skillContainerIndex].markerTargetContainer.visible = false;
				skillList.data.skill[skillID].target.forEach((skillTarget, targetIndex) => {
					if(skillTarget == 1){
						skillContainerArray[skillContainerIndex].markerTargetTeamArray[targetIndex].visible = true;
					}else{
						skillContainerArray[skillContainerIndex].markerTargetTeamArray[targetIndex].visible = false;
					}
				});
			}
			// console.log(skillList.data.skill[skillID][tagName]);
		});
		
		if(column || skillSelf){
			skillContainerArray[skillContainerIndex].markerTargetContainer.visible = false;
			skillContainerArray[skillContainerIndex].targetText.visible = true;
		}else{
			skillContainerArray[skillContainerIndex].markerTargetContainer.visible = true;
			skillContainerArray[skillContainerIndex].targetText.visible = false;
			skillList.data.skill[skillID].target.forEach((skillTarget, targetIndex) => {
				if(skillTarget == 1){
					skillContainerArray[skillContainerIndex].markerTargetArray[targetIndex].visible = true;
				}else{
					skillContainerArray[skillContainerIndex].markerTargetArray[targetIndex].visible = false;
				}
			});
		}
	});	
}

function endTurn(){
	userInput = false;
	//Get next turn Vita. If out of turns, and still have enemies, and still have heroes
	if(turnArray.length != 0){
		selectCreature(turnArray[0]);
		turnArray.shift();
	}else{
		calculateTurnOrder();
	}
	selectedSkill = -1;
	validMoveObjectArray = [];
}