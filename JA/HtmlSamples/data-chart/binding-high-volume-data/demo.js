$(function () {
var currData, currDataSource, doGeneration, startTime = null;
	    var sliderValue = 50000;

	    function doGeneration() {
	    	var num = sliderValue, data = [], curr = 10, alt = 8;

	        for (var i = 0; i < num; i++) {
	        	if (Math.random() > .5) {
	        		curr += Math.random() * 2.0;
	        		alt += Math.random() * 1.5;
	        	} else {
	        		curr -= Math.random() * 2.0;
	        		alt -= Math.random() * 1.5;
	        	}
	        	var val1 = Math.round(curr * 1000.0) / 1000.0;
	        	var val2 = Math.round(alt * 1000.0) / 1000.0;
	        	data[i] = { Label: i.toString(), altLabel:i.toString(), Value: val1, altValue: val2 };
	        }
	        currData = data;
	    }

	    function assignData() {
	        startTime = new Date().getTime();
	        $("#chart").igDataChart({
	            dataSource: currData
	        });
	    };

	    $(function () {
	        $("#btnRefresh").click(function () {
	            doGeneration();
	            assignData();
	        });

	        $("#slider").slider({
	            min: 50000,
	            max: 1000000,
	            step: 50000,
	            value: 50000,
	            slide: function (event, ui) {
	                sliderValue = ui.value/2;
	                $("#sliderLabel").text(ui.value);
	            }
	        });

	        $("#chart").igDataChart({
	            width: "100%",
	            height: "400px",
	            title: "ランダムに生成されたデータ",
	            axes: [{
	                name: "xAxis",
	                type: "categoryX",
	                label: "Label"
	            }, {
                    name: "yAxis",
                    type: "numericY"
                }],
	            series: [{
	                name: "series1",
	                title: "テスト シリーズ",
	                type: "line",
	                xAxis: "xAxis",
	                yAxis: "yAxis",
	                valueMemberPath: "Value",
	                showTooltip: true,
	                isTransitionInEnabled: true,
	                isHighlightingEnabled: true
	            },
				{
					name: "series2",
					title: "その他のテスト シリーズ",
					type: "line",
					xAxis: "xAxis",
					yAxis: "yAxis",
					valueMemberPath: "altValue",
					showTooltip: true,
					isTransitionInEnabled: true,
					isHighlightingEnabled: true
				}],
	            horizontalZoomable: true,
	            verticalZoomable: true,
	            windowResponse: "immediate"
	        });

	        $(document).on("igdatachartrefreshcompleted", "#chart", function () {
	            if (startTime) {
	                var time = new Date().getTime() - startTime;
	                $("#timeText").text(time.toString() + " ms");
	                startTime = null;
	            }
	        });

	        doGeneration();
	        assignData();
	        $(".message").hide();
	    });
});