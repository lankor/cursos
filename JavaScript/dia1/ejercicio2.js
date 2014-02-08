var Factura = function (data) {
	this.cliente = data.cliente;
	this.partidas = data.lista;
}

Factura.prototype.emisor = {
	nombre : "Luis Angel Cardenas",
	rfc : "CAOL860818",
	direccion : "Paseo de la Reforma No. 240"
}

var Partida = function(cantidad, descripcion, precio) {
	this.cantidad = cantidad;
	this.precio = precio;
	this.descripcion = descripcion;
}

Partida.prototype.importe = function() {
	return this.cantidad * this.precio;
}


var Cliente = function(nombre, rfc, direccion) {
	this.nombre = nombre;
	this.rfc = rfc;
	this.direccion = direccion;
}

Factura.prototype.iva = 16;
Factura.prototype.calcularSubtotal = function() {
	var subtotal = 0;
	this.partidas.forEach(function(partida) {
		subtotal += partida.importe();
	});

	this.subtotal = subtotal;
	return this.subtotal;
}

Factura.prototype.calcularTotal = function() {
	var subtotal = this.calcularSubtotal();
	this.total = subtotal * (1 + (this.iva / 100));
	return this.total;
}

var partidas = [new Partida(1, "Articulo 1", 150), 
				new Partida(324, "Articulo 2", 13.56), 
				new Partida(23, "Articulo 3", 34.22), 
				new Partida(923, "Articulo 4", 2.45), 
				new Partida(8932, "Articulo 5", 0.32)];

var cliente = new Cliente("Sarahi Buendia Castro", "BUCS870326", "Legaria #443");
var factura = new Factura({cliente : cliente, lista : partidas, descuento : 34});



var factura2 = new Factura({cliente : cliente, lista : partidas, descuento : 34});
document.write(factura.emisor.nombre + "<br />");
Factura.prototype.emisor = {
	nombre : "Pablo Cruz Santos",
	rfc : "CUSP860818",
	direccion : "Otra direccion  240"
}

var factura3 = new Factura({cliente : cliente, lista : partidas, descuento : 34});
document.write(factura2.emisor.nombre + "<br />");
document.write(factura3.emisor.nombre + "<br />");

















