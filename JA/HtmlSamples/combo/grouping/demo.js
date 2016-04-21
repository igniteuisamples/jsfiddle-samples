$(function () {
            ApplyStyle()
        });

        $('#combo').igCombo({
            dataSource: data,
            closeDropDownOnBlur: false,
            width: "250px",
            textKey: 'name',
            valueKey: 'id',
            grouping: {
                key: 'state',
                dir: 'desc'
            },
            headerTemplate: "<div style='text-align:center;'><table style='width: 100%; background-color: #c0c0c0'>" +
                                "<tr>" +
                                    "<td colspan='2' style='text-align:center'>&nbsp;</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td colspan='2'>" +
                                    "<div class='btn-group' role='group' aria-label='...'>" +
                                        "<div class='btn-group' role='group'>" +
                                            "<button type='button' class='btn btn-secondary dropdown-toggle' data-toggle='dropdown' aria-expanded='false'>" +
                                                "グループ化" +
                                                "<span class='caret'></span>" +
                                            "</button>" +
                                            "<ul class='dropdown-menu' role='menu'>" +
                                            "<li><a class='dropdown-item' href='#' onclick='GroupBy(\"state\")'>州</a></li>" +
                                                "<li><a class='dropdown-item' href='#' onclick='GroupBy(\"division\")'>地域</a></li>" +
                                        "</ul>" +
                                            "</div>" +
                                        "<button type='button' class='btn btn-secondary' onclick='ChangeDirection()'>順序を変更</button>" +
                                    "</div>" +
                                "</div>" +
                                "</td>" +
                                "</tr>" +
                                "<tr><td colspan='2'>&nbsp;</tr>" +
                            "</table></div>",
            footerTemplate: "<div style='text-align:center; background-color: #c0c0c0'>顧客 [{0}]</div>"
        });

        function GroupBy(key) {
            $("#combo").igCombo("option", "grouping", { key: key, dir: "asc" });
            $("#combo").igCombo("dataBind");
            ApplyStyle();
        }

        function ChangeDirection() {
            var gr = $("#combo").igCombo("option", "grouping");

            if (gr.dir === "desc") {
                gr.dir = "asc";
            } else {
                gr.dir = "desc";
            }

            $("#combo").igCombo("option", "grouping", gr);
            $("#combo").igCombo("dataBind");
            ApplyStyle();
        }

        function ApplyStyle() {
            $('li.ui-igcombo-group-header').css({
                'color' : '#00AADE',
                'font-weight' : 'bold'
            });
        }