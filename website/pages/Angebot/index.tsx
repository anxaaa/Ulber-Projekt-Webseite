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
        <h1 className="md:text-6xl text-4xl font-bold mt-10">
          Unsere Dienstleistungen
        </h1>
      </main>

      <Footer />
    </div>
  );
};

export default Angebot;
