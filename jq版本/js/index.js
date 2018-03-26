
var dataInt={"data":[{"src":"0.jpg"},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"},{"src":"11.jpg"},{"src":"12.jpg"},{"src":"13.jpg"},{"src":"14.jpg"},{"src":"15.jpg"},{"src":"16.jpg"},{"src":"17.jpg"},{"src":"18.jpg"},{"src":"19.jpg"}]};
$(window).on("load",function () {
    waterFall();
    $(window).on('scroll',function () {
        if(checkScrollSlide()){
            $.each(dataInt.data,function (key,value) {
                var oBox=$('<div>').addClass('box').appendTo($('#main'));
                var oPic=$('<div>').addClass('pic').appendTo($(oBox));
                $('<img>').attr('src','img/'+$(value).attr('src')).appendTo(oPic)
            })
            waterFall()

        }
    })
});
function waterFall() {
    var $aBox=$('#main>div');
    var w=$aBox.eq(0).outerWidth();
    var cols=Math.floor($('#main').width()/w);
    $('#main').width(cols*w).css('margin','0 auto');
    var hArr=[];
    $aBox.each(function (index,value) {
        var h=$aBox.eq(index).outerHeight();
        if(index<cols){
            hArr[index]=h
        }else{
            var minH=Math.min.apply(null,hArr);
            var minIndex=$.inArray(minH,hArr);
            $(value).css({
                'position':'absolute',
                'top':minH+'px',
                'left':w*minIndex+'px'
            });
            hArr[minIndex]+=$aBox.eq(index).outerHeight();
        }
    });
}
function checkScrollSlide() {
    var $lastBox=$('#main>div').last();
    var lastBoxH=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
    var scrollTop=$(window).scrollTop();
    var documentH=$(window).height();
    return (lastBoxH<scrollTop+documentH)?true:false
}











