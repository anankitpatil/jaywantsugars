/*  JSL Scripts
    Ankit Patil  */

jQuery(document).ready(function ($) {

    // Variables
    var transition = 3000;
    var cssEase = 600;

    // Needle animation
    var deg = 45;
    var num = 1;
    setInterval(function () {
        deg += 90;
        if (num == 4) num = 1;
        else num++;
        if ($(window).width() > 991) {
            $('.meter .dial').css({
                '-webkit-transform': 'translate(0, -47%) rotate(' + deg + 'deg)',
                'transform': 'translate(0, -47%) rotate(' + deg + 'deg)'
            });
            $('.meter .meter-icon').css({
                '-webkit-transform': 'translate(0, -47%) scale(0.33)',
                'transform': 'translate(0, -47%) scale(0.33)',
                'opacity': 0
            });
            setTimeout(function () {
                $('.meter .meter-icon img').attr('src', 'img/meter-icon-' + num + '.png');
                $('.meter .meter-icon').css({
                    '-webkit-transform': 'translate(0, -47%) scale(1)',
                    'transform': 'translate(0, -47%) scale(1)',
                    'opacity': 1
                });
            }, cssEase);
        } else {
            $('.meter .dial').css({
                '-webkit-transform': 'rotate(' + deg + 'deg)',
                'transform': 'rotate(' + deg + 'deg)'
            });
            $('.meter .meter-icon').css({
                '-webkit-transform': 'scale(0.33)',
                'transform': 'scale(0.33)',
                'opacity': 0
            });
            setTimeout(function () {
                $('.meter .meter-icon img').attr('src', 'img/meter-icon-' + num + '.png');
                $('.meter .meter-icon').css({
                    '-webkit-transform': 'scale(1)',
                    'transform': 'scale(1)',
                    'opacity': 1
                });
            }, cssEase);
        }
    }, transition);

    // Map
    if ($('.contact').length) {
        function init_map() {
            var myOptions = {
                zoom: 12,
                scrollwheel: false,
                center: new google.maps.LatLng(17.450436085650722, 74.02024801172983),
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: [{
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ebe3cd"
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#523735"
                    }]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#f5f1e6"
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#c9b2a6"
                    }]
                }, {
                    "featureType": "administrative.land_parcel",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#dcd2be"
                    }]
                }, {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#ae9e90"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dfd2ae"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dfd2ae"
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#93817c"
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#a5b076"
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#447530"
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f1e6"
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#fdfcf8"
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f8c967"
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#e9bc62"
                    }]
                }, {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e98d58"
                    }]
                }, {
                    "featureType": "road.highway.controlled_access",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#db8555"
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#806b63"
                    }]
                }, {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dfd2ae"
                    }]
                }, {
                    "featureType": "transit.line",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#8f7d77"
                    }]
                }, {
                    "featureType": "transit.line",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "color": "#ebe3cd"
                    }]
                }, {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dfd2ae"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#b9d3c2"
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#92998d"
                    }]
                }]
            };
            map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
            marker = new google.maps.Marker({
                map: map,
                position: new google.maps.LatLng(17.450436085650722, 74.02024801172983)
            });
            infowindow = new google.maps.InfoWindow({
                content: '<strong> Jaywant sugars Ltd. </strong> <br /> Dhavarwadi, Tal. – Karad <br /> Dist. – Satara, Maharashtra'
            });
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
            infowindow.open(map, marker);
        }
        google.maps.event.addDomListener(window, 'load', init_map);

        // Contact Form
        $('.contact-form').validator().on('submit', function (e) {
            if (e.isDefaultPrevented()) {
                // handle the invalid form...
            } else {
                e.preventDefault();
                $('.contact-form input, .contact-form textarea').prop('disabled', true);
                $('.contact-form .btn').addClass('disabled');
                $.ajax({
                    url: '../contact-form.php',
                    type: 'post',
                    data: { //Fetch form data
                        'name': $('.contact-form#inputName').val(),
                        'phone': $('.contact-form #inputNumber').val(),
                        'email': $('.contact-form #inputEmail').val(),
                        'message': $('.white-bg .apply #inputMessage').val()
                    }
                }).done(function (response, textStatus, jqXHR) {
                    console.log(response);
                }).fail(function (jqXHR, textStatus, errorThrown) {
                    console.error(
                        "The following error occurred: " +
                        textStatus, errorThrown
                    );
                });
            }
        });
    }

    // Init wow.js
    new WOW().init();

});
