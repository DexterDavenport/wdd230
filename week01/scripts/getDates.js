document.addEventListener('DOMContentLoaded', function() {
    let currentYear = new Date().getFullYear();
    let modifiedDate = document.lastModified;
    document.getElementById("lastModified").innerHTML = modifiedDate;
    document.getElementById("year").textContent = currentYear;
  });