// creationDetail页存储的内容
// let creation={
//     name:"趵突泉木雕画",
//     author:{
//         avaterUrl:"images/person_8.png",
//         avaterName:"ccyccyccy222"
//     },
//     info:{
//         id:"0001",
//         type:"美术作品类",
//         releaseDate:"2021-12-01",
//         introduction:"略"
//     },
//     like:123,
//     coin:3,
//     comment:[
//         {
//             username:"徐小白",
//             avaterUrl: "images/person_10.png",
//             content:"我觉得这个好漂亮！！",
//         }
//     ]
// }

let creation=[];
let creationElement;

initDetailPage=()=> {
    // 第一个img是上面的logo
    let container=document.getElementsByClassName("gtco-container")[1];
    let img=container.getElementsByTagName("img")[0];
    img.src=creationElement.imgUrl;

    <!-- 作者部分-->
    let infoRight=container.getElementsByClassName("info-show-right")[0];
    let h2=infoRight.getElementsByTagName("h2")[0];
    h2.innerHTML=creationElement.name
    let authorImg=infoRight.getElementsByTagName("img")[0];
    authorImg.src=creationElement.author.avaterUrl;
    let authorName=infoRight.getElementsByTagName("h3")[0];
    authorName.innerHTML=creationElement.author.avaterName;

    <!--作品信息部分-->
    let p=infoRight.getElementsByTagName("p")[0];
    p.innerHTML="作品编号："+creationElement.info.id;
    p=infoRight.getElementsByTagName("p")[1];
    p.innerHTML="作品分类："+creationElement.info.type;
    p=infoRight.getElementsByTagName("p")[2];
    p.innerHTML="发布日期："+creationElement.info.releaseDate;
    p=infoRight.getElementsByTagName("p")[3];
    p.innerHTML="作品简介："+creationElement.info.introduction;


    <!--点赞部分-->
    let ele=document.getElementById("heart");
    ele.style.color=creationElement.likeColor;
    let p0=document.getElementById("heart_p");
    p0.innerHTML=creationElement.like;
    ele=document.getElementById("coin");
    ele.style.color=creationElement.coinColor;
    let p1=document.getElementById("coin_p");
    p1.innerHTML=creationElement.coin;

}


initComment=()=>{

    for(let i=0;i<creationElement.comment.length;i++){
        let item=creationElement.comment[i];
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

// 页面刚加载时调用的方法
initPage=()=>{
    let url = decodeURI(window.location.href);
    let argsIndex = url .split("?id=");
    let id = argsIndex[1];
    console.log("id:"+id);
    // creation=JSON.stringify(creation);
    // sessionStorage.setItem("creationDetail",creation)
    creation=sessionStorage.getItem("creations");
    creation=JSON.parse(creation);

    creationElement=creation[id-1];

    // 初始化页面内容
    initDetailPage();

    //初始化评论内容
    initComment();
}

// 点击小图标调用的方法
changeColor=(id)=>{
    console.log("In change")
    let ele=document.getElementById(id);
    switch (id){
        case "heart":
            creationElement.likeColor="red";
            creationElement.like=Number(creationElement.like) + 1;
            break;
        case "coin":
            creationElement.coinColor="#eea94a";
            creationElement.coin=Number(creationElement.coin) + 1;
            break;
    }
    creation=JSON.stringify(creation);
    sessionStorage.setItem("creations",creation);
    location.reload();
    // ele.style.color=color;
    // let p=ele.getElementsByTagName("p")[0];
    // // let p=document.getElementById(id+"_p");
    // let text=p.innerHTML;
    // console.log(text);
    // p.innerHTML=String(Number(text) + 1);
}

// 发表评论的方法
submit=()=>{
    let content=document.getElementById("message-text").value;
    console.log(content);

    let item={...creationElement.comment[0]};
    item.content=content;
    creationElement.comment.push(item);
    creation=JSON.stringify(creation);
    sessionStorage.setItem("creations",creation);
    location.reload();
}



