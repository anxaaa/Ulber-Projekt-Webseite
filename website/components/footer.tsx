import { PropsWithChildren } from "react";

type FooterProps = {};

export default function Footer({}: PropsWithChildren<FooterProps>) {
  return (
    <div className="w-full bg-neutral-100">
      {/* Footer */}
      <footer className="w-full items-center justify-center border-t bottom-0 text-center">
        <h1 className="mt-4 text-2xl font-bold">Links</h1>
        <div className="my-3 md:flex justify-center md:space-x-4">
          <a className="underline focus:text-red-700" href="/AGB">
            Allgemeine Geschäftsbedingungen
          </a>
          <br />
          <p className="hidden md:block">|</p>
          <a className="underline focus:text-red-700" href="/Impressum">
            Impressum
          </a>
          <br />
          <p className="hidden md:block">|</p>
          <a className="underline focus:text-red-700" href="/Datenschutz">
            Datenschutz
          </a>
          <br />
          <p className="hidden md:block">|</p>
          <a className="underline focus:text-red-700" href="/Kontakt">
            Kontakt
          </a>
        </div>
      </footer>
    </div>
  );
}
