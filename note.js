var names = [];
function myfunction() {

    document.querySelector("#copy").innerHTML = " ";
    for (let i = 0; i < names.length; i++) {

        document.querySelector("#copy").innerHTML += "<li>" + names[i] + "<span style= 'color:red;font-size:large' onclick= 'del(" + i + ")'>x</span> </li>";

    }
}
function additem() {

    let newValue;
    newValue = document.querySelector("#list-input").value.trim();
    if (newValue != "") {
        names.push(newValue);
        myfunction();
    }

}

function del(i) {
    names.splice(i, 1);
    myfunction();
}

