var img = ['./img/hp2k1_main.gif', './img/hp2k1_main2.gif', './img/hp2k1_main3.gif', './img/hp2k1_main4.gif'];

var x = img[Math.floor((Math.random() * (img.length-1)) + 0)];

document.write('<img class="fly" src='+'"'+x+'"'+' alt="Happy New Year"  width="200px" height="200px"/>')