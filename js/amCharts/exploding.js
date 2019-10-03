am4core.ready(function() {
    
  // Themes begin
  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  var container = am4core.create("explodingChartdiv", am4core.Container);
  container.width = am4core.percent(100);
  container.height = am4core.percent(100);
  // So if you uncomment this out, it shifts the child pie chart over to the left.
  container.layout = "horizontal";

  // DONUT ATTEMPT
  // This doesn't exactly work because its not a PieChart with a child
  // container.innerRadius = am4core.percent(40)

  // LEGEND ATTEMPT
  container.legend = new am4charts.Legend();
  
  
  var chart = container.createChild(am4charts.PieChart);
  chart.legend = new am4charts.Legend()
  // This is how I achieved the donut functionality:
  chart.innerRadius = am4core.percent(40)



// Here is the NEW attempted functionality!!!
// var pieSeries = chart.series.push(new am4charts.PieSeries());
// pieSeries.dataFields.value = "percentage";
// pieSeries.dataFields.category = "sector";
// pieSeries.innerRadius = am4core.percent(1.5);
// pieSeries.ticks.template.disabled = false;
// pieSeries.labels.template.disabled = false;
// var rgm = new am4core.RadialGradientModifier();
// rgm.brightnesses.push(-0.8, -0.8, -0.5, 0, - 0.82);
// pieSeries.slices.template.fillModifier = rgm;
// pieSeries.slices.template.strokeModifier = rgm;
// pieSeries.slices.template.strokeOpacity = 1;
// pieSeries.slices.template.strokeWidth = 10;


// Here I am messing with the manipulable properties exposed by the console.log statement.  
// Try it with console.log statements!!
console.log(container)

//                                  Innocuous Changes!?!?!?!                              \\

// 1 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
// NOTE: Use first example to show purpose of documenting these things.../

// container.alwaysShowTooltip = true  

// container.alwaysShowTooltip = true  ENDING up being where you call container.tooltip.showToolTip  
// Having this documented aided the process.
// Comments: Above...
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////


// 2 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// container.background.draggable = true

// Comments: So this added a black background that you could click and drag around the screen.  It worked,
// But it was applicable at the moment.  Now we know/remember we can do this though.
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////


// 3 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

container.fontFamily = "Palatino"
container.fontSize = 17

// Comments:       BOOM           CHANGES THE FONT
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////


// 4 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// container.hoverOnFocus = true

// Comments:  Doesnt do Shit
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////



// 5 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// container.horizontalCenter = false


// Comments: Doesn't Do Shit
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////


// 6 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\


// container.isHover = true

// Comments: Doesn't Do Shit
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////


// 7 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
// Comments: So June, a good practice would be to iterate through possible modifications and document 
// Them using this method so you can keep track of certain modifications.  Maybe a property changes
// Something, but it isn't desireable at the moment but may be later?  Likewise, we find other alike
// amCharts have properties that are similar and can be modified.  This helps us cross-correlate relations.
// Later, we will modify the source code base and this can be used again for reference.  For example,
// Rolloutdelay does not work as documented below(#9).  What if we wanted it to say spin on startup?  You get the idea...
// Lastly, this is a creative method, iterating through possibilities versus conjuring up integrations...Get em'

// To give an example, fill modifier is the property on the donut we implement to achieve desired functionality...We use this 
// To operate on this model like so:  It doesn't work, but we see the property is modified and cross-correlate with donut model 
// to gain insight into how to get it working.
// var rgm = new am4core.RadialGradientModifier();
// rgm.brightnesses.push(-0.8, -0.8, -0.5, 0, - 0.82);
// container.fillModifier = rgm;
// container.strokeModifier = rgm;
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////


// 8 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// container.height.percent = 80


// Comments: Doesnt do shit
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////



// 9 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// container.rollOutDelay = 10000

// Comments: Doesn't do shit
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////



// 10 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// container.contentHeight = 10

// Comments: Doesn't do shit
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////


// 11 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// container.alignLabels = true

// Comments: So this added a black background that you could click and drag around the screen
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////


// 12 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// container._absoluteHeight = 3000

// Comments: I beleive this changed the height up to a certain range...Notice the _ that means its a get/set property
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////




// 13 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\

// container.scale = 2

// Comments: This Works!  But we don't want it bigger..
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////

// For June if you would like to experiemnt !  Use the same format 

// 14 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
// Comments: 
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////


// 15 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
// Comments: 
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////


// 16 /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\
// Comments:
// \\\\~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~////

// End of Innocuous changes... END END END   What exactly did we want to change though?  Did we assuredly know within the realm 
// of possibilities?  Now, we have a better idea.





// (Serious) Attempt 1:  These are differnet because there are specific changes we are trying to get to, like looking like the donut example.
// var pieSeries = chart.series.push(new am4charts.PieSeries());
// pieSeries.dataFields.value = "percentage";
// pieSeries.dataFields.category = "sector";
// pieSeries.innerRadius = am4core.percent(1.5);
// pieSeries.ticks.template.disabled = false;
// pieSeries.labels.template.disabled = false;
// var rgm = new am4core.RadialGradientModifier();
// rgm.brightnesses.push(-0.8, -0.8, -0.5, 0, - 0.82);
// pieSeries.slices.template.fillModifier = rgm;
// pieSeries.slices.template.strokeModifier = rgm;
// pieSeries.slices.template.strokeOpacity = 1;
// pieSeries.slices.template.strokeWidth = 10;

// Comments:  So we got a donut inside the donut, it doesnt spin though and it isn't the correct size.


// 2

// 3

// 4

// 5

// 6

// 7 

// 8

// 9 

// 10

  
  // Add data
  chart.data = [{
    // As of January 25, 2019, the total value of all communication services stocks in the United States came to $4.42 trillion, or 10.33% of the market. The communications industry includes stocks such as AT&T and Verizon.
    "sector": "Communication Services",
    "percentage": 9.9,
    "subData": [{ name: "Diversified Telecommunication Services", value: 200 }, { name: "Wireless Telecommunication Services", value: 150 }, { name: "Entertainment", value: 100 }, { name: "Media", value: 40 }, {name: "Interactive Media & Services", value: 10}]
  }, {
    // As of January 25, 2019, the total value of all consumer discretionary stocks in the United States came to $4.54 trillion, or about 10.11% of the market.
    "sector": "Consumer Discretionary",
    "percentage": 10.2,
    "subData": [{ name: "Automobile Components Industry", value: 909 }, { name: "Automobiles Industry", value: 909 }, { name: "Distributors Industry", value: 909 }, { name: "Diversified Consumer Services Industry", value: 909 }, 
    { name: "Hotels, Restaurants & Leisure Industry", value: 909 }, { name: "Household Durables Industry", value: 909 }, { name: "Leisure Products Industry", value: 909 }, { name: "Multiline Retail Industry", value: 909 }, 
    { name: "Specialty Retail Industry", value: 909 }, { name: "Textile, Apparel & Luxury Goods Industry", value: 909 }, { name: "Internet & Direct Marketing", value: 909 }]
  }, {
    // As of January 25, 2019, the total value of all consumer staples stocks in the United States came to $2.95 trillion, or about 7.18% of the market. 
    // This is a particularly interesting sector because it is one of the few that disproportionately produces rich shareholders over long periods of time.
    "sector": "Consumer Staples",
    "percentage": 6.7,
    "subData": [{ name: "Beverages Industry", value: 110 }, { name: "Food & Staples Retailing Industry", value: 60 }, { name: "Food Products Industry", value: 30 }, { name: "Household Products Industry", value: 30 }, { name: "Personal Products Industry", value: 30 }, 
    { name: "Tobacco Industry", value: 30 }]
  }, {
    "sector": "Energy",
    "percentage": 6.0,
    "subData": [{ name: "Energy Equipment & Services Industry", value: 80 }, { name: "Oil, Gas & Consumable Fuels Industry", value: 40 }]
  }, {
    "sector": "Financials",
    "percentage": 13.7,
    "subData": [{ name: "Banking Industry", value: 1428 }, { name: "Capital Markets Industry", value: 1428 }, { name: "Consumer Finance Industry", value: 1428 }, { name: "Diversified Financial Services Industry", value: 1428 }, { name: "Insurance Industry", value: 1428 },
     { name: "Mortgage Real Estate Investment Trusts (REITs) Industry", value: 1428 }, { name: "Thrifts & Mortgage Finance Industry", value: 1428 }]
  }, {
    "sector": "Health Care",
    "percentage": 14.9,
    "subData": [{ name: "Biotechnology Industry", value: 16.66 }, { name: "Health Care Equipment & Supplies Industry", value: 16.66 }, { name: "Health Care Providers & Services Industry", value: 16.66 }, { name: "Health Care Providers & Services Industry", value: 16.66 }, 
    { name: "Health Care Technology Industry", value: 16.66 }, { name: "Life Sciences Tools & Services Industry", value: 16.66 }, { name: "Pharmaceuticals Industry", value: 16.66 }]
  },  {
    "sector": "Industrials",
    "percentage": 9.7,
    "subData": [{ name: "Aerospace & Defense Industry", value: 7.14 }, { name: "Air Freight & Logistics Industry", value: 7.14 }, { name: "Airlines Industry", value: 7.14 }, { name: "Building Products Industry", value: 7.14 }, 
    { name: "Commercial Services & Supplies Industry", value: 7.14 }, { name: "Construction & Engineering Industry", value: 7.14 }, { name: "Electrical Equipment Industry", value: 7.14 }, { name: "Industrial Conglomerates Industry", value: 7.14 }, 
    { name: "Machinery Industry", value: 7.14 }, { name: "Marine Industry", value: 7.14 }, { name: "Professional Services Industry", value: 7.14 }, { name: "Road & Rail Industry", value: 7.14 }, { name: "Trading Companies & Distributors Industry", value: 7.14 }
    , { name: "Transportation Infrastructure Industry", value: 7.14 }]
  },  {
    "sector": "Materials",
    "percentage": 2.5,
    "subData": [{ name: "Chemicals Industry", value: 90 }, { name: "Construction Materials Industry", value: 40 }, { name: "Containers & Packaging Industry", value: 10 }, { name: "Metals & Mining Industry", value: 10 }, { name: "Paper & Forest Products Industry", value: 10 }]
  },  {
    "sector": "Real Estate",
    "percentage": 2.7,
    "subData": [{ name: "Equity Real Estate Investment Trusts", value: 50 }, { name: "Real Estate Management & Development", value: 50 }]
  },  {
    "sector": "Technology",
    "percentage": 20.8,
    "subData": [{ name: "Communications Equipment Industry", value: 16.66 }, { name: "Electronic Equipment, Instruments & Components Industry", value: 16.66 }, { name: "IT Services Industry", value: 16.66 }, { name: "Semiconductors & Semiconductor Equipment Industry", value: 16.66 }, 
    { name: "Software Industry", value: 16.66 }, { name: "Technology Hardware, Storage & Peripherals Industry", value: 16.66 }]
  },  {
    "sector": "Utilities",
    "percentage": 2.8,
    "subData": [{ name: "Electric Utilities Industry", value: 20 }, { name: "Gas Utilities Industry", value: 20 }, { name: "Independent Power and Renewable Electricity Producers Industry", value: 20 }, { name: "Multi-Utilities Industry", value: 20 }, { name: "Water Utilities Industry", value: 20 }]
  }];




  
  // Add and configure Series
  var pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "percentage";
  pieSeries.dataFields.category = "sector";
  pieSeries.slices.template.states.getKey("active").properties.shiftRadius = 0;
  //pieSeries.labels.template.text = "{category}\n{value.percent.formatNumber('#.#')}%";
  
  pieSeries.slices.template.events.on("hit", function(event) {
    selectSlice(event.target.dataItem);
  })
  
  var chart2 = container.createChild(am4charts.PieChart);
  chart2.width = am4core.percent(30);
  chart2.radius = am4core.percent(80);
  
  // Add and configure Series
  var pieSeries2 = chart2.series.push(new am4charts.PieSeries());
  pieSeries2.dataFields.value = "value";
  pieSeries2.dataFields.category = "name";
  pieSeries2.slices.template.states.getKey("active").properties.shiftRadius = 0;
  //pieSeries2.labels.template.radius = am4core.percent(50);
  //pieSeries2.labels.template.inside = true;
  //pieSeries2.labels.template.fill = am4core.color("#ffffff");
  pieSeries2.labels.template.disabled = true;
  pieSeries2.ticks.template.disabled = true;
  pieSeries2.alignLabels = false;
  pieSeries2.events.on("positionchanged", updateLines);
  
  var interfaceColors = new am4core.InterfaceColorSet();
  
  var line1 = container.createChild(am4core.Line);
  line1.strokeDasharray = "2,2";
  line1.strokeOpacity = 0.5;
  line1.stroke = interfaceColors.getFor("alternativeBackground");
  line1.isMeasured = false;
  
  var line2 = container.createChild(am4core.Line);
  line2.strokeDasharray = "2,2";
  line2.strokeOpacity = 0.5;
  line2.stroke = interfaceColors.getFor("alternativeBackground");
  line2.isMeasured = false;
  
  var selectedSlice;
  
  function selectSlice(dataItem) {
  
    selectedSlice = dataItem.slice;
  
    var fill = selectedSlice.fill;
  
    var count = dataItem.dataContext.subData.length;
    pieSeries2.colors.list = [];
    for (var i = 0; i < count; i++) {
      pieSeries2.colors.list.push(fill.brighten(i * 2 / count));
    }
  
    chart2.data = dataItem.dataContext.subData;
    pieSeries2.appear();
  
    var middleAngle = selectedSlice.middleAngle;
    var firstAngle = pieSeries.slices.getIndex(0).startAngle;
    var animation = pieSeries.animate([{ property: "startAngle", to: firstAngle - middleAngle }, { property: "endAngle", to: firstAngle - middleAngle + 360 }], 600, am4core.ease.sinOut);
    animation.events.on("animationprogress", updateLines);
  
    selectedSlice.events.on("transformed", updateLines);
  
  //  var animation = chart2.animate({property:"dx", from:-container.pixelWidth / 2, to:0}, 2000, am4core.ease.elasticOut)
  //  animation.events.on("animationprogress", updateLines)
  }
  
  
  function updateLines() {
    if (selectedSlice) {
      var p11 = { x: selectedSlice.radius * am4core.math.cos(selectedSlice.startAngle), y: selectedSlice.radius * am4core.math.sin(selectedSlice.startAngle) };
      var p12 = { x: selectedSlice.radius * am4core.math.cos(selectedSlice.startAngle + selectedSlice.arc), y: selectedSlice.radius * am4core.math.sin(selectedSlice.startAngle + selectedSlice.arc) };
  
      p11 = am4core.utils.spritePointToSvg(p11, selectedSlice);
      p12 = am4core.utils.spritePointToSvg(p12, selectedSlice);
  
      var p21 = { x: 0, y: -pieSeries2.pixelRadius };
      var p22 = { x: 0, y: pieSeries2.pixelRadius };
  
      p21 = am4core.utils.spritePointToSvg(p21, pieSeries2);
      p22 = am4core.utils.spritePointToSvg(p22, pieSeries2);
  
      line1.x1 = p11.x;
      line1.x2 = p21.x;
      line1.y1 = p11.y;
      line1.y2 = p21.y;
  
      line2.x1 = p12.x;
      line2.x2 = p22.x;
      line2.y1 = p12.y;
      line2.y2 = p22.y;
    }
  }
  
  chart.events.on("datavalidated", function() {
    setTimeout(function() {
      selectSlice(pieSeries.dataItems.getIndex(0));
    }, 1000);
  });
  
  
  }); // end am4core.ready()