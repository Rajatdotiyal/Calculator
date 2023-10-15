let input = document.getElementById('inputbox')
let button = document.querySelectorAll('.btn')

let storeresult = ""

let arr = Array.from(button)

arr.forEach(btn => {
    btn.addEventListener('click', (e) => {
       switch (e.target.value ) {
        case '=': 
           storeresult = eval(storeresult);
            input.value = storeresult
        break;

       case 'AC': 
            storeresult="";
            input.value=storeresult;
        break;

        case 'DE':  
            storeresult=storeresult.substring(0,storeresult.length-1);
            input.value=storeresult;    
        break;
        
        default: 
            storeresult += e.target.value;
            input.value = storeresult
            break;
        
}})
});