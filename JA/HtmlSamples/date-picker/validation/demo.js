$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'           
            var apiViewer = new $.ig.apiViewer(),
                width = ($(window).width() > 320) ? 280 : 200 ;
            
            /*----------------- Method & Option Examples -------------------------*/

            // {Button Label} button click handler
            $("#btnFormSubmit").click(function (e) {
                
                var form = $("#datePickerForm")[0];
                form.action = location.href;
                form.submit();

            });

            /*----------------- Instantiation -------------------------*/

            $('#datePicker').igDatePicker({
                width: width,
                dateInputFormat: 'dateTime',
                required: true,
                validatorOptions: {
                    onblur: true,
                    onchange: false,
                    onsubmit: true,
                    formSubmit: true,
                    keepFocus: "always",
                    showIcon: true
                }
            });

            $('#datePicker2').igDatePicker({
                width: width,
                dateInputFormat: 'dateTime',
                required: true,
                validatorOptions: {
                    onblur: false,
                    onchange: true,
                    onsubmit: true,
                    formSubmit: true,
                    keepFocus: "never",
                    showIcon: false
                }
            });

        });