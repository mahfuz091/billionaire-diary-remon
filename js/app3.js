const loadRichestByStates= () =>{
    
    fetch("json/states.json")
    .then(res=>res.json())
    .then(data=>showRichestByStates(data))

  }
  const showRichestByStates=(data) => {
    // console.log(data)
    const sliceData = data.slice(0, 9)
    console.log(sliceData)
    const cardContainer = document.getElementById('card-container')
    sliceData.forEach(singleBilioner => {
        console.log(singleBilioner)
        cardContainer.innerHTML += `
        <div class="col">
                <div class="card mb-3">
                    <div class=" row g-2">
                        <h2 class="text-center c-title">${singleBilioner? singleBilioner.person.name : "No Data"}</h2>
                        <div class="col-4">
                            <img src="${singleBilioner.squareImage}" class="img-fluid px-2  c-img"  alt="...">
                        </div>
                        <div class="col-8">
                            <div class="card-body mb-4">
                                <p>Citizenship: <span>${singleBilioner.countryOfCitizenship}</span></p>
                                <p>State: <span>${singleBilioner.state}</span></p>
                                <p>City: <span>${singleBilioner.city}</span></p>
                                <p>Total Share: <span>${singleBilioner.financialAssets? singleBilioner.financialAssets[0].numberOfShares : "No data"}</span></p>
                                <p>Share Price: <span>$${singleBilioner.financialAssets? singleBilioner.financialAssets[0].sharePrice : "No data"}</span></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        `

    })
  }
  loadRichestByStates();

  const loadPreviousPage=()=>{
    window.location.href = "index.html"
  }