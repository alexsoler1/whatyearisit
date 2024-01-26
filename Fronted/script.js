fetch('http://localhost:3000/date')
    .then(response => response.json())
    .then(year => {
        ;
        document.querySelector('#year').textContent = year.value;
    })
