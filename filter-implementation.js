Array.prototype.customFilter = function(callbackFn){
    let resultArray=[];
    for(let index=0;index<this.length;++index){
        let isEligibleToResultArray = callbackFn(this[index],index,this);
        if(isEligibleToResultArray){
            resultArray.push(this[index])
        }
    }
    return resultArray;
}

let numbers = [13,24,32,54,25,64,43];

let evenNumbers=numbers.customFilter((num)=>{return num%2===0})

console.log(`Even Numbers : ${evenNumbers}`)

let names=["amish","ashutosh","ritesh","rashmi"];

let namesStartingWithA=names.customFilter((name)=>{return name[0]==='a'});

console.log(namesStartingWithA)