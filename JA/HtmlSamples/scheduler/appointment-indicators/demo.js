$( function () {
			$("#scheduler").igScheduler({
				height: "650px",
                width: "760px",
                views: ["monthView", "agendaView"],
				monthViewSettings: {
					isAgendaVisible: true
				},
				selectedDate: today,
                dataSource: appointments,
                resources: resources
			});
        });