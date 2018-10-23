$(function () {

			var data = PriceData.AMZN();

			$("#chart").igFinancialChart({
				dataSource: data,
				xAxisMode: "time",
				xAxisBreaks: [{
					start: new Date("2013-02-02T00:00:00"),
					end: new Date("2013-02-03T23:59:59.99"),
					interval: 7 * 24 * 60 * 60 * 1000
				}],	
			});

		});