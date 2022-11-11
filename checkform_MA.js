// 
/* Edit the function below such that it checks whether:
1. The year field is blank (empty), and if it is, issue an alert
2. The fullname field contains exactly two words, and if it doesn't, issue an alert
If the year field is empty or if the fullname field does not contain exactly two words, the function checkform() returns false, otherwise true.
*/
function checkform() {
    let year = document.getElementsByName("year")[0].value;
    let fullName = document.getElementsByName("fullname")[0].value;
    const nameArray = fullName.split(" ");
    console.log(year);
    console.log(fullName);
    console.log(nameArray);
    
    if (year == "") {
        alert("Fill in the year field!");
        return false;
    }
    else if (fullName == "") {
        alert("Fill in the name field!");
        return false;
    }
    else if (nameArray.length != 2) {
        alert("Inappropriate name!");
        return false;
    }
    else return true;

}


