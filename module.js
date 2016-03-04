/**
 * Created by Bente on 02-03-2016.
 */

function add(n1,n2){
    return n1+n2;
}

function subtrack(n1,n2){
    return n1-n2;
}

function divide(n1, n2){
    if(n1==0 || n2==0){
        throw new Error('Attempt to divide by zero')
        }
        result = n1/n2
        return result;
}

function addAsync(n1,n2,callback){
    setTimeout(function(){
        var result = n1+n2;
        callback(result);
    },1000);
}

module.exports.add = add;
module.exports.subtrack = subtrack;
module.exports.divide = divide;
module.exports.addAsync = addAsync;

// Here I just test inside the module... not a really test!!!!
//var res = addAsync(5,5,function(res){
//    console.log("Result: ", res);
//});


