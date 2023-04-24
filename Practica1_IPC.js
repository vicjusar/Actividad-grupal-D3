console.log("estamos enpezando")
d3.json("http://output.jsbin.com/lixujex/1.js").then (function(datos){
  
    console.log("datos cargados")
     
    var height = 1000
    var width  = 800
    
    var escalaX = d3.scaleLinear()
        .domain([0,10])
        .range (["40","500"])
    var escalaY = d3.scaleLinear()
        .domain (d3.extent (datos, d=> d.votantes))
        .range (["675","40"])
    var escalaTamanio = d3.scaleLinear()
        .domain(d3.extent (datos, d=> d.votantes))
        .range ([8,30])
    var escalaColor = d3.scaleLinear()
        //.domain([0,10])
        .domain (d3.extent (datos,d=> d.mediaAutoubicacion))
        .range (["red","blue"])
    
    // Vamos a crear grafico SVG
    
    var elementoSVG = d3.select ("body")
    
    // Introducir todas los circulos neesarios
    
    elementoSVG
        .append("svg")
        .attr("width",width)
        .attr("height", height)
        .selectAll ("circle") // seleccion de tantos circulos como haga falta
        .data(datos) // JOIN
        .enter ()
        .append ("circle")
    
        //.attr("r", 10)
        .attr("r", d=>escalaTamanio(d.votantes))
        //.attr("cx",d=>d.mediaAutoubicacion)
        //.attr("cx",100)
        .attr("cx",d=>escalaX(d.mediaAutoubicacion))
        //.attr("cy",d=>d.votantes)
        .attr("cy", d=>escalaY(d.votantes))
        .attr("fill", d=> escalaColor(d.mediaAutoubicacion))
    
})