//import fetch from "node-fetch"
import axios from 'axios'


async function buscarDados () {
    const response = await fetch('https://api.adviceslip.com/advice')

    const dados = await response.json()
    console.log(dados)
}

async function buscarDadosAxios () {
    const response = await axios.get('https://api.adviceslip.com/advice')

    console.log(response.data)
}

async function buscarRickyAxios () {
    const id = 73;
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)

    console.log(response.data)
}

async function traduzirYoda () {
    const body = { text: 'Hello my friend!'};

    const response = await fetch(`https://api.funtranslations.com/translate/yoda`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json'}
 } )

    const data = await response.json();
    console.log(data);
}

async function traduzirYodaAxios () {
    const body = { text: 'Hello my friend!'};
    const response = await axios.post(`https://api.funtranslations.com/translate/yoda`, body) 
    console.log(response.data)
   
}


async function teste() {
    setInterval(() =>{
        axios.get("https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT")
        .then(response => console.log(response.data.price))
        .catch(error => console.log(error))
    }, 1000)
}
teste()