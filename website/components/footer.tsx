import { PropsWithChildren } from "react";

type FooterProps = {};

export default function Footer({}: PropsWithChildren<FooterProps>) {
  return (
    <div className="w-full">
      {/* Footer */}
      <footer className="flex h-24 w-full items-center justify-center border-t bg-neutral-100 bottom-0">
        <p>Dies ist der Footer.</p>
      </footer>
    </div>
  );
}
