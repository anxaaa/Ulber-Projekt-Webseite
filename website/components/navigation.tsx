import { PropsWithChildren } from "react";

type NavigationProps = {};

export default function Navigation({}: PropsWithChildren<NavigationProps>) {
  return (
    <div className="w-full">
      {/* Top Nav */}
      <nav className="sticky top-nav px-2 py-2.5 bg-neutral-100 border-b">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <a className="ml-10" href="/">
              <span className="self-center whitespace-nowrap pointer-events-none font-semibold text-xl">
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
    </div>
  );
}