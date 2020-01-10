$(function () {
var orderDate = new Date(2012, 9, 24, 10, 12);
        var shipDate = new Date(2012, 10, 12, 22, 45);
        var viewModel = {
            orderDate: ko.observable(orderDate),
            shipDate: ko.observable(shipDate),
            dueInDays: ko.observable(7),
            customerName: ko.observable("Peter Sanders"),
            contactPhone: ko.observable("318-555-6879"),
            advancePayment: ko.observable(516.89),
            discountPercent: ko.observable(8)
        };

        $(function () {
            ko.applyBindings(viewModel);
        });
});