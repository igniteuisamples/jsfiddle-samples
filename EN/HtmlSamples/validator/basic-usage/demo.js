$(function () {
$(document).ready(function () {
            var data = [{ ID: "ID101", Name: "Soothing Cleansing Milk", Code: 101 },
            { ID: "ID102", Name: "Chamomile and Rosehip Calming Day Cream", Code: 102 },
            { ID: "ID103", Name: "Honey and Orange Facial Scrub", Code: 103 },
            { ID: "ID104", Name: "Lime Lip balsam", Code: 104 },
            { ID: "ID105", Name: "Argan Face mask", Code: 105 },
            { ID: "ID106", Name: "Sea Hand cream", Code: 106 },
            { ID: "ID107", Name: "Camellia and Rose Gentle Hydrating Cleanser", Code: 107 },
            { ID: "ID108", Name: "Cornflower Eye Makeup Remover", Code: 108 },
            { ID: "ID109", Name: "Extreme Nutritive Lip Balm", Code: 109 },
            { ID: "ID110", Name: "Super Antioxidant Moisturiser", Code: 110 },
            { ID: "ID111", Name: "Deep Cleansing Mask", Code: 111 }];

            $('#combo2').igCombo({
                width: 400,
                inputName: "products",
                dataSource: data,
                allowCustomValue: true,
                textKey: 'Name',
                valueKey: "ID",
                multiSelection: {
                    enabled: true
                }
            });
            $("#rating").igRating({
                precision: "half",
                valueAsPercent: false
            });
            $("#igCheckboxEditor").igCheckboxEditor();

            $('#validationForm').igValidator({
                required: true,
                onsubmit: true,
                successMessage: "Valid",
                fields: [{
                    selector: "#grpEdit1",
                    onblur: false
                },
				{
				    selector: "#grpEdit2",
				    date: true,
				    required: false,
				    onchange: true,
				    valueRange: [new Date()]
				}, {
				    selector: "#rating",
				    successMessage: "Valid",
				    onchange: true,
				    valueRange: {
				        min: 1.5,
				        errorMessage: "At least 1.5 stars required (custom message)"
				    },
				    notificationOptions: {
				        mode: "popover"
				    }
				},
				{
				    selector: "#combo2",
				    onchange: true,
				    lengthRange: [2]
				},
				{
				    selector: "#igCheckboxEditor",
				    onchange: true
				}
                ]
            });
        });
});