let calc={
    'sum':function(){
        let  result = this.num1 + this.num2;
        console.log(result);
    },
    'mul':function(){
        let  result = this.num1 * this.num2;
        console.log(result);
    },
    'div':function(){
        let  result = this.num1 / this.num2;
        console.log(result);
    },
    'diff':function(){
        let  result = this.num1 - this.num2;
        console.log(result);
    },
    'mod':function(){
        let result = this.num1 % this.num2;
        console.log(result);
    },
    'sum_apply':function(a,b,c){
        let result = a + b +c;
        console.log(result);
    },

    'mul_apply':function(a,b,c){
        let result = a * b  *c;
        console.log(result);
    },
};

var set1={
    'num1':6,
    'num2':3,
};

var set2={
     array:[6,3,2],
};

var set3={
    'num1':8,
    'num2':4,
}

console.log("[{(This is function call)}]");
console.log("6+3 is");
calc.sum.call(set1);
console.log("6*3 is");
calc.mul.call(set1);
console.log("6-3 is");
calc.diff.call(set1);
console.log("6%3 is");
calc.mod.call(set1);

console.log("[{(This is funtion apply)}]");
console.log("6+3+2");
calc.sum_apply.apply(set2,set2.array);
console.log("6*3*2");
calc.mul_apply.apply(set2,set2.array);

console.log("[{(this is funtion bind)}]");
console.log("8+4 is");
let new_sum=calc.sum.bind(set3);
new_sum();
console.log("8*4 is");
let new_mul=calc.mul.bind(set3);
new_mul();
console.log("8-4 is");
let new_diff=calc.diff.bind(set3);
new_diff();
console.log("8%4 is");
let new_mod=calc.mod.bind(set3);
new_mod(); 