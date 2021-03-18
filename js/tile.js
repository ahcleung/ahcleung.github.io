/*======================================================================================
*
*FileName:        tile.js
*Project:         Project Elements
*Version:         1.06
*
*Author:          Alvin Leung <hello@ahcleung.com>
*Created on:      2021/02/25
*
*Description:     Project Elements tile class code
*
======================================================================================*/

class Tile{
	constructor({id = 0, pos = [0,0], discovered = false, travelled = false}){
		this.id = id;
		this.pos = pos;
		this.discovered = discovered;
		this.travelled = travelled;
		this.traversable = false;
		this.travelConfirm = false;
	}

	showMove1(){
		this.discovered = true;
		this.sprite.image.visible = true;
		this.sprite.hidden.visible = false;
		if(this.id != 7){
			this.sprite.moveTile1.visible = true;
			this.traversable = true;
		}
	}

	hideMove1(){
		this.sprite.moveTile1.visible = false;
		this.traversable = false;
	}

	showMove2(){
		if(this.traversable){
			this.sprite.moveTile2.visible = true;
			this.travelConfirm = true;
		}
	}

	hideMove2(){
		this.sprite.moveTile2.visible = false;
		this.travelConfirm = false;
	}

	// get id(){
	// 	return this.id;
	// }

}