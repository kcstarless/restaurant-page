import './style.css';

function reservationPage () {
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const form = document.createElement('div');
    const miniLogo = document.createElement('div');

    h1.textContent = "Reservation equiry";
    p.innerHTML = `Reservations are taken online for groups of up to 14 guests.<br> 
                    for larger parties, please reach out via our form below or call us on 09 0000 0000.<br><br>

                    Walk-in guests and casual visits are always welcome.<br><br>

                    If adding a Celebration Cake to your reservation, the order must be placed at least 48 hours prior to your reservation. `
    form.innerHTML = `
                      <fieldset>
                        <legend><h3>Booking information:</h3></legend>
                        <label for="fname">First name:</label>
                        <input type="text" id="fname" name="fname">
                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email">
                        <label for="date">Booking Date:</label>
                        <input type="date" id="date" name="date">
                        <label for="time">Time:</label>
                        <input type="time" id="date" name="date">
                        <label for="number">No. of guests:</label>
                        <input type="number" id="number" name="number"><br>
                        <input type="submit" value="Book" class="booking-btn">
                      </fieldset>`;
    miniLogo.innerHTML = `<a href="#" id="logoLink-mini">
                              <div class="logo-mini">
                                  <div class="logo-first">&uarr; IZAKAYA</div>
                                  <div class="logo-second">ODIN</div>
                              </div>
                          </a>`;

    container.appendChild(h1);
    container.appendChild(p);
    container.appendChild(form);
    container.appendChild(miniLogo);

    return container;
}

export default reservationPage;