var arr= [7,66,14,20,25,37,50,69,73,98]
var n=66

function check(arr, n)
{
    var index=-1
    arr.find(function (item, ind){

        if(item==n){index=ind
        return true}
        
        else
        {
            return false
        }
    })
    return index
}

var c = check(arr, n);
console.log(c)