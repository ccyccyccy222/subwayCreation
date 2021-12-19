let creations=[];
let creation1={
    imgUrl:"images/product1.jpg",
    name:"黄河汹涌",
    author:{
        avaterUrl:"images/person_1.jpg",
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
let creation2={
    imgUrl:"images/product2.jpg",
    name:"忆泉城系列",
    author:{
        avaterUrl:"images/person_8.png",
        avaterName:"周淑芬"
    },
    info:{
        id:"0002",
        type:"美术作品类",
        releaseDate:"2021-12-01",
        introduction:"略"
    },
    like:121,
    coin:0,
    comment:[
        {
            username:"徐小白",
            avaterUrl: "images/person_10.png",
            content:"我觉得这个好漂亮！！",
        }
    ]
}
let creation3={
    imgUrl:"images/product3.jpg",
    name:"忆泉城系列",
    author:{
        avaterUrl:"images/person_3.jpg",
        avaterName:"LeBron Jobs"
    },
    info:{
        id:"0003",
        type:"美术作品类",
        releaseDate:"2021-12-01",
        introduction:"略"
    },
    like:100,
    likeColor:"none",
    coin:5,
    coinColor:"none",
    comment:[
        {
            username:"徐小白",
            avaterUrl: "images/person_10.png",
            content:"我觉得这个好漂亮！！",
        }
    ]
}
let creation4={
    imgUrl:"images/product5.png",
    name:"站台",
    author:{
        avaterUrl:"images/person_8.png",
        avaterName:"周淑芬"
    },
    info:{
        id:"0004",
        type:"美术作品类",
        releaseDate:"2021-11-20",
        introduction:"略"
    },
    like:21,
    coin:3,
    comment:[
        {
            username:"徐小白",
            avaterUrl: "images/person_10.png",
            content:"我觉得这个好漂亮！！",
        }
    ]
}
let creation5={
    imgUrl:"images/product4.jpg",
    name:"忆泉城系列",
    author:{
        avaterUrl:"images/person_5.png",
        avaterName:"Ferdinand A. Porsche"
    },
    info:{
        id:"0005",
        type:"美术作品类",
        releaseDate:"2021-12-03",
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
let creation6={
    imgUrl:"images/product6.png",
    name:"地铁车厢",
    author:{
        avaterUrl:"images/person_6.png",
        avaterName:"Frank Chimero"
    },
    info:{
        id:"0006",
        type:"美术作品类",
        releaseDate:"2021-11-27",
        introduction:"略"
    },
    like:123,
    coin:0,
    comment:[
        {
            username:"徐小白",
            avaterUrl: "images/person_10.png",
            content:"我觉得这个好漂亮！！",
        }
    ]
}


initData=()=>{
    creations.push(creation1);
    creations.push(creation2);
    creations.push(creation3);
    creations.push(creation4);
    creations.push(creation5);
    creations.push(creation6);
    sessionStorage.setItem("creations",JSON.stringify(creations));
    sessionStorage.setItem("filterCreations",JSON.stringify(creations))
}
