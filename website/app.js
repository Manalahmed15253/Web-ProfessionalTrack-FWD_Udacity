/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=935425323f9d847699b7efe9c9185bce'+'&units=metric';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();
//EventListner
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
    const zipCode =  document.getElementById('zip').value;
    const ur = document.getElementById('feelings').value;
    if (zipCode == '')
    {
        alert('Enter zip code');
    }
    else {
        getWeather(baseURL, zipCode, apiKey).then(function (data) {
            postData('/addUserComment', {temperature: data.main.temp, date: newDate, UserResponse: ur}).then(function (data){
                updateUI();
            })
        })
    }
}
//Async_GET
const getWeather = async (baseURL, code, key)=> {

    const res = await fetch(baseURL + code + key)
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
};
//Async_POST
const postData = async ( url = '', data = {})=>{
    const response = await fetch( url , {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    try {
        const newData = await response.json();
        return newData;
    }catch(error) {
        console.log("error", error);
    }
}

//UpdateUI
const updateUI = async () => {
    const request = await fetch('/all')
    try{
        const allData = await request.json();
        const length = allData.length;
        console.log(allData[length-1]);
        document.getElementById('date').innerHTML = allData[length-1].date;
        document.getElementById('temp').innerHTML = allData[length-1].temperature;
        document.getElementById('content').innerHTML = allData[length-1].UserResponse;
    }
    catch(error){
        console.log("error",error)
    }
}
