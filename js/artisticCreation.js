initCreation=()=>{
    let creations=sessionStorage.getItem("creations");
    creations=JSON.parse(creations);
    let cardDeck=document.getElementById("contentEmpty");
    let card=document.getElementById("cardEmpty");
    let row=Math.ceil(creations.length/3);
    console.log("row:"+row);
    let cloneCardDecks=[];
    let cloneCard=[];
    for(let i=0;i<row;i++){
        cloneCardDecks.push(cardDeck.cloneNode(true));
        // cloneCardDecks[i].setAttribute("id","cloneCardDecks"+i);
        cloneCardDecks[i].style.display="flex";
        cloneCardDecks[i].id="cloneCardDecks"+i;

        // 对每个cloneCardDeck加上元素
        for(let j=0;j<3;j++){
            cloneCard.push(card.cloneNode(true));
            cloneCard[i*3+j].style.display="block";
            cloneCard[i*3+j].id="cloneCard"+i+j;
            let img=cloneCard[i*3+j].getElementsByTagName("img")[0];
            img.src=creations[i*3+j].imgUrl;
            let h3=cloneCard[i*3+j].getElementsByTagName("h3")[0];
            h3.innerHTML=creations[i*3+j].name;
            cloneCard[i*3+j].getElementsByTagName("p")[0].innerHTML="作者："+creations[i*3+j].author.avaterName;
            cloneCard[i*3+j].getElementsByTagName("p")[1].innerHTML="作品编号："+creations[i*3+j].info.id;
            cloneCard[i*3+j].getElementsByTagName("p")[2].innerHTML="作品分类："+creations[i*3+j].info.type;
            cloneCard[i*3+j].getElementsByTagName("p")[3].innerHTML="发布日期："+creations[i*3+j].info.releaseDate;
            cloneCardDecks[i].appendChild(cloneCard[i*3+j]);
        }

        cardDeck.parentNode.appendChild(cloneCardDecks[i]);

    }
    console.log(cardDeck.parentNode)
    // let cloneCardDeck=modal.cloneNode(true);
    // cloneCardDeck

}


submitCreation=()=>{

    // 作品名称
    let name=document.getElementById("recipient-name").value;
    //作品简介
    let intro=document.getElementById("recipient-intro").value;

    //计算这是第几个作品
    let creations=JSON.parse(sessionStorage.getItem("creations"));
    let length=creations.length;
    console.log("length:"+length);

    // 上传图片
    let input=document.getElementById("inputGroupFile02");
    // console.log("input:",input);
    let value=input.value;
    let valueItem=value.split("\\");
    // console.log("value:",value);
    // console.log(valueItem);
    let imgUrl="uploadImage/"+valueItem[valueItem.length-1];

    // 在页面中添加
    let div=document.getElementById("addCreationDiv");
    let cloneNode=div.cloneNode(true);
    cloneNode.setAttribute("id","addCreation"+length)
    cloneNode.style.display="block";
    let image=cloneNode.getElementsByTagName("img")[0];
    image.setAttribute("src",imgUrl);
    let h4=cloneNode.getElementsByTagName("h3")[0];
    h4.innerHTML=name;
    cloneNode.getElementsByTagName("p")[0].innerHTML="作者："+name;
    cloneNode.getElementsByTagName("p")[1].innerHTML="作品编号：000"+length;
    cloneNode.getElementsByTagName("p")[2].innerHTML="作品分类："+name;
    cloneNode.getElementsByTagName("p")[3].innerHTML="发布日期："+Date.now();
    div.parentNode.appendChild(cloneNode);

    // 存入sessionStorage中
    let creation={
        imgUrl:imgUrl,
        name:name,
        author:{
            avaterUrl:"images/person_1.jpg",
            avaterName:"ccyccyccy222"
        },
        info:{
            id:"000"+length,
            type:"美术作品类",
            releaseDate:Date.now(),
            introduction:intro
        },
        like:0,
        coin:0,
        comment:[]
    }
    creations.push(creation);
    sessionStorage.setItem("creations",JSON.stringify(creations))
}
