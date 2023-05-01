
isGmod = false;
var downloadedFiles = 0;
var neededFiles;

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex ;
  
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
  
	  // Pick a remaining element...
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
  
	  // And swap it with the current element.
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
  
	return array;
}

function loadBackground() {
  if (config.backgroundImage) {
    $(".background").css(
      "background-image",
      'url("images/backgrounds' + config.backgroundImage + '")'
    );
  }
}

// gmod functions start
function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language ) {
  isGmod = true;
  setMapName(mapname);
  setSteamID(steamid);
}

function DownloadingFile( fileName ) {
  //downloadedFiles++;
  //refreshProgress();

  setStatus("Downloading files...");
}

function SetStatusChanged(status) {
 //if (status.indexOf("Getting Addon #") != -1) {
 //  downloadedFiles++;
 //  refreshProgress();
 //}else if (status == "Sending client info...") {
 //  setProgress(100);
 //}

  setStatus(status);
}

function SetFilesNeeded( needed ) {
  neededFiles = needed + 1;
}
// end gmod functions


function setSteamID(steamid) {
  $("#steamid").html(steamid);
}

function setStatus(status) {
  $("#status").html(status);
}

function setMapName(mapname) {
  $("#map").html(mapname);
}

function setServerName(servername) {
  $("#title").html(servername);
}

function setMusicName(name) {
  $("#music-name").fadeOut(2000, function() {
    $(this).html(name);
    $(this).fadeIn(2000);
  });
}

$(function() {
  setServerName(config.serverName);
  $.backstretch(config.backgroundImages, {duration: config.backgroundImagesDuration, fade: config.backgroundImagesFade});

  $("#overlay").css("background-color", "rgba(0,0,0,"+(config.bgDarkAmount/100)+")");
})


setTimeout(function() {
  if (!isGmod) {
    console.log("No Garry's mod testing..");

    GameDetails(
      "Servername",
      "Serverurl",
      "Mapname",
      "Maxplayers",
      "SteamID",
      "Gamemode");

    setStatus("Testing..");
  }
}, 1000);