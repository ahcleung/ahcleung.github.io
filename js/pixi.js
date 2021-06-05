/*======================================================================================
*
*FileName:        pixi.js
*Project:         Project Elements
*Version:         2.1
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
		"js/json/creature.json",
		"js/json/skill.json",
		"js/json/element.json",
		"js/json/item.json",
		"js/json/map.json",
		"js/json/encounter.json",
		"js/json/player_map.json",

		{name:'icon_plus', url:'img/icon_plus.png'},

		{name:'encounterMarker', url:'img/encounterMarker.png'},
		{name:'tile_hidden', url:'img/tile_hidden1.png'},
		{name:'tile_fog', url:'img/tile_fog.png'},
		{name:'tile_move1', url:'img/tile_move1.png'},
		{name:'tile_move2', url:'img/tile_move2.png'},
		{name:'tile_veela1', url:'img/tile_veela1.png'},
		{name:'tile_veela2', url:'img/tile_veela2.png'},
		{name:'tile_edge_N', url:'img/tile_edge_N.png'},
		{name:'tile_edge_NE', url:'img/tile_edge_NE.png'},
		{name:'tile_edge_E', url:'img/tile_edge_E.png'},
		{name:'tile_edge_SE', url:'img/tile_edge_SE.png'},
		{name:'tile_edge_S', url:'img/tile_edge_S.png'},
		{name:'tile_edge_SW', url:'img/tile_edge_SW.png'},
		{name:'tile_edge_W', url:'img/tile_edge_W.png'},
		{name:'tile_edge_NW', url:'img/tile_edge_NW.png'},
		{name:'tile_bamboo_base', url:'img/tile_bamboo_base.png'},
		{name:'tile_bamboo_1', url:'img/tile_bamboo_1.png'},
		{name:'tile_bamboo_2', url:'img/tile_bamboo_2.png'},
		{name:'tile_bamboo_3', url:'img/tile_bamboo_3.png'},
		{name:'tile_forest_base', url:'img/tile_forest_base.png'},
		{name:'tile_forest_1', url:'img/tile_forest_1.png'},
		{name:'tile_forest_2', url:'img/tile_forest_2.png'},
		{name:'tile_forest_3', url:'img/tile_forest_3.png'},
		// {name:'tile_forest_4', url:'img/tile_forest_4.png'},
		{name:'tile_grass_base', url:'img/tile_grass_base.png'},
		{name:'tile_grass_1', url:'img/tile_grass_1.png'},
		{name:'tile_grass_2', url:'img/tile_grass_2.png'},
		{name:'tile_grass_3', url:'img/tile_grass_3.png'},
		{name:'tile_hill_base', url:'img/tile_hill_base.png'},
		{name:'tile_hill_1', url:'img/tile_hill_1.png'},
		{name:'tile_hill_2', url:'img/tile_hill_2.png'},
		{name:'tile_hill_3', url:'img/tile_hill_3.png'},
		{name:'tile_mountain_base', url:'img/tile_mountain_base.png'},
		{name:'tile_mountain_1', url:'img/tile_mountain_1.png'},
		{name:'tile_mountain_2', url:'img/tile_mountain_2.png'},
		{name:'tile_mountain_3', url:'img/tile_mountain_3.png'},
		{name:'tile_plains_base', url:'img/tile_plains_base.png'},
		{name:'tile_plains_1', url:'img/tile_plains_1.png'},
		{name:'tile_plains_2', url:'img/tile_plains_2.png'},
		{name:'tile_plains_3', url:'img/tile_plains_3.png'},
		{name:'tile_water_d_base', url:'img/tile_water_d_base.png'},
		{name:'tile_water_m_base', url:'img/tile_water_m_base.png'},
		{name:'tile_water_s_base', url:'img/tile_water_s_base.png'},
		{name:'tile_water_1', url:'img/tile_water_1.png'},
		{name:'tile_water_2', url:'img/tile_water_2.png'},
		{name:'tile_water_3', url:'img/tile_water_3.png'},

		{name:'arrow_up_d', url:'img/arrow_up_d.png'},
		{name:'arrow_up_n', url:'img/arrow_up_n.png'},
		{name:'arrow_down_d', url:'img/arrow_down_d.png'},
		{name:'arrow_down_n', url:'img/arrow_down_n.png'},

		{name:'hazard_lit', url:'img/hazard_lit.png'},
		{name:'hazard_spikes', url:'img/hazard_spikes.png'},
		{name:'hazard_spores', url:'img/hazard_spores.png'},

		{name:'blank', url:'img/blank.png'},
		{name:'skill_fire_flareup', url:'img/skill_fire_flareup.png'},
		{name:'skill_storm_lightningstrike', url:'img/skill_storm_lightningstrike.png'},
		{name:'skill_wind_aeropush', url:'img/skill_wind_aeropush.png'},
		{name:'skill_water_watergeyser', url:'img/skill_water_watergeyser.png'},

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
const skillList = resources["js/json/skill.json"];
const elementList = resources["js/json/element.json"];
const creatureList = resources["js/json/creature.json"];
const itemList = resources["js/json/item.json"];
const mapList = resources["js/json/map.json"];
const encounterList = resources["js/json/encounter.json"];
const playerMapList = resources["js/json/player_map.json"];

let state, onScreenStats, consoleScreen, turnText, mapBG, sizeScale;

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
const veelaHolder = new PIXI.Container();
const encounterHolder = new PIXI.Container();
// var updateEncounterText = false;

const mapHolder = new PIXI.Container();

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
const tileArray = [];
const tileSpriteArray = [];
var tileTraversable = [];
var playerPos = [];
var travelMechanic = 0;			//0 = walking, 1 = boots, 2 = mounted, 3 = flying, 4 = surfing
var surfMechanic = 0;			//0 = surf, 1 = surf+
var travelSwitchText, surfSwitchText;
var canSurf = false;
var surfing = false;

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
	skill:[4,1,6,2],
	items: [2],
	statDODG: 0, statHP: 0, statPATK: 0, statPDEF: 0, statSATK: 150, statSDEF: 0, statSPD: 0,
	hero: true
};
hero[1] = {
	id: 11, level: 47,
	skill:[1,10,3,22],
	items: [2,2],
	statDODG: 95, statHP: 0, statPATK: 0, statPDEF: 21, statSATK: 0, statSDEF: 25, statSPD: 0,
	hero: true
};
hero[2] = {
	id: 12, level: 51,
	skill:[17,6,5,12],
	items: [2],
	statDODG: 2, statHP: 0, statPATK: 0, statPDEF: 0, statSATK: 0, statSDEF: 0, statSPD: 0,
	hero: true
};
// hero[3] = {
// 	id: 11, level: 47, 
// 	skill1: 4, skill2: 0, skill3: 6, skill4: 1,
// 	statDODG: 20, statHP: 35, statPATK: 0, statPDEF: 3, statSATK: 40, statSDEF: 20, statSPD: 19
// };

const enemy = [];

enemy[0] = {
	id: 5, level: 46,
	skill:[4,7,6,2],
	items: [1],
	statDODG: 0, statHP: 0, statPATK: 0, statPDEF: 0, statSATK: 0, statSDEF: 0, statSPD: 130,
	hero: false
};
enemy[1] = {
	id: 8, level: 49,
	skill:[4,3,6,22],
	items: [2,2],
	statDODG: 70, statHP: 12, statPATK: 0, statPDEF: 0, statSATK: 0, statSDEF: 0, statSPD: 0,
	hero: false
};
enemy[2] = {
	id: 13, level: 45,
	skill:[4,3,5,21],
	items: [1],
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




function showTraversable(){
	if(!surfing){
		switch(travelMechanic){
			case 0:
				range = 1;
				break;
			case 1:
				range = 2;
				break;
			case 2:
				range = 3;
				break;
			case 3:
				range = 3;
				break;
			default:
				range = 1;
				break;
		}
	}else{
		switch(surfMechanic){
			case 0:
				range = 2;
				break;
			case 1:
				range = 3;
				break;
			default:
				range = 1;
				break;
		}
	}
	// var range = 3;
	var traversablePos = [];
	var range1Array = [];
	var numberTiles = 0;
	var isEven = false;
	if(playerPos[0]%2 == 0)		isEven = true;

	//sides
	for (var i = 1; i < range+1; i++){
		var Aa = 0;
		var Bb = 0;
		var Cc = 0;
		var xOdd = 0;
		var yAdjust = 0;
		if(i != 2){
			if(playerPos[0]%2 == 0)		xOdd = 1;
			if(i > 2)					Aa = 1;
			if(i > 3)					Bb = -1 + xOdd;
			if(i > 4)					Cc = 1 - (playerPos[0]%2);
			yAdjust = (Aa * -1) + (playerPos[0]%2) + Bb - Cc;
		}
		for(var j = 0; j < range*2-i+1; j++){
			var playerPosYAdjust = playerPos[1]-range+j+1-yAdjust;
			if(playerPosYAdjust >= 0 && playerPosYAdjust < 44){
				if(playerPos[0]-i >= 0)		traversablePos.push([playerPos[0]-i,playerPosYAdjust]);
				if(playerPos[0]+i < 50)		traversablePos.push([playerPos[0]+i,playerPosYAdjust]);
				if(j == range-1 || j == range){
					if(i == 1){
						if(playerPos[0]-i >= 0)		range1Array.push([playerPos[0]-i,playerPosYAdjust]);
						if(playerPos[0]+i < 50)		range1Array.push([playerPos[0]+i,playerPosYAdjust]);
					}
				}
			}
		}
	}
	//main column
	for (var i = 1; i < range+1; i++){
		if(playerPos[1]+i < 44)		traversablePos.push([playerPos[0],playerPos[1]+i]);
		if(playerPos[1]-i >= 0)		traversablePos.push([playerPos[0],playerPos[1]-i]);
		if(i == 1){
			if(playerPos[1]+i < 44)		range1Array.push([playerPos[0],playerPos[1]+i]);
			if(playerPos[1]-i >= 0)		range1Array.push([playerPos[0],playerPos[1]-i]);
		}
	}
	
	console.log(traversablePos);
	console.log(range1Array);
	var removeArray = [];

	traversablePos.forEach(arrayIndex=>{
		// console.log(arrayIndex);
		var indexNum = arrayIndex[1] * 50 + arrayIndex[0];
		// if(travelMechanic != 3){
			var tileObstacle = false;
			var tileID = tileArray[indexNum].id;
			if(!surfing){
				if(travelMechanic != 3){
					if(tileID == 7 || tileID == 6 || tileID == 2 || tileID == 1)	tileObstacle = true;
				}
			}else{
				if(surfMechanic == 0){
					if(tileArray[indexNum].id == 1)		tileObstacle = true;
				}
				if(tileID == 3 || tileID == 4 || tileID == 5 || tileID == 6 || tileID == 7)		tileObstacle = true;
			}
			if(tileObstacle){
				console.log("Obstacle at: " + tileArray[indexNum].pos);
				var obstacleDifference = [
					arrayIndex[0] - playerPos[0],
					arrayIndex[1] - playerPos[1]
				];
				console.log("Difference 1: " + obstacleDifference);
				var count;
				if(isEven){
					if(Math.abs(obstacleDifference[0]) == 1)			obstacleDifference[1]--
					else if(Math.abs(obstacleDifference[0]) == 3)		obstacleDifference[1]--
				}
				console.log("Difference 2: " + obstacleDifference);
				if(range == 1 || range == Math.abs(obstacleDifference[1]) || range == Math.abs(obstacleDifference[0])){
					count = 0;
				}else if(obstacleDifference[0] == 0 && Math.abs(obstacleDifference[1]) > 0){
					count = 1;
				}else if(Math.abs(obstacleDifference[0]) == 2 && obstacleDifference[1] == 0){
					count = 1;
				}else if(obstacleDifference[1] == range-1){
					count = 0;
				}else if(range == 3 && Math.abs(obstacleDifference[0]) == 2 && obstacleDifference[1] == -2){
					count = 0;
				}else if(Math.abs(obstacleDifference[0]) > 1 || Math.abs(obstacleDifference[1]) > 1){
					count = 2;
				}else if(Math.abs(obstacleDifference[0]) == 1 && obstacleDifference[1] == 1){
					count = 2;
				}else{
					count = range;
				}
				for(var i = 0; i < count; i++){
					var xPos = Math.sign(obstacleDifference[0])*i+arrayIndex[0];
					var yPos, bottom, removeIndex, yCount;
					yPos = (obstacleDifference[1] >= 0 ? 0 : 44);
					bottom = (obstacleDifference[1] >= 0 ? true : false);
					// if(obstacleDifference[1] >= 0){
					// 	yPos = 0;
					// 	bottom = true;
					// }else{
					// 	yPos = 44;
					// 	bottom = false;
					// }
					traversablePos.forEach((arrayIndex,index)=>{
						if(arrayIndex[0] == xPos){
							if(bottom){
								if(yPos < arrayIndex[1])	yPos = arrayIndex[1];
							}else{
								if(yPos > arrayIndex[1])	yPos = arrayIndex[1];
							}
						}
					});
					// xPos = playerPos[0]+i
					console.log("Block: [" + xPos + ", " + yPos + "]");

					if(Math.abs(obstacleDifference[0]) == 1 && obstacleDifference[1] == 1){
						removeArray.push([xPos,yPos]);
					}else if(Math.abs(obstacleDifference[0]) == 1 && obstacleDifference[1] == -2){
						removeArray.push([xPos,yPos]);
					}else if(obstacleDifference[0] == 0 && Math.abs(obstacleDifference[1]) > 0){
						removeArray.push([xPos,yPos]);
						if(range == 3 && Math.abs(obstacleDifference[1]) == 1){
							if(bottom){
								removeArray.push([xPos,yPos-1]);
								removeArray.push([xPos+1,yPos-playerPos[0]%2]);
								removeArray.push([xPos+1,yPos-1-playerPos[0]%2]);
								removeArray.push([xPos-1,yPos-playerPos[0]%2]);
								removeArray.push([xPos-1,yPos-1-playerPos[0]%2]);
								removeArray.push([xPos-2,yPos-1]);
								removeArray.push([xPos+2,yPos-1]);
							}else{
								removeArray.push([xPos,yPos+1]);
								removeArray.push([xPos+1,yPos+1-playerPos[0]%2]);
								removeArray.push([xPos+1,yPos+2-playerPos[0]%2]);
								removeArray.push([xPos-1,yPos+1-playerPos[0]%2]);
								removeArray.push([xPos-1,yPos+2-playerPos[0]%2]);
								removeArray.push([xPos-2,yPos+1]);
								removeArray.push([xPos+2,yPos+1]);
							}
						}else{
							if(bottom){
								removeArray.push([xPos-1,yPos-playerPos[0]%2]);
								removeArray.push([xPos+1,yPos-playerPos[0]%2]);
							}else{
								removeArray.push([xPos-1,yPos+1-playerPos[0]%2]);
								removeArray.push([xPos+1,yPos+1-playerPos[0]%2]);
							}
						}	
					}else if(Math.abs(obstacleDifference[0]) == 2 && obstacleDifference[1] == 0){
						if(obstacleDifference[0] > 0){
							removeArray.push([xPos+1,yPos-1-playerPos[0]%2]);
							removeArray.push([xPos+1,yPos-2-playerPos[0]%2]);
						}else{
							removeArray.push([xPos-1,yPos-1-playerPos[0]%2]);
							removeArray.push([xPos-1,yPos-2-playerPos[0]%2]);
						}
					}else{
						if(i == 0)		yCount = count-1;
						else			yCount = count;
						for(j = 0; j < yCount; j++){
							// var newY;
							// if(bottom)		newY = yPos-j;
							// else  			newY = yPos+j;
							var newY = (bottom ? yPos-j : yPos+j);
							console.log("Block: [" + xPos + ", " + newY + "]");
							removeArray.push([xPos,newY]);
						}
					}
					// removeFromArray.push(yPos * 50 + xPos);
				}
			}
		// }
	});

	var removeFromArray = [];
	traversablePos.forEach((tilePos, index)=>{
		removeArray.forEach(pos=>{
			if(tilePos[0] == pos[0] && tilePos[1] == pos[1]){
				removeFromArray.push(index);
			}
		});		
	});

	removeFromArray = removeDuplicates(removeFromArray);
	// console.log("Index at: " + removeFromArray);

	for (var i = removeFromArray.length -1; i >= 0; i--){
		traversablePos.splice(removeFromArray[i],1);
	}
	// traversableIndex = traversableRing1.concat(traversableRing2);

	if(canSurf && !surfing){
		// console.log("can surf");
		range1Array.forEach(arrayIndex=>{
			// console.log("check water");
			var indexNum = arrayIndex[1] * 50 + arrayIndex[0];
			var tileID = tileArray[indexNum].id;
			// if(surfMechanic == 0){
			// 	if(tileArray[indexNum].id == 2){
			// 		tileArray[indexNum].showTile();
			// 		tileArray[indexNum].showMove1();
			// 		tileTraversable.push(tileArray[indexNum]);
			// 	}
			// }else{
			// 	if(tileArray[indexNum].id == 2 || tileArray[indexNum].id == 1){
			// 		// traversablePos.push(arrayIndex);
			// 		// console.log(arrayIndex + " is water");
			// 		tileArray[indexNum].showTile();
			// 		tileArray[indexNum].showMove1();
			// 		tileTraversable.push(tileArray[indexNum]);
			// 	}
			// }

			var showTile = false;
			if(surfMechanic == 0){
				if(tileID == 2)		showTile = true;
			}else{
				if(tileID == 2 || tileID == 1)		showTile = true;
			}
			if(showTile){
				tileArray[indexNum].showTile();
				tileArray[indexNum].showMove1();
				tileTraversable.push(tileArray[indexNum]);
			}
		});
	}

	if(surfing){
		// console.log("can surf");
		range1Array.forEach(arrayIndex=>{
			// console.log("check water");
			var indexNum = arrayIndex[1] * 50 + arrayIndex[0];
			var tileID = tileArray[indexNum].id;
			if(tileID == 3 || tileID == 4 || tileID == 5 || tileID == 6){
				tileArray[indexNum].showTile();
				tileArray[indexNum].showMove1();
				tileTraversable.push(tileArray[indexNum]);
			}
		});
	}

	var playerTileIndex = playerPos[1] * 50 + playerPos[0];
	tileArray[playerTileIndex].showTile();

	traversablePos.forEach(pos=>{
		// console.log(arrayIndex);
		var indexNum = pos[1] * 50 + pos[0];
		// if(tileArray[indexNum].id == 7){
		// 	console.log("Mountain at: " + tileArray[indexNum].pos);
		// }else if(tileArray[indexNum].id == 6){
		// 	console.log("Hill at: " + tileArray[indexNum].pos);
		// }
		tileArray[indexNum].showTile();

		// if(!surfing){
		// 	if(tileArray[indexNum].id != 1 && tileArray[indexNum].id != 2){
		// 		tileArray[indexNum].showMove1();
		// 		tileTraversable.push(tileArray[indexNum]);
		// 	}
		// }else{
		// 	if(surfMechanic == 0){
		// 		if(tileArray[indexNum].id != 1 && tileArray[indexNum].id != 3 && tileArray[indexNum].id != 4 && tileArray[indexNum].id != 5 && tileArray[indexNum].id != 6){
		// 			tileArray[indexNum].showMove1();
		// 			tileTraversable.push(tileArray[indexNum]);
		// 		}
		// 	}else{
		// 		if(tileArray[indexNum].id != 3 && tileArray[indexNum].id != 4 && tileArray[indexNum].id != 5 && tileArray[indexNum].id != 6){
		// 			tileArray[indexNum].showMove1();
		// 			tileTraversable.push(tileArray[indexNum]);
		// 		}
		// 	}
		// }

		var showTile = false;
		var tileID = tileArray[indexNum].id;
		if(!surfing){
			if(tileID != 1 && tileID != 2)		showTile = true;
		}else{
			if(surfMechanic == 0){
				if(tileID != 1 && tileID != 3 && tileID != 4 && tileID != 5 && tileID != 6)		showTile = true;
			}else{
				if(tileID != 3 && tileID != 4 && tileID != 5 && tileID != 6)	showTile = true;
			}
		}
		if(showTile){
			tileArray[indexNum].showMove1();
			tileTraversable.push(tileArray[indexNum]);
		}
	});
	
}

function removeDuplicates(array) {
	return array.filter((a, b) => array.indexOf(a) === b)
};

function onMapDown(){
	if(playerPos[0] == 0 || playerPos[0] == 49 ||  playerPos[1] == 0 || playerPos[1] == 43){
		console.log("Player moves to next map [" + playerPos + "]");
	}
	console.log("onMapDown");
}

function onTravelSwitchDown(){
	travelMechanic++;
	if(travelMechanic == 4)		travelMechanic = 0;
	switch(travelMechanic){
		case 0:
			travelSwitchText.text = "Walking";
			break;
		case 1:
			travelSwitchText.text = "Boots";
			break;
		case 2:
			travelSwitchText.text = "Mounted";
			break;
		case 3:
			travelSwitchText.text = "Flying";
			break;
		default:
			travelSwitchText.text = "DefaultTravel";
			break;
	}
}

function onSurfSwitchDown(){
	surfMechanic++;
	if(surfMechanic == 2)		surfMechanic = 0;
	switch(surfMechanic){
		case 0:
			surfSwitchText.text = "Surf";
			break;
		case 1:
			surfSwitchText.text = "Surf+";
			break;
		default:
			surfSwitchText.text = "DefaultSurf";
			break;
	}
}

function onSwitchDown(){
	mapBG.visible = false;
	mapHolder.visible = false;
	stageContainer.visible = true;
	turnText.visible = true;
	interfaceHolder.visible = true;
	var newMapX = -(mapHolder.tileWidth*3/4 * playerPos[0]) - (mapHolder.tileWidth/2) + (app.screen.width/2);
	var yAdjust = (playerPos[0]% 2 == 0 ? mapHolder.tileHeight/2 : 0);
	var newMapY = -(mapHolder.tileHeight * (playerPos[1])) - yAdjust + (app.screen.height/2);

	// if(playerPos[0]% 2 == 0){		
	// 	var newMapY = -(mapHolder.tileHeight * (playerPos[1])) - (mapHolder.tileHeight/2) + (app.screen.height/2);
	// }else{
	// 	var newMapY = -(mapHolder.tileHeight * (playerPos[1])) + (app.screen.height/2);
	// }
	var mapTween = new TimelineMax();
	mapTween.to(mapHolder, 1, {x: newMapX, y: newMapY, ease:Sine.easeInOut});
}

function onTileDown(){
	console.log("TILE: " + this.object.pos);
	console.log("discovered: " + this.object.discovered + " || travelled: " + this.object.travelled);
	var obstacleDifference = [
		this.object.pos[0] - playerPos[0],
		this.object.pos[1] - playerPos[1]
	];
	console.log("Difference: " + obstacleDifference);
	if(this.object.travelConfirm){			//move to tile
		console.log("MOVE TO: " + this.object.pos);
		if(this.object.id == 1 || this.object.id == 2){		//surfing switch when changing from land to water
			if(!surfing)	surfing = true;
		}else{
			if(surfing)		surfing = false;
		}
		console.log("Surfing: " + surfing);
		tileTraversable.forEach(item =>{
			item.hideMove1();
			item.hideMove2();
		});
		playerPos = this.object.pos;
		var newVeelaX = playerPos[0] * mapHolder.tileWidth * 3/4;
		var newVeelaY = (playerPos[1]+1) * mapHolder.tileHeight - ((playerPos[0]%2)*mapHolder.tileHeight)/2;
		var veelaMoveTween = new TimelineMax();
		veelaMoveTween.to(mapHolder.veela, 1, {x: newVeelaX, y: newVeelaY, ease:Sine.easeInOut});

		var newMapX = -(mapHolder.tileWidth*3/4 * playerPos[0]) - (mapHolder.tileWidth/2) + (app.screen.width/2);
		var yAdjust = (playerPos[0]% 2 == 0 ? mapHolder.tileHeight/2 : 0);
		var newMapY = -(mapHolder.tileHeight * (playerPos[1])) - yAdjust + (app.screen.height/2);
		// mapHolder.x = -(sizeTile.width*3/4 * playerPos[0]) - (sizeTile.width/2) + (app.screen.width/2);
		// 	if(playerPos[0]% 2 == 0){		
		// 		mapHolder.y = -(sizeTile.height * (playerPos[1])) - (sizeTile.height/2) + (app.screen.height/2);
		// 	}else{
		// 		mapHolder.y = -(sizeTile.height * (playerPos[1])) + (app.screen.height/2);
		// 	}
		// if(playerPos[0]% 2 == 0){		
		// 	var newMapY = -(mapHolder.tileHeight * (playerPos[1])) - (mapHolder.tileHeight/2) + (app.screen.height/2);
		// }else{
		// 	var newMapY = -(mapHolder.tileHeight * (playerPos[1])) + (app.screen.height/2);
		// }
		var mapTween = new TimelineMax();
		var tileRate = 150;
		var encounterMod = [];
		encounterMod.push((this.object.travelled ? 0.5 : 1));
		var encounterRate = tileRate * 16;		//calculated rate from outside factors
		encounterMod.forEach(modifier =>{
			encounterRate *= modifier;
		});

		var encounterRoll = Math.floor(Math.random() * 2880);		//random roll
		console.log("Encounter rate: " + encounterRate + "\nEncounter roll: " +  encounterRoll);
		var tileID = this.object.id;
		mapTween.to(mapHolder, 1, {x: newMapX, y: newMapY, ease:Sine.easeInOut, onComplete: function(){
			if(encounterRoll < encounterRate){
				console.log("Encounter battle! ");
				encounterSpawn(tileID);
				// showTraversable();
			}else{
				console.log("No encounter");
				showTraversable();	
			}
		}});
		this.object.setTravelled();
	}else if(this.object.traversable){			//select tile
		// console.log("SELECT: " + this.object.pos);
		tileTraversable.forEach(item =>{
			item.hideMove2();
		});
		this.object.showMove2();
	}
	// console.log(this.object.pos);
	// this.move2.visible = false;
}

function encounterSpawn(id){
	mapHolder.interactive = false;
	// mapHolder.buttonMode = false;
	tileSpriteArray.forEach(tileSprite=>{
		tileSprite.interactive = false;
	});

	mapHolder.veela.marker.tween.play(0);
	// encounterHolder.bgTween.play(0);

	var tileCreatureArray = [];
	var enemyRoster = [];
	encounterList.data.encounter[0].creatures.forEach(creature=>{
		if(creature[0] == id){
			tileCreatureArray.push(creature);
		}
	});

	var i = 4;
	do{
		var creatureRoll = Math.floor(Math.random() * 100) + 1;
		var creatureTracker = 1;
		tileCreatureArray.forEach(creature =>{
			if(creatureRoll >= creatureTracker && 
				creatureRoll < creatureTracker+creature[4] && 
				creatureList.data.creature[creature[1]].size <= i){
				enemyRoster.push([
					creature[1],
					creatureList.data.creature[creature[1]].name,
					Math.floor(Math.random() * (creature[3] - creature[2] + 1) + creature[2])
					]);
				i-= creatureList.data.creature[creature[1]].size;
			}
			creatureTracker+=creature[4];
		});
		// i--;
	}while(i > 0);
	console.log(tileCreatureArray);
	console.log(enemyRoster);
}

function onEncounterDown(){
	// mapHolder.veela.marker.tween.play(0);
	encounterHolder.textBox.textObj.alpha = 0;
	encounterHolder.textBox.textObj.text = "Ohh it’s so nice to see a young Ranger on their trial. I remember going on my trial when I was your age. It changed my life! How about a little battle with little old me?";
	encounterHolder.textBox.textObj.tween.play(0)
	// updateEncounterText = true;
}

function onDragStart(event)
{
	// console.log("MAP!");
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    // this.alpha = 0.5;
    this.dragging = true;
    this.mouseData = event.data.getLocalPosition(this);
    // var mouseData = event.data.getLocalPosition(this);
    // console.log(mouseData);
}

function onDragEnd()
{
    // this.alpha = 1;

    this.dragging = false;

    // set the interaction data to null
    this.data = null;
}

function onDragMove()
{
    if (this.dragging)
    {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.position.x = newPosition.x-this.mouseData.x;
        this.position.y = newPosition.y-this.mouseData.y;
    }
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
	// if(updateEncounterText){
	// 	encounterHolder.textBox.textObj.text = "This is the updated text";
	// }
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

function getTextureElement(identifier){
	switch(identifier){
		case 1:
			return resources.element_flora.texture;
			break;
		case 2:
			return resources.element_water.texture;
			break;
		case 3:
			return resources.element_fire.texture;
			break;
		case 4:
			return resources.element_earth.texture;
			break;
		case 5:
			return resources.element_storm.texture;
			break;
		case 6:
			return resources.element_wind.texture;
			break;
		case 7:
			return resources.element_toxic.texture;
			break;
		case 8:
			return resources.element_spirit.texture;
			break;
		case 9:
			return resources.element_void.texture;
			break;
		default:
			return resources.element_flora.texture;
			break;
	}
}

function getTextElement(identifier){
	switch(identifier){
		case 1:
			return "Flora";
			break;
		case 2:
			return "Water";
			break;
		case 3:
			return "Fire";
			break;
		case 4:
			return "Earth";
			break;
		case 5:
			return "Storm";
			break;
		case 6:
			return "Wind";
			break;
		case 7:
			return "Toxic";
			break;
		case 8:
			return "Spirit";
			break;
		case 9:
			return "Void";
			break;
		default:
			return "Flora";
			break;
	}
}

function getTextureStatus(identifier){
	switch(identifier){
		case 1:
			return resources.status_bleed.texture;
			break;
		case 2:
			return resources.status_buff.texture;
			break;
		case 3:
			return resources.status_burned.texture;
			break;
		case 4:
			return resources.status_debuff.texture;
			break;
		case 5:
			return resources.status_depressed.texture;
			break;
		case 6:
			return resources.status_guard.texture;
			break;
		case 7:
			return resources.status_immune.texture;
			break;
		case 8:
			return resources.status_paralyzed.texture;
			break;
		case 9:
			return resources.status_poisoned.texture;
			break;
		case 10:
			return resources.status_recover.texture;
			break;
		case 11:
			return resources.status_secured.texture;
			break;
		case 12:
			return resources.status_silenced.texture;
			break;
		case 13:
			return resources.status_stunned.texture;
			break;
		case 14:
			return resources.status_critical.texture;
			break;
		default:
			return resources.status_buff.texture;
			
	}
}

function getTextStatus(identifier){
	switch(identifier){
		case 1:
			return "Bleed";
			break;
		case 2:
			return "Buff";
			break;
		case 3:
			return "Burned";
			break;
		case 4:
			return "Debuff";
			break;
		case 5:
			return "Depressed";
			break;
		case 6:
			return "Guard";
			break;
		case 7:
			return "Immune";
			break;
		case 8:
			return "Paralyzed";
			break;
		case 9:
			return "Poisoned";
			break;
		case 10:
			return "Recover";
			break;
		case 11:
			return "Secured";
			break;
		case 12:
			return "Silenced";
			break;
		case 13:
			return "Stunned";
			break;
		case 14:
			return "Critical";
			break;
		default:
			return "Buff";
			
	}
}

function textStat(identifier){
	switch(identifier){
		case 1:
			return "HP";
			break;
		case 2:
			return "Dodge";
			break;
		case 3:
			return "Physical attack";
			break;
		case 4:
			return "Physical defense";
			break;
		case 5:
			return "Special attack";
			break;
		case 6:
			return "Special defense";
			break;
		case 7:
			return "Speed";
			break;
		case 8:
			return "Accuracy";
			break;
	}
}

function onMenuDown(){
	// stageContainer.visible = false;
	// turnText.visible = false;
	// selectedVita.healthBar.select.animate.kill();
	// // interfaceHolder.visible = false;

	// stageContainer.destroy(true);
	// turnText.destroy(true);
	// interfaceHolder.destroy(true);

	// console.log("explore");
	
	if (screenfull.isEnabled) {
		screenfull.toggle();
	}
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
	// onScreenStats.visible = true;
	// consoleScreen.visible = true;
	mapBG.visible = true;
	mapHolder.visible = true;
	stageContainer.visible = false;
	turnText.visible = false;
	interfaceHolder.visible = false;
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
		creatureInfo.statusText.forEach(textContainer=>{
			console.log("destroy text");
			textContainer.destroy(true);
		});

		// creatureInfo.skillText.forEach(text=>{
		// 	console.log("destroy text");
		// 	text.destroy();
		// });

		creatureInfo.infoSkillArray.forEach(skillContainer=>{
			skillContainer.destroy();
		});

		creatureInfo.infoItemArray.forEach(itemContainer =>{
			itemContainer.interactive = false;
		});

		creatureInfo.infoItemSprite.forEach(icon=>{
			// console.log("destroy item sprite");
			icon.texture = resources['blank'].texture;
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

	var statusMargin = [app.screen.width/20,app.screen.height/17];
	var turnMargin = app.screen.width/192;
	
	creatureInfoSprite.addChild(armatureHero);
	creatureInfoSprite.scale.set(app.screen.width/3200);
	// console.log("Width: " + creatureInfoSprite.width);

	creatureInfoSprite.position.set((app.screen.width/4)+(creatureInfoSprite.width/2), app.screen.height*3/4);
	creatureInfo.addChild(creatureInfoSprite);

	creatureInfo.info_main_text[1].text = this.object.name;
	creatureInfo.info_main_text[3].text = this.object.level;
	creatureInfo.info_main_text[6].text = this.object.experienceGained + " / " + this.object.experienceNext;
	creatureInfo.info_main_text[8].text = creatureList.data.creature[this.object.id].desc;
	
	creatureInfo.info_main_elementIcon[0].visible = false;
	creatureInfo.info_main_elementIcon[1].visible = false;
	creatureInfo.info_main_element[0].text = "";
	creatureInfo.info_main_element[1].text = "";
	creatureInfo.info_main_element[0].visible = false;
	creatureInfo.info_main_element[1].visible = false;

	creatureInfo.info_main_expPercentage = this.object.experienceGained / this.object.experienceNext;
	creatureInfo.info_main_expBar[0].width = creatureInfo.info_main_expPercentage * app.screen.width/3.84;
	
	this.object.element.forEach((element, elementIndex) =>{
		creatureInfo.info_main_element[elementIndex].visible = true;
		creatureInfo.info_main_elementIcon[elementIndex].visible = true;
		creatureInfo.info_main_elementIcon[elementIndex].texture = getTextureElement(element);
		creatureInfo.info_main_element[elementIndex].text = getTextElement(element)
	});

	var creatureStatusInfoArray = [];
	
	creatureInfo.status.visible = false;

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
		var statusContainerText = [];
		statusContainer.statusContainerText = statusContainerText;
		let statusEffectIcon = new PIXI.Sprite(getTextureStatus(statusNum));
		let textStatus = new Text(getTextStatus(statusNum), {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xfefefe, align : 'left'});
		console.log(getTextStatus(statusNum) + ":");
		statusIcon.push(statusEffectIcon);
		statusContainer.addChild(statusEffectIcon);
		statusEffectIcon.width = app.screen.width/38;
		statusEffectIcon.height = statusEffectIcon.width;
		statusEffectIcon.anchor.set(0,0.5);
		statusContainer.addChild(textStatus);
		textStatus.x = statusEffectIcon.width + turnMargin;
		textStatus.anchor.set(0,0.5);
		statusContainerText.push(textStatus);
		// statusText.push(textStatus);
		textLevel++;

		var detailLevel = 1;
		this.object.statusArray.forEach((status,sIndex) =>{
			if(status[0] == statusNum){
				if(statusNum == 2){
					var buffStat = textStat(status[2]+1) + "  +" + status[3];
					console.log("	" + buffStat + " :: " + status[1]);
					let textBuff = new Text(buffStat + "  ::  " + status[1], {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xfefefe, align : 'left'});
					textBuff.x = statusMargin[0];
					textBuff.y = detailLevel*statusMargin[1];
					textBuff.anchor.set(0,0.5);
					statusContainer.addChild(textBuff);
					statusContainerText.push(textBuff);
					detailLevel++;
					textLevel++;
				}
				if(statusNum == 1 || statusNum == 3 || statusNum == 5 || statusNum == 9){
					let textDamageStatus = new Text(Math.floor(this.object.EHP/16) + " damage per turn  ::  " +  status[1], {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xfefefe, align : 'left'});
					textDamageStatus.x = statusMargin[0];
					textDamageStatus.y = detailLevel*statusMargin[1];
					textDamageStatus.anchor.set(0,0.5);
					console.log("	" + this.object.EHP/16 + " :: " + status[1]);
					statusContainer.addChild(textDamageStatus);
					statusContainerText.push(textDamageStatus);
					detailLevel++;
					textLevel++;
				}
				if(statusNum == 10){
					let textHealStatus = new Text("Heal " + Math.floor(this.object.EHP/16) + " per turn  ::  " + status[1], {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xfefefe, align : 'left'});
					textHealStatus.x = statusMargin[0];
					textHealStatus.y = detailLevel*statusMargin[1];
					textHealStatus.anchor.set(0,0.5);
					console.log("	Heal " + Math.floor(this.object.EHP/16) + " per turn :: " + status[1]);
					statusContainer.addChild(textHealStatus);
					statusContainerText.push(textHealStatus);
					detailLevel++;
					textLevel++;
				}
				if(statusNum == 4){
					var debuffStat = textStat(status[2]+1) + "  " + status[3];
					let textDebuff = new Text(debuffStat + "  ::  " + status[1], {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xfefefe, align : 'left'});
					textDebuff.x = statusMargin[0];
					textDebuff.y = detailLevel*statusMargin[1];
					textDebuff.anchor.set(0,0.5);
					statusContainer.addChild(textDebuff);
					statusContainerText.push(textDebuff);
					detailLevel++;
					textLevel++;
					console.log("	" + debuffStat + " :: " + status[1]);
				}
				if(statusNum == 6 || statusNum == 7 || statusNum == 8 || statusNum == 11 || statusNum == 12 || statusNum == 13){
					textStatus.text += "  ::  " + status[1];
					console.log("	:: " + status[1]);
				}
				if(statusNum == 14){
					let textCritical = new Text("-" + this.object.critDmg + " health points", {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xfefefe, align : 'left'});
					textCritical.x = statusMargin[0];
					textCritical.y = detailLevel*statusMargin[1];
					textCritical.anchor.set(0,0.5);
					statusContainer.addChild(textCritical);
					statusContainerText.push(textCritical);
					// statusText.push(textCritical);
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

		statusContainer.y = statusMargin[1]*(textLevel-detailLevel-statusYAdjust);
		statusText.push(statusContainer);
		creatureInfo.status.pages[creatureInfo.status.pages.length-1].addChild(statusContainer);
	});

	creatureInfo.status.arrowUp.interactive = false;
	creatureInfo.status.arrowUp.texture = resources.arrow_up_d.texture;

	creatureInfo.status.arrowDown.interactive = (creatureInfo.status.pages.length > 1 ? true : false);
	creatureInfo.status.arrowDown.texture = (creatureInfo.status.pages.length > 1 ? resources.arrow_down_n.texture : resources.arrow_down_d.texture);
	creatureInfo.statusIcon = statusIcon;
	creatureInfo.statusText = statusText;
	
	////////////////////
	//INFO SKILL
	////////////////////
	// var skillText = [];
	var infoSkillArray = [];
	var infoSkillWidth = app.screen.width/4.5;
	var infoSkillHeight = infoSkillWidth/4;
	this.object.skill.forEach((skill,skillIndex) =>{
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
		skillContainer.addChild(skillRect);
		skillContainer.rect = skillRect;

		skillSelectStroke.beginFill(0xFFD600).drawRect(0, 0, infoSkillWidth, infoSkillHeight);
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

		let skillName = new Text(skillList.data.skill[skill].name, {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : 0xfefefe, align : 'left'});
		skillName.anchor.set(0,0.5);
		skillName.x = infoSkillWidth/6;
		skillName.y = infoSkillHeight/3;
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
		const markerTargetSeveralArray = [];
		const markerTargetSeveralContainer = new PIXI.Container();
		skillContainer.addChild(markerContainer);
		// skillContainer.markerContainer = markerContainer;
		
		for(var i = 0; i < 4; i++){
			let posMarker = new PIXI.Graphics();
			var markerColour = (skillList.data.skill[skill].position[i] == 1 ? 0x66cc66 : 0x636363);
			posMarker.beginFill(markerColour).drawRect(0, -w, w, w);
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
				var markerColour = (skillList.data.skill[skill].position[i] == 1 ? 0x66cc66 : 0x636363);
				posMarker.beginFill(markerColour).drawRect(0, -w, w, w);
				posMarker.x = 25 * i;
				posMarker.pivot.set(0.5);
				posMarker.angle = 45;
				markerTargetArray.push(posMarker);
				markerTargetContainer.addChild(posMarker);
			}
		}else if(skillTargeting == 3){
			var columnDirection = (skillList.data.skill[skill]["column"][2] > 0 ? "+ " : "- "); 
			var columnColour = (skillList.data.skill[skill]["column"][3] > 0 ? 0x66cc66 : 0xFF6961); 
			var columnText = columnDirection + skillList.data.skill[skill]["column"][0];
			let targetText = new Text(columnText, {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : columnColour});
			targetText.anchor.set(0, 0.5);			
			targetText.x = (infoSkillWidth/6) + ((infoSkillWidth*2/3) * 0.569);
			targetText.y = infoSkillHeight*3/4;
			skillContainer.addChild(targetText);
			skillContainer.targetText = targetText;
		}else{
			for(var i = 0; i < 4; i++){
				let posMarker = new PIXI.Graphics();
				var markerColour = (skillList.data.skill[skill].target[i] == 1 ? 0xFF6961 : 0x636363);
				posMarker.beginFill(markerColour).drawRect(0, -w, w, w);
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

		var skillElement = new PIXI.Sprite(getTextureElement(skillList.data.skill[skill].element));
		skillElement.anchor.set(0, 0.5);
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

	creatureInfo.info_skill_text[1].text = (skillList.data.skill[this.object.skill[0]].power || "--");
	creatureInfo.info_skill_text[3].text = (skillList.data.skill[this.object.skill[0]].accuracy || "--");
	creatureInfo.info_skill_text[5].text = skillList.data.skill[this.object.skill[0]].type;
	creatureInfo.info_skill_text[7].text = skillList.data.skill[this.object.skill[0]].description;

	// creatureInfo.skillText = skillText;
	creatureInfo.infoSkillArray = infoSkillArray;

	////////////////////
	//INFO ITEM
	////////////////////
	var infoItemHeight = (app.screen.width/18)*2 + 10;
	var infoItemWidth = infoItemHeight/2;

	creatureInfo.infoItemArray[0].selected.visible = true;
	creatureInfo.infoItemArray[1].selected.visible = false;

	creatureInfo.infoItemBG.forEach((bgItem, bgIndex) =>{
		bgItem.width = infoItemWidth;
		bgItem.height = infoItemHeight;
		bgItem.x = (bgIndex%2 == 0 ? 0 : infoItemWidth + 10);
	});

	this.object.item.forEach((item,itemIndex) =>{
		creatureInfo.infoItemSprite[itemIndex].filters = 'null';
		creatureInfo.infoItemSprite[itemIndex].texture = resources[itemList.data.item[item].code].texture;
		creatureInfo.infoItemArray[itemIndex].itemID = item;
		creatureInfo.infoItemArray[itemIndex].interactive = true;
		if(itemList.data.item[item].size == 2){
			creatureInfo.infoItemSprite[itemIndex+1].texture = resources[itemList.data.item[item].code].texture;
			const filter1 = new PIXI.filters.ColorMatrixFilter();
			filter1.desaturate();
			creatureInfo.infoItemSprite[itemIndex+1].filters = [filter1];
		}
	});

	creatureInfo.infoItemArray.forEach((itemContainer, itemIndex)=>{
		itemContainer.rect.width = infoItemWidth;
		itemContainer.rect.height = infoItemHeight;
		itemContainer.selected.stroke.width = infoItemWidth;
		itemContainer.selected.stroke.height = infoItemHeight;
		itemContainer.selected.fill.width = infoItemWidth-skillSelectPadding*2;
		itemContainer.selected.fill.height = infoItemHeight-skillSelectPadding*2;
		itemContainer.selected.fill.x = skillSelectPadding;
		itemContainer.selected.fill.y = skillSelectPadding;
		itemContainer.x = (itemIndex%2 == 0 ? 0 : infoItemWidth + 10);
	});

	creatureInfo.infoItemSprite.forEach((spriteItem, spriteIndex)=>{
		spriteItem.width = infoItemWidth-skillSelectPadding*2;
		spriteItem.height = infoItemHeight-skillSelectPadding*2;
		spriteItem.x = skillSelectPadding;
		spriteItem.y = skillSelectPadding;
	});

	creatureInfo.info_item_text[1].text = itemList.data.item[this.object.item[0]].name;
	creatureInfo.info_item_text[3].text = itemList.data.item[this.object.item[0]].type;
	creatureInfo.info_item_text[5].text = itemList.data.item[this.object.item[0]].category;
	creatureInfo.info_item_text[7].text = itemList.data.item[this.object.item[0]].description;
	// creatureInfo.info_item_text[7].style.wordWrapWidth = app.screen.width/3.5;

	// creatureInfo.infoItemArray = infoItemArray;
	// creatureInfo.infoItemSprite = infoItemSprite;
	// creatureInfo.infoItemBG = infoItemBG;

	////////////////////
	//INFO STAT
	////////////////////

	// var textOrigin = [app.screen.width/2,app.screen.height/6];

	// creatureInfo.stat.x = textOrigin[0];
	// creatureInfo.stat.y = app.screen.height/8;

	creatureInfo.info_stat_text.forEach((text,textIndex) =>{
		text.style.fontSize = skillNameFontSize;
		if(textIndex < 2){
			text.x = ((textIndex%3)+1) * app.screen.width/13 + app.screen.width/50;
		}else if(textIndex == 2){
			text.x = ((textIndex%3)+1) * app.screen.width/11 + app.screen.width/50;
		}else if(textIndex%3 != 0){
			text.x = (textIndex%3) * app.screen.width/13 + app.screen.width/50;
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
		increase.x = 3 * app.screen.width/11 + app.screen.width/50;
		increase.y = (increaseIndex+1) * app.screen.height/12;

		creatureInfo.info_stat_maxed[increaseIndex].style.fontSize = skillNameFontSize;
		creatureInfo.info_stat_maxed[increaseIndex].x = 3 * app.screen.width/11 + app.screen.width/50 + increase.increaseText.x;
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
	creatureInfo.info_stat_text[1].text = "Assigned";
	
	creatureInfo.info_stat_text[2].text = "To assign: " + toAllocate;
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

	creatureInfo.info_skill_text[1].text = (skillList.data.skill[this.skillID].power || "--");
	creatureInfo.info_skill_text[3].text = (skillList.data.skill[this.skillID].accuracy || "--");
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
	// var column = false;
	// var several = false;
	// var displace = false;
	var heal = false;
	// var splash = false;
	var self = false;
	var team = false;
	skillList.data.skill[this.identifier[1]].tags.forEach(tagName =>{
	// 	if(tagName == "column")			column = true;
	// 		//Column tag breakdown = [Number of targets, Decay, Direction, Heal/Damage]						
		if(tagName == "heal")			heal = true;
	// 	if(tagName == "several")		several = true
	// 	if(tagName == "displace")		displace = true
	// 	if(tagName == "splash")			splash = true
		if(tagName == "self")			self = true
		if(tagName == "team")			team = true
	});
	validMoveObjectArray = [];
	validSkillObjectArray = getValidSkillTargets(this.identifier[1]);
	// validSkillObjectArray = [];
	// if(column){
	// 	var columnObjectArray = [];
	// 	//Ahead
	// 	if(skillList.data.skill[this.identifier[1]].column[2] > 0){
	// 		var switchSide = false;
	// 		//Get position to increment from
	// 		var temp = selectedVita.pos;			
	// 		for(var i = 0; i < skillList.data.skill[this.identifier[1]].column[0]; i++){
	// 			if(temp > 1 && !switchSide){
	// 				temp--;
	// 			}else if(temp == 1 && !switchSide){
	// 				switchSide = true;
	// 			}else{
	// 				temp++;
	// 			}
	// 			if(selectedVita.hero){
	// 				if(!switchSide){
	// 					heroArray.forEach(arrayCreature => {
	// 						if(arrayCreature.pos == temp)		columnObjectArray.push(arrayCreature)
	// 					});
	// 				}else{
	// 					enemyArray.forEach(arrayCreature => {
	// 						if(arrayCreature.pos == temp)		columnObjectArray.push(arrayCreature)
	// 					});
	// 				}
	// 			}else{
	// 				if(!switchSide){
	// 					enemyArray.forEach(arrayCreature => {
	// 						if(arrayCreature.pos == temp)		columnObjectArray.push(arrayCreature)
	// 					});
	// 				}else{
	// 					heroArray.forEach(arrayCreature => {
	// 						if(arrayCreature.pos == temp)		columnObjectArray.push(arrayCreature)
	// 					});
	// 				}
	// 			}
	// 		}
	// 	}
	// 	//Behind
	// 	else{
	// 		//Get position to increment from
	// 		var temp = selectedVita.pos + selectedVita.size - 1;

	// 		for(var i = 0; i < skillList.data.skill[this.identifier[1]].column[0]; i++){
	// 			temp++;
	// 			console.log("=================================" + temp);
	// 			if(selectedVita.hero){
	// 				heroArray.forEach(arrayCreature => {
	// 					if(arrayCreature.pos == temp)			columnObjectArray.push(arrayCreature)
	// 				});
	// 			}else{
	// 				enemyArray.forEach(arrayCreature => {
	// 					if(arrayCreature.pos == temp)			columnObjectArray.push(arrayCreature)
	// 				});
	// 			}
	// 		}			
	// 	}
	// 	validSkillObjectArray.push(columnObjectArray);
	// }

	// var targetEnemy = true;
	// if(selectedVita.hero && team)		targetEnemy = false;
	// if(!selectedVita.hero && !team)		targetEnemy = false;

	// if(targetEnemy){
	// 	enemyArray.forEach(arrayCreature =>{
	// 		var targeted = false;
	// 		skillList.data.skill[this.identifier[1]].target.forEach((skillTarget, skillTargetIndex)=> {
	// 			if(skillTarget == 1 && !targeted){
	// 				var posTracker = skillTargetIndex+1;
	// 				if(arrayCreature.size == 2){
	// 					var pos1 = arrayCreature.pos;
	// 					var pos2 = arrayCreature.pos + 1;
	// 					if(posTracker == pos1 || posTracker == pos2){
	// 						validSkillObjectArray.push([arrayCreature]);
	// 						targeted = true;
	// 					}
	// 				}else{
	// 					if(posTracker == arrayCreature.pos){
	// 						validSkillObjectArray.push([arrayCreature]);
	// 						targeted = true;
	// 					}
	// 				}
	// 			}
	// 		});
	// 	});
	// }else{
	// 	heroArray.forEach(arrayCreature =>{
	// 		var targeted = false;
	// 		skillList.data.skill[this.identifier[1]].target.forEach((skillTarget, skillTargetIndex)=> {
	// 			if(skillTarget == 1 && !targeted){
	// 				var posTracker = skillTargetIndex+1;
	// 				if(arrayCreature.size == 2){
	// 					var pos1 = arrayCreature.pos;
	// 					var pos2 = arrayCreature.pos + 1;
	// 					if(posTracker == pos1 || posTracker == pos2){
	// 						validSkillObjectArray.push([arrayCreature]);
	// 						targeted = true;
	// 					}
	// 				}else{
	// 					if(posTracker == arrayCreature.pos){
	// 						validSkillObjectArray.push([arrayCreature]);
	// 						targeted = true;
	// 					}
	// 				}
	// 			}
	// 		});
	// 	});
	// }
	// if(self){
	// 	validSkillObjectArray = [];
	// 	validSkillObjectArray.push([selectedVita]);
	// }
	// if(splash){
	// 	validSkillObjectArray = [];
	// 	if(selectedVita.hero){
	// 		enemyArray.forEach(arrayCreature =>{
	// 			var targeted = false;
	// 			skillList.data.skill[this.identifier[1]].target.forEach((skillTarget, skillTargetIndex)=> {
	// 				if(skillTarget == 1 && !targeted){
	// 					var posTracker = skillTargetIndex+1;
	// 					if(arrayCreature.size == 2){
	// 						var pos1 = arrayCreature.pos;
	// 						var pos2 = arrayCreature.pos + 1;
	// 						if(posTracker == pos1 || posTracker == pos2){
	// 							var arrayTarget = [];
	// 							arrayTarget.push(arrayCreature);
	// 							enemyArray.forEach(arrayCreature2 =>{
	// 								if(arrayCreature2.size == 2){
	// 									if(arrayCreature2.pos+1 == pos1-1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}else if(arrayCreature2.pos == pos2+1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}
	// 								}else if(arrayCreature2.size == 1){
	// 									if(arrayCreature2.pos == pos1-1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}else if(arrayCreature2.pos == pos2+1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}
	// 								}
	// 							});
	// 							validSkillObjectArray.push(arrayTarget);
	// 							targeted = true;
	// 						}
	// 					}else{
	// 						if(posTracker == arrayCreature.pos){
	// 							var arrayTarget = [];
	// 							arrayTarget.push(arrayCreature);
	// 							enemyArray.forEach(arrayCreature2 =>{
	// 								if(arrayCreature2.size == 2){
	// 									if(arrayCreature2.pos+1 == arrayCreature.pos-1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}else if(arrayCreature2.pos == arrayCreature.pos+1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}
	// 								}else if(arrayCreature2.size == 1){
	// 									if(arrayCreature2.pos == arrayCreature.pos-1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}else if(arrayCreature2.pos == arrayCreature.pos+1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}
	// 								}
	// 							});
	// 							validSkillObjectArray.push(arrayTarget);
	// 							targeted = true;
	// 						}
	// 					}
	// 				}
	// 			});
	// 		});
	// 	}else{
	// 		heroArray.forEach(arrayCreature =>{
	// 			var targeted = false;
	// 			skillList.data.skill[this.identifier[1]].target.forEach((skillTarget, skillTargetIndex)=> {
	// 				if(skillTarget == 1 && !targeted){
	// 					var posTracker = skillTargetIndex+1;
	// 					if(arrayCreature.size == 2){
	// 						var pos1 = arrayCreature.pos;
	// 						var pos2 = arrayCreature.pos + 1;
	// 						if(posTracker == pos1 || posTracker == pos2){
	// 							var arrayTarget = [];
	// 							arrayTarget.push(arrayCreature);
	// 							heroArray.forEach(arrayCreature2 =>{
	// 								if(arrayCreature2.size == 2){
	// 									if(arrayCreature2.pos+1 == pos1-1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}else if(arrayCreature2.pos == pos2+1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}
	// 								}else if(arrayCreature2.size == 1){
	// 									if(arrayCreature2.pos == pos1-1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}else if(arrayCreature2.pos == pos2+1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}
	// 								}
	// 							});
	// 							validSkillObjectArray.push(arrayTarget);
	// 							targeted = true;
	// 						}
	// 					}else{
	// 						if(posTracker == arrayCreature.pos){
	// 							var arrayTarget = [];
	// 							arrayTarget.push(arrayCreature);
	// 							heroArray.forEach(arrayCreature2 =>{
	// 								if(arrayCreature2.size == 2){
	// 									if(arrayCreature2.pos+1 == arrayCreature.pos-1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}else if(arrayCreature2.pos == arrayCreature.pos+1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}
	// 								}else if(arrayCreature2.size == 1){
	// 									if(arrayCreature2.pos == arrayCreature.pos-1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}else if(arrayCreature2.pos == arrayCreature.pos+1){
	// 										arrayTarget.push(arrayCreature2);
	// 									}
	// 								}
	// 							});
	// 							validSkillObjectArray.push(arrayTarget);
	// 							targeted = true;
	// 						}
	// 					}
	// 				}
	// 			});
	// 		});
	// 	}
	// }

	// // console.log(validSkillTargetArray);
	// //validSkillTargetArray [1, 2, 4] = [[1,2],[2,4]]
	// if(several){
	// 	var newTargets1 = [];
	// 	var newTargets2 = [];
	// 	var severalSplit = false;
	// 	skillList.data.skill[this.identifier[1]].several.forEach((spot, spotIndex) =>{
	// 		if(spot == 1){
	// 			var joinedSeveral = skillList.data.skill[this.identifier[1]].several.join();
	// 			if(spotIndex == 2 && joinedSeveral == "1,0,1")		severalSplit = true;
	// 			if(selectedVita.hero){
	// 				enemyArray.forEach(arrayCreature =>{
	// 					if(arrayCreature.size == 1){
	// 						if(arrayCreature.pos == spotIndex+1 || arrayCreature.pos == spotIndex+2){
	// 							if(!severalSplit)	newTargets1.push(arrayCreature);
	// 							else 				newTargets2.push(arrayCreature);
	// 						}
	// 					}else if(arrayCreature.size == 2){
	// 						var pos1 = arrayCreature.pos;
	// 						var pos2 = arrayCreature.pos + 1;
	// 						if(pos1 == spotIndex+1 || pos2 == spotIndex+1 || pos1 == spotIndex+2 || pos2 == spotIndex+2){
	// 							if(!severalSplit)	newTargets1.push(arrayCreature);
	// 							else 				newTargets2.push(arrayCreature);
	// 						}
	// 					}
	// 				});
	// 			}else{
	// 				heroArray.forEach(arrayCreature =>{
	// 					if(arrayCreature.size == 1){
	// 						if(arrayCreature.pos == spotIndex+1 || arrayCreature.pos == spotIndex+2){
	// 							if(!severalSplit)	newTargets1.push(arrayCreature);
	// 							else 				newTargets2.push(arrayCreature);
	// 						}
	// 					}else if(arrayCreature.size == 2){
	// 						var pos1 = arrayCreature.pos;
	// 						var pos2 = arrayCreature.pos + 1;
	// 						if(pos1 == spotIndex+1 || pos2 == spotIndex+1 || pos1 == spotIndex+2 || pos2 == spotIndex+2){
	// 							if(!severalSplit)	newTargets1.push(arrayCreature);
	// 							else 				newTargets2.push(arrayCreature);	
	// 						}
	// 					}
	// 				});
	// 			}
	// 		}
	// 	});
	// 	if(!severalSplit)	validSkillObjectArray = [newTargets1];
	// 	else 				validSkillObjectArray = [newTargets1, newTargets2];	
	// }

	// console.log("validSkillObjectArray: " + validSkillObjectArray);

	console.log("###########################################");

	validSkillObjectArray.forEach(object1=>{
		console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
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

function getValidSkillTargets(skillID){
	var validSkillObjectArray = [];
	var column = false;
	var several = false;
	var displace = false;
	var heal = false;
	var splash = false;
	var self = false;
	var team = false;
	skillList.data.skill[skillID].tags.forEach(tagName =>{
		if(tagName == "column")			column = true;
			//Column tag breakdown = [Number of targets, Decay, Direction, Heal/Damage]						
		if(tagName == "heal")			heal = true;
		if(tagName == "several")		several = true
		if(tagName == "displace")		displace = true
		if(tagName == "splash")			splash = true
		if(tagName == "self")			self = true
		if(tagName == "team")			team = true
	});

	// validSkillObjectArray = [];
	if(column){
		var columnObjectArray = [];
		//Ahead
		if(skillList.data.skill[skillID].column[2] > 0){
			var switchSide = false;
			//Get position to increment from
			var temp = selectedVita.pos;			
			for(var i = 0; i < skillList.data.skill[skillID].column[0]; i++){
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

			for(var i = 0; i < skillList.data.skill[skillID].column[0]; i++){
				temp++;
				// console.log("=================================" + temp);
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

	var targetEnemy = true;
	if(selectedVita.hero && team)		targetEnemy = false;
	if(!selectedVita.hero && !team)		targetEnemy = false;

	if(targetEnemy){
		enemyArray.forEach(arrayCreature =>{
			var targeted = false;
			skillList.data.skill[skillID].target.forEach((skillTarget, skillTargetIndex)=> {
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
	}else{
		heroArray.forEach(arrayCreature =>{
			var targeted = false;
			skillList.data.skill[skillID].target.forEach((skillTarget, skillTargetIndex)=> {
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
				skillList.data.skill[skillID].target.forEach((skillTarget, skillTargetIndex)=> {
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
				skillList.data.skill[skillID].target.forEach((skillTarget, skillTargetIndex)=> {
					if(skillTarget == 1 && !targeted){
						var posTracker = skillTargetIndex+1;
						if(arrayCreature.size == 2){
							var pos1 = arrayCreature.pos;
							var pos2 = arrayCreature.pos + 1;
							if(posTracker == pos1 || posTracker == pos2){
								var arrayTarget = [];
								arrayTarget.push(arrayCreature);
								heroArray.forEach(arrayCreature2 =>{
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
								heroArray.forEach(arrayCreature2 =>{
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
		}
	}

	// console.log(validSkillTargetArray);
	//validSkillTargetArray [1, 2, 4] = [[1,2],[2,4]]
	if(several){
		var newTargets1 = [];
		var newTargets2 = [];
		var severalSplit = false;
		skillList.data.skill[skillID].several.forEach((spot, spotIndex) =>{
			if(spot == 1){
				var joinedSeveral = skillList.data.skill[skillID].several.join();
				if(spotIndex == 2 && joinedSeveral == "1,0,1")		severalSplit = true;
				if(selectedVita.hero){
					enemyArray.forEach(arrayCreature =>{
						if(arrayCreature.size == 1){
							if(arrayCreature.pos == spotIndex+1 || arrayCreature.pos == spotIndex+2){
								if(!severalSplit)	newTargets1.push(arrayCreature);
								else 				newTargets2.push(arrayCreature);
							}
						}else if(arrayCreature.size == 2){
							var pos1 = arrayCreature.pos;
							var pos2 = arrayCreature.pos + 1;
							if(pos1 == spotIndex+1 || pos2 == spotIndex+1 || pos1 == spotIndex+2 || pos2 == spotIndex+2){
								if(!severalSplit)	newTargets1.push(arrayCreature);
								else 				newTargets2.push(arrayCreature);
							}
						}
					});
				}else{
					heroArray.forEach(arrayCreature =>{
						if(arrayCreature.size == 1){
							if(arrayCreature.pos == spotIndex+1 || arrayCreature.pos == spotIndex+2){
								if(!severalSplit)	newTargets1.push(arrayCreature);
								else 				newTargets2.push(arrayCreature);
							}
						}else if(arrayCreature.size == 2){
							var pos1 = arrayCreature.pos;
							var pos2 = arrayCreature.pos + 1;
							if(pos1 == spotIndex+1 || pos2 == spotIndex+1 || pos1 == spotIndex+2 || pos2 == spotIndex+2){
								if(!severalSplit)	newTargets1.push(arrayCreature);
								else 				newTargets2.push(arrayCreature);	
							}
						}
					});
				}
			}
		});
		if(!severalSplit)	validSkillObjectArray = [newTargets1];
		else 				validSkillObjectArray = [newTargets1, newTargets2];	
	}

	return validSkillObjectArray;
}

function onCreatureDown(){
	console.log("\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
	console.log("================================  DAMAGE  CALCULATIONS  ================================");
	console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n\n");
	console.log("Clicked target: " + this.object.name);
	var targetedVitaIndex = 0;
	var animateBattle = false;
	// var animatePopup = false;
	var animateMove = false;
	var animateStatus = false;
	var animateHealth = false;
	var correctTarget = false;
	var dmgMod = [];
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
		var tagColumn = false;
		skillList.data.skill[selectedSkill].tags.forEach(tagName =>{
			if(tagName == "splash")			tagSplash = true;
			if(tagName == "displace")		tagDisplace = true;
			if(tagName == "status")			tagStatus = true;
			if(tagName == "statchange")		tagStatus = true;
			if(tagName == "hazard")			tagHazard = true;
			if(tagName == "column")			tagColumn = true;
		});
		validSkillObjectArray.forEach((targeted, targetedIndex) => {
			if(tagSplash){
				if(this.object == targeted[0]){
					// targeted[0].dmgContainer.skillFX.texture = resources['skill_storm_lightningstrike'].texture;
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
			// animatePopup = true;
			var splashTarget = 0;
			console.log(selectedVita.name + " uses " + skillList.data.skill[selectedSkill].name + " on:");
			validSkillObjectArray[targetedVitaIndex].forEach((arrayElement, arrayIndex) =>{
				console.log(arrayElement.name + "\n");
				arrayElement.dmgContainer.skillFX.scale.set(1,1);
				if(tagSplash){
					if(this.object == arrayElement){
						splashTarget = arrayIndex;
						//set to skill fx
						arrayElement.dmgContainer.skillFX.texture = resources['skill_storm_lightningstrike'].texture;
						dmgMod.push(1);
					}else{
						arrayElement.dmgContainer.skillFX.texture = resources['blank'].texture;
						dmgMod.push(skillList.data.skill[selectedSkill].splash);
					}
				}else if(tagColumn){
					arrayElement.dmgContainer.skillFX.texture = resources['skill_water_watergeyser'].texture;
					//adjust texture to fit decay
					dmgMod.push(skillList.data.skill[selectedSkill].column[1]**arrayIndex);
					arrayElement.dmgContainer.skillFX.scale.set(1,skillList.data.skill[selectedSkill].column[1]**arrayIndex);
				}else{
					//set to skill fx
					arrayElement.dmgContainer.skillFX.texture = resources['skill_fire_flareup'].texture;
					dmgMod.push(1);
				}
			});
			// console.log(splashTarget);
			// console.log("Targets: " + validSkillObjectArray[targetedVitaIndex]);
			// console.log("DmgMod: " + dmgMod);

			//reverse column order if forward for proper animation sequence
			if(tagColumn){
				if(skillList.data.skill[selectedSkill].column[2] == 1){
					// dmgMod.reverse();
					var tempArray1 = [];
					var tempArray2 = [];
					validSkillObjectArray[targetedVitaIndex].forEach((creatureObject, creatureIndex)=>{
						if(creatureObject.hero == selectedVita.hero){
							tempArray1.push(dmgMod[creatureIndex]);
							tempArray2.push(creatureObject);
						}
					});
					tempArray2.forEach(creatureObject=>{
						validSkillObjectArray[targetedVitaIndex].shift();
						dmgMod.shift();
					});

					tempArray2.forEach((creatureObject, creatureIndex)=>{
						validSkillObjectArray[targetedVitaIndex].unshift(creatureObject);
						dmgMod.unshift(tempArray1[creatureIndex]);
					});					
					// validSkillObjectArray[targetedVitaIndex].reverse();
				}
			}

			// console.log("Targets: " + validSkillObjectArray[targetedVitaIndex]);
			// console.log("DmgMod: " + dmgMod);

			//if splash, calculate hit only if main is hit

			var hitArray = calculateHit(selectedVita, validSkillObjectArray[targetedVitaIndex]);
			console.log("Hit/miss: " + hitArray);
			if(tagSplash){
				if(!hitArray[splashTarget]){
					console.log("Miss main target");
					hitArray.forEach((hitValue,hitIndex) =>{
						hitArray[hitIndex] = false;
					});
				}
			}

			console.log("Hit/miss: " + hitArray);
			hitArray.forEach(hitValue =>{
				if(hitValue && tagDisplace)		animateMove = true;
				if(hitValue && tagStatus)		animateStatus = true;
			});
			var dmgArray = calculateDamage(selectedVita, validSkillObjectArray[targetedVitaIndex], hitArray, dmgMod);
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
		animationSequence(selectedVita, validSkillObjectArray[targetedVitaIndex], animateBattle, animateStatus, animateHealth, animateMove);
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
		animationSequence(selectedVita, [selectedVita], animateBattle, animateStatus, animateHealth, animateMove);
	}else{
		console.log("Action not selected");	
	}
	
	console.log("animateBattle: " + animateBattle + "\nanimateMove: " + animateMove + "\nanimateStatus: " + animateStatus + "\nanimateHealth: " + animateHealth);
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

		if(skillList.data.skill[selectedSkill].accuracy == 0){
			var hitChance = 1;
		}else{
			var hitChance = ((skillList.data.skill[selectedSkill].accuracy/100) - (defenderDodge/200)) * hitMod;
		}
		var hitRoll = Math.random();

		console.log("Name: " + targeted.name + "\nAccMod: " + attackerAccMod + " Dodge: " + defenderDodge + " DodgeMod: " + defenderDodgeMod + " Diff: " + accDifference + "\nHitMod: " + hitMod + " HitChance: " + hitChance + " HitRoll: " + hitRoll);

		hitArray.push(hitRoll < hitChance ? true : false);
	});
	return hitArray;
}

function calculateDamage(attacker, defender, hitArray, dmgMod){
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
			// var randomSkill = Math.floor(Math.random() * 3) + 1;
			// switch(randomSkill){
			// 	case 1:
			// 		targeted.dmgContainer.skillFX.texture = resources['skill_wind_aeropush'].texture;
			// 		break;
			// 	case 2:
			// 		targeted.dmgContainer.skillFX.texture = resources['skill_fire_flareup'].texture;
			// 		break;
			// 	case 3:
			// 		targeted.dmgContainer.skillFX.texture = resources['skill_storm_lightningstrike'].texture;
			// 		break;
			// 	default:
			// 		targeted.dmgContainer.skillFX.texture = resources['skill_fire_flareup'].texture;
			// 		break;
			// }
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
							let newStatusEffect = new PIXI.Sprite(getTextureStatus(newStatus[0]));
							// let newStatusEffect = statusEffectSprite(newStatus[0]);				
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
							let newStatusEffect = new PIXI.Sprite(getTextureStatus(newStatus[0]));
							// let newStatusEffect = statusEffectSprite(newStatus[0]);
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

			skillPower = skillList.data.skill[selectedSkill].power * dmgMod[targetedIndex];
			var damageCalc = Math.round((((((2*level/5) + 2) * skillPower * (attack/defense))/150) + 2)*effectiveness*SEAB);
			console.log("Name: " + targeted.name + "\nLevel: " + level + " SkillPower: " + skillPower + " Attack: " + attack + " Defense: " + defense + " Effectiveness: " + effectiveness + " SEAB: " + SEAB);
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
						let newStatusEffect = new PIXI.Sprite(getTextureStatus(statusElement[0]));
						// let newStatusEffect = statusEffectSprite(statusElement[0]);
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

function animationSequence(attacker, defender, animateBattle, animateStatus, animateHealth, animateMove){
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
		//If physical or special
		if(skillList.data.skill[selectedSkill].type == "Physical"){
			attacker.action.pReadyTween.play(0);
		}else if(skillList.data.skill[selectedSkill].type == "Special"){
			attacker.action.sReadyTween.play(0);
		}else{
			attacker.action.sReadyTween.play(0);
		}
		
		
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
			attackerReadyOnComplete(attacker,defender,animateMove);		
			attacker.action.pAtkTween.play(0);
			attacker.action.pAtkTween.eventCallback("onComplete", function(){
				attackerAttackOnComplete(attacker, defender, animateStatus, animateHealth, animateArray);
				TweenMax.fromTo(blurFilter1, 0.1, {blur:10}, {blur:0});
			});
		});
		attacker.action.sReadyTween.eventCallback("onComplete", function(){
			attackerReadyOnComplete(attacker,defender,animateMove);
			attacker.action.sAtkTween.play(0);
			attacker.action.sAtkTween.eventCallback("onComplete", function(){
				attackerAttackOnComplete(attacker, defender, animateStatus, animateHealth, animateArray);
				TweenMax.fromTo(blurFilter1, 0.1, {blur:10}, {blur:0});
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


function attackerReadyOnComplete(attacker,defender,animateMove){
	TweenMax.fromTo(stageContainer, 0.05, {x:-10}, {x:10, yoyo:true, ease:Sine.easeOut, repeat:10, onComplete:function(){
		TweenMax.to(stageContainer,0.5, {x:0,ease:Elastic.easeOut})
	}});
	defender.forEach(arrayCreature=>{
		if(arrayCreature.newHP){
			arrayCreature.action.dDmg.visible = true;
			arrayCreature.dmgContainer.skillFX.visible = true;
			arrayCreature.action.dDmgTween.play(0);
		}else{
			arrayCreature.action.dMiss.visible = true;
			arrayCreature.action.dMissTween.play(0);
		}
		arrayCreature.dmgContainer.dmgPopup.tween.play(0);
	});
	if(animateMove){
		var movedCreatureArray = moveCreature(defender[0], defender[0].newMove);
		movedCreatureArray.forEach(creatureObject=>{
			creatureObject.moveTween.play(0);
		});
	}
}

function attackerAttackOnComplete(attacker, defender, animateStatus, animateHealth, animateArray){
	animateArray.forEach(item =>{
		if(item.hero){
			item.action.x = -spriteResizeXPosition[item.pos-1];
			item.dmgContainer.x = heroHealthXPosition[item.pos-1+(item.size-1)];
		}else{
			item.action.x = spriteResizeXPosition[item.pos-1];
			item.dmgContainer.x = spriteResizeXPosition[item.pos-1];
		}
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

function updateDmgStatus(container, newStatus, newStatusIndex){
	container.dmgStatus.statusImageArray[newStatusIndex].texture = getTextureStatus(newStatus);
	container.dmgStatus.statusTextArray[newStatusIndex].text = getTextStatus(newStatus)
	switch(newStatus){
		case 1:
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#E3C2C2';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#910A0A';
			break;
		case 2:
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#FFE7C1';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#FF9F06';
			break;
		case 3:
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#ECCFC6';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#B23F1B';
			break;
		case 4:
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#C1D9FF';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#0666FF';
			break;
		case 5:
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#CCCCCC';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#353535';
			break;
		case 6:
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#BFE9F0';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#00A8C4';
			break;
		case 7:
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#E8C2EC';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#A50BB2';
			break;
		case 8:
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#EFDFBF';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#C18100';
			break;
		case 9:
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#DEC2ED';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#7C0BB7';
			break;
		case 10:
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#C6F1C5';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#1BC617';
			break;
		case 11:
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#CBE1D9';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#2E8966';
			break;
		case 12:
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#DACDEE';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#6A37BC';
			break;
		case 13:
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#F9EFD2';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#E6C04B';
			break;
		case 14:
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#FFDEBF';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#FF7B00';
			break;
		default:
			container.dmgStatus.statusTextArray[newStatusIndex].style.fill = '#FFE7C1';
			container.dmgStatus.statusTextArray[newStatusIndex].style.stroke = '#FF9F06';
	}
}

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
		var speedMod = (arrayCreature.statMod[6]>0 ? ((Math.abs(arrayCreature.statMod[6])+2)/2) : (2/(Math.abs(arrayCreature.statMod[6])+2)));
		var calcSpeed = (arrayCreature.spd/5) * speedMod + (Math.floor(Math.random() * 7) + 1);
		console.log(arrayCreatureIndex + ": " + arrayCreature.name + " Pre-Speed: " + arrayCreature.spd + "| CalcSpeed: " + calcSpeed);
		arrayCalcSpeedSorted.push(calcSpeed);
		arrayCalcSpeedPositions.push(calcSpeed);
	});
	enemyArray.forEach((arrayCreature,arrayCreatureIndex) => {
		var speedMod = (arrayCreature.statMod[6]>0 ? ((Math.abs(arrayCreature.statMod[6])+2)/2) : (2/(Math.abs(arrayCreature.statMod[6])+2)));
		var calcSpeed = (arrayCreature.spd/5) * speedMod + (Math.floor(Math.random() * 7) + 1);
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
		// console.log(dmgStatusArray);
		selectedVita.dmgContainer.dmgPopup.dmgEffective.visible = false;
		dmgStatusArray.forEach((dmgStatus, dmgStatusIndex) =>{
			if(dmgStatus[0] == 11){
				dmgTotal += dmgStatus[1];
			}else{
				var statusDamage = Math.floor(selectedVita.EHP/16);
				dmgTotal += statusDamage;
			}
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

	skillContainerArray.forEach(skillContainer =>{
		skillContainer.visible = false;
	});
	
	newSkills.forEach((skillID, skillContainerIndex) => {
		skillContainerArray[skillContainerIndex].visible = true;
		skillContainerArray[skillContainerIndex].skillElement.texture = getTextureElement(skillList.data.skill[skillID].element);
		
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
				var columnDirection = (skillList.data.skill[skillID][tagName][2] > 0 ? "+ " : "- "); 
				skillContainerArray[skillContainerIndex].targetText.style.fill = (skillList.data.skill[skillID][tagName][3] > 0 ? '0x66cc66' : '0xFF6961'); 
				// var columnText = columnDirection + skillList.data.skill[skill]["column"][0];
				// let targetText = new Text(columnText, {fontFamily : styleFontFamily, fontSize: skillNameFontSize, fill : columnColour});
				skillContainerArray[skillContainerIndex].targetText.text = columnDirection + skillList.data.skill[skillID][tagName][0]
			}else if(tagName == "several"){
				skillContainerArray[skillContainerIndex].markerTargetSeveralContainer.visible = true;
				//Show target dashes if 1
				skillList.data.skill[skillID][tagName].forEach((dash, dashIndex) => {
					skillContainerArray[skillContainerIndex].markerTargetSeveralArray[dashIndex].visible = (dash == 1 ? true : false);
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
					skillContainerArray[skillContainerIndex].markerTargetTeamArray[targetIndex].visible = (skillTarget == 1 ? true: false);
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
				skillContainerArray[skillContainerIndex].markerTargetArray[targetIndex].visible = (skillTarget == 1 ? true : false);
			});
		}
	});	

	if(!selectedVita.hero){
		selectedVita.skill.forEach(skillID =>{
			var column = false;
			var several = false;
			var displace = false;
			var heal = false;
			var splash = false;
			var self = false;
			var team = false;
			skillList.data.skill[skillID].tags.forEach(tagName =>{
				if(tagName == "column")			column = true;
					//Column tag breakdown = [Number of targets, Decay, Direction, Heal/Damage]						
				if(tagName == "heal")			heal = true;
				if(tagName == "several")		several = true
				if(tagName == "displace")		displace = true
				if(tagName == "splash")			splash = true
				if(tagName == "self")			self = true
				if(tagName == "team")			team = true
			});

			var skillCalculatedWeight = [];
			// console.log(selectedVita.pos-1);
			var validPos = 0;
			for(var i = 0; i < selectedVita.size; i++){
				if(skillList.data.skill[skillID].position[Math.abs(selectedVita.pos - 4+i)] > 0){
					validPos = skillList.data.skill[skillID].position[Math.abs(selectedVita.pos - 4+i)];
				}
			}

			var SEAB = 1;
			selectedVita.element.forEach(element =>{
				if(element == skillList.data.skill[skillID].element)		SEAB = 1.5;
			});
			
			var validTargets = getValidSkillTargets(skillID);
			validTargets.forEach(list=>{
				var damage = 0;
				var weights = [];
				list.forEach((creatureObject, creatureIndex)=>{
					var weight = [];
					var damageCalc = 1;
					var effectiveness = 1;
					var splashMod = 1;
					var columnMod = 1;
					if(column){
						columnMod = skillList.data.skill[skillID].column[1]**creatureIndex;
					}
					if(splash && creatureIndex > 0){
						splashMod = skillList.data.skill[skillID].splash;
					}
					creatureObject.element.forEach(element =>{
						var element1 = skillList.data.skill[skillID].element-1;
						var element2 = element-1;
						effectiveness *= elementList.data.element[element1]["effect"][element2];
					});

					weight.push(skillList.data.skill[skillID].power);
					var skillAccuracy = (skillList.data.skill[skillID].accuracy != 0 ? skillList.data.skill[skillID].accuracy/100: 1);
					weight.push(skillAccuracy);
					weight.push(effectiveness);
					weight.push(SEAB);
					weight.push(splashMod);
					weight.push(columnMod);

					damageCalc *= skillList.data.skill[skillID].power * effectiveness * skillAccuracy * SEAB * splashMod * columnMod;
					if(skillList.data.skill[skillID].type == "Physical"){
						weight.push(selectedVita.statCalc[2]/10);
						damageCalc *= selectedVita.statCalc[2]/10;
					}else if(skillList.data.skill[skillID].type == "Special"){
						weight.push(selectedVita.statCalc[4]/10);
						damageCalc *= selectedVita.statCalc[4]/10;
					}
					damage+= damageCalc;
					weights.push(weight);
				// targetArray.push(validPos);
				// targetArray.push(creatureObject.name);
					
				});
				var targetArray = {
					canHit: validPos,
					totalDamage: damage,
					totalWeight: weights
				};
				skillCalculatedWeight.push(targetArray);
			});

			// heroArray.forEach(creatureObject =>{
			// 	var targetArray = [];
			// 	targetArray.push(validPos);
			// 	targetArray.push(skillList.data.skill[skillID].target[creatureObject.pos-1]);
			// 	skillCalculatedWeight.push(targetArray);
			// });

			// console.log(targetArray);
			// console.log(skillList.data.skill[skillID].accuracy);
			// console.log(skillList.data.skill[skillID].power);
			console.log(skillCalculatedWeight);
		});
	}
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