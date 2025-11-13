import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, X } from 'lucide-react';

// New LegalPreview component to display the text as a simple, self-contained modal.
const LegalPreview = ({ title, content, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4 sm:p-0">
    <div className="relative w-full max-w-[700px] max-h-[90vh] bg-white rounded-lg shadow-xl flex flex-col">
      {/* Modal Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      {/* Modal Content */}
      <div className="flex-grow overflow-y-auto p-6">
        {content.map((section, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-bold text-lg mb-2">{section.heading}</h3>
            {section.paragraphs.map((para, pIndex) => (
              <p key={pIndex} className="text-sm text-gray-700 mb-1 leading-relaxed">{para}</p>
            ))}
            {section.list && (
              <ul className="list-disc list-inside mt-2 space-y-1">
                {section.list.map((item, iIndex) => (
                  <li key={iIndex} className="text-sm text-gray-700">{item}</li>
                ))}
              </ul>
            )}
            {section.subSections && section.subSections.map((sub, sIndex) => (
              <div key={sIndex} className="mt-4 pl-4 border-l-2 border-gray-200">
                <h4 className="font-semibold text-base mb-1">{sub.heading}</h4>
                {sub.paragraphs.map((para, spIndex) => (
                  <p key={spIndex} className="text-sm text-gray-700 mb-1 leading-relaxed">{para}</p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Daten für die rechtlichen Texte
const ImpressumData = [
  {
    heading: "Impressum",
    paragraphs: [
      "GoUmzug",
      "Inhaber: Mahmoud Alhaj Mohammad",
      "Engadiner Str. 52",
      "81475 München"
    ]
  },
  {
    heading: "Kontakt",
    paragraphs: [
      "Telefon: 0152 5613 6380",
      "E-Mail: info@goumzug.eu",
      "Website: www.goumzug.eu"
    ]
  },
  {
    heading: "Handelsregister & Steuern",
    paragraphs: [
      "Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE454918984",
      "Steuernummer: 144/106/13736",
      "Gewerbeanmeldung: Stadt München"
    ]
  },
  {
    heading: "Inhaltlich Verantwortlicher",
    paragraphs: [
      "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Mahmoud Alhaj Mohammad, Anschrift wie oben"
    ]
  },
  {
    heading: "Aufsichtsbehörde",
    paragraphs: ["Gewerbeamt Stadt München"]
  },
  {
    heading: "Online-Streitbeilegung",
    paragraphs: [
      "Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO: https://ec.europa.eu/consumers/odr",
      "Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
    ]
  }
];

const AGBData = [
  {
    heading: "Allgemeine Geschäftsbedingungen (AGB)",
    paragraphs: [
      "1. Geltungsbereich",
      "Diese AGB gelten für alle Verträge zwischen GoUmzug (Inhaber Mahmoud Alhaj Mohammad) und Verbraucher:innen oder Unternehmer:innen über Umzugsleistungen, Transporte sowie Möbel- und Küchenmontagen/Demontagen."
    ],
    subSections: [
      {
        heading: "2. Vertragsschluss",
        paragraphs: [
          "(1) Angebote sind unverbindlich und 14 Tage gültig, sofern nicht anders angegeben.",
          "(2) Ein Vertrag kommt durch schriftliche Bestätigung (E-Mail) oder Beginn der Leistung zustande."
        ]
      },
      {
        heading: "3. Leistungen und Mitwirkungspflichten",
        paragraphs: [
          "(1) Der genaue Leistungsumfang ergibt sich aus unserem Angebot.",
          "(2) Kund:innen müssen freien Zugang zu den Räumlichkeiten ermöglichen sowie Park- und Haltemöglichkeiten bereitstellen. Falls Halteverbotszonen erforderlich sind, müssen diese entweder vom Kunden oder gegen Gebühr von uns beantragt werden.",
          "(3) Eigenverpacktes Umzugsgut muss transportsicher verpackt sein."
        ]
      },
      {
        heading: "4. Preise und Zahlung",
        paragraphs: [
          "(1) Preise gelten gemäß Angebot. Zusatzleistungen (z. B. Wartezeiten, Sonderaufwand, nicht vereinbarte Arbeiten) werden nach Aufwand berechnet.",
          "(2) Rechnungsbeträge sind sofort nach Leistungserbringung fällig."
        ]
      },
      {
        heading: "5. Stornierungen",
        paragraphs: [
          "bis 7 Tage vor Termin: kostenfrei",
          "6–3 Tage vor Termin: 30 % des Angebotspreises",
          "2–1 Tag(e) vor Termin: 60 %",
          "am Einsatztag / Nichterscheinen: 90 %"
        ]
      },
      {
        heading: "6. Haftung / Versicherung",
        paragraphs: [
          "(1) Es gelten die gesetzlichen Regelungen nach §§ 451 ff. HGB.",
          "(2) Die Haftung ist auf 620 € pro m³ Laderaum begrenzt.",
          "(3) Schäden müssen offensichtlich sofort bei Ablieferung oder verdeckt innerhalb von 7 Tagen schriftlich gemeldet werden.",
          "(4) Für Elektrogeräte, Pflanzen, Tiere, Schmuck, Bargeld, Dokumente und unsachgemäß verpackte Güter wird keine Haftung übernommen, sofern kein Verschulden unsererseits vorliegt.",
          "(5) Auf Wunsch vermitteln wir eine Transportversicherung zum Zeit- oder Neuwert gegen Aufpreis. Lehnt der Kunde diese ausdrücklich ab, haften wir nur im gesetzlichen Rahmen."
        ]
      },
      {
        heading: "7. Montageleistungen",
        paragraphs: [
          "(1) Möbel- und Küchenmontagen erfolgen fachgerecht.",
          "(2) Für Schäden aufgrund fehlender Materialien oder Alt-/Vorschäden übernehmen wir keine Haftung.",
          "(3) Elektro- und Sanitäranschlüsse (z. B. Herd, Waschmaschine, Spüle) erfolgen nur, wenn ausdrücklich vereinbart und technisch gefahrlos möglich. Im Zweifel ist ein Fachbetrieb hinzuzuziehen."
        ]
      },
      {
        heading: "8. Gerichtsstand und Recht",
        paragraphs: [
          "(1) Es gilt deutsches Recht.",
          "(2) Gerichtsstand für Unternehmer ist München.",
          "(3) Für Verbraucher gilt der Wohnsitz des Kunden als Gerichtsstand."
        ]
      }
    ]
  }
];

const WiderrufsrechtData = [
  {
    heading: "Widerrufsbelehrung",
    paragraphs: [
      "Widerrufsrecht",
      "Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.",
      "Die Frist beginnt mit dem Tag des Vertragsabschlusses."
    ],
    subSections: [
      {
        heading: "Ausübung des Widerrufsrechts",
        paragraphs: [
          "Um Ihr Widerrufsrecht auszuüben, müssen Sie uns GoUmzug, Inhaber Mahmoud Alhaj Mohammad, Engadiner Str. 52, 81475 München, E-Mail: info@goumzug.eu, Telefon: 0152 5613 6380 mittels einer eindeutigen Erklärung (z. B. E-Mail) informieren."
        ]
      },
      {
        heading: "Folgen des Widerrufs",
        paragraphs: [
          "Wir erstatten alle Zahlungen binnen 14 Tagen ab Eingang des Widerrufs. Für die Rückzahlung verwenden wir dasselbe Zahlungsmittel."
        ]
      },
      {
        heading: "Besonderer Hinweis",
        paragraphs: [
          "Haben Sie verlangt, dass wir bereits während der Widerrufsfrist beginnen, so ist ein angemessener Betrag für die bis dahin erbrachten Leistungen zu zahlen.",
          "Das Widerrufsrecht erlischt, wenn die Leistung vollständig erbracht wurde und Sie dem ausdrücklich zugestimmt haben."
        ]
      }
    ]
  },
  {
    heading: "Muster-Widerrufsformular",
    paragraphs: [
      "(Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden es zurück.)",
      "An: GoUmzug, Engadiner Str. 52, 81475 München, E-Mail: info@goumzug.eu",
      "Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung:",
      "Bestellt am: ________________",
      "Name: ________________",
      "Anschrift: ________________",
      "Datum/Unterschrift: ________________"
    ]
  }
];

const DatenschutzData = [
  {
    heading: "Datenschutzerklärung (DSGVO)",
    paragraphs: [
      "1. Verantwortlicher",
      "GoUmzug",
      "Inhaber: Mahmoud Alhaj Mohammad",
      "Engadiner Str. 52, 81475 München",
      "E-Mail: info@goumzug.eu",
      "Telefon: 0152 5613 6380"
    ]
  },
  {
    heading: "2. Erhebung und Speicherung personenbezogener Daten",
    paragraphs: [
      "Wir verarbeiten personenbezogene Daten (z. B. Name, Adresse, E-Mail, Telefonnummer), die Sie uns über unsere Website, E-Mail oder telefonisch mitteilen, ausschließlich zur Bearbeitung von Anfragen und zur Durchführung von Verträgen."
    ]
  },
  {
    heading: "3. Weitergabe von Daten",
    paragraphs: [
      "Eine Weitergabe an Dritte erfolgt nur, soweit dies zur Vertragserfüllung erforderlich ist (z. B. Versicherung, Subunternehmer) oder wir gesetzlich dazu verpflichtet sind."
    ]
  },
  {
    heading: "4. Rechte der Betroffenen",
    paragraphs: [
      "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Datenübertragbarkeit. Zudem haben Sie ein Beschwerderecht bei der zuständigen Datenschutzbehörde."
    ]
  },
  {
    heading: "5. Sicherheit",
    paragraphs: [
      "Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Verlust, Manipulation oder unbefugten Zugriff zu schützen."
    ]
  },
  {
    heading: "6. Server-Logfiles",
    paragraphs: [
      "Beim Besuch unserer Website werden automatisch Daten wie IP-Adresse, Browsertyp und Zugriffszeit durch den Provider erfasst. Diese dienen ausschließlich der Sicherstellung eines störungsfreien Betriebs."
    ]
  },
  {
    heading: "7. Cookies und Analysetools",
    paragraphs: [
      "Sofern wir Cookies oder Tools (z. B. Google Maps, Google Analytics) einsetzen, geschieht dies nur nach Ihrer Einwilligung über ein Cookie-Banner."
    ]
  },
  {
    heading: "8. Kontaktformular",
    paragraphs: [
      "Wenn Sie uns über das Kontaktformular Anfragen senden, speichern wir Ihre Angaben zur Bearbeitung der Anfrage und für den Fall von Anschlussfragen."
    ]
  },
  {
    heading: "9. Speicherung",
    paragraphs: [
      "Wir speichern personenbezogene Daten nur so lange, wie es für die Vertragserfüllung notwendig ist oder wir gesetzlich dazu verpflichtet sind."
    ]
  },
  {
    heading: "10. Ansprechpartner Datenschutz",
    paragraphs: [
      "Für Fragen zum Datenschutz wenden Sie sich bitte an: E-Mail: info@goumzug.eu"
    ]
  }
];

const Footer = () => {
  const [activeLegalText, setActiveLegalText] = useState(null);

  const quickLinks = [
    { name: 'Startseite', href: '/' },
    { name: 'Leistungen', href: '/services' },
    { name: 'Pakete', href: '/packages' },
    { name: 'Warum GoUmzug?', href: '/why-us' },
    { name: 'Kontakt', href: '/contact' }
  ];

  const services = [
    'Lokale Umzüge',
    'Fernumzüge Deutschland',
    'Internationale Umzüge',
    'Möbelmontage',
    'Entrümpelung',
    'Firmenumzüge'
  ];

  const legalLinks = [
    { name: 'Impressum', data: ImpressumData },
    { name: 'Datenschutz', data: DatenschutzData },
    { name: 'AGB', data: AGBData },
    { name: 'Widerrufsrecht', data: WiderrufsrechtData }
  ];

  const openLegalText = (data) => {
    setActiveLegalText(data);
  };

  const closeLegalText = () => {
    setActiveLegalText(null);
  };

  return (
    <>
     <Helmet>
  {/* SEO Meta Tags */}
  <title>GoUmzug - Ihr Umzugspartner</title> {/* */}
  <meta 
    name="description" 
    content="GoUmzug bietet professionelle Umzugsdienstleistungen aus München. Wir kümmern uns um Ihren Umzug – schnell, zuverlässig und günstig." 
  /> {/* */}
  <meta 
    name="keywords" 
    content="GoUmzug, Umzug, Umzugspartner, München, Umzugsdienstleistungen" 
  />
  <link rel="canonical" href="https://goumzug.eu/" />

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://goumzug.eu/" />
  <meta property="og:title" content="GoUmzug - Ihr Umzugspartner" /> {/* */}
  <meta 
    property="og:description" 
    content="GoUmzug bietet professionelle Umzugsdienstleistungen aus München. Wir kümmern uns um Ihren Umzug – schnell, zuverlässig und günstig." 
  /> {/* */}
  <meta property="og:site_name" content="GoUmzug" /> {/* */}
  <meta property="og:locale" content="de_DE" />
  {/* TODO: Replace with a direct URL to a high-quality image for social sharing (e.g., https://goumzug.eu/social-default.jpg) */}
  <meta property="og:image" content="https://goumzug.eu/assets/57ijwef8234gt834bgg-6McvUA4V.png" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="GoUmzug - Ihr Umzugspartner" /> {/* */}
  <meta 
    name="twitter:description" 
    content="GoUmzug bietet professionelle Umzugsdienstleistungen aus München. Wir kümmern uns um Ihren Umzug – schnell, zuverlässig und günstig." 
  /> {/* */}
  {/* TODO: Replace with the same image URL used for og:image */}
  <meta name="twitter:image" content="https://goumzug.eu/assets/57ijwef8234gt834bgg-6McvUA4V.png" />
</Helmet>
      <footer className="bg-white text-black">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="text-2xl font-bold text-black">
                  GoUmzug
                </div>
                <div className="text-sm text-goumzug-blue font-medium">
                  Ihr Umzug, unser Job!
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ihr zuverlässiger Partner für stressfreie Umzüge in München, Deutschland und ganz Europa.
                Wir machen Ihren Umzug einfach, schnell und zuverlässig.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-goumzug-blue transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-700 hover:text-goumzug-blue transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-700 hover:text-goumzug-blue transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-goumzug-blue">
                Navigation
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-goumzug-blue">
                Unsere Leistungen
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-700">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-goumzug-blue">
                Kontakt
              </h3>
              <div className="space-y-4">
                {/* Updated and clickable address */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Engadiner%20Str.%2052%2C%2081475%20M%C3%BCnchen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-700 hover:text-black transition-colors"
                >
                  <MapPin className="h-5 w-5 text-goumzug-blue mt-1 flex-shrink-0" />
                  <div>
                    <p>
                      Engadiner Str. 52<br />
                      81475 München<br />
                      Deutschland
                    </p>
                  </div>
                </a>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-goumzug-blue flex-shrink-0" />
                  <a href="tel:+4915256136380" className="text-gray-700 hover:text-black transition-colors">
                    +49 15 256 136 380
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-goumzug-blue flex-shrink-0" />
                  <a href="mailto:info@goumzug.eu" className="text-gray-700 hover:text-black transition-colors">
                    info@goumzug.eu
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-goumzug-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">
                      Mo-Fr: 8:00-18:00 Uhr<br />
                      Sa: 9:00-14:00 Uhr<br />
                      Notfall: 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-700 text-sm mb-4 md:mb-0">
                © 2024 GoUmzug. Alle Rechte vorbehalten.
              </div>
              <div className="flex flex-wrap gap-6">
                {legalLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => openLegalText({ title: link.name, content: link.data })}
                    className="text-gray-700 hover:text-black text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-goumzug-blue py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-center">
              <div className="text-white text-sm">
                ✓ Vollversichert & Zertifiziert
              </div>
              <div className="text-white text-sm">
                ✓ Über 500 zufriedene Kunden
              </div>
              <div className="text-white text-sm">
                ✓ Kurzfristige Termine möglich
              </div>
              <div className="text-white text-sm">
                ✓ Faire Preise ohne versteckte Kosten
              </div>
            </div>
          </div>
        </div>
      </footer>
      {activeLegalText && (
        <LegalPreview
          title={activeLegalText.title}
          content={activeLegalText.content}
          onClose={closeLegalText}
        />
      )}
    </>
  );
};

export default Footer;
