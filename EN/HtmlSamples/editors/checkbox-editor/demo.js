$(function () {
        	$("#suite").igCheckboxEditor({
        		inputName: "suite",
                checked: true,
                readOnly: true,
				value: "suite"
            });
        	$("#icon").igCheckboxEditor({
        		inputName: "icon",
                checked: false,
            });
        	$("#indigo").igCheckboxEditor({
        		inputName: "indigo",
        		checked: true,
                disabled: true
        	});

        	$("#form1").submit(function (event) {
        		var submittedValues = $("#form1").serializeArray();

        		$("#results").empty();

        		$(".submit-container h3").show();
        		for (var i = 0 ; i < submittedValues.length; i++) {
        			$("#results").append("<p class='result'><span class='result-name'>" + submittedValues[i].name.replace(/([A-Z])/g, ' $1') + ":</span>  " + submittedValues[i].value + "</p>");
        		}

        		return false;
        	});
        });