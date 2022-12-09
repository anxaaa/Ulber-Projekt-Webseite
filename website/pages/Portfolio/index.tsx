import type { NextPage } from "next";
import Head from "next/head";
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
        <h1 className="md:text-6xl text-4xl font-bold mt-10">Portfolio</h1>
        <p className="mt-4 text-xl">
          Sehen Sie sich einige unserer besten Fotos an.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
