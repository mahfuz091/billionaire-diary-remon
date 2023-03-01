const loadRichestByIndustry= () =>{
    
    fetch("json/technology.json")
    .then(res=>res.json())
    .then(data=>showRichestByIndustry(data))

  }
  const showRichestByIndustry=(data) => {
    // console.log(data)
    const sliceData = data.slice(0, 9)
    const cardContainer = document.getElementById('card-container')
    sliceData.forEach(singleBilioner=>{
        console.log(singleBilioner)
        cardContainer.innerHTML += `
        <div class="col">
                <div class="card mb-3">
                    <div class=" row g-2">
                        <h2 class="text-center c-title">${singleBilioner.person.name}</h2>
                        <div class="col-md-4">
                            <img src="${singleBilioner.squareImage}" class="img-fluid px-2  c-img" ; alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body mb-4">
                                <p>Citizenship: <span>${singleBilioner.countryOfCitizenship}</span></p>
                                <p>State: <span>${singleBilioner.state}</span></p>
                                <p>City: <span>${singleBilioner.city}</span></p>
                                <p>Total Share: <span>${singleBilioner.financialAssets[0].numberOfShares}</span></p>
                                <p>Share Price: <span>$${singleBilioner.financialAssets[0].sharePrice}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        `

    })
  }
  loadRichestByIndustry()
  const loadPreviousPage=()=>{
    window.location.href = "index.html"
  }