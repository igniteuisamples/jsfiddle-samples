$(function () {
            var dynamicModel,
                data,
                interval,
                globalItem = 3,
                globalIndex = 3, // When item is deleted we need to record gloablly the index
                autoIncrement = 1;
            function generateData(count) {
                var num = count, data = [], curr = 10, revenue, expenses;
                for (var i = 0; i < num; i++) {
                    revenue = Math.random() * 90.0;
                    expenses = Math.random() * 70.0;
                    data[i] = {
                        label: (count === 1) ? autoIncrement.toString() : (i + 1).toString(),
                        index: (count === 1) ? autoIncrement : (i + 1),
                        revenue: revenue,
                        expenses: expenses
                    };
                    autoIncrement++;
                }
                if (count === 1) {
                    return data[0];
                } else {
                    return ko.observableArray(data);
                }
            }
            function ViewModel(data) {
                this.data = data;
                this.minChartValue = 0;
                this.maxChartValue = 100;
                this.chartWidth = "100%";
                this.chartHeight = 250;
                this.chartThickness = 2;
                this.transitionDuration = 1000;
            }
            data = generateData(10);
            dynamicModel = new ViewModel(data);
            ko.applyBindings(dynamicModel);

            $(".btn-prev").click(function () {
                var index = $("#combo1").igCombo("value");
                moveItem(-1, index);
            });

            $(".btn-next").click(function () {
                var index = $("#combo1").igCombo("value");
                moveItem(1, index);
            });
            $(".btn-play").click(function () {
                var index = $("#combo1").igCombo("value");
                moveItem(1, index);
                interval = setInterval(function () { moveItem(1, index) }, 1000);
                hideButtons();
            });
            $(".btn-pause").click(function () {
                clearInterval(interval);
                showButtons();
            });
            $(".btn-add-start").click(function () {
                data.unshift(generateData(1));
            });
            $(".btn-rmv-start").click(function () {
                globalIndex = 0;
                data.shift();
            });
            $(".btn-add-end").click(function () {
                data.push(generateData(1));
            });
            $(".btn-rmv-end").click(function () {
                globalIndex = data().length;
                data.pop();
            });
            $(".btn-add-curr").click(function () {
                var index = $("#combo1").igCombo("value");
                data.splice(getCurrentItemState(index).index, 0, generateData(1));
            });
            $(".btn-rmv-curr").click(function () {
                var index = $("#combo1").igCombo("value");
                if (index !== null) {
                	globalIndex = getCurrentItemState(index).index;
                	data.splice(globalIndex, 1);
                }

            });
            function moveItem(step, currentIndex) {
                var state = getCurrentItemState(currentIndex),
                    itemToMove = state.item,
                    index = state.index,
                    insertIndex;
                globalItem = currentIndex;
                globalIndex = index;
                data.splice(index, 1);
                if (step > 0) {
                    insertIndex = (index === data().length) ? 0 : index + step;
                } else {
                    insertIndex = (index === 0) ? data().length : index + step;
                }
                data.splice(insertIndex, 0, itemToMove);
            }
            function getCurrentItemState(currentIndex) {
                var i = 0;
                for (i; i < data().length; i++) {
                    if (data()[i].index === currentIndex) {
                        return {
                            item: data()[i],
                            index: i
                        }
                    }
                }
            }
            $(".combo-container").on("igcombotextchanged", "#combo1", function (event, ui) {
                globalItem = parseInt(ui.text, 10);
            }).on("igcombodatabound", "#combo1", function (event, ui) {
                ui.owner.text(globalItem);
                if (ui.owner.text() === "") {
                    ui.owner.selectedIndex(globalIndex);
                    if (ui.owner.text() === "") {
                        ui.owner.selectedIndex(globalIndex - 1);
                    }
                }
            });

            function hideButtons() {
                $('.legend-container button:not(.btn-pause)').attr('disabled', 'disabled').animate({opacity: 0.5});
                $('.legend-container .btn-pause').removeAttr('disabled').animate({ opacity: 1 });
            }
            function showButtons() {
                $('.legend-container button:not(.btn-pause)').removeAttr('disabled').animate({ opacity: 1 });
                $('.legend-container .btn-pause').attr('disabled', 'disabled').animate({ opacity: 0.5 });
            }
        });