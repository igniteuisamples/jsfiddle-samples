$(function () {
var listData = [1.5, 2.5, 3.5, 4.5];

        $('#productName').igTextEditor({
            placeHolder: "製品名",
            inputName: 'Product Name',
            width: "300" 
        });

        $('#orderedUnits').igNumericEditor({
            valueChanging: function (evt, ui) {
                var unitsInStock = $("#unitsInStock").igNumericEditor('value');
                $("#negativePattern").igNumericEditor("option", "value", unitsInStock - ui.newValue);
            },
            placeHolder: "注文した単位数",
            inputName: 'Ordered Units',
            width: "300",
            dataMode: "int",
            buttonType: "spin",
            spinDelta: 2,
            minValue: 0,
            maxValue: 100,
            spinWrapAround: false
        });

        $('#unitsInStock').igNumericEditor({
            inputName: 'Units In Stock',
            width: "300",
            disabled: true,
            value: 9
        });

        $('#unitPrice').igNumericEditor({
            placeHolder: '単価',
            inputName: 'Unit Price',
            numericMinDecimals: 5,
            numericMaxDecimals:6,
            width: "300",
            value: 1.75000
        });

        $('#oldPrice').igNumericEditor({
            placeHolder: "以前の価格",
            inputName: 'Old Price',
            width: "300",
            readOnly: true,
            value: "13515,7",
            numericDecimalSeparator: ",",
            numericGroupSeparator: " "
        });

        $('#dueInDays').igNumericEditor({
            placeHolder: "締め切り",
            inputName: 'Due In Days',
            buttonType: "clear",
            value: 0,
            width: "300"
        });

        $('#listItems').igNumericEditor({
            placeHolder: '割引',
            inputName: 'Discount',
            listItems: listData,
            spinWrapAround: true,
            width: "300"
        });       

        $('#negativePattern').igNumericEditor({
            placeHolder: '負の数のパターン',
            inputName: 'Negative Pattern',
            numericNegativePattern: "(n)",
            width: "300"
        });

        $("#form").submit(function (event) {
            var submittedValues = $("#form").serializeArray();
            $(".p").remove();
            $("#results").append("<p class='p'>製品名: " + submittedValues[0].value + "</p>");
            $("#results").append("<p class='p'>注文した単位数: " + submittedValues[1].value + "</p>");
            $("#results").append("<p class='p'>在庫数: </p>");
            $("#results").append("<p class='p'>単価: " + submittedValues[2].value + "</p>");
            $("#results").append("<p class='p'>以前の価格: " + submittedValues[3].value + "</p>");
            $("#results").append("<p class='p'>締め切り: " + submittedValues[4].value + "</p>");
            $("#results").append("<p class='p'>割引: " + submittedValues[5].value + "</p>");
            $("#results").append("<p class='p'>負の数のパターン: " + submittedValues[6].value + "</p>");
        });
});