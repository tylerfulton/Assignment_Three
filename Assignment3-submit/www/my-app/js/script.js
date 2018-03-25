window.onload = init;
function init() {

/////////--TWITTER STUFF--//////////////////////////////////////////////////////////////////////////////////
	var xhr = new XMLHttpRequest();

	xhr.open('GET', "get_tweets.php", true);

	xhr.send(null);

	xhr.onload = function() {
		if (xhr.status == 200) {
			var tweets = JSON.parse(xhr.responseText);
			console.log(tweets);

			var cgyCounter = 0;
			var edmCounter = 0;
			var mtlCounter = 0;
			var ottCounter = 0;
			var torCounter = 0;
			var vanCounter = 0;
			var wpgCounter = 0;
			var totalCounter = 0;

			tweets.statuses.forEach(function(tweet) {
				tweet.entities.hashtags.forEach(function(hashtag) {
					
					if (hashtag.text == "CofRed" || hashtag.text == "cofred" || hashtag.text == "Flames" || hashtag.text == "flames") {
						cgyCounter++;
						totalCounter++;
					}
					if (hashtag.text == "LetsGoOilers" || hashtag.text == "letsgooilers" || hashtag.text == "Oilers" || hashtag.text == "oilers") {
						edmCounter++;
						totalCounter++;
					}
					if (hashtag.text == "GoHabsGo" || hashtag.text == "gohabsgo" || hashtag.text == "Habs" || hashtag.text == "habs") {
						mtlCounter++;
						totalCounter++;
					}
					if (hashtag.text == "Sens" || hashtag.text == "sens" || hashtag.text == "Senators" || hashtag.text == "senators") {
						ottCounter++;
						totalCounter++;
					}
					if (hashtag.text == "TMLtalk" || hashtag.text == "tmltalk" || hashtag.text == "Leafs" || hashtag.text == "leafs") {
						torCounter++;
						totalCounter++;
					}
					if (hashtag.text == "Canucks" || hashtag.text == "canucks" || hashtag.text == "WeAreAllCanucks") {
						vanCounter++;
						totalCounter++;
					}
					if (hashtag.text == "GoJetsGo" || hashtag.text == "gojetsgo" || hashtag.text == "NHLJets" || hashtag.text == "nhljets") {
						wpgCounter++;
						totalCounter++;
					}
				});
			});
			var cgyWidth = (cgyCounter/totalCounter*100) + "%";
			var edmWidth = (edmCounter/totalCounter*100) + "%";
			var mtlWidth = (mtlCounter/totalCounter*100) + "%";
			var ottWidth = (ottCounter/totalCounter*100) + "%";
			var torWidth = (torCounter/totalCounter*100) + "%";
			var vanWidth = (vanCounter/totalCounter*100) + "%";
			var wpgWidth = (wpgCounter/totalCounter*100) + "%";
			
			document.getElementById("cgyBar").style.width = cgyWidth;
			document.getElementById("edmBar").style.width = edmWidth;
			document.getElementById("mtlBar").style.width = mtlWidth;
			document.getElementById("ottBar").style.width = ottWidth;
			document.getElementById("torBar").style.width = torWidth;
			document.getElementById("vanBar").style.width = vanWidth;
			document.getElementById("wpgBar").style.width = wpgWidth;



			// document.getElementById("cgyCounter").innerHTML = "CGY: " + cgyCounter;
			// document.getElementById("edmCounter").innerHTML = "EDM: " + edmCounter;
			// document.getElementById("mtlCounter").innerHTML = "MTL: " + mtlCounter;
			// document.getElementById("ottCounter").innerHTML = "OTT: " + ottCounter;
			// document.getElementById("torCounter").innerHTML = "TOR: " + torCounter;
			// document.getElementById("vanCounter").innerHTML = "VAN: " + vanCounter;
			// document.getElementById("wpgCounter").innerHTML = "WPG: " + wpgCounter;
			// document.getElementById("totCounter").innerHTML = "TOTAL: " + totalCounter;

			var tweetList = "<ul>";
			var locations = [];

			tweets.statuses.forEach(function(tweet) {
				tweetList += "<li>" + tweet.user.time_zone + "</li>";
				// tweetList += "<li>" + tweet.user.location + "</li>";
				locations.push(tweet.user.time_zone);
			});

			var cgyPacCounter = 0;
			var edmPacCounter = 0;
			var mtlPacCounter = 0;
			var ottPacCounter = 0;
			var torPacCounter = 0;
			var vanPacCounter = 0;
			var wpgPacCounter = 0;
			var pacCounter = 0;

			tweets.statuses.forEach(function(tweet) {
				if (tweet.user.time_zone == "Pacific Time (US & Canada)") {
					tweet.entities.hashtags.forEach(function(hashtag) {
						if (hashtag.text == "CofRed" || hashtag.text == "cofred" || hashtag.text == "Flames" || hashtag.text == "flames") {
							cgyPacCounter++;
							pacCounter++;
						}
						if (hashtag.text == "LetsGoOilers" || hashtag.text == "letsgooilers" || hashtag.text == "Oilers" || hashtag.text == "oilers") {
							edmPacCounter++;
							pacCounter++;
						}
						if (hashtag.text == "GoHabsGo" || hashtag.text == "gohabsgo" || hashtag.text == "Habs" || hashtag.text == "habs") {
							mtlPacCounter++;
							pacCounter++;
						}
						if (hashtag.text == "Sens" || hashtag.text == "sens" || hashtag.text == "Senators" || hashtag.text == "senators") {
							ottPacCounter++;
							pacCounter++;
						}
						if (hashtag.text == "TMLtalk" || hashtag.text == "tmltalk" || hashtag.text == "Leafs" || hashtag.text == "leafs") {
							torPacCounter++;
							pacCounter++;
						}
						if (hashtag.text == "Canucks" || hashtag.text == "canucks" || hashtag.text == "WeAreAllCanucks") {
							vanPacCounter++;
							pacCounter++;
						}
						if (hashtag.text == "GoJetsGo" || hashtag.text == "gojetsgo" || hashtag.text == "NHLJets" || hashtag.text == "nhljets") {
							wpgPacCounter++;
							pacCounter++;
						}
					});
				}
			});

			// document.getElementById("cgyPacCounter").innerHTML = "CGY: " + cgyPacCounter;
			// document.getElementById("edmPacCounter").innerHTML = "EDM: " + edmPacCounter;
			// document.getElementById("mtlPacCounter").innerHTML = "MTL: " + mtlPacCounter;
			// document.getElementById("ottPacCounter").innerHTML = "OTT: " + ottPacCounter;
			// document.getElementById("torPacCounter").innerHTML = "TOR: " + torPacCounter;
			// document.getElementById("vanPacCounter").innerHTML = "VAN: " + vanPacCounter;
			// document.getElementById("wpgPacCounter").innerHTML = "WPG: " + wpgPacCounter;
			// document.getElementById("pacCounter").innerHTML = "PACIFIC: " + pacCounter;

			var cgyMouCounter = 0;
			var edmMouCounter = 0;
			var mtlMouCounter = 0;
			var ottMouCounter = 0;
			var torMouCounter = 0;
			var vanMouCounter = 0;
			var wpgMouCounter = 0;
			var mouCounter = 0;

			tweets.statuses.forEach(function(tweet) {
				if (tweet.user.time_zone == "Mountain Time (US & Canada)") {
					tweet.entities.hashtags.forEach(function(hashtag) {
						if (hashtag.text == "CofRed" || hashtag.text == "cofred" || hashtag.text == "Flames" || hashtag.text == "flames") {
							cgyMouCounter++;
							mouCounter++;
						}
						if (hashtag.text == "LetsGoOilers" || hashtag.text == "letsgooilers" || hashtag.text == "Oilers" || hashtag.text == "oilers") {
							edmMouCounter++;
							mouCounter++;
						}
						if (hashtag.text == "GoHabsGo" || hashtag.text == "gohabsgo" || hashtag.text == "Habs" || hashtag.text == "habs") {
							mtlMouCounter++;
							mouCounter++;
						}
						if (hashtag.text == "Sens" || hashtag.text == "sens" || hashtag.text == "Senators" || hashtag.text == "senators") {
							ottMouCounter++;
							mouCounter++;
						}
						if (hashtag.text == "TMLtalk" || hashtag.text == "tmltalk" || hashtag.text == "Leafs" || hashtag.text == "leafs") {
							torMouCounter++;
							mouCounter++;
						}
						if (hashtag.text == "Canucks" || hashtag.text == "canucks" || hashtag.text == "WeAreAllCanucks") {
							vanMouCounter++;
							mouCounter++;
						}
						if (hashtag.text == "GoJetsGo" || hashtag.text == "gojetsgo" || hashtag.text == "NHLJets" || hashtag.text == "nhljets") {
							wpgMouCounter++;
							mouCounter++;
						}
					});
				}
			});

			// document.getElementById("cgyMouCounter").innerHTML = "CGY: " + cgyMouCounter;
			// document.getElementById("edmMouCounter").innerHTML = "EDM: " + edmMouCounter;
			// document.getElementById("mtlMouCounter").innerHTML = "MTL: " + mtlMouCounter;
			// document.getElementById("ottMouCounter").innerHTML = "OTT: " + ottMouCounter;
			// document.getElementById("torMouCounter").innerHTML = "TOR: " + torMouCounter;
			// document.getElementById("vanMouCounter").innerHTML = "VAN: " + vanMouCounter;
			// document.getElementById("wpgMouCounter").innerHTML = "WPG: " + wpgMouCounter;
			// document.getElementById("mouCounter").innerHTML = "MOUNTAIN: " + mouCounter;

			var cgyCenCounter = 0;
			var edmCenCounter = 0;
			var mtlCenCounter = 0;
			var ottCenCounter = 0;
			var torCenCounter = 0;
			var vanCenCounter = 0;
			var wpgCenCounter = 0;
			var cenCounter = 0;

			tweets.statuses.forEach(function(tweet) {
				if (tweet.user.time_zone == "Central Time (US & Canada)") {
					tweet.entities.hashtags.forEach(function(hashtag) {
						if (hashtag.text == "CofRed" || hashtag.text == "cofred" || hashtag.text == "Flames" || hashtag.text == "flames") {
							cgyCenCounter++;
							cenCounter++;
						}
						if (hashtag.text == "LetsGoOilers" || hashtag.text == "letsgooilers" || hashtag.text == "Oilers" || hashtag.text == "oilers") {
							edmCenCounter++;
							cenCounter++;
						}
						if (hashtag.text == "GoHabsGo" || hashtag.text == "gohabsgo" || hashtag.text == "Habs" || hashtag.text == "habs") {
							mtlCenCounter++;
							cenCounter++;
						}
						if (hashtag.text == "Sens" || hashtag.text == "sens" || hashtag.text == "Senators" || hashtag.text == "senators") {
							ottCenCounter++;
							cenCounter++;
						}
						if (hashtag.text == "TMLtalk" || hashtag.text == "tmltalk" || hashtag.text == "Leafs" || hashtag.text == "leafs") {
							torCenCounter++;
							cenCounter++;
						}
						if (hashtag.text == "Canucks" || hashtag.text == "canucks" || hashtag.text == "WeAreAllCanucks") {
							vanCenCounter++;
							cenCounter++;
						}
						if (hashtag.text == "GoJetsGo" || hashtag.text == "gojetsgo" || hashtag.text == "NHLJets" || hashtag.text == "nhljets") {
							wpgCenCounter++;
							cenCounter++;
						}
					});
				}
			});

			// document.getElementById("cgyCenCounter").innerHTML = "CGY: " + cgyCenCounter;
			// document.getElementById("edmCenCounter").innerHTML = "EDM: " + edmCenCounter;
			// document.getElementById("mtlCenCounter").innerHTML = "MTL: " + mtlCenCounter;
			// document.getElementById("ottCenCounter").innerHTML = "OTT: " + ottCenCounter;
			// document.getElementById("torCenCounter").innerHTML = "TOR: " + torCenCounter;
			// document.getElementById("vanCenCounter").innerHTML = "VAN: " + vanCenCounter;
			// document.getElementById("wpgCenCounter").innerHTML = "WPG: " + wpgCenCounter;
			// document.getElementById("cenCounter").innerHTML = "CENTRAL: " + cenCounter;

			var cgyEasCounter = 0;
			var edmEasCounter = 0;
			var mtlEasCounter = 0;
			var ottEasCounter = 0;
			var torEasCounter = 0;
			var vanEasCounter = 0;
			var wpgEasCounter = 0;
			var easCounter = 0;

			tweets.statuses.forEach(function(tweet) {
				if (tweet.user.time_zone == "Eastern Time (US & Canada)") {
					tweet.entities.hashtags.forEach(function(hashtag) {
						if (hashtag.text == "CofRed" || hashtag.text == "cofred" || hashtag.text == "Flames" || hashtag.text == "flames") {
							cgyEasCounter++;
							easCounter++;
						}
						if (hashtag.text == "LetsGoOilers" || hashtag.text == "letsgooilers" || hashtag.text == "Oilers" || hashtag.text == "oilers") {
							edmEasCounter++;
							easCounter++;
						}
						if (hashtag.text == "GoHabsGo" || hashtag.text == "gohabsgo" || hashtag.text == "Habs" || hashtag.text == "habs") {
							mtlEasCounter++;
							easCounter++;
						}
						if (hashtag.text == "Sens" || hashtag.text == "sens" || hashtag.text == "Senators" || hashtag.text == "senators") {
							ottEasCounter++;
							easCounter++;
						}
						if (hashtag.text == "TMLtalk" || hashtag.text == "tmltalk" || hashtag.text == "Leafs" || hashtag.text == "leafs") {
							torEasCounter++;
							easCounter++;
						}
						if (hashtag.text == "Canucks" || hashtag.text == "canucks" || hashtag.text == "WeAreAllCanucks") {
							vanEasCounter++;
							easCounter++;
						}
						if (hashtag.text == "GoJetsGo" || hashtag.text == "gojetsgo" || hashtag.text == "NHLJets" || hashtag.text == "nhljets") {
							wpgEasCounter++;
							easCounter++;
						}
					});
				}
			});

			// document.getElementById("cgyEasCounter").innerHTML = "CGY: " + cgyEasCounter;
			// document.getElementById("edmEasCounter").innerHTML = "EDM: " + edmEasCounter;
			// document.getElementById("mtlEasCounter").innerHTML = "MTL: " + mtlEasCounter;
			// document.getElementById("ottEasCounter").innerHTML = "OTT: " + ottEasCounter;
			// document.getElementById("torEasCounter").innerHTML = "TOR: " + torEasCounter;
			// document.getElementById("vanEasCounter").innerHTML = "VAN: " + vanEasCounter;
			// document.getElementById("wpgEasCounter").innerHTML = "WPG: " + wpgEasCounter;
			// document.getElementById("easCounter").innerHTML = "EASTERN: " + easCounter;

			var cgyAtlCounter = 0;
			var edmAtlCounter = 0;
			var mtlAtlCounter = 0;
			var ottAtlCounter = 0;
			var torAtlCounter = 0;
			var vanAtlCounter = 0;
			var wpgAtlCounter = 0;
			var atlCounter = 0;

			tweets.statuses.forEach(function(tweet) {
				if (tweet.user.time_zone == "Atlantic Time (Canada)") {
					tweet.entities.hashtags.forEach(function(hashtag) {
						if (hashtag.text == "CofRed" || hashtag.text == "cofred" || hashtag.text == "Flames" || hashtag.text == "flames") {
							cgyAtlCounter++;
							atlCounter++;
						}
						if (hashtag.text == "LetsGoOilers" || hashtag.text == "letsgooilers" || hashtag.text == "Oilers" || hashtag.text == "oilers") {
							edmAtlCounter++;
							atlCounter++;
						}
						if (hashtag.text == "GoHabsGo" || hashtag.text == "gohabsgo" || hashtag.text == "Habs" || hashtag.text == "habs") {
							mtlAtlCounter++;
							atlCounter++;
						}
						if (hashtag.text == "Sens" || hashtag.text == "sens" || hashtag.text == "Senators" || hashtag.text == "senators") {
							ottAtlCounter++;
							atlCounter++;
						}
						if (hashtag.text == "TMLtalk" || hashtag.text == "tmltalk" || hashtag.text == "Leafs" || hashtag.text == "leafs") {
							torAtlCounter++;
							atlCounter++;
						}
						if (hashtag.text == "Canucks" || hashtag.text == "canucks" || hashtag.text == "WeAreAllCanucks") {
							vanAtlCounter++;
							atlCounter++;
						}
						if (hashtag.text == "GoJetsGo" || hashtag.text == "gojetsgo" || hashtag.text == "NHLJets" || hashtag.text == "nhljets") {
							wpgAtlCounter++;
							atlCounter++;
						}
					});
				}
			});

			// document.getElementById("cgyAtlCounter").innerHTML = "CGY: " + cgyAtlCounter;
			// document.getElementById("edmAtlCounter").innerHTML = "EDM: " + edmAtlCounter;
			// document.getElementById("mtlAtlCounter").innerHTML = "MTL: " + mtlAtlCounter;
			// document.getElementById("ottAtlCounter").innerHTML = "OTT: " + ottAtlCounter;
			// document.getElementById("torAtlCounter").innerHTML = "TOR: " + torAtlCounter;
			// document.getElementById("vanAtlCounter").innerHTML = "VAN: " + vanAtlCounter;
			// document.getElementById("wpgAtlCounter").innerHTML = "WPG: " + wpgAtlCounter;
			// document.getElementById("atlCounter").innerHTML = "ATLANTIC: " + atlCounter;



			var pacArray = [];
			pacArray.push({title: "calgaryPac", score: cgyPacCounter});
			pacArray.push({title: "edmontonPac", score: edmPacCounter});
			pacArray.push({title: "montrealPac", score: mtlPacCounter});
			pacArray.push({title: "ottawaPac", score: ottPacCounter});
			pacArray.push({title: "torontoPac", score: torPacCounter});
			pacArray.push({title: "vancouverPac", score: vanPacCounter});
			pacArray.push({title: "winnipegPac", score: wpgPacCounter});

			console.log(pacArray);

		    var highScoreSoFar = 0;
		    var pacResult = [];
		    for (var i = 0; i < pacArray.length; i++) {
		        if (pacArray[i].score > highScoreSoFar) {
		            // new high score so start a new array with this player in it
		            pacResult = [pacArray[i]];
		            highScoreSoFar = pacArray[i].score;
		        } else if (pacArray[i].score === highScoreSoFar) {
		            // more than one player with this highScore so add this one to the array
		            pacResult.push(pacArray[i]);
		        }
		    }
		    console.log(pacResult);

		    if (pacResult[0].title == "calgaryPac"){
		    	console.log("success");
		    	$("#pacificMap").children().css("fill", "#FFCC66");
		    }
		    if (pacResult[0].title == "edmontonPac"){
		    	console.log("success");
		    	$("#pacificMap").children().css("fill", "#FF3300");
		    }
		    if (pacResult[0].title == "montrealPac"){
		    	console.log("success");
		    	$("#pacificMap").children().css("fill", "#AF1E2D");
		    }
		    if (pacResult[0].title == "torontoPac"){
		    	console.log("success");
		    	$("#pacificMap").children().css("fill", "#003876");
		    }
		    if (pacResult[0].title == "ottawaPac"){
		    	console.log("success");
		    	$("#pacificMap").children().css("fill", "#BF910C");
		    }
		    if (pacResult[0].title == "vancouverPac"){
		    	console.log("success");
		    	$("#pacificMap").children().css("fill", "#008752");
		    }
		    if (pacResult[0].title == "winnipegPac"){
		    	console.log("success");
		    	$("#pacificMap").children().css("fill", "#041E41");
		    }
		    if (pacResult.length == 2) {
		    	$("#pacificMap").children().css("fill", "#525252");
		    }
		    if (pacResult.length == 7) {
		    	$("#pacificMap").children().css("fill", "lightgray");
		    }

		    var mouArray = [];
			mouArray.push({title: "calgaryMou", score: cgyMouCounter});
			mouArray.push({title: "edmontonMou", score: edmMouCounter});
			mouArray.push({title: "montrealMou", score: mtlMouCounter});
			mouArray.push({title: "ottawaMou", score: ottMouCounter});
			mouArray.push({title: "torontoMou", score: torMouCounter});
			mouArray.push({title: "vancouverMou", score: vanMouCounter});
			mouArray.push({title: "winnipegMou", score: wpgMouCounter});

			console.log(mouArray);

		    var highScoreSoFar = 0;
		    var mouResult = [];
		    for (var i = 0; i < mouArray.length; i++) {
		        if (mouArray[i].score > highScoreSoFar) {
		            // new high score so start a new array with this player in it
		            mouResult = [mouArray[i]];
		            highScoreSoFar = mouArray[i].score;
		        } else if (mouArray[i].score === highScoreSoFar) {
		            // more than one player with this highScore so add this one to the array
		            mouResult.push(mouArray[i]);
		        }
		    }
		    console.log(mouResult);

		    if (mouResult[0].title == "calgaryMou"){
		    	console.log("success");
		    	$("#mountainMap").children().css("fill", "#FFCC66");
		    }
		    if (mouResult[0].title == "edmontonMou"){
		    	console.log("success");
		    	$("#mountainMap").children().css("fill", "#FF3300");
		    }
		    if (mouResult[0].title == "montrealMou"){
		    	console.log("success");
		    	$("#mountainMap").children().css("fill", "#AF1E2D");
		    }
		    if (mouResult[0].title == "torontoMou"){
		    	console.log("success");
		    	$("#mountainMap").children().css("fill", "#003876");
		    }
		    if (mouResult[0].title == "ottawaMou"){
		    	console.log("success");
		    	$("#mountainMap").children().css("fill", "#BF910C");
		    }
		    if (mouResult[0].title == "vancouverMou"){
		    	console.log("success");
		    	$("#mountainMap").children().css("fill", "#008752");
		    }
		    if (mouResult[0].title == "winnipegMou"){
		    	console.log("success");
		    	$("#mountainMap").children().css("fill", "#041E41");
		    }
		    if (mouResult.length == 2) {
		    	$("#mountainMap").children().css("fill", "#525252");
		    }
		    if (mouResult.length == 7) {
		    	$("#mountainMap").children().css("fill", "lightgray");
		    }

		    var cenArray = [];
			cenArray.push({title: "calgaryCen", score: cgyCenCounter});
			cenArray.push({title: "edmontonCen", score: edmCenCounter});
			cenArray.push({title: "montrealCen", score: mtlCenCounter});
			cenArray.push({title: "ottawaCen", score: ottCenCounter});
			cenArray.push({title: "torontoCen", score: torCenCounter});
			cenArray.push({title: "vancouverCen", score: vanCenCounter});
			cenArray.push({title: "winnipegCen", score: wpgCenCounter});

			console.log(cenArray);

		    var highScoreSoFar = 0;
		    var cenResult = [];
		    for (var i = 0; i < cenArray.length; i++) {
		        if (cenArray[i].score > highScoreSoFar) {
		            // new high score so start a new array with this player in it
		            cenResult = [cenArray[i]];
		            highScoreSoFar = cenArray[i].score;
		        } else if (cenArray[i].score === highScoreSoFar) {
		            // more than one player with this highScore so add this one to the array
		            cenResult.push(cenArray[i]);
		        }
		    }
		    console.log(cenResult);

		    if (cenResult[0].title == "calgaryCen"){
		    	console.log("success");
		    	$("#centralMap").children().css("fill", "#FFCC66");
		    }
		    if (cenResult[0].title == "edmontonCen"){
		    	console.log("success");
		    	$("#centralMap").children().css("fill", "#FF3300");
		    }
		    if (cenResult[0].title == "montrealCen"){
		    	console.log("success");
		    	$("#centralMap").children().css("fill", "#AF1E2D");
		    }
		    if (cenResult[0].title == "torontoCen"){
		    	console.log("success");
		    	$("#centralMap").children().css("fill", "#003876");
		    }
		    if (cenResult[0].title == "ottawaCen"){
		    	console.log("success");
		    	$("#centralMap").children().css("fill", "#BF910C");
		    }
		    if (cenResult[0].title == "vancouverCen"){
		    	console.log("success");
		    	$("#centralMap").children().css("fill", "#008752");
		    }
		    if (cenResult[0].title == "winnipegCen"){
		    	console.log("success");
		    	$("#centralMap").children().css("fill", "#041E41");
		    }
		    if (cenResult.length !== 1) {
		    	$("#centralMap").children().css("fill", "#525252");
		    }
		    if (cenResult.length == 7) {
		    	$("#centralMap").children().css("fill", "lightgray");
		    }
			    
			    
			var easArray = [];
			easArray.push({title: "calgaryEas", score: cgyEasCounter});
			easArray.push({title: "edmontonEas", score: edmEasCounter});
			easArray.push({title: "montrealEas", score: mtlEasCounter});
			easArray.push({title: "ottawaEas", score: ottEasCounter});
			easArray.push({title: "torontoEas", score: torEasCounter});
			easArray.push({title: "vancouverEas", score: vanEasCounter});
			easArray.push({title: "winnipegEas", score: wpgEasCounter});

			console.log(easArray);

		    var highScoreSoFar = 0;
		    var easResult = [];
		    for (var i = 0; i < easArray.length; i++) {
		        if (easArray[i].score > highScoreSoFar) {
		            // new high score so start a new array with this player in it
		            easResult = [easArray[i]];
		            highScoreSoFar = easArray[i].score;
		        } else if (easArray[i].score === highScoreSoFar) {
		            // more than one player with this highScore so add this one to the array
		            easResult.push(easArray[i]);
		        }
		    }
		    console.log(easResult);

		    if (easResult[0].title == "calgaryEas"){
		    	console.log("success");
		    	$("#easternMap").children().css("fill", "#FFCC66");
		    }
		    if (easResult[0].title == "edmontonEas"){
		    	console.log("success");
		    	$("#easternMap").children().css("fill", "#FF3300");
		    }
		    if (easResult[0].title == "montrealEas"){
		    	console.log("success");
		    	$("#easternMap").children().css("fill", "#AF1E2D");
		    }
		    if (easResult[0].title == "torontoEas"){
		    	console.log("success");
		    	$("#easternMap").children().css("fill", "#003876");
		    }
		    if (easResult[0].title == "ottawaEas"){
		    	console.log("success");
		    	$("#easternMap").children().css("fill", "#BF910C");
		    }
		    if (easResult[0].title == "vancouverEas"){
		    	console.log("success");
		    	$("#easternMap").children().css("fill", "#008752");
		    }
		    if (easResult[0].title == "winnipegEas"){
		    	console.log("success");
		    	$("#easternMap").children().css("fill", "#041E41");
		    }
		    if (easResult.length !== 1) {
		    	$("#easternMap").children().css("fill", "#525252");
		    }
		    if (easResult.length == 7) {
		    	$("#easternMap").children().css("fill", "lightgray");
		    }

		    var atlArray = [];
			atlArray.push({title: "calgaryAtl", score: cgyAtlCounter});
			atlArray.push({title: "edmontonAtl", score: edmAtlCounter});
			atlArray.push({title: "montrealAtl", score: mtlAtlCounter});
			atlArray.push({title: "ottawaAtl", score: ottAtlCounter});
			atlArray.push({title: "torontAtl", score: torAtlCounter});
			atlArray.push({title: "vancouverAtl", score: vanAtlCounter});
			atlArray.push({title: "winnipegAtl", score: wpgAtlCounter});

			console.log(atlArray);

		    var highScoreSoFar = 0;
		    var atlResult = [];
		    for (var i = 0; i < atlArray.length; i++) {
		        if (atlArray[i].score > highScoreSoFar) {
		            // new high score so start a new array with this player in it
		            atlResult = [atlArray[i]];
		            highScoreSoFar = atlArray[i].score;
		        } else if (atlArray[i].score === highScoreSoFar) {
		            // more than one player with this highScore so add this one to the array
		            atlResult.push(atlArray[i]);
		        }
		    }
		    console.log(atlResult);

		    if (atlResult[0].title == "calgaryAtl"){
		    	console.log("success");
		    	$("#atlanticMap").children().css("fill", "#FFCC66");
		    }
		    if (atlResult[0].title == "edmontonAtl"){
		    	console.log("success");
		    	$("#atlanticMap").children().css("fill", "#FF3300");
		    }
		    if (atlResult[0].title == "montrealAtl"){
		    	console.log("success");
		    	$("#atlanticMap").children().css("fill", "#AF1E2D");
		    }
		    if (atlResult[0].title == "torontoAtl"){
		    	console.log("success");
		    	$("#atlanticMap").children().css("fill", "#003876");
		    }
		    if (atlResult[0].title == "ottawaAtl"){
		    	console.log("success");
		    	$("#atlanticMap").children().css("fill", "#BF910C");
		    }
		    if (atlResult[0].title == "vancouverAtl"){
		    	console.log("success");
		    	$("#atlanticMap").children().css("fill", "#008752");
		    }
		    if (atlResult[0].title == "winnipegAtl"){
		    	console.log("success");
		    	$("#atlanticMap").children().css("fill", "#041E41");
		    }
		    if (atlResult.length !== 1) {
		    	$("#atlanticMap").children().css("fill", "#525252");
		    }
		    if (atlResult.length == 7) {
		    	$("#atlanticMap").children().css("fill", "lightgray");
		    }


		}
	}

	
}