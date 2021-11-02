filterObjects("all");

function filterObjects(c) {
    var x, i;
    if (c == "all") c = "";
    x = document.getElementsByClassName("useful-box");
    for (i = 0; i < x.length; i++) {
        addClass(x[i], "is-hidden");
        if (x[i].className.indexOf(c) > -1) removeClass(x[i], "is-hidden");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}