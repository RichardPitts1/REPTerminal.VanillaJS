am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    
    
    // Create chart instance
    var chart = am4core.create("worldSolidGuageChartdiv", am4charts.RadarChart);
    
    // Add data
    chart.data = [{
        "category": "World",
      "value": 69,
      "full": 69
    }, {
      "category": "North America",
      "value": 28.059,
      "full": 69
    }, {
      "category": "South America:",
      "value": 0.933,
      "full": 69
    }, {
      "category": "Asia",
      "value": 23.048,
      "full": 69
    }, {
      "category": "Australia",
      "value": 1.207,
      "full": 69
    }, {
      "category": "Europe",
      "value": 13.589,
      "full": 69
    }];
    
    // Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(20);
    
    // Set number format
    chart.numberFormatter.numberFormat = "#.#' T'";
    
    // Create axes
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.strokeOpacity = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.fontWeight = 500;
    categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
      return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
    });
    categoryAxis.renderer.minGridDistance = 10;
    
    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.min = 0;
    valueAxis.max = 69;
    valueAxis.strictMinMax = true;
    
    // Create series
    var series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.cornerRadiusTopLeft = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;
    
    var series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series2.columns.template.radarColumn.cornerRadius = 20;

    var series3 = chart.series.push(new am4charts.RadarColumnSeries());
    series3.dataFields.valueX = "value";
    series3.dataFields.categoryY = "category";
    series3.clustered = false;
    series3.columns.template.strokeWidth = 0;
    series3.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series3.columns.template.radarColumn.cornerRadius = 20;


    var series4 = chart.series.push(new am4charts.RadarColumnSeries());
    series4.dataFields.valueX = "value";
    series4.dataFields.categoryY = "category";
    series4.clustered = false;
    series4.columns.template.strokeWidth = 0;
    series4.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series4.columns.template.radarColumn.cornerRadius = 20;


    var series5 = chart.series.push(new am4charts.RadarColumnSeries());
    series5.dataFields.valueX = "value";
    series5.dataFields.categoryY = "category";
    series5.clustered = false;
    series5.columns.template.strokeWidth = 0;
    series5.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series5.columns.template.radarColumn.cornerRadius = 20;

    var series6 = chart.series.push(new am4charts.RadarColumnSeries());
    series6.dataFields.valueX = "value";
    series6.dataFields.categoryY = "category";
    series6.clustered = false;
    series6.columns.template.strokeWidth = 0;
    series6.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series6.columns.template.radarColumn.cornerRadius = 20;

    var series7 = chart.series.push(new am4charts.RadarColumnSeries());
    series7.dataFields.valueX = "value";
    series7.dataFields.categoryY = "category";
    series7.clustered = false;
    series7.columns.template.strokeWidth = 0;
    series7.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series7.columns.template.radarColumn.cornerRadius = 20;

    var series8 = chart.series.push(new am4charts.RadarColumnSeries());
    series8.dataFields.valueX = "value";
    series8.dataFields.categoryY = "category";
    series8.clustered = false;
    series8.columns.template.strokeWidth = 0;
    series8.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series8.columns.template.radarColumn.cornerRadius = 20;

    
    series2.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
    
    // Add cursor
    chart.cursor = new am4charts.RadarCursor();
    
    }); // end am4core.ready()