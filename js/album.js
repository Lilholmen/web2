window.onload = function (){
    var titles = ["Слезы1", "Слезы2", "Слезы3", "Слезы4", "Слезы5", "Слезы6", "Слезы7", "Слезы8", "Слезы9", "Слезы10", "Слезы11", "Слезы12", "Слезы13", "Слезы14", "Слезы15", ];
    var imgPath = "../img/album1.jpg";
    var content = document.getElementById("album-area");
    var index1 = 1;
    for (var i = 0; i<titles.length;i++){
    content.innerHTML += "<div>" + "<img class='album-photo" +
                         (index1++) + "'src='" + imgPath + "' alt='" + titles[i] + "'title='" + titles[i] +
                          "'> <p>" + titles[i] + "</p>";
    }
 };
