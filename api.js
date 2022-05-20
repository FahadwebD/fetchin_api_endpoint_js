console.log('connected')

const fetchingDetail =(id)=>{

   
    fetch(`https://gorest.co.in/public/v1/users/${id}`)
    .then(res=> res.json())
    .then(data => showDetail(data))
}
const showDetail = (data)=>{
    console.log(data.data)
    const sec = document.getElementById('main');
    const newItem = document.createElement('div')
        newItem.innerHTML =`<div class="card-body">
              <h5>${data.data.name}</h5>
            
        </div>`
    sec.appendChild(newItem)

}
document.getElementById('search-btn').addEventListener('click' , function() {
    
    const inputV = document.getElementById('input-field').value
    fetchingDetail(parseInt(inputV))

})

