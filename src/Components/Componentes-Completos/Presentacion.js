import Imagen1 from "../Imagen1";
import Lista from "../Lista";

export const Presentacion = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 border-amber-900 dark:border-gray-400 border-4">
      <Imagen1 />
      <h1 className="text-center text-4xl text-black">
        {" "}
        ¿Que hace unico a Los Andes: Aventura y Turismo?
      </h1>
      <p className="text-center my-2.5 text-2xl text-black">
        {" "}
        Nuestro deseo de reavivar la pasión por el turismo, el explorar y
        divertirse junto a otros campistas y/o amantes de la naturaleza, la
        aventura y los lazos.
      </p>
      <Lista />
    </div>
  );
};

export default Presentacion;
