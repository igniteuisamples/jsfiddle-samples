$(function () {
        	$("#firstName").igTextEditor({
        		placeHolder: "John",
        	});
        	$("#lastName").igTextEditor({
        		placeHolder: "Anderson",
        	});

            $("#email").igTextEditor({
            	placeHolder: "john@email.com",
            	validatorOptions: {
            		email: true
            	}
            });

            $("#password").igTextEditor({
            	textMode: "password",
            	placeHolder: "********"
            });

            $("#note").igTextEditor({
                textMode: "multiline",
                height: 100,
                visibleItemsCount: 5
            });

            $('#readonly').igCheckboxEditor({
                valueChanged: function (evt, ui) {
                    if (ui.newState == true) {
                        $("#note").igTextEditor("option", "readOnly", true);
                    }
                    else {
                        $("#note").igTextEditor("option", "readOnly", false);
                    }

                }
            });
            $('#lock').igNotifier({
                direction: "top",
                showOn: "mouseenter",
                state: "info",
                showIcon: true,
                messages: {
                    info: "Checking this will make the comment area readonly."
                }
            });

            $("#btn").click(function () {
                $("#firstName").igTextEditor("option", "value", "");
                $("#lastName").igTextEditor("option", "value", "");
                $("#email").igTextEditor("option", "value", "");
                $("#password").igTextEditor("option", "value", "");
                $("#note").igTextEditor("option", "value", "");
                $("#readonly").igCheckboxEditor("option", "checked", false);

                $("#note").igTextEditor("option", "disabled", false);
                $("#note").igTextEditor("option", "readOnly", false);
            });
        });