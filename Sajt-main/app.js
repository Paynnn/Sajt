fetch("shop.json")
.then(response=>response.json)
.then(data=>
    {
        for(p of data)
        {
            prikaziProizvode(p)
        }
    })

function prikaziProizvode(proizvodi) {
  var container = document.getElementById('proizvodi-container');
  
  proizvodi.forEach(function(proizvod) {
    var proizvodElement = document.createElement('div');
    proizvodElement.textContent = proizvod.naziv + ' - ' + proizvod.cena + ' kn';
    
    container.appendChild(proizvodElement);
  });
}