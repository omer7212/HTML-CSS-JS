var input = document.getElementById('input_id');
var button = document.getElementById('btn_id');
var text = document.getElementById('text_id');



button.onclick = function(){

    text.innerHTML = input.value;
}




var num1 = document.getElementById('input_id1')
var num2 = document.getElementById('input_id2')
var btn = document.getElementById('btn2_id')
var result = document.getElementById('result_id')
var text2 = document.getElementById('text2_id')


btn.onclick = function(){

 var result2 =  result.innerHTML = parseInt(num1.value ) + parseInt(num2.value);

if (result2 > 10){
 text.innerHTML = "greater than 10"

}
else if (result2 < 10 ){
text2.innerHTML = "less than 10"
}

else {
    text2.innerHTML ="equal to 10"
}

}




