// Function to open a modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Function to close a modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close the modal if the user clicks outside of the modal content
window.onclick = function (event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = 'none';
        }
    }
}

// Sidebar nav for mobile
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navButtons = document.getElementById('nav-buttons');

    // Create sidebar toggle button for mobile
    const sidebarToggle = document.createElement('button');
    sidebarToggle.className = 'nav-dropdown-toggle';
    sidebarToggle.innerText = 'Menu';
    document.body.appendChild(sidebarToggle);

    function openSidebar() {
        nav.classList.add('show');
        document.body.classList.add('sidebar-open');
    }
    function closeSidebar() {
        nav.classList.remove('show');
        document.body.classList.remove('sidebar-open');
    }

    sidebarToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (nav.classList.contains('show')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (
            window.innerWidth <= 768 &&
            nav.classList.contains('show') &&
            !nav.contains(e.target) &&
            e.target !== sidebarToggle
        ) {
            closeSidebar();
        }
    });

    // Optional: Close sidebar when a nav button is clicked (on mobile)
    navButtons.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });
});
