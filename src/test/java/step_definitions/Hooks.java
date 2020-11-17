package step_definitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import utilities.Config;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

public class Hooks {



    @Before
    public void setUp() throws InterruptedException {
        Driver.getDriver().manage().timeouts().implicitlyWait(7, TimeUnit.SECONDS);
        Driver.getDriver().manage().window().maximize();
        Driver.getDriver().get(Config.getProperty("url"));
    }

    @After
    public void tearDown(Scenario scenario){

        if (scenario.isFailed()) {

            final byte[] screenshot = ((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);

            scenario.embed(screenshot, "image/png");
        }

        Driver.closeDriver();
    }

}