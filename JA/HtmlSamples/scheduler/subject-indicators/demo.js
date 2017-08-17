$( function () {
            var scheduleListDataSource = new $.ig.scheduler.ScheduleListDataSource(),
                appointmentsDS = new $.ig.DataSource({
                    primaryKey: "id",
                    dataSource: appointments
                });

            appointmentsDS.dataBind();

            scheduleListDataSource.resourceItemsSource(resources);
            scheduleListDataSource.appointmentItemsSource(appointmentsDS);

            $("#scheduler").igScheduler({
                height: "650px",
                width: "100%",
                selectedDate: today,
                dataSource: scheduleListDataSource
            });
        });