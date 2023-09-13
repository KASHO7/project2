'use strict';
function MakeMultiFilter(originalArray){
    let arrayFilterer = originalArray.slice();
    function arrayFilterer(filterCriteria, callback){

        if(typeof filterCriteria === 'function'){
            arrayFilterer = arrayFilterer.filter(filterCriteria);
        }
}