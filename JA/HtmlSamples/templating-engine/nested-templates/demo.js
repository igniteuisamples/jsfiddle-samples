$(function () {
            var i = 0, currentValue, limit,
                headerTextValues = ["名前", "名字", "国", "映画"],
                imagesRoot = "http://jp.igniteui.com/images/samples/templating-engine/multiConditionalRowTemplate";

            $("#resultGrid").igGrid({
                dataSource: actors,
                width: "100%",
                autoGenarateColumns: false,
                rowTemplate: "<tr><td> ${firstName} </td><td> ${lastName} </td><td>  <img width='20' height='15' src='" + imagesRoot + "/${nationality.key}.gif' /> ${nationality.value} </td><td><div class='tree'><ul>" +
                    "{{each ${movies} }}" +
                    "<li>${movies.name}<ul><li>Genre: ${movies.genre}</li><li>Year: ${movies.year}</li><li><a><span class='ratingLabel' style='float:left'>Rating:</span><span class='rating'>${movies.rating}</span></span></a></li><li class='clear'>Languages: ${movies.languages}</li><li>Subtitles: ${movies.subtitles}</li></ul>" +
                    "{{/each}}" +
                    "</ul></div></td></tr>",
                columns: [
                    { headerText: headerTextValues[0], key: "firstName", width: 100 },
                    { headerText: headerTextValues[1], key: "lastName", width: 200 },
                    { headerText: headerTextValues[2], key: "nationality", width: 100 },
                    { headerText: headerTextValues[3], key: "movies", width: 300 }
                ],
                rendered: function () {
                    initializeInnerControls();
                },
                features: [
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 4,
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