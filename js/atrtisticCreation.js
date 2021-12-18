submitCreation=()=>{

    // 作品名称
    let name=document.getElementById("recipient-name").value;

    // 上传图片
    let input=document.getElementById("inputGroupFile02");
    // console.log("input:",input);
    let value=input.value;
    let valueItem=value.split("\\");
    // console.log("value:",value);
    // console.log(valueItem);
    let imgUrl=valueItem[valueItem.length-1];



}
