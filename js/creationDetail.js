// creationDetail页存储的内容
let creation={
    name:"趵突泉木雕画",
    author:{
        avaterUrl:"images/person_8.png",
        avaterName:"ccyccyccy222"
    },
    info:{
        id:"0001",
        type:"美术作品类",
        releaseDate:"2021-12-01",
        introduction:"略"
    },
    like:123,
    coin:3,
    comment:[
        {
            username:"徐小白",
            avaterUrl: "images/person_10.png",
            content:"我觉得这个好漂亮！！",
        }
    ]
}

// 页面刚加载时调用的方法
initPage=()=>{
    // creation=JSON.stringify(creation);
    // sessionStorage.setItem("creationDetail",creation)
    creation=sessionStorage.getItem("creationDetail");
    creation=JSON.parse(creation);
    //初始化评论内容
    initComment();
}

initComment=()=>{
    for(let i=0;i<creation.comment.length;i++){
        let item=creation.comment[i];
        let username=item.username;
        let avaterUrl=item.avaterUrl;
        let content=item.content;

        // let ul=document.getElementById("commentUL");
        let li=document.getElementById("modelLi");
        let cloneNode=li.cloneNode(true);
        cloneNode.setAttribute("id","addCom"+i)
        cloneNode.style.display="block";
        let image=cloneNode.getElementsByTagName("img")[0];
        image.setAttribute("src",avaterUrl);
        let h4=cloneNode.getElementsByTagName("h4")[0];
        h4.innerHTML=username;
        let p=cloneNode.getElementsByTagName("p")[0];
        p.innerHTML=content;
        console.log(cloneNode);
        li.parentNode.appendChild(cloneNode);
        let hr=document.createElement("hr");
        li.parentNode.appendChild(hr);
    }


}

// 点击小图标调用的方法
changeColor=(id)=>{
    let ele=document.getElementById(id);
    let color;
    switch (id){
        case "heart":
            color="red";
            break;
        case "coin":
            color="#eea94a";
            break;
    }
    ele.style.color=color;
    let p=ele.getElementsByTagName("p")[0];
    // let p=document.getElementById(id+"_p");
    let text=p.innerHTML;
    console.log(text);
    p.innerHTML=String(Number(text) + 1);
}

// 发表评论的方法
submit=()=>{
    let content=document.getElementById("message-text").value;
    console.log(content);

    let item={...creation.comment[0]};
    item.content=content;
    creation.comment.push(item);
    creation=JSON.stringify(creation);
    sessionStorage.setItem("creationDetail",creation);
    location.reload();
}



