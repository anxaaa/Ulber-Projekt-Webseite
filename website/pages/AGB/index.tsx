import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";

const agb: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Swiss Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center h-full">
        {/* title section */}
        <h1 className="md:text-6xl text-4xl font-bold mt-20 md:mt-32">AGB</h1>
        <p className="mt-4 text-xl">
          Die allgemeinen Geschäftsbedingungen von Swiss Photography:
        </p>
      </main>

      {/* content section */}
      <div className="my-20 text-left md:max-w-2xl max-w-xs w-full p-2 px-4 space-y-4">
        <div>
          <h3 className="text-xl font-bold">Annahme der Bedingungen</h3>
          <p>
            Sie bestätigen und erklären Ihr Einverständnis mit den
            untenstehenden Bedingungen und Konditionen sowie deren Änderungen
            oder Ergänzungen, die swissphotography, Inc. („Swissphotography“) zu
            gegebener Zeit veröffentlicht (zusammengefasst die
            „Nutzungsbedingungen“).{" "}
            <b>
              Falls Sie mit den Bedingungen dieser Nutzungsbedingungen nicht
              einverstanden sind, rufen Sie diese Website nicht auf bzw.
              benutzen Sie diese nicht.
            </b>
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Preise</h3>
          <p>
            Es gelten die aktuellen Preise der Preisliste, welche sich auf der
            offiziellen Swissphotography Webseite befindet.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Bezahlung</h3>
          <div className="space-y-2">
            <p>
              Der Versand der Rechnung erfolgt vor dem Fotoshooting per E-Mail
              oder Post. Sie verpflichten sich dazu, diesen Betrag bis zwei Tage
              (48 Stunden) vor dem Fotoshooting zu begleichen.
            </p>
            <p>
              Bei einem Rechnungsverzug von einem Tag (24 Stunden) behält sich
              Swissphotography das Recht vor, 50 CHF für den entstandenen
              Mehraufwand in Rechnung zu stellen.
            </p>
            <p>
              Bei einem Rechnungsverzug von mehr als einem Tag (24 Stunden) wird
              das Fotoshooting nicht stattfinden.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">Verhinderungen</h3>
          <p>
            Falls ein Fotoshooting-Termin nicht eingehalten werden kann,
            kontaktieren Sie uns bitte unverzüglich. Es werden keine Kosten
            rückerstattet.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">
            Von Ihnen zur Verfügung gestellte Informationen
          </h3>
          <p>
            Swissphotography wird Ihre personenbezogenen Angaben, wie etwa Name
            und Telefonnummer, entsprechend der Datenschutzerklärung von
            Swissphotography schützen und verwenden. Deren Inhalt wird durch
            diesen Hinweis Bestandteil dieser Nutzungsbedingungen.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Unsere Inhalte</h3>
          <p>
            Sie dürfen Inhalte von Swissphotography nur mit der entsprechenden
            Lizenz zu deren Nutzung verwenden. Die Nutzung von Inhalten von
            Swissphotography wird durch die anwendbare Lizenzvereinbarung, die
            Sie mit Swissphotography geschlossen haben, geregelt. Die Abbildung
            und/oder der Vertrieb von nicht lizenzierten oder mit Wasserzeichen
            versehenen Inhalten von Swissphotography (egal ob einzeln oder in
            abgeleiteten Werken) stellt eine Urheberrechtsverletzung dar.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            Garantien und Haftungsausschlüsse
          </h3>
          <div className="space-y-2">
            <p>
              Die Nutzung der Website erfolgt auf eigene Gefahr. Die Website
              wird von Swissphotography unter den aktuellen Nutzungsbedingungen
              und ohne jegliche Garantien (explizite, implizite, gesetzliche
              oder andere) zur Verfügung gestellt.
            </p>
            <p>
              Swissphotography übernimmt keinerlei Garantie, weder explizit noch
              implizit, für irgendeine Dienstleistung, auf die von der Website
              aus zugegriffen werden kann. Das beinhaltet unter anderem die
              Garantien der Mindestqualität, Eignung für einen bestimmten Zweck,
              Nichtverletzung und andere Garantien, die unter irgendein Gesetz
              fallen.
            </p>
            <p>
              Ohne Einschränkung des Vorhergehenden übernimmt Swissphotography
              keine Garantie, dass: (i) die Website Ihre Anforderungen erfüllt,
              (ii) der Zugang zu dieser Website unterbrechungsfrei erfolgt,
              (iii) die Qualität der Website Ihre Erwartungen erfüllt und (iv)
              jegliche Fehler oder Mängel auf dieser Website bzw. bei den
              Dienstleistungen oder Materialien behoben werden.
            </p>
            <p>
              Des Weiteren sind alle Angebote unverbindlich. Swissphotography
              behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte
              Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu
              löschen oder die Veröffentlichung zeitweise oder endgültig
              einzustellen.
            </p>
            <p>
              Swissphotography macht keinerlei Zusicherung und übernimmt
              keinerlei Garantie, dass die Website nach den Gesetzen Ihres
              Landes erlaubt ist, Ihr Inhalt auf der Website gespeichert oder zu
              Verfügung gestellt wird, die Website Ihre Anforderungen erfüllt
              oder dass Swissphotography eine bestimmte Funktion beibehält.
            </p>
            <p>
              Sollten Haftungsausschluss oder -beschränkungen nicht zutreffen,
              sind alle anwendbaren expliziten, impliziten oder gesetzlichen
              Garantien auf einen Zeitraum von dreißig (30) Tagen ab dem ersten
              Tag der Nutzung der Website beschränkt und haben nach Ablauf
              dieser Frist keine Gültigkeit mehr.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default agb;
