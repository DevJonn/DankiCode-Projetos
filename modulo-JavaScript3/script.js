var p = document.getElementsByTagName('p');

//alert(p.length);

p[0].innerHTML = 'Manipulado via JS!';

for(var i = 0; i < p.length; i++){
    p[i].innerHTML = 'Manipulado via JS - ' + i;
}