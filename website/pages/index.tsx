import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Swiss Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top Nav */}
      <nav className="sticky px-2 py-2.5 bg-neutral-100 w-full border-b">
        <div className="flex flex-wrap justify-between items-center w-full">
          <div>
            <a className="ml-10" href="/">
              <span className="self-center whitespace-nowrap pointer-events-none">
                Swiss Photography
              </span>
            </a>
          </div>
          <div className="block md:hidden">
            <a className="mr-10" href="/">
              <span className="self-center whitespace-nowrap pointer-events-none">
                &#9776;
              </span>
            </a>
          </div>
          <ul className="p-4 flex-row space-x-8 mt-0 mr-10 hidden md:flex">
            <li>
              <a
                href="/"
                className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/Angebot"
                className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 hover:underline"
              >
                Angebot
              </a>
            </li>
            <li>
              <a
                href="/Portfolio"
                className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 hover:underline"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/Team"
                className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 hover:underline"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="/Kontakt"
                className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 hover:underline"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center mt-24">
        <h1 className="text-6xl font-bold">Swiss Photography</h1>

        <p className="text-2xl mt-5">Wir fotografieren alles!</p>

        <div className="flex max-w-4xl flex-wrap items-center justify-around sm:w-full mt-20">
          <a
            href="/Angebot"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Dienstleistungen &rarr;</h3>
            <p className="mt-4 text-xl">
              Erfahren Sie mehr darüber, was wir anbieten.
            </p>
          </a>

          <a
            href="/Team"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Über uns &rarr;</h3>
            <p className="mt-4 text-xl">
              Lernen Sie unser das Team hinter Swiss Photography besser kennen.
            </p>
          </a>

          <a
            href="/Portfolio"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Portfolio &rarr;</h3>
            <p className="mt-4 text-xl">
              Sehen Sie sich einige unserer besten Bilder an.
            </p>
          </a>

          <a
            href="/Kontakt"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 mb-20 md:mb-0 "
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
