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
			{ keyDistirct: "NJ", textTown: "Atlantic City", valTown: "AtlanticCity" },
			{ keyDistirct: "NJ", textTown: "Dover", valTown: "Dover" },
			{ keyDistirct: "CA", textTown: "Los Angeles", valTown: "LosAngeles" },
			{ keyDistirct: "CA", textTown: "San Francisco", valTown: "San Francisco" },
			{ keyDistirct: "CA", textTown: "San Diego", valTown: "SanDiego" },
			{ keyDistirct: "IL", textTown: "Chicago", valTown: "Chicago" },
            { keyDistirct: "NY", textTown: "New York", valTown: "NewYork" },
			{ keyDistirct: "NY", textTown: "Buffalo", valTown: "Buffalo" },
			{ keyDistirct: "FL", textTown: "Miami", valTown: " Miami" },
			{ keyDistirct: "FL", textTown: "Orlando", valTown: "Orlando" },
			{ keyDistirct: "SA", textTown: "Sofia", valTown: "Sofia" },
			{ keyDistirct: "SA", textTown: "Pernik", valTown: "Pernik" },
			{ keyDistirct: "PV", textTown: "Plovdiv", valTown: "Plovdiv" },
			{ keyDistirct: "PV", textTown: "Asenovgrad", valTown: "Asenovgrad" },
			{ keyDistirct: "V", textTown: "Varna", valTown: "Varna" },
			{ keyDistirct: "V", textTown: "Kavarna", valTown: "Kavarna" },
			{ keyDistirct: "V", textTown: "Balchik", valTown: "Balchik" },
			{ keyDistirct: "Y", textTown: "Yambol", valTown: "Yambol" },
			{ keyDistirct: "Y", textTown: "Kermen", valTown: "Kermen" },
			{ keyDistirct: "Y", textTown: "Elhovo", valTown: "Elhovo" },
			{ keyDistirct: "Y", textTown: "Bolyarovo", valTown: "Bolqrovo" },
        ];

        dsCountryCascading = [
            { txtCountry: "United States", valCountry: "US" },
            { txtCountry: "Bulgaria", valCountry: "BG" },
        ];

        dsStatesUSCascading = [
			{ state: "New Jersey" },
			{ state: "California" },
			{ state: "Illinois" },
			{ state: "New York" },
			{ state: "Florida" }
        ];

        dsDistrictBGCascading = [
			{ district: "Sofia" },
			{ district: "Plovdiv" },
			{ district: "Varna" },
			{ district: "Yambol" }
        ];

        dsCascStatesDistricts = {
            "US": { dataSource: dsStatesUSCascading, textKey: "state" },
            "BG": { dataSource: dsDistrictBGCascading, textKey: "district" }
        };

        $(function () {

            $("#comboCountry").igCombo({
                textKey: "txtCountry",
                selectedItems: [{ index: 1 }],
                valueKey: "valCountry",
                dataSource: dsCountry,
                selectionChanged: function (e, args) {
                    if (args.owner.selectedIndex() === 0) {
                        $("#state").css("display", "block");
                        $("#district").css("display", "none");
                    } else {
                        $("#state").css("display", "none");
                        $("#district").css("display", "block");
                    }
                }
            });

            $("#comboDistrict").igCombo({
                valueKey: "valDistrict",
                textKey: "txtDistrict",
                dataSource: dsCascDistrict,
                parentComboKey: "keyCountry",
                parentCombo: "#comboCountry"
            });

            $("#comboTown").igCombo({
                valueKey: "valTown",
                textKey: "textTown",
                dataSource: dsCascTowns,
                parentComboKey: "keyDistirct",
                parentCombo: "#comboDistrict"
            });

            $("#comboCountryCascading").igCombo({
                textKey: "txtCountry",
                valueKey: "valCountry",
                selectedItems: [{ index: 1 }],
                dataSource: dsCountryCascading,
                selectionChanged: function (e, args) {
                    if (args.owner.selectedIndex() === 0) {
                        $("#stateCascading").css("display", "block");
                        $("#districtCascading").css("display", "none");
                    } else {
                        $("#stateCascading").css("display", "none");
                        $("#districtCascading").css("display", "block");
                    }
                }
            });

            $("#comboDistrictCascading").igCombo({
                cascadingDataSources: dsCascStatesDistricts,
                parentCombo: $("#comboCountryCascading")
            });

        });
});