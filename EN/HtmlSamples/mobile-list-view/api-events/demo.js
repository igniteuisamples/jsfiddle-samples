$(function () {
//Bind to jQuery Mobile page init event.
            $(document).bind("pageinit", function () {

                $("#listViewExpandButton").bind("click", function () {
                    //This method expands and collapses the sort/filter tray
                    $("#listViewExpand").igListView("rootWidget").toggleSearchArea();
                });
            });
});