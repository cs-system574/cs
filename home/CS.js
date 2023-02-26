window.onload= async function(){
    if (window.matchMedia('(min-width:768px)').matches) {
        location="../error/index.html"
    }
    fetch(`https://script.google.com/macros/s/AKfycbxeci6Wtt-jd72sGCTIo7UedQ1eIwwEDrZdDM4bO4Xh8cM59i-po-za9Us9u-1l7r9qVQ/exec?number=${localStorage.getItem("cs_id")}`)
    .then(res=>res.json())
    .then(json=>{
        if(json.rabbitwhole) {
            document.getElementById("rabbit").insertAdjacentHTML("afterbegin",`<img src="./img/兎穴.png"">`)
        }
        if(json.witch){
            if(localStorage.getItem("cs_id")=="a1007") $('body').css({backgroundImage:`url("./img/スマホ画面アリス.png")`})
            if(localStorage.getItem("cs_id")=="1acenoel") $('body').css({backgroundImage:`url("./img/スマホ画面ドロシー.png")`})
        }
        else $('body').css({backgroundImage:`url("./img/スマホ画面.png")`})
    })
}

$(function () {
    $('#story').click(async function(){
        await fetch(`https://script.google.com/macros/s/AKfycbxeci6Wtt-jd72sGCTIo7UedQ1eIwwEDrZdDM4bO4Xh8cM59i-po-za9Us9u-1l7r9qVQ/exec?number=${localStorage.getItem("cs_id")}`)
        .then(res=>res.json())
        .then(json=>{
            if(json.story) alert("今日の分は既に書いています。")
            else $('#modalArea').fadeIn();
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
        const diary=document.getElementById("today").value;
        fetch(`https://script.google.com/macros/s/AKfycbzKjZdIxFOUuINwdM5a-iZIOdW-9ofVQOKOez0PixO0OXmkJ4m5oOAqHUicrx4asLl2/exec?number=${localStorage.getItem("cs_id")}?${diary}`)
    });

    $('#densyou').click(function(){
        $('#densyouArea').fadeIn();
    })
    $('#yes1 , #no1 , #densyouBg').click(function(){
        $('#densyouArea').fadeOut();
    })

    $('#history').click(async function(){
        await fetch(`https://script.google.com/macros/s/AKfycbxeci6Wtt-jd72sGCTIo7UedQ1eIwwEDrZdDM4bO4Xh8cM59i-po-za9Us9u-1l7r9qVQ/exec?number=${localStorage.getItem("cs_id")}`)
        .then(res=>res.json())
        .then(json=>{
            const date=["〇","×","▽","□","☆"];
            const day=["月","火","水","木","金"];
            let text="";
            json.diary.forEach((element,index) => {
                text+=`<div class="nikki">6月${date[index]}日(${day[index]})</div><div class="nikki">　${element}</div>`
            });
            if(text=="") text=`<div id="no_diary">まだ何も書いていません。</div>`
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

    $('#library').click(function(){
        if(localStorage.getItem("cs_id")=="1acenoel"){
            if(document.getElementById("librarylist").childElementCount==1){
                const text=`<div>6月〇日(月)</div><img src="./竹取輝夜の伝誦.png" class="kaguya">`;
                document.getElementById("librarylist").insertAdjacentHTML("beforeend",text);
            }
        }
        $('#libraryArea').fadeIn();
    })
    $('#libraryBg , #closelibraryModal').click(function(){
        $('#libraryArea').fadeOut();
    })
  });