exports.config = {
   // seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // capabilities: {
    //   browserName: 'chrome'
    // },
  
    specs: ['calc.js'],
    onPrepare :function()
{
    browser.driver.manage().window().maximize();
}
};