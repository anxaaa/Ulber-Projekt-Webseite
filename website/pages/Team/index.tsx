import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import TobiasWeber from "../../components/media/team/tobiasweber.svg";
import AndreasWagner from "../../components/media/team/andreaswagner.svg";
import LudwigErhard from "../../components/media/team/ludwigerhard.svg";
import SophieKleiber from "../../components/media/team/sophiekleiber.svg";

const Team: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Swiss Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center h-full">
        <h1 className="md:text-6xl text-4xl font-bold mt-10">Unser Team</h1>
        <p className="mt-4 text-xl">Lernen Sie uns besser kennen.</p>
        <div className="my-20 max-w-xs items-center justify-around md:max-w-4xl space-y-8">
          <div className="rounded-xl border p-6 text-left flex">
            <TobiasWeber />
            <div className="pl-6">
              <h3 className="text-2xl font-bold">Tobias Weber</h3>
              <p className="mt-4 text-xl">- Fotograf</p>
              <p className="text-xl mb-6">- 23 Jahre alt</p>
              <a
                href="/Kontakt"
                className="text-xl underline md:no-underline md:hover:underline focus:text-red-700"
              >
                &rarr; Kontakt
              </a>
            </div>
          </div>
          <div className="rounded-xl border p-6 text-left flex">
            <AndreasWagner />
            <div className="pl-6">
              <h3 className="text-2xl font-bold">Andreas Wagner</h3>
              <p className="mt-4 text-xl">- Grafik Designer</p>
              <p className="text-xl mb-6">- 26 Jahre alt</p>
              <a
                href="/Kontakt"
                className="text-xl underline md:no-underline md:hover:underline focus:text-red-700"
              >
                &rarr; Kontakt
              </a>
            </div>
          </div>
          <div className="rounded-xl border p-6 text-left flex">
            <LudwigErhard />
            <div className="pl-6">
              <h3 className="text-2xl font-bold">Ludwig Erhard</h3>
              <p className="mt-4 text-xl">- Manager</p>
              <p className="text-xl mb-6">- 25 Jahre alt</p>
              <a
                href="/Kontakt"
                className="text-xl underline md:no-underline md:hover:underline focus:text-red-700"
              >
                &rarr; Kontakt
              </a>
            </div>
          </div>
          <div className="rounded-xl border p-6 text-left flex">
            <SophieKleiber />
            <div className="pl-6">
              <h3 className="text-2xl font-bold">Sophie Kleiber</h3>
              <p className="mt-4 text-xl">- Sekretärin</p>
              <p className="text-xl mb-6">- 27 Jahre alt</p>
              <a
                href="/Kontakt"
                className="text-xl underline md:no-underline md:hover:underline focus:text-red-700"
              >
                &rarr; Kontakt
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
