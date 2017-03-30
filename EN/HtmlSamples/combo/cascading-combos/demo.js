$(function () {
var dsCountry, dsCascTowns, dsCountryCascading,
            dsCountryCascading, dsStatesUSCascading, dsDistrictBGCascading;

        dsCountry = [
			{ txtCountry: "United States", valCountry: "US" },
			{ txtCountry: "Bulgaria", valCountry: "BG" }
        ];

        dsCascDistrict = [
			{ keyCountry: "US", txtDistrict: "New Jersey", valDistrict: "NJ" },
			{ keyCountry: "US", txtDistrict: "California", valDistrict: "CA" },
			{ keyCountry: "US", txtDistrict: "Illinois", valDistrict: "IL" },
			{ keyCountry: "US", txtDistrict: "New York", valDistrict: "NY" },
			{ keyCountry: "US", txtDistrict: "Florida", valDistrict: "FL" },
			{ keyCountry: "BG", txtDistrict: "Sofia", valDistrict: "SA" },
			{ keyCountry: "BG", txtDistrict: "Plovdiv", valDistrict: "PV" },
			{ keyCountry: "BG", txtDistrict: "Varna", valDistrict: "V" },
			{ keyCountry: "BG", txtDistrict: "Burgas", valDistrict: "B" },
            { keyCountry: "BG", txtDistrict: "Stara Zagora", valDistrict: "SZ" }
        ];

        dsCascTowns = [
			{ keyDistrict: "NJ", textTown: "Atlantic City", valTown: "AtlanticCity" },
			{ keyDistrict: "NJ", textTown: "Dover", valTown: "Dover" },
			{ keyDistrict: "NJ", textTown: "Paterson", valTown: "Paterson" },
			{ keyDistrict: "NJ", textTown: "Elizabeth", valTown: "Elizabeth" },
			{ keyDistrict: "NJ", textTown: "Edison", valTown: "Edison" },
			{ keyDistrict: "CA", textTown: "Los Angeles", valTown: "LosAngeles" },
			{ keyDistrict: "CA", textTown: "San Francisco", valTown: "San Francisco" },
			{ keyDistrict: "CA", textTown: "San Diego", valTown: "SanDiego" },
			{ keyDistrict: "CA", textTown: "San Jose", valTown: "San Jose" },
			{ keyDistrict: "CA", textTown: "Fresno", valTown: "Fresno" },
			{ keyDistrict: "IL", textTown: "Chicago", valTown: "Chicago" },
			{ keyDistrict: "IL", textTown: "Dakota", valTown: "Dakota" },
			{ keyDistrict: "IL", textTown: "New Canton", valTown: "New Canton" },
			{ keyDistrict: "IL", textTown: "Astoria", valTown: "Astoria" },
			{ keyDistrict: "IL", textTown: "Otterville", valTown: "Otterville" },
            { keyDistrict: "NY", textTown: "New York", valTown: "NewYork" },
			{ keyDistrict: "NY", textTown: "Buffalo", valTown: "Buffalo" },
			{ keyDistrict: "NY", textTown: "Rochester", valTown: "Rochester" },
			{ keyDistrict: "NY", textTown: "Yonkers", valTown: "Yonkers" },
			{ keyDistrict: "NY", textTown: "Syracuse", valTown: "Syracuse" },
			{ keyDistrict: "FL", textTown: "Miami", valTown: " Miami" },
			{ keyDistrict: "FL", textTown: "Orlando", valTown: "Orlando" },
			{ keyDistrict: "FL", textTown: "Jacksonville", valTown: "Jacksonville" },
			{ keyDistrict: "FL", textTown: "Tampa", valTown: "Tampa" },
			{ keyDistrict: "FL", textTown: "St. Petersburg", valTown: "St. Petersburg" },
			{ keyDistrict: "SA", textTown: "Sofia", valTown: "Sofia" },
			{ keyDistrict: "SA", textTown: "Ihtiman", valTown: "Ihtiman" },
			{ keyDistrict: "SA", textTown: "Samokov", valTown: "Samokov" },
			{ keyDistrict: "SA", textTown: "Svoge", valTown: "Svoge" },
			{ keyDistrict: "SA", textTown: "Botevgrad", valTown: "Botevgrad" },
			{ keyDistrict: "PV", textTown: "Plovdiv", valTown: "Plovdiv" },
			{ keyDistrict: "PV", textTown: "Karlovo", valTown: "Karlovo" },
			{ keyDistrict: "PV", textTown: "Hisaria", valTown: "Hisaria" },
			{ keyDistrict: "PV", textTown: "Asenovgrad", valTown: "Asenovgrad" },
			{ keyDistrict: "PV", textTown: "Rakovski", valTown: "Rakovski" },
			{ keyDistrict: "V", textTown: "Varna", valTown: "Varna" },
			{ keyDistrict: "V", textTown: "Aksakovo", valTown: "Aksakovo" },
			{ keyDistrict: "V", textTown: "Beloslav", valTown: "Beloslav" },
			{ keyDistrict: "V", textTown: "Avren", valTown: "Avren" },
			{ keyDistrict: "V", textTown: "Dylgopol", valTown: "Dylgopol" },
			{ keyDistrict: "B", textTown: "Burgas", valTown: "Burgas" },
			{ keyDistrict: "B", textTown: "Karnobat", valTown: "Karnobat" },
			{ keyDistrict: "B", textTown: "Aytos", valTown: "Aytos" },
			{ keyDistrict: "B", textTown: "Sozopol", valTown: "Sozopol" },
			{ keyDistrict: "B", textTown: "Pomorie", valTown: "Pomorie" },
			{ keyDistrict: "SZ", textTown: "Stara Zagora", valTown: "Stara Zagora" },
			{ keyDistrict: "SZ", textTown: "Gurkovo", valTown: "Gurkovo" },
			{ keyDistrict: "SZ", textTown: "Chirpan", valTown: "Chirpan" },
			{ keyDistrict: "SZ", textTown: "Radnevo", valTown: "Radnevo" },
			{ keyDistrict: "SZ", textTown: "Gylybovo", valTown: "Gylybovo" },
        ];

        $(function () {

            $("#comboCountry").igCombo({
                textKey: "txtCountry",
                valueKey: "valCountry",
                placeHolder: "select country...",
                dataSource: dsCountry,
                selectionChanged: function (evt, ui) {
                    var filteredCascDistrict = [];
                    if (ui.items && ui.items[0]) {
                        var itemData = ui.items[0].data;
                        if (itemData.valCountry == "US") {
                            $("#state").css("display", "block");
                            $("#district").css("display", "none");
                        }
                        else {
                            $("#state").css("display", "none");
                            $("#district").css("display", "block");
                        }

                        filteredCascDistrict = dsCascDistrict.filter(function (district) {
                            return district.keyCountry == itemData.valCountry;
                        });
                    }

                    var $comboDistrict = $("#comboDistrict");
                    $comboDistrict.igCombo("deselectAll", {}, true);
                    $comboDistrict.igCombo("option", "dataSource", filteredCascDistrict);
                    $comboDistrict.igCombo("dataBind");

                    var disableChildCombo = filteredCascDistrict.length == 0;
                    $comboDistrict.igCombo("option", "disabled", disableChildCombo);
                },
                itemsRendered: function (evt, ui) {
                    ui.owner.deselectAll();
                }
            });

            $("#comboDistrict").igCombo({
                valueKey: "valDistrict",
                textKey: "txtDistrict",
                placeHolder: "select district...",
                dataSource: [],
                disabled: true,
                selectionChanged: function (evt, ui) {
                    var filteredCascTown = [];

                    if (ui.items && ui.items[0]) {
                        var itemData = ui.items[0].data;

                        var filteredCascTown = dsCascTowns.filter(function (town) {
                            return town.keyDistrict == itemData.valDistrict;
                        });
                    }

                    var $comboTown = $("#comboTown");
                    $comboTown.igCombo("deselectAll");
                    $comboTown.igCombo("option", "dataSource", filteredCascTown);
                    $comboTown.igCombo("dataBind");

                    var disableChildCombo = filteredCascTown.length == 0;
                    $comboTown.igCombo("option", "disabled", disableChildCombo);
                }
            });

            $("#comboTown").igCombo({
                valueKey: "valTown",
                textKey: "textTown",
                placeHolder: "select town...",
                disabled: true
            });
        });
});