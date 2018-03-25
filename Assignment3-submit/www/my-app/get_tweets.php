<?php

	require_once('TwitterAPIExchange.php');

	$settings = array(
	    'oauth_access_token' => "975794550860955652-vzLTQMrIw5oviTsKf4AiCZ80KWk1CGa",
	    'oauth_access_token_secret' => "sfJmedGGnTVJeqgfNCpcoRrglAdpk58pBcPjVDoVndiyO",
	    'consumer_key' => "nyoYqQAPFd6Hej5alKghRA7I8",
	    'consumer_secret' => "dxlBogJPQEsUWWrIx0layjgCil9uXXmNnDhw9zgyRAagb9Q2Zm"
	);

	$url = "https://api.twitter.com/1.1/search/tweets.json";
	$getfield = '?q=#gohabsgo+OR+#cofred+OR+#LetsGoOilers+OR+#Sens+OR+#TMLtalk+OR+#Canucks+OR+#GoJetsGo&count=100';
	$requestMethod = 'GET';

	$twitter = new TwitterAPIExchange($settings);
	echo $twitter->setGetfield($getfield)
	    ->buildOauth($url, $requestMethod)
	    ->performRequest();

?>