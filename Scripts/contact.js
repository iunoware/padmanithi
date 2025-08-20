let dateNotifier = document.getElementById("date-notifier");

let today = new Date();

let year = today.getFullYear();
let month = String(today.getMonth() + 1).padStart(2, "0");
let day = String(today.getDate()).padStart(2, "0");

var formattedDate = `${year}-${month}-${day}`;
// var indianFormat = `${day}-${month}-${year}`;
var meetingDate;

document.addEventListener("DOMContentLoaded", function () {
  let calendarNew = document.getElementById("calendar");

  // console.log(`${year}-${month}-${day}`);

  let calendar = new FullCalendar.Calendar(calendarNew, {
    initialView: "dayGridMonth",
    validRange: {
      start: new Date(),
    },
    dateClick: function (info) {
      // alert("You clicked on: " + info.dateStr);
      meetingDate = info.dateStr;
      openPopup(info);
    },
    events: [{ title: "TODAY", start: formattedDate }],
  });

  calendar.render();
});

// for popup
function openPopup(info) {
  document.getElementById("popupForm").style.display = "block";
  dateNotifier.textContent = info.dateStr;
}

function closePopup() {
  document.getElementById("popupForm").style.display = "none";
  document.querySelector(".warning-message").style.display = "none";
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
}

// for calender
const messageBtn = document.getElementById("sendMessageBtn");
const myNum = "918220442273";
let url;

messageBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("phone").value.trim();

  if (name && phone) {
    const message = `Hi, I'm ${name},\nthis is my mobile number: ${phone}.\nAnd I would like to book an appointment on ${meetingDate} \n\nThank you!`;
    const enCoded = encodeURIComponent(message);
    url = `https://wa.me/${myNum}?text=${enCoded}`;
    // url = `https://api.whatsapp.com/send?phone=${myNum}&text=${enCoded}`;
    window.open(url);
  } else {
    document.querySelector(".warning-message").style.display = "block";
  }
});

// for the form submit
let submitForm = document.getElementById("submit-form");
// use the 'myNum' here:

submitForm.addEventListener("click", (event) => {
  event.preventDefault();

  let fName = document.getElementById("fName").value.trim();
  let lName = document.getElementById("lName").value.trim();
  let emailForm = document.getElementById("email-form").value.trim();
  let phoneNumForm = document.getElementById("phoneNum-form").value.trim();
  let companyName = document.getElementById("companyName").value.trim();
  let location = document.getElementById("location").value.trim();
  let messageForm = document.getElementById("message-form").value.trim();

  if (
    fName &&
    lName &&
    emailForm &&
    phoneNumForm &&
    location &&
    companyName &&
    messageForm
  ) {
    const messageNew = `Hi, I'm ${fName} ${lName},\nThese are my details \n• Mobile: ${phoneNumForm}.\n• Email: ${emailForm}\n• location: ${location}\n• Company name: ${companyName}\n• Message: ${messageForm} \n\nThank you!`;
    const enCoded = encodeURIComponent(messageNew);
    url = `https://wa.me/${myNum}?text=${enCoded}`;
    window.open(url);
  } else if (fName && lName && emailForm && phoneNumForm && location && companyName) {
    const messageNew = `Hi, I'm ${fName} ${lName},\nThese are my details \n• Mobile: ${phoneNumForm}.\n• Email: ${emailForm}\n• location: ${location}\n• Company name: ${companyName} \n\nThank you!`;
    const enCoded = encodeURIComponent(messageNew);
    url = `https://wa.me/${myNum}?text=${enCoded}`;
    window.open(url);
  } else {
    document.querySelector(".warning-message-form").style.display = "block";
  }
});
