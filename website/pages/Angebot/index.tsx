import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";

const Angebot: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Swiss Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center h-full">
        {/* first title section */}
        <h1 className="md:text-6xl text-4xl font-bold mt-10">
          Unsere Dienstleistungen
        </h1>
        <p className="mt-4 text-xl">
          Erhalten Sie einen Überblick über unser Angebot.
        </p>

        {/* main links section */}
        <h3 className="mt-16 text-2xl font-bold mb-4">
          Unsere beliebtesten Dienstleistungen:
        </h3>
        <div className="flex max-w-xs flex-wrap items-center justify-around md:max-w-4xl mb-16">
          <a
            href="/Portfolio"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-red-700 focus:text-red-700"
          >
            <h3 className="text-2xl font-bold">&rarr; Hochzeitsfotos</h3>
          </a>
          <a
            href="/Portfolio"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-red-700 focus:text-red-700"
          >
            <h3 className="text-2xl font-bold">&rarr; Familienfotos</h3>
          </a>
          <a
            href="/Portfolio"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-red-700 focus:text-red-700"
          >
            <h3 className="text-2xl font-bold">&rarr; Kindergeburtstag</h3>
          </a>
          <a
            href="/Portfolio"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-red-700 focus:text-red-700"
          >
            <h3 className="text-2xl font-bold">
              &rarr; Werbung / Firmenportraits
            </h3>
          </a>
          <a
            href="/Portfolio"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-red-700 focus:text-red-700"
          >
            <h3 className="text-2xl font-bold">&rarr; Architektur</h3>
          </a>
          <a
            href="/Portfolio"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-red-700 focus:text-red-700"
          >
            <h3 className="text-2xl font-bold">&rarr; Weiteres</h3>
          </a>
        </div>

        {/* short info section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-4">
            Ihr Wunsch ist nicht dabei?
          </h3>
          <p>
            Keine Sorge! Wir gehen auf Wünsche aller Art ein. Kontaktieren Sie
            uns gerne mit Ihrem persönlichem Wunsch.
          </p>
          <p className="font-bold my-6 text-lg">
            Kontaktieren Sie uns jetzt persönlich oder via Formular und
            vereinbaren Sie ein Termin!
          </p>
          <a
            href="/Kontakt"
            className="font-bold text-xl mt-6 mb-20 border rounded-xl p-2 px-4 bg-neutral-100 hover:bg-neutral-200 focus:bg-red-700"
          >
            &rarr; Kontakt
          </a>
        </div>

        {/* second title section */}
        <h1 className="md:text-6xl text-4xl font-bold mt-10">Preise</h1>
        <p className="mt-4 text-xl">Unsere Preisliste:</p>

        {/* price section */}
        <div className="my-20 max-w-xs md:max-w-2xl w-full">
          <div className="border text-left w-full">
            <div className="bg-neutral-100 text-lg flex">
              <p className="border w-1/2 pl-2">Zeit</p>
              <p className="border pl-2">Preis</p>
            </div>
            <div className="flex">
              <p className="border w-1/2 pl-2">1 Stunde</p>
              <p className="border w-1/2 pl-2">100 CHF</p>
            </div>
            <div className="flex">
              <p className="border w-1/2 pl-2">2 Stunden</p>
              <p className="border pl-2 w-1/2">180 CHF</p>
            </div>
            <div className="flex">
              <p className="border w-1/2 pl-2">Jede weitere Stunde</p>
              <p className="border pl-2 w-1/2">+ 60 CHF</p>
            </div>
            <div className="flex">
              <p className="border w-1/2 pl-2">Ganzer Tag</p>
              <p className="border pl-2 w-1/2">500 CHF</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Angebot;
