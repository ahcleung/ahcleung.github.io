/*======================================================================================
*
*FileName:        loader.js
*Project:         Project Elements
*Version:         1.06
*
*Author:          Alvin Leung <hello@ahcleung.com>
*Created on:      2019/12/06
*
*Description:     Project Elements loader code
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
		"js/map.json",
		"js/encounter.json",
		"js/player_map.json",

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