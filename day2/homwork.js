function func1(x,func2){
    setTimepout=(()=>{
        console.log(`file ${x} is being procession`);
        func2(x);
    },2000);
}
function func2(x){
    setTimeout=(()=>{
        console.log(`file ${x} is downloading`);
   
    },1000);
}
let a="abc"
func1(a,func2);