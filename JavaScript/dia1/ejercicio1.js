var Factura = {
	Emisosr : {
		nombre : "Luis Angel Cardenas",
		rfc : "CAOL860818",
		direccion : "Paseo de la Reforma No. 240"
	},
	Cliente : {
		nombre : "Manuel Madrid Ortega",
		rfc : "MAOM881205",
		direccion : "Norte 45 No. 234"
	},
	Partidas : [
		{descripcion : "Engramadora modelo 3432IOI88", cantidad : 24, precio : 45.99}, 
		{descripcion : "Grapas estandar marca Pilot", cantidad : 25, precio : 14.78}, 
		{descripcion : "Hoja papel bond 95", cantidad : 2, precio : 1004.87}
		],
	iva : 16,
	subtotal : 0,
	total : 0,
	calcularSubtotal : function() {
		var subtotal = 0.0;
		this.Partidas.forEach(function(partida) {
		    subtotal += partida.cantidad * partida.precio
		});
		this.subtotal = subtotal;
		return subtotal;
	},
	calcularTotal : function() {
		var subtotal = this.calcularSubtotal();
		var total = subtotal + (subtotal * (this.iva / 100));
		this.total = total;
		return total;
	}
}