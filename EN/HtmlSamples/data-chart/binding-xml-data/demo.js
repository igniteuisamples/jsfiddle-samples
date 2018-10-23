$(function () {
                        
            //Sample XML Data
            var xmlDoc = '<WorldPopulation>' +
                '<Country Name="China" Pop1995="1216" Pop2005="1297" Pop2015="1361" Pop2025="1394" />' +
                '<Country Name="India" Pop1995="920" Pop2005="1090" Pop2015="1251" Pop2025="1396" />' +
                '<Country Name="United States" Pop1995="266" Pop2005="295" Pop2015="322" Pop2025="351" />' +
                '<Country Name="Indonesia" Pop1995="197" Pop2005="229" Pop2015="256" Pop2025="277" />' +
                '<Country Name="Brazil" Pop1995="161" Pop2005="186" Pop2015="204" Pop2025="218" />' +
            '</WorldPopulation>';

            //Binding to XML requires a schema to define data fields
            var xmlSchema = new $.ig.DataSchema("xml",
                { 
                    //searchField serves as the base node(s) for the XPaths
                    searchField: "//Country", 
                    fields: [
                        { name: "Name", xpath: "./@Name"},
                        { name: "Pop1995", xpath: "./@Pop1995" },
                        { name: "Pop2005", xpath: "./@Pop2005" },
                        { name: "Pop2015", xpath: "./@Pop2015" },
                        { name: "Pop2025", xpath: "./@Pop2025" },
                    ]
                }
            );

            //This creates an Infragistics datasource from the XML 
            //and the Schema which can be consumed by the grid.
            var ds = new $.ig.DataSource({
                type: "xml",
                dataSource: xmlDoc,
                schema: xmlSchema 
            });
            ds.dataBind();

            $("#chart").igDataChart({
                width: "100%",
                height: "400px",
                title: "Population per Country",
                subtitle: "Five largest projected populations for 2015",
                axes: [
                    {
                        name: "NameAxis",
                        type: "categoryX",
                        label: "Name",
                        dataSource: ds, //$.ig.DataSource defined above
                        title: "Country"
                    },
                    {
                        name: "PopulationAxis",
                        type: "numericY",
                        minimumValue: 0,
                        maximumValue: 1400,
                        title: "Millions of People"
                    }
                ],
                series: [
                    {
                        name: "2015Population",
                        type: "column",
                        isHighlightingEnabled: true,
                        isTransitionInEnabled: true,
                        dataSource: ds, //$.ig.DataSource defined above
                        xAxis: "NameAxis",
                        yAxis: "PopulationAxis",
                        valueMemberPath: "Pop2015"
                    }
                ]
            });

        });