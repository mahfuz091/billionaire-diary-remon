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
        console.log(singleBilioner.squareImage)
        cardContainer.innerHTML += `
        <div class ="col">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
            <img src="${singleBilioner.squareImage}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
        
        `

    })
  }
//   loadRichestByIndustry()