function initialLoad() {
    let reminders = window.localStorage.getItem('reminders');
    
    if (reminders && reminders!="null") {
        reminders = JSON.parse(reminders);
    } else {
        reminders = [];
    }

    document.querySelector('#saveItemViewer').innerHTML='';
    const node = document.querySelector('#saveItemViewer');
    reminders.forEach(x => {
        var aDiv = document.createElement("div");
        aDiv.innerText = x.text;         // Create a text node
        node.appendChild(aDiv);
    });
    
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
    document.querySelector('#saveItemViewer').innerHTML='';
    const node = document.querySelector('#saveItemViewer');
    reminders.forEach(x => {
        var aDiv = document.createElement("div");
        aDiv.innerText = x.text;         // Create a text node
        node.appendChild(aDiv);
    });
    window.localStorage.setItem('reminders', JSON.stringify(reminders));
    console.log('Working');
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#saveItemBtn').addEventListener('click', saveReminder);
    initialLoad()
});