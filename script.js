'use strict';

$(function(){//スライドショー

  $('.mainvisual ul').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    fade:true,
    speed:2000,
    arrows:false,
  });

});

$(function(){//メニュー表示

  $('.ham').click(function(){
    $('.hamburger').slideToggle(200);
  });

});

$(function(){//実行予約

  //$('form').submit(function(event){});
  $('button').click(function(event){

    let userName = $('#userName').val();//テキストボックスの入力値を取得し、変数に代入
    let userMail = $('#userMail').val();//テキストボックスの入力値を取得し、変数に代入
    let message = $('#message').val();//テキストエリアの入力値を取得し、変数に代入

    
    if(userName === ''){//テキストボックスに入力がない場合
      event.preventDefault();//基本動作キャンセル（データ送信のキャンセル）
      $('#userName').addClass('grey');//アラートの表示
    } else {//それ以外（入力されている場合）
      $('#userName').removeClass('grey');//アラートの非表示
    }
    
    if(userMail === ''){//テキストボックスに入力がない場合
      event.preventDefault();//基本動作キャンセル（データ送信のキャンセル）
      $('#userMail').addClass('grey');//アラートの表示
    } else {//それ以外（入力されている場合）
      $('#userMail').removeClass('grey');//アラートの非表示
    }
    
    if (message === ''){//テキストエリアに入力がない場合
      event.preventDefault();//基本動作キャンセル（データ送信のキャンセル）
      $('#message').addClass('grey');//アラートの表示
    } else {//それ以外（入力されている場合）
      $('#message').removeClass('grey');//アラートの非表示
    }

  });

});
