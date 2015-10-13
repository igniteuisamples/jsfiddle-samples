$(function () {
            $('#defaultPercentEditor').igPercentEditor({
                width: 300
            });

            $('#percentEditor').igPercentEditor({
                displayFactor: 1, 
                width: 300,
                value: -87.09,
                negativePattern: "$ (n)",
                postivePattern: "$ +n"
            });

            $('#percentEditor2').igPercentEditor({
                width: 300,
                value: 0.1290,            
                groupSeparator: " "
            });

            $('#percentEditor3').igPercentEditor({
                displayFactor: 1,
                width: 300,
                listItems: [12.3, 15.0005, 533235.2],               
                groupSeparator: " ",
                buttonType: "spin, clear",
                textAlign: "center",
                maxDecimals: 6,
                groups: [4],
            });

            $('#percentEditor4').igPercentEditor({
                displayFactor: 1,
                width: 300,
                value: 126,
                decimalSeparator: ".",
                groupSeparator: ",",
                buttonType: "spin"
            });
        });