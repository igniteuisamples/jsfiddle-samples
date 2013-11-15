$(function () {
$.ig.loader({
            scriptPath: "http://cdn-na.infragistics.com/jquery/20132/latest/js/",
            cssPath: "http://cdn-na.infragistics.com/jquery/20132/latest/css/",
            resources: "igShared",
            ready: function () {
                //This button click triggers the tree to be created
                $('#transform').on("click", function() {
                        CreateTree();
                        $(this)[0].disabled = true;
                });
            }
        });

        //By targetting the existing UL and LI elements,
        //the tree is created using the attributes set on those elements
        function CreateTree() {

            $.ig.loader("igTree", function () {
                $('#tree').igTree();
            });
        }
});