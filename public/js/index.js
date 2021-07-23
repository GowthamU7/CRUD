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
                var del=document.createElement('button')
                var edit=document.createElement('button')
                edit.innerHTML=`<html>
                <head>
                <title>Make</title>
                </head>
                <style>
                .up{
                    width: 10px;
                    height:10px;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                    background-color: blue;
                }
                .inside{
                    margin-top: 1px;
                    width: 10px;
                    height:20px;
                    background-color: blue;
                }
                .ground{
                    width: 0;
                    height: 0;
                    margin-top: 1px;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    border-top: 10px solid blue;
                }
                .main{
                    transform: rotate(30deg);
                    width:10px;
                    height:auto;
                    text-align: center;
                    margin-left:8px;
                }
                </style>
                <body>
                    <div class="shape">
                    <div class="main">
                        <div class="up">
                        </div>
                        <div class="inside">
                        </div>
                        <div class="ground">
                        <div>  
                    </div>
                    </div>
                </body></html>  `
                del.innerHTML=`<html>
                <head>
                </head>
                <style>
                .top{
                    width: 20px;
                    height: 5px;
                    margin-left:5px;
                    background-color: blue;
                    border-top-left-radius: 5px;
                    border-top-right-radius: 5px;
                }
                .bottom{
                    margin-left:5px;
                    margin-top: 1px;
                    width: 20px;
                    height: 20px;
                    background-color: blue;
                }
                .one{
                    background-color: white;
                    width: 1px;
                    height: 15px;
                }
                .two{
                    background-color: white;
                    width: 1px;
                    height: 15px;
                }
                .three{
                    background-color: white;
                    width: 1px;
                    height: 15px;
                }
                .cap{
                    width: 4px;
                    height: 4px;
                    background-color: blue;
                    border-radius: 50px;
                    margin-left: 13px;
                }
                </style>
                <body>
                <div class="cap"></div>
                <div class="top"></div>
                <div class="bottom">
                <table>
                    <tr>
                        <th><div class="one"></div></th>
                        <th><div class="two"></div></th>
                        <th><div class="three"></div></th>
                        <th><div class="four"></div></th>
                    </tr>
                <table>
                </div>
                </body>
                </html>`
                edit.setAttribute('onclick','edit(this)')
                edit.setAttribute('id',newdata[i]._id)
                del.setAttribute('onclick','edit(this)')
                del.setAttribute('id',newdata[i]._id+'####')
                var td=document.createElement('td')
                var p=document.createElement('p')
                td.appendChild(edit)
                td.appendChild(del)
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
    var id=e.id
    var x=''
    x=x+id[id.length-1]+id[id.length-2]+id[id.length-3]+id[id.length-4]
    if(x=='####'){
        let nid=''
        for(let i=0;i<id.length-4;i++){
            nid+=id[i]
        }
        const url=`/del_user/${nid}`
        return window.location.assign(url) 
    }
    const url=`/user/${e.id}`
    window.location.assign(url)
}

