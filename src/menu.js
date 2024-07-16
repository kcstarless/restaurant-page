import './style.css';

function menuPage () {
    const container = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const miniLogo = document.createElement('div');

    h1.textContent = "Menu";
    p.innerHTML = `Baker Bleu sourdough 6<br>
                    Sydney rock oyster, Merimbula, NSW 6<br>
                    Pacific oyster, Coffin Bay, SA 6<br>
                    Shark Bay scallop, brown butter, Aleppo 9<br>
                    Ortiz anchovies, chilli, lemon 29<br><br>

                    Wagyu bresaola, kohlrabi, lemon mayonnaise, capers 22<br>
                    LP’s salami cotto & capocollo, guindilla peppers 26<br>
                    Tuna tartare, goat's curd, green pea, mint 32<br>
                    Roast Jerusalem artichoke, celeriac, radicchio, hazelnut 24<br>
                    Fremantle octopus, 'nduja, pink fir potato, wild fennel 28<br><br>

                    Ruby chard, sorrel, globe artichoke & ricotta pie 38<br>
                    Pan-roasted rainbow trout, cavolo nero, capers, lemon beurre blanc 46<br>
                    300g O'Connor porterhouse, mountain pepper sauce 62<br>
                    Ravens Creek rare breed pork chop, apple mustard, hispi cabbage 48<br>
                    1.2kg Slow roasted lamb shoulder, almond, red pepper 85<br>

                    Roast potatoes, confit garlic & capers 12<br>
                    Cracked wheat salad, labneh, preserved lemon, barberry 13<br>
                    Farm leaves, sherry vinaigrette 11<br><br>

                    Rhubarb & hibiscus jelly, vanilla cream, oat crumb 16<br>
                    Valrhona chocolate tart, ricotta ice cream 18<br>
                    Baba, aged rum, crème diplomat 19<br>
                    Madeleines, lemon curd 9<br>
                    Selection of cheeses, quince, lavosh 28<br><br><br>


                    Chef's Selection<br>
                    88<br>
                    Fremantle octopus gilda<br>
                    Tuna tartare, goat's curd, green pea, mint<br>
                    Wagyu bresaola, kohlrabi, lemon mayonnaise, capers<br>
                    Roast Jerusalem artichoke, celeriac, radicchio, hazelnut<br><br>
                    -
                    Slow roasted lamb shoulder, almond, red pepper<br>
                    Cracked wheat salad, labneh, preserved lemon, barberry<br>
                    Farm leaves, sherry vinaigrette<br><br>
                    -
                    Valrhona soft chocolate, earl grey, orange caramel, pistachio<br>
                    -
                    Menus are subject to change due to seasonal availability.<br>`; 

    miniLogo.innerHTML = `<a href="#" id="logoLink-mini">
                            <div class="logo-mini">
                                <div class="logo-first">&uarr; IZAKAYA</div>
                                <div class="logo-second">ODIN</div>
                            </div>
                        </a>`

    container.appendChild(h1);
    container.appendChild(p);
    container.appendChild(miniLogo);

    return container;
}

export default menuPage;