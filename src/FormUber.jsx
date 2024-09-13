import ButtonService from "./ButtonService";
export default function FormUber() {
  return (
    <>
      <div className="w-full h-svh flex justify-center items-center">
        <form
          action=""
          className="flex justify-center items-center flex-col gap-4 mx-5"
        >
          <span className="text-2xl mb-3 pt-16">
            ¿Cuál es tu número de teléfono o email?
          </span>
          <input
            className="bg-gray-200 rounded-md py-2 w-full text-center placeholder:italic placeholder:text-gray-500 focus:bg-gray-50"
            id="phone"
            type="tel"
            placeholder="Introducir numero de telefono o email"
            pattern="\+?[0-9]{1,4}?[-. \(\)]?[0-9]{1,15}"
            title="Número de teléfono válido"
          />
          <button
            type="submit"
            className="block bg-black text-white py-3 rounded-md w-full hover:bg-stone-900 transition ease-in-out delay-75 duration-300"
          >
            Continuar
          </button>
          <div className="text-gray-400">
            ---------------------- o --------------------
          </div>
          <ButtonService
            nameService={"Continuar con Google"}
            urlImageService={"../public/google.svg"}
            urlAlt={"google-img"}
            url={"https://www.google.com"}
          />
          <ButtonService
            nameService={"Continuar con Apple"}
            urlImageService={"../public/apple.svg"}
            urlAlt={"apple-img"}
            url={"https://www.apple.com"}
          />
          <div className="text-gray-400">
            ---------------------- o --------------------
          </div>
          <ButtonService
            nameService={"Iniciar sesion con el codigo QR"}
            urlImageService={"../public/qr.svg"}
            urlAlt={"QR-img"}
          />
          <div className="mt-4 ">
            <span className="text-gray-500 text-sm">
              Al continuar, aceptas recibir llamadas, mensajes de <br />
              WhatsApp o SMS/RCS, incluso por medios <br />
              automatizados, de Uber y sus filiales al número <br />
              proporcionado.
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
