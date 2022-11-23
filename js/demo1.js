// code js
var x = 10;
x = "hello"; // dynamic datatype
var t = true;
console.log(x);// print

var y = 20;

var z =  y+10; // 30
var k = x+y;// hello20 -> strcat()
var u = y+x;// 20hello
var o = y+"world";// 20world
var p =  "hello"+ "world" + y;// helloworld20
var a = "20"+ 10;// 2010
console.log(a);
console.log(y);
var b = 5 + 10 + 15 + "a";//30a
if(y>10){

}else if(y>15){

}else{

}
for(var j=0;j<10;j++){
    console.log("j="+j);
}
console.log("xin chao cac ban "+20+", chuc buoi sang tot lanh");
// gia tri cua y = 20, gia tri dep
console.log("gia tri cua y = "+y+", gia tri dep");
console.log(`gia tri cua y= ${y} ,gia tri dep`);


// khai bao 1 ham
function tinhtong(a,b){
    // return a+b;
    console.log(a+b);
}
var kq = tinhtong(4,5);

var arr = [];
arr[0] = 15;
arr[1] = "abc";
arr[2] = true;
arr.push(17);
arr.push("xyz");
arr.push("uio");
// arr.push([3,2,1]);
for(var i=0;i< arr.length ;i++){
    console.log(arr[i]);
}

// alert("Alert");

// var rs = confirm("Bạn chắc chắn muốn nộp bài?");// return boolean
// if(rs == true){
//     console.log("Người dùng đã đồng ý rồi, làm gì thì làm đi");
// }else{
//     console.log("Hủy bỏ chiến dịch");
// }

// var s = prompt("Vui lòng nhập họ tên");// return string
// console.log(s);
// nếu nhập + OK -> string
// nêu ko nhập + OK -> string rỗng
// nếu nhấn cancel -> null

// setTimeout(function (){ // delay
//     alert("Hello");
// },10000);
var span_min = document.getElementById("minutes");
var span_sec = document.getElementById("seconds");

var min=10,sec=0;
var timer = setInterval(function (){
    var m = min<10?"0"+min:min;
    var s = sec<10?"0"+sec:sec; // toans tử 3 ngôi
    span_min.innerText = m;
    span_sec.innerText = s;
    // lam the nao de giam thoi gian
    sec--;
    if(sec<0){
        sec = 59;
        min--;
    }
    if(min < 0){
        // dung tai day
        clearInterval(timer);
    }
},1000);
// 10:00
// 09:59
// 09:58