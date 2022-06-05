$(function() {

//jQueryありスマフォ
if($(window).width() < 1200) {

//各場所への移動clickイベント
$('.top').click(function(){
    $('html,body').animate({
        'scrollTop':0
    },1000);
});

$('#to-character').click(function(){
    $('html,body').animate({
        'scrollTop':2220
    },800);
});

$('#to-illustration').click(function(){
    $('html,body').animate({
        'scrollTop':3320
    },800);
});

$('#to-about').click(function(){
    $('html,body').animate({
        'scrollTop':7700
    },800);
});

$('#to-contact').click(function(){
    $('html,body').animate({
        'scrollTop':12000
    },800);
});

/*$('.navi p').hover(
    function(){
        $(this).stop().animate({
            'font-size':'20px'   
        },100);
    },
    function(){
        $(this).stop().animate({
            'font-size':'18px'   
        },300);
    }
);*/

//pc
} else {

//ヘッダーNaviのhoverイベント
/*$('.navi p').hover(
    function(){
        $(this).stop().animate({
            'font-size':'35px'   
        },100);
    },
    function(){
        $(this).stop().animate({
            'font-size':'30px'   
        },300);
    }
);*/

//トップに戻るのhoverイベント
/*$('.top').hover(
    function(){
        $('.top-font').stop().animate({
            'font-size':'22px'   
        },350);
    },
    function(){
        $('.top-font').stop().animate({
            'font-size':'18px'   
        },350);
    }
);*/

//各場所への移動clickイベント
$('.top').click(function(){
    $('html,body').animate({
        'scrollTop':0
    },1000);
});

$('#to-character').click(function(){
    $('html,body').animate({
        'scrollTop':3020
    },800);
});

$('#to-illustration').click(function(){
    $('html,body').animate({
        'scrollTop':4300
    },800);
});

$('#to-about').click(function(){
    $('html,body').animate({
        'scrollTop':7650
    },800);
});

$('#to-contact').click(function(){
    $('html,body').animate({
        'scrollTop':10100
    },800);
});

//キャラクター画像テキストのスライド
$('.c-list li').click(function() {
    $('.active').removeClass('active');
    let clickedIndex = $('.c-list li').index($(this));
    $('.c-item').not('.c-image').hide().removeClass('active');
    $('.c-item').eq(clickedIndex).fadeIn(1000).addClass('active');
    $('.item-text').eq(clickedIndex2).fadeOut().removeClass('active');
});

$('.cara-img').click(function() {
    clickedIndex2 = $('.cara-img').index($(this));
    $('.item-text').eq(clickedIndex2).fadeIn().addClass('active');
});

$('.item').hover(function () {
    $(this).find('.text').addClass('is-show')
}, function () {
    $(this).find('.text').removeClass('is-show')
})

$(function () {
    var $demo1 = $('.ill-image');   //コンテナとなる要素を指定

    $demo1.imagesLoaded(function(){ //imagesLoadedを使用し、画像が読み込みまれた段階でMasonryの関数を実行させる
        //Masonryの関数↓
        $demo1.masonry({              //オプション指定箇所
            itemSelector: '.item-i',   //コンテンツを指定
            columnWidth: 205,           //カラム幅を設定
            fitWidth: true,             //コンテンツ数に合わせ親の幅を自動調整
        });
    });
});

//イラスト紹介のhoverイベント
/*$('.item-i').hover( 
    function(){
        $(this).find('p').stop().show(300);
    },
    function(){
        $(this).find('p').stop().hide(400);
    }
);*/

/*aboutの紹介文
$('.p-photo').hover(
    function(){
        $('.aboutimg-text').find('p').stop().fadeIn(300);
    },
    function(){
        $('.aboutimg-text').find('p').stop().fadeOut(400);
    }
);*/

//フォーム
/* $('.inputt,textarea').val('入力してください').css('color','#786345').focus(function(){
    $(this).val('').css('color','#000');
}).blur(function(){
    if($(this).val()==''){
        $(this).val('入力してください').css('color','#786345').one('focus',function(){
            $(this).val('').css('color','#000');
        });
    }
});*/

//石沢さんコードから
$('#mailForm').click(function () {
    //$('#id名')これで生jsのdocument.getElementById()とおんなじことできる

    const subject = '問い合わせ' + $('#guestName').val() + '様より'
    //const guestName = $('#guestName').val() //名前取得
    //const subject = '問い合わせ' + guestName + '様より' 
    const address = 'waverer0109@gmail.com'
    const body = $('#mailText').val() //メール本文取得
    
    location.href = 'mailto:' + address + '?subject=' + subject + '&body=' + body;
});

/* mailForm.addEventListener('click',() => {
    const address ='waverer0109@gmail.com'
    const guestName = document.getElementById('guestName')
    const subject = '問い合わせ' + guestName.value + '様より'
    const text = document.getElementById('mailText')
    const body = text.value

    location.href = 'mailto:' + address + '?subject=' + subject + '&body=' + body;
}) */
}
});