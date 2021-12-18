initCreation=()=>{
    let creations=sessionStorage.getItem("filterCreations");
    creations=JSON.parse(creations);
    // console.log(creations);
    // console.log("creations[0].imgUrl:"+creations[0].imgUrl);
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
        cloneCardDecks[i].style.justifyContent="flex-start";
        // cloneCardDecks[i].style.flex="1 1 auto";
        cloneCardDecks[i].id="cloneCardDecks"+i;



        let len=3;
        if(i===row-1&&creations.length%3!==0) len=creations.length%3
        // 对每个cloneCardDeck加上元素
        for(let j=0;j<len;j++){
            cloneCard.push(card.cloneNode(true));
            let href="CreationDetail.html"+"?id="+(i*3+j+1);
            cloneCard[i*3+j].onclick=()=>{window.location.href=href;}
            console.log("cloneCard[i * 3 + j].onclick:"+cloneCard[i * 3 + j].onclick);
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

showAll=()=>{
    console.log("in show all")
    sessionStorage.setItem("filterCreations",sessionStorage.getItem("creations"));
    // initCreation();
    location.reload()
}


submitCreation=()=>{

    // 作品名称
    let name=document.getElementById("recipient-name").value;
    //作品简介
    let intro=document.getElementById("recipient-intro").value;
    let type=document.getElementsByName("type");
    console.log(type);
    let thisType;
    for(let i=0;i<type.length;i++){
        if(type[i].checked===true){
            thisType=type[i].value;
            break;
        }
    }
    console.log("type:"+thisType);

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
    // let div=document.getElementById("addCreationDiv");
    // let cloneNode=div.cloneNode(true);
    // cloneNode.setAttribute("id","addCreation"+length)
    // cloneNode.style.display="block";
    // let image=cloneNode.getElementsByTagName("img")[0];
    // image.setAttribute("src",imgUrl);
    // let h4=cloneNode.getElementsByTagName("h3")[0];
    // h4.innerHTML=name;
    // cloneNode.getElementsByTagName("p")[0].innerHTML="作者："+name;
    // cloneNode.getElementsByTagName("p")[1].innerHTML="作品编号：000"+length;
    // cloneNode.getElementsByTagName("p")[2].innerHTML="作品分类："+name;
    // cloneNode.getElementsByTagName("p")[3].innerHTML="发布日期："+Date.now();
    // div.parentNode.appendChild(cloneNode);

    let date=new Date();

    // 存入sessionStorage中
    let creation={
        imgUrl:imgUrl,
        name:name,
        author:{
            avaterUrl:"images/person_1.jpg",
            avaterName:"ccyccyccy222"
        },
        info:{
            id:"000"+(length+1),
            type:type,
            releaseDate:date.Format("yyyy-MM-dd"),
            introduction:intro
        },
        like:0,
        coin:0,
        comment:[]
    }
    creations.push(creation);
    sessionStorage.setItem("creations",JSON.stringify(creations));
    sessionStorage.setItem("filterCreations",JSON.stringify(creations));
    location.reload();
}

// 查找功能
find=()=>{
    let value=document.getElementById("findInput").value;
    console.log(value);
    if(value==='') {
        // let filterCreations=JSON.parse(sessionStorage.getItem("creations"));
        sessionStorage.setItem("filterCreations",sessionStorage.getItem("creations"));
        // console.log(filterCreations);
        // location.reload();
    }
    else{
        let filterCreations=JSON.parse(sessionStorage.getItem("creations"));
        for(let i=0;i<filterCreations.length;i++){
            let name=filterCreations[i].name;
            let id=filterCreations[i].info.id;
            if(name.indexOf(value)===-1&&id.indexOf(value)===-1){
                //名字不包含要查询的字符串且id也不包含，则删除
                filterCreations.splice(i,1);
                i--;
            }
        }
        console.log(filterCreations);
        sessionStorage.setItem("filterCreations",JSON.stringify(filterCreations));
        // location.reload();
    }
    // location.reload();
}

Date.prototype.Format = function (fmt) { // author: meizz
    const o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (const k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
