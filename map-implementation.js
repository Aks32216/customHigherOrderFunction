Array.prototype.customMap = function(callbackFn){
    let resultArray=[];
    for(let index=0;index<this.length;++index){
        let curMappedValue = callbackFn(this[index],index,this);
        resultArray.push(curMappedValue);
    }
    return resultArray;
}

let numbers=[1,3,4,4,23];

// squaring numbers

squaredNumbers=numbers.customMap((num)=>{return num*num});

console.log(squaredNumbers);


// tripling numbers

tripledNumbers=numbers.customMap((num)=>{return 3*num});

console.log(tripledNumbers);