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