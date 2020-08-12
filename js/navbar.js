const navOpen = document.querySelector('.navOpen');
let hamOpen = false;

navOpen.addEventListener('click',() => 
{
    if(!hamOpen)
    {
        navOpen.classList.add('open');
        hamOpen = true;
    }
    else
    {
        navOpen.classList.remove('open');
        hamOpen = false;
    }
});

AOS.init();
