/*======================================================================================
*
*FileName:        pixi.js
*Project:         Project Elements
*Version:         1.08
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
		"img/actionLines.png",
		"img/bg3.png",
		"js/creatures.json",
		"js/skills.json",
		"js/elements.json",

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
		{name:'toad1_skeleton', url:'img/toad1_ske.json'},
		{name:'toad1_texture_json', url:'img/toad1_tex.json'},
		{name:'toad1_texture_png', url:'img/toad1_tex.png'},
		{name:'toad3_skeleton', url:'img/toad3_ske.json'},
		{name:'toad3_texture_json', url:'img/toad3_tex.json'},
		{name:'toad3_texture_png', url:'img/toad3_tex.png'},
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
*	Declare  variables
*/
const skillsList = resources["js/skills.json"];
const elementList = resources["js/elements.json"];

let state, onScreenStats, consoleScreen;

var styleFontFamily = 'Arvo';

const spriteHolder = new PIXI.Container();		
	const heroSprites = new PIXI.Container();			//Hero stage
	const enemySprites = new PIXI.Container();			//Enemy stage
const interfaceHeroHealth = new PIXI.Container();				//Hero HP
const interfaceEnemyHealth = new PIXI.Container();				//Enemy HP
const interfaceHeroFloatingInfo = new PIXI.Container();				//Hero damage UI
const interfaceEnemyFloatingInfo = new PIXI.Container();				//Enemy damage UI
const interfaceAdditional = new PIXI.Container();	//Additional actions
const interfaceHolder = new PIXI.Container();

// const attackContainer = new PIXI.Container();
// const defendContainer = new PIXI.Container();

const actionContainer = new PIXI.Container();
const stageContainer = new PIXI.Container();

// const rectTemp = new PIXI.Graphics();

// const tempContainer = new PIXI.Container();
// const tempContainer2 = new PIXI.Container();
// var actionTween1;

// const rectHero = new PIXI.Graphics();
// const rectEnemy = new PIXI.Graphics();
var backgroundImage, actionLines, actionBlack;
var btnAdditional, btnSettings, textureAdditional, textureSettings;
var textureAdditionalCancel, textureAdditionalMove, textureAdditionalItem, textureAdditionalSkip;
var btnAdditionalCancel, btnAdditionalMove, btnAdditionalItem, btnAdditionalSkip;

//Interface spacing variables
var healthSpacing = 20;
var margin = 50;
var skillSpacer = 10;
var targetTextFontSize = 26;
var skillNameFontSize = 28;
var resizeWidth = 0;

//Selected element tracker
var selectedVita = 0;
var selectedVita2;
var selectedSkill = -1;

//Animation speed
var anim1 = 0.5;
var anim2 = 1.5;

// var db = firebase.firestore();

const factory = dragonBones.PixiFactory.factory;

const heroArray = [];					//Array of hero vitas
const enemyArray = [];					//Array of enemy vitas
const additionalArray = [];				//Array of additional menu buttons
var heroOrder = [];						//Track hero positioning
var enemyOrder = [];					//Track enemy positioning

// var heroResizePosition = [];
// var enemyResizePosition = [];
var spriteResizeXPosition = [];
var heroHealthXPosition = [];

var turnArray = [];						//Array for turn order
var turnArray2 = [];					//Array for turn order
var validSkillTargetArray = [];			//Array of valid skill targets
var validMoveTargetArray = [];			//Array of vaild move targets

var validSkillObjectArray = [];			//Array of valid skill targets
var validMoveObjectArray = [];			//Array of vaild move targets

// const heroSpriteArray = [];				//Array of hero sprite containers
// const enemySpriteArray = [];			//Array of enemy sprite containers
const skillContainerArray = [];			//Array of skill containers

// const actionHero = [];
// const actionEnemy = [];
// const heroActionContainerArray = [];
// const enemyActionContainerArray = [];
// const attackArray = [];
// const defendArray = [];

const hero = [];
hero[0] = {
	id: 6, level: 50, 
	skill1: 4, skill2: 1, skill3: 2, skill4: 2,
	statDODG: 20, statHP: 0, statPATK: 10, statPDEF: 0, statSATK: 0, statSDEF: 0, statSPD: 0,
	hero: true
};
hero[1] = {
	id: 11, level: 47, 
	skill1: 4, skill2: 10, skill3: 11, skill4: 2,
	statDODG: 95, statHP: 0, statPATK: 0, statPDEF: 3, statSATK: 0, statSDEF: 20, statSPD: 120,
	hero: true
};
hero[2] = {
	id: 2, level: 45, 
	skill1: 4, skill2: 10, skill3: 11, skill4: 2,
	statDODG: 20, statHP: 35, statPATK: 40, statPDEF: 10, statSATK: 0, statSDEF: 3, statSPD: 47,
	hero: true
};
// hero[3] = {
// 	id: 11, level: 47, 
// 	skill1: 4, skill2: 0, skill3: 6, skill4: 1,
// 	statDODG: 20, statHP: 35, statPATK: 0, statPDEF: 3, statSATK: 40, statSDEF: 20, statSPD: 19
// };

const enemy = [];
enemy[0] = {
	id: 9, level: 49, 
	skill1: 4, skill2: 6, skill3: 1, skill4: 2,
	statDODG: 70, statHP: 20, statPATK: 0, statPDEF: 40, statSATK: 60, statSDEF: 0, statSPD: 0,
	hero: false
};
enemy[1] = {
	id: 8, level: 46, 
	skill1: 4, skill2: 10, skill3: 11, skill4: 2,
	statDODG: 10, statHP: 0, statPATK: 0, statPDEF: 0, statSATK: 0, statSDEF: 0, statSPD: 0,
	hero: false
};
enemy[2] = {
	id: 12, level: 45, 
	skill1: 4, skill2: 1, skill3: 5, skill4: 2,
	statDODG: 0, statHP: 0, statPATK: 0, statPDEF: 0, statSATK: 40, statSDEF: 0, statSPD: 0,
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
	
	heroSprites.x = app.screen.width/2;
	heroSprites.y = app.screen.height/2;
	
	enemySprites.x = app.screen.width/2;
	enemySprites.y = app.screen.height/2;

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
			], skills:[
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

	// enemySprites.scale.set(-1,1);
	
	interfaceHeroHealth.x = app.screen.width/2;
	interfaceHeroHealth.y = 10;
	interfaceEnemyHealth.x = app.screen.width/2;
	interfaceEnemyHealth.y = 10;

	interfaceHolder.addChild(interfaceHeroHealth);
	interfaceHolder.addChild(interfaceEnemyHealth);

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
		
		//Skill position and target markers
		const markerContainer = new PIXI.Container();
		var w = 12.728;	
		const markerPositionArray = [];
		const markerPositionContainer = new PIXI.Container();
		const markerTargetArray = [];
		const markerTargetContainer = new PIXI.Container();
		
		for (var j = 0; j < 3; j++){
			for (var k = 0; k < 4; k++){
				let defaultMarker = new PIXI.Graphics();
				defaultMarker.beginFill(0x636363).drawRect(0, -w, w, w);
				defaultMarker.x = 25 * k;
				defaultMarker.pivot.set(0.5);
				defaultMarker.angle = 45;

				let posMarker = new PIXI.Graphics();
				if(j == 0)			posMarker.beginFill(0x66cc66).drawRect(0, -w, w, w);
				else if(j == 1)		posMarker.beginFill(0xFF6961).drawRect(0, -w, w, w);

				posMarker.x = 25 * k;
				posMarker.pivot.set(0.5);
				posMarker.angle = 45;

				if(j == 0){
					markerPositionArray.push(posMarker);
					markerPositionContainer.addChild(defaultMarker);
					markerPositionContainer.addChild(posMarker);
				}else if(j == 1){
					markerTargetArray.push(posMarker);
					markerTargetContainer.addChild(defaultMarker);
					markerTargetContainer.addChild(posMarker);
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
		markerSpacerContainer.x = 123;

		markerTargetSeveralContainer.x = 135;		

		markerContainer.addChild(markerSpacerContainer);
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
        .on('pointerdown', onButtonDown);
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

	app.stage.addChild(stageContainer);
	app.stage.addChild(interfaceHeroFloatingInfo);				//Hero damage UI
	app.stage.addChild(interfaceEnemyFloatingInfo);				//Enemy damage UI

	app.stage.addChild(interfaceHolder);
	
	app.stage.addChild(onScreenStats);	
	app.stage.addChild(consoleScreen);

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

let phase = 0.0;
function play(delta){
	phase += delta / 25.0;
	onScreenStats.text = "ResolutionTest5: " + app.renderer.resolution +
		"\nInner Width: " + window.innerWidth + 
		"\nInner Height: " + window.innerHeight +
		"\nAppScreen Width: " + app.screen.width + 
		"\nAppScreen Height: ► ◄" + app.screen.height +
		"\nScale: " + (Math.cos(phase) + 1) * 10 + 1;

	heroArray.forEach(object => {
		if(object.healthBar.select.animate == true){
			object.healthBar.select.width = object.healthBar.select.indicatorBar1.width + (Math.cos(phase) + 1) * 10 + 1;
		}
	});
	enemyArray.forEach(object => {
		if(object.healthBar.select.animate == true){
			object.healthBar.select.width = object.healthBar.select.indicatorBar1.width + (Math.cos(phase) + 1) * 10 + 1;
		}
	});
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

	var sprite_d_ready = new PIXI.Sprite(resources[item.code + '_d_ready'].texture);
	sprite_d_ready.anchor.set(1);
	sprite_d_ready.alpha = 0;
	creatureAction.addChild(sprite_d_ready);

	var sprite_d_miss = new PIXI.Sprite(resources[item.code + '_d_miss'].texture);
	sprite_d_miss.anchor.set(1);
	sprite_d_miss.visible = false;
	creatureAction.addChild(sprite_d_miss);

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

	pAtkTween = new TimelineMax({paused: true});
	pAtkTween.to(sprite_p_ready, 0, {alpha:1});
	pAtkTween.fromTo(sprite_p_ready, anim1, {x:item.action[0][0], y:item.action[0][1]}, {ease:"custom", x:item.action[0][2], y:item.action[0][3], onComplete: function(){
		sprite_p_ready.alpha = 0;
		sprite_p_main.visible = true;
		sprite_p_back.visible = true;
		sprite_p_top.visible = true;
		actionLines.visible = true;
	}});
	pAtkTween.fromTo(sprite_p_back, anim2, {x:item.action[1][0], y:item.action[1][1]}, {ease:"custom", x:item.action[1][2], y:item.action[1][3]}, anim1);
	pAtkTween.fromTo(sprite_p_back, 0.3, {alpha:0}, {alpha:1}, anim1);
	pAtkTween.fromTo(sprite_p_back, 0.25, {alpha:1}, {alpha:0}, anim1+0.73);
	pAtkTween.fromTo(sprite_p_main, anim2, {x:item.action[2][0], y:item.action[2][1]}, {ease:"custom", x:item.action[2][2], y:item.action[2][3]}, anim1);
	pAtkTween.fromTo(sprite_p_top, 0.33, {alpha:0}, {alpha:1}, anim1);
	pAtkTween.fromTo(sprite_p_top, 0.25, {alpha:1}, {alpha:0}, anim1+1);
	pAtkTween.fromTo(sprite_p_top, anim2, {x:item.action[3][0], y:item.action[3][1]}, {ease:"custom", x:item.action[3][2], y:item.action[3][3], onComplete: function(){
		sprite_p_back.visible = false;
		sprite_p_main.visible = false;
		sprite_p_top.alpha = 0;
		sprite_p_back.alpha = 0;
		sprite_p_top.visible = false;
		creatureAction.visible = false;
		actionLines.visible = false;
		actionContainer.removeChild(creatureAction);
	}},anim1);

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

	creatureAction.pAtkTween = pAtkTween;

	dMissTween = new TimelineMax({paused: true});
	dMissTween.to(sprite_d_ready, 0, {alpha:1});
	// dMissTween.to(creatureAction, 0.5, {x:0});
	dMissTween.fromTo(sprite_d_ready, anim1, {x:item.action[8][0], y:item.action[8][1]}, {ease:"custom", x:item.action[8][2], y:item.action[8][3], onComplete: function(){
		sprite_d_ready.alpha = 0;
		sprite_d_miss.visible = true;
	}});
	dMissTween.fromTo(sprite_d_miss, anim2, {x:item.action[9][0], y:item.action[9][1]}, {ease:"custom", x:item.action[9][2], y:item.action[9][3], onComplete: function(){
		sprite_d_miss.visible = false;
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

	creatureAction.dMissTween = dMissTween;

	// creatureAction.visible = false;

	// spriteReady.visible = false;
	// creatureAction.addChild(spriteReady);
	// creatureAction.ready = spriteReady;

	// actionContainer.addChild(creatureAction);
	
	
	// if(item.size == 2){		
	// 	creatureContainer.scale.set(direction * 0.5, 0.5);
	// 	creatureAction.scale.set(direction * 0.30, 0.30);
	// }else{
	// 	creatureContainer.scale.set(direction * 0.33, 0.33);
	// 	creatureAction.scale.set(direction * 0.25, 0.25);
	// }
	
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
		dmgStatus.addChild(statusText);
		statusTextArray.push(statusText);

		let statusImage = new PIXI.Sprite(resources.status_critical.texture);
		statusImage.anchor.set(0.5,0.5);
		statusImage.scale.set(0.4);
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
	var dmgPopupTween = new TimelineMax({paused: true});
	dmgPopupTween.to(dmgNumArray[0], 0.1, {delay:anim1, ease:Expo.easeIn, alpha: 1});
	dmgPopupTween.fromTo(dmgNumArray[0].scale, 0.2, {x: 0, y: 0}, {delay:anim1, ease:Back.easeOut.config(1.7), x: 1, y: 1},0);

	dmgPopupTween.to(dmgEffective, 0.1, {delay:anim1, ease:Expo.easeIn, alpha: 1},0);
	dmgPopupTween.fromTo(dmgEffective.scale, 0.2, {x: 0, y: 0}, {delay:anim1, ease:Back.easeOut.config(1.7), x: 1, y: 1},0);

	dmgPopupTween.to(dmgNumArray[1], 0.1, {delay:anim1, ease:Expo.easeIn, alpha: 1},0.033);
	dmgPopupTween.fromTo(dmgNumArray[1].scale, 0.2, {x: 0, y: 0}, {delay:anim1, ease:Back.easeOut.config(1.7), x: 1, y: 1},0.033);

	dmgPopupTween.to(dmgNumArray[2], 0.1, {delay:anim1, ease:Expo.easeIn, alpha: 1},0.067);
	dmgPopupTween.fromTo(dmgNumArray[2].scale, 0.2, {x: 0, y: 0}, {delay:anim1, ease:Back.easeOut.config(1.7), x: 1, y: 1},0.067);

	dmgPopupTween.to(dmgNumArray[3], 0.1, {delay:anim1, ease:Expo.easeIn, alpha: 1},0.1);
	dmgPopupTween.fromTo(dmgNumArray[3].scale, 0.2, {x: 0, y: 0}, {delay:anim1, ease:Back.easeOut.config(1.7), x: 1, y: 1},0.1);

	dmgPopupTween.to(dmgNumArray[4], 0.1, {delay:anim1, ease:Expo.easeIn, alpha: 1},0.133);
	dmgPopupTween.fromTo(dmgNumArray[4].scale, 0.2, {x: 0, y: 0}, {delay:anim1, ease:Back.easeOut.config(1.7), x: 1, y: 1},0.133);

	dmgPopupTween.to(dmgPopup, 0.267, {delay: 0.6, ease:Expo.easeInOut, y: 100, alpha: 0});
	dmgPopupTween.to(dmgPopup.scale, 0.267, {delay: 0.6, ease:Expo.easeInOut, x: 0, y: 0}, 0.333+anim1);

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
	
	item.statusArray.forEach(status => {
		let statusEffect = statusEffectSprite(status[0]);
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
		// heroSpriteArray.push(creatureContainer);
		// actionHero.push(creatureAction);
		// actionHero.push(spriteReady);
		// actionHero.push(actionArray);

		// heroActionContainerArray.push(creatureAction);
		heroOrder.push(index);
// 		moveHeroContainerArray.push(moveContainer);
		
		heroSprites.addChild(creatureContainer);
		// actionContainer.addChild(creatureAction);
		interfaceHeroHealth.addChild(healthBar);
		interfaceHeroFloatingInfo.addChild(dmgContainer);
// 		interfaceHeroHealth.addChild(moveContainer);
	}else{
		// enemySpriteArray.push(creatureContainer);
		// actionEnemy.push(creatureAction);
		// actionEnemy.push(actionArray);
		// actionEnemy.push(spriteReady);

		enemyOrder.push(index);
// 		moveEnemyContainerArray.push(moveContainer);
		
		enemySprites.addChild(creatureContainer);
		// actionContainer.addChild(creatureAction);
		interfaceEnemyHealth.addChild(healthBar);
		interfaceEnemyFloatingInfo.addChild(dmgContainer);
// 		interfaceEnemyHealth.addChild(moveContainer);
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

	// rectTemp.position.set(app.screen.width/2, app.screen.height/2);
	actionBlack.width = app.screen.width+100;
	actionBlack.height = app.screen.height+100;
	// actionBlack.position.set(0, app.screen.height/2);
	// actionBlack.position.set(0, 0);

	actionContainer.position.set(app.screen.width/2, app.screen.height*3/4);
	// tempContainer.position.set(app.screen.width/2, app.screen.height*3/4);
	// tempContainer2.position.set(app.screen.width/2+margin, app.screen.height*3/4);
	
	var skillSelectPadding = 5;
	
	if(app.screen.width < 860){
		margin = 10;
		healthSpacing = 10;
		skillSpacer = 5;
		skillSelectPadding = 2;
		interfaceHeroHealth.position.set(margin, 20);
		interfaceEnemyHealth.position.set(app.screen.width/2+margin, 20);
		interfaceHeroFloatingInfo.position.set(margin, 20);
		interfaceEnemyFloatingInfo.position.set(app.screen.width/2+margin, 20);
		targetTextFontSize = 12;
		skillNameFontSize = 14;
	}else if(app.screen.width < 1366){
		margin = 15;
		healthSpacing = 10;
		skillSpacer = 8;
		skillSelectPadding = 3;
		interfaceHeroHealth.position.set(margin, 40);
		interfaceEnemyHealth.position.set(app.screen.width/2+margin, 40);
		interfaceHeroFloatingInfo.position.set(margin, 40);
		interfaceEnemyFloatingInfo.position.set(app.screen.width/2+margin, 40);
		targetTextFontSize = 16;
		skillNameFontSize = 18;
	}else{
		margin = 50;
		healthSpacing = 20;
		skillSpacer = 10;
		skillSelectPadding = 5;
		interfaceHeroHealth.position.set(margin, 40);
		interfaceEnemyHealth.position.set(app.screen.width/2+margin, 40);
		interfaceHeroFloatingInfo.position.set(margin, 40);
		interfaceEnemyFloatingInfo.position.set(app.screen.width/2+margin, 40);
		targetTextFontSize = 26;
		skillNameFontSize = 28;
	}

	resizeWidth = (app.screen.width- (4*margin) - 6*(healthSpacing))/8;
	spriteResizeXPosition[0] = 0;
	spriteResizeXPosition[1] = resizeWidth + healthSpacing;
	spriteResizeXPosition[2] = (resizeWidth + healthSpacing) * 2;
	spriteResizeXPosition[3] = (resizeWidth + healthSpacing) * 3;

	heroHealthXPosition[0] = (resizeWidth + healthSpacing) * 3;
	heroHealthXPosition[1] = (resizeWidth + healthSpacing) * 2;
	heroHealthXPosition[2] = resizeWidth + healthSpacing;
	heroHealthXPosition[3] = 0;
	
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
	
	interfaceAdditional.position.set(margin, app.screen.height - margin);
	
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
	
	heroSprites.position.set(app.screen.width/2-margin, app.screen.height*3/4);
	enemySprites.position.set(app.screen.width/2+margin, app.screen.height*3/4);

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
	consoleScreen.text = "RESIZE\n" + consoleScreen.text;
}

function resizeDmg(roster, item){
	// var resizeWidth = (app.screen.width- (4*margin) - 6*(healthSpacing))/8;
	// var resizeHeight = 40;
	var statusSpacing = 5;
	var statusFontSize = 24;
	var statusSpacer1 = 40;
	var statusSpacer2 = 100;
	var statusStrokeSize = 4;
	if(app.screen.width < 860){
		item.dmgContainer.dmgPopup.scale.set(0.4,0.4);
		statusSpacing = 2;
		statusFontSize = 12;
		statusSpacer1 = 20;
		statusSpacer2 = 40;
		statusStrokeSize = 2;
	}else if(app.screen.width < 1366){
		item.dmgContainer.dmgPopup.scale.set(0.6,0.6);
		statusSpacing = 4;
		statusFontSize = 20;
		statusSpacer1 = 30;
		statusSpacer2 = 80;
		statusStrokeSize = 3;
	}else if(app.screen.width < 1500){
		item.dmgContainer.dmgPopup.scale.set(0.75,0.75);
	}
	else{
		item.dmgContainer.dmgPopup.scale.set(1,1);
	}

	item.dmgContainer.dmgStatus.statusImageArray.forEach((statusImage,arrayIndex)=>{
		statusImage.width = (resizeWidth - (statusSpacing * 5))/4;
		statusImage.height = statusImage.width;
		statusImage.y = -(statusSpacer1 + (arrayIndex*statusSpacer2));
	});

	item.dmgContainer.dmgStatus.statusTextArray.forEach((statusText,arrayIndex)=>{
		statusText.style.fontSize = statusFontSize;
		statusText.style.strokeThickness = statusStrokeSize;
		statusText.y = -(arrayIndex*statusSpacer2);
	});

	var switcher = 0;
	if(item.size > 1){
		item.dmgContainer.dmgPopup.x = (resizeWidth * 2 + healthSpacing)/2;
		item.dmgContainer.dmgStatus.x = (resizeWidth * 2 + healthSpacing)/2;
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
	// var resizeWidth = (app.screen.width- (4*margin) - 6*(healthSpacing))/8;
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
		item.healthBar.textHP.style.fontSize = 14;
		statusSpacing = 2;
		HPSpacing = 1;
		selectBarHeight = 5;
		indicatorBar1Y = -10;
		indicatorBar2Y = -13;
		indicatorEndHeight = 12;
		indicatorEndY = -15;
		item.healthBar.turn.height = 3;
		item.healthBar.turn.y = resizeHeight;
	}else if(app.screen.width < 1366){
		resizeHeight = 30;
		item.healthBar.textHP.style.fontSize = 18;
		statusSpacing = 4;
		HPSpacing = 2;
		selectBarHeight = 7;
		indicatorBar1Y = -15;
		indicatorBar2Y = -20;
		indicatorEndHeight = 18;
		indicatorEndY = -23;
		item.healthBar.turn.height = 4;
		item.healthBar.turn.y = resizeHeight + 2;
	}else{
		item.healthBar.textHP.style.fontSize = 24;
		item.healthBar.turn.height = 5;
		item.healthBar.turn.y = resizeHeight + 2;
	}
	
	item.healthBar.outer.height = resizeHeight;
	item.healthBar.inner.height = resizeHeight;

	item.healthBar.critDmgBar.height = resizeHeight;
	item.healthBar.dmgBarContainer.dmgBar.height = resizeHeight;
	item.healthBar.outer.width = resizeWidth;

	var switcher = 0;
	if(item.size > 1){
		item.healthBar.outer.width = resizeWidth * 2 + healthSpacing;
		item.healthBar.inner.width = (resizeWidth * 2 + healthSpacing) * (item.hp/item.overallHP);
		item.healthBar.critDmgBar.width = -((resizeWidth * 2 + healthSpacing) * (item.critDmg/item.overallHP));
		item.healthBar.critDmgBar.x = resizeWidth * 2 + healthSpacing;
		item.healthBar.turn.width = resizeWidth * 2 + healthSpacing;
		
		item.healthBar.healthBarIndicators.forEach(indicator => {
			indicator.indicatorBar1.width = resizeWidth * 2 + healthSpacing;
			indicator.indicatorBar2.width = resizeWidth * 2 + healthSpacing;
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
		indicator.indicatorBar1.height = selectBarHeight;
		indicator.indicatorBar1.y = indicatorBar1Y;	
		indicator.indicatorBar2.y = indicatorBar2Y;	
		indicator.indicatorStart.height = indicatorEndHeight;
		indicator.indicatorStart.y = indicatorEndY;	
		indicator.indicatorEnd.height = indicatorEndHeight;	
		indicator.indicatorEnd.y = indicatorEndY;	
		indicator.indicatorEnd.x = item.healthBar.outer.width - 4;
	});
	
	item.healthBar.select.pivot.x = item.healthBar.select.width/2;
	item.healthBar.select.x = item.healthBar.select.width/2;
}

function resizeSprite(direction, item, index){	
	if(app.screen.width < 860){
		item.scale.set(direction * 0.23, 0.23);
	}else if(app.screen.width < 1366){
		item.scale.set(direction * 0.3, 0.3); 
	}else{
		item.scale.set(direction * 0.5, 0.5);
	}
	if(direction > 0){
		item.x = -spriteResizeXPosition[heroArray[index].pos-1];
	}else{
		item.x = spriteResizeXPosition[enemyArray[index].pos-1];
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
	console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
	if(validSkillObjectArray.length > 0){
		var correctTarget2 = false;
		var targetedVita2 = 0;
		validSkillObjectArray.forEach((targeted, targetedIndex) => {
			if(Array.isArray(targeted)){
				targeted.forEach(arrayElement => {
					if(this.object == arrayElement){
						console.log("Correct object do things");
						correctTarget2 = true;
						targetedVita2 = targetedIndex;
					}
				});
			}
			if(this.object == targeted){
				console.log("Correct object do things");
				correctTarget2 = true;
				targetedVita2 = targetedIndex;
			}
		});
		console.log(selectedVita2.name + " uses " + skillsList.data.skills[selectedSkill].name + " on:");

		var level2 = selectedVita2.level;
		var accMod2 = selectedVita2.accMod;
		var attack2 = 0;
		var defense2 = 0;
		var defendElements2 = [];
		var effectiveness2 = 1;
		var multiHit2 = false;
		var skillStatusEffect2 = false;
		var skillStatChange2 = false;
		var statusNum2 = [];
		var hitNum2 = 1;
		var dmgArray2 = [];
		var critTracker2 = [0,0,0,0,0];
		var ifCrit2 = false;
		var totalCritDmg2 = 0;
		var critMultiplier2 = 1;
		var ifHeal2 = false;
		var dmgCalc2 = 0;

		if(correctTarget2){

			animateBattle(selectedVita2, validSkillObjectArray[targetedVita2]);

			const filter1 = new PIXI.filters.ColorMatrixFilter();
			const filter2 = new PIXI.filters.ColorMatrixFilter();
			const filter3 = new PIXI.filters.ColorMatrixFilter();

			var filtersArray = [];

			filter2.brightness(1.4,  true);
			filter2.hue(175, true);
			filter3.blackAndWhite(true);

			// filter3.negative(true);
			switch(skillsList.data.skills[selectedSkill].element){
				case 1: 	//flora
					filter1.hue(-120);
					filtersArray = [filter1];
					break;
				case 2: 	//water
					filter1.hue(-30);
					filtersArray = [filter1];
					break;
				case 3:		//fire
					filter1.hue(110);
					filtersArray = [filter1];
					break;
				case 4: 	//earth
					filter1.hue(160);
					filtersArray = [filter1];
					break;
				case 5: 	//lightning
					filtersArray = [filter2];
					break;
				case 6: 	//wind
					filter1.hue(-80);
					filtersArray = [filter1];
					break;
				case 7: 	//toxic
					filter1.hue(20);
					filtersArray = [filter1];
					break;
				case 8: 	//spirit
					filter1.hue(60);
					filtersArray = [filter1];
					break;
				case 9: 	//shadow	
					filtersArray = [filter3];		
					break;
				default:
					filter1.hue(0);
					filtersArray = [filter1];
			}

			selectedVita2.action.fxTop.filters = filtersArray;
			selectedVita2.action.fxBack.filters = filtersArray;

			if(skillsList.data.skills[selectedSkill].type == "phy"){
				attack2 = selectedVita2.patk;				
			}else if(skillsList.data.skills[selectedSkill].type == "spe"){
				attack2 = selectedVita2.satk;
			}

			validSkillObjectArray[targetedVita2].forEach(targeted => {
				var dodge2 = targeted.dodge;
				var dodgeMod2 = targeted.dodgeMod;
				if(skillsList.data.skills[selectedSkill].type == "phy"){
					defense2 = targeted.pdef;
				}else if(skillsList.data.skills[selectedSkill].type == "spe"){
					defense2 = targeted.sdef;
				}
				targeted.elements.forEach(element =>{
					defendElements2.push(element);
				});
				var accDiff2 = accMod2 - dodgeMod2;
				var hitMod2 = 1;
				if(accDiff2 > 0){
					hitMod2 = (Math.abs(accDiff2) + 3)/3;
				}else if(accDiff2 < 0){
					hitMod2 = 3/(Math.abs(accDiff2) + 3);
				}

				if(skillsList.data.skills[selectedSkill].accuracy == 110){
					var hitChance2 = 1;
				}else{
					var hitChance2 = ((skillsList.data.skills[selectedSkill].accuracy/100) - (dodge2/200)) * hitMod2;
				}
				var hitRoll2 = Math.random();

				if(hitRoll2 < hitChance2){
					console.log("Hit chance2: " + hitChance2 + " Hit roll2: " + hitRoll2 + " : HIT");
					//Get defenders elements to calculate effectiveness
					defendElements2.forEach(defendElement=>{
						effectiveness2 = effectiveness2 * elementList.data.elements[skillsList.data.skills[selectedSkill].element-1][defendElement];
					});

					skillsList.data.skills[selectedSkill].tags.forEach(tagName =>{
						if(tagName == "multiple")		multiHit2 = true;
						if(tagName == "status")			skillStatusEffect2 = true;
						if(tagName == "statchange")		skillStatChange2 = true;
					});

					if(multiHit2){
						hitNum2 = Math.floor(Math.random() * (skillsList.data.skills[selectedSkill].multiple[1] - skillsList.data.skills[selectedSkill].multiple[0] + 1) + skillsList.data.skills[selectedSkill].multiple[0]);
						// hitNum = 5;
					}

					if(skillStatusEffect2){
						statusNum2.push(skillsList.data.skills[selectedSkill].status);
						// hitNum = 5;
					}

					if(skillStatChange2){
						// if(skillsList.data.skills[selectedSkill].statchange[1] > 0){
						// 	statusNum.push(2);
						// }else{
						// 	statusNum.push(4);
						// }
					}

					//Calculate heal amount or damage amount
					if(skillsList.data.skills[selectedSkill].heal > 0){
						//calculate how much to heal
						dmgArray2.push(skillsList.data.skills[selectedSkill].heal);
						ifHeal2 = true;
						effectiveness2 = 1;
						critMultiplier2 = 1;
					}else if(skillsList.data.skills[selectedSkill].type == "oth"){
						// other = true;
					}else{						
						dmgCalc2 = Math.round((((((2*level2/5) + 2) * skillsList.data.skills[selectedSkill].power * (attack2/defense2))/150) + 2)*effectiveness2);
						for(var i = 0; i < hitNum2; i++){
							var criticalChance2 = Math.floor(Math.random() * 10000);
							var critMultiplier2 = 1;
							if(criticalChance2 > 5000){
								critMultiplier2 = 1.5;
								ifCrit2 = true;
								critTracker2[i] = 1;
							}
							var finalDmgCalc2 = Math.floor(dmgCalc2 * critMultiplier2 * ((Math.floor(Math.random() * (100 - 85 + 1) + 85))/100));
							if(finalDmgCalc2 == 0)		finalDmgCalc2 = 1;
							dmgArray2[i] = finalDmgCalc2;
						}
					}

					if(ifCrit2){
						statusNum2.push(14);
						dmgArray2.forEach((dmgArrayNum, dmgArrayIndex) => {
							if(critTracker2[dmgArrayIndex] == 1)		totalCritDmg2 = totalCritDmg2 + (dmgArrayNum/3)
						});
						console.log("Critical damage2: " + Math.floor(totalCritDmg2));
					}

					var deltaHP2 = 0;
					dmgArray2.forEach(dmgArray2Num => {deltaHP2 += dmgArray2Num;});
					console.log("Total damage: " + deltaHP2);
				}else{
					console.log("Hit chance2: " + hitChance2 + " Hit roll2: " + hitRoll2 + " : MISS");
					dmgArray2[0] = 0;
					effectiveness2 = 0;
				}

				updateDamage(targeted, effectiveness2, ifCrit2, critTracker2, dmgArray2, ifHeal2, statusNum2, skillStatusEffect2);
			});

			//If out of turns, and still have enemies, and still have heroes
			if(turnArray.length != 0){
				var identifier = [];
				if(turnArray[0] > 0){
					identifier[0] = 1;
					identifier[1] = Math.abs(turnArray[0])-1;
				}else{
					identifier[0] = -1;
					identifier[1] = Math.abs(turnArray[0])-1;
				}
				selectCreature(identifier, turnArray2[0]);
				// turnArray.shift();
				turnArray2.shift();
			}else{
				calculateTurnOrder();
			}

			selectedSkill = -1;
		}else{
			console.log("Invalid skill target");
		}
		console.log("1###################################################################################");
		console.log("2###################################################################################");
	// }
	// else if(validMoveTargetArray.length > 0){
	// 	clickedTarget = this.identifier[1];
	// 	console.log("Clicked move target index: " + clickedTarget);
	// 	var correctTarget = false;
	// 	var targetedVita = 0;

	// 	validMoveTargetArray.forEach((targeted, targetedIndex) => {
	// 		if(Array.isArray(targeted)){
	// 			targeted.forEach(arrayElement => {
	// 				if(arrayElement == clickedTarget){
	// 					correctTarget = true;
	// 					targetedVita = targetedIndex;
	// 				}	
	// 			});
	// 		}
	// 		if(targeted == clickedTarget){
	// 			correctTarget = true;
	// 			targetedVita = targetedIndex;
	// 		}
	// 	});

	// 	var moveFrom;
	// 	var moveTo;

	// 	if(selectedVita > 0){
	// 		heroOrder.forEach((creatureInitialOrder, orderIndex) => {
	// 			if(creatureInitialOrder == validMoveTargetArray[targetedVita])				moveTo = orderIndex
	// 			if(creatureInitialOrder == selectedVita-1)									moveFrom = orderIndex
	// 		});
	// 	}else{
	// 		enemyOrder.forEach((creatureInitialOrder, orderIndex) => {
	// 			if(creatureInitialOrder == Math.abs(validMoveTargetArray[targetedVita]))	moveTo = orderIndex
	// 			if(creatureInitialOrder == Math.abs(selectedVita)-1)						moveFrom = orderIndex
	// 		});
	// 	}

	// 	var displacement = moveFrom - moveTo;

	// 	if(correctTarget){
	// 		// console.log(selectedVita + " moves to: " + validMoveTargetArray[targetedVita]);		//Hero index moves to targetindex
	// 		// console.log(selectedVita + " moves: " + displacement);
	// 		moveCreature(selectedVita, displacement);
	// 		// moveCreature(selectedVita, validMoveTargetArray[targetedVita]);

	// 		//Get next turn Vita. If out of turns, and still have enemies, and still have heroes
	// 		if(turnArray.length != 0){
	// 			var identifier = [];
	// 			if(turnArray[0] > 0){
	// 				identifier[0] = 1;
	// 				identifier[1] = Math.abs(turnArray[0])-1;
	// 			}else{
	// 				identifier[0] = -1;
	// 				identifier[1] = Math.abs(turnArray[0])-1;
	// 			}
	// 			selectCreature(identifier, turnArray2[0]);
	// 			turnArray.shift();
	// 			turnArray2.shift();
	// 		}else{
	// 			calculateTurnOrder();
	// 		}
	// 		selectedSkill = -1;
	// 	}else{
	// 		console.log("Invalid move target");
	// 	}
	// }	
	}
	else if(validMoveObjectArray.length > 0){
		// clickedTarget = this.identifier[1];
		console.log("Clicked move object: " + this.object.name);
		var correctTarget2 = false;
		var targetedVita2 = 0;

		validMoveObjectArray.forEach((targeted, targetedIndex) => {
			if(Array.isArray(targeted)){
				targeted.forEach(arrayElement => {
					if(this.object == arrayElement){
						correctTarget2 = true;
						targetedVita2 = targeted;
					}	
				});
			}
			if(this.object == targeted){
				correctTarget2 = true;
				targetedVita2 = targeted;
			}
		});

		// var moveFrom;
		// var moveTo;

		// if(this.object.hero){
		// 	heroOrder.forEach((creatureInitialOrder, orderIndex) => {
		// 		if(creatureInitialOrder == (targetedVita2.pos-1))								moveTo = orderIndex
		// 		if(creatureInitialOrder == (this.object.pos-1))								moveFrom = orderIndex
		// 	});
		// }else{
		// 	enemyOrder.forEach((creatureInitialOrder, orderIndex) => {
		// 		if(creatureInitialOrder == (targetedVita2.pos-1))								moveTo = orderIndex
		// 		if(creatureInitialOrder == (this.object.pos-1))								moveFrom = orderIndex
		// 	});
		// }

		// var displacement = moveFrom - moveTo;

		// console.log("Displacement: " + displacement + ", movefrom: " + moveFrom + ", moveto: " + moveTo);

		if(correctTarget2){
			// console.log(selectedVita + " moves to: " + validMoveTargetArray[targetedVita]);		//Hero index moves to targetindex
			// console.log(selectedVita + " moves: " + displacement);
			moveCreature(selectedVita2, targetedVita2);
			// moveCreature(selectedVita, validMoveTargetArray[targetedVita]);

			//Get next turn Vita. If out of turns, and still have enemies, and still have heroes
			if(turnArray2.length != 0){
				var identifier = [];
				if(turnArray[0] > 0){
					identifier[0] = 1;
					identifier[1] = Math.abs(turnArray[0])-1;
				}else{
					identifier[0] = -1;
					identifier[1] = Math.abs(turnArray[0])-1;
				}
				selectCreature(identifier, turnArray2[0]);
				// turnArray.shift();
				turnArray2.shift();
			}else{
				calculateTurnOrder();
			}
			selectedSkill = -1;
		}else{
			console.log("Invalid move target");
		}
	}
}

//function moveCreature(movingCreature, displace(1, -2))
function moveCreature(movingCreature, displacement){
	console.log(movingCreature.name + " wants to move to: " + displacement.name);
	var moveFrom, moveTo;
	if(movingCreature.hero){
		heroArray.forEach((object,objectIndex)=>{
			if(movingCreature == object)		moveFrom = objectIndex;
			if(displacement == object)			moveTo = objectIndex;
		});
		console.log(movingCreature.name + " at: " + moveFrom + " wants to move to: " + displacement.name + " at: " + moveTo);
		heroArray.splice(moveTo, 0, heroArray.splice(moveFrom,1)[0]);

		// heroArray.forEach((object,objectIndex)=>{	console.log(object.name + "at: " + object.pos + "\n")});

		heroArray.forEach((object,objectIndex)=>{
			if(objectIndex == 0){
				object.pos = 1;
			}else if(heroArray[objectIndex-1].size == 2){
				object.pos = heroArray[objectIndex-1].pos + 2;
			}else{
				object.pos = heroArray[objectIndex-1].pos + 1;
			}

			//Hero Creature
			var newCreatureX, newHPX;

			newCreatureX = -spriteResizeXPosition[object.pos-1];

			//Hero HP and dmg containers
			var switcher = 0;
			if(object.size > 1)	switcher = 1

			newHPX = heroHealthXPosition[object.pos-1+switcher];

			TweenMax.to(object.sprite, 0.5, {x: newCreatureX});
			TweenMax.to(object.action, 0.5, {x: newCreatureX});
			TweenMax.to(object.healthBar, 0.5, {x: newHPX});
			TweenMax.to(object.dmgContainer, 0.5, {x: newHPX});
		});
	}else{
		// console.log(moveFrom + " wants to move to: " + moveTo);
		enemyArray.forEach((object,objectIndex)=>{
			if(movingCreature == object)		moveFrom = objectIndex;
			if(displacement == object)			moveTo = objectIndex;
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

			//Enemy Creature
			var newCreatureX, newHPX;

			newCreatureX = spriteResizeXPosition[object.pos-1];
			newHPX = spriteResizeXPosition[object.pos-1];

			TweenMax.to(object.sprite, 0.5, {x: newCreatureX});
			TweenMax.to(object.action, 0.5, {x: newCreatureX});
			TweenMax.to(object.healthBar, 0.5, {x: newHPX});
			TweenMax.to(object.dmgContainer, 0.5, {x: newHPX});
		});
	}
	// if(movingCreature > 0){
	// 	var moveFrom;
	// 	heroOrder.forEach((creatureInitialOrder, orderIndex) => {
	// 		if(creatureInitialOrder == movingCreature-1)		moveFrom = orderIndex
	// 	});

	// 	var moveTo = moveFrom - displacement;
	// 	console.log(moveFrom + " wants to move to: " + moveTo);
	// 	heroOrder.splice(moveTo, 0, heroOrder.splice(moveFrom,1)[0]);

	// 	heroOrder.forEach((creatureIndex,arrayIndex) => {
	// 		if(arrayIndex == 0){
	// 			heroArray[creatureIndex].pos = 1;
	// 		}else if(heroArray[heroOrder[arrayIndex-1]].size == 2){
	// 			heroArray[creatureIndex].pos = heroArray[heroOrder[arrayIndex-1]].pos + 2;
	// 		}else{
	// 			heroArray[creatureIndex].pos = heroArray[heroOrder[arrayIndex-1]].pos + 1;
	// 		}
	// 	});

	// 	heroArray.forEach((arrayCreature,arrayCreatureIndex) => {
	// 		//Hero Creature
	// 		var newCreatureX;
	// 		var newHPX;

	// 		newCreatureX = -spriteResizeXPosition[arrayCreature.pos-1];

	// 		//Hero HP and dmg containers
	// 		var switcher = 0;
	// 		if(arrayCreature.size > 1)	switcher = 1

	// 		newHPX = heroHealthXPosition[arrayCreature.pos-1+switcher];

	// 		TweenMax.to(arrayCreature.sprite, 0.5, {x: newCreatureX});
	// 		TweenMax.to(arrayCreature.action, 0.5, {x: newCreatureX});
	// 		TweenMax.to(arrayCreature.healthBar, 0.5, {x: newHPX});
	// 		TweenMax.to(arrayCreature.dmgContainer, 0.5, {x: newHPX});
	// 	});
	// }else{
	// 	var moveFrom;
	// 	//Find index number for moveTo target and moveFrom selected
	// 	enemyOrder.forEach((creatureInitialOrder, orderIndex) => {
	// 		if(creatureInitialOrder == Math.abs(movingCreature)-1)		moveFrom = orderIndex
	// 	});

	// 	var moveTo = moveFrom - displacement;
	// 	console.log(moveFrom + " wants to move to: " + moveTo);
	// 	enemyOrder.splice(moveTo, 0, enemyOrder.splice(moveFrom,1)[0]);

	// 	enemyOrder.forEach((creatureIndex,arrayIndex) => {
	// 		if(arrayIndex == 0){
	// 			enemyArray[creatureIndex].pos = 1;
	// 		}else if(enemyArray[enemyOrder[arrayIndex-1]].size == 2){
	// 			enemyArray[creatureIndex].pos = enemyArray[enemyOrder[arrayIndex-1]].pos + 2;
	// 		}else{
	// 			enemyArray[creatureIndex].pos = enemyArray[enemyOrder[arrayIndex-1]].pos + 1;
	// 		}
	// 	});

	// 	enemyArray.forEach((arrayCreature,arrayCreatureIndex) => {
	// 		//Enemy Creature
	// 		var newCreatureX;
	// 		var newHPX;

	// 		newCreatureX = spriteResizeXPosition[arrayCreature.pos-1];
	// 		newHPX = spriteResizeXPosition[arrayCreature.pos-1];

	// 		TweenMax.to(arrayCreature.sprite, 0.5, {x: newCreatureX});
	// 		TweenMax.to(arrayCreature.action, 0.5, {x: newCreatureX});
	// 		TweenMax.to(arrayCreature.healthBar, 0.5, {x: newHPX});
	// 		TweenMax.to(arrayCreature.dmgContainer, 0.5, {x: newHPX});
	// 	});
	// }
}

function onHPDown(){
	console.log("HP:" + this.object.pos);
	console.log("If hero:" + this.object.hero);
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
	console.log("Skill: " + skillsList.data.skills[this.identifier[1]].name);
	var column = false;
	var several = false;
	var displace = false;
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
		if(tagName == "displace"){
			displace = true;
		}
	});
	
	validMoveTargetArray = [];
	validSkillTargetArray = [];
	validMoveObjectArray = [];
	validSkillObjectArray = [];
	var stageSide = 0;
	if(column){
		var columnArray = [];
		var columnObjectArray = [];
		//Ahead
		if(skillsList.data.skills[this.identifier[1]].column[2] > 0){
			var switchSide = false;
			//Get position to increment from
			var temp = selectedVita2.pos;
			// if(this.identifier[2] > 0){
			// 	var temp = heroArray[this.identifier[3]].pos;
			// }else{
			// 	var temp = enemyArray[this.identifier[3]].pos;
			// }			
			for(var i = 0; i < skillsList.data.skills[this.identifier[1]].column[0]; i++){
				if(temp > 1 && !switchSide){
					temp--;
				}else if(temp == 1 && !switchSide){
					switchSide = true;
				}else{
					temp++;
				}
				console.log("=================================" + temp);
				if(selectedVita2.hero){
				// if(this.identifier[2] > 0){
					if(!switchSide){
						heroArray.forEach((arrayCreature,arrayCreatureIndex) => {
							if(arrayCreature.pos == temp){
								stageSide = 1;
								columnArray.push((arrayCreatureIndex+1)*stageSide);
								columnObjectArray.push(arrayCreature);
							}
						});
					}else{
						enemyArray.forEach((arrayCreature,arrayCreatureIndex) => {
							if(arrayCreature.pos == temp){
								stageSide = -1;
								columnArray.push((arrayCreatureIndex+1)*stageSide);
								columnObjectArray.push(arrayCreature);
							}
						});
					}
				}else{
					if(!switchSide){
					// if(temp > 0 && !switchSide){
						enemyArray.forEach((arrayCreature,arrayCreatureIndex) => {
							if(arrayCreature.pos == temp){
								stageSide = -1;
								columnArray.push((arrayCreatureIndex+1)*stageSide);
								columnObjectArray.push(arrayCreature);
							}
						});
					}else{
						heroArray.forEach((arrayCreature,arrayCreatureIndex) => {
							if(arrayCreature.pos == temp){
								stageSide = 1;
								columnArray.push((arrayCreatureIndex+1)*stageSide);
								columnObjectArray.push(arrayCreature);
							}
						});
					}
				}
			}
		}
		//Behind
		else{
			//Get position to increment from
			// if(this.identifier[2] > 0){
			// 	var temp = heroArray[this.identifier[3]].pos + heroArray[this.identifier[3]].size - 1;
			// }else{
			// 	var temp = enemyArray[this.identifier[3]].pos + enemyArray[this.identifier[3]].size - 1;
			// }

			var temp = selectedVita2.pos + selectedVita2.size - 1;

			for(var i = 0; i < skillsList.data.skills[this.identifier[1]].column[0]; i++){
				temp++;
				console.log("=================================" + temp);
				if(selectedVita2.hero){
				// if(this.identifier[2] > 0){
					heroArray.forEach((arrayCreature,arrayCreatureIndex) => {
						if(arrayCreature.pos == temp){
							stageSide = 1;
							columnArray.push((arrayCreatureIndex+1)*stageSide);
							columnObjectArray.push(arrayCreature);
						}
					});
				}else{
					enemyArray.forEach((arrayCreature,arrayCreatureIndex) => {
						if(arrayCreature.pos == temp){
							stageSide = -1;
							columnArray.push((arrayCreatureIndex+1)*stageSide);
							columnObjectArray.push(arrayCreature);
						}
					});
				}
			}			
		}
		validSkillTargetArray.push(columnArray);
		validSkillObjectArray.push(columnObjectArray);
	}

	//for each target in the skill
	skillsList.data.skills[this.identifier[1]].target.forEach((skillTarget, skillTargetIndex)=> {
		//if the position is a valid target
		if(skillTarget == 1){
			var posTracker = skillTargetIndex + 1;
			//if targeting enemies or heroes
			if(selectedVita2.hero){
			// if(this.identifier[2] > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(posTracker == arrayCreature.pos){			
							validSkillTargetArray.push([(arrayCreatureIndex+1)*-1]);
							validSkillObjectArray.push([arrayCreature]);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(posTracker == pos1 || posTracker == pos2){
							validSkillTargetArray.push([(arrayCreatureIndex+1)*-1]);
							validSkillObjectArray.push([arrayCreature]);
						}
					}				
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(posTracker == arrayCreature.pos){
							validSkillTargetArray.push([arrayCreatureIndex+1]);
							validSkillObjectArray.push([arrayCreature]);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(posTracker == pos1 || posTracker == pos2){
							validSkillTargetArray.push([arrayCreatureIndex+1]);
							validSkillObjectArray.push([arrayCreature]);
						}
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
		var array11 = [];
		var joinedSeveral = skillsList.data.skills[this.identifier[1]].several.join();
		if(joinedSeveral == "0,0,1"){
			if(selectedVita > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array1.push((arrayCreatureIndex+1)*-1);
							array11.push(arrayCreature);
						}	
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array1.push((arrayCreatureIndex+1)*-1);
							array11.push(arrayCreature);
						}
					}
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array1.push((arrayCreatureIndex+1));
							array11.push(arrayCreature);
						}	
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array1.push((arrayCreatureIndex+1));
							array11.push(arrayCreature);
						}	
					}
				});
			}
			validSkillTargetArray = [];
			validSkillTargetArray = [array1];
			validSkillObjectArray = [];
			validSkillObjectArray = [array11];
		}else if(joinedSeveral == "0,1,0"){
			if(selectedVita > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3){
							array1.push((arrayCreatureIndex+1)*-1);
							array11.push(arrayCreature);
						}	
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3){
							array1.push((arrayCreatureIndex+1)*-1);
							array11.push(arrayCreature);
						}	
					}
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3){
							array1.push((arrayCreatureIndex+1));
							array11.push(arrayCreature);
						}	
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3){
							array1.push((arrayCreatureIndex+1));
							array11.push(arrayCreature);
						}	
					}
				});
			}
			validSkillTargetArray = [];
			validSkillTargetArray = [array1];
			validSkillObjectArray = [];
			validSkillObjectArray = [array11];
		}else if(joinedSeveral == "1,0,0"){
			if(selectedVita > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2){
							array1.push((arrayCreatureIndex+1)*-1);
							array11.push(arrayCreature);
						}	
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2){
							array1.push((arrayCreatureIndex+1)*-1);
							array11.push(arrayCreature);
						}	
					}
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2){
							array1.push((arrayCreatureIndex+1));
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2){
							array1.push((arrayCreatureIndex+1));
							array11.push(arrayCreature);
						}
					}
				});
			}
			validSkillTargetArray = [];
			validSkillTargetArray = [array1];
			validSkillObjectArray = [];
			validSkillObjectArray = [array11];
		}else if(joinedSeveral == "1,1,0"){
			if(selectedVita > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3){
							array1.push((arrayCreatureIndex+1)*-1);
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3){
							array1.push((arrayCreatureIndex+1)*-1);
							array11.push(arrayCreature);
						}
					}
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3){
							array1.push((arrayCreatureIndex+1));
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3){
							array1.push((arrayCreatureIndex+1));
							array11.push(arrayCreature);
						}
					}
				});
			}
			validSkillTargetArray = [];
			validSkillTargetArray = [array1];
			validSkillObjectArray = [];
			validSkillObjectArray = [array11];
		}else if(joinedSeveral == "0,1,1"){
			if(selectedVita > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array1.push((arrayCreatureIndex+1)*-1);
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array1.push((arrayCreatureIndex+1)*-1);
							array11.push(arrayCreature);
						}
					}
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array1.push((arrayCreatureIndex+1));
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array1.push((arrayCreatureIndex+1));
							array11.push(arrayCreature);
						}
					}
				});
			}
			validSkillTargetArray = [];
			validSkillTargetArray = [array1];
			validSkillObjectArray = [];
			validSkillObjectArray = [array11];
		}else if(joinedSeveral == "1,1,1"){
			if(selectedVita > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array1.push((arrayCreatureIndex+1)*-1);
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array1.push((arrayCreatureIndex+1)*-1);
							array11.push(arrayCreature);
						}
					}
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2 || arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array1.push((arrayCreatureIndex+1));
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2 || pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array1.push((arrayCreatureIndex+1));
							array11.push(arrayCreature);
						}
					}
				});
			}
			validSkillTargetArray = [];
			validSkillTargetArray = [array1];
			validSkillObjectArray = [];
			validSkillObjectArray = [array11];
		}else if(joinedSeveral == "1,0,1"){
			var array2 = [];
			var array22 = [];
			if(selectedVita > 0){
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2){
							array1.push((arrayCreatureIndex+1)*-1);
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2){
							array1.push((arrayCreatureIndex+1)*-1);
							array11.push(arrayCreature);
						}
					}
				});
				enemyArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array2.push((arrayCreatureIndex+1)*-1);
							array22.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array2.push((arrayCreatureIndex+1)*-1);
							array22.push(arrayCreature);
						}
					}
				});
			}else{
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 1 || arrayCreature.pos == 2){
							array1.push((arrayCreatureIndex+1));
							array11.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 1 || pos2 == 1 || pos1 == 2 || pos2 == 2){
							array1.push((arrayCreatureIndex+1));
							array11.push(arrayCreature);
						}
					}
				});
				heroArray.forEach((arrayCreature, arrayCreatureIndex) => {
					if(arrayCreature.size == 1){
						if(arrayCreature.pos == 3 || arrayCreature.pos == 4){
							array2.push((arrayCreatureIndex+1));
							array22.push(arrayCreature);
						}
					}else if(arrayCreature.size == 2){
						var pos1 = arrayCreature.pos;
						var pos2 = arrayCreature.pos + 1;
						if(pos1 == 3 || pos2 == 3 || pos1 == 4 || pos2 == 4){
							array2.push((arrayCreatureIndex+1));
							array22.push(arrayCreature);
						}
					}
				});
			}
			// validSkillTargetArray = [];
			validSkillTargetArray = [array1, array2];
			validSkillObjectArray = [array11, array22];
		}
	}
	console.log("validSkillTargetArray: " + validSkillTargetArray);
	console.log("validSkillObjectArray: " + validSkillObjectArray);

	validSkillObjectArray.forEach(object=>{
		object.forEach(object2=>{
			console.log("object2 column: " + object2.name);
			if(heal){
				object2.healthBar.heal.visible = true;
			}else{
				object2.healthBar.target.visible = true;
			}
		});
	});
	
}

function animateBattle(attacker, defender){
	const blurFilter1 = new PIXI.filters.BlurFilter();
	// const blurFilter2 = new PIXI.filters.BlurFilter();
	blurFilter1.blur = 0;
	// blurFilter2.blur = 0;

	spriteHolder.filters = [blurFilter1];
	TweenMax.fromTo(blurFilter1, 0.167, {blur:0}, {blur:10});

	TweenMax.fromTo(stageContainer, 0.05, {x:-10}, {delay:anim1, x:10, yoyo:true, ease:Sine.easeOut, repeat:10, onComplete:function(){
		TweenMax.to(stageContainer,0.5, {x:0,ease:Elastic.easeOut})
	}});

	var animateArray = [];

	defender.forEach(arrayCreature => {
		actionContainer.addChild(arrayCreature.action);
		arrayCreature.action.visible = true;
		arrayCreature.sprite.visible = false;
		animateArray.push(arrayCreature.sprite);
	});

	actionContainer.addChild(attacker.action);
	attacker.action.visible = true;
	attacker.sprite.visible = false;
	animateArray.push(attacker.sprite);

	stageContainer.actionBlackTween.play(0);

	var heroShiftSizeTracker = 0;
	var enemyShiftSizeTracker = 0;

	defender.forEach((arrayCreature,arrayCreatureIndex) => {
		if(arrayCreature.hero){
			var originalX = arrayCreature.action.x;
			var originalFloatX = heroArray[Math.abs(arrayCreature)-1].dmgContainer.x;
			TweenMax.to(arrayCreature.action, 0.25, {x:-spriteResizeXPosition[heroShiftSizeTracker]});

			if(arrayCreature.size > 1)	heroShiftSizeTracker++;
			TweenMax.to(arrayCreature.dmgContainer, 0.25, {x:heroHealthXPosition[heroShiftSizeTracker]});

			arrayCreature.action.dMissTween.play(0);
			arrayCreature.action.dMissTween.eventCallback("onComplete", function(){
				arrayCreature.action.x = originalX;
				arrayCreature.dmgContainer.x = originalFloatX;
				arrayCreature.dmgContainer.dmgStatus.tween.play(0);
				arrayCreature.dmgContainer.dmgStatus.tween.eventCallback("onComplete", function(){
					arrayCreature.statusSpriteArray.forEach(statusSprite => {
						statusSprite.visible = true;
					});
				});
			});

			heroShiftSizeTracker++;			
		}else{
			var originalX = arrayCreature.action.x;
			TweenMax.to(arrayCreature.action, 0.25, {x:spriteResizeXPosition[enemyShiftSizeTracker]});
			TweenMax.to(arrayCreature.dmgContainer, 0.25, {x:spriteResizeXPosition[enemyShiftSizeTracker]});

			arrayCreature.action.dMissTween.play(0);
			arrayCreature.action.dMissTween.eventCallback("onComplete", function(){
				arrayCreature.action.x = originalX;
				arrayCreature.dmgContainer.x = originalX;
				arrayCreature.dmgContainer.dmgStatus.tween.play(0);
				arrayCreature.dmgContainer.dmgStatus.tween.eventCallback("onComplete", function(){
					arrayCreature.statusSpriteArray.forEach(statusSprite => {
						statusSprite.visible = true;
					});
				});
			});

			enemyShiftSizeTracker++;
			if(arrayCreature.size > 1)	enemyShiftSizeTracker++;
		}	
	});	

	var originalX = attacker.action.x;
	TweenMax.to(attacker.action, 0.25, {x:0});

	attacker.action.pAtkTween.play(0);
	attacker.action.pAtkTween.eventCallback("onComplete", function(){
		animateArray.forEach(item =>{
			item.visible = true;
		});
		attacker.action.x = originalX;
		TweenMax.fromTo(blurFilter1, 0.1, {blur:10}, {blur:0});
	});

	// actionHero[0].visible = true;
	// actionEnemy[0].visible = true;

	// actionHero[0].pAtkTween.play(0);
}

function onAdditionalDown(){
// 	skillContainerArray[0].targetText.style.fill = '0x66cc66';
	console.log("Additional");
	interfaceAdditional.visible = true;

	// 0xccffcc
	// backgroundImage.tint = 0x3D85C6;	
}

function onAdditionalCancelDown(){
	console.log("Additional Cancel");
	interfaceAdditional.visible = false;
}

function onAdditionalMoveDown(){
	// console.log("Additional Move " + selectedVita);
	console.log("Additional Move " + selectedVita2.name);
	validMoveTargetArray = [];
	validMoveObjectArray = [];
	validSkillTargetArray = [];
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

	// var currIndex2 = selectedVita2.pos;
	var moveDelta2 = selectedVita2.move[1];
	var forward2= false;
	var backward2 = false;
	if(selectedVita2.move[0] == "+"){
		forward2 = true;
	}else if(selectedVita2.move[0] == "-"){
		backward2 = true;
	}else{
		forward2 = true;
		backward2 = true;
	}

	if(selectedVita2.hero){
		heroArray.forEach(object=>{
			if(object != selectedVita2){
				var positionCheck = [];
				if(object.size > 1){
					positionCheck.push(object.pos);
					positionCheck.push(object.pos+1);
				}else{
					positionCheck.push(object.pos);
				}
				for(var i = 1; i <= moveDelta2; i++){
					positionCheck.forEach(position=>{
						if(position == selectedVita2.pos-i && forward2){
							object.healthBar.move.visible = true;
							validMoveObjectArray.push(object);
						}else if(position == selectedVita2.pos+i+selectedVita2.size-1 && backward2){
							object.healthBar.move.visible = true;
							validMoveObjectArray.push(object);
						}
					});				
				}
			}
		});
	}else{
		enemyArray.forEach(object=>{
			if(object != selectedVita2){
				var positionCheck = [];
				if(object.size > 1){
					positionCheck.push(object.pos);
					positionCheck.push(object.pos+1);
				}else{
					positionCheck.push(object.pos);
				}
				for(var i = 1; i <= moveDelta2; i++){
					positionCheck.forEach(position=>{
						if(position == selectedVita2.pos-i && forward2){
							object.healthBar.move.visible = true;
							validMoveObjectArray.push(object);
						}else if(position == selectedVita2.pos+i+selectedVita2.size-1 && backward2){
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


	// if(selectedVita > 0){
	// 	var currIndex = Math.abs(selectedVita)-1;
	// 	var moveDelta = heroArray[Math.abs(selectedVita)-1].move[1];
	// 	var forward = false;
	// 	var backward = false;
	// 	if(heroArray[Math.abs(selectedVita)-1].move[0] == "+"){
	// 		forward = true;
	// 	}else if(heroArray[Math.abs(selectedVita)-1].move[0] == "-"){
	// 		backward = true;
	// 	}else{
	// 		forward = true;
	// 		backward = true;
	// 	}

	// 	var tempIndex;
	// 	heroOrder.forEach((creatureInitialOrder, orderIndex) => {
	// 		if(creatureInitialOrder == currIndex)	tempIndex = orderIndex;
	// 	});

	// 	heroOrder.forEach((creatureInitialOrder, orderIndex) => {
	// 		for(var i = 0; i < moveDelta; i++){
	// 			if(orderIndex == tempIndex+1+i && backward){
	// 				heroArray[creatureInitialOrder].healthBar.move.visible = true;
	// 				validMoveTargetArray.push(creatureInitialOrder);
	// 			}else if(orderIndex == tempIndex-1-i && forward){
	// 				heroArray[creatureInitialOrder].healthBar.move.visible = true;
	// 				validMoveTargetArray.push(creatureInitialOrder);
	// 			}
	// 		}
	// 	});
	// }else{
	// 	var currIndex = Math.abs(selectedVita)-1;
	// 	var moveDelta = enemyArray[Math.abs(selectedVita)-1].move[1];
	// 	var forward = false;
	// 	var backward = false;
	// 	if(enemyArray[Math.abs(selectedVita)-1].move[0] == "+"){
	// 		forward = true;
	// 	}else if(enemyArray[Math.abs(selectedVita)-1].move[0] == "-"){
	// 		backward = true;
	// 	}else{
	// 		forward = true;
	// 		backward = true;
	// 	}

	// 	var tempIndex;
	// 	enemyOrder.forEach((creatureInitialOrder, orderIndex) => {
	// 		if(creatureInitialOrder == currIndex)	tempIndex = orderIndex;
	// 	});

	// 	enemyOrder.forEach((creatureInitialOrder, orderIndex) => {
	// 		for(var i = 0; i < moveDelta; i++){
	// 			if(orderIndex == tempIndex+1+i && backward){
	// 				enemyArray[creatureInitialOrder].healthBar.move.visible = true;
	// 				validMoveTargetArray.push(creatureInitialOrder);
	// 			}else if(orderIndex == tempIndex-1-i && forward){
	// 				enemyArray[creatureInitialOrder].healthBar.move.visible = true;
	// 				validMoveTargetArray.push(creatureInitialOrder);
	// 			}
	// 		}
	// 	});
	// }
	// console.log("validMoveTargetArray: " + validMoveTargetArray);


}

function onAdditionalItemDown(){
	console.log("Additional Item");
	onScreenStats.visible = true;
	consoleScreen.visible = true;
}

function onAdditionalSkipDown(){
	console.log("Additional Skip");
	if(turnArray.length != 0){
		var identifier = [];
		if(turnArray[0] > 0){
			identifier[0] = 1;
			identifier[1] = Math.abs(turnArray[0])-1;
		}else{
			identifier[0] = -1;
			identifier[1] = Math.abs(turnArray[0])-1;
		}
		selectCreature(identifier, turnArray2[0]);
		turnArray.shift();
		turnArray2.shift();
	}else{
		calculateTurnOrder();
	}

	selectedSkill = -1;

	interfaceAdditional.visible = false;
	// onScreenStats.visible = false;
	// consoleScreen.visible = false;
}

function calculateTurnOrder(){
	enemyArray.forEach(enemyObject=>{
		enemyObject.healthBar.turn.visible = true;
	});
	heroArray.forEach(heroObject=>{
		heroObject.healthBar.turn.visible = true;
	});

	var arrayCalcSpeedSorted = [];
	var arrayCalcSpeedPositions = [];

	turnArray = [];	
	turnArray2 = [];

	heroArray.forEach((arrayCreature,arrayCreatureIndex) => {
		var calcSpeed;
		if(arrayCreature.statMod[6]>0){
			calcSpeed = (arrayCreature.spd/5) * ((Math.abs(arrayCreature.statMod[6])+2)/2) + (Math.floor(Math.random() * 7) + 1);
		}else{
			calcSpeed = (arrayCreature.spd/5) * (2/(Math.abs(arrayCreature.statMod[6])+2)) + (Math.floor(Math.random() * 7) + 1);
		}
		console.log(arrayCreatureIndex + " Pre-Speed: " + arrayCreature.spd + "| CalcSpeed: " + calcSpeed);
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
		console.log(arrayCreatureIndex + " Pre-Speed: " + arrayCreature.spd + "| CalcSpeed: " + calcSpeed);
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
						turnArray2.push(heroArray[Math.abs(tempVar)-1]);
					}else console.log("object already exists")
				}else{
					var tempVar = -(index2+1-heroArray.length);
					var index = turnArray.findIndex(x => x==tempVar);
					if (index === -1){
						turnArray.push(tempVar);						
						turnArray2.push(enemyArray[Math.abs(tempVar)-1]);
					}else console.log("object already exists")
				}
			}
		});
	});

	console.log(turnArray);
	console.log(turnArray2);
	turnArray2.forEach(object=>{
		console.log(object.name);
	});

	var identifier = [];
	if(turnArray[0] > 0){
		identifier[0] = 1;
		identifier[1] = Math.abs(turnArray[0])-1;
		// console.log(heroSpriteArray[Math.abs(turnArray[0]-1)].identifier);
	}else{
		identifier[0] = -1;
		identifier[1] = Math.abs(turnArray[0])-1;
		// console.log(enemySpriteArray[Math.abs(turnArray[0]-1)].identifier);
	}
	// console.log(identifier);
	selectCreature(identifier, turnArray2[0]);
	turnArray.shift();
	turnArray2.shift();
}

function selectCreature(identifier, object2){	
	// console.log("Creature speed:" + heroArray[identifier[1]].statMod[6]);

	// if(identifier[0] > 0){
	// 	heroArray[identifier[1]].healthBar.turn.visible = false;
	// }else{
	// 	enemyArray[identifier[1]].healthBar.turn.visible = false;
	// }	

	//Direction x Index+1
	selectedVita = identifier[0] * (identifier[1]+1);
	selectedVita2 = object2;
	console.log("///////////////////////////////////////////////");
	console.log("Turn: " + selectedVita);
	console.log("Turn: " + selectedVita2.name);
	//Reset the skillContainers
	skillContainerArray.forEach(skillContainer=>{
		skillContainer.selected.visible = false;
		skillContainer.disable.visible = true;
		skillContainer.buttonMode = false;
		skillContainer.interactive = false;
		skillContainer.markerTargetSeveralContainer.visible = false;
	});

	enemyArray.forEach(object=>{
		object.healthBar.select.visible = false;
		object.healthBar.target.visible = false;
		object.healthBar.heal.visible = false;
		object.healthBar.move.visible = false;
		object.healthBar.select.animate = false;
	});
	heroArray.forEach(object=>{
		object.healthBar.select.visible = false;
		object.healthBar.target.visible = false;
		object.healthBar.heal.visible = false;
		object.healthBar.move.visible = false;
		object.healthBar.select.animate = false;
	});

	var newSkills = [];
	var currPos = [];

	object2.healthBar.turn.visible = false;
	object2.healthBar.select.visible = true;
	object2.healthBar.select.animate = true;

	object2.skills.forEach(skillID=>{
		newSkills.push(skillID);
	});

	if(object2.size == 1){
		currPos.push(object2.pos);
	}else if(object2.size == 2){
		currPos.push(object2.pos);
		currPos.push(object2.pos+1);
	}

	
	// if(identifier[0] < 0){
		// enemyArray[identifier[1]].healthBar.select.visible = true;
		// enemyArray[identifier[1]].healthBar.select.animate = true;
		// enemyArray[identifier[1]].skills.forEach(skillID => {
		// 	newSkills.push(skillID);
		// });
		// if(enemyArray[identifier[1]].size == 1){
		// 	currPos.push(enemyArray[identifier[1]].pos);
		// }else if(enemyArray[identifier[1]].size == 2){
		// 	currPos.push(enemyArray[identifier[1]].pos);
		// 	currPos.push(enemyArray[identifier[1]].pos+1);
		// }
	// }else{
		// heroArray[identifier[1]].healthBar.select.visible = true;
		// heroArray[identifier[1]].healthBar.select.animate = true;
		// heroArray[identifier[1]].skills.forEach(skillID => {
		// 	newSkills.push(skillID);
		// });
	// 	if(heroArray[identifier[1]].size == 1){
	// 		currPos.push(heroArray[identifier[1]].pos);
	// 	}else if(heroArray[identifier[1]].size == 2){
	// 		currPos.push(heroArray[identifier[1]].pos);
	// 		currPos.push(heroArray[identifier[1]].pos+1);
	// 	}
	// }

	
	
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

function resizeStatus(item){
	var resizeHeight = 40;
	var statusSpacing = 5;
	
	if(app.screen.width < 860){
		resizeHeight = 20;
		statusSpacing = 2;
	}else if(app.screen.width < 1366){
		resizeHeight = 30;
		statusSpacing = 4;
	}else{
		resizeHeight = 40;
		statusSpacing = 5;
	}
	
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


function updateDamage(object, effective, skillCrit, critTracker, dmgArray, skillHeal, statusNumArray, skillStatus){
	var totalDmgCalc = 0;
	dmgArray.forEach(dmg => {
		totalDmgCalc += dmg;
	});

	if(skillHeal){
		object.heal(totalDmgCalc);			//add heal
	}else{
		object.damage(totalDmgCalc);		//subtract damage
	}

	object.dmgContainer.dmgPopup.dmgEffective.visible = true;
	object.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
		dmgNumArrayItem.style.fill = '#D80000';
		dmgNumArrayItem.style.stroke = '#222222';
		dmgNumArrayItem.visible = false;
	});

	object.dmgContainer.dmgStatus.statusImageArray.forEach(dmgStatusImageItem =>{
		dmgStatusImageItem.visible = false;
	});
	object.dmgContainer.dmgStatus.statusTextArray.forEach(dmgStatusTextItem =>{
		dmgStatusTextItem.visible = false;
	});

	if(effective == 0.25){
		object.dmgContainer.dmgPopup.dmgEffective.text = "Resist  ×0.25";
		object.dmgContainer.dmgPopup.dmgEffective.style.fill = '#9D9D9D';
		object.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
			dmgNumArrayItem.style.fill = '#9D9D9D';
		});
	}else if(effective == 0.5){
		object.dmgContainer.dmgPopup.dmgEffective.text = "Resist  ×0.5";
		object.dmgContainer.dmgPopup.dmgEffective.style.fill = '#FFFFFF';
		object.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
			dmgNumArrayItem.style.fill = '#FFFFFF';
		});
	}else if(effective == 2){
		object.dmgContainer.dmgPopup.dmgEffective.text = "SUPER  ×2";
		object.dmgContainer.dmgPopup.dmgEffective.style.fill = '#FFE81C';
		object.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
			dmgNumArrayItem.style.fill = '#FFE81C';
		});
	}else if(effective == 4){
		object.dmgContainer.dmgPopup.dmgEffective.text = "ULTRA  ×4";
		object.dmgContainer.dmgPopup.dmgEffective.style.fill = '#DB00FF';
		object.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
			dmgNumArrayItem.style.fill = '#DB00FF';
		});
	}else if(effective == 0){
		object.dmgContainer.dmgPopup.dmgEffective.text = "MISS!";
		object.dmgContainer.dmgPopup.dmgEffective.style.fill = '#D80000';
		object.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
			dmgNumArrayItem.style.fill = '#D80000';
		});
	}else{
		object.dmgContainer.dmgPopup.dmgEffective.visible = false;
	}
	
	if(skillCrit){
		var critTotal = 0;
		dmgArray.forEach((dmgArrayNum, dmgArrayIndex) => {
			if(critTracker[dmgArrayIndex] == 1)		critTotal = critTotal + (dmgArrayNum/3)
		});

		object.criticalHit(Math.floor(critTotal));

		var newCritWidth = -(object.healthBar.outer.width * (object.critDmg/object.overallHP));

		TweenMax.fromTo(object.healthBar.critDmgBar
			, 1, {
				width: object.healthBar.critDmgBar.width
			}, {delay: 1.75, ease:Expo.easeIn, width:newCritWidth});

		object.dmgContainer.dmgPopup.dmgNumArray.forEach((dmgNumArrayItem, dmgNumArrayIndex) =>{
			if(critTracker[dmgNumArrayIndex] == 1){
				dmgNumArrayItem.style.fill = '#ff7b00';
				dmgNumArrayItem.style.stroke = '#4E2600';
			}
		});
	}

	if(skillHeal){
		object.dmgContainer.dmgPopup.dmgNumArray.forEach(dmgNumArrayItem =>{
			dmgNumArrayItem.style.fill = '#1bc617';
			dmgNumArrayItem.style.stroke = '#052805';
		});

		var newWidth = (object.healthBar.outer.width * (object.hp/object.overallHP)) - object.healthBar.inner.width;

		object.healthBar.dmgBarContainer.x = object.healthBar.inner.width;
		object.healthBar.dmgBarContainer.dmgBar.visible = true;
		var tween = new TimelineMax({onComplete: function(){
			object.healthBar.dmgBarContainer.dmgBar.visible = false;	
			object.healthBar.dmgBarContainer.dmgBar.alpha = 0.9;
		}});
		tween.fromTo(object.healthBar.dmgBarContainer.dmgBar
			, 1 , {width: 0}, {ease:Expo.easeIn, width:newWidth, onComplete:function(){
				object.healthBar.inner.width = object.healthBar.outer.width * (object.hp/object.overallHP);
			}});
		tween.to(object.healthBar.dmgBarContainer.dmgBar
			, 1, {ease:Expo.easeIn, alpha:0});
	}else{
		var newWidth = object.healthBar.inner.width - (object.healthBar.outer.width * (object.hp/object.overallHP));

		object.healthBar.dmgBarContainer.dmgBar.width = newWidth;
		object.healthBar.dmgBarContainer.dmgBar.visible = true;
		TweenMax.fromTo(object.healthBar.dmgBarContainer.dmgBar
			, 1, {
				width: newWidth
			}, {delay: 1.75, ease:Expo.easeIn, width:0, onComplete: function(){
			object.healthBar.dmgBarContainer.dmgBar.visible = false;
		}});

		object.healthBar.dmgBarContainer.x = object.healthBar.outer.width * (object.hp/object.overallHP);
		object.healthBar.inner.width = object.healthBar.outer.width * (object.hp/object.overallHP);
	}

	if(skillStatus){
		statusNumArray.forEach((statusNumber, statusNumberIndex)=>{
			object.dmgContainer.dmgStatus.statusImageArray[statusNumberIndex].visible = true;
			object.dmgContainer.dmgStatus.statusTextArray[statusNumberIndex].visible = true;
			let newStatusEffect = statusEffectSprite(statusNumber);
			updateDmgStatus(object.dmgContainer, statusNumber, statusNumberIndex);
			newStatusEffect.visible = false;
			object.healthBar.addChild(newStatusEffect);
			object.statusSpriteArray.push(newStatusEffect);
			object.statusArray.push(statusNumber);
		});
		resizeStatus(object);
	}

	object.healthBar.textHP.text = object.hp + " / " + object.EHP;

	dmgArray.forEach((dmgArrayNum, dmgArrayIndex) => {
		object.dmgContainer.dmgPopup.dmgNumArray[dmgArrayIndex].visible = true;
		object.dmgContainer.dmgPopup.dmgNumArray[dmgArrayIndex].text = dmgArrayNum;
	});

	object.dmgContainer.dmgPopup.tween.play(0);
}