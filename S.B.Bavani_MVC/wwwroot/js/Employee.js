function isValidEmployee() {
    var firstName = $("#empFirstName").val();
    var lastName = $("#empLastName").val();
    var userName = $("#empUserName").val();
    var password = $("#empPassword").val();
    var email = $("#empEmail").val();


    var isValid = true;

    if (firstName == "") {
        $("#firstNameError").show();
        isValid = false;
    } else {
        $("#firstNameError").hide();
    }

    if (lastName == "") {
        $("#lastNameError").show();
        isValid = false;
    } else {
        $("#lastNameError").hide();
    }
    if (userName == "") {
        $("#userNameError").show();
        isValid = false;
    } else {
        $("#userNameError").hide();
    }
    if (password == "") {
        $("#passwordError").show();
        isValid = false;
    } else {
        $("#passwordError").hide();
    }
    if (email == "") {
        $("#emailError").show();
        isValid = false;
    } else {
        $("#emailError").hide();
    }

    return isValid;
}

function addEmployee() {
    if (isValidEmployee()) {
        var firstName = $("#empFirstName").val();
        var lastName = $("#empLastName").val();
        var userName = $("#empUserName").val();
        var password = $("#empPasword").val();
        var email = $("#empEmail").val();


        var emp = {
            FirstName: firstName,
            LastName: lastName,
            UserName: userName,
            Password: password,
            Email: email
        };
        $.ajax({
            url: '/employee/insert',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(emp),
            success: function (response) {
                alert(response.message && "Employee added successfully");
                clearEmployeeForm();
                loadEmployeeList();
            },
            error: function () {
                alert("Failed");
            }

        });
    }
}
