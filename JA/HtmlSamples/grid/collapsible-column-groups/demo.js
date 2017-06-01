$(function () {
function colorizeColumn(cellClass, color) {
			$("." + cellClass + "Cell").css("color", color);
		}
		$(function () {
			$("#grid1").igGrid({
				width: "100%",
				height: "500px",
				autoGenerateColumns: false,
				dataSource: nwCustomers,
				responseDataKey: "results",
				rowsRendered: function(evt, ui) {
					colorizeColumn("blue", "#0234d7");
					colorizeColumn("green", "#0e9d5f");
					colorizeColumn("red", "#ff6a00");
				},
				columns: [
					{
						headerText: "会社情報",
						group: [
							{
								headerText: "会社名",
								key: "CompanyName",
								dataType: "string",
								width: "150px"
							},
							{
								headerText: "名前",
								key: "ContactName",
								dataType: "string",
								width: "150px",
								groupOptions: {
									hidden: "parentcollapsed"
								}
							},
							{
								headerText: "連絡先",
								key: "ContactTitle",
								dataType: "string",
								width: "200px",
								template: $( "#colTmpl" ).html(),
								groupOptions: {
									hidden: "parentcollapsed"
								}
							}
						],
						groupOptions: {
							expanded: true,
							allowGroupCollapsing: true
						}
					},
					{
						headerText: "アドレス情報",
						group: [
							{
								headerText: "住所",
								group: [
									{
										headerText: "住所",
										key: "Address",
										dataType: "string",
										width: "150px"
									},
									{
										headerText: "市",
										key: "City",
										dataType: "string",
										width: "100px",
										groupOptions: {
											hidden: "parentcollapsed"
										}
									}
								],
								groupOptions: {
									expanded: true,
									allowGroupCollapsing: true,
									hidden: "parentcollapsed"
								}
							},
							{
								headerText: "郵便番号",
								key: "PostalCode",
								dataType: "string",
								width: "100px",
								groupOptions: {
									hidden: "parentcollapsed"
								}
							},
							{
								headerText: "フルアドレス",
								width: "200px",
								key: "FullAddress",
								dataType: "string",
								unbound: true,
								formula: function (data, grid) {
									return data["Address"] + ", " + data["City"];
								},
								groupOptions: {
									hidden: "parentexpanded"
								}
							}
						],
						groupOptions: {
							expanded: true,
							allowGroupCollapsing: true
						}
					},
					{
						headerText: "電話情報",
						group: [
							{ headerText: "電話", key: "Phone", dataType: "string", width: "150px", template: $("#colTmpl1").html() },
							{
								headerText: "FAX",
								key: "Fax",
								dataType: "string",
								width: "150px",
								groupOptions: {
									hidden: "parentcollapsed"
								}
							}
						],
						groupOptions: {
							expanded: true,
							allowGroupCollapsing: true
						}
					}
				],
				features: [
					{
						name: 'MultiColumnHeaders'
					},
					{
						name: 'Responsive',
						enableVerticalRendering: false,
						columnSettings: [
							{
								columnKey: 'CustomerID',
								classes: 'ui-hidden-phone ui-hidden-tablet'
							}
						]
					},
					{
						name: "ColumnMoving"
					},
					{
						name: "Sorting"
					}
				]
			});
		});
});