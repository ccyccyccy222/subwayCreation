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

creation=JSON.stringify(creation);
localStorage.setItem("creationDetail",creation)
