$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\features\\amazon.feature");
formatter.feature({
  "name": "Amazon search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@amazon"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Amazon search test 1",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the amazon homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"\u003citem\u003e\" keyword",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Amazon search button",
  "keyword": "And "
});
formatter.step({
  "name": "User should see \"\u003citem\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "item"
      ]
    },
    {
      "cells": [
        "headphone"
      ]
    },
    {
      "cells": [
        "ipod"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Amazon search test 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonSearchSteps.user_is_on_the_amazon_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"headphone\" keyword",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonSearchSteps.user_enters_keyword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Amazon search button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonSearchSteps.user_clicks_on_Amazon_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see \"headphone\" in results",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonSearchSteps.user_should_see_in_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Amazon search test 1",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the amazon homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonSearchSteps.user_is_on_the_amazon_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"ipod\" keyword",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonSearchSteps.user_enters_keyword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Amazon search button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonSearchSteps.user_clicks_on_Amazon_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see \"ipod\" in results",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonSearchSteps.user_should_see_in_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});