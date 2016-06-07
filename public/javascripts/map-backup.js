(function(){


  var width = 960,
      height = 600;

  var svg = d3.select("#graph")
          .append("svg")
          .attr("width", width)
          .attr("height", height);

  var projection = d3.geo.albersUsa()
          .scale(1280)
          .translate([width/2, height/2]);

  var path = d3.geo.path()
          .projection(projection);

  var stateIdMap = d3.map({
    1: "AL",
    2: "AK",
    4: "AZ",
    5: "AR",
    6: "CA",
    8: "CO",
    9: "CT",
    10: "DE",
    11: "DC",
    12: "FL",
    13: "GA",
    15: "HI",
    16: "ID",
    17: "IL",
    18: "IN",
    19:  "IA",
    20: "KS",
    21: "KY",
    22: "LA",
    23: "ME",
    24: "MD",
    25: "MA",
    26: "MI",
    27: "MN",
    28: "MS",
    29: "MO",
    30: "MT",
    31: "NE",
    32: "NV",
    33: "NH",
    34: "NJ",
    35: "NM",
    36: "NY",
    37: "NC",
    38: "ND",
    39: "OH",
    40: "OK",
    41: "OR",
    42: "PA",
    44: "RI",
    45: "SC",
    46: "SD",
    47: "TN",
    48: "TX",
    49: "UT",
    50: "VT",
    51: "VA",
    53: "WA",
    54: "WV",
    55: "WI",
    56: "WY"
  });

  queue()
    .defer(d3.json, "json/us.json")
    .await(function(err, US){
      var states = svg.append("g")
              .attr("class", "states")
              .selectAll("g")
              .data(topojson.feature(US, US.objects.states).features)
              .enter()
              .append("g");

      states.append("path")
          .attr("d", path);

      states.append("path")
          .datum(topojson.mesh(US, US.objects.states,
                               function(a,b) { return a !== b;}))
          .attr("class", "borders")
          .attr("d", path);

      states.append("text")
          .text(function(d) { return stateIdMap.get(d.id) || d.id; })
          .attr({
            x: function(d) { return path.centroid(d)[0] || 0; },
            y: function(d) { return path.centroid(d)[1] || 0; }
          });
    });

})();


<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
    <base href="/">
  </head>
  <body ng-app="coursesApp" ng-controller="coursesCtrl as ctrl">
    <h1><%= title %></h1>
    <p>Welcome to <%= title %></p>

    <div>
      <h2>Poor man's Nav Bar</h2>
      <a ui-sref="home">Home</a> |
      <a ui-sref="about">About</a> |
      <a ui-sref="map">Map</a> |
      <a ui-sref="courses">Courses</a>
    </div>

    <div ui-view=""></div>
    <div id="graph"></div>


    <script type="text/javascript" src="angular/angular.min.js" defer></script>
    <script type="text/javascript" src="angular-ui-router/release/angular-ui-router.min.js" defer></script>
    <script type="text/javascript" src="javascripts/client.js" defer></script>
    <script src="http://d3js.org/d3.v3.min.js" charset="utf-8" defer></script>
    <script src="http://d3js.org/queue.v1.min.js" defer></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/topojson/1.6.20/topojson.js" defer></script>
    <script src="http://cdn.jsdelivr.net/lodash/4.13.1/lodash.js" defer></script>
    <script src="javascripts/map.js" defer></script>
  </body>
</html>
