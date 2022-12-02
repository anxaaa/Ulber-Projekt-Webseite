import type { NextPage } from "next";
import Head from "next/head";

const Kontakt: NextPage = () => {
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
          <ul className="flex p-4 flex-row space-x-8 mt-0 mr-10">
            <li>
              <a
                href="#"
                id="user"
                className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 hover:underline"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                id="user"
                className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 hover:underline"
              >
                Angebot
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                id="home"
                className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 hover:underline"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                id="settings"
                className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 hover:underline"
              >
                &Uuml;ber uns
              </a>
            </li>
            <li>
              <a
                href="#"
                id="info"
                className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 hover:underline"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Swiss Photography</h1>

        <p className="text-2xl mt-5">Wir fotografieren alles!</p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Dienstleistungen &rarr;</h3>
            <p className="mt-4 text-xl">
              Erfahren Sie mehr darüber, was wir anbieten.
            </p>
          </a>

          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Über uns &rarr;</h3>
            <p className="mt-4 text-xl">Lernen Sie unser Team besser kennen.</p>
          </a>

          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Portfolio &rarr;</h3>
            <p className="mt-4 text-xl">
              Sehen Sie sich einige unserer besten Bilder an.
            </p>
          </a>

          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Kontakt &rarr;</h3>
            <p className="mt-4 text-xl">Treten Sie in Kontakt mit uns.</p>
          </a>
        </div>
      </main> */}

      <footer className="flex h-24 w-full items-center justify-center border-t bg-neutral-100 bottom-0">
        <p>Dies ist der Footer.</p>
      </footer>
    </div>
  );
};

export default Kontakt;
