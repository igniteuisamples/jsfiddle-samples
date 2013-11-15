$(function () {
                var flatListId = $("#templateListView").igListView("rootWidget").element[0].id;

                $("#" + flatListId).bind("iglistsubpagecreated", function (evt, ui) {
                    ui.subPage.page().data().page.element[0].className = "ui-page ui-body-a";
                });
            });

            $("#template-page").bind("pagebeforecreate", function (e) {
                $(this).page("option", "theme", "a");
                $(this).page("option", "headerTheme", "b");
            });