import Boton from "../Boton";
import Imagen2 from "../Imagen2";

const Oferta = () => {
  return (
    <div className=" w-full bg-slate-300 dark:bg-slate-900 pt-12 h-auto md:pb-8">
      <Imagen2 />
      <h1 className="text-stone-700 dark:text-neutral-300 text-3xl md:text-4xl mx-6 text-center pb-4">
        {" "}
        No pierda la oportunidad <br /> de conocer lo mejor de la Patagonia
      </h1>
      <h2 className="text-stone-700 text-2xl font-medium dark:text-neutral-300 mx-7 text-center mb-4 pb-3">
        {" "}
        Aproveche esta oportunidad <br />
        para viajar con nosotros.
      </h2>
      <div className="mx-7 text-center pb-8">
        <Boton/>
      </div>
    </div>
  );
};
export default Oferta;
