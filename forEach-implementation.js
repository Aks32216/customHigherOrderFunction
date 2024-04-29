Array.prototype.customForEach = function(callbackFn){
    if(this.length<1){
        throw new Error("Array is Empty");
    }
    for(let index=0;index<this.length;++index){
        callbackFn(this[index]);
    }
}

let numbers=[199,54,98,35,24,53];
let sum=0;

numbers.customForEach((num)=>{sum+=num});
console.log(`Sum of Numbers is : ${sum}`);

let minNumber=Number.MAX_VALUE;

numbers.customForEach((num)=>{
    if(num<minNumber){
        minNumber=num;
    }
})

console.log(`Minimum number is : ${minNumber}`)
