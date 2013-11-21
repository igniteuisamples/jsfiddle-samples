$(function () {

            $("#comboIG").igCombo({
                filteringType: "local",
                renderMatchItems: "contains",
                responseDataKey: "d.results",
                valueKey: "Name",
                width: "270px",
                dataSource: "http://igniteui.com/api/employees?callback=?",
                headerTemplate: "<div id='comboHeaderTemplate' class='comboTemplates'>従業員</div>",
                footerTemplate: "<div id='comboFooterTemplate' class='comboTemplates'>詳細について（英語）: <a href='http://www.infragistics.com' target='_blank'>www.infragistics.com</div>",
                itemTemplate: "<div class='comboItemContainer'><div class='empImage'><a href='http://www.infragistics.com' target='_blank'><img src='${ImageUrl}' width='64px' /></a></div><div class='empInfo'><span class='empName'>${Name}</span><p>${BirthDate}</p><div>${Address}</div></div></div>"
            });

        });