var newdata=[]
var serv=''
var mainserv=''
var field=['name','email_id','sex','age']
const tabchild=document.getElementById('dt')
fetch('/data_of_the_employees').then((res)=>{
    res.json().then((data)=>{
        if(data.error){
            return
        }
        else{
            newdata=data
            for(let i=0;i<newdata.length;i++){
                var tr=document.createElement('tr')
                for(let j=0;j<4;j++){
                    var td=document.createElement('td')
                    td.innerText=newdata[i][field[j]]
                    tr.appendChild(td)
                }
                var edit=document.createElement('button')
                edit.innerHTML='Edit | Delete'
                edit.setAttribute('onclick','edit(this)')
                edit.setAttribute('id',newdata[i]._id)
                var td=document.createElement('td')
                td.appendChild(edit)
                tr.appendChild(td)
                tabchild.appendChild(tr)
            }
        }
    })
})



document.getElementById('newuser_button').addEventListener('click',(e)=>{
    e.preventDefault()
    window.location.assign('/new_user')
})

function edit(e){
    const url=`/user/${e.id}`
    window.location.assign(url)
}

