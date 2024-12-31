function  CheckOddEven(){
    let num = document.getElementById('num').value;
    num = parseInt(num);
    
    
    if (num % 2 ===0){
        document.getElementById('Result').innerHTML= num + ""+ " is the wrong answer & its an even number";
    }
    else {
        document.getElementById('Result').innerHTML=num+ "" +" is the  wrong answer & its an odd number";
    }

    if (num ===5)
    {
        document.getElementById('Result').innerHTML=num +""+" is the right answer & its an odd number "
    }

   
}
