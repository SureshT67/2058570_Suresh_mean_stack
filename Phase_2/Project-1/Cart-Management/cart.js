var items = [];
var itemTotal;
let totalPrice = 0;

function test() {
    console.log(document.getElementById("cost").value);
}

function total() {
    var obj = JSON.parse(sessionStorage.getItem("cart"));
    
    itemTotal = obj.length;
    if(obj.length==1){
        document.getElementById("total").innerHTML = obj.length;
    }else{
        document.getElementById("total").innerHTML = obj.length-1;
    }
    
}

function getTotalPrice(item) {
    console.log("Inside getTotalPrice");
    for (var i = 0; i < items.length; i++) {
        if (items[i].name === 'Total') {
            items.splice(i, 1);
        }
    }

    var obj = JSON.parse(sessionStorage.getItem("cart"));
    console.log(obj.length);
    totalPrice = totalPrice + parseFloat(item.price);
    var item1 = {};
    item1.name = document.getElementById("cost").value;
    item1.price = totalPrice.toFixed(2);
    console.log(item1);
    items.push(item1);
    storeInSession();
    console.log(items);
}



function storeInSession() {
    sessionStorage.setItem("cart", JSON.stringify(items));
}

function retrieveFromSession() {
    var obj = JSON.parse(sessionStorage.getItem("cart"));
    console.log(obj);

    var i;
    for (i = 0; i < obj.length; i++) {
        insertNewRecord(obj[i]);
        console.log(obj[i]);
    }

    var element = document.getElementById("show_items");
    element.onclick = "";
}

function insertNewRecord(data) {
    var table = document.getElementById("cart")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.price;

}

function addToCart1() {
    var item = {};
    item.name = document.getElementById("name1").value;
    item.price = document.getElementById("price1").value;
    console.log(item);
    //insertNewRecord(item); 
    items.push(item);
    console.log(items);
    storeInSession();
    total();
    getTotalPrice(item);
}
function addToCart2() {
    var item = {};
    item.name = document.getElementById("name2").value;
    item.price = document.getElementById("price2").value;
    console.log(item);
    //insertNewRecord(item); 
    items.push(item);
    console.log(items);
    storeInSession();
    total();
    getTotalPrice(item);
}
function addToCart3() {
    var item = {};
    item.name = document.getElementById("name3").value;
    item.price = document.getElementById("price3").value;
    console.log(item);
    //insertNewRecord(item); 
    items.push(item);
    console.log(items);
    storeInSession();
    total();
    getTotalPrice(item);
}
function addToCart4() {
    var item = {};
    item.name = document.getElementById("name4").value;
    item.price = document.getElementById("price4").value;
    console.log(item);
    //insertNewRecord(item); 
    items.push(item);
    console.log(items);
    storeInSession();
    total();
    getTotalPrice(item);
}
function addToCart5() {
    var item = {};
    item.name = document.getElementById("name5").value;
    item.price = document.getElementById("price5").value;
    console.log(item);
    //insertNewRecord(item); 
    items.push(item);
    console.log(items);
    storeInSession();
    total();
    getTotalPrice(item);
}
function addToCart6() {
    var item = {};
    item.name = document.getElementById("name6").value;
    item.price = document.getElementById("price6").value;
    console.log(item);
    //insertNewRecord(item); 
    items.push(item);
    console.log(items);
    storeInSession();
    total();
    getTotalPrice(item);
}