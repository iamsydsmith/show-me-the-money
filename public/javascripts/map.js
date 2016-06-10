// angular.module('coursesApp')
//     .directive('debtInfo', function() {
//         functionlink(scope, element) {

//           var element = element[0]

(function(){
          var debtMap = {
                "dom": "map",
                "width": 1260,
                "height": 630,
                "scope": "usa",
                "fills": {
                    "($4,000 - $4,499]": "#f3e1e0",
                    "($4,500 - $4,999]": "#e7c4c1",
                    "($5,000 - $5,499]": "#d59893",
                    "($5,500 - $5,999]": "#c36c65",
                    "($6,000 - $6,600]": "#884b46"
                },
                "legend": true,
                "labels": true,
                "data": {
                    "AK": {
                        "Year": 2016,
                        "State": "AK",
                        "AverageBalance": 6547,
                        "fillKey": "($6,000 - $6,600]"
                    },
                    "AL": {
                        "Year": 2016,
                        "State": "AL",
                        "AverageBalance": 5027,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "AR": {
                        "Year": 2016,
                        "State": "AR",
                        "AverageBalance": 4735,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "AZ": {
                        "Year": 2016,
                        "State": "AZ",
                        "AverageBalance": 5264,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "CA": {
                        "Year": 2016,
                        "State": "CA",
                        "AverageBalance": 5234,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "CO": {
                        "Year": 2016,
                        "State": "CO",
                        "AverageBalance": 5447,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "CT": {
                        "Year": 2016,
                        "State": "CT",
                        "AverageBalance": 5823,
                        "fillKey": "($5,500 - $5,999]"
                    },
                    "DC": {
                        "Year": 2016,
                        "State": "DC",
                        "AverageBalance": 5706,
                        "fillKey": "($5,500 - $5,999]"
                    },
                    "DE": {
                        "Year": 2016,
                        "State": "DE",
                        "AverageBalance": 5400,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "FL": {
                        "Year": 2016,
                        "State": "FL",
                        "AverageBalance": 5184,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "GA": {
                        "Year": 2016,
                        "State": "GA",
                        "AverageBalance": 5493,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "HI": {
                        "Year": 2016,
                        "State": "HI",
                        "AverageBalance": 5586,
                        "fillKey": "($5,500 - $5,999]"
                    },
                    "IA": {
                        "Year": 2016,
                        "State": "IA",
                        "AverageBalance": 4246,
                        "fillKey": "($4,000 - $4,499]"
                    },
                    "ID": {
                        "Year": 2016,
                        "State": "ID",
                        "AverageBalance": 4793,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "IL": {
                        "Year": 2016,
                        "State": "IL",
                        "AverageBalance": 5191,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "IN": {
                        "Year": 2016,
                        "State": "IN",
                        "AverageBalance": 4719,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "KS": {
                        "Year": 2016,
                        "State": "KS",
                        "AverageBalance": 4944,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "KY": {
                        "Year": 2016,
                        "State": "KY",
                        "AverageBalance": 4715,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "LA": {
                        "Year": 2016,
                        "State": "LA",
                        "AverageBalance": 4898,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "MA": {
                        "Year": 2016,
                        "State": "MA",
                        "AverageBalance": 5151,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "MD": {
                        "Year": 2016,
                        "State": "MD",
                        "AverageBalance": 5858,
                        "fillKey": "($5,500 - $5,999]"
                    },
                    "ME": {
                        "Year": 2016,
                        "State": "ME",
                        "AverageBalance": 4955,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "MI": {
                        "Year": 2016,
                        "State": "MI",
                        "AverageBalance": 4678,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "MN": {
                        "Year": 2016,
                        "State": "MN",
                        "AverageBalance": 4769,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "MO": {
                        "Year": 2016,
                        "State": "MO",
                        "AverageBalance": 4881,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "MS": {
                        "Year": 2016,
                        "State": "MS",
                        "AverageBalance": 4496,
                        "fillKey": "($4,000 - $4,499]"
                    },
                    "MT": {
                        "Year": 2016,
                        "State": "MT",
                        "AverageBalance": 4740,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "NC": {
                        "Year": 2016,
                        "State": "NC",
                        "AverageBalance": 5151,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "ND": {
                        "Year": 2016,
                        "State": "ND",
                        "AverageBalance": 4356,
                        "fillKey": "($4,000 - $4,499]"
                    },
                    "NE": {
                        "Year": 2016,
                        "State": "NE",
                        "AverageBalance": 4536,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "NH": {
                        "Year": 2016,
                        "State": "NH",
                        "AverageBalance": 5375,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "NJ": {
                        "Year": 2016,
                        "State": "NJ",
                        "AverageBalance": 5768,
                        "fillKey": "($5,500 - $5,999]"
                    },
                    "NM": {
                        "Year": 2016,
                        "State": "NM",
                        "AverageBalance": 5243,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "NV": {
                        "Year": 2016,
                        "State": "NV",
                        "AverageBalance": 5202,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "NY": {
                        "Year": 2016,
                        "State": "NY",
                        "AverageBalance": 5402,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "OH": {
                        "Year": 2016,
                        "State": "OH",
                        "AverageBalance": 4890,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "OK": {
                        "Year": 2016,
                        "State": "OK",
                        "AverageBalance": 5145,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "OR": {
                        "Year": 2016,
                        "State": "OR",
                        "AverageBalance": 4921,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "PA": {
                        "Year": 2016,
                        "State": "PA",
                        "AverageBalance": 5037,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "RI": {
                        "Year": 2016,
                        "State": "RI",
                        "AverageBalance": 5259,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "SC": {
                        "Year": 2016,
                        "State": "SC",
                        "AverageBalance": 5166,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "SD": {
                        "Year": 2016,
                        "State": "SD",
                        "AverageBalance": 4585,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "TN": {
                        "Year": 2016,
                        "State": "TN",
                        "AverageBalance": 4923,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "TX": {
                        "Year": 2016,
                        "State": "TX",
                        "AverageBalance": 5471,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "UT": {
                        "Year": 2016,
                        "State": "UT",
                        "AverageBalance": 4850,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "VA": {
                        "Year": 2016,
                        "State": "VA",
                        "AverageBalance": 5951,
                        "fillKey": "($5,500 - $5,999]"
                    },
                    "VT": {
                        "Year": 2016,
                        "State": "VT",
                        "AverageBalance": 4911,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "WA": {
                        "Year": 2016,
                        "State": "WA",
                        "AverageBalance": 5487,
                        "fillKey": "($5,000 - $5,499]"
                    },
                    "WI": {
                        "Year": 2016,
                        "State": "WI",
                        "AverageBalance": 4444,
                        "fillKey": "($4,000 - $4,499]"
                    },
                    "WV": {
                        "Year": 2016,
                        "State": "WV",
                        "AverageBalance": 4687,
                        "fillKey": "($4,500 - $4,999]"
                    },
                    "WY": {
                        "Year": 2016,
                        "State": "WY",
                        "AverageBalance": 5068,
                        "fillKey": "($5,000 - $5,499]"
                    }
                },
                "geographyConfig": {
                    "popupTemplate": function(geography, data) {
                        return '<div class="hoverinfo"><h3><strong>' + geography.properties.name +
                            '</strong></h3> <p>Average Balance: $' + data.AverageBalance + '</p></div>';
                    }
                },
                "id": "map"
            }
            debtMap.element = document.getElementById('map')


            var map = new Datamap(debtMap);

            // draw a bubble map if specified
            if (debtMap.bubbles) {
                var bubbles = debtMap.bubbles
                map.bubbles(bubbles)
            }

            if (debtMap.labels) {
                map.labels()
            }

            if (debtMap.legend) {
                map.legend()
            }

            setProjection = function(element, options) {
                var projection, path;

                projection = d3.geo.albersUsa()
                    .scale(element.offsetWidth)
                    .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

                path = d3.geo.path()
                    .projection(projection);

                return { path: path, projection: projection };
            }




    })();
