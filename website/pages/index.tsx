import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/navigation";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Swiss Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center mt-24">
        <h1 className="md:text-6xl text-5xl font-bold">Swiss Photography</h1>

        <p className="text-2xl mt-5">Wir fotografieren alles!</p>

        <div className="flex max-w-xs flex-wrap items-center justify-around md:max-w-4xl mt-20">
          <a
            href="/Angebot"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-red-700 focus:text-red-700"
          >
            <h3 className="text-2xl font-bold">Dienstleistungen &rarr;</h3>
            <p className="mt-4 text-xl">
              Erfahren Sie mehr darüber, was wir anbieten.
            </p>
          </a>

          <a
            href="/Team"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-red-700 focus:text-red-700"
          >
            <h3 className="text-2xl font-bold">Über uns &rarr;</h3>
            <p className="mt-4 text-xl">
              Lernen Sie das Team hinter Swiss Photography besser kennen.
            </p>
          </a>

          <a
            href="/Portfolio"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-red-700 focus:text-red-700"
          >
            <h3 className="text-2xl font-bold">Portfolio &rarr;</h3>
            <p className="mt-4 text-xl">
              Sehen Sie sich einige unserer besten Bilder an.
            </p>
          </a>

          <a
            href="/Kontakt"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-red-700 focus:text-red-700 mb-20 md:mb-0"
          >
            <h3 className="text-2xl font-bold">Kontakt &rarr;</h3>
            <p className="mt-4 text-xl">
              Treten Sie jederzeit in Kontakt mit uns.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t bg-neutral-100 bottom-0">
        <p>Dies ist der Footer.</p>
      </footer>
    </div>
  );
};

export default Home;
