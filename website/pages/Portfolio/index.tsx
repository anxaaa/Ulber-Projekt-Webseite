import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";

const Portfolio: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Swiss Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center h-full">
        {/* title section */}
        <h1 className="md:text-6xl text-4xl font-bold mt-10">Portfolio</h1>
        <p className="mt-4 text-xl">
          Sehen Sie sich einige unserer besten Fotos an.
        </p>

        {/* links section */}
        <div className="mt-14 max-w-xs items-center justify-around md:max-w-4xl space-y-8">
          <div className="space-x-8">
            <a
              href="/Portfolio#wedding"
              className="text-xl mt-6 mb-20 border rounded-xl p-2 px-4 bg-neutral-100 hover:bg-neutral-200 focus:text-red-700"
            >
              Hochzeiten
            </a>
            <a
              href="/Portfolio"
              className="text-xl mt-6 mb-20 border rounded-xl p-2 px-4 bg-neutral-100 hover:bg-neutral-200 focus:text-red-700"
            >
              Familie
            </a>
            <div className="block md:hidden">
              <br />
            </div>
            <a
              href="/Portfolio"
              className="text-xl mt-6 mb-20 border rounded-xl p-2 px-4 bg-neutral-100 hover:bg-neutral-200 focus:text-red-700"
            >
              Architektur
            </a>
            <a
              href="/Portfolio"
              className="text-xl mt-6 mb-20 border rounded-xl p-2 px-4 bg-neutral-100 hover:bg-neutral-200 focus:text-red-700"
            >
              Weiteres
            </a>
          </div>
        </div>

        {/* wedding section */}
        <div className="my-20 w-full max-w-xs items-center justify-around md:max-w-4xl space-y-8">
          <h3 id="wedding" className="font-bold text-2xl text-left">
            Hochzeiten
          </h3>
          <img
            id="img"
            src="./components/media/hochzeiten/Hochzeitbild1.jpg"
            alt="Hochzeitbild 1"
          />
        </div>

        {/* family section */}

        {/* architecture section */}

        {/* further section */}
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
