(function(){

    function reduce(array, combine, start) {
        let current = start;
        for (let element of array) {
          current = combine(current, element);
        }
          return current;
        }
    
        var max=function(arry){
            return reduce(arry,
            function(a,b){
              return a<b.credit?b.credit:a;//最大值
            },0)
        }
        
        window.my={"max":max};

})()


