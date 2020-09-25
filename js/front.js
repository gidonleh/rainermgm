$(function () {

    lightbox.option({
        'resizeDuration': 200
    });

    // ---------------------------------------------------------- //
    // Smooth scrolling
    // ---------------------------------------------------------- //
    var scroll = new SmoothScroll('a.link-scroll', {
        speed: 500,
        speedAsDuration: true,
        offset: 20,
        easing: 'easeInOutQuad'
    });


    // ---------------------------------------------------------- //
    // Scroll Spy
    // ---------------------------------------------------------- //
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 80
    });

    // ---------------------------------------------------------- //
    // Close navbar on click on mobiles
    // ---------------------------------------------------------- //

    $('.navbar .link-scroll').on('click', function () {
        if ($(window).outerWidth() <= 985) {
            $('.navbar-collapse').removeClass('show');
            $('.navbar-toggler').attr('aria-expanded', 'false');
        }
    });

    // ---------------------------------------------------------- //
    // Map init
    // ---------------------------------------------------------- //    

    map();

});

// ------------------------------------------------------ //
// styled Leaflet  Map
// ------------------------------------------------------ //

// function map() {

//     var mapId = 'map',
//         mapCenter = [53.14, 8.22],
//         mapMarker = true;

//     if ($('#' + mapId).length > 0) {

//         var icon = L.icon({
//             iconUrl: 'img/marker.png',
//             iconSize: [25, 37.5],
//             popupAnchor: [0, -18],
//             tooltipAnchor: [0, 19]
//         });

//         var dragging = false,
//             tap = false;

//         if ($(window).width() > 700) {
//             dragging = true;
//             tap = true;
//         }

//         var map = L.map(mapId, {
//             center: mapCenter,
//             zoom: 13,
//             dragging: dragging,
//             tap: tap,
//             scrollWheelZoom: false
//         });

//         var Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
//             attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//             subdomains: 'abcd',
//             minZoom: 0,
//             maxZoom: 20,
//             ext: 'png'
//         });

//         var Wikimedia = L.tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png', {
//             attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
//             minZoom: 1,
//             maxZoom: 19
//         });

//         // B & W Map - uncomment the line below for B&W
//         // Stamen_TonerLite.addTo(map);
        
//         // Coloured Map - uncomment the line below for different map style
//         Wikimedia.addTo(map); 

//         map.once('focus', function () {
//             map.scrollWheelZoom.enable();
//         });

//         if (mapMarker) {
//             var marker = L.marker(mapCenter, {
//                 icon: icon
//             }).addTo(map);

//             marker.bindPopup("<div class='p-3'><h3 class='font-weight-bold text-uppercase'>Info Window Content</h3><p class='text-muted'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p></div>", {
//                 minwidth: 200,
//                 maxWidth: 600,
//                 className: 'map-custom-popup'
//             })

//         }
//     }

// }

// firebase

var firebaseConfig = {
    apiKey: "AIzaSyBDBXgYXgeNis8JDgnw3gymFiU311pWpF0",
    authDomain: "rainer-mgm.firebaseapp.com",
    databaseURL: "https://rainer-mgm.firebaseio.com",
    projectId: "rainer-mgm",
    storageBucket: "rainer-mgm.appspot.com",
    messagingSenderId: "549972396102",
    appId: "1:549972396102:web:b9d8f6883b74ec7a7e2247"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //reference messages collection
let messagesRef = firebase.database().ref('rainer-mgm');

function onMessageCreate(){
  functions.database.ref('rainer-mgm').onCreate()
}

// Listen for form submit

document.getElementById('contactform').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  //get values
  let name = getInputVal('name');
  let email = getInputVal('email');
  let phone = getInputVal('phone');
  let message = getInputVal('message');

  saveMessage(name, email, phone, message);

  document.getElementById('contactform').reset();
  
}

// function to hide the form and show V that confirms it has been sent

// function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, email, phone, message){
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  }) 
}