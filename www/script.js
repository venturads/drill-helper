//close navbar menu on link click
document.querySelector('.mdl-layout__drawer').addEventListener('click', function () {
  document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
  this.classList.remove('is-visible');
}, false);

//go home page
function getHome() {
  document.getElementById('root').innerHTML = "<img src='./img/cnc.gif' width='100%' height='100%'></div></div>";
}
document.getElementById('home-btn').addEventListener('click', getHome);
document.getElementById('demo-avatar').addEventListener('click', getHome);
// more menu list
function getData (){
  // const n2 = 'https://venturads.com/helper-menu.json';
  getHome();
document.getElementById("content-app").innerHTML = "<div class='loader'></div>";
  let data=[
    {
      id: 2020,
      title: "Drill Press",
      content: "Welding Chart",
      url: "img/1.jpg",
      urlToImage: "img/1.jpg"
    },{
      id: 2021,
      title: "Chart",
      content: "Symbols",
      url: "img/2.jpg",
      urlToImage: "img/2.jpg"
    },{
      id: 2022,
      title: "Torque",
      content: "Specs",
      url: "img/3.jpg",
      urlToImage: "img/3.jpg"
    },{
      id: 2023,
      title: "Drill Punch",
      content: "Settings",
      url: "img/4.jpg",
      urlToImage: "img/4.jpg"
    },{
      id: 2024,
      title: "Saftey Glasses",
      content: "Basic Symbols",
      url: "img/5.jpg",
      urlToImage: "img/5.jpg"
    },  {
      id: 2025,
      title: "Drilling Machine",
      content: "Welding Chart",
      url: "img/6.jpg",
      urlToImage: "img/6.jpg"
    },{
      id: 2026,
      title: "Cordess Drill",
      content: "Data",
      url: "img/7.jpg",
      urlToImage: "img/7.jpg"
    },{
      id: 2027,
      title: "Drill Holder",
      content: "Types",
      url: "img/8.jpg",
      urlToImage: "img/8.jpg"
    },{
      id: 2028,
      title: "Lathe Drill",
      content: "More Types",
      url: "img/9.jpg",
      urlToImage: "img/9.jpg"
    },{
      id: 2029,
      title: "Center Drill",
      content: "Weld Joints",
      url: "img/10.jpg",
      urlToImage: "img/10.jpg"
    },{
      id: 2030,
      title: "Chip Load",
      content: "Process",
      url: "img/11.jpg",
      urlToImage: "img/11.jpg"
    },{
      id: 2031,
      title: "Tap Drill Chart",
      content: "Safety",
      url: "img/12.jpg",
      urlToImage: "img/12.jpg"
    },{
      id: 2032,
      title: "Metric Endmill Speeds",
      content: "Equipment",
      url: "img/13.jpg",
      urlToImage: "img/13.jpg"
    },{
      id: 2033,
      title: "Endmill Speeds",
      content: "Workbench",
      url: "img/14.jpg",
      urlToImage: "img/14.jpg"
    },{
      id: 2034,
      title: "Tap Drill Chart",
      content: "Seated Workbench",
      url: "img/15.jpg",
      urlToImage: "img/15.jpg"
    },  {
      id: 2035,
      title: "Hardness Chart",
      content: "Mill Direction",
      url: "img/16.jpg",
      urlToImage: "img/16.jpg"
    },{
      id: 2036,
      title: "Cutting Speeds",
      content: "Cutting Speeds",
      url: "img/17.jpg",
      urlToImage: "img/17.jpg"
    },{
      id: 2037,
      title: "Undercut Lathe",
      content: "Decimal Chart",
      url: "img/18.jpg",
      urlToImage: "img/18.jpg"
    },{
      id: 2038,
      title: "Auto Punch",
      content: "Decimal Chart",
      url: "img/19.jpg",
      urlToImage: "img/19.jpg"
    },{
      id: 2039,
      title: "Center Punch",
      content: "Decimal Chart",
      url: "img/20.jpg",
      urlToImage: "img/20.jpg"
    }
  ];
  let list = "";
  for(let i=0;i<data.length;i++){
    list += "<a href=#" + data[i].id + " class='mdl-navigation__link' type='button' id=" + data[i].id + " class='btn btn-primary sharp'>" +  data[i].title + "</a></br>";
    document.getElementById('content-app').innerHTML = list;
  }
  for(let i=0;i<data.length;i++){ 
    function getImage() {
      document.getElementById('root').innerHTML = "<img src='" + data[i].url + "' width='100%' ></div></div>";
    }
    document.getElementById(data[i].id).addEventListener('click', getImage);
  }
}

getData();

  //admob id script
  function onDeviceReady() {
    document.removeEventListener('deviceready', onDeviceReady, false);
    // Set AdMobAds options:
    admob.setOptions({
      publisherId:          "ca-app-pub-3864996818231266/7976374832",  // Required Banner ads
      interstitialAdId:     "ca-app-pub-3864996818231266/6499641630",  // Optional Full screen ads
        // tappxIdiOS:           "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
        // tappxIdAndroid:       "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
        // tappxShare:           0.5                                        // Optional
    });
    admob.createBannerView();
    admob.requestInterstitialAd({
      autoShowInterstitial: true
    });
}

document.addEventListener("deviceready", onDeviceReady, false);

