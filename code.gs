function setUpTrigger() {
  // ... (your existing setUpTrigger function)
}

function sendDailyEventsEmail() {
  // ... (your existing sendDailyEventsEmail function)
}

function setUserEmailAndCalendarId(userEmail, calendarId) {
  PropertiesService.getScriptProperties().setProperty('userEmail', userEmail);
  PropertiesService.getScriptProperties().setProperty('calendarId', calendarId);
}
