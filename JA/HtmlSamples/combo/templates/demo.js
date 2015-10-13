$(function () {

            $("#comboIG").igCombo({
                highlightMatchesMode: "contains",
                responseDataKey: "d.results",
                valueKey: "Name",
                width: "325px",
                closeDropDownOnBlur: false,
                visibleItemsCount: 3,
                dataSource: "http://igniteui.com/api/employees?callback=?",
                headerTemplate: "<div id='comboHeaderTemplate' class='comboTemplates'>従業員</div>",
                footerTemplate: "<div id='comboFooterTemplate' class='comboTemplates'>製品の詳細: <a href='http://jp.infragistics.com' target='_blank'>http://jp.infragistics.com</div>",
                itemTemplate: "<div class='comboItemContainer'><div class='empImage'><a href='http://jp.infragistics.com' target='_blank'><img src='${ImageUrl}' width='64px' /></a></div><div class='empInfo'><span class='empName'>${Name}</span><p>${BirthDate}</p><div>${Address}</div></div></div>"
            });

        });