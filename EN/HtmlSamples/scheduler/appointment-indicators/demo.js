$(function () {
$.ig.loader({
            scriptPath: "http://cdn-na.infragistics.com/igniteui/latest/js/",
            cssPath: "http://cdn-na.infragistics.com/igniteui/latest/css/",
            resources: "igScheduler",
            ready: function () {
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
                    width: "760px",
                    monthViewSettings: {
                        isAgendaVisible: true
                    },
                    selectedDate: today,
                    dataSource: scheduleListDataSource
                });
            }
        });
});