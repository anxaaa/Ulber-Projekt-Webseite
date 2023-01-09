import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";

const impressum: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Swiss Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center h-full">
        {/* title section */}
        <h1 className="md:text-6xl text-4xl font-bold mt-20 md:mt-32">
          Impressum
        </h1>
        <p className="mt-4 text-xl">Das Impressum von Swiss Photography:</p>

        {/* content section */}
        <div className="my-20 text-left md:max-w-2xl max-w-xs w-full p-2 px-4 space-y-4">
          <div>
            <h3 className="text-xl font-bold">Verantwortung</h3>
            <p>Swiss Photography</p>
            <p>Scarlettastrasse 30</p>
            <p>CH-7000 Chur</p>
            <p className="mt-1 md:no-underline underline md:hover:underline cursor-pointer">
              swiss.photography@mail.ch
            </p>
            <p className="md:no-underline underline md:hover:underline cursor-pointer">
              +41 81 256 26 25
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Haftung für Links</h3>
            <p>
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
              Verantwortungsbereichs Es wird jegliche Verantwortung für solche
              Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
              erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Uhrheberrechte</h3>
            <p>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
              oder anderen Dateien auf der Website gehören ausschliesslich Swiss
              Photography oder den speziell genannten Rechtsinhabern. Für die
              Reproduktion jeglicher Elemente ist die schriftliche Zustimmung
              der Urheberrechtsträger im Voraus einzuholen..
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Rechtsinhaber</h3>
            <p>Swiss Photography</p>
            <p>Luca Tom Fröhlich</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Konzept / Design / Umsetzung</h3>
            <p>Anna-Lea Jakob</p>
            <p>Luca Tom Fröhlich</p>
            <p>Nino Marty</p>
            <p>Robin Bieler</p>
            <p>Gabriele Matteo Schäfli</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default impressum;
