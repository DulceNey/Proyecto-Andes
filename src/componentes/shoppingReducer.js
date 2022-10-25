import { TYPES } from "./acciones";
import axios from "axios";
//import img1 from "../multimedia/minitreking.jpg";
// import img2 from "../multimedia/navegacion1.jpg";
// import img3 from "../multimedia/pasarelas.jpg";
// import img4 from "../multimedia/cabalgatas.jpg"

export const shoppingInitialState={
    products:[
        {
            id:1,
            // imagen:img1,
            nombre: "Minitrekking",
            texto:"La excursión comienza con la búsqueda de los pasajeros en El Calafate.Una vez en el puerto se embarca para cruzar el Lago Rico, llegando a la costa opuesta.A partir de aquí iniciaremos el recorrido con una caminata por la costa del lago y con la vista posada en el glaciar para no perdernos la oportunidad de ver desprendimientos.Al llegar al borde del glaciar, se organizarán subgrupos de máximo 20 personas  y se les colocarán los crampones y cascos provistos por la empresa.Durante la caminata se podrá apreciar una variedad de formaciones  como profundas grietas, sumideros azules, enormes seracs y lagunas turquesas.Al finalizar la caminata sobre el hielo, se recorrerá la zona periglaciar. Luego, se emprenderá el regreso por un sendero que atraviesa el exuberante bosque andino patagónico.La duración de la excursión con el traslado es de alrededor de diez horas en total e incluye la visita guiada de una hora aproximadamente a las pasarelas del Glaciar Perito Moreno",
            textoCorto:"Es la excursión más completa  al incluir el trekking sobre el hielo, una caminata por la costa del lago y una navegación por la pared sur del glaciar y la visita a las pasarelas",
            precio:"28.000",
                
        },
        {
            id:2,
            //imagen:img2,
            nombre:"Excursion nautica",
            texto:"La excursión comienza en el puerto , a una hora y media de El Calafate y a solo 7km del Glaciar.  una vez allí, se embarcará para navegar por el Lago Rico, donde se podrá apreciar la impresionante pared de hielo del Glaciar Perito Moreno y los témpanos que provienen de él.Esta navegación tiene una duración de una hora  A 400 metros de la pared sur del Glaciar Perito Moreno, el barco se detiene por unos minutos para poder observar más detalladamente el paisaje. El Safari Náutico es una navegación apta para todas las edades y se puede realizar los 365 días del año.  Esta excursión está orientada a personas que quieren contemplar la magia del hielo e inmortalizarla en la memoria, observando cada detalle de la pared de hielo y su entorno.",
            textoCorto:"Es una de las navegaciones más importantes en la zona al visitar los glaciares Upsala y Spegazzini combinándolo con un descenso en el bosque y disfrutar de una vista excepcional",
            precio:"8.500",
           
        },
        {
            id:3,
            //imagen:img3,
            nombre:"Pasarelas",
            texto:"Es una excursión ideal para visitar las pasarelas del Glaciar Perito Moreno desde El Calafate sin exigencias físicas y con amplio tiempo para recorrer los balcones con tranquilidad y al ritmo de cada persona,Nuestra excursión al glaciar inicia a las 7:00 a.m. desde su hotel en El Calafate, con diversas paradas en puntos panorámicos dentro del Parque Nacional y la visita a las pasarelas, punto panorámico culminante. El recorrido desde El Calafate hasta el glaciar es una sucesión de lagos, arroyos, bosques y montañas nevadas y se arribará al extremo oeste de la Península de Magallanes, desde donde se inicia la caminata por las pasarelas con una extensión total de 5.5 km. Las mismas están a distintos niveles y permiten contemplar el Perito Moreno desde diferentes perspectivas y balcones. Tendrán aproximadamente 5 horas para visitar las pasarelas y maravillarse con el Glaciar Perito Moreno desde su frente. Como servicio opcional, podrá incluir una navegación complementaria de una hora de duración frente a la pared norte del glaciar.",
            textoCorto:"Excursión clásica para visitar sin exigencias físicas el Glaciar Perito Moreno con amplio tiempo para recorrer sus balcones con tranquilidad al ritmo de cada persona y acompañado de un guia",
            precio:"7.000",
            
        },
        {
            id:4,
            //imagen:img4,
            nombre:"Cabalgatas",
            texto:"La Cabalgata Larga es una excursión bordeando la costa del Lago Argentino a caballo mientras se aprecian vistas de la Cordillera de los Andes y los alrededores. La excursión inicia desde El Calafate cuando son buscados por su hotel a las 11:00 a.m. y trasladados hasta los corrales donde los caballos esperan. Al iniciar el recorrido de 2 horas y media, se atraviesa el paisaje de la estepa patagónica con los típicos arbustos mustios y achaparrados, tales como el coirón, la mata negra, neneo, mata gris, paramela, etc. Avanzando en el paseo, se alcanzan terrenos de altura, teniendo una vista privilegiada del extenso Lago Argentino y, en el punto mas alto del recorrido, se logra divisar la entrada de la Garganta del Diablo, inicio del Brazo Norte del Lago Argentino, por el cual se llega al Glaciar Upsala.También, se podrán encontrar aves que anidan en la zona y ver flores silvestres.retornarán a su hotel en El Calafate a las 2:00 p.m.",
            textoCorto:"Esta cabalgata recorre los alrededores de la famosa Estancia Alice, a 22 km de la ciudad de El Calafate frente al Lago Argentino.",
            precio:"13.000",
                   
        }
        ],

    cart:[ ],

}

  

//   const getData= async()=>{
    
//     const res= await axios.get("http://localhost:8080/excursiones");
//     const json= await res.data
//     shoppingInitialState(json)}


  
export function shoppingReducer(state,acciones) {
    switch (acciones.type) {
        case TYPES.ADD_TO_CART:{
            let newItem=state.products.find(product=>product.id===acciones.payload)

            const itemCargado=state.cart.find(item=> item.id===newItem.id);

            return itemCargado 
            ?{
                ...state,
                cart:state.cart.map(item=>
                    item.id===newItem.id
                    ?{...item,cantidad:item.cantidad + 1}
                    : item
                ) ,                 
            } 
            :{
                ...state,
                cart:[...state.cart,{...newItem,cantidad:1}]
            }
        };

        case TYPES.REMOVE_ONE_PRODUCT:{
          let itemAEliminar=state.cart.find(item=>item.id===acciones.payload)

            return itemAEliminar.cantidad > 1
            ?{
                ...state,
                cart:state.cart.map(item=>
                    item.id===acciones.payload
                    ?{...item,cantidad:item.cantidad-1}
                    : item
                    )

            }:{
                ...state,
                cart:state.cart.filter(item=>item.id !==acciones.payload)
            }
        };

        case TYPES.REMOVE_ALL_PRODUCTS:{
            return {
                ...state,
                cart:state.cart.filter(item=>item.id !==acciones.payload)
            }
        };

                    
            
        default:
            return state;
    }
}