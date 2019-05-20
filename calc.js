var using = require('jasmine-data-provider');

describe('Calculator', function(){
    var el = require("./page_object/calculatorPO.js");
    var d = require("./data/add.js");
   
   
    beforeEach(function(){
        el.getURL();
    });
    using(d.Datadriven, function(data,description){
        it('Math operation - add',function(){
        
            el.operation(data.firstinput,data.secondinput,"+");
            expect(el.results.getText()).toBe(data.resultadd);
            el.results.getText().then(function(text){
                console.log(text);
            });
            
        });    
    });
    
});