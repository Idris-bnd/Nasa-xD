fetch('https://api.nasa.gov/planetary/apod?api_key=jreafeoA0At21LTlnQXnx8vCnKgsrLR1JJwhIkGl')
.then((res)=> res.json())
.then((data)=> {
    console.log(data);

    document.body.innerHTML = 
    `
    <h1>Picture of the day : '${data.title}' </h1>
     
    <div class="top">

    <img class="picday" src=${data.url}>
         <div class="topright">
            <p>Description : ${data.explanation}</p>
            <p class="aut">Author : ${data.copyright} / Date : ${data.date}</p>
         </div>
            
    </div>


    <img class="un" src="logo-nasa.png">
    <img class="deux" src="logo-nasa.png">
    <img class="trois" src="logo-nasa.png">

    `
})