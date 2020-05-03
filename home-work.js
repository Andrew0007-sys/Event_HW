//window.addEventListener("resize", function(){
//    document.getElementById("test").innerHTML = window.innerWidth;
//});
//
//document.getElementById("test1").onclick = function(event){
//    console.log(event);
//    console.log(event.target);
//    event.preventDefault();
//}
//
//document.getElementById("test2").onchange = function(event) {
//    console.log(event);
//    console.log(event.target.value);
//}
//
//document.getElementById("test3").onclick = clickMe;
//    function clickMe (){
//        alert('Ви натиснули кнопку!');
//    } 
//
//document.getElementById("test4").

//FIRST TASK

document.addEventListener('keydown', function(event){
    if(event.code == 'KeyA' && event.altKey){
        document.getElementById('plhold').innerHTML = 'Щоб зберегти зміни в тексті натисніть shift + s';
        document.getElementById('enterData').style.display = 'none';
        document.getElementById('enterField').style.display = 'block';
    }
    if(event.code == 'KeyS' && event.shiftKey){
        document.getElementById('plhold').innerHTML = 'для зміни тексту натисніть alt + a';
        document.getElementById('enterData').innerHTML = document.getElementById('enterField').value;
        document.getElementById('enterData').style.display = 'block';
        document.getElementById('enterField').style.display = 'none';

    }
})


//SECOND TASK

window.addEventListener("resize", function(){
    document.getElementById("test").innerHTML = window.innerWidth;
    let width = window.innerWidth;
    if (width < 600){
         document.getElementById("test").innerHTML = 'Ми використовуємо мобільну версію';
    } else {
         document.getElementById("test").innerHTML = 'Ми використовуємо десктопну версію';    }
});

//THIRD TASK

document.getElementById('change').onchange = function (){
    alert(`Ви ввели: " ${document.getElementById('change').value} "`);
}

//FOURTH TASK

window.addEventListener('keydown', function (event) {
    if (event.code == 'KeyO' && event.altKey){
        document.getElementById('modal').style.display = 'block';
    }
    if (event.code == 'KeyC' && event.altKey){
        document.getElementById('modal').style.display = 'none';
    }
    
})