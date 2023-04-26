function myDisplayer(some){
    aloo = 0;
}

let mypromise = new Promise(function(myResolve, myReject){
    let x = 0;
    if(x==0){
        myResolve("Ok");
    }else{
        myReject("error");
    }
});

mypromise.then(
    function(value){
        
    }
)