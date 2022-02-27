const {readFile,writeFile, read} = require('fs');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log('Error Occured'+err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log('Error Occured'+err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `Writing result :${first},${second}`,
        (err,result) => {
            if(err){
                console.log(err)
                return;
            }
            console.log(result)
        })
    })
    console.log(result);
})