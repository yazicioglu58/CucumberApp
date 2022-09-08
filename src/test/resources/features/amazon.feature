@amazon
Feature: Amazon search

  Scenario Outline: Amazon search test 1
    Given User is on the amazon homepage
    When User enters "<item>" keyword
    And User clicks on Amazon search button
    Then User should see "<item>" in results
Examples:
  |item|
  |headphone    |
  |ipod    |


