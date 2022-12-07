import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../../components/navigation";

const Team: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Swiss Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center h-full">
        <h1 className="text-6xl font-bold mt-10">Unser Team</h1>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t bg-neutral-100 bottom-0">
        <p>Dies ist der Footer.</p>
      </footer>
    </div>
  );
};

export default Team;
