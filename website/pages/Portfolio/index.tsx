import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";

// import everything for gallery
import Image from "next/image";
import weddingPic1 from "../../components/media/hochzeiten/Hochzeitbild1.jpg";
import weddingPic2 from "../../components/media/hochzeiten/Hochzeitbild2.jpg";
import familyPic1 from "../../components/media/familie/Kinderbild1.jpg";
import familyPic2 from "../../components/media/familie/Kinderbild2.jpg";
import familyPic3 from "../../components/media/familie/Kinderbild3.jpg";
import architecturePic1 from "../../components/media/architektur/pic1.png";
import architecturePic2 from "../../components/media/architektur/pic2.jpg";
import architecturePic3 from "../../components/media/architektur/pic3.png";
import furtherPic1 from "../../components/media/weiteres/pic1.jpg";
import furtherPic2 from "../../components/media/weiteres/pic2.jpg";

const Portfolio: NextPage = () => {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <Head>
        <title>Swiss Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center h-full">
        {/* title section */}
        <h1 className="md:text-6xl text-4xl font-bold mt-20 md:mt-32">
          Portfolio
        </h1>
        <p className="mt-4 text-xl">
          Sehen Sie sich einige unserer besten Fotos an.
        </p>

        {/* links section */}
        <div className="mt-14 max-w-xs items-center justify-around md:max-w-4xl space-y-8">
          <div className="space-x-8">
            <a
              href="/Portfolio#hochzeiten"
              className="text-xl mt-6 mb-20 border rounded-xl p-2 px-4 bg-neutral-100 hover:bg-neutral-200 focus:text-red-700"
            >
              Hochzeiten
            </a>
            <a
              href="/Portfolio#familie"
              className="text-xl mt-6 mb-20 border rounded-xl p-2 px-4 bg-neutral-100 hover:bg-neutral-200 focus:text-red-700"
            >
              Familie
            </a>
            <div className="block md:hidden">
              <br />
            </div>
            <a
              href="/Portfolio#architektur"
              className="text-xl mt-6 mb-20 border rounded-xl p-2 px-4 bg-neutral-100 hover:bg-neutral-200 focus:text-red-700"
            >
              Architektur
            </a>
            <a
              href="/Portfolio#weiteres"
              className="text-xl mt-6 mb-20 border rounded-xl p-2 px-4 bg-neutral-100 hover:bg-neutral-200 focus:text-red-700"
            >
              Weiteres
            </a>
          </div>
        </div>

        {/* wedding section */}
        <div className="my-20 w-full max-w-xs items-center justify-around md:max-w-4xl space-y-8">
          <h3 id="hochzeiten" className="font-bold text-2xl text-left">
            Hochzeiten
          </h3>
          <div className="md:flex md:space-x-8 space-y-8 md:space-y-0">
            <Image className="w-full" src={weddingPic1} alt="Hochzeitbild 1" />
            <Image className="w-full" src={weddingPic2} alt="Hochzeitbild 2" />
          </div>
        </div>

        {/* family section */}
        <div className="my-20 w-full max-w-xs items-center justify-around md:max-w-4xl space-y-8">
          <h3 id="familie" className="font-bold text-2xl text-left">
            Familie
          </h3>
          <div className="md:flex md:space-x-8 space-y-8 md:space-y-0">
            <Image className="w-full" src={familyPic2} alt="Familienbild 1" />
            <Image className="w-full" src={familyPic3} alt="Familienbild 2" />
          </div>
          <Image className="w-full" src={familyPic1} alt="Familienbild 3" />
        </div>

        {/* architecture section */}
        <div className="my-20 w-full max-w-xs items-center justify-around md:max-w-4xl space-y-8">
          <h3 id="architektur" className="font-bold text-2xl text-left">
            Architektur
          </h3>
          <div className="md:flex md:space-x-8 space-y-8 md:space-y-0">
            <Image
              className="w-full"
              src={architecturePic1}
              alt="Architekturbild 1"
            />
            <Image
              className="w-full"
              src={architecturePic3}
              alt="Architekturbild 2"
            />
          </div>
          <Image
            className="w-full"
            src={architecturePic2}
            alt="Architekturbild 3"
          />
        </div>

        {/* further section */}
        <div className="my-20 w-full max-w-xs items-center justify-around md:max-w-4xl space-y-8">
          <h3 id="weiteres" className="font-bold text-2xl text-left">
            Weiteres
          </h3>
          <div className="md:flex md:space-x-8 space-y-8 md:space-y-0">
            <Image className="w-full" src={furtherPic1} alt="weiteres Bild 1" />
            <Image className="w-full" src={furtherPic2} alt="weiteres Bild 2" />
          </div>
        </div>

        <a
          href="/Portfolio#top"
          className="text-xl mt-6 my-20 border rounded-xl p-2 px-4 bg-neutral-100 hover:bg-neutral-200 focus:text-red-700"
        >
          zurück nach oben
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
