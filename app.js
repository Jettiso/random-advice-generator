const advice = document.querySelector('.advice');
const btn = document.getElementById('btn');

async function getData() {
    try {
        const result = await fetch("https://api.adviceslip.com/advice");
        const data = await result.json();

        let res = data.slip;
        let id = res.id;
        let name = res.advice;

        

        

        return [{id, name}];
    } catch (error) {
        console.log(error)
    }
}

function displayData() {
    getData().then( (data) => {
        let yawa = data.map((item) => {
            return `
            
            <h2> #${item.id} </h2>
            <h3>"${item.name}"</h3>
            `;
    
        });
        advice.innerHTML = yawa;
    });
}

btn.addEventListener('click', () => {
    displayData();
})

