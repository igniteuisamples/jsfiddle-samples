$(function () {
var listData = [1.5, 2.5, 3.5, 4.5];

        $('#productName').igTextEditor({
            placeHolder: "Product Name",
            inputName: 'Product Name',
            width: "300" 
        });

        $('#orderedUnits').igNumericEditor({
            valueChanging: function (evt, ui) {
                var unitsInStock = $("#unitsInStock").igNumericEditor('value');
                $("#negativePattern").igNumericEditor("option", "value", unitsInStock - ui.newValue);
            },
            placeHolder: "Ordered Units",
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
            placeHolder: 'Unit Price',
            inputName: 'Unit Price',
            numericMinDecimals: 5,
            numericMaxDecimals:6,
            width: "300",
            value: 1.75000
        });

        $('#oldPrice').igNumericEditor({
            placeHolder: "Old Price",
            inputName: 'Old Price',
            width: "300",
            readOnly: true,
            value: "13515,7",
            numericDecimalSeparator: ",",
            numericGroupSeparator: " "
        });

        $('#dueInDays').igNumericEditor({
            placeHolder: "Due In Days",
            inputName: 'Due In Days',
            buttonType: "clear",
            value: 0,
            width: "300"
        });

        $('#listItems').igNumericEditor({
            placeHolder: 'Discount',
            inputName: 'Discount',
            listItems: listData,
            spinWrapAround: true,
            width: "300"
        });       

        $('#negativePattern').igNumericEditor({
            placeHolder: 'Negative Pattern',
            inputName: 'Negative Pattern',
            numericNegativePattern: "(n)",
            width: "300"
        });

        $("#form").submit(function (event) {
            var submittedValues = $("#form").serializeArray();
            $(".p").remove();
            $("#results").append("<p class='p'>Product Name: " + submittedValues[0].value + "</p>");
            $("#results").append("<p class='p'>Ordered Units: " + submittedValues[1].value + "</p>");
            $("#results").append("<p class='p'>Units in Stock: </p>");
            $("#results").append("<p class='p'>Unit Price: " + submittedValues[2].value + "</p>");
            $("#results").append("<p class='p'>Old Price: " + submittedValues[3].value + "</p>");
            $("#results").append("<p class='p'>Due In Days: " + submittedValues[4].value + "</p>");
            $("#results").append("<p class='p'>Discount: " + submittedValues[5].value + "</p>");
            $("#results").append("<p class='p'>Negative Pattern: " + submittedValues[6].value + "</p>");
        });
});