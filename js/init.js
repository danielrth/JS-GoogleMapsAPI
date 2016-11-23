function getDistanceFromLatLonInKm(a, b, c, d) {
    var e = 6371,
        f = deg2rad(c - a),
        g = deg2rad(d - b),
        h = Math.sin(f / 2) * Math.sin(f / 2) + Math.cos(deg2rad(a)) * Math.cos(deg2rad(c)) * Math.sin(g / 2) * Math.sin(g / 2),
        i = 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)),
        j = e * i;
    return j
}

function deg2rad(a) {
    return a * (Math.PI / 180)
}

function showAllLoc() {
    $("#map_canvas").gmap3({
        get: {
            name: "marker",
            tag: tagArr,
            all: !0,
            callback: function(a) {
                $.each(a, function(a, b) {
                    b.setVisible(!0)
                })
            }
        }
    });
    var a = $("#map_canvas").gmap3({
        get: {
            name: "infowindow"
        }
    });
    a && a.close()
}

function max_height() {
    var a = $.mobile.activePage.find("div[data-role='header']:visible"),
        b = $.mobile.activePage.find("div[data-role='footer']:visible"),
        c = $.mobile.activePage.find("div[data-role='content']:visible:visible"),
        d = $(window).height(),
        e = d - a.outerHeight() - b.outerHeight();
    c.outerHeight() - a.outerHeight() - b.outerHeight() <= d && (e -= c.outerHeight() - c.height()), $.mobile.activePage.find('[data-role="content"]').height(e)
}

function displayUpdateMessage(a) {
    var b = "";
    b += "<li><div>" + a + "</div></li>", $("#vticker ul").append(b)
}

function displayPostMessage(a, b, c) {
    var d = "";
    d += "<li><h3>" + a + "</h3><p>" + c + "</p><p class='ui-li-aside'><strong>" + b + "</strong></p></li>", $('.post_lists [data-role="listview"]').append(d), $('.post_lists [data-role="listview"]').listview("refresh"), $(".waitlog").html("").hide()
}

function closestLoc(a) {
    dist = [], mlat = a.lat(), mlng = a.lng();
    for (var c = 0; c < latlngs.length; c++) {
        var d = getDistanceFromLatLonInKm(mlat, mlng, latlngs[c].latLng[0], latlngs[c].latLng[1]);
        dist.push(d), console.log(d + " km")
    }
    var e = Math.min.apply(Math, dist);
    return dist.indexOf(e)
}

function pClosestLoc(a) {
    var d, e, f, c = [];
    d = a.lat(), e = a.lng();
    for (var g = 0; g < platlngs.length; g++) {
        var h = getDistanceFromLatLonInKm(d, e, platlngs[g].latLng[0], platlngs[g].latLng[1]);
        c.push(h), console.log(": ", h + " km")
    }
    return f = Math.min.apply(Math, c), [c.indexOf(f), .621371 * c[c.indexOf(f)]]
}

function decimal_to_degree(v) {
  var
    decimal_seconds = 0,
    sign = v < 0 ? -1 : 1,
    v_abs = Math.abs(Math.round(v * 10000000000)) / 10000000000,
    deg = Math.floor(v_abs),
    minute = Math.floor((v_abs - deg) * 60),
    second = ((v_abs - deg) * 3600 - minute * 60);
  return ((deg * sign) + '&deg; ' + minute + '\' ' + second.toFixed(decimal_seconds) + '&quot;');
}

function findClosestLoc() {
    console.log("hit"), $("#map_canvas").gmap3({
        get: {
            name: "marker",
            tag: tagArr,
            all: !0,
            callback: function(a) {
                $.each(a, function(a, b) {
                    b.setVisible(!1)
                })
            }
        }
    }), console.log(closestLatlng), $("#map_canvas").gmap3({
        get: {
            name: "marker",
            tag: tagArr[closestLatlng],
            all: !0,
            callback: function(a) {
                $.each(a, function(a, b) {
                    b.setVisible(!0)
                })
            }
        }
    })
}
for (var mlat, mlng, closestLatlng, myLatLng, c = 0, u = 0, tagArr = [], latlngs = [{
	latLng: [39.653451, -79.956858],
	data: 'Base 1<br />West Virginia University Hospitals<br/>Phone: <a href="tel:800-255-2146">(800)255-2146</a>',
	phone: "800-255-2146",
	tag: "mTag1"
}, {
	latLng: [38.818696, -81.710685],
	data: 'Base 2<br />Jackson General Hospital, Ripley WV <br/>Phone: <a href="tel:800-346-4206">(800)346-4206</a>',
	phone: "800-346-4206",
	tag: "mTag2"
}, {
	latLng: [38.40978, -82.42704],
	data: 'Base 3<br />Cabell Huntington Hospital Huntington, WV <br/>Phone: <a href="tel:800-747-2244">(800)747-2244</a>',
	phone: "800-747-2244",
	tag: "mTag3"
}, {
	latLng: [38.879518, -82.996842],
	data: 'Base 4<br />Morgan Township Helipad, Lucasville OH <br/>Phone: <a href="tel:800-747-2244">(800)747-2244</a>',
	phone: "800-747-2244",
	tag: "mTag4"
}, {
	latLng: [37.787222, -81.123889],
	data: 'Base 5<br />Raleigh County Memorial Airport, Beckley WV <br/>Phone: <a href="tel:800-346-4206">(800)346-4206</a>',
	phone: "800-346-4206",
	tag: "mTag5"
}, {
	latLng: [38.99941, -80.277329],
	data: 'Base 6<br />Upshur County Airport, Buckhannon WV <br/>Phone: <a href="tel:800-255-2146">(800)255-2146</a>',
	phone: "800-255-2146",
	tag: "mTag6"
}, {
	latLng: [37.75111, -82.636948],
	data: 'Base 7<br />Big Sandy Regional Airport, Martin County KY <br/>Phone: <a href="tel:800-747-2244">(800)747-2244</a>',
	phone: "800-747-2244",
	tag: "mTag7"
}, {
	latLng: [39.401932, -77.984581],
	data: 'Base 8<br />Eastern West Virginia Regional Airport, Martinsburg WV <br/>Phone: <a href="tel:800-255-2146">(800)255-2146</a>',
	phone: "800-255-2146",
	tag: "mTag8"
}, {
	latLng: [37.856284, -80.404748],
	data: 'Base 9<br />Greenbrier Valley Airport, Lewisburg WV <br/>Phone: <a href="tel:800-346-4206">(800)346-4206</a>',
	phone: "800-346-4206",
	tag: "mTag9"
}], platlngs = [{
	latLng: [37.83933, -84.27002],
	data: "a",
	phone: "18007472244",
	tag: ""
}, {
	latLng: [40.41729, -82.90712],
	data: "a",
	phone: "18007472244",
	tag: ""
}, {
	latLng: [41.20332, -77.19452],
	data: "a",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.04575, -76.64127],
	data: "a",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [37.43157, -78.65689],
	data: "a",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [37.4028931, -81.38038010000002],
	data: "b",
	phone: "18003672690",
	tag: ""
}, {
	latLng: [37.4322638, -81.11960750000003],
	data: "b",
	phone: "18003672690",
	tag: ""
}, {
	latLng: [37.5823343, -81.60177449999998],
	data: "b",
	phone: "18003672690",
	tag: ""
}, {
	latLng: [37.7567819, -81.17426590000002],
	data: "b",
	phone: "18003672690",
	tag: ""
}, {
	latLng: [39.15757, -80.82511099999999],
	data: "b",
	phone: "18003672690",
	tag: ""
}, {
	latLng: [37.5601958, -80.58828030000001],
	data: "b",
	phone: "18003672690",
	tag: ""
}, {
	latLng: [39.021745, -82.0290296],
	data: "c",
	phone: "18007472244",
	tag: ""
}, {
	latLng: [38.43919270000001, -82.25832969999999],
	data: "c",
	phone: "18007472244",
	tag: ""
}, {
	latLng: [38.2214748, -82.44237470000002],
	data: "c",
	phone: "18007472244",
	tag: ""
}, {
	latLng: [38.1761009, -82.08429009999998],
	data: "c",
	phone: "18007472244",
	tag: ""
}, {
	latLng: [37.8487147, -81.9934581],
	data: "c",
	phone: "18007472244",
	tag: ""
}, {
	latLng: [38.4987251, -80.05423439999998],
	data: "c",
	phone: "18007472244",
	tag: ""
}, {
	latLng: [38.4991939, -81.90982600000001],
	data: "d",
	phone: "18003464206",
	tag: ""
}, {
	latLng: [37.9838605, -81.73494199999999],
	data: "d",
	phone: "18003464206",
	tag: ""
}, {
	latLng: [38.2556905, -81.4278984],
	data: "d",
	phone: "18003464206",
	tag: ""
}, {
	latLng: [38.4603788, -81.08510860000001],
	data: "d",
	phone: "18003464206",
	tag: ""
}, {
	latLng: [38.3307714, -80.76578039999998],
	data: "d",
	phone: "18003464206",
	tag: ""
}, {
	latLng: [38.0615913, -81.0754657],
	data: "d",
	phone: "18003464206",
	tag: ""
}, {
	latLng: [38.0198478, -80.54384499999998],
	data: "d",
	phone: "18003464206",
	tag: ""
}, {
	latLng: [38.3101706, -80.00877459999998],
	data: "d",
	phone: "18003464206",
	tag: ""
}, {
	latLng: [39.2966667, -80.04527780000001],
	data: "d",
	phone: "18003464206",
	tag: ""
}, {
	latLng: [39.4977025, -80.85438469999997],
	data: "e",
	phone: "18668937266",
	tag: ""
}, {
	latLng: [39.3761707, -81.1416691],
	data: "e",
	phone: "18668937266",
	tag: ""
}, {
	latLng: [39.2154345, -81.47183869999998],
	data: "e",
	phone: "18668937266",
	tag: ""
}, {
	latLng: [38.8139943, -81.64734399999998],
	data: "e",
	phone: "18668937266",
	tag: ""
}, {
	latLng: [38.7564882, -81.4278984],
	data: "e",
	phone: "18668937266",
	tag: ""
}, {
	latLng: [39.04360930000001, -81.38393259999998],
	data: "e",
	phone: "18668937266",
	tag: ""
}, {
	latLng: [38.857973, -81.11960750000003],
	data: "e",
	phone: "18668937266",
	tag: ""
}, {
	latLng: [40.5123559, -80.56606569999997],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [40.2697757, -80.56606569999997],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [40.1111311, -80.61048900000003],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.8926818, -80.67707869999998],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.5655978, -80.67707869999998],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.6695849, -79.9640339],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.4372135, -79.65021050000001],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.5288627, -80.23213129999999],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.047375, -78.97847000000002],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.3773539, -79.20109500000001],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.2367791, -80.67707869999998],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.0196167, -80.54384499999998],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [38.879261, -80.71676500000001],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [38.7023371, -80.72144170000001],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.1398692, -80.00877459999998],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [38.8696797, -80.23213129999999],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [38.8092552, -80.00877459999998],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.1083806, -79.65021050000001],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.1042079, -79.15485330000001],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [38.74517669999999, -79.2902133],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.4068988, -78.88355480000001],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [37.314499, -81.02918199999999],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.3349019, -78.56608519999997],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.5073361, -78.24761460000002],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.5030556, -77.92722220000002],
	data: "f",
	phone: "18002552146",
	tag: ""
}, {
	latLng: [39.3059841, -77.8824596],
	data: "f",
	phone: "18002552146",
	tag: ""
}], 



    i = 0; i < latlngs.length; i++) latlngs[i].tag = "myTag" + i, tagArr.push(latlngs[i].tag);
 $(document).on("pageshow", "#mappage", function() {
    max_height(), $("#map_canvas").gmap3({
        map: {
            options: {
                center: [39.653451, -79.956858],
                zoom: 6
            }
        },
        marker: {
            values: latlngs,
            options: {
                options: {
                    icon: "img/hnmarker.png"
                },
                draggable: !1
            },
            events: {
                mouseover: function(a, b, c) {
                    console.log(c.data);
                    var d = $(this).gmap3("get"),
                        e = $(this).gmap3({
                            get: {
                                name: "infowindow"
                            }
                        });
                    e ? (e.open(d, a), e.setContent(c.data)) : $(this).gmap3({
                        infowindow: {
                            anchor: a,
                            options: {
                                content: c.data
                            }
                        }
                    })
                },
                mouseout: function() {
                    var a = $(this).gmap3({
                        get: {
                            name: "infowindow"
                        }
                    });
                    a && a.close()
                }
            }
        },
        autofit: {}
    }), $("#map_canvas").gmap3({
        getgeoloc: {
            callback: function(a) {
                a && (myLatLng = a, console.log(a), closestLatlng = closestLoc(a), pClosestLatlng = pClosestLoc(a), .621371 * dist[closestLatlng], $(".popupcontent").html("Please write down coordinates<br />before calling. Or, place call<br />on speakerphone and return.<br /><br /><b>Latitude:</b> " + decimal_to_degree(mlat) + "<br/><b>Longitude:</b> " + decimal_to_degree(mlng) + "<a class='call-btn' href='tel:" + platlngs[pClosestLatlng[0]].phone + "'>Call Now</a>"), $(".call-btn").button(), $(this).gmap3({
                    marker: {
                        latLng: a,
                        options: {
                            icon: "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=M|30E200"
                        }
                    },
                    autofit: {}
                }))
            }
        }
    })
});