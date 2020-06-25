<?php

    //conexion con la base de datos y el servidor
    $link = mysql_connect("localhost","id12844772_welio","medina3407") or die("<h2>No se encuentra el servidor</h2>");
	$db = mysql_select_db("id12844772_service",$link) or die("<h2>Error de Conexion</h2>");

  
    //obtenemos los valores del formulario
    $email = $_POST["email"];
    $nombre = $_POST["nombre"];
    $mensaje = $_POST["mensaje"];
    
    //envio de email al destino seleccionado
    
    $destino = "welios2015@gmail.com";
    
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $email . "\nAsunto: " . $mensaje;
    mail($destino, "Contacto", $contenido);
    
    //ingresamos la informacion a la base de datos
    mysql_query("INSERT INTO contacto VALUES(NULL,'$email','$nombre','$mensaje')",$link) or die("<h2>Error Guardando los datos</h2>". mysql_error());
	echo'
		<script>
			alert("Envio Exitoso");
			location.href="index.html";
		</script>
		'

?>