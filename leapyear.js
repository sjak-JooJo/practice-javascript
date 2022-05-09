function leapYear(year){
    if(year % 400 == 0){
        return true;
    }
    else if(year % 4 == 0 && year % 100 != 0){
       return true;
    }
    else return false;
}
 var result = leapYear(2023);
 console.log('The year is :' + result);


 // Age check function

 function ageCheck(age){
     if(age % 2 == 0) return true;
     else if(age % 2 != 0) return false;
 }
 var result2 = ageCheck(25);
 console.log('The age is: '+ result2);

 // Hours to minutes convert function

 function hourToMinute(time){
     var x = time*60;
     return x;
 }
 var totatl_minutes = hourToMinute(5);
 console.log('Total minutes of given hours: '+ totatl_minutes);