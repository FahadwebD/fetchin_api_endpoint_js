console.log('connected')

const fetchingDetail =()=>{


    fetch(`https://gorest.co.in/public/v1/users/${id}`)
    .then(res=> res.json())
    .then(data => console.log(data))
}



