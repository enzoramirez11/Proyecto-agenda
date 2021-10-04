var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

let days= document.getElementsByClassName("day-box")
let today = new Date()
for (var i=0; i<days.length;i++) {
  days[0-i]=days[7-i]
  if (today.getDay()==i) {
    days[i-2].classList.add("bg-warning");
    days[i-1].classList.remove("bg-secondary")
    days[i-1].classList.add("bg-primary");
    days[i].classList.add("bg-warning");
  }
}