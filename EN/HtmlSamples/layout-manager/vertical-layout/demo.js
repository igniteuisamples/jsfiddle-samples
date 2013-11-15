$(function () {
$(document).ready(function () {
            $('#layout').on("iglayoutmanageritemrendered", function (e, args) {
                args.item.text(args.index);
                args.item.css("background-color", "#2CBDF9");
                args.item.css("color", "#FFF");
                args.item.css("font-size", "20px");
                args.item.css("padding", "5px 0 0 5px");
            });
            $('#layout').igLayoutManager({
                layoutMode: "vertical",
                itemCount: 10
            });
            $('#layout-variable').on("iglayoutmanageritemrendered", function (e, args) {
                args.item.text(args.index);
                args.item.css("background-color", "#2CBDF9");
                args.item.css("color", "#FFF");
                args.item.css("font-size", "20px");
                args.item.css("padding", "5px 0 0 5px");
            });
            $('#layout-variable').igLayoutManager({
                layoutMode: "vertical",
                items: [
					{
					    width: "10%",
					    height: "150px"
					},
					{
					    width: "40%",
					    height: "250px"
					},
					{
					    width: "40%",
					    height: "150px"
					},
					{
					    width: "20%",
					    height: "150px"
					},
					{
					    width: "50%",
					    height: "150px"
					}
                ]
            });
        });
});