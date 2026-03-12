function displayAlert(){

alert('This text is inside the function!')


}


displayAlert()


function mbledhja(numri1,numri2){

return(numri1 + numri2);


}

document.write((5+8));



function toCelsius(f){

return 5/9*(f-32);


}

console.log("5 fahrenheit is equal to "+ toCelsius(5)+" celsius");




var arrayFunction = () => alert("Hello");

arrayFunction();



function dsFunction(){
 
    var localVar = "DigitalSchool";

    alert (localVar);


}


dsFunction();







function toSeconds(m){

return m*60;



}

console.log(toSeconds(5));


let side1 = 10, side2 = 10, side3 = 10;
function calculatePerimeter(a, b, c) {
  return a + b + c;
}



let perimeter = calculatePerimeter(side1, side2, side3);
console.log("The perimeter of the triangle is: " +perimeter);





var Car = {Name: "Audi", color: "red", year: 2012, vin: "www123", licensPlate: "01-www-AG"};

alert(Car.licensPlate);

alert(Car['color']);


function Computer (name, CPU , RAM , GPU){

this.name = name
this.CPU = CPU;
this.RAM =RAM;
this.GPU= GPU;

}

var c1 = new Computer ("Macbook","8-core", "8GB", "5600M GPU");

var c2 = new Computer ("Acer","Inter core i7" ,"16GB ", "Intergrated");