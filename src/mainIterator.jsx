import Main from './main';

const pirates = [

    {
  
      "name" : "Luffy",
      "pirateRole" : "Capitán",
      "img" : "https://cdn.alfabetajuega.com/wp-content/uploads/2018/10/alfabetajuega_luffy.jpg"
  
    },
  
    {
  
      "name" : "Nami",
      "pirateRole" : "Navegante",
      "img" : "https://cdn.alfabetajuega.com/wp-content/uploads/2020/10/nami-one-piece-1.jpg"
  
    },
  
    {
  
      "name" : "Zoro",
      "pirateRole" : "Luchador",
      "img" : "https://cdn.alfabetajuega.com/wp-content/uploads/2021/02/zoro-abj.jpg"
  
    },
  
    {
  
      "name" : "Ussop",
      "pirateRole" : "Ingeniero",
      "img" : "https://tierragamer.com/wp-content/uploads/2019/09/One-Piece-Usopp.jpg"
  
    },
  
    {
  
      "name" : "Sanji",
      "pirateRole" : "Cocinero",
      "img" : "https://cdn.alfabetajuega.com/wp-content/uploads/2021/02/sanji.jpg?width=1200&aspect_ratio=1200:631"
  
    },
  
    {
  
      "name" : "Chooper",
      "pirateRole" : "Doctor",
      "img" : "https://cdn.alfabetajuega.com/wp-content/uploads/2021/02/chopper.jpeg?width=1200&aspect_ratio=1200:631"
  
    },
  
    {
  
      "name" : "Robin",
      "pirateRole" : "Espía",
      "img" : "https://laverdadnoticias.com/__export/1599673186733/sites/laverdad/img/2020/09/09/nico_robin_one_piece.png_554688468.png"
  
    }
  
  ]

const MainIterator = () => (

    <>

        {

            pirates.map( c => <Main name={c.name} pirateRole={c.pirateRole} img={c.img}/>)

        }

    </>

);

export default MainIterator;