function fa() {
    console.log('a lal');
    
    
};
function saveReminder() {
    let reminders = window.localStorage.getItem('reminders');
    var v = document.querySelector('#reminder-input').value;
    if (reminders && reminders!="null") {
        reminders = JSON.parse(reminders);
        reminders.push({ text: v, id: Math.random() });
    } else {
        reminders = [];
        reminders.push({ text: v, id: Math.random() });
    }
    window.localStorage.setItem('reminders', JSON.stringify(reminders));
    console.log('Working');
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#saveItemBtn').addEventListener('click', saveReminder);
});