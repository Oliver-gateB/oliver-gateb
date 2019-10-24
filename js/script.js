const main = () => {

    {
        const htmlH1 = document.querySelectorAll('h1');
        htmlH1.forEach(h1 => {
            let newHtml = `
            <div class="hero bg-primary" id="${h1.id}">
            <div class="hero-body">
            <h1 class="p-2">${h1.innerText}</h1>
            </div>
            </div>
            `;
            h1.innerHTML = newHtml;
        });
    }

    {
        const htmlNav = document.querySelector('#TableOfContents');
        const htmlNavLvl1 = document.querySelectorAll('#TableOfContents > ul > li');
        let newHtml = '';
        htmlNavLvl1.forEach(itemLvl1 => {
            const titleLvl1 = itemLvl1.firstChild.innerText;

            newHtml += `
            <div class="accordion">
            <input id="accordion-${titleLvl1}" type="checkbox" hidden="" checked>
            <label class="accordion-header c-hand" for="accordion-${titleLvl1}">${titleLvl1}</label>
            <div class="accordion-body">
            <ul class="menu menu-nav">
            `;

            const htmlNavLvl2 = itemLvl1.lastChild.children;
            [...htmlNavLvl2].forEach(itemLvl2 => {
                const titleLvl2 = itemLvl2.firstChild.innerText;
                const linkLvl2 = itemLvl2.querySelector('a').attributes[0].nodeValue;

                if (!titleLvl2.includes('Excercise')) {
                    newHtml += `
                    <li class="menu-item"><a href="${linkLvl2}">${titleLvl2}</a></li>
                    `;
                } else {
                    newHtml += `
                    <li class="menu-item"><a href="${linkLvl2}"><em>${titleLvl2}</em></a></li>
                    `;
                }

            });

            newHtml += `
        </ul>
    </div>
</div>
            `;
            htmlNav.innerHTML = newHtml;
        });
    }
};

window.onload = main();
