$(function () {
//jsRender helper function which formats the string date
        $.views.helpers(
        {
            formatDate: function (val) {
                var date = new Date(val);
                if (!isNaN(date) && ($.type(date) === "date")) {
                    return $.ig.formatter(date, "date", "dateTime");
                }
                return val;
            }
        });

        $(function () {
            createAutoGrid();
            createButtonGrid();
        });

        function createAutoGrid()
        {
            $( "#autoLoadOnDemand" ).igGrid( {
                width: "100%",
                autoGenerateColumns: false,
                dataSource: infragisticsTweets,
                localSchemaTransform: false,
                templatingEngine: "jsrender",
                height: "300px",
                columns: [
                    {
                        key: 'Tweets',
                        dataType: 'string',
                        headerText: 'Infragistics Tweets',
                        unbound: true,
                        width: "100%",
                        template: "<div style='float:left'><img src='http://igniteui.com/images/ig_twitter_logo.png' ></img></div><div class='tweet'><p style='height:20px'><span class='tweet-user'>{{>user.name}}</span><span class='tweet-screen-name'>@{{>user.screen_name}}</span><span class='tweet-date'>{{>#view.hlp('formatDate')(created_at)}}</span></p><p class='tweet-text'>{{>text}}</p></div>"
                    }
                ],
                features: [
                    {
                        name: 'LoadOnDemand',
                        chunkSize: 10,
                        loadTrigger: "auto"
                    }
                ]
            });
        }

        function createButtonGrid()
        {
            $( "#buttonLoadOnDemand" ).igGrid( {
                width: "100%",
                autoGenerateColumns: false,
                dataSource: infragisticsTweets,
                localSchemaTransform: false,
                templatingEngine: "jsrender",
                height: "300px",
                columns: [
                    {
                        key: 'Tweets',
                        dataType: 'string',
                        headerText: 'Infragistics Tweets',
                        unbound: true,
                        width: "100%",
                        template: "<div style='float:left'><img src='http://igniteui.com/images/ig_twitter_logo.png' ></img></div><div class='tweet'><p style='height:20px'><span class='tweet-user'>{{>user.name}}</span><span class='tweet-screen-name'>@{{>user.screen_name}}</span><span class='tweet-date'>{{>#view.hlp('formatDate')(created_at)}}</span></p><p class='tweet-text'>{{>text}}</p></div>"
                    }
                ],
                features: [
                    {
                        name: 'LoadOnDemand',
                        chunkSize: 10,
                        loadTrigger: "button"
                    }
                ]
            });
        }
});