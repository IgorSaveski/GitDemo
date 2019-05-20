function calculator()
{
    this.firstNumber = element(by.model("first"));
    this.secondNumber = element(by.model("second"));
    this.goButton = element(by.id("gobutton"));
    this.results=element(by.css("h2[class='ng-binding']"));
    this.mathOperations=element.all(by.tagName("option"));
    
    this.getURL=function(){
    browser.get("http://juliemr.github.io/protractor-demo/");
    };

    this.operation=function(number1,number2,operations){
        this.firstNumber.sendKeys(number1);
        this.secondNumber.sendKeys(number2);
        this.mathOperations.each(function(item){
            item.getText().then(function(values){
                if(values==operations){
                    item.click();
                }
            });
        });
        this.goButton.click();

    };
}
module.exports = new calculator();
