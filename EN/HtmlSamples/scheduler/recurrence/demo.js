$( function () {
            $("#scheduler").igScheduler({
                height: "650px",
                width: "100%",
                selectedDate: today,
                dataSource: recurrenceAppointments,
                resources: resources
            });
        });