fetch("https://www.farmmarketid.com/api/v1/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "07045e9957mshf4496ad27a09b73p1d48c1jsn089b276ed9f0",
		"x-rapidapi-host": "newscatcher.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(data => {
	console.log(data.articles);         //display data into console

    document.getElementById('myData').innerHTML = data.articles   //display data into html page
    .map((news) => {
        return `
          <div class="container">
             <p class="author"> ${news.author} </p>
             <h3> ${news.title} </h3>
             <p> ${news.summary} </p>
          </div>
        
        `
    })
    .join('');
    
    // the more you stare at the code , the more it becomes understandable

})

.catch(err => {
	console.error(err);
});



