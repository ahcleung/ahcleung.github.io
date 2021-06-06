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

	mapBG.width = app.screen.width;
	mapBG.height = app.screen.height;

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
		sizeScale = 0.4;
		margin = app.screen.height/72;
		targetTextFontSize = 12;
		skillNameFontSize = 14;
		hazardSize = 0.35;
		hazardMargin = 20;
	}else if(app.screen.width < 1366){
		sizeScale = 0.5;
		margin = app.screen.height/72;
		targetTextFontSize = 16;
		skillNameFontSize = 18;
		hazardSize = 0.58;
		hazardMargin = 40;
	}else{
		sizeScale = 0.6;
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

	resizeMap();
	resizeEncounter();
	resizeInfo();
	//Console log RESIZE
	consolePrint("RESIZE");
	// consoleScreen.text = "RESIZE\n" + consoleScreen.text;
}

function resizeMap(){
	let sizeTile = new PIXI.Sprite(resources.tile_move1.texture);
	sizeTile.scale.set(sizeScale);
	mapHolder.tileWidth = sizeTile.width;
	mapHolder.tileHeight = sizeTile.height;

	mapHolder.veela.scale.set(sizeScale);
	mapHolder.veela.x = playerPos[0] * mapHolder.tileWidth * 3/4;
	mapHolder.veela.y = (playerPos[1]+1) * mapHolder.tileHeight - ((playerPos[0]%2)*mapHolder.tileHeight)/2;

	mapHolder.x = -(mapHolder.tileWidth*3/4 * playerPos[0]) - (mapHolder.tileWidth/2) + (app.screen.width/2);
	var yAdjust = (playerPos[0]% 2 == 0 ? mapHolder.tileHeight/2 : 0);
	mapHolder.y = -(mapHolder.tileHeight * (playerPos[1])) - yAdjust + (app.screen.height/2);

	tileSpriteArray.forEach((tileContainer, tileIndex)=>{
		tileContainer.scale.set(sizeScale); 	
		tileContainer.x = tileArray[tileIndex].pos[0] * mapHolder.tileWidth * 3/4;
		tileContainer.y = (tileArray[tileIndex].pos[1]+1) * mapHolder.tileHeight - ((tileArray[tileIndex].pos[0]%2)*mapHolder.tileHeight)/2;
	});
}

function resizeEncounter(){
	// -25, -25, app.screen.width+50, app.screen.height+50

	var textBoxMargin = (app.screen.width < 860 ? 10 : 20);
	var textBoxSize = (app.screen.width < 1366 ? 7 : 9.6);

	// encounterHolder.bg.x = 5;
	// encounterHolder.bg.y = 5;
	encounterHolder.bg.width = app.screen.width+20;
	encounterHolder.bg.height = app.screen.height+20;

	encounterHolder.textBox.y = app.screen.height*2/3;

	// textRect.drawRect(margin, 0, app.screen.width-(2*margin), (app.screen.height/3)-margin);
	encounterHolder.textBox.rect.x = margin;
	encounterHolder.textBox.rect.y = 0;
	encounterHolder.textBox.rect.width = app.screen.width-(2*margin);
	encounterHolder.textBox.rect.height = (app.screen.height/3)-margin;

	encounterHolder.textBox.textObj.x = margin + textBoxMargin;
	encounterHolder.textBox.textObj.y = textBoxMargin;
	encounterHolder.textBox.textObj.style.wordWrapWidth = app.screen.width-(margin*2)-(textBoxMargin*2);
	encounterHolder.textBox.textObj.style.fontSize = skillNameFontSize;

	encounterHolder.textBox.btn1.rect.width = app.screen.width/textBoxSize;
	encounterHolder.textBox.btn1.rect.height = encounterHolder.textBox.btn1.rect.width/4;
	encounterHolder.textBox.btn1.x = app.screen.width-margin-textBoxMargin-(encounterHolder.textBox.btn1.rect.width/2);
	encounterHolder.textBox.btn1.y = (app.screen.height/3)-margin-textBoxMargin-(encounterHolder.textBox.btn1.rect.height/2);
	encounterHolder.textBox.btn1.btnText.style.fontSize = skillNameFontSize;

	// encounterHolder.bg.width = app.screen.width;
	// encounterHolder.bg.height = app.screen.height;
}

function resizeInfo(){

	var infoSpacer = app.screen.width/77;
	var infoBtnTextSize = 36;
	var statusMargin = [app.screen.width/20,app.screen.height/17];
	var turnMargin = app.screen.width/192;
	var textOrigin = [app.screen.width/2,app.screen.height/6];
	var infoMainMargin = app.screen.height/20;
	var infoInnerMargin = app.screen.width/19.2;
	var infoSelectPadding = app.screen.width/384;

	infoBtnTextSize = (app.screen.width < 860 ? 16
						: app.screen.width < 1366 ? 26
						: 36);

	creatureInfoSprite.scale.set(app.screen.width/3200);
	creatureInfoSprite.position.set((app.screen.width/4)+(creatureInfoSprite.width/2), app.screen.height*3/4);
	creatureInfo.main.x = textOrigin[0];
	creatureInfo.main.y = textOrigin[1];

	creatureInfo.info_main_text.forEach((text,textIndex) =>{
		text.style.fontSize = skillNameFontSize;
		if(textIndex < 5){
			text.x = (textIndex%2 == 0 ? app.screen.width/15 : app.screen.width/12);
			text.y = (textIndex%2 == 0 ? textIndex * infoMainMargin : (textIndex-1) * infoMainMargin);
		}else{
			text.x = (textIndex%2 == 0 ? app.screen.width/12 : app.screen.width/15);
			text.y = (textIndex%2 == 0 ? textIndex * infoMainMargin : (textIndex+1) * infoMainMargin);
		}
	});

	creatureInfo.info_main_text[8].style.wordWrapWidth = app.screen.width/3;

	creatureInfo.info_main_elementIcon[0].x = app.screen.width/12;
	creatureInfo.info_main_elementIcon[0].y = 4.4*infoMainMargin;
	creatureInfo.info_main_elementIcon[1].x = app.screen.width/5;
	creatureInfo.info_main_elementIcon[1].y = 4.4*infoMainMargin;
	creatureInfo.info_main_elementIcon[0].scale.set(app.screen.height/2160);
	creatureInfo.info_main_elementIcon[1].scale.set(app.screen.height/2160);

	creatureInfo.info_main_element[0].x = app.screen.width/12 + creatureInfo.info_main_elementIcon[0].width + 10;
	creatureInfo.info_main_element[0].y = 4*infoMainMargin;
	creatureInfo.info_main_element[1].x = app.screen.width/5 +  creatureInfo.info_main_elementIcon[1].width + 10;
	creatureInfo.info_main_element[1].y = 4*infoMainMargin;
	creatureInfo.info_main_element[0].style.fontSize = skillNameFontSize;
	creatureInfo.info_main_element[1].style.fontSize = skillNameFontSize;

	creatureInfo.info_main_expBar[0].x = app.screen.width/12;
	creatureInfo.info_main_expBar[1].x = app.screen.width/12;
	creatureInfo.info_main_expBar[0].y = 6.8*infoMainMargin;
	creatureInfo.info_main_expBar[1].y = 6.8*infoMainMargin;
	creatureInfo.info_main_expBar[0].width = creatureInfo.info_main_expPercentage * app.screen.width/3.84;
	creatureInfo.info_main_expBar[1].width = app.screen.width/3.84;
	creatureInfo.info_main_expBar[0].height = app.screen.height/75;
	creatureInfo.info_main_expBar[1].height = app.screen.height/75;

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

	creatureInfo.status.x = textOrigin[0];
	creatureInfo.status.y = textOrigin[1];

	if(creatureInfo.statusIcon != undefined){
		creatureInfo.statusIcon.forEach((icon) =>{
			icon.width = app.screen.width/38;
			icon.height = icon.width;
		});
	}

	if(creatureInfo.statusText != undefined){
		var detailLevel = 0;
		creatureInfo.statusText.forEach((textContainer,containerIndex) =>{
			if(textContainer.y == 0)	detailLevel = 0;
			textContainer.y = statusMargin[1]*detailLevel;
			textContainer.statusContainerText.forEach((text,textIndex)=>{
				text.x = (textIndex == 0 ? creatureInfo.statusIcon[0].width + turnMargin : statusMargin[0]);
				text.y = textIndex*statusMargin[1];
				text.style.fontSize = skillNameFontSize;
				detailLevel++;
			});
		});
	}

	creatureInfo.status.arrowUp.scale.set(app.screen.width/2160);
	creatureInfo.status.arrowDown.scale.set(app.screen.width/2160);
	creatureInfo.status.arrowUp.x = app.screen.width/3;
	creatureInfo.status.arrowUp.y = (app.screen.height*2/5)-textOrigin[1];
	creatureInfo.status.arrowDown.x = app.screen.width/3;
	creatureInfo.status.arrowDown.y = (app.screen.height*3/5)-textOrigin[1];
	
	creatureInfo.skill.x = textOrigin[0];
	creatureInfo.skill.y = textOrigin[1];

	var infoSkillWidth = app.screen.width/4.5;
	var infoSkillHeight = infoSkillWidth/4;
	if(creatureInfo.infoSkillArray != undefined){
		creatureInfo.infoSkillArray.forEach((skillContainer, skillIndex) =>{
			skillContainer.skillName.style.fontSize = skillNameFontSize;
			skillContainer.skillName.x = infoSkillWidth/6;
			skillContainer.skillName.y = infoSkillHeight/3;
			skillContainer.rect.width = infoSkillWidth;
			skillContainer.rect.height = infoSkillHeight;
			skillContainer.selected.stroke.width = infoSkillWidth;
			skillContainer.selected.stroke.height = infoSkillHeight;
			skillContainer.selected.fill.width = infoSkillWidth-skillSelectPadding*2;
			skillContainer.selected.fill.height = infoSkillHeight-skillSelectPadding*2;
			skillContainer.selected.fill.x = skillSelectPadding;
			skillContainer.selected.fill.y = skillSelectPadding;

			skillContainer.skillElement.width = infoSkillWidth/11;
			skillContainer.skillElement.height = skillContainer.skillElement.width * 2.3;
			skillContainer.skillElement.x = skillMargin;
			skillContainer.skillElement.y = infoSkillHeight/2;

			if(skillIndex%2 == 0){
				skillContainer.x = 0;
				skillContainer.y = ((infoSkillHeight+10)/2)*skillIndex;
			}else{
				skillContainer.x = infoSkillWidth + 10;
				skillContainer.y = ((infoSkillHeight+10)/2)*(skillIndex-1);
			}

			skillContainer.markerContainer.width = (skillContainer.rect.width/3)*2;
			skillContainer.markerContainer.height = skillContainer.markerContainer.width/12;
			skillContainer.markerContainer.x = skillContainer.rect.width/6;
			skillContainer.markerContainer.y = skillContainer.rect.height*3/4;

			if(skillContainer.targetText != undefined){
				skillContainer.targetText.style.fontSize = targetTextFontSize;
				skillContainer.targetText.x =  (skillContainer.rect.width/6) + (skillContainer.markerContainer.width * 0.569);
				skillContainer.targetText.y = skillContainer.rect.height*3/4;
			}
		});
	}
	creatureInfo.info_skill_text.forEach((text,textIndex) =>{
		text.style.fontSize = skillNameFontSize;
		if(textIndex%2 == 0 && textIndex<7){
			text.x = app.screen.width/10;
			text.y = textIndex * app.screen.height/36 + infoSkillHeight*2+30;
		}else{
			text.x = app.screen.width/10 + 25;
			text.y = (textIndex-1) * app.screen.height/36 + infoSkillHeight*2+30;
		}
	});
	creatureInfo.info_skill_text[7].style.wordWrapWidth = app.screen.width/3.2;

	creatureInfo.item.x = textOrigin[0];
	creatureInfo.item.y = textOrigin[1];

	var infoItemHeight = (app.screen.width/18)*2 + 10;
	var infoItemWidth = infoItemHeight/2;

	if(creatureInfo.infoItemBG != undefined){
		creatureInfo.infoItemBG.forEach((bgItem, bgIndex) =>{
			bgItem.width = infoItemWidth;
			bgItem.height = infoItemHeight;
			bgItem.x = (bgIndex%2 == 0 ? 0 : infoItemWidth + 10);
		});
	}
	
	if(creatureInfo.infoItemArray != undefined){
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
	}

	if(creatureInfo.infoItemSprite != undefined){
		creatureInfo.infoItemSprite.forEach((spriteItem, spriteIndex)=>{
			spriteItem.width = infoItemWidth-skillSelectPadding*2;
			spriteItem.height = infoItemHeight-skillSelectPadding*2;
			spriteItem.x = skillSelectPadding;
			spriteItem.y = skillSelectPadding;
		});
	}
	

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
	creatureInfo.info_item_text[7].style.wordWrapWidth = app.screen.width/3.2;

	creatureInfo.stat.x = textOrigin[0];
	creatureInfo.stat.y = app.screen.height/8;

	creatureInfo.info_stat_text.forEach((text,textIndex) =>{
		text.style.fontSize = skillNameFontSize;
		if(textIndex > 27){
			text.x = (textIndex-27) * app.screen.width/13 + app.screen.width/20;
		}else{
			text.x = (textIndex%4) * app.screen.width/13 + app.screen.width/20;
			text.y = (Math.floor(textIndex/4)+1) * app.screen.height/12;
		}
		// }else if(textIndex == 2){
		// 	text.x = ((textIndex%3)+1) * app.screen.width/11 + app.screen.width/50;
		// }else if(textIndex%3 != 0){
		// 	text.x = (textIndex%3) * app.screen.width/13 + app.screen.width/50;
		// 	text.y = Math.floor(textIndex/3) * app.screen.height/12;
		// }else{
		// 	text.x = app.screen.width/15;
		// 	text.y = Math.floor(textIndex/3) * app.screen.height/12;
		// }
	});

	// creatureInfo.info_stat_increase.forEach((increase, increaseIndex)=>{
	// 	increase.increaseText.style.fontSize = skillNameFontSize;
	// 	increase.x = 3 * app.screen.width/11 + app.screen.width/50;
	// 	increase.y = (increaseIndex+1) * app.screen.height/12;

	// 	creatureInfo.info_stat_maxed[increaseIndex].style.fontSize = skillNameFontSize;
	// 	creatureInfo.info_stat_maxed[increaseIndex].x = 3 * app.screen.width/11 + app.screen.width/50 + increase.increaseText.x;
	// 	creatureInfo.info_stat_maxed[increaseIndex].y = (increaseIndex+1) * app.screen.height/12;
	// });
}

function resizeDmg(roster, item){
	// var resizeWidth = (app.screen.width- (4*margin) - 6*(healthMargin))/8;
	// var resizeHeight = 40;
	// var statusSpacing = app.screen.width/384;
	var statusFontSize = 24;
	// var statusSpacer1 = app.screen.height/27;
	// var statusSpacer2 = app.screen.height/10.8;
	// var statusStrokeSize = app.screen.height/270;
	var scaleInvert = 1;
	if(item.hero)	scaleInvert = -1;
	if(app.screen.width < 860){
		item.dmgContainer.dmgPopup.scale.set(0.4,0.4);
		item.dmgContainer.skillFX.scale.set(0.4*scaleInvert,0.4);
		statusFontSize = 12;
	}else if(app.screen.width < 1366){
		item.dmgContainer.dmgPopup.scale.set(0.6,0.6);
		item.dmgContainer.skillFX.scale.set(0.6*scaleInvert,0.6);
		statusFontSize = 20;
	}else if(app.screen.width < 1500){
		item.dmgContainer.dmgPopup.scale.set(0.75,0.75);
		item.dmgContainer.skillFX.scale.set(0.75*scaleInvert,0.75);
	}
	else{
		item.dmgContainer.dmgPopup.scale.set(1,1);
		item.dmgContainer.skillFX.scale.set(1*scaleInvert,1);
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

	var switcher = (item.size > 1 ? 1 : 0);
	item.dmgContainer.skillFX.x = 	(item.size > 1 ? (resizeWidth * 2 + healthMargin)/2 : resizeWidth/2);
	item.dmgContainer.dmgPopup.x = 	(item.size > 1 ? (resizeWidth * 2 + healthMargin)/2 : resizeWidth/2);
	item.dmgContainer.dmgStatus.x = (item.size > 1 ? (resizeWidth * 2 + healthMargin)/2 : resizeWidth/2);

	item.dmgContainer.x = (roster == 0 ? heroHealthXPosition[item.pos-1+switcher] : spriteResizeXPosition[item.pos-1]);

	item.dmgContainer.skillFX.y = app.screen.height*3/4;
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

	item.healthBar.textHP.style.fontSize = (app.screen.width < 860 ? 14
										: app.screen.width < 1366 ? 18
										: 24);
	
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

	item.healthBar.x = (roster == 0 ? heroHealthXPosition[item.pos-1+switcher] : spriteResizeXPosition[item.pos-1]);

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
	item.scale.set(direction * spriteScale, spriteScale);
	item.x = (direction > 0 ? -spriteResizeXPosition[heroArray[index].pos-1] : spriteResizeXPosition[enemyArray[index].pos-1]);
}

function resizeStatus(item){
	var resizeHeight = app.screen.width/48;
	var statusSpacing = app.screen.width/384;	
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