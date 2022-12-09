import type { NextPage } from "next";
import Head from "next/head";

// This is the the navigation for mobile devices
const Angebot: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Swiss Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center text-center h-full bg-neutral-100 space-y-6">
        <h1 className="text-6xl font-bold mt-10">Menu</h1>
        <div className="border-y w-full text-3xl py-3">
          <a className="focus:text-red-700" href="/">
            Home
          </a>
        </div>
        <div className="border-y w-full text-3xl py-3">
          <a className="focus:text-red-700" href="/Angebot">
            Angebot
          </a>
        </div>
        <div className="border-y w-full text-3xl py-3">
          <a className="focus:text-red-700" href="/Portfolio">
            Portfolio
          </a>
        </div>
        <div className="border-y w-full text-3xl py-3">
          <a className="focus:text-red-700" href="/Team">
            Team
          </a>
        </div>
        <div className="border-y w-full text-3xl py-3">
          <a className="focus:text-red-700" href="/Kontakt">
            Kontakt
          </a>
        </div>
      </main>
    </div>
  );
};

export default Angebot;
