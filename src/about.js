import './style.css';

function aboutPage () {
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const miniLogo = document.createElement('div');

    h1.textContent = "Izakaya Odin. Eating House & Bar";
    h3.textContent = "Seven days a week, from 12pm.";
    p.innerHTML = `Open since 2024, Izakaya Odin is located in Web Devlopment's famous HTML and Javascript precinct, 
                    Webpack Lane. Celebrating the historic turn of the century npm building in which it is located, 
                    the space is a busy social hub offering a seasonal and healthy menu that celebrates the very best in Web produce<br><br><br>.

                    Get in touch by calling us on <a href="#">09 0000 0000</a>, or email <a href="#">info@izakayaodin.com</a><br><br><br>
                    
                    45 Webpack Lane, Web Devlopment`; 

    miniLogo.innerHTML = `<a href="#" id="logoLink-mini">
                            <div class="logo-mini">
                                <div class="logo-first">&uarr; IZAKAYA</div>
                                <div class="logo-second">ODIN</div>
                            </div>
                        </a>`

    container.appendChild(h1);
    container.appendChild(h3);
    container.appendChild(p);
    container.appendChild(miniLogo);

    return container;
}

export default aboutPage;