//パソコンだとエラー画面に飛ぶ
window.onload= function(){
    if (window.matchMedia('(min-width:768px)').matches) location="../error/index.html";
    if(localStorage.getItem("cs_id")) location="../home/index.html"
}

//ボタンを押したときの処理
async function send(){
    const id=document.getElementById("invite_num").value;
    if(id=="a1007"||id=="1acenoel"||id=="0rehly20"||id=="9avhw312"){
        await fetch(`https://script.google.com/macros/s/AKfycbxeci6Wtt-jd72sGCTIo7UedQ1eIwwEDrZdDM4bO4Xh8cM59i-po-za9Us9u-1l7r9qVQ/exec?number=${id}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.use) alert("その招待コードはすでに使用されています");
            else{
                localStorage.setItem('cs_id', id);
                location="../home/index.html";
            }
        })
    }
    else alert("コードが正しくありません");
}