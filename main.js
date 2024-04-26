const name  = "Alex";
const money = 10000;
const account = 7777;

const quest1 = prompt("Ваше имя?")
if (quest1 == name){
    const quest2 = prompt("Номер счета?")
    if(quest2 == account){
        const quest3 = prompt("Сколько обналичить")
        if (quest3 <= money){
            alert(`Вы сняли ${quest3} осталось ${money - quest3}`)
        }
        else{
            alert(`Недостаточно средств`)
        }
    } else{
        alert("Неверный номер счета дасвидульки")
    }
}else{
    "Неверное имя дасвидули"
}
