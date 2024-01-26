fetch('https://whatyearisit-nu-drab.vercel.app/year')
    .then(response => response.json())
    .then(year => {
        ;
        document.querySelector('#year').textContent = year.year;
    })
