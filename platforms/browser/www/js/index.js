$(document).ready(function() {
    $(window).load(function() {
        $(".loading").fadeOut(100);
    });
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }
    function onDeviceReady() {
        document.addEventListener("offline", onOffline, false);
    }
    function onOffline() {
        $(".nointernet").fadeIn(10);
    }
    $(".navicon").click(function() {
        $(".nav").addClass("show");
        $(".navexit").addClass("show");
    });
    $(".navexit").click(function() {
        $(".nav").removeClass("show");
        $(".navexit").removeClass("show");
    });
    $(".carticon").click(function() {
        $(".iframe").attr('src', 'https://purifierkart.com/cart/?app=android');
        $(".nav").removeClass("show");
        $(".navexit").removeClass("show");
        $(".iframe").contents().find('iframe').contents().find(".loading").fadeIn(100);
    });
    $(".home").click(function() {
        $(".iframe").attr('src', 'https://purifierkart.com/?app=android');
        $(".nav").removeClass("show");
        $(".navexit").removeClass("show");
    });
    $(".products").click(function() {
        $(".iframe").attr('src', 'https://purifierkart.com/all-products/?app=android');
        $(".nav").removeClass("show");
        $(".navexit").removeClass("show");
    });
    $(".purifier").click(function() {
        $(".iframe").attr('src', 'https://purifierkart.com/product-category/water-purifiers/?app=android');
        $(".nav").removeClass("show");
        $(".navexit").removeClass("show");
    });
    $(".kitchen").click(function() {
        $(".iframe").attr('src', 'https://purifierkart.com/product-category/kitchen-appliances/?app=android');
        $(".nav").removeClass("show");
        $(".navexit").removeClass("show");
    });
    $(".homeapp").click(function() {
        $(".iframe").attr('src', 'https://purifierkart.com/product-category/home-appliances/?app=android');
        $(".nav").removeClass("show");
        $(".navexit").removeClass("show");
    });
    $(".offers").click(function() {
        var url="https://purifierkart.com/app/loadoffer.php";
        $.getJSON(url,function(result){
            console.log(result);
            $.each(result, function(i, field){
                var offer=field.post_content;
                $("#offer").append(offer);
            });
        });
        $(".offer").fadeIn(100);
    });
    $(".offerclose").click(function() {
        $(".offer").fadeOut(100);
    });
    $(".contact").click(function() {
        $(".iframe").attr('src', 'https://purifierkart.com/contact-us/?app=android');
        $(".nav").removeClass("show");
        $(".navexit").removeClass("show");
    });
    $(".service").click(function() {
        $(".iframe").attr('src', 'https://purifierkart.com/product-category/repair-services/?app=android');
        $(".nav").removeClass("show");
        $(".navexit").removeClass("show");
    });
    $(".exit").click(function() {
        navigator.app.exitApp();
    });
});