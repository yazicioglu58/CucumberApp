package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.AmazonPage;
import utilities.Config;
import utilities.Driver;

public class AmazonSearchSteps {

    AmazonPage amazonPage = new AmazonPage();

    @Given("User is on the amazon homepage")
    public void user_is_on_the_amazon_homepage() {
        Driver.getDriver().get(Config.getProperty("url"));
    }

    @When("User enters {string} keyword")
    public void user_enters_keyword(String item) {
        amazonPage.amazonSearchBox.sendKeys(item);

    }

    @When("User clicks on Amazon search button")
    public void user_clicks_on_Amazon_search_button() {
        amazonPage.amazonSearchButton.click();
    }

    @Then("User should see {string} in results")
    public void user_should_see_in_results(String item) {
        String actualText = amazonPage.amazonSearchResult.getText().toLowerCase();
        Assert.assertTrue("The keyword {string} was not located", actualText.contains(item));
    }



}
