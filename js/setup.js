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

	sound = resources.battle_theme2.sound;
	sound.loop = true;

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
			], skill: item.skill, items: item.items, hero: item.hero
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
			], skill: item.skill, items: item.items, hero: item.hero
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
		skillContainer.identifier = [i , 1, 1];
		
		let skillName = new Text(skillList.data.skill[1].name, {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe});
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
		
		var skillElement = new PIXI.Sprite(getTextureElement(skillList.data.skill[1].element));

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

	var infoHeaders = ["Species:", "Level:", "Element:"];
	for(var i = 0; i < 5; i++){
		if(i%2 == 0){
			infoTextObject(info_main_text, creatureInfoMain, 2, infoHeaders[i/2]);	
		}else{
			infoTextObject(info_main_text, creatureInfoMain, 1);
		}	
	}

	// let info_main_name1 = infoTextObject(info_main_text, creatureInfoMain, 2, "Species:");
	// let info_main_name2 = infoTextObject(info_main_text, creatureInfoMain, 1);
	// let info_main_level1 = infoTextObject(info_main_text, creatureInfoMain, 2, "Level:");
	// let info_main_level2 = infoTextObject(info_main_text, creatureInfoMain, 1);
	// let info_main_element1 = infoTextObject(info_main_text, creatureInfoMain, 2, "Element:");

	var info_main_element = [];
	infoTextObject(info_main_element, creatureInfoMain, 1);
	infoTextObject(info_main_element, creatureInfoMain, 1);

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

	infoTextObject(info_main_text, creatureInfoMain, 2, "Experience:");
	infoTextObject(info_main_text, creatureInfoMain, 1);
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
	creatureInfo.info_main_expPercentage = 0;

	infoTextObject(info_main_text, creatureInfoMain, 2, "Description:");
	infoTextObject(info_main_text, creatureInfoMain, 3);

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

	var skillHeaders = ["Power:", "Accuracy:", "Type:", "Description:"];
	for(var i = 0; i < 7; i++){
		if(i%2 == 0)			infoTextObject(info_skill_text, creatureInfoSkill, 2, skillHeaders[i/2]);	
		else					infoTextObject(info_skill_text, creatureInfoSkill, 1);
	}

	// let info_skill_power1 = infoTextObject(info_skill_text, creatureInfoSkill, 2, "Power:");
	// let info_skill_power2 = infoTextObject(info_skill_text, creatureInfoSkill, 1);
	// let info_skill_acc1 = infoTextObject(info_skill_text, creatureInfoSkill, 2, "Accuracy:");
	// let info_skill_acc2 = infoTextObject(info_skill_text, creatureInfoSkill, 1);
	// let info_skill_type1 = infoTextObject(info_skill_text, creatureInfoSkill, 2, "Type:");
	// let info_skill_type2 = infoTextObject(info_skill_text, creatureInfoSkill, 1);
	// let info_skill_des1 = infoTextObject(info_skill_text, creatureInfoSkill, 2, "Description:");
	infoTextObject(info_skill_text, creatureInfoSkill, 3);

	creatureInfo.info_skill_text = info_skill_text;

	var itemHeaders = ["Name:", "Type:", "Category:", "Description:"];
	for(var i = 0; i < 7; i++){
		if(i%2 == 0)			infoTextObject(info_item_text, creatureInfoItem, 2, itemHeaders[i/2]);	
		else					infoTextObject(info_item_text, creatureInfoItem, 1);
	}
	// let info_item_name1 = infoTextObject(info_item_text, creatureInfoItem, 2, "Name:");
	// let info_item_name2 = infoTextObject(info_item_text, creatureInfoItem, 1);
	// let info_item_type1 = infoTextObject(info_item_text, creatureInfoItem, 2, "Type:");
	// let info_item_type2 = infoTextObject(info_item_text, creatureInfoItem, 1);
	// let info_item_cat1 = infoTextObject(info_item_text, creatureInfoItem, 2, "Category:");
	// let info_item_cat2 = infoTextObject(info_item_text, creatureInfoItem, 1);
	// let info_item_des1 = infoTextObject(info_item_text, creatureInfoItem, 2, "Description:");
	infoTextObject(info_item_text, creatureInfoItem, 3);

	creatureInfo.info_item_text = info_item_text;

	var infoItemArray = [];
	var infoItemSprite = [];
	var infoItemBG = [];
	creatureInfo.infoItemArray = infoItemArray;
	creatureInfo.infoItemSprite = infoItemSprite;
	creatureInfo.infoItemBG = infoItemBG;
	var infoItemHeight = (app.screen.width/18)*2 + 10;
	var infoItemWidth = infoItemHeight/2;

	for(var i = 0; i < 2; i++){
		let itemBG = new PIXI.Graphics();
		itemBG.beginFill(0x222222).drawRect(0, 0, infoItemWidth, infoItemHeight);
		creatureInfo.item.addChild(itemBG);
		infoItemBG.push(itemBG);

		let itemRect = new PIXI.Graphics();
		let itemSelectFill = new PIXI.Graphics();
		let itemSelectStroke = new PIXI.Graphics();

		const itemContainer = new PIXI.Container();
		const itemSelect = new PIXI.Container();
		
		// make the button interactive...
		// itemContainer.itemID = item;
		itemContainer.buttonMode = true;
		itemContainer.interactive = false;
		itemContainer
		// set the mousedown and touchstart callback...
		.on('pointerdown', onInfoItemDown);

		itemRect.beginFill(0x222222).drawRect(0, 0, infoItemWidth, infoItemHeight);

		itemContainer.addChild(itemRect);
		itemContainer.rect = itemRect;

		itemSelectStroke.beginFill(0xFFD600).drawRect(0, 0, infoItemWidth, infoItemHeight);
		itemSelectFill.beginFill(0x222222).drawRect(0, 0, infoItemWidth-skillSelectPadding*2, infoItemHeight-skillSelectPadding*2);

		itemSelect.addChild(itemSelectStroke);
		itemSelect.addChild(itemSelectFill);
		itemSelect.stroke = itemSelectStroke;
		itemSelect.fill = itemSelectFill;

		itemContainer.addChild(itemSelect);
		itemContainer.selected = itemSelect;

		let spriteItem = new PIXI.Sprite(resources['blank'].texture);
		itemContainer.addChild(spriteItem);
		infoItemSprite.push(spriteItem);

		itemContainer.selected.visible = false;

		creatureInfo.item.addChild(itemContainer);

		// itemContainer.x = (itemIndex%2 == 0 ? 0 : infoItemWidth + 10);
		infoItemArray.push(itemContainer);
	}
	infoItemArray[0].selected.visible = true;

	for(var i = 0; i < 31; i++){
		var info_stat = new Text(i, {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
		if(i%4 == 0 && i < 27){
			info_stat.anchor.set(1,0.5);
		}else{
			info_stat.anchor.set(0.5,0.5);
		}
		info_stat_text.push(info_stat);
		creatureInfoStat.addChild(info_stat);
	}

	info_stat_text[0].text = "Health points:";
	info_stat_text[4].text = "Dodge:";
	info_stat_text[8].text = "Physical attack:";
	info_stat_text[12].text = "Physical defense:";
	info_stat_text[16].text = "Special attack:";
	info_stat_text[20].text = "Special defense:";
	info_stat_text[24].text = "Speed:";
	info_stat_text[28].text = "Base";
	info_stat_text[29].text = "Allocated";
	info_stat_text[30].text = "Total";

	// var info_stat_increase = [];
	// var info_stat_maxed = [];
	// for(var i = 0; i < 7; i++){
	// 	const creatureStatIncrease = new PIXI.Container();
	// 	creatureStatIncrease.identifier = i;
	// 	var info_stat_increaseIcon = new PIXI.Sprite(resources.icon_plus.texture);
	// 	info_stat_increaseIcon.width = app.screen.height/25;
	// 	info_stat_increaseIcon.height = app.screen.height/25;
	// 	// info_stat_increaseIcon.x = -info_stat_increaseIcon.width;
	// 	info_stat_increaseIcon.anchor.set(0,0.5);
	// 	creatureStatIncrease.addChild(info_stat_increaseIcon);
	// 	var info_stat_increaseText = new Text("Increase", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'right'});
	// 	var info_stat_maxedText = new Text("Maxed", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xFFD600, align : 'right'});

	// 	info_stat_increaseText.x = info_stat_increaseIcon.width + app.screen.width/100;
	// 	info_stat_maxedText.x = info_stat_increaseIcon.width + app.screen.width/100;
	// 	info_stat_increaseText.anchor.set(0,0.5);
	// 	info_stat_maxedText.anchor.set(0,0.5);
	// 	// info_item_text.push(info_stat_increaseIcon);
	// 	creatureStatIncrease.addChild(info_stat_increaseText);
	// 	// info_stat_increaseIcon.y = info_stat_increaseText.height/2;
	// 	creatureStatIncrease.buttonMode = true;
	//     	creatureStatIncrease.interactive = true;
	// 	creatureStatIncrease
	//         // set the mousedown and touchstart callback...
	//         .on('pointerdown', onBtnStatUp);
	//     creatureStatIncrease.increaseText = info_stat_increaseText;
	//     creatureStatIncrease.increaseIcon = info_stat_increaseIcon;
	//     info_stat_increase.push(creatureStatIncrease);
	//     info_stat_maxed.push(info_stat_maxedText);
	// 	creatureInfoStat.addChild(creatureStatIncrease);
	// 	creatureInfoStat.addChild(info_stat_maxedText);
	// }

	// creatureInfo.info_stat_increase = info_stat_increase;
	// creatureInfo.info_stat_maxed = info_stat_maxed;
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

	mapBG = new PIXI.Graphics();
	mapBG.beginFill(0x939393);
	mapBG.drawRect(0, 0, 1920, 1080);
	mapBG.endFill();
	app.stage.addChild(mapBG);

	// mapBG.interactive = true;
	// mapBG.buttonMode = true;
	// mapBG
	// 	// events for drag start
	// 	.on('mousedown', onMapDown)
	// 	.on('touchstart', onMapDown);

	

	stageContainer.visible = false;
	turnText.visible = false;
	interfaceHolder.visible = false;

	playerPos = [17,13];
	travelMechanic = 3;			//0 = walking, 1 = boots, 2 = mounted, 3 = flying
	surfMechanic = 0;			//0 = surf, 1 = surf+
	canSurf = true;
	// var playerPos = [0,1];

	let sizeTile = new PIXI.Sprite(resources.tile_move1.texture);
	sizeTile.scale.set(sizeScale);
	mapHolder.tileWidth = sizeTile.width;
	mapHolder.tileHeight = sizeTile.height;

	for(var i = 0; i < 44; i++){
		for(var j = 0; j < 50; j++){
			var discovered = (playerMapList.data.maps[0].tiles[i][j] > 0 ? true : false);
			var travelled = (playerMapList.data.maps[0].tiles[i][j] == 2 ? true : false);
			// var discovered = false;
			// var travelled = false;
			// if(playerMapList.data.maps[0].tiles[i][j] == 1){
			// 	discovered = true;	
			// }
			// else if(playerMapList.data.maps[0].tiles[i][j] == 2){
			// 	discovered = true;
			// 	travelled = true;
			// }	
			const newTile = new Tile({
				id: mapList.data.maps[0].tiles[i][j],
				pos: [j,i],
				discovered: discovered,
				travelled: travelled
			});
			tileArray.push(newTile);
		}
	}

	tileArray.forEach((item, itemIndex) =>{
		createTile(item, itemIndex)
	});

	showTraversable();

	let veelaTile1 = new PIXI.Sprite(resources.tile_veela1.texture);
	// veelaTile1.scale.set(sizeScale);
	veelaTile1.anchor.set(0.5,0.5);
	veelaTile1.x = veelaTile1.width/2;
	veelaTile1.y = -(veelaTile1.height/2);
	let veelaTile2 = new PIXI.Sprite(resources.tile_veela2.texture);
	// veelaTile2.scale.set(sizeScale);
	veelaTile2.anchor.set(0.5,0.5);
	veelaTile2.alpha = 0;
	veelaTile2.x = veelaTile2.width/2;
	veelaTile2.y = -(veelaTile2.height/2);

	let encounterMarker = new PIXI.Sprite(resources.encounterMarker.texture);
	encounterMarker.scale.set(0);
	encounterMarker.anchor.set(0.5,1);
	encounterMarker.x = veelaTile2.width/2;
	encounterMarker.y = -veelaTile2.height;
	veelaHolder.addChild(encounterMarker);
	veelaHolder.marker = encounterMarker;

	var markerTween = new TimelineMax({paused: true});
	markerTween.to(encounterMarker.scale, 0.1, {x:1.1, y: 1.1, ease:Sine.easeInOut});
	markerTween.to(encounterMarker.scale, 0.1, {x:1, y: 1, ease:Sine.easeInOut, onComplete: function(){
		encounterHolder.bgTween.play(0);
	}});
	encounterMarker.tween = markerTween;

	var veelaTileTween = new TimelineMax({repeat:-1, repeatDelay:0.2});
	veelaTileTween.to(veelaTile2.scale, 1, {x: 1.1, y: 1.1, ease:Sine.easeInOut, repeat: 1, yoyo: true});
	veelaTileTween.to(veelaTile2, 1, {alpha: 1, ease:Sine.easeInOut, repeat: 1, yoyo: true},0);
	// veelaHolder.tween = veelaTileTween;
	// veelaHolder.veela2 = veelaTile2;
	veelaHolder.addChild(veelaTile2);
	veelaHolder.addChild(veelaTile1);

	mapHolder.addChild(veelaHolder);

	veelaHolder.scale.set(sizeScale);
	veelaHolder.x = playerPos[0] * mapHolder.tileWidth * 3/4;
	veelaHolder.y = (playerPos[1]+1) * mapHolder.tileHeight - ((playerPos[0]%2)*mapHolder.tileHeight)/2;

	// createEdgeTiles(veelaHolder);
	// veelaHolder.x = playerPos[0]
	mapHolder.veela = veelaHolder;

	mapHolder.interactive = true;
	mapHolder.buttonMode = true;

	// setup events
    mapHolder
        // events for drag start
        .on('mousedown', onDragStart)
        .on('touchstart', onDragStart)
        // events for drag end
        .on('mouseup', onDragEnd)
        .on('mouseupoutside', onDragEnd)
        .on('touchend', onDragEnd)
        .on('touchendoutside', onDragEnd)
        // events for drag move
        .on('mousemove', onDragMove)
        .on('touchmove', onDragMove);

	app.stage.addChild(mapHolder);

	// var centerGraphic = new PIXI.Sprite(textureAdditionalItem);
	// centerGraphic.beginFill(0xff0000);
	// centerGraphic.beginFill(0x00ff00);
	// centerGraphic.beginFill(0x0000ff);
	// centerGraphic.drawRect(0, 0, 100, 100);
	// centerGraphic.endFill();
	// mapHolder.addChild(centerGraphic);
	// centerGraphic.x = 0;
	// centerGraphic.y = -200;

	var sceneSwitch = new PIXI.Sprite(textureAdditionalItem);
	mapHolder.addChild(sceneSwitch);
	sceneSwitch.x = 0;
	sceneSwitch.y = -200;	
	sceneSwitch.interactive = true;
	sceneSwitch.buttonMode = true;
	sceneSwitch
		// events for drag start
		.on('mousedown', onSwitchDown)
		.on('touchstart', onSwitchDown);
	var switchText = new Text("Switch to battle scene", {fontFamily : styleFontFamily, fontSize: 36, fill : 0x000000});
	// travelSwitchText.anchor.set(1, 0);
	mapHolder.addChild(switchText);
	switchText.x = 100;
	switchText.y = -200;

	var travelSwitch = new PIXI.Sprite(textureAdditionalMove);
	mapHolder.addChild(travelSwitch);
	travelSwitch.x = 0;
	travelSwitch.y = -300;
	travelSwitch.interactive = true;
	travelSwitch.buttonMode = true;
	travelSwitch
		// events for drag start
		.on('mousedown', onTravelSwitchDown)
		.on('touchstart', onTravelSwitchDown);

	travelSwitchText = new Text("Walking", {fontFamily : styleFontFamily, fontSize: 36, fill : 0x000000});
	// travelSwitchText.anchor.set(1, 0);
	mapHolder.addChild(travelSwitchText);
	travelSwitchText.x = 100;
	travelSwitchText.y = -300;

	var surfSwitch = new PIXI.Sprite(textureAdditionalMove);
	mapHolder.addChild(surfSwitch);
	surfSwitch.x = 0;
	surfSwitch.y = -400;
	surfSwitch.interactive = true;
	surfSwitch.buttonMode = true;
	surfSwitch
		// events for drag start
		.on('mousedown', onSurfSwitchDown)
		.on('touchstart', onSurfSwitchDown);

	surfSwitchText = new Text("Surf", {fontFamily : styleFontFamily, fontSize: 36, fill : 0x000000});
	// surfSwitchText.anchor.set(1, 0);
	mapHolder.addChild(surfSwitchText);
	surfSwitchText.x = 100;
	surfSwitchText.y = -400;

	app.stage.addChild(encounterHolder);

	var encounterBG = new PIXI.Graphics();
	encounterBG.beginFill(0x000000);
	encounterBG.drawRect(0, 0, 100, 100);
	encounterBG.endFill();
	encounterBG.alpha = 0;
	encounterHolder.addChild(encounterBG);
	encounterHolder.bg = encounterBG;

	var encounterTextBox = new PIXI.Container();
	encounterHolder.addChild(encounterTextBox);
	encounterHolder.textBox = encounterTextBox;
	encounterHolder.textBox.y = app.screen.height*2/3;

	var textRect = new PIXI.Graphics();
	textRect.beginFill(0x111111);
	// textRect.drawRect(margin, 0, app.screen.width-(2*margin), (app.screen.height/3)-margin);
	textRect.drawRect(0, 0, 100, 100);
	textRect.endFill();
	textRect.alpha = 0;
	encounterTextBox.addChild(textRect);
	encounterTextBox.rect = textRect;

	encounterBlackTween = new TimelineMax({paused: true});
	encounterBlackTween.to(encounterBG, 0.167, {delay: 0.33, alpha:0.75, ease:Sine.easeInOut});
	// encounterBlackTween.to(textRect, 0.167, {alpha:0.85},0);
	encounterBlackTween.to(textRect, 0.167, {delay: 0.33, alpha:0.85, ease:Sine.easeInOut, onComplete: function(){
		encounterBtn1.visible = true;
		encounterText.tween.play(0);
	}},0);
	encounterHolder.bgTween = encounterBlackTween;

	// var textBoxMargin = 20;
	let encounterText = new Text("Herbalist Kora wants to battle!", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'left', wordWrap:true, wordWrapWidth:100});
	encounterText.alpha = 0;
	encounterTextBox.addChild(encounterText);
	encounterTextBox.textObj = encounterText;
	// encounterTextBox.textObj.x = margin + textBoxMargin;
	// encounterTextBox.textObj.y = textBoxMargin;

	encounterTextTween = new TimelineMax({paused: true});
	encounterTextTween.to(encounterText, 0.167, {alpha:1, ease:Sine.easeInOut});
	encounterText.tween = encounterTextTween;

	let btnRect = new PIXI.Graphics();
	const encounterBtn1 = new PIXI.Container();
	
	// make the button interactive...
	encounterBtn1.buttonMode = true;
	encounterBtn1.interactive = true;
	encounterBtn1
	// set the mousedown and touchstart callback...
	.on('pointerdown', onEncounterDown);	
	encounterBtn1.identifier = [i];
	let btnText = new Text("Fight", {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align : 'center'});
	btnText.anchor.set(0.5, 0.5);
	
	btnRect.beginFill(0x636363).drawRect(-100, -25, 200, 50);
	btnRect.x = 0;
	btnRect.y = 0;
	
	encounterBtn1.addChild(btnRect);
	encounterBtn1.rect = btnRect;
	encounterBtn1.addChild(btnText);
	encounterBtn1.btnText = btnText;

	// encounterBtn1.x = app.screen.width/2;
	// encounterBtn1.y = app.screen.height/5;

	encounterBtn1.visible = false;
	// encounterBtn1.x = app.screen.width-margin-textBoxMargin-100;
	// encounterBtn1.y = (app.screen.height/3)-margin-textBoxMargin-25;

	encounterTextBox.addChild(encounterBtn1);
	encounterTextBox.btn1 = encounterBtn1;

	//Resize the screen
	window.addEventListener('resize', resize);

	resize();


	// mapHolder

	onSwitchDown();

	// heroArray[1].action.sprite_s_back.alpha = 1;
	// heroArray[1].action.sprite_s_back.visible = true;
	// heroArray[1].action.sprite_s_main.alpha = 1;
	// heroArray[1].action.sprite_s_main.visible = true;
	// heroArray[1].action.sprite_s_top.alpha = 1;
	// heroArray[1].action.sprite_s_top.visible = true;

	// heroArray[1].action.sprite_s_ready.x = -100;
	// heroArray[1].action.sprite_s_ready.y = 0;
	heroArray[1].action.sprite_s_back.x = -300;
	heroArray[1].action.sprite_s_back.y = -75;
	heroArray[1].action.sprite_s_main.x = 100;
	heroArray[1].action.sprite_s_main.y = 0;
	heroArray[1].action.sprite_s_top.x = 1425;
	heroArray[1].action.sprite_s_top.y = 0;

	state = play;
	
	app.ticker.add(delta => gameLoop(delta));

	calculateTurnOrder();
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
	creatureAction.sprite_p_ready = sprite_p_ready;
	creatureAction.addChild(sprite_p_ready);

	var sprite_p_back = new PIXI.Sprite(resources[item.code + '_p_back'].texture);
	sprite_p_back.anchor.set(1);
	sprite_p_back.alpha = 0;
	sprite_p_back.visible = false;
	creatureAction.sprite_p_back = sprite_p_back;
	creatureAction.addChild(sprite_p_back);
	creatureAction.fxBack = sprite_p_back;

	var sprite_p_main = new PIXI.Sprite(resources[item.code + '_p_main'].texture);
	sprite_p_main.anchor.set(1);
	sprite_p_main.visible = false;
	creatureAction.sprite_p_main = sprite_p_main;
	creatureAction.addChild(sprite_p_main);

	var sprite_p_top = new PIXI.Sprite(resources[item.code + '_p_top'].texture);
	sprite_p_top.anchor.set(1);
	sprite_p_top.alpha = 0;
	sprite_p_top.visible = false;
	creatureAction.sprite_p_top = sprite_p_top;
	creatureAction.addChild(sprite_p_top);
	creatureAction.fxTop = sprite_p_top;

	var sprite_s_ready = new PIXI.Sprite(resources[item.code + '_s_ready'].texture);
	sprite_s_ready.anchor.set(1);
	sprite_s_ready.alpha = 0;
	creatureAction.sprite_s_ready = sprite_s_ready;
	creatureAction.addChild(sprite_s_ready);

	var sprite_s_back = new PIXI.Sprite(resources[item.code + '_s_back'].texture);
	sprite_s_back.anchor.set(1);
	sprite_s_back.alpha = 0;
	sprite_s_back.visible = false;
	creatureAction.sprite_s_back = sprite_s_back;
	creatureAction.addChild(sprite_s_back);
	creatureAction.fxBack = sprite_s_back;

	var sprite_s_main = new PIXI.Sprite(resources[item.code + '_s_main'].texture);
	sprite_s_main.anchor.set(1);
	sprite_s_main.visible = false;
	creatureAction.sprite_s_main = sprite_s_main;
	creatureAction.addChild(sprite_s_main);

	var sprite_s_top = new PIXI.Sprite(resources[item.code + '_s_top'].texture);
	sprite_s_top.anchor.set(1);
	sprite_s_top.alpha = 0;
	sprite_s_top.visible = false;
	creatureAction.sprite_s_top = sprite_s_top;
	creatureAction.addChild(sprite_s_top);
	creatureAction.fxTop = sprite_s_top;

	var sprite_d_ready = new PIXI.Sprite(resources[item.code + '_d_ready'].texture);
	sprite_d_ready.anchor.set(1);
	sprite_d_ready.alpha = 0;
	
	creatureAction.addChild(sprite_d_ready);

	// sprite_d_ready.x = 500;
	// sprite_d_ready.y = 0;

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

	actionContainer.addChild(creatureAction);

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
		sprite_skillFX.visible = false;
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

	// var sprite_skillFX = new PIXI.Sprite(resources['skill_fire_flareup'].texture);
	// var sprite_skillFX = new PIXI.Sprite(resources['skill_wind_aeropush'].texture);
	// var sprite_skillFX = new PIXI.Sprite(resources['skill_storm_lightningstrike'].texture);
	var sprite_skillFX = new PIXI.Sprite(resources['blank'].texture);
	sprite_skillFX.anchor.set(0.5,1);
	sprite_skillFX.visible = false;
	dmgContainer.addChild(sprite_skillFX);
	dmgContainer.skillFX = sprite_skillFX;

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
		// let statusEffect = statusEffectSprite(status);
		let statusEffect = new PIXI.Sprite(getTextureStatus(status));
		healthBar.addChild(statusEffect);
		item.statusSpriteArray.push(statusEffect);
	});	
	
	let textHP = new Text(item.hp + " / " + item.EHP, {fontFamily : styleFontFamily, fontSize: 24, fill : 0xfefefe, align : 'center'});
	textHP.anchor.set(0.5);

	healthBar.addChild(textHP);
	healthBar.textHP = textHP;

	const select = createIndicatorBar(0xFFD600, healthBar);
	const target = createIndicatorBar(0xFF392F, healthBar);
	const heal = createIndicatorBar(0x28F828, healthBar);
	const move = createIndicatorBar(0x6ee4ff, healthBar);
	var selectTween = new TimelineMax({paused:true, repeat:-1});
	select.animate = selectTween;
	healthBar.select = select;
	healthBar.target = target;
	var healTween = new TimelineMax({paused:true, repeat:-1});
	heal.animate = healTween;
	healthBar.heal = heal;
	healthBar.move = move;
	
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

function infoTextObject(textArray, mainContaier, adjustment, text=""){
	let textObject;
	switch(adjustment){
		case 1:
			textObject = new Text(text, {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align: 'left'});
			break;
		case 2:
			textObject = new Text(text, {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align: 'right'});
			textObject.anchor.set(1,0);
			break;
		case 3:
			textObject = new Text(text, {fontFamily : styleFontFamily, fontSize: 28, fill : 0xfefefe, align: 'left', wordWrap: true, wordWrapWidth: 500});
			break;
	}
	textArray.push(textObject);
	mainContaier.addChild(textObject);
	return textObject;	
}

function createIndicatorBar(colour, healthBar){
	const indicatorContainer = new PIXI.Container();
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

	indicatorContainer.addChild(indicatorEnd);
	indicatorContainer.indicatorEnd = indicatorEnd;
	indicatorContainer.addChild(indicatorStart);
	indicatorContainer.indicatorStart = indicatorStart;
	indicatorContainer.addChild(indicatorBar1);
	indicatorContainer.indicatorBar1 = indicatorBar1;
	indicatorContainer.addChild(indicatorBar2);
	indicatorContainer.indicatorBar2 = indicatorBar2;

	healthBar.addChild(indicatorContainer);
	indicatorContainer.visible = false;
	healthBar.healthBarIndicators.push(indicatorContainer);
	return indicatorContainer;
}


/*******************************************
********************************************
*				Create map
********************************************
*******************************************/
function createEdgeTiles(holder){
	const tileContainer = new PIXI.Container();
	let mapTile = new PIXI.Sprite(resources['tile_edge_N'].texture);
	mapTile.scale.set(sizeScale);
	mapTile.anchor.set(0.5,0.5);
	tileContainer.addChild(mapTile);

	// item.pos[0]==j item.pos[1]==i
	tileContainer.interactive = true;
	tileContainer.buttonMode = true;
	
	var points = [
		-mapHolder.tileWidth/4,-mapHolder.tileHeight/2,
		mapHolder.tileWidth/4,-mapHolder.tileHeight/2,
		mapHolder.tileWidth/2,0,
		mapHolder.tileWidth/4,mapHolder.tileHeight/2,
		-mapHolder.tileWidth/4,mapHolder.tileHeight/2,
		-mapHolder.tileWidth/2,0
	];
	tileContainer.hitArea = new PIXI.Polygon(points);

	tileContainer
		// events for drag start
		.on('mousedown', onTileDown)
		.on('touchstart', onTileDown);

	tileContainer.x = mapHolder.tileWidth/2;
	tileContainer.y = - mapHolder.tileHeight - (mapHolder.tileHeight/2);
	holder.addChild(tileContainer);
}

function createTile(item, itemIndex){
	const tileContainer = new PIXI.Container();
	let mapTile, mapBase, mapHidden, mapFog;
	// var ifMountain = false;
	var randTile = Math.floor(Math.random() * Math.floor(3)+1);

	mapHidden = new PIXI.Sprite(resources['tile_hidden'].texture);
	// mapHidden.scale.set(sizeScale);
	mapHidden.anchor.set(0,1);
	tileContainer.hidden = mapHidden;
	tileContainer.addChild(mapHidden);
	const tileImage = new PIXI.Container();
	switch(item.id){
		case 1:
			mapTile = new PIXI.Sprite(resources['tile_water_' + randTile].texture);
			mapBase = new PIXI.Sprite(resources['tile_water_d_base'].texture);
			break;
		case 2:
			mapTile = new PIXI.Sprite(resources['tile_water_' + randTile].texture);
			mapBase = new PIXI.Sprite(resources['tile_water_m_base'].texture);
			break;
		case 3:
			mapTile = new PIXI.Sprite(resources['tile_grass_' + randTile].texture);
			mapBase = new PIXI.Sprite(resources['tile_grass_base'].texture);
			break;
		case 4:
			mapTile = new PIXI.Sprite(resources['tile_bamboo_' + randTile].texture);
			mapBase = new PIXI.Sprite(resources['tile_bamboo_base'].texture);
			break;
		case 5:
			mapTile = new PIXI.Sprite(resources['tile_forest_' + randTile].texture);
			mapBase = new PIXI.Sprite(resources['tile_forest_base'].texture);
			// mapTile = new PIXI.Sprite(resources['tile_forest_4'].texture);
			break;
		case 6:
			mapTile = new PIXI.Sprite(resources['tile_hill_' + randTile].texture);
			mapBase = new PIXI.Sprite(resources['tile_hill_base'].texture);
			break;
		case 7:
			mapTile = new PIXI.Sprite(resources['tile_mountain_' + randTile].texture);
			mapBase = new PIXI.Sprite(resources['tile_mountain_base'].texture);
			// ifMountain = true;
			break;
		case 8:
			mapTile = new PIXI.Sprite(resources['tile_plains_' + randTile].texture);
			mapBase = new PIXI.Sprite(resources['tile_plains_base'].texture);
			break;
		case 9:
			mapTile = new PIXI.Sprite(resources['tile_edge_N'].texture);
			break;
		case 10:
			mapTile = new PIXI.Sprite(resources['tile_edge_NE'].texture);
			break;
		case 11:
			mapTile = new PIXI.Sprite(resources['tile_edge_E'].texture);
			break;
		case 12:
			mapTile = new PIXI.Sprite(resources['tile_edge_SE'].texture);
			break;
		case 13:
			mapTile = new PIXI.Sprite(resources['tile_edge_S'].texture);
			break;
		case 14:
			mapTile = new PIXI.Sprite(resources['tile_edge_SW'].texture);
			break;
		case 15:
			mapTile = new PIXI.Sprite(resources['tile_edge_W'].texture);
			break;
		case 16:
			mapTile = new PIXI.Sprite(resources['tile_edge_NW'].texture);
			break;
		default:
			statusEffectIcon = new PIXI.Sprite(resources.tile_black.texture);	
	}
	if(item.id == 1 || item.id == 2 || item.id == 3 || item.id == 4 || item.id == 5 || item.id == 6 || item.id == 7 || item.id == 8){
		// mapBase.scale.set(sizeScale);
		mapBase.anchor.set(0,1);
		tileImage.addChild(mapBase);
	}
	// mapTile.scale.set(sizeScale);
	mapTile.anchor.set(0,1);
	tileImage.addChild(mapTile);
	tileImage.detail = mapTile;

	mapFog = new PIXI.Sprite(resources['tile_fog'].texture);
	// mapFog.scale.set(sizeScale);
	mapFog.anchor.set(0,1);
	mapFog.visible = false;
	tileImage.addChild(mapFog);
	tileImage.fog = mapFog;

	tileContainer.image = tileImage;
	tileContainer.addChild(tileImage);

	tileContainer.image.visible = (item.discovered ? true : false);
	tileContainer.hidden.visible = (item.discovered ? false : true);

	// if(item.discovered){
	// 	tileContainer.image.visible = true;
	// 	tileContainer.hidden.visible = false;
	// }else{
	// 	tileContainer.image.visible = false;
	// 	tileContainer.hidden.visible = true;
	// }

	// item.pos[0]==j item.pos[1]==i
	tileContainer.interactive = true;
	tileContainer.buttonMode = true;

	let sizeTile = new PIXI.Sprite(resources.tile_move1.texture);
	// sizeTile.scale.set(sizeScale);
	// mapHolder.tileWidth = sizeTile.width;
	// mapHolder.tileHeight = sizeTile.height;
	
	var points = [
		sizeTile.width/4,-sizeTile.height,
		sizeTile.width*3/4,-sizeTile.height,
		sizeTile.width,-sizeTile.height/2,
		sizeTile.width*3/4,0,
		sizeTile.width/4,0,
		0,-sizeTile.height/2
	];
	tileContainer.hitArea = new PIXI.Polygon(points);
	tileContainer
		// events for drag start
		.on('mousedown', onTileDown)
		.on('touchstart', onTileDown);

	let moveTile2 = new PIXI.Sprite(resources.tile_move2.texture);
	// moveTile2.scale.set(sizeScale);
	moveTile2.anchor.set(0,1);
	moveTile2.visible = false;
	tileContainer.addChild(moveTile2);
	tileContainer.moveTile2 = moveTile2;	
	let moveTile1 = new PIXI.Sprite(resources.tile_move1.texture);
	// moveTile1.scale.set(sizeScale);
	moveTile1.anchor.set(0,1);
	moveTile1.visible = false;
	tileContainer.addChild(moveTile1);
	tileContainer.moveTile1 = moveTile1;
	item.sprite = tileContainer;
	tileContainer.object = item;

	// var centerGraphic = new PIXI.Graphics();
	// centerGraphic.beginFill(0xff0000);
	// centerGraphic.drawPolygon(points);
	// centerGraphic.endFill();
	// tileContainer.addChild(centerGraphic);

	// // centerGraphic.x = app.screen.width/2;
	// // centerGraphic.y = app.screen.height/2;
	tileContainer.scale.set(sizeScale); 	
	tileContainer.x = item.pos[0] * mapHolder.tileWidth * 3/4;
	tileContainer.y = (item.pos[1]+1) * mapHolder.tileHeight - ((item.pos[0]%2)*mapHolder.tileHeight)/2;

	// tileContainer.x = app.screen.width/2;
	// tileContainer.x = app.screen.height/2;
	tileSpriteArray.push(tileContainer);
	mapHolder.addChild(tileContainer);
}