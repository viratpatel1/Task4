var vp = new XMLHttpRequest();
vp.open('GET', 'https://restcountries.eu/rest/v2/all', true)
vp.send();
vp.onload = function () {
    var country = JSON.parse(this.response);
    // for(var i in country){
    // var cname = country[i].name;
    // var reg = country[i].region;

    //Country in Asia
    var Asian_country = country.filter(x => x.region === "Asia");
    console.log(Asian_country);
    
    // Population under 20000
    var country_popu = country.filter(x => x.population < 200000);
    console.log(country_popu);
    
    //Country name,capital,flag
    country.forEach(element => {
        console.log(`${element.name} - ${element.capital} - ${element.flag}`);
    });

     //Total Population
    var total = country.reduce((sum,cv) => sum + cv.population,0);
    console.log(`Total no. of Population is ${total}`);

    //US Dollar 
    var dollar = country.filter((x) => {
        for(var i in x.currencies){
            if(x.currencies[i].code === "USD"){
                return true;
            }
        }
    })
    console.log(dollar)
}
