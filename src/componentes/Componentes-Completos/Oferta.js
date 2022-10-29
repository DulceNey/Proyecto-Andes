import Boton from "../Boton";
import Imagen2 from "../Imagen2";

const Oferta = () => {
  return (
    <div className=" w-full bg-slate-300 dark:bg-slate-900 pt-12 h-auto md:pb-8">
      <Imagen2 />
      <h1 className="text-stone-700 dark:text-neutral-300 text-3xl md:text-4xl mx-6 text-center pb-6">
        {" "}
        Sorprenda a alguien <br /> Con esta oferta especial
      </h1>
      <h2 className="text-stone-700 text-
      lg font-medium dark:text-neutral-300 mx-7 text-center">
        {" "}
        Aproveche esta oportunidad única <br />
        para viajar con una persona.
        <br /> Disfruten de las maravillas <br /> de la Patagonia juntos.
      </h2>
      <div className="mx-7 text-center">
        <Boton />
      </div>
    </div>
  );
};
export default Oferta;
