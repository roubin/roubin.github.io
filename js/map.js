var map  = L.map('display-map').setView([45.195,5.743], 14);

// LAYERS
var Stamen_Watercolor = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
    attribution: 'Map &copy <a href="http://stamen.com">Stamen Design</a>, data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a></span>',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 16,
    ext: 'png'
});
var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
	 
var Thunderforest_Outdoors = L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map &copy <a href="http://www.thunderforest.com/">Thunderforest</a>, data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
	 
var OpenWeatherMap_Snow = L.tileLayer('http://{s}.tile.openweathermap.org/map/snow/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'snow data &copy; <a href="http://openweathermap.org">OpenWeatherMap</a>',
    opacity: 0.5
});
	 
var NASAGIBS_ModisTerraSnowCover = L.tileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_Snow_Cover/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
    attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
    bounds: [[-85.0511287776, -179.999999975], [85.0511287776, 179.999999975]],
    minZoom: 1,
    maxZoom: 8,
    format: 'png',
    time: '',
    tilematrixset: 'GoogleMapsCompatible_Level',
    opacity: 0.75
});
	 
// OVERLAYS
var tramOverlay = new L.LayerGroup();
var walkOverlay = new L.LayerGroup();	 

// POINTS
var LatZ=45.191465; var LonZ=5.714504; // SNCF
var LatA=45.190150; var LonA=5.715245; // Gare-Europole
var LatB=45.189385; var LonB=5.720430;
var LatC=45.189869; var LonC=5.725108;
var LatD=45.191351; var LonD=5.730687;
var LatE=45.193589; var LonE=5.732232;
var LatF=45.197309; var LonF=5.736652;
var LatG=45.200665; var LonG=5.741287;
var LatH=45.200333; var LonH=5.745536;
var LatI=45.199063; var LonI=5.749913;
var LatJ=45.192198; var LonJ=5.757938;
var LatK=45.192262; var LonK=5.764438; // Gabriel Faure
var LatL=45.192536; var LonL=5.766728;
var LatM=45.193051; var LonM=5.767887;	 
var LatN=45.193190; var LonN=5.770910;
var LatO=45.192349; var LonO=5.770941; // bibliotheque universitaire

var LatP=45.195458; var LonP=5.773173;
var LatQ=45.196222; var LonQ=5.773055;
var LatR=45.196698; var LonR=5.772337;
var LatS=45.197158; var LonS=5.771612;
var LatT=45.196902; var LonT=5.771321; // Bureau

// MARKERS
var subwayMarkers = L.AwesomeMarkers.icon({icon:'fa-subway',  markerColor:'red',  shape:'square',prefix:'fa'});
var trainMarkers  = L.AwesomeMarkers.icon({icon:'fa-train',   markerColor:'green',shape:'square',prefix:'fa'});
var officeMarkers = L.AwesomeMarkers.icon({icon:'fa-building',markerColor:'red',  shape:'square',prefix:'fa'});
var markerA = L.marker([LatZ,LonZ],{icon:subwayMarkers,title:'SNCF train station'}).addTo(tramOverlay);
var markerB = L.marker([LatA,LonA],{icon:trainMarkers, title:'Gare-Europole'}).addTo(tramOverlay);
var markerC = L.marker([LatO,LonO],{icon:trainMarkers, title:'Bibliotheques Universitaires'}).addTo(tramOverlay);	
var markerD = L.marker([LatT,LonT],{icon:officeMarkers,title:'3SR'}).addTo(walkOverlay);

// ICONS
var tramIcon = L.icon({iconUrl:'img/markers/fa-train_25_0_19a918_none.png',iconRetinaUrl:'img/markers/fa-train_50_0_19a918_none.png',iconSize:[25,25],iconAnchor:[12.5,25],popupAnchor:[0,-25],shadowUrl:'img/markers/marker-shadow.png',shadowAnchor:[12,40]});
var walkIcon = L.icon({iconUrl:'img/markers/map-icon-trail-walking_25_0_2f5acc_none.png',iconRetinaUrl:'img/markers/map-icon-trail-walking_50_0_2f5acc_none.png',iconSize:[25,25],iconAnchor:[12.5,25],popupAnchor:[0,-25],shadowUrl:'img/markers/marker-shadow.png',shadowAnchor:[12,40]});

// PATHS
var tramStop = [[LatA,LonA],[LatB,LonB],[LatC,LonC],[LatD,LonD],[LatE,LonE],[LatF,LonF],[LatG,LonG],[LatH,LonH],[LatI,LonI],[LatJ,LonJ],[LatK,LonK],[LatL,LonL],[LatM,LonM],[LatN,LonN],[LatO,LonO]];
var tramPath = L.polyline(tramStop, {color:'green'}).addTo(tramOverlay);
var tramMovi = L.Marker.movingMarker(tramStop,[1500,1000,1000,1000,1500,1500,1000,1000,2000,1000,500,500,1000,500],{loop:true,icon:tramIcon}).addTo(tramOverlay); tramMovi.start();
var walkStop = [[LatO,LonO],[LatN,LonN],[LatP,LonP],[LatQ,LonQ],[LatR,LonR],[LatS,LonS],[LatT,LonT]];
var walkPath = L.polyline(walkStop, {color:'blue'}).addTo(walkOverlay);
var walkMovi = L.Marker.movingMarker(walkStop,[500,2000,500,500,500,200],{loop:true,icon:walkIcon}).addTo(walkOverlay); walkMovi.start();	

// POPUP
var tramText="<b>TRAM B <i class=\"fa fa-arrow-right\"></i> \"Gi&egrave;res Plaine des Sports\"</b><br /><i class=\"fa fa-train\"></i> From \"Gare-Europole\" (SNCF)<br/><i class=\"fa fa-train\"></i> To \"Biblioth&egrave;ques Universitaires\"";
var walkText="<b>Walk</b><br /><i class=\"fa fa-train\"></i> From \"Biblioth&egrave;ques Universitaires\"<br /> <i class=\"fa fa-building\"></i> Laboratoire 3SR";
tramPath.bindPopup(tramText); tramMovi.bindPopup(tramText);
walkPath.bindPopup(walkText); walkMovi.bindPopup(walkText);
markerA.bindPopup("<i class=\"fa fa-subway\"></i> <b>SNCF</b> train station");
markerB.bindPopup("<i class=\"fa fa-train\"></i> <b>TRAM B</b> \"Gare Europole\"");
markerC.bindPopup("<i class=\"fa fa-train\"></i> <b>TRAM B</b> \"Biblioth&egrave;ques Universitaires\"");
markerD.bindPopup("<i class=\"fa fa-building\"></i> <b>Laboratoire 3SR</b><br />B&acirc;timent Galil&eacute;e<br />1270 rue de la piscine<br />38 400 Saint Martin d'H&egrave;res");

// ADD TO MAP
Stamen_Watercolor.addTo(map);
tramOverlay.addTo(map);
walkOverlay.addTo(map);
//OpenWeatherMap_Snow.addTo(map);
//	 L.popup().setLatLng([LatG, LonG]).setContent(tramText).openOn(map);

// CONTROL
var baseLayers = {
    "Artistic view":Stamen_Watercolor,
    "Street name":OpenStreetMap_Mapnik,
//    "Outdoors":Thunderforest_Outdoors
};
var overlays = {
    '<i class="fa fa-train"></i> Tram': tramOverlay,
    '<i class="fa fa-child"></i> Walk': walkOverlay,
    //	     '<i class="fa fa-cloud"></i> Snow': OpenWeatherMap_Snow
    //	     'Snow': NASAGIBS_ModisTerraSnowCover
};
L.control.layers(baseLayers,overlays).addTo(map);
L.control.scale({position:'bottomleft',imperial:false}).addTo(map);

// POPUP FROM OUTSIDE THE MAP
$(".popupMap").click(function(e) {
    e.preventDefault();
    window[this.id].openPopup();
});
