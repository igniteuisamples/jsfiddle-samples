$(function () {
function StockDataService() {
            this.ApiKey = "apikey=ZCOEMEHP7RSKEW78";
            this.QueryFunction = "/query?function=TIME_SERIES_DAILY";
            this.QueryOutput = "outputsize={1}";
            this.Querysymbol = "symbol={0}";
            this.ServiceAddress = "https://www.alphavantage.co";
            this.ServiceUrl = this.ServiceAddress + this.QueryFunction + "&" + this.Querysymbol + "&" + this.QueryOutput + "&" + this.ApiKey;
        }
        StockDataService.prototype.requestDataFor = function (symbol, truncate, callback) {
            var outputSize = truncate ? "compact" : "full";
            var url = this.ServiceUrl.replace("{0}", symbol).replace("{1}", outputSize);
            console.log("getting data from: \n" + url)
            $.ajax({
                type: "Get",
                url: url,
                //async: false,
                dataType: "json",
                success: function (data) {
                    var items = data["Time Series (Daily)"];
                    var result = [];
                    for (ii in items) {
                        var item = items[ii];
                        result.push({
                            time: new Date(ii),
                            open: +item["1. open"],
                            high: +item["2. high"],
                            low: +item["3. low"],
                            close: +item["4. close"],
                            volume: +item["5. volume"]
                        });
                    }
                    result.title = data["Meta Data"]["2. Symbol"];
                    callback(result);
                }
            });
        }

        $(function () {
            
            var service = new StockDataService();
            service.requestDataFor("MSFT", true, createChart);

            function createChart(data) {
                $("#chart").igFinancialChart({
                    dataSource: data
                });

            }
        });
});