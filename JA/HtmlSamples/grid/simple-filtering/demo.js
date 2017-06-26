$(function () {
			var f = true, ds, schema;

			schema = new $.ig.DataSchema("array", {
				fields: [
					{ name: "FirstName", type: "string" },
					{ name: "LastName", type: "string" },
					{
						name: "RegistererDate", type: "date", formatter: function (value, record) {
							return value.toLocaleDateString();
						}
					},
					{ name: "Country", type: "string" },
					{ name: "Age", type: "number" },
					{ name: "IsActive", type: "bool" }
				],
			});
			ds = new $.ig.DataSource({
				dataSource: employees,
				schema: schema,
				filtering: {
					type: "local"
				}
			}).dataBind();

			$("#filterType").igCombo({
				mode: "dropdown",
				textKey: "text",
				valueKey: "value",
				dataSource: [
					{ value: "Simple Filtering", text: "簡易なフィルタリング" },
					{ value: "Search By Text", text: "テキストで検索する" }
				],
				initialSelectedItems : [
					{ value: "Simple Filtering" }
				],
				selectionChanged: function (evt, args) {
					f = args.items[0].data.value === "Simple Filtering";
					createSimpleFilteringGrid(f, ds);
				}
			});
			$(document).delegate("#gridSimpleFiltering", "igcontrolcreated", function (evt, args) {
				if (!f) {
					createSearchField(args.owner, ds);
				}
			});
			createSimpleFilteringGrid(f, ds);
		});
		function createSearchField(grid, ds) {
			var upperPager = grid.container().find(".ui-iggrid-pagesizedropdowncontainerabove"),
				field = $('<input id="filterByText" />');

			upperPager.prepend(field);
			field.igTextEditor({
				placeHolder: "検索...",
				height: "22px",
				textChanged: function (evt, args) {
					ds.filterByText(args.text);
					$(grid.element).igGrid("option", "dataSource", ds.dataView());
				}
			});
		}
		function createSimpleFilteringGrid(f, ds) {
			var features = [
					{
						name: "Paging",
						type: "local",
						pageSize: 10
					}
			];

			if (f) {
				features.push({
					name: "Filtering",
					type: "local",
					mode: "simple",
					filterDialogContainment: "window",
					columnSettings: [
						{
							columnKey: "FirstName",
							condition: "startsWith"
						},
						{
							columnKey: "LastName",
							condition: "equals"
						},
						{
							columnKey: "Country",
							condition: "equals"
						},
						{
							columnKey: "Age",
							condition: "greaterThan"
						}
					]
				});
			}
			if ($("#filterByText").length && $("#searchField").data("igTextEditor")) {
				$("#filterByText").igTextEditor("destroy");
				$("#filterByText").remove();
				$("#searchLabel").remove();
			}
			if ($("#gridSimpleFiltering").data("igGrid")) {
				$("#gridSimpleFiltering").igGrid("destroy");
			}
			$("#gridSimpleFiltering").igGrid({
				autoGenerateColumns: false,
				height: "400px",
				columns: [
					{ headerText: "名前", key: "FirstName", dataType: "string" },
					{ headerText: "名字", key: "LastName", dataType: "string" },
					{ headerText: "登録日付", key: "RegistererDate", dataType: "date" },
					{ headerText: "国", key: "Country", dataType: "string" },
					{ headerText: "年齢", key: "Age", dataType: "number" },
					{ headerText: "アクティブ", key: "IsActive", dataType: "bool" }
				],
				dataSource: ds.dataView(),
				responseDataKey: "results",
				features: features
			});
		}