    var dataInt={"data":[{"src":"0.jpg"},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"},{"src":"11.jpg"},{"src":"12.jpg"},{"src":"13.jpg"},{"src":"14.jpg"},{"src":"15.jpg"},{"src":"16.jpg"},{"src":"17.jpg"},{"src":"18.jpg"},{"src":"19.jpg"}]};
createImg();
waterFall('main','box');

window.onscroll=function () {
    if(checkScrollslide()){
        createImg();
        waterFall('main','box')
    }

};
function waterFall(parent,box) {
    var oParent=document.getElementById(parent);
    var oBoxs=getByClass(oParent,box);
    var oBoxW=oBoxs[0].offsetWidth;
    var oCols=Math.floor(oParent.clientWidth/oBoxW);
    oParent.style.cssText='width:'+oBoxW*5+'px;margin:0 auto;';
    var hArr=[];//存放每一列高度的数组
    for(var i=0;i<oBoxs.length;i++){
        if(i<5){
            hArr.push(oBoxs[i].offsetHeight)
        }else{
            var minH=Math.min.apply(null,hArr);
            var index=getIndex(hArr,minH);
            oBoxs[i].style.position='absolute';
            oBoxs[i].style.top=minH+'px';
            //oBoxs[i].style.left=oBoxW*index+'px';
            oBoxs[i].style.left=oBoxs[index].offsetLeft+'px';
            hArr[index]+=oBoxs[i].offsetHeight;
        }
    }
}

function getByClass(parent,clsName) {
    var arr=[];
    var oElement=parent.getElementsByTagName('*');
    for(var i=0;i<oElement.length;i++){
        if(oElement[i].className==clsName){
            arr.push(oElement[i])
        }
    }
    return arr;
}
function getIndex(arr ,min) {
    for(var i=0;i<arr.length;i++){
        if(arr[i]===min){
            return i
        }
    }
}
function checkScrollslide() {
    var oParent=document.getElementById('main');
    var oBoxs=getByClass(oParent,'box');
    var lastBoxH=oBoxs[oBoxs.length-1].offsetTop;
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    var heigth=document.body.clientHeight||document.documentElement.clientHeight;
    return (scrollTop+heigth>lastBoxH)?true : false;
}
function createImg() {
    for(var i=0;i<dataInt.data.length;i++){
        var oBox=document.createElement('div');
        oBox.className='box';
        var oParent=document.getElementById('main');
        oParent.appendChild(oBox);
        var oPic=document.createElement('div');
        oPic.className='pic';
        oBox.appendChild(oPic);
        var oImg=document.createElement('img');
        oImg.src='img/'+dataInt.data[i].src;
        oPic.appendChild(oImg);
    }
}