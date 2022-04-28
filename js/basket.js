
var list = document.getElementById('basketproductlist');

var a = localStorage.getItem('abc');

var b = [];

b.push(a);

console.log(b);

a.map(function(x){

    var li = document.createElement('li');

    li.innerHTML = x.price;

    list.appendChild(li);

});