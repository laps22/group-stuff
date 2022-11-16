var darkToggle = document.querySelector('#darkToggle');

// dark mode / hopefully explicit filter later on
darkToggle.addEventListener('click', ()=> {
  document.body.classList.toggle('dark');
})

// Slider for quantity of songs requested
var sliderValue = document.getElementById("myRange");
var output = document.getElementById("slideOutput");
output.innerHTML = sliderValue.value;

sliderValue.oninput = function() {
  output.innerHTML = this.value;
}

const searchElem = document.querySelector('#search');
searchElem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        getContent(searchElem.value)
    }
});

const getContent = (search) => {
    const url = new URL('https://itunes.apple.com/search');
    var rangeValue = sliderValue.value;
    const params = { term: search, media: 'music', limit: rangeValue  };
    url.search = new URLSearchParams(params);
    fetch(url, { method: 'POST' })
        .then(results => results.json())
};


