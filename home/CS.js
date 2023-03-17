const dataUrl=`https://script.google.com/macros/s/AKfycbzbzWacliy20JzDewPD-yJe54yX9l3W-wa1PglJ3jKXB4yUthjsKONArNJMS7p70220Bg/exec?number=${localStorage.getItem("cs_id")}`;

function witchCheck(json){
    if(json.rabbitwhole) {
        document.getElementById("rabbit").insertAdjacentHTML("afterbegin",`<img src="./img/兎穴.png"">`);
    }
    if(json.witch){
        if(localStorage.getItem("cs_id")=="a1007") $('body').css({backgroundImage:`url("./img/スマホ画面アリス.png")`});
        if(localStorage.getItem("cs_id")=="1acenoel") $('body').css({backgroundImage:`url("./img/スマホ画面ドロシー.png")`});
    }
    else $('body').css({backgroundImage:`url("./img/スマホ画面.png")`});
}

window.onload= async function(){
    if (window.matchMedia('(min-width:768px)').matches) {
        location="../error/index.html";
    }
    fetch(dataUrl)
    .then(res=>res.json())
    .then(json=>{
        witchCheck(json);
        if(localStorage.getItem("cs_id")=="a1007") document.getElementById("code").insertAdjacentHTML("beforeend","『1acenoel』");
        if(localStorage.getItem("cs_id")=="1acenoel") document.getElementById("code").insertAdjacentHTML("beforeend","『020rehly』");
        if(localStorage.getItem("cs_id")=="0rehly20") document.getElementById("code").insertAdjacentHTML("beforeend","『9avhw312』");
        if(localStorage.getItem("cs_id")=="9avhw312") document.getElementById("code").insertAdjacentHTML("beforeend","『0rehly20』");
    })
}

$(function () {
    //物語
    $('#story').click(async function(){
        $(`#loadArea`).fadeIn();
        await fetch(dataUrl)
        .then(res=>res.json())
        .then(json=>{
            $(`#loadArea`).fadeOut();
            if(json.story) alert("今日の分は既に書いています。");
            else $('#modalArea').fadeIn();
            witchCheck(json);
        })
        
    });
    $('#closeModal , #modalBg').click(function(){
      $('#modalArea').fadeOut();
    });
    $('#storySend').click(function(){
        $('#check').fadeIn();
    });
    $('#no').click(function(){
        $('#check').fadeOut();
    });
    $('#yes').click(function(){
        $('#modalArea').fadeOut();
        $('#check').fadeOut();
        const diary=document.getElementById("today").value.replace(/\n/g,"<br>");
        fetch(`https://script.google.com/macros/s/AKfycbxnb7qW7Iom1tAL1BqRqWQbyq2pO2KO5dos3ux9kg_cxkJwMKr3HMWsFmKSkGZ_woY9/exec?number=${localStorage.getItem("cs_id")}?${diary}`)
    });

    //伝誦
    $('#densyou').click(function(){
        $(`#loadArea`).fadeIn();
        fetch(dataUrl)
        .then(res=>res.json())
        .then(json=>{
            $(`#loadArea`).fadeOut();
            if(!json.densyou) $('#densyouArea').fadeIn();
            else alert(`今日はすでに交換しています。`);
            witchCheck(json);
        })
        
    })
    $(`#yes1`).click(function(){
        $('#densyouArea').fadeOut();
        fetch(`https://script.google.com/macros/s/AKfycbx-mjLvBJjDLIyO_irAjUK_h4AURP_Bbnwf51_klfin9f15HLNbzNijWNakiMbC-O4W6A/exec?number=${localStorage.getItem("cs_id")}`)
    })

    $(' #no1 , #densyouBg').click(function(){
        $('#densyouArea').fadeOut();
    })

    //歴史
    $('#history').click(async function(){
        $(`#loadArea`).fadeIn();
        await fetch(dataUrl)
        .then(res=>res.json())
        .then(json=>{
            $(`#loadArea`).fadeOut();
            const date=["〇","×","▽","□","☆"];
            const day=["月","火","水","木","金"];
            let text="";
            json.diary.forEach((element,index) => {
                text+=`<div class="nikki">6月${date[index]}日(${day[index]})</div><div class="nikki">　${element}</div>`
            });
            if(text=="") text=`<div id="no_diary">まだ何も書いていません。</div>`
            witchCheck(json);
            return text
        })
        .then(text=>{
            const historylist=document.getElementById("historylist")
            if(historylist.childElementCount==1)
                historylist.insertAdjacentHTML("beforeend",text);
            else if(historylist.childElementCount==2){
                document.getElementById("no_diary").remove();
                historylist.insertAdjacentHTML("beforeend",text)
            }
            else{
                let children = document.getElementsByClassName('nikki');
                //子要素数取得
                let len = children.length;
                for(let i = 0; i < len; i++){
                    historylist.removeChild(children[0]);
                }
                historylist.insertAdjacentHTML("beforeend",text)
            }
        })
        $('#historyArea').fadeIn();
    })
    $('#historyBg , #closehistoryModal').click(function(){
        $('#historyArea').fadeOut();
    })

    //書庫
    $('#library').click(async () => {
        $(`#loadArea`).fadeIn();
        await fetch(dataUrl)
            .then(res => res.json())
            .then(json => {
                $(`#loadArea`).fadeOut();
                if (localStorage.getItem("cs_id") == "1acenoel") {
                    if (!document.getElementById("kaguya")&&json.library) {
                        const text = `<div>6月〇日(月)</div><img src="./竹取輝夜の伝誦.png" class="kaguya" id="kaguya">`;
                        document.getElementById("densyouLog").insertAdjacentHTML("beforeend", text);
                    }
                }
                $('#libraryArea').fadeIn();
                witchCheck(json);
            });
    })
    $('#libraryBg , #closelibraryModal').click(function(){
        $('#libraryArea').fadeOut();
    })
  });