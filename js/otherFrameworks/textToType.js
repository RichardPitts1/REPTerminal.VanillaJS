console.log("textToType.js Loads Successfully")


var typed = new Typed(".typing", {
    strings: [
        "Welcome!",
        "Welcome to the uInvest Web App",
        "Everything u Need to invest",
        "Like a pro...",
        "uInvest"
    ],
    typeSpeed: 60,
    backSpeed: 10,
    backDelay: 500,
    startDelay: 3000,
    loop: false
    // smartBackspace: true
});

    $(window).load(function() {
        $("#overlay").delay(400).fadeOut('600', function() {
            $(this).addClass('remove');
        });
    });
setTimeout(function() {
    $("#overlay").fadeOut('600', function() {
        $(this).addClass('remove');
    });
}, 5000);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46649102-1', 'dittodc.com');
ga('send', 'pageview');