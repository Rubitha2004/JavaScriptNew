function attendance()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let attend=true;
            if(attend)
            resolve("Attendance present");
        else
        reject("Attendance Absent");
            
        },2000);
    })
}
function lunch()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let lun=true;
            if(lun)
            resolve("Had a lunch");
        else
        reject("Not an lunch");
            
        },1000);
    })
}
function goingtohome()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let home=false;
            if(home)
            resolve("Attendance present");
        else
        reject("Attendance Absent");
            
        },1000);
    })
}