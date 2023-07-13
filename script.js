//variables
const apiKey = `5cc9555e0d6e45f7b75184320230607`;
const button = document.querySelector('#submitButton');
const result= document.querySelector('.result');

//event handlers
button.addEventListener('click', async() => {
    const input = document.querySelector("#textInput").value;
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}&aqi=no`);
    const cityName= response.data.location.name;
    const tempF=response.data.current.temp_f;
    const tempC=response.data.current.temp_c;
    const condition=response.data.current.condition.text;
    const icon=response.data.current.condition.icon; 

//result div
    result.innerHTML=
    `<h1 id="location">The temperature in ${cityName} today is ${tempF} Fahrenheit and ${tempC} Celcius. 
    It is ${condition}! <img src="${icon}"> </h1> `
})