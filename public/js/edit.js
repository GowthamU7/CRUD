

document.getElementById('del').addEventListener('click',(e)=>{
    e.preventDefault()
    var id=''
    var url=window.location.href
    for(i=url.length-1;i>-1;i--){
        if(url[i]!='/'){
            id=url[i]+id
        }
        else{
            break
        }
    }
    var newurl=`/del_user/${id}`
    return window.location.assign(newurl)
})