$(function () {
        
            function CalloutItem(index, value, content) {
                this.index = index;
                this.value = value;
                this.content = content;
            }

            var data = PriceData.AMZN();
            var calloutData = [];
            
            function generateCalloutData() {
                var intervalSplit = Math.floor(Math.random() * 300) + 280;
                var intervalDiv = Math.floor(Math.random() * 400) + 360;
                var index = 0;
                var priceLowest = new CalloutItem(index, Number.MAX_SAFE_INTEGER, "MIN PRICE");
                var priceHighest = new CalloutItem(index, Number.MIN_SAFE_INTEGER, "MAX PRICE");
                calloutData.push(priceLowest);
                calloutData.push(priceHighest);

                for (var item of data) {// finding item with lowest price
                    if (priceLowest.value > item.close)
                    {
                        priceLowest.value = item.close;
                        priceLowest.index = index;
                    }
                    // finding item with highest price
                    if (priceHighest.value < item.close)
                    {
                        priceHighest.value = item.close;
                        priceHighest.index = index;
                    }
                    
                    // creating SPLIT/DIVIDEND events at specific intervals
                    if (index % intervalSplit === 5)
                    {
                        var stockEvent = new CalloutItem(index, item.close, "SPLIT");
                        calloutData.push(stockEvent);
                    }
                    else if (index % intervalDiv === 5)
                    {
                        var stockEvent = new CalloutItem(index, item.close, "DIV");
                        calloutData.push(stockEvent);
                    }
                    
                    ++index;
                }
            }
            
            generateCalloutData();

            $("#chart").igFinancialChart({
                dataSource: data,

                calloutsVisible: true,
                calloutsItemsSource: calloutData,
                calloutsXMemberPath: "index",
                calloutsYMemberPath: "value",
                calloutsLabelMemberPath: "content",
                calloutsContentMemberPath: "content"
            });

        });