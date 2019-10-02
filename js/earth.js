var chart = am4core.create("chartdiv", am4maps.MapChart);

console.log(chart)

am4core.ready(function() {
        
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;
    
    // Set projection
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = "rotateLongLat";
    chart.deltaLatitude = -20;
    chart.padding(20,20,20,20);

    chart.isHidden = true
    chart.opacity = 0.4
    
    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    
    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
    
    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#47c78a");
    polygonTemplate.stroke = am4core.color("#454a58");
    polygonTemplate.strokeWidth = 0.5;
    
    var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    graticuleSeries.mapLines.template.line.stroke = am4core.color("#ffffff");
    graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
    graticuleSeries.fitExtent = false;
    
    
    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
    chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#ffffff");
    
    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);
    
    let animation;
    setTimeout(function(){
      animation = chart.animate({property:"deltaLongitude", to:100000}, 20000000);
    }, 3000)
    
    chart.seriesContainer.events.on("down", function(){
    if(animation){
    //  animation.stop(); Here you could make it instead of stopping, take you to the new view.
        animation.stop()
      // Here I want to call a function that displays the exploding view content while also hiding the former.
      showExploding()
    }       
    })
    
    }); // end am4core.ready()


// Here is the beginning of the code for showing/hiding things
// const earthView = document.getElementById('earthView')
// const usaView = document.getElementById('tester')

function showExploding() {
  // So you want earthView display property to equal none.
  console.log("Were getting there")
  document.getElementById("earthView").style.display = "none"
  console.log(document.getElementById("earthView").style)
  // console.log(chart)
  document.getElementById("explodingChartdiv").style.display = "block"
}
