$(function () {

            //adding multiple data soruces into an array 
            var stocks = [];
            stocks.push(StockData.MSFT());
            stocks.push(StockData.TGT());

            //binding multiple data soruces
            $("#chart").igFinancialChart({
                dataSource: stocks,  
            });

        });