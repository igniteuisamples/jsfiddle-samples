$(function () {
            $("#scheduler").igScheduler({
                height: "650px",
                width: "100%",
                selectedDate: today,
                views: ["monthView", "agendaView"],
                dataSource: appointments,
                resources: resources
            });
        });