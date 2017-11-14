$(function () {
            var i = 0, currentValue, limit,
                headerTextValues = ["First Name", "Last Name", "Nationality", "Movies"],
                imagesRoot = "http://igniteui.com/images/samples/templating-engine/multiConditionalColTemplate";

            $("#resultGrid").igGrid({
                dataSource: actors,
                width: "100%",
                autoGenarateColumns: false,
                columns: [
                    { headerText: headerTextValues[0], key: "firstName", width: 100 },
                    { headerText: headerTextValues[1], key: "lastName", width: 200 },
                    { headerText: headerTextValues[2], key: "nationality", width: 100, template: "<img width='20' height='15' src='" + imagesRoot + "/${nationality.key}.gif' /> ${nationality.value} " },
                    { headerText: headerTextValues[3], key: "movies", width: 300 , template: $( "#colTmpl" ).html()}
                ],
                rendered: function () {
                    initializeInnerControls();
                },
                features: [
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 4,
                        pageSizeList: [2, 4, 7],
                        pageSizeChanged: function () {
                            initializeInnerControls();
                        },
                        pageIndexChanged: function () {
                            initializeInnerControls();
                        }
                    }
                ]
            });

            function initializeInnerControls() {
                $(".tree").igTree({ hotTracking: false });
                limit = $('.rating').length;
                for (i = 0; i < limit; i++) {
                    currentValue = parseFloat($($('.rating')[i]).html());
                    $($('.rating')[i]).igRating({
                        voteCount: 10,
                        value: currentValue,
                        valueAsPercent: false,
                        precision: "exact"
                    });
                }
            }
        });