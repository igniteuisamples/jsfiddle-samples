$(function () {

            $("#comboIG").igCombo({
                highlightMatchesMode: "contains",
                responseDataKey: "d.results",
                valueKey: "Name",
                width: "325px",
                closeDropDownOnBlur: false,
                dataSource: "http://igniteui.com/api/employees?callback=?",
                itemTemplate: "<div class='comboItemContainer'><div class='empImage'><a href='http://www.infragistics.com' target='_blank'><img src='${ImageUrl}' width='64px' /></a></div><div class='empInfo'><span class='empName'>${Name}</span><p>${BirthDate}</p><div>${Address}</div></div></div>"
            });

        });