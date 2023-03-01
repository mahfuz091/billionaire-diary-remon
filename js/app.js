const loadUserRandom =()=>{
    const url =    `https://forbes400.onrender.com/api/forbes400?limit=3`
    fetch("json/getallBilioner.json")
    .then(res=>res.json())
    .then(data=>showUserRandom(data))
}
const showUserRandom =(data)=>{
    
    const randomUser = getMultipleRandom(data, 3)
    // console.log(randomUser);
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = `
    <thead>
        <td>Person</td>

        <td>CityZenship</td>

        <td>Industry</td>

        <td>Rank</td>

        <td>Welth</td>
    </thead>
    <tfoot>
        <td>Total</td>
        <td></td>
        <td></td>
        <td></td>



        <td id="total"></td>
    </tfoot>
    `
    let amount = 0;
    randomUser.forEach(bilioner=>{
        // console.log(bilioner.finalWorth)
        tableContainer.innerHTML+=`
        <tr>
            <td>${bilioner.person.name}</td>
            <td>${bilioner.countryOfCitizenship}</td>
            <td>${bilioner.industries[0]} <i onclick="loadSingleBilioner(${bilioner.rank})" data-bs-toggle="modal" data-bs-target="#bilionerModal" class="fas fa-eye"></i></td>
            <td>${bilioner.rank}</td>
            <td>${bilioner.finalWorth.toFixed(2)}</td>
            </tr>
            
            
            
        
        `;
        amount += bilioner.finalWorth ;
        // console.log(amount)
        
    })
    

    
        document.getElementById("total").innerText= amount.toFixed(2);

}
function getMultipleRandom(items, num) {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }

const loadSingleBilioner= (id) =>{
    fetch("json/getallBilioner.json")
    .then(res=>res.json())
    .then(data=>showUniqueUserData(data, id))

  }
  const showUniqueUserData=(data, id)=>{
    // console.log(data, id)

    let result = data.find(item => item.rank=== id);
    console.log(result.birthDate)
    const date = new Date(result.birthDate);
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const bitrthday = month[date.getMonth()] +", "+ date.getDate() + " " + date.getFullYear()

    
  
   
    const modalBody = document.getElementById("modal-bilioner");
    modalBody.innerHTML="";
    modalBody.innerHTML += `
    
            <div class="modal-content">
                <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                <h1 class="bilioner-title">${result.person.name}</h1>
                <h5 class="bilioner-sub-title">Biography</h5>
                <p class="bilioner-description">Jeff Bezos founded e-com… chairman in July 2021. He now owns a bit less than 10% of the company. He and his wife MacKenzi…6% Amazon stake to her. Bezos has donated more t… received those shares. Bezos owns The Washingto…ce in one in July 2021. Bezos said in a November…sing specific details.</p>

                <div class="modal-body d-flex gap-4 mx-auto">
                    <div >
                        <img class="modal-img" src="${result.squareImage}" alt="">
                        <div class="modal-source">
                            <p>Source: <span>Amazon</span></p>
                        </div>
                    </div>
                    <div>
                        <div class="general-info">
                            <h2>General Information</h2>
                            <hr>
                            <p>Citizenship: <span>${result.countryOfCitizenship}</span></p>
                            <p>State: <span>${result.state}</span></p>
                            <p>City: <span>${result.city}</span></p>
                            <p>Birthday: <span>${bitrthday}</span></p>
                            <p>Gender: <span>${result.gender}</span></p>


                        </div>
                        <div class="financial-info">
                            <h2>Financial Information</h2>
                            <hr>
                            <p>Exchange: <span>${result.financialAssets? result.financialAssets[0].exchange : "no data available"}</span></p>
                            <p>Ticker: <span>${result.financialAssets? result.financialAssets[0].ticker : "no data available"}</span></p>
                            <p>Total Shares: <span>${result.financialAssets? result.financialAssets[0].numberOfShares : "no data available"}</span></p>
                            <p>Share Price: <span>${result.financialAssets? result.financialAssets[0].sharePrice :"no data available"}</span></p>


                        </div>
                    </div>
                </div>

            </div>
        
    `
  }
const richestByIndustry =()=>{
    window.location.href = "index2.html"
}

