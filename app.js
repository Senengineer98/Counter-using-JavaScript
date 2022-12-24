// set initial counter
let count =0;

// select value and buttons
const value=document.querySelector('#value');
const btns=document.querySelectorAll('.btn')
console.log(btns);

// use btn.forEach 
//And callback function

btns.forEach(function(icecrem){
    icecrem.addEventListener('click',function(e){
        const styles=e.currentTarget.classList;
        if(styles.contains('btn-danger'))
        {
            count--;
        }
        if(styles.contains('btn-success'))
        {
            count++;
        } if(styles.contains('btn-dark'))
        {
            count=0;
        }
        if(count>0)
        {
            value.style.color='green';
        }
        if(count<0)
        {
            value.style.color='red';
        } if(count===0)
        {
            value.style.color='black';
        }
        value.textContent=count;
    })
})