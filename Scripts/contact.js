document.addEventListener("DOMContentLoaded", function () {
  let calendarEl = document.getElementById("calendar");

  let currentDate = new Date().toLocaleString();

  console.log(currentDate);

  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    events: [
      { title: "Meeting", start: "2025-08-12" },
      { title: "Conference", start: "2025-08-15", end: "2025-08-17" },
    ],
  });

  calendar.render();
});
