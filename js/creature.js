/*======================================================================================
*
*FileName:        creature.js
*Project:         Project Elements
*Version:         1.06
*
*Author:          Alvin Leung <hello@ahcleung.com>
*Created on:      2019/12/06
*
*Description:     Project Elements creature class code
*
======================================================================================*/

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
		this.move = creatureList.data.creatures[this.id].move;				//Creature movement

		this.action = creatureList.data.creatures[this.id].action;
		
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
		
		this.statMod = [0, 0, 0, 0, 0, 0, 0, 0];
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

	get hp(){
		return this.statCalc[0];
	}

	get dodge(){
		return this.statCalc[1];
	}

	get dodgeMod(){
		return this.statMod[1];
	}

	get patk(){
		if(this.statMod[2] > 0){
			return this.statCalc[2] * ((this.statMod[2]+2)/2);
		}else if(this.statMod[2] < 0){
			return this.statCalc[2] * (2/(Math.abs(this.statMod[2])+2));
		}else{
			return this.statCalc[2];
		}
	}

	get pdef(){
		if(this.statMod[3] > 0){
			return this.statCalc[3] * ((this.statMod[3]+2)/2);
		}else if(this.statMod[3] < 0){
			return this.statCalc[3] * (2/(Math.abs(this.statMod[3])+2));
		}else{
			return this.statCalc[3];
		}
	}

	get satk(){
		if(this.statMod[4] > 0){
			return this.statCalc[4] * ((this.statMod[4]+2)/2);
		}else if(this.statMod[4] < 0){
			return this.statCalc[4] * (2/(Math.abs(this.statMod[4])+2));
		}else{
			return this.statCalc[4];
		}
	}

	get sdef(){
		if(this.statMod[5] > 0){
			return this.statCalc[5] * ((this.statMod[5]+2)/2);
		}else if(this.statMod[5] < 0){
			return this.statCalc[5] * (2/(Math.abs(this.statMod[5])+2));
		}else{
			return this.statCalc[5];
		}
	}

	get spd(){
		return this.statCalc[6];
	}

	get accMod(){
		return this.statMod[7];
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