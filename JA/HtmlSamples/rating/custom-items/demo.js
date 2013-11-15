$(function () {

            var customCss = {},
                cssSnail,
                cssCheetah,
                cssRocket;

            customCss[0] = { 0: "normal0", 1: "selected0", 2: "hovered0" };
            customCss[1] = { 0: "normal1", 1: "selected1", 2: "hovered1" };
            customCss[2] = { 0: "normal2", 1: "selected2", 2: "hovered2" };

            $("#igRating1").igRating({
                voteCount: 3,
                valueAsPercent: false,
                precision: "whole",
                value: 0,
                voteWidth: 64,
                voteHeight: 38,
                cssVotes: customCss
            });


            cssSnail = [
                ["selected0", "selected0", "selected0"],
                ["normal1", "normal1", "normal1"],
                ["normal2", "normal2", "normal2"]
            ];
            cssCheetah = [
                ["normal0", "normal0", "normal0"],
                ["selected1", "selected1", "selected1"],
                ["normal2", "normal2", "normal2"]
            ];
            cssRocket = [
                ["normal0", "normal0", "normal0"],
                ["normal1", "normal1", "normal1"],
                ["selected2", "selected2", "selected2"]
            ];

            $("#igRating2").igRating({
                voteCount: 3,
                valueAsPercent: false,
                precision: "whole",
                value: 1,
                voteWidth: 64,
                voteHeight: 38,
                cssVotes: cssSnail,
                valueChange: function (evt, ui) {
                    var style;
                    switch (parseInt(ui.value, 10)) {
                        case 1: style = cssSnail; break;
                        case 2: style = cssCheetah; break;
                        case 3: style = cssRocket; break;
                    }
                    $(this).igRating("option", "cssVotes", style);
                }
            });

        });