am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart instance
    var chart = am4core.create("ThreeDBarChartdiv", am4charts.XYChart3D);
    
    // Add data
    chart.data = [{
      "year": 2015,
      "income": 11.29,
      "color": chart.colors.next()
    },{
      "year": 2016,
      "income": -5.4,
      "color": chart.colors.next()
    }, {
      "year": 2017,
      "income": 18.58,
      "color": chart.colors.next()
    }, {
      "year": 2018,
      "income": 22.62,
      "color": chart.colors.next()
    }, {
      "year": 2019,
      "income": 13.20,
      "color": chart.colors.next()
    }];
    
    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.numberFormatter.numberFormat = "#";
    categoryAxis.renderer.inversed = true;
    
    var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
    
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries3D());
    series.dataFields.valueX = "income";
    series.dataFields.categoryY = "year";
    series.name = "Income";
    series.columns.template.propertyFields.fill = "color";
    series.columns.template.tooltipText = "{valueX} %";
    series.columns.template.column3D.stroke = am4core.color("#fff");
    series.columns.template.column3D.strokeOpacity = 0.4;
    
    }); // end am4core.ready()