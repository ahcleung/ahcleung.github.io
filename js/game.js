var dpr = window.devicePixelRatio;
const widthInit = window.innerWidth;
const heightInit = window.innerHeight;
const widthDPR = window.innerWidth * dpr;
const heightDPR = window.innerHeight * dpr;

var config = {
	type: Phaser.WEBGL,
	scale: {
		mode: Phaser.Scale.NONE,
        width: widthInit,
        height: heightInit,
	},
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

var info;

function preload(){
	console.log('preload');
	this.load.image('bg', 'img/bg2.jpg');
	this.load.image('crate', 'img/leper.ability.five.png');
	this.load.image('reset', 'img/ability_move.png');
	this.load.image('monkey2', 'img/monkey2_2.png');
	this.load.image('monkey3', 'img/monkey3_2.png');
}

function create(){
	console.log('create');

	// this.scale.resolution = dpr;
	// this.scale.displayScale.y = dpr;

	this.scale.resize(widthDPR, heightDPR);
	this.cameras.resize(widthDPR, heightDPR);
	window.innerWidth = widthInit;
	window.innerHeight = heightInit;

	// this.scale.canvas.width = widthDPR;
	// this.scale.canvas.height = heightDPR;
	this.scale.displaySize.width = widthInit;
	this.scale.displaySize.height = heightInit;

	this.scale.canvasBounds.width = widthInit;
	this.scale.canvasBounds.height = heightInit;

	this.scale.parentSize.width = widthInit;
 	this.scale.parentSize.height = heightInit;

	this.bg = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'bg').setOrigin(0);

	var sprite1 = this.add.image(400, 200, 'monkey2');
	sprite1.scaleX = 0.5; 
	sprite1.scaleY = 0.5;

	var sprite4 = this.add.image(100, 200, 'monkey3');
	sprite4.scaleX = 0.5; 
	sprite4.scaleY = 0.5;

	//  Display the game stats
	info = this.add.text(10, 10, '', {font: '12px Arial', fill: '#f00'});

	this.scale.on('resize', resize, this);
	consolePrint(this);
}

function update(){

	info.setText ('innerwidth: ' + window.innerWidth + 
		'\ninnerHeight: ' + window.innerHeight + 
		'\nCanvasWidth: ' + this.scale.canvas.width + 
		'\nCanvasHeight: ' + this.scale.canvas.height + 
		'\nCanvasBoundsW: ' + this.scale.canvasBounds.width + 
		'\nCanvasBoundsH: ' + this.scale.canvasBounds.height + 
		'\nbaseSize: ' + this.scale.baseSize + 
		'\ngameSize: ' + this.scale.gameSize +  
		'\ndisplaySize: ' + this.scale.displaySize +
		'\ngamerenderer: ' + this.game.renderer.width + "," + this.game.renderer.height +
		'\nparentSize: ' + this.scale.parentSize + 
		'\nresolution: ' + this.scale.resolution + 
		'\npixelRatio: ' + window.devicePixelRatio);
}

function resize(gameSize, baseSize, displaySize, resolution){
	console.log('RESIZE');
	this.scale.resize(widthDPR, heightDPR);
	this.cameras.resize(widthDPR, heightDPR);
	window.innerWidth = widthInit;
	window.innerHeight = heightInit;

	// this.scale.canvas.width = widthDPR;
	// this.scale.canvas.height = heightDPR;
	this.scale.displaySize.width = widthInit;
	this.scale.displaySize.height = heightInit;

	this.scale.canvasBounds.width = widthInit;
	this.scale.canvasBounds.height = heightInit;

	this.scale.parentSize.width = widthInit;
 	this.scale.parentSize.height = heightInit;
	consolePrint(this);
}

function consolePrint(temp){
	console.log('innerwidth: ' + window.innerWidth + 
		'\ninnerHeight: ' + window.innerHeight + 
		'\nCanvasWidth: ' + temp.scale.canvas.width + 
		'\nCanvasHeight: ' + temp.scale.canvas.height + 
		'\nCanvasBoundsW: ' + temp.scale.canvasBounds.width + 
		'\nCanvasBoundsH: ' + temp.scale.canvasBounds.height + 
		'\nbaseSize: ' + temp.scale.baseSize +  
		'\ngameSize: ' + temp.scale.gameSize +  
		'\ndisplaySize: ' + temp.scale.displaySize +
		'\ndisplayScale: ' + temp.scale.displayScale.x + ', ' + temp.scale.displayScale.y +
		'\ngamerenderer: ' + temp.game.renderer.width + "," + this.game.renderer.height +
		'\ncamera: ' + temp.cameras.main.scrollX + "," + temp.cameras.main.scrollY +
		'\nworldview: ' + temp.cameras.main.worldView.width + "," + temp.cameras.main.worldView.height +
		'\nbg: ' + temp.bg.x + "," + temp.bg.y + "," + temp.bg.width + "," + temp.bg.height +
		'\nparentSize: ' + temp.scale.parentSize + 
		'\nresolution: ' + temp.scale.resolution + 
		'\norientation: ' + temp.scale.orientation + 
		'\npixelRatio: ' + window.devicePixelRatio);
}