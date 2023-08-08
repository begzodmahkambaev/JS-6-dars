/* Replace in JS */

/*let matn = "Salom hammaga! salom berdim hammaga. salom";*/
/*console.log(matn.replace(/salom|hammaga|berdim/gi,"alik"));*/
/*let yangMatn = matn.replace(/salom|hammaga/gi,function (soz){
    if (soz == "Salom" || soz == "salom"){
        return 'alik'
    }else if(soz == "hammaga"){
        return 'barchaga';
    }
});
console.log(yangMatn);*/

/* Push & Pop in JS */

/*let list = [];
list.push("Sara");
console.log(list.length);
console.log(list);
list.push("Muhammadrizo");
console.log(list.length);
console.log(list);
list.push("18 yoshda");
console.log(list.length);
console.log(list);
list.push("Otchopar mahallada yashaydi");
console.log(list.length);
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);*/

/* Unshift & Shift in JS */

/*let list = [];
list.unshift("Elmirod");
console.log(list.length);
console.log(list);
list.unshift("Erkinov");
console.log(list.length);
console.log(list);
list.unshift("15 yoshda");
console.log(list.length);
console.log(list);
list.unshift("Bektemir mahallasida yashaydi")
console.log(list.length);
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);
console.log(list.shift());
console.log(list);*/

/* Sort in JS */

/*let list = ["Nozima","Sara","Aydana","Zarnigor","Gultapchan","Shahlo","Gulmira"];
console.log(list.sort().reverse());*/
/*let sonlar = [201,85,717,19,121,13,441];
let tartiblanganSonlar = sonlar.sort(function (a,b){
    return a-b;
})
console.log(tartiblanganSonlar.reverse());*/

/*let belgilar = "qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM";
function parolBer(){
    let i = 0;
    let parol = '';
    while (i < 6){
        let son = parseInt(Math.random() * belgilar.length);
        parol += belgilar[son];
        i++;
    }
    document.querySelector('input').value = parol;
}*/

document.querySelector('.tugma').addEventListener('click',function (){
    let ekran = document.querySelector('.ekran');
    console.log(typeof parseInt(ekran.value));
    ekran.value = parseInt(ekran.value) + 1;
});
document.querySelector('.nolga').addEventListener('click',function (){
   document.querySelector('.ekran').value = 0;
});
