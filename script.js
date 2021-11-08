mapboxgl.accessToken = 'pk.eyJ1IjoicmFrc2hpdGtoYXRyaSIsImEiOiJja3Ztb2JpN3ozZm9oMnVwMWdha3ZpZTM0In0._oP9HwqbIDtOTF2tu-SJIA';

navigator.geolocation.getCurrentPosition(successLocation,errorLocation, {
  enableHighAccuracy:true
})

function successLocation(position){
    console.log(position)
    setupMap([position.coords.longitude,position.coords.latitude])
}

function errorLocation(position){
    setupMap ([123.3656, 48.4284])
}



function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15,
    })
    // Add zoom and rotation controls to the map.
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
    
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
        //unit:'metric',
        //profile: 'mapbox/cycling',
      });
      
      map.addControl(directions, 'top-left');

      map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
        }));
}