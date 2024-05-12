
// Function to update container2 width
function updateContainerWidth() {
    const backgroundImageWidth = document.querySelector('.background').clientWidth;
    document.querySelector('.container2').style.width = `${backgroundImageWidth}px`;
}

// Initial call to set the width when the page loads
updateContainerWidth();

// Add event listener for window resize
window.addEventListener('resize', updateContainerWidth);

// Add JavaScript for smooth scrolling
document.getElementById("openButton").addEventListener("click", function() {
    // Get the position of the target element
    const targetElement = document.getElementById("page2");
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;

    // Smooth scroll animation
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});

$(document).ready(function(){
    $('#musicIcon').click(function(){
        closeAndToggle('#offcanvasMusic');
    });

    $('#calendarIcon').click(function(){
        closeAndToggle('#offcanvasCalendar');
    });

    $('#mapIcon').click(function(){
        closeAndToggle('#offcanvasMap');
    });

    $('#contactIcon').click(function(){
        closeAndToggle('#offcanvasContact');
    });

    $('#rsvpIcon').click(function(){
        closeAndToggle('#offcanvasRSVP');
    });

    // Function to close all open offcanvas elements and toggle the clicked one
    function closeAndToggle(target) {
        $('.offcanvas').not(target).removeClass('show'); // Close all offcanvas except the target
        $(target).toggleClass('show'); // Toggle the target offcanvas
    }
});

