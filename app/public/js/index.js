 var $logInDiv = $(".logInDiv");

    $(".signUpButton").click(function () {
        var $form = $(this).parent().children(".signInForm");
        $form.validate({rules: {email: {required: true,email: true}, password: {required: true, minlength: 6} }});
        if($form.valid()) {
            var user = {
                "email": $form.children("[name = email]").val(),
                "password": $form.children("[name = password]").val()
            };
        }
    });
    $(".signInButton").click(function () {
        var $form = $(this).parent().children(".signInForm");
        $form.validate({rules: {email: {required: true,email: true}, password: {required: true, minlength: 6} }});
        if($form.valid()) {
            var user = {
                "email": $form.children("[name = email]").val(),
                "password": $form.children("[name = password]").val()
            };
        }
    });

    $(".registrationButton").click(function () {
        $logInDiv.children().fadeOut();
        $logInDiv.children(".logInDivFrame2").fadeIn();
        $logInDiv.animate({width: "50%"},300);
    });

    $(".backIcon").click(function () {
        $logInDiv.children().fadeOut();
        $logInDiv.children(".logInDivFrame1").fadeIn();
        $logInDiv.animate({width: "80%"},300);
    });

    $(".addButton").click(function () {
        $shadowDiv.show();
        $logInDiv.children().hide();
        $logInDiv.css({display: "block", width: "50%"});
        $(".logInDivFrame3").show();
        $(".addTaskForm").children("[name = deadline]").mask("99/99/9999", {placeholder: "dd/mm/yyyy"});
    });

    $(".addTaskButton").click(function () {
        var date = new Date();
        var today = ((date.getDate()<10) ? ("0"+date.getDate()):(date.getDate())) + "/" + (((date.getMonth()+1) < 10) ? ("0" + (date.getMonth()+1)) :
                (date.getMonth()+1)) + "/" + date.getFullYear();
        $(".addTaskForm").validate(
            {rules:
                {
                    title: {required: true},
                    description: {required: true, minlength: 50},
                    deadline: {required: true,date: true, min: today}
                }
            });

        if($(".addTaskForm").valid()) {
            var task = {
                title: $(".addTaskForm").children("[name = title]").val(),
                description: $(".addTaskForm").children("[name = description]").val(),
                deadline: $(".addTaskForm").children("[name = deadline]").val()
            };
        }
    });




