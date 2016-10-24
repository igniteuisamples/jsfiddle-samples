$(function () {
			$("#grid-mrl").igGrid({
				dataSource: data,
				autoCommit: true,
				width: "100%",
				autoGenerateColumns: false,
				primaryKey: "company",
				columns: [
					{ headerText: "Company", key: "company", dataType: "string", rowIndex: 0, columnIndex: 0, colSpan: 2, navigationIndex: 0 },
					{ headerText: "Lifetime Sales", key: "sales_lifetimeSales", dataType: "number", rowIndex: 0, columnIndex: 2, colSpan: 2, rowSpan: 2, navigationIndex: 4 },
					{ headerText: "Market Potential", key: "sales_marketPotential", dataType: "number", rowIndex: 0, columnIndex: 4, rowSpan: 3, width: "10%", navigationIndex: 7 },
					{ headerText: "Assets Cash", key: "assets_cash", dataType: "number", rowIndex: 0, columnIndex: 5, width: "10%", navigationIndex: 8 },
					{ headerText: "Accounts Receivable", key: "assets_accRec", dataType: "number", rowIndex: 0, columnIndex: 6, width: "20%", navigationIndex: 9 },
					{ headerText: "Country", key: "country", dataType: "string", rowIndex: 1, columnIndex: 0, width: "10%", navigationIndex: 1 },
					{ headerText: "City", key: "city", dataType: "string", rowIndex: 1, columnIndex: 1, width: "10%", navigationIndex: 2 },
					{ headerText: "Assets Books", key: "assets_books", dataType: "number", rowIndex: 1, columnIndex: 5, colSpan: 2, rowSpan: 2, navigationIndex: 10 },
					{ headerText: "Address", key: "address", dataType: "string", rowIndex: 2, columnIndex: 0, colSpan: 2, navigationIndex: 3 },
					{ headerText: "Quarterly", key: "sales_quarterlySales", dataType: "number", rowIndex: 2, columnIndex: 2, width: "10%", navigationIndex: 5 },
					{ headerText: "Yearly", key: "sales_yearlySales", dataType: "number", rowIndex: 2, columnIndex: 3, width: "10%", navigationIndex: 6 }
				],
				autofitLastColumn: false,
				features: [
					{
						name: "Paging",
						pageSize: 5
					},
					{
						name: "Updating",
						editMode: "cell"
					}
				]
			});
		});