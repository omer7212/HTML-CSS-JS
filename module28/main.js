// var button1 =document.getElementById("btn1")

// button1.onclick = function(){

// alert('Hello')



// }


// var button2 = document.querySelector('button');

// button2 .onclick = function(){

// alert('other button was clicked');



// }



var button2 = document.getElementById('btn2')

button2.onmouseover= function(){

alert('Mouse is over')


}

var button3 = document.getElementById('btn3')

button3.onmouseleave= function(){

alert('Mouse left')


}



var button4 = document.getElementById('btn4')

button4.onmousewheel= function(){

alert('Mouse wheel')


}



var v_button = document.getElementById('btn6')


var v_text = document.getElementById('txt1')
v_button.onclick = function(){


    v_text.style.color ='red'
    v_text.style.backgroundColor = 'lightgrey'
    v_text.style.fontSize = '100px'
    v_text.style.padding = '20px'
    v_text.style. textAlign = 'center'
}



var button1 = document.getElementById('btn7')
var teksti = document.getElementById('txt2')


button1.onclick = function(){

teksti.style.cssText = " color:red; background-color:green; text-Align:center; font-size:25px; font-family:fantasy;       "



}


var ifundit = document.getElementById('ifundit')
var pg = document.getElementById('pg')


ifundit.onclick = function(){


pg.setAttribute("class","paragrafi")

}









   





var btn_circle = document.getElementById("btnCircle")
var btn_rect = document.getElementById("btnRect")
var btn_triangle = document.getElementById("btnTriangle")





var circle = document.getElementById("circle")
var rect = document.getElementById("rect")
var triangle = document.getElementById("triangle")





btn_circle.onclick = function(){

circle.setAttribute("class","shape_circle");



}

btn_rect.onclick = function(){

rect.setAttribute("class","shape_rect");



}



btn_triangle.onclick = function(){

triangle.setAttribute("class","shape_triangle");



}



circle.onclick = function(){

circle.setAttribute("class","hide")



}


rect.onclick = function(){

rect.setAttribute("class","hide")



}






triangle.onclick = function(){

triangle.setAttribute("class","hide")



}