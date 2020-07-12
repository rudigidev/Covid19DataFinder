const main = () => {

   const buttonCari = document.querySelector('#btn-cari');
   const tempatData = document.querySelector('#country-data');
   buttonCari.addEventListener('click', getAPI);
   function getAPI(){

      const inputCountry = document.querySelector('#select');
      fetch('https://covid19.mathdro.id/api/countries/' + inputCountry.value)
         .then(response => response.json())
         .then (data => {
            let output = '';
            console.log(data);
               output += 
               `
               <div class="country-container">
                <h2>${inputCountry.value}</h2>
            </div>
                <div class="container-list-data" id="positif">
                    <p>Positif (Positive)</p>
                    <p class="angka">${data.confirmed.value}</p>
                    <p>Orang</p>
                </div>
                <div class="container-list-data" id="sembuh">
                    <p>Sembuh (Recovered)</p>
                    <p class="angka">${data.recovered.value}</p>
                    <p>Orang</p>
                </div>
                <div class="container-list-data" id="meninggal">
                    <p>Meninggal (Deaths)</p>
                    <p class="angka">${data.deaths.value}</p>
                    <p>Orang</p>
                </div>
               `
           
            tempatData.innerHTML = output;
         })
         
         
      }//getAPI

   } //main

export default main;