$(document).ready(function () {
    $("form").submit(function () 
    { 
        let error = false;
        if($('input[name="firstname"]').val() == "")
        {
            $('label[for="fName"]').html("請輸入姓氏").addClass("error");
            error = true;
        }
        else
        {
            $('label[for="fName"]').html("").removeClass("error");
        }

        if($('input[name="lastname"]').val() == "")
        {
            $('label[for="lName"]').html("請輸入名字").addClass("error");
            error = true;
        }
        else
        {
            $('label[for="lName"]').html("").removeClass("error");
        }

        if($('select[name="Day"]').val() == "--day--" || $('select[name="Month"]').val() == "--month--" || $('select[name="Year"]').val() == "--year--")
        {
            $('label[for="doB"]').html("請選擇生日").addClass("error");
            error = true;
        }
        else
        {
            $('label[for="doB"]').html("").removeClass("error");
        }

        if($('input[name="email"]').val() == "")
        {
            $('label[for="email"]').html("請填寫郵箱").addClass("error");
            error = true;
        }
        else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('input[name="email"]').val()))
        {
            $('label[for="email"]').html("請填寫有效郵箱").addClass("error");
        }
        else
        {
            $('label[for="email"]').html("").removeClass("error");
        }

        if(!$('input[name="gender"]:checked').val())
        {
            $('label[for="genderMsg"]').html("請選擇性別").addClass("error");
            error = true;
        }
        else
        {
            $('label[for="genderMsg"]').html("").removeClass("error");
        }

        if($('input[name="interest"]').val() == "")
        {
            $('label[for="interest"]').html("請輸入興趣").addClass("error");
            error = true;
        }
        else
        {
            $('label[for="interest"]').html("").removeClass("error");
        }

        if($('textarea[name="yourMsg"]').val() == "")
        {
            $('label[for="Msg"]').html("請留言").addClass("error");
            error = true;
        }
        else
        {
            $('label[for="Msg"]').html("").removeClass("error");
        }

        if (error) 
        {
            return false;
        } 
        else 
        {
            return true;
        }
    });

    $('input[name="firstname"]').focusout(function () 
    { 
        if($('input[name="firstname"]').val() == "")
        {
            $('label[for="fName"]').html("請輸入姓氏").addClass("error");
            return false;
        }
        else
        {
            $('label[for="fName"]').html("").removeClass("error");
        }     
    });

    $('input[name="lastname"]').focusout(function () 
    { 
        if($('input[name="lastname"]').val() == "")
        {
            $('label[for="lName"]').html("請輸入名字").addClass("error");
            error = true;
        }
        else
        {
            $('label[for="lName"]').html("").removeClass("error");
        }     
    });

    $('select[name="Day"],select[name="Month"],select[name="Year"]').mouseleave(function () 
    { 
        if($('select[name="Day"]').val() == "--day--" || $('select[name="Month"]').val() == "--month--" || $('select[name="Year"]').val() == "--year--")
        {
            $('label[for="doB"]').html("請選擇生日").addClass("error");
            return false;
        }
        else
        {
            $('label[for="doB"]').html("").removeClass("error");
        } 
    });

    $('input[name="email"]').focusout(function () 
    { 
        if($('input[name="email"]').val() == "")
        {
            $('label[for="email"]').html("請輸入電郵").addClass("error");
            return false;
        }
        else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('input[name="email"]').val()))
        {
            $('label[for="email"]').html("請填寫有效郵箱").addClass("error");
        }
        else
        {
            $('label[for="email"]').html("").removeClass("error");
        }     
    });

    $('input[name="gender"]').mouseleave(function () 
    { 
        if(!$('input[name="gender"]:checked').val())
        {
            $('label[for="genderMsg"]').html("請選擇性別").addClass("error");
            return false;
        }
        else
        {
            $('label[for="genderMsg"]').html("").removeClass("error");
        }
    });

    $('input[name="interest"]').focusout(function () 
    { 
        if($('input[name="interest"]').val() == "")
        {
            $('label[for="interest"]').html("請輸入興趣").addClass("error");
            return false;
        }
        else
        {
            $('label[for="interest"]').html("").removeClass("error");
        }     
    });

    $('textarea[name="yourMsg"]').focusout(function () 
    { 
        if($('textarea[name="yourMsg"]').val() == "")
        {
            $('label[for="Msg"]').html("請留言").addClass("error");
            return false;
        }
        else
        {
            $('label[for="Msg"]').html("").removeClass("error");
        }     
    });

    $("#resetBtn").click(function () 
    { 
        $('label[for="fName"],label[for="lName"],label[for="doB"],label[for="email"],label[for="genderMsg"],label[for="interest"],label[for="Msg"]').html("");
    });
});