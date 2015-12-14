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
			{ keyCountry: "BG", txtDistrict: "Yambol", valDistrict: "Y" }
        ];

        dsCascTowns = [
			{ keyDistrict: "NJ", textTown: "Atlantic City", valTown: "AtlanticCity" },
			{ keyDistrict: "NJ", textTown: "Dover", valTown: "Dover" },
			{ keyDistrict: "CA", textTown: "Los Angeles", valTown: "LosAngeles" },
			{ keyDistrict: "CA", textTown: "San Francisco", valTown: "San Francisco" },
			{ keyDistrict: "CA", textTown: "San Diego", valTown: "SanDiego" },
			{ keyDistrict: "IL", textTown: "Chicago", valTown: "Chicago" },
            { keyDistrict: "NY", textTown: "New York", valTown: "NewYork" },
			{ keyDistrict: "NY", textTown: "Buffalo", valTown: "Buffalo" },
			{ keyDistrict: "FL", textTown: "Miami", valTown: " Miami" },
			{ keyDistrict: "FL", textTown: "Orlando", valTown: "Orlando" },
			{ keyDistrict: "SA", textTown: "Sofia", valTown: "Sofia" },
			{ keyDistrict: "SA", textTown: "Pernik", valTown: "Pernik" },
			{ keyDistrict: "PV", textTown: "Plovdiv", valTown: "Plovdiv" },
			{ keyDistrict: "PV", textTown: "Asenovgrad", valTown: "Asenovgrad" },
			{ keyDistrict: "V", textTown: "Varna", valTown: "Varna" },
			{ keyDistrict: "V", textTown: "Kavarna", valTown: "Kavarna" },
			{ keyDistrict: "V", textTown: "Balchik", valTown: "Balchik" },
			{ keyDistrict: "Y", textTown: "Yambol", valTown: "Yambol" },
			{ keyDistrict: "Y", textTown: "Kermen", valTown: "Kermen" },
			{ keyDistrict: "Y", textTown: "Elhovo", valTown: "Elhovo" },
			{ keyDistrict: "Y", textTown: "Bolyarovo", valTown: "Bolqrovo" },
        ];

        $(function () {

            $("#comboCountry").igCombo({
                textKey: "txtCountry",
                valueKey: "valCountry",
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
                disabled: true
            });
        });
});