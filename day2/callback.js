function attendance(callback)
{
    setTimeout(() =>
    {
        console.log("attendancce");
        callback();
    },2000);
}

function lunch(callback)
{
    console.log("taking lunch");
    callback();
}

function goingtohome(callback)
{
    console.log("Go to home");
    callback();
}
attendance(()=>{
    lunch(()=>{
        goingtohome(()=>{
            console.log("Day completed")
        })
    })
})