<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/inscribirse.css">
    <title>Document</title>
</head>
<body>

    <div class="contenedor">
        <img class="logo-login" src="../assets/img/logo terrestre.png" alt="">

        <form class="form">
            <h1>Inscribirse</h1>

            <div class="content-user">
                
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre">
      
                    <input type="text" name="apellido" id="apellido" placeholder="Apellido">

            </div>


            <span class="input-span">
               
                <input type="email" name="email" id="email" placeholder="Email">
            </span>

            <span class="input-span">
               
                <input type="password" name="password" id="password" placeholder="Contraseña">
            </span>
            <span class="input-span">
               
               <input type="password" name="password" id="confirPassword" placeholder="Confirmar contraseña">
           </span>

            <input class="submit" type="submit" value="Log in" />
            <span class="span">¿Ya tienes una cuenta? <a href="#">Iniciar secion</a></span>
        </form>
    </div>
    
</body>
</html>