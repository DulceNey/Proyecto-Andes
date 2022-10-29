import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="justify-between flex flex-col md:flex-row content-center text-lg p-0 m-0 text-slate-300 ">
        <div className="bg-slate-600 h-56 md:w-1/3 p-4 md:pl-8 ">
          <h3 className="font-semibold text-xl mb-1">
            Andes Aventura Y Turismo
          </h3>
          <p className="tracking-normal text-base italic">
            Tenemos la excursión ideal para vos en La Patagonia Argentina.
            <br></br>
            Disfruta nuestro servicio al mejor precio.
          </p>
          <h5 className="pt-2 text-sm pb-8">
            © Copyrights 2022 - LosAndesAventuraYTurismo
          </h5>
          <div>
            <div className="tracking-widest pl-28 pb-1 text-2xl  text-slate-300">
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>

        <div className="bg-slate-600 h-56 md:w-1/3 p-4 text-base md:pl-8 md:pt-6">
          <p className="pb-2">Medios de pago y promociones.</p>
          <p className="pb-2">Términos y condiciones.</p>
          <p className="pb-2">Preguntas frecuentes.</p>
          <p className="pb-2">Conócenos.</p>
          <p className="pb-2">Colabora con nosotros.</p>
        </div>

        <div className="bg-slate-600 h-56 md:w-1/3 p-4">
          <h2 className="font-medium tracking-wider pb-2 md:pb-1">Contacto</h2>
          <p className="text-sm pt-2">Andesturismo@gmail.com</p>
          <p className="pt-1">(+54) 29- 4462220</p>
          <h6 className="text-sm pt-2">
            España 505-Comodoro Rivadavia- Chubut.(U9000CUC)
          </h6>
        </div>
      </div>
    </>
  );
};
