import { PropsWithChildren } from "react";

type FooterProps = {};

export default function Footer({}: PropsWithChildren<FooterProps>) {
  return (
    <div className="w-full">
      {/* Footer */}
      <footer className="h-24 w-full items-center justify-center border-t bg-neutral-100 bottom-0 text-center">
        <h1 className="mt-4 text-2xl font-bold">Links</h1>
        <div className="my-3 flex justify-center space-x-4">
          <a className="underline" href="/AGB">
            Allgemeine Geschäftsbedingungen
          </a>
          <p>|</p>
          <a className="underline" href="/Impressum">
            Impressum
          </a>
          <p>|</p>
          <a className="underline" href="/Kontakt">
            Kontakt
          </a>
        </div>
      </footer>
    </div>
  );
}
