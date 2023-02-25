window.onload= function(){
    if (window.matchMedia('(min-width:768px)').matches) {
        location="../error/index.html"
    }
}

$(function () {
    $('#story').click(function(){
        $('#modalArea').fadeIn();
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
    });

    $('#densyou').click(function(){
        $('#densyouArea').fadeIn();
    })
    $('#yes1 , #no1 , #densyouBg').click(function(){
        $('#densyouArea').fadeOut();
    })

    $('#history').click(async function(){
        await fetch(`https://script.google.com/macros/s/AKfycbw7fTP-nW-Mof6fFUJnlKGno9zvy2AgKf_ruV8V0Ty13Yfta_xT0_ZnmoDe2ZzhuXdX/exec?number=${localStorage.getItem("cs_id")}`)
        .then(res=>res.json())
        .then(json=>{
            const date=["〇","×","▽","□","☆"];
            const day=["月","火","水","木","金"];
            let text="";
            json.diary.forEach((element,index) => {
                text+=`<div>6月${date[index]}日(${day[index]})</div><div>　${element}</div>`
            });
            if(text=="") text=`<div id="no_diary">まだ何も書いていません。</div>`
            return text
        })
        .then(text=>{
            const historylist=document.getElementById("historylist")
            if(historylist.childElementCount==1)
                historylist.insertAdjacentHTML("beforeend",text);
            if(historylist.childElementCount==2){
                document.getElementById("no_diary").remove();
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