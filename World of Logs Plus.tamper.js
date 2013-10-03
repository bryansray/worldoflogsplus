// ==UserScript==
// @name       World of Logs Plus
// @namespace  http://www.virtualbind.com/worldoflogsplus
// @version    0.1
// @description  Add enhancements to the World of Logs site.
// @match      http://worldoflogs.com/reports/*
// @copyright  2013+, Virtual
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

var server = guild.realm;
var characters = $("a span.DeathKnight, a span.Druid, a span.Hunter, a span.Mage, a span.Monk, a span.Paladin, a span.Priest, a span.Rogue, a span.Shaman, a span.Warlock, a span.Warrior").parent().parent();
var armory_url = "";
characters.each(function(index) {
    var t = $(this);
    var character_name = t.find("span").text();
    armory_url = "http://us.battle.net/wow/en/character/" + server + "/" + character_name + "/advanced";
    
    
    t.append("&nbsp;<small>[<a href=\"" + armory_url + "\" target=\"_new\">Armory</a>]</small>");
});