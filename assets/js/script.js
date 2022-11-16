var slider = document.getElementById("myRange");
var output = document.getElementById("output");
output.innerHTML = slider.value; // Displays default slider value

slider.oninput = function() {
    output.innerHTML = this.value;
}

const getContent = (search) => {
    const url = new URL('https://api.api-ninjas.com/v1/caloriesburned?Duration=');
    var rangeValue = sliderValue.value;
    const params = { Duration: rangeValue};
    url.search = new URLSearchParams(params);
    fetch(url, {method: 'POST' })
        .then{results => results.json()}
        console.log(results)
};