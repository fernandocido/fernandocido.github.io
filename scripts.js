var light = 0;
  
function darkMode() {
    var element = document.body;
    element.classList.toggle("darkMode");
    
    if(light==0) {
      document.getElementById('img-lightbulb').src = "assets/img/lightbulb2.png";
      document.getElementById('img-github').src = "assets/img/github2.png";
      document.getElementById('img-vsco').src = "assets/img/vsco2.png";
      document.getElementById('img-spotify').src = "assets/img/spotify2.png";
      document.getElementById('img-youtube').src = "assets/img/youtube2.png";
      document.getElementById('img-bmc').src = "assets/img/bmc2.png";
      document.getElementById('img-steam').src = "assets/img/steam2.png";
      document.getElementById('img-insta').src = "assets/img/insta2.png";
      document.getElementById('img-discord').src = "assets/img/discord2.png";
      light = 1;
    }
    
    else if(light=1) {
      document.getElementById('img-lightbulb').src = "assets/img/lightbulb.png";
      document.getElementById('img-github').src = "assets/img/github.png";
      document.getElementById('img-vsco').src = "assets/img/vsco.png";
      document.getElementById('img-spotify').src = "assets/img/spotify.png";
      document.getElementById('img-youtube').src = "assets/img/youtube.png";
      document.getElementById('img-bmc').src = "assets/img/bmc.png";
      document.getElementById('img-steam').src = "assets/img/steam.png";
      document.getElementById('img-insta').src = "assets/img/insta.png";
      document.getElementById('img-discord').src = "assets/img/discord.png";
      light = 0;
    }
}