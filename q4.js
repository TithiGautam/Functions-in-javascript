function CalculateTax(income){
    const tax = [{
        limit:10000,rate:0.2
    },{limit:20000,rate:0.3},{limit:Infinity,rate:0.3}];
    return function(){
        for(let bracket of tax){
            if(income <= bracket.limit){
                return income * bracket.rate;
            }
        }
    };        
}
const lowIncomeTax = CalculateTax(9000)();
const midIncomeTax = CalculateTax(19000)();
const highIncomeTax = CalculateTax(50000)();

console.log(lowIncomeTax);
console.log(midIncomeTax);
console.log(highIncomeTax);