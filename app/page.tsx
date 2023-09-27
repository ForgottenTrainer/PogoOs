import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";

export default function HomePage() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <a
          href="https://vercel.fyi/roomGPT"
          target="_blank"
          rel="noreferrer"
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out"
        >
          Aporta y obten <span className="text-purple-600">proyectos</span> de la comunidad{" "}
        </a>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
          Una gran comunidad de desarrolladores{" "}
          <span className="relative whitespace-nowrap text-purple-600">
            <SquigglyLines />
            <span className="relative">PogoOs</span>
          </span>{" "}
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Unete a la comunidad y convive con mas gente dev como tu, aprende y aporta conocimiento
        </h2>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="/dream"
        >
          Unete
        </Link>
        <div className="flex justify-center items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16 text-center">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div className="w-full">
                <h3 className="mt-20 max-w-2xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-6xl">
                  ¿Quiénes Somos?
                </h3>
              </div>
              <div className="sm:mt-0 mt-8 w-full">
                <h3 className="mb-1 font-medium text-lg">{" "}</h3>
                <p className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400 text-start text-gray-500 ">
                  Somos un grupo diverso de entusiastas de la programación, que van desde principiantes hasta expertos con años de experiencia. Nos une la pasión por la creación de soluciones innovadoras y el deseo de compartir conocimientos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
