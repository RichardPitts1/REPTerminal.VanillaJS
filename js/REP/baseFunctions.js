const usaViewButton = document.getElementById('usaViewbutton')
usaViewButton.addEventListener('click', () => {
    // console.log("clicked")

    if (document.getElementById('explodingChartdiv').style.display = "block") {
        console.log("Clicky click click:")
        document.getElementById('explodingChartdiv').style.display = "none"
    } else if (document.getElementById('explodingChartdiv').style.display = "none") {
        console.log("Well it was clicked")
        document.getElementById('explodingChartdiv').style.display = "block"
    } else {
        console.log("derp")
    }


})

