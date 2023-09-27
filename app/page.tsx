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
        <div className="sm:mt-10 mt-6">
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <h3 className="mt-20 mt-10 max-w-2xl font-display text-5xl font-bold tracking-normal text-center text-gray-300 sm:text-6xl">
            Nuestros Objetivos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Compartir ideas y proyectos</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">¿Tienes una idea innovadora o un proyecto en mente? ¡Compártelo con la comunidad y recibe feedback valioso!</p>

              </div>
            </div>
            <div>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>

                  <a href="#">
                      <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Convivir con devs del mundo</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Únete a nosotros reunimos a desarrolladores de todo el mundo para compartir conocimientos y experiencias.</p>

              </div>
            </div>
            <div>
              <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                  </svg>
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Proyectos OpenSource</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">¡Únete y contribuye a la comunidad con software de código abierto!</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
