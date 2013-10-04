// ==UserScript==
// @name       World of Logs Plus
// @namespace  http://www.virtualbind.com/worldoflogsplus
// @version    0.1
// @description  Add enhancements to the World of Logs site.
// @match      *://*.worldoflogs.com/reports/*
// @copyright  2013+, Virtual
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())) {
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}

var server = guild.realm;
var characters = $("a span.DeathKnight, a span.Druid, a span.Hunter, a span.Mage, a span.Monk, a span.Paladin, a span.Priest, a span.Rogue, a span.Shaman, a span.Warlock, a span.Warrior").parent().parent();
var armory_url = "";
characters.each(function(index) {
    var t = $(this);
    var character_name = t.find("span").text();
	var region = "us";
	    if (guild.timezone.match(/Europe/))
	      region = "eu";
	var armory_url = "http://" + region + ".battle.net/wow/en/character/" + server + "/" + character_name + "/advanced";
    
    
    t.append("&nbsp;<small>[<a href=\"" + armory_url + "\" target=\"_new\">Armory</a>]</small>");
});

var dataCells = $(".spellDetailsTable td");
dataCells.each(function(index) {
   var t = $(this);
   var val = t.text();
   var cleansed = val.replace(/\s/g, '');
    
    if ($.isNumeric(cleansed) && cleansed.length > 3)
    	t.text(commaSeparateNumber(cleansed));
});