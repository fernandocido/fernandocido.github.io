var light = 0;
  
function darkMode() {
    var element = document.body;
    element.classList.toggle("darkMode");
    
    if(light==0) {
      document.getElementById('img-email').src = "img/email-128px-dark.png";
      document.getElementById('img-location').src = "img/location-128px-dark.png";
      document.getElementById('img-linkedin').src = "img/linkedin-128px-dark.png";
      document.getElementById('img-github').src = "img/github-128px-dark.png";
      document.getElementById('img-vsco').src = "img/vsco-128px-dark.png";
      document.getElementById('img-instagram').src = "img/instagram-128px-dark.png";
      document.getElementById('img-twitter').src = "img/twitter-128px-dark.png";
      document.getElementById('img-lattes').src = "img/lattes-128px-dark.png";
      document.getElementById('img-apple-music').src = "img/apple-music-128px-dark.png";
      document.getElementById('img-lightbulb').src = "img/lightbulb-64px-dark.png";
      document.getElementById('img-steam').src = "img/steam-64px-dark.png";
      light = 1;
    }
    
    else if(light=1) {
      document.getElementById('img-email').src = "img/email-128px-light.png";
      document.getElementById('img-location').src = "img/location-128px-light.png";
      document.getElementById('img-linkedin').src = "img/linkedin-128px-light.png";
      document.getElementById('img-github').src = "img/github-128px-light.png";
      document.getElementById('img-vsco').src = "img/vsco-128px-light.png";
      document.getElementById('img-instagram').src = "img/instagram-128px-light.png";
      document.getElementById('img-twitter').src = "img/twitter-128px-light.png";
      document.getElementById('img-lattes').src = "img/lattes-128px-light.png";
      document.getElementById('img-apple-music').src = "img/apple-music-128px-light.png";
      document.getElementById('img-lightbulb').src = "img/lightbulb-64px-light.png";
      document.getElementById('img-steam').src = "img/steam-64px-light.png";
      light = 0;
    }
}