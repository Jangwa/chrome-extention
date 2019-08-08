function initialLoad() {
    let reminders = window.localStorage.getItem('reminders');

    if (reminders && reminders!="null") {
        reminders = JSON.parse(reminders);
    } else {
        reminders = [];
    }
    reRender(reminders)
};
function reRender(reminders) {
  document.querySelector('#saveItemViewer').innerHTML='';
  const node = document.querySelector('#saveItemViewer');
  reminders.forEach((x, i) => {
      var aDiv = document.createElement("div");
      var aCloseSpan = document.createElement("span");
      aCloseSpan.innerText='x';
      aCloseSpan.dataset.idx=i;
      aDiv.innerText = x.text;        // Create a text node
      aDiv.appendChild(aCloseSpan);
      node.appendChild(aDiv);
  });
}
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
    reRender(reminders);
    document.querySelector('#reminder-input').value='';
}
function deleteReminderPoint(e) {
  const target = e.target;
  const deleteIdx = target.dataset.idx;
  // ===========================================
  let reminders = window.localStorage.getItem('reminders');
  if (reminders && reminders!="null") {
      reminders = JSON.parse(reminders);
  } else {
      reminders = [];
  }
  //////////////////////////
  reminders.splice(deleteIdx, 1);
  window.localStorage.setItem('reminders', JSON.stringify(reminders));
  initialLoad();
}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#saveItemBtn').addEventListener('click', saveReminder);
    initialLoad()
    document.querySelector('#saveItemViewer').addEventListener('click', deleteReminderPoint);

});
