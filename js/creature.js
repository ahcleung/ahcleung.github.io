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
	constructor({id = 0, level = 1, statDis = [0,0,0,0,0,0,0], skill=[0,0,0,0], hero=false}){
		this.id = id;
		this.level = level;
		this.experienceGained = 778;
		this.experienceNext = 1000;
		this.statDis = statDis;
		this.skill = skill;
		this.pos = 0;
		this.hero = hero;
		
		// this.critDmg = Math.floor(Math.random() * 25) + 10;
		this.critDmg = 0;
		this.newCrit = false;
		this.newHP = false;
		this.newMove = 0;
		this.item = [2];
		
		const creatureList = resources["js/creature.json"];				//Load creature JSON list
		
		this.frames = creatureList.data.creature[this.id].frames;			//Number of frames for creature animation
		this.code = creatureList.data.creature[this.id].code;				//Creature code
		this.size = creatureList.data.creature[this.id].size;				//Creature size
		this.move = creatureList.data.creature[this.id].move;				//Creature movement

		this.action = creatureList.data.creature[this.id].action;
		
		this.name = creatureList.data.creature[this.id].name;				//Creature name
		this.element = creatureList.data.creature[this.id].element;		//Creature element
		
		this.overallHP = Math.round(((((2*creatureList.data.creature[this.id].hp + this.statDis[0]) * this.level)/100) + this.level + 10) * this.size);
// 		this.overallHP = 100;
			
		this.EHP = this.overallHP - this.critDmg;

		this.statCalc = [
			this.EHP - Math.floor(Math.random() * ((this.EHP - 12) - 12 + 1)), 
			// this.EHP, 
// 			this.EHP - 25,
			creatureList.data.creature[this.id].dodge + this.statDis[1]/2,
			creatureList.data.creature[this.id].patk + this.statDis[2],
			creatureList.data.creature[this.id].pdef + this.statDis[3],
			creatureList.data.creature[this.id].satk + this.statDis[4],
			creatureList.data.creature[this.id].sdef + this.statDis[5],
			creatureList.data.creature[this.id].spd + this.statDis[6]
		];

		// 0, 	  1,    2,    3,    4,    5,   6,   7
		//hp, dodge, patk, pdef, satk, sdef, spd, acc
		this.statMod = [0, 0, 0, 0, 0, 0, 0, 0];
		this.statusArray = [
		//[status, turn, statNum, value]
			[3,1],
			[2,3,2,1],
			// [6,1],
			// [8,1],
			[11,1],
			// [7,1],
			[4,3,3,-1],
			[4,3,1,-1],
			[4,3,4,-1],
			[4,3,5,-1],
			// [1,1],
			// [5,1],
			// [10,1],
			// [11,1],
			// [12,1],
			[Math.floor(Math.random() * 14) + 1, 2],
			[Math.floor(Math.random() * 14) + 1, 2],
			[Math.floor(Math.random() * 14) + 1, 2],
			// [Math.floor(Math.random() * 14) + 1, 2],
			// [Math.floor(Math.random() * 14) + 1, 2],
			// [Math.floor(Math.random() * 14) + 1, 2],
			// [Math.floor(Math.random() * 14) + 1, 2],
			// [Math.floor(Math.random() * 14) + 1, 2],
			// [Math.floor(Math.random() * 14) + 1, 2],
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
		this.newCrit = true;
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