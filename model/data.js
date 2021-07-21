var dat=[]
var arr=['name','email_id','age','sex']
const populate=(data)=>{
    for(let i=0;i<data.length;i++){
        var nw={}
        for(j=0;j<4;j++){
            nw[arr[j]]=data[i][arr[j]]
        }
        dat.push(nw)
    }
}

const givedata=()=>{
    return dat
}


module.exports={
    populate:populate,
    givedata:givedata
}