$(()=>{
    let left_btn = $('.left .txt-area');
    let right_btn = $('.right .txt-area');
    let bottom_btn = $('.bottom .txt-area');
    let bg = $('#wrap');

    left_btn.click(function(){
        bg.toggleClass('left-active');
    });
    right_btn.click(function(){
        bg.toggleClass('right-active');
        if(bg.hasClass('right-active')){
            $('.right .txt-area .pagination-box > img').attr('src', 'https://dncit.cafe24.com/theme/dnc/img/icon-arrow01.svg')
        }else{
            $('.right .txt-area .pagination-box > img').attr('src', 'https://dncit.cafe24.com/theme/dnc/img/icon-arrow02.svg')
        }
    });
    bottom_btn.click(function(){
        bg.toggleClass('bottom-active');
    });


    let main_video = $('.main-video');
    main_video[0].playbackRate = 1;
});