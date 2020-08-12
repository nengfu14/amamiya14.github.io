$(document).ready(function () 
{
    $(".scrollToTop").click(function () 
    { 
        $("html,body").animate(
        {
            scrollTop:"0"
        },700);
    });
});
