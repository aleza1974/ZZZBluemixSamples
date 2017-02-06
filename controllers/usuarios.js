console.log("### controllers/usuarios.js ==> INICIO ###");
console.log("### controllers/usuarios.js ==> #001");
var moment			= require('moment');

module.exports = function(app){
	console.log("### controllers/usuarios.js ==> #002");
	var Usuario = app.models.usuarios;
	
	console.log("### controllers/usuarios.js ==> #003");
	var UsuarioController = {
		zzzcrudmongodb: function(req, res) {
				console.log("### controllers/usuarios.js ==> #003 index " + app.mountpath);
			    res.render('home/ZZZCRUDMongoDb');
			},
		voltar: function(req, res) {
				console.log("### controllers/usuarios.js ==> #003 index " + app.mountpath);
				res.render('home/index');
			}
	}
	
	console.log("### controllers/usuarios.js ==> #004");
	return UsuarioController;

}

console.log("### controllers/usuarios.js ==> #005");
console.log("### controllers/usuarios.js ==> FINAL ###");

