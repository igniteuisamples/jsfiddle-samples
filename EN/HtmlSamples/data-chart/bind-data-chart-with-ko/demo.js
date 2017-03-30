$(function () {
            var viewModel,
                overallProfit = 0,
                MTHS = [
                    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
                    "Oct", "Nov", "Dec"
                ];

            function generateData() {
                var num = 12,
                    data = [],
                    rand1,
                    rand2,
                    rand3;

                overallProfit = 0;

                for (var i = 0; i < num; i++) {
                    rand1 = Math.random() * 50.0;
                    rand2 = Math.random() * 40.0;
                    rand3 = rand1 - rand2;
                    overallProfit += rand3;
                    data[i] = {
                        index: ko.observable(i),
                        month: ko.observable(MTHS[i]),
                        revenue: ko.observable(rand1),
                        expenses: ko.observable(rand2),
                        profit: ko.observable(rand3)
                    };
                }

                return data;
            }

            function randomizeData() {
                var num = 12,
                    rand1,
                    rand2,
                    rand3;
                overallProfit = 0;

                for (var i = 0; i < num; i++) {
                    rand1 = Math.random() * 50.0;
                    rand2 = Math.random() * 40.0;
                    rand3 = rand1 - rand2;
                    overallProfit += rand3;
                    viewModel.data()[i].revenue(rand1);
                    viewModel.data()[i].expenses(rand2);
                    viewModel.data()[i].profit(rand3);
                }
            }

            function ViewModel(data) {
                this.data = ko.observableArray(data);

                this.chartThickness = 2;
                this.transitionDuration = 1000;
                this.chartIntervalX = 1;
                this.revenueColor = "#a4ba29";
                this.expensesColor = "#d3404b";
                this.profitColor = "#216EDD";
                this.outlineColor = "black";
                this.yearProfit = ko.observable(overallProfit * 1000000);
                this.months = ko.mapping.fromJS(MTHS);
                
                this.formatMonth = function (value) {
                    return MTHS[value];
                }

                this.toFixedTwoDigits = function(value) {
                    return value.toFixed(2); 
                }
            }

            viewModel = new ViewModel(generateData());
            ko.applyBindings(viewModel);

            $(".btn-refresh").click(function () {
                randomizeData();
            });
        });