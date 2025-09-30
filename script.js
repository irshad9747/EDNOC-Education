
        function toggleDropdown(id) {
      const dropdown = document.getElementById(id);
      document.querySelectorAll(".dropdown").forEach(d => {
        if (d !== dropdown) d.classList.remove("show");
      });
      dropdown.classList.toggle("show");
    }

    function menu() {
    const div = document.getElementById("nav-main");
    if (div.style.display === "none") {
      div.style.display = "flex"; // show it
    } else {
      div.style.display = "none";  // hide it
    }
  }

    // Close when clicking outside
    window.onclick = function(event) {
      if (!event.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("show"));
      }
    }

