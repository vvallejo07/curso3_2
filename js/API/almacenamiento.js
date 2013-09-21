// Almacenamiento
function altaUsuario(){
	window.localStorage.setItem('usuario',$('#regNom').val());
}

function usuarioExiste(){
	if(window.localStorage.getItem('usuario') != undefined)
		return true;
	else
		return false;	
}

function accesoBD(){
	var db = window.openDatabase("hotel", "1.0", "Hotel DB", 2000000);	
	return db;
}

function guardarReserva(th,pr,ha,di){
	alert(th);
	accesoBD().transaction(function(tx){
			tx.executeSql('CREATE TABLE IF NOT EXISTS reservas (id unique, th, pr, ha, di)');
			ts.executeSql('INSERT INTO reservas (th, pr, ha, di) VALUES ("'+th+'","'+pr+'","'+ha+'","'+di+'")');
		},function(err){
			alert('Error: ' + err.code);
		}, function(){
			navigator.notification.alert('Esperando Conexión a Internet',null,'Datos Guardados','Aceptar');	
		})
}