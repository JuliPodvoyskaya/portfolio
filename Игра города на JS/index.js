const stopArr = [];
let lastLetter = "";

moveComp()


//создание элементов списка
function createLi(city, who){
    const li = document.createElement("li");
    const ul = document.querySelector("ul");
    li.classList.add("message")//для выделения жирным
    if(who==="Вы"){
        li.classList.add('right')//для выравнивания по правому краю
    }
    ul.append(li);
    li.innerText = who;
    

    const liCity = document.createElement("li");
    if(who==="Вы"){
        liCity.classList.add('right')
    }
    ul.append(liCity);
    liCity.innerText = city;
   
   
}


//проверка правильности введенного города
function checkInput(city){

    if(city[0].toLowerCase() !== lastLetter){//toLowerCase- приводит написанное к нижнему регистру
        return 'Город начинается не на ту букву';
        
    }

    for(let i=0; i <= stopArr.length; i++){
        if (stopArr[i]=== city){
            return 'Город уже использован';
        }
    }
    
    for(i=0; i<cities.length; i++){
        if(city === cities[i]){
            return '' 
        } 

    }
    
    
        return "Некорректный город"
}


//ход компьютера
function moveComp(){
    let currentArr =[]//создаем новым промежуточный массив
    if(stopArr.length === 0){
        currentArr = cities//если стопарр пустой, значит это начало игры и новый массив равен массиву городов
    } else {
        for(i=0; i<cities.length; i++){
            let currentCity = cities[i];//вводим переменную выбранный элемент из массива городов
            if(lastLetter === currentCity[0]){
                currentArr.push(currentCity);
            }
        }
    }
    if(currentArr.length === 0){
        return alert('Ура!Победа')//если промежуточный массив пуст= значит закончились города, игра окончена
    }
    let random= getRandomInt(0, currentArr.length-1);
    let city = currentArr[random];
    createLi(city, "Компьютер")
    stopArr.push(city)

    if(city[city.length-1] === "ь"|| city[city.length-1] === "ы"){
        lastLetter = city[city.length-2]
    } else{
        lastLetter = city[city.length-1]
    }
}


//ход человека

const input = document.querySelector("input")
input.addEventListener("keyup", function(event){
    let value = event.target.value
    if(event.key === "Enter" && value !== ""){
        let check = checkInput(value);
        if(check !== ''){
            return alert(check);
        }
        createLi(value, "Вы")
        stopArr.push(value)
        if(value[value.length-1] === "ь" || value[value.length-1] === "ы"){
            lastLetter = value[value.length-2]
        } else{
            lastLetter = value[value.length-1]
        }
        event.target.value = "";
        moveComp();
       
    }

})





















































function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
