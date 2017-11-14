$( function () {
			$("#scheduler").igScheduler({
				height: "650px",
				width: "100%",
				agendaViewSettings: {
					dateRangeInterval: 10
				},
                weekViewSettings: {
                    timeSlotInterval: "fiveMinutes",
                    weekViewDisplayMode: "workingDaysOnly"
                },
                dayViewSettings: {
                    timeSlotInterval: "tenMinutes",
                    dayViewNumberOfDays: "3",
                },
				selectedDate: today,
                dataSource: appointments,
                resources: resources
			});
		});