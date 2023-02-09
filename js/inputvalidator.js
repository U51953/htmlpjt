const errorMessage = "Credentials Not Valid";
const successMessage = "Username and Password is valid";
function validateForm() {
    const uName = validateValue(document.getElementById("userName").value);
    const pwd = validateValue(document.getElementById("password").value);
    if(!uName || !pwd) {
        alert(errorMessage);
        return;
    }
    alert(successMessage);
}

function validateValue(fieldValue) {
    if(!fieldValue || fieldValue.length === 0) {
        return false;
    }
    return true;
}
