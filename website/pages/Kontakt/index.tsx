import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";

const Kontakt: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Swiss Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center h-full">
        {/* first title section */}
        <h1 className="md:text-6xl text-4xl font-bold mt-10">Kontakt</h1>
        <p className="mt-4 text-xl">
          Nehmen Sie persönlich Kontakt mit uns auf.
        </p>

        {/* section for adress etc */}
        <div className="my-20 flex flex-wrap items-center justify-center">
          {/* map */}
          <iframe
            className="md:m-0 mb-8 px-8"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2728.382058366463!2d9.523974689526705!3d46.85585329218498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4784c7756f05f531%3A0xe76cbc41d22ebca1!2sScalettastrasse%2030%2C%207000%20Chur!5e0!3m2!1sde!2sch!4v1670581349866!5m2!1sde!2sch"
            width="400"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* informations */}
          <div className="md:pl-8 md:text-left pl-0">
            <h3 className="text-2xl font-bold">E-Mail</h3>
            <p className="my-4 text-xl md:no-underline underline md:hover:underline cursor-pointer">
              swiss.photography@mail.ch
            </p>
            <h3 className="text-2xl font-bold">Telefon Nr.</h3>
            <p className="my-4 text-xl">+41 81 256 26 25</p>
            <h3 className="text-2xl font-bold">Adresse</h3>
            <p className="mt-4 text-xl">Swis Photography</p>
            <p className="text-xl">Scarlettastrasse 30</p>
            <p className="text-xl">CH-7000 Chur</p>
          </div>
        </div>

        {/* second title section */}
        <h1 className="md:text-6xl text-4xl font-bold mt-10">
          Online Formular
        </h1>
        <p className="mt-4 text-xl">
          Treten Sie via Formular mit uns in Kontakt.
        </p>

        {/* form section */}
        <div className="my-20 flex flex-wrap">
          <form action="../api/form" method="post" className="space-y-4">
            <div className="md:flex md:flex-wrap md:space-x-8 space-y-4 md:space-y-0">
              <div className="text-left">
                <p>Vorname:</p>
                <input
                  type="text"
                  name="firstName"
                  placeholder=""
                  className="border w-full"
                />
              </div>
              <div className="text-left">
                <p>Nachname:</p>
                <input
                  type="text"
                  name="lastName"
                  placeholder=""
                  className="border w-full"
                />
              </div>
            </div>
            <div className="text-left">
              <p>E-Mail Adresse:</p>
              <input
                type="text"
                name="email"
                placeholder=""
                className="border w-full"
              />
            </div>
            <div className="text-left">
              <p>Telefonnummer:</p>
              <input
                type="text"
                name="phone"
                placeholder=""
                className="border w-full"
              />
            </div>
            <div className="text-left">
              <p>Grund Ihrer Mitteilung:</p>
              <input type="checkbox" name="reason" className="md:ml-4" />
              <label htmlFor="reason" className="pl-3">
                Ich möchte ein Fotoshooting buchen
              </label>
              <br />
              <input type="checkbox" name="reason" className="md:ml-4" />
              <label htmlFor="reason" className="pl-3">
                Ich möchte ein Bild bearbeiten lassen
              </label>
              <br />
              <input type="checkbox" name="reason" className="md:ml-4" />
              <label htmlFor="reason" className="pl-3">
                Ein anderer Grund
              </label>
            </div>
            <div className="text-left">
              <p>Ihre Mitteilung:</p>
              <textarea
                name="message"
                rows={5}
                className="border w-full"
              ></textarea>
            </div>
            <div className="text-left">
              <p>Hatten Sie bereits Kontakt mit uns?</p>
              <input type="radio" name="contact" className="md:ml-4" />
              <label htmlFor="contact" className="pl-3">
                Ja
              </label>
              <input type="radio" name="contact" className="ml-4" />
              <label htmlFor="contact" className="pl-3">
                Nein
              </label>
            </div>
            <input
              className="border p-2 w-full bg-neutral-100 rounded-lg hover:bg-neutral-200 focus:bg-red-700"
              type="submit"
              value="Absenden"
            />
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
