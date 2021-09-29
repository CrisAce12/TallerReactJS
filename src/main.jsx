function Main({name, pirateRole,img}){

    return(

        <>

            <img src={img} alt="No se ha podido cargar la imágen." />
            <p>{name}</p>
            <p>{pirateRole}</p>

        </>

    );

};

export default Main;