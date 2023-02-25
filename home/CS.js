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
  });