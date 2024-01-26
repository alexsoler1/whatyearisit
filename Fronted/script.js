fetch('https://whatyearisit-nu-drab.vercel.app/date')
    .then(response => response.json())
    .then(year => {
        ;
        document.querySelector('#year').textContent = year.year;
    })
