function Forms (){

    return(

        <>

            <h3>Registro:</h3><br />

            <form style={{display:"flex",flexDirection:"column"}}>

                <label htmlFor="nombres">Ingrese sus nombres:</label>
                <input type="text" name="nombres" id="nombres" required /><br />

                <label htmlFor="apellido">Ingrese sus apellidos:</label>
                <input type="text" name="apellidos" id="apellidos" required /><br />

                <label htmlFor="correo">Ingrese su correo:</label>
                <input type="email" name="correo" id="correo" required /><br />

                <label htmlFor="contraseña">Ingrese su contraseña:</label>
                <input type="password" name="contraseña" id="contraseña" required /><br />

                <input type="submit" value="Enviar Datos" />    
            
            </form>        

        </>        

    );

}//Fin componente Footer

export default Forms;