import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../../components/footer";
import Navigation from "../../../components/navigation";

const error: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Swiss Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center h-full">
        <h1 className="md:text-6xl text-4xl font-bold mt-10">Error!</h1>
        <p className="mt-4 text-xl">
          Ein Fehler ist bei der Übermittlung Ihrer Nachricht aufgetaucht.
        </p>

        <div className="mt-4 text-left border rounded-lg max-w-xl w-full p-2 px-4">
          <p className="text-lg">Überprüfen Sie folgendes:</p>
          <p>- sind alle Felder ausgefüllt?</p>
        </div>
        <a
          href="/Kontakt"
          className="mt-6 mb-20 border rounded-xl p-2 px-4 bg-neutral-100 hover:bg-neutral-200 focus:text-red-700"
        >
          Erneut versuchen
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default error;
