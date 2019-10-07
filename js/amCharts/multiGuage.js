am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // create chart
    var chart = am4core.create("chartdiv", am4charts.GaugeChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect
    
    chart.startAngle = 0;
    chart.endAngle = 360;
    
    function createAxis(min, max, start, end, color) {
      var axis = chart.xAxes.push(new am4charts.ValueAxis());
      axis.min = min;
      axis.max = max;
      axis.strictMinMax = true;
      axis.renderer.useChartAngles = false;
      axis.renderer.startAngle = start;
      axis.renderer.endAngle = end;
      axis.renderer.minGridDistance = 100;
    
      axis.renderer.line.strokeOpacity = 1;
      axis.renderer.line.strokeWidth = 10;
      axis.renderer.line.stroke = am4core.color(color);
      
      axis.renderer.ticks.template.disabled = false;
      axis.renderer.ticks.template.stroke = am4core.color(color);
      axis.renderer.ticks.template.strokeOpacity = 1;
      axis.renderer.grid.template.disabled = true;
      axis.renderer.ticks.template.length = 10;
      
      return axis;
    }
    
    function createHand(axis) {
      var hand = chart.hands.push(new am4charts.ClockHand());
      hand.fill = axis.renderer.line.stroke;
      hand.stroke = axis.renderer.line.stroke;
      hand.axis = axis;
      hand.pin.disabled = true;
      hand.startWidth = 10;
      hand.endWidth = 0;
      hand.radius = am4core.percent(90);
      hand.innerRadius = am4core.percent(70);
      hand.value = 0;
      return hand;
    }
    


    var axis1 = createAxis(0, 3, 180, 226.42, "#DDAE2E");
    var axis2 = createAxis(0, 3, 231.42, 277.84, "#426A5A");
    var axis3 = createAxis(0, 3, 282.84, 329.26, "#7FB685");
    var axis4 = createAxis(0, 3, 334.26, 380.68, "#DDAE2E");
    var axis5 = createAxis(0, 3, 385.68, 427.1, "#DDAE4E");
    var axis6 = createAxis(0, 3, 432.1, 478.52, "#DDAE7E");
    var axis7 = createAxis(0, 3, 483.52, 529.94, "#DDAE7E");
    
    var hand1 = createHand(axis1);
    var hand2 = createHand(axis2);
    var hand3 = createHand(axis3);
    var hand4 = createHand(axis4);
    var hand5 = createHand(axis5);
    var hand6 = createHand(axis6);
    var hand7 = createHand(axis7);

    
    setInterval(function() {
      hand1.showValue(Math.random() * hand1.axis.max, 1000, am4core.ease.cubicOut);
      hand2.showValue(Math.random() * hand2.axis.max, 1000, am4core.ease.cubicOut);
      hand3.showValue(Math.random() * hand3.axis.max, 1000, am4core.ease.cubicOut);
      hand4.showValue(Math.random() * hand4.axis.max, 1000, am4core.ease.cubicOut);
      hand5.showValue(Math.random() * hand2.axis.max, 1000, am4core.ease.cubicOut);
      hand6.showValue(Math.random() * hand3.axis.max, 1000, am4core.ease.cubicOut);
      hand7.showValue(Math.random() * hand4.axis.max, 1000, am4core.ease.cubicOut);
    }, 2000);
    
    }); // end am4core.ready()