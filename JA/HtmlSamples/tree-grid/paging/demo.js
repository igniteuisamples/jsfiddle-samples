$(function () {
            var flatDS = [
                { "employeeID": 0, "PID": -1, "firstName": "Andrew", "lastName": "Fuller", "Title": "Vice President, Sales" },
                { "employeeID": 1, "PID": -1, "firstName": "Jonathan", "lastName": "Smith", "Title": "Human resources" },
                { "employeeID": 2, "PID": -1, "firstName": "Nancy", "lastName": "Davolio", "Title": "CFO" },
                { "employeeID": 3, "PID": -1, "firstName": "Steven", "lastName": "Buchanan", "Title": "CTO" },
                // sub of ID 1
                { "employeeID": 4, "PID": 0, "firstName": "Janet", "lastName": "Leverling", "Title": "Sales Manager" },
                { "employeeID": 5, "PID": 0, "firstName": "Laura", "lastName": "Callahan", "Title": "Inside Sales Coordinator" },
                { "employeeID": 6, "PID": 0, "firstName": "Margaret", "lastName": "Peacock", "Title": "Sales Representative" },
                { "employeeID": 7, "PID": 0, "firstName": "Michael", "lastName": "Suyama", "Title": "Sales Representative" },
                // sub of ID 4
                { "employeeID": 8, "PID": 4, "firstName": "Anne", "lastName": "Dodsworth", "Title": "Sales Representative" },
                { "employeeID": 9, "PID": 4, "firstName": "Danielle", "lastName": "Davis", "Title": "Sales Representative" },
                { "employeeID": 10, "PID": 4, "firstName": "Robert", "lastName": "King", "Title": "Sales Representative" },
                // sub of ID 2
                { "employeeID": 11, "PID": 2, "firstName": "Peter", "lastName": "Lewis", "Title": "Chief Accountant" },
                { "employeeID": 12, "PID": 2, "firstName": "Ryder", "lastName": "Zenaida", "Title": "Accountant" },
                { "employeeID": 13, "PID": 2, "firstName": "Wang", "lastName": "Mercedes", "Title": "Accountant" },
                // sub of ID 3
                { "employeeID": 14, "PID": 3, "firstName": "Theodore", "lastName": "Zia", "Title": "Software Architect" },
                { "employeeID": 15, "PID": 3, "firstName": "Lacota", "lastName": "Mufutau", "Title": "Product Manager" },
                // sub of ID 16
                { "employeeID": 16, "PID": 15, "firstName": "Jin", "lastName": "Elliott", "Title": "Product Owner" },
                { "employeeID": 17, "PID": 15, "firstName": "Armand", "lastName": "Ross", "Title": "Product Owner" },
                { "employeeID": 18, "PID": 15, "firstName": "Dane", "lastName": "Rodriquez", "Title": "Team Leader" },
                // sub of ID 19
                { "employeeID": 19, "PID": 18, "firstName": "Declan", "lastName": "Lester", "Title": "Senior Software Developer" },
                { "employeeID": 20, "PID": 18, "firstName": "Bernard", "lastName": "Jarvis", "Title": "Senior Software Developer" },
                { "employeeID": 21, "PID": 18, "firstName": "Jason", "lastName": "Clark", "Title": "QA" },
                { "employeeID": 22, "PID": 18, "firstName": "Mark", "lastName": "Young", "Title": "QA" },
                // sub of ID 20
                { "employeeID": 23, "PID": 20, "firstName": "Jeremy", "lastName": "Donaldson", "Title": "Software Developer" }
            ];


            $("#treegrid1").igTreeGrid({
                width: "100%",
                dataSource: flatDS, //bound to flat data source,
                autoGenerateColumns: false,
                primaryKey: "employeeID",
                foreignKey: "PID",
                initialExpandDepth: -1,
                columns: [
                    { headerText: "従業員 ID", key: "employeeID", dataType: "number", hidden: true },
                    { headerText: "名前", key: "firstName", dataType: "string" },
                    { headerText: "名字", key: "lastName", dataType: "string" },
                    { headerText: "役職", key: "Title", dataType: "string" }
                ],
                features: [
                    {
                        name: "Paging",
                        mode: "allLevels",
                        pageSize: 10,
                        currentPageIndex: 2,
                        contextRowMode: "parent"
                    }
                ]
            });

            $("#treegrid2").igTreeGrid({
                width: "100%",
                dataSource: flatDS, //bound to flat data source,
                autoGenerateColumns: false,
                primaryKey: "employeeID",
                foreignKey: "PID",
                initialExpandDepth: -1,
                columns: [
                    { headerText: "従業員 ID", key: "employeeID", dataType: "number", hidden: true },
                    { headerText: "名前", key: "firstName", dataType: "string" },
                    { headerText: "名字", key: "lastName", dataType: "string" },
                    { headerText: "役職", key: "Title", dataType: "string" }
                ],
                features: [
                    {
                        name: "Paging",
                        mode: "allLevels",
                        pageSize: 10,
                        currentPageIndex: 2,
                        contextRowMode: "breadcrumb",
                        breadcrumbKey: "firstName"
                    }
                ]
            });
        });