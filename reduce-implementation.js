Array.prototype.customReduce = function(callbackFn){
    let initialVal=this[0];
    for(let index=1;index<this.length;++index){
        initialVal=callbackFn(initialVal,this[index]);
    }
    return initialVal;
}

let numbers=[12,45,87,98,33,32];

let sum=numbers.customReduce((acc,num)=>{return acc+num})

console.log(`Sum of the elements is : ${sum}`);

let minNumber=numbers.customReduce((acc,num)=>{return Math.min(acc,num)});

console.log(`Minimum number is : ${minNumber}`)
