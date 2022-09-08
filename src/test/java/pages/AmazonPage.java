package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class AmazonPage {
    WebDriver driver;

//    public HomePage(){
//
//        driver = Driver.getDriver();
//        PageFactory.initElements(driver, this);
//
//    }
// Updating locators

    @FindBy(id = "twotabsearchtextbox")
    public WebElement amazonSearchBox;

    @FindBy(xpath = "(//span[@class='a-size-medium a-color-base a-text-normal'])[1]")
    public WebElement amazonSearchResult;

     @FindBy(xpath = "//input[@type='submit']")
    public WebElement amazonSearchButton;
}
//    List<WebElement> linklist = driver.findElements(By.xpath(“//table/tr”));