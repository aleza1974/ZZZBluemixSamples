console.log("### routes/usuarios.js ==> INICIO ###");
console.log("### routes/usuarios.js ==> #001");

module.exports = function(app){

	const url = require('url');
	console.log("### $$$$$$$$$$$$$$$$$$ ###" + url);
	console.log("### $$$$$$$$$$$$$$$$$$ ###" + url);
			
	console.log("### routes/usuarios.js ==> #002");
	var usuarios = app.controllers.usuarios;
	
	console.log("### routes/usuarios.js ==> #009 app.get /ZZZCRUDMongoDb");

	app.get("/ZZZCRUDCloudantDb", usuarios.zzzcrudcloudantdb);

	app.get("/ZZZCRUDMongoDb", usuarios.zzzcrudmongodb);

	app.get("/ZZZFacebook", usuarios.zzzfacebook);

	app.get("/ZZZLDAPIBM", usuarios.zzzldapibm);

	app.get("/ZZZLinkedIn", usuarios.zzzlinkedin);

	app.get("/ZZZVoltar", usuarios.voltar);

	console.log("### routes/usuarios.js ==> #011");
}

console.log("### routes/usuarios.js ==> #011");
console.log("### routes/usuarios.js ==> FINAL ###");

