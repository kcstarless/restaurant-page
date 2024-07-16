import './style.css';
import aboutPage from './about.js';
import reservationPage from './reservation.js';
import menuPage from './menu.js';

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const reservationBtn = document.getElementById('reservationBtn');
    const logoLink = document.getElementById('logoLink');
    const content = document.getElementById('content');
    const miniLogoLink = document.getElementById('logoLink-mini');

    // Initial content load
    content.appendChild(aboutPage());

    // Event listener for menu button
    menuBtn.addEventListener('click', function() {
        content.innerHTML = ''; // Clear existing content
        content.appendChild(menuPage()); // Load menu page content
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    logoLink.addEventListener('click', function() {
        content.innerHTML = '';
        content.appendChild(aboutPage()); 
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    reservationBtn.addEventListener('click', function() {
        content.innerHTML = '';
        content.appendChild(reservationPage());
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    miniLogoLink.addEventListener('click', function() {
        content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

});