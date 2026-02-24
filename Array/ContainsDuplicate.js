var containsDuplicate = function (nums){
    let myset = new Set();
    for(const num of nums){
        if(myset.has(num)){
            return true;
        }
        myset.add(num)
    }
    return false;
}
console.log(containsDuplicate([1,2,3,1]));