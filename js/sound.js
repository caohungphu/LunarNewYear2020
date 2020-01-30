var hpmusic1 = "https://www.nhaccuatui.com/mh/background/wfwjFuLeyX7R"

var hpmusic2 = "https://www.nhaccuatui.com/mh/background/BlVI3Dden0R3"

var hpmusic3 = "https://www.nhaccuatui.com/mh/background/xN2A6K3wfxhL"

var hpmusic4 = "https://www.nhaccuatui.com/mh/background/2c3ULLmxri24"

var hpmusic5 = "https://www.nhaccuatui.com/mh/background/3x1lKHcYTndT"

var hpmusic6 = "https://www.nhaccuatui.com/mh/background/BIOVbIW1FDdJ"

var hpmusic6 = "https://www.nhaccuatui.com/mh/background/Wnhnp0zMGqw5"

var x = Math.floor((Math.random() * 6) + 1);

if (x==1) x = hpmusic1

else if (x==2) x = hpmusic2

else if (x==3) x = hpmusic3

else if (x==4) x = hpmusic4

else if (x==5) x = hpmusic5

else if (x==6) x = hpmusic6

document.write('<iframe src='+'"'+x+'"'+'width="0" height="0" frameborder="0" allowfullscreen allow="autoplay"></iframe>')
