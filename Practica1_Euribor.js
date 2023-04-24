<<<<<<< HEAD

console.log("estamos enpezando")


d3.json("evolucion_del_euribor_mensual.json").then(function (datos) {
      
    console.log("datos cargados")
     
      window.datosglobal = datos
    
    // Vamos a crear listas con D3
    
    var elementoUl = d3.select ("body").append("ul")
    elementoUl
        .selectAll ("li") // seleccion de tantas li como haga falta
        .data(datos) // JOIN
        .enter ()
        .append ("li")
        .text (function (d) {return d.Agno})
    
    var elementoUl2 = d3.select ("body").append("ul2")
    elementoUl2
        .selectAll ("li") // seleccion de tantas li como haga falta
        .data(datos) // JOIN
        .enter ()
        .append ("li")
        .text (function (d) {return d.Periodo})
    
    var elementoUl3 = d3.select ("body").append("ul3")
    elementoUl3
        .selectAll ("li") // seleccion de tantas li como haga falta
        .data(datos) // JOIN
        .enter ()
        .append ("li")
        .text (function (d) {return d.Parametro})
    
    var elementoUl4 = d3.select ("body").append("ul4")
    elementoUl4
        .selectAll ("li") // seleccion de tantas li como haga falta
        .data(datos) // JOIN
        .enter ()
        .append ("li")
        .text (function (d) {return d.Valor})
    
    var elementoUl5 = d3.select ("body").append("ul5")
    elementoUl5
        .selectAll ("li") // seleccion de tantas li como haga falta
        .data(datos) // JOIN
        .enter ()
        .append ("li")
        .text (function (d) {return d.Estado})
    
    var elementoUl6 = d3.select ("body").append("ul6")
    elementoUl5
        .selectAll ("li") // seleccion de tantas li como haga falta
        .data(datos) // JOIN
        .enter ()
        .append ("li")
        .text (function (d) {return d.Notas})
    
=======

console.log("estamos enpezando")


d3.json("evolucion_del_euribor_mensual.json").then(function (datos) {
      
    console.log("datos cargados")
     
      window.datosglobal = datos
    
    // Vamos a crear listas con D3
    
    var elementoUl = d3.select ("body").append("ul")
    elementoUl
        .selectAll ("li") // seleccion de tantas li como haga falta
        .data(datos) // JOIN
        .enter ()
        .append ("li")
        .text (function (d) {return d.Agno})
    
    var elementoUl2 = d3.select ("body").append("ul2")
    elementoUl2
        .selectAll ("li") // seleccion de tantas li como haga falta
        .data(datos) // JOIN
        .enter ()
        .append ("li")
        .text (function (d) {return d.Periodo})
    
    var elementoUl3 = d3.select ("body").append("ul3")
    elementoUl3
        .selectAll ("li") // seleccion de tantas li como haga falta
        .data(datos) // JOIN
        .enter ()
        .append ("li")
        .text (function (d) {return d.Parametro})
    
    var elementoUl4 = d3.select ("body").append("ul4")
    elementoUl4
        .selectAll ("li") // seleccion de tantas li como haga falta
        .data(datos) // JOIN
        .enter ()
        .append ("li")
        .text (function (d) {return d.Valor})
    
    var elementoUl5 = d3.select ("body").append("ul5")
    elementoUl5
        .selectAll ("li") // seleccion de tantas li como haga falta
        .data(datos) // JOIN
        .enter ()
        .append ("li")
        .text (function (d) {return d.Estado})
    
    var elementoUl6 = d3.select ("body").append("ul6")
    elementoUl5
        .selectAll ("li") // seleccion de tantas li como haga falta
        .data(datos) // JOIN
        .enter ()
        .append ("li")
        .text (function (d) {return d.Notas})
    
>>>>>>> 2226939f1b2052007c26b8a9edb1b934ee91fb70
   })