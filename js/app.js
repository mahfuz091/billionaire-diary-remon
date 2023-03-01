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
            <td>${bilioner.industries[0]} <i onclick="loadSingleBilioner()" class="fas fa-eye"></i></td>
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

const loadSingleBilioner= () =>{
    fetch("json/getallBilioner.json")
    .then(res=>res.json())
    .then(data=>showUDataUser(data))

  }
  const showUDataUser=data=>{
    // console.log(data.rank)
    data.forEach(user=>{
        console.log(user[0])  
    })
  }

const loadRichestByIndustry= () =>{
    

  }