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
          <h3 className="text-xl font-bold">
            Sammlung personenbezogener Angaben
          </h3>
          <div className="space-y-2">
            <p>
              Als Besucher der Website können Sie verschiedene Handlungen
              vornehmen, ohne personenbezogene Angaben zu machen.
            </p>
            <p>
              Wenn Sie sich jedoch für die Nutzung der Swissphotography Webseite
              entscheiden und Produkte oder Dienste von Swissphotography
              bestellen, erfassen wir unter Umständen die folgenden
              personenbezogenen Angaben von Ihnen, um die Dienste bereitstellen
              zu können:
            </p>
            <ul className="list-disc ml-4">
              <li>
                Kontaktdaten wie Name, Telefonnummer, Anschrift, Adresse und
                E-Mail-Adresse
              </li>
              <li>
                Rechnungsdaten, wie etwa Nummer, Ablaufdatum, Typ und
                Rechnungsadresse Ihrer Kreditkarte.
              </li>
            </ul>
            <p>
              Je nach Aktivität sind einige der Informationen, um deren
              Bereitstellung wir bitten, als Pflichtangabe und andere als
              freiwillig gekennzeichnet. Wenn Sie die Pflichtangaben in Bezug
              auf eine bestimmte Aktivität nicht bereitstellen, werden Sie nicht
              in der Lage sein, diese Aktivität zu nutzen.
            </p>
          </div>
          <h3 className="text-xl font-bold">
            Schutz Ihrer personenbezogenen Angaben
          </h3>
          <div className="space-y-2">
            <p>
              Die personenbezogenen Angaben, die Sie im Zusammenhang mit der
              Nutzung der Website bereitstellen, werden mehrfach geschützt.
            </p>
            <ul className="list-disc ml-4">
              <li>
                Ihre personenbezogenen Angaben werden auf sicheren Servern
                abgelegt, auf die nur ausgewählte Mitarbeiter und Auftragnehmer
                von Swissphotography mittels eines Passworts Zugriff haben.
              </li>
              <li>
                Ihre personenbezogenen Angaben werden bei allen Übertragungen an
                Swissphotography verschlüsselt.
              </li>
            </ul>
            <p>
              Wenn Sie Fragen zur Sicherheit unserer Website haben, können Sie
              uns eine E-Mail an swiss.photography@mail.ch senden.
            </p>
          </div>
          <h3 className="text-xl font-bold">Cookie- und Tracking-Techniken</h3>
          <div className="space-y-2">
            <p>
              Wenn Sie die Website verwenden, werden automatisch Daten erfasst,
              z. B. der Internetdienstanbieter, Browsertyp und -version,
              Betriebssystem und Gerätetyp, durchschnittliche Verweildauer auf
              unserer Website, angesehene Seiten, aufgerufene Informationen,
              Internetprotokoll-Adresse (IP-Adresse), über die Sie mit Ihrem
              Computer auf das Internet zugreifen, und andere relevante
              Statistiken. Diese Informationen werden auch als Webanalyse oder
              Clickstream-Daten bezeichnet.
            </p>
            <p>
              Kontaktieren Sie uns unter swiss.photography@mail.ch, um die
              Löschung Ihrer personenbezogenen Daten von unserem Blog bzw. dem
              Community-Forum zu beantragen.
            </p>
          </div>
          <h3 className="text-xl font-bold">
            Beschwerden bezüglich des Datenschutzes
          </h3>
          <div className="space-y-2">
            <p>
              Personen, die in bestimmten Ländern, einschliesslich des
              europäischen Wirtschaftsraums, ansässig sind, geniessen bestimmte
              gesetzliche Rechte in Bezug auf personenbezogene Angaben. Im
              Einklang mit gesetzlich vorgesehenen Ausnahmen haben Sie unter
              Umständen das Recht, Zugriff auf personenbezogene Angaben zu
              verlangen, die Möglichkeit, eine Aktualisierung, Löschung oder
              Korrektur solcher Informationen zu verlangen sowie die weitere
              Nutzung Ihrer personenbezogenen Angaben zu beschränken.
            </p>
            <p>
              Insoweit als die Verarbeitung Ihrer personenbezogenen Angaben
              durch Swissphotography der Datenschutz-Grundverordnung der EU
              unterliegt, greift Swissphotography auf sein legitimes Interesse
              an der Verarbeitung Ihrer Daten wie oben beschrieben zurück.
            </p>
            <p>
              Wenn Sie einen anderen Einwand zur Verarbeitung Ihrer
              personenbezogenen Angaben haben, können Sie ebenfalls
              widersprechen, indem Sie eine E-Mail an swiss.photography@mail.ch
              senden.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default datenschutz;
