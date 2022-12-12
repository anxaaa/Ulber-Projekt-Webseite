import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";

const datenschutz: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Swiss Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center h-full">
        {/* title section */}
        <h1 className="md:text-6xl text-4xl font-bold mt-10">Datenschutz</h1>
        <p className="mt-4 text-xl">
          Die Datenschutzerklärung von Swiss Photography:
        </p>

        {/* content section */}
        <div className="my-20 text-left md:max-w-2xl max-w-xs w-full p-2 px-4 space-y-4">
          <div>
            <h3 className="text-xl font-bold">Noch in Arbeit...</h3>
            <p>Noch in Arbeit...</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default datenschutz;
