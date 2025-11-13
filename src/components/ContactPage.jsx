import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-goumzug-orange" />,
      title: "Telefon",
      content: "+49 15 256 136 380",
      description: "Mo-Fr: 8:00-18:00 Uhr, Sa: 9:00-14:00 Uhr",
      type: "tel"
    },
    {
      icon: <Mail className="h-6 w-6 text-goumzug-orange" />,
      title: "E-Mail",
      content: "info@goumzug.eu",
      description: "Wir antworten innerhalb von 24 Stunden",
      type: "mail"
    },
    {
      icon: <MapPin className="h-6 w-6 text-goumzug-orange" />,
      title: "Adresse",
      content: "Engadiner Str. 52, 81475 München",
      description: "Beratung vor Ort nach Terminvereinbarung",
      type: "address"
    }
  ];

  const services = [
    "Kostenlose Besichtigung vor Ort",
    "Unverbindliches Angebot innerhalb von 24h",
    "Flexible Terminplanung",
    "Kurzfristige Umzüge möglich",
    "Beratung zu allen Umzugsleistungen",
    "Individuelle Lösungen für jeden Bedarf"
  ];

  // Helper function to get the appropriate href for the link.
  const getHref = (type, content) => {
    if (type === 'tel') {
      return `tel:${content.replace(/\s/g, '')}`;
    }
    if (type === 'mail') {
      return `mailto:${content}`;
    }
    if (type === 'address') {
      return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content)}`;
    }
    return '#';
  };

  return (
    <div className="min-h-screen">
       <Helmet>
        {/* SEO Meta Tags */}
        <title>Kontakt | GoUmzug - Ihr Umzugspartner in München</title> 
        <meta 
          name="description" 
          content="Kontaktieren Sie GoUmzug für professionelle Umzugsdienstleistungen, Möbelmontage und Entrümpelung aus München. Wir helfen Ihnen bei Ihrem Umzug." 
        /> 
        <meta 
          name="keywords" 
          content="Kontakt Umzugsfirma, Umzug München, GoUmzug Kontakt, Angebot Umzug, Telefon, E-Mail, Adresse" 
        />
        <link rel="canonical" href="https://goumzug.eu/contact" /> 

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" /> 
        <meta property="og:url" content="https://goumzug.eu/contact" />
        <meta property="og:title" content="Kontakt | GoUmzug" /> 
        <meta 
          property="og:description" 
          content="Kontaktieren Sie GoUmzug für professionelle Umzugsdienstleistungen, Möbelmontage und Entrümpelung aus München." 
        /> 
        <meta property="og:site_name" content="GoUmzug" /> 
        <meta property="og:locale" content="de_DE" />
        <meta property="og:image" content="https://goumzug.eu/assets/57ijwef8234gt834bgg-6McvUA4V.png" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kontakt | GoUmzug - Ihr Umzugspartner in München" /> 
        <meta 
          name="twitter:description" 
          content="Kontaktieren Sie GoUmzug für professionelle Umzugsdienstleistungen, Möbelmontage und Entrümpelung aus München." 
        /> 
        <meta name="twitter:image" content="https://goumzug.eu/assets/57ijwef8234gt834bgg-6McvUA4V.png" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-goumzug-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Kontakt
            </h1>
            <p className="text-xl leading-relaxed">
              Planen Sie einen Umzug oder benötigen Sie Unterstützung bei der Möbelmontage oder Entrümpelung?
              GoUmzug steht Ihnen mit Rat und Tat zur Seite!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Direct Contact Information (Existing buttons) */}
            <div>
              <div className="border-0 shadow-lg rounded-lg bg-white p-6">
                <div>
                  <h2 className="text-2xl text-goumzug-blue font-semibold">
                    Sprechen Sie mit uns
                  </h2>
                  <p className="text-gray-600">
                    Für ein kostenloses und unverbindliches Angebot erreichen Sie uns am besten telefonisch oder per E-Mail. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                  </p>
                </div>
                <div className="mt-6 space-y-6">
                   <a
                      href="tel:+4915256136380"
                      className="inline-flex items-center justify-center w-full bg-goumzug-success hover:bg-green-600 text-white py-3 text-lg font-medium rounded-lg"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Jetzt anrufen
                    </a>
                    <a
                      href="mailto:info@goumzug.eu"
                      className="inline-flex items-center justify-center w-full bg-white hover:bg-gray-100 text-goumzug-blue border-2 border-goumzug-blue py-3 text-lg font-medium rounded-lg"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                        E-Mail senden
                    </a>
                </div>
              </div>
            </div>

            {/* Contact Information Cards (Now clickable) */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-goumzug-blue mb-8">
                  Kontaktinformationen
                </h2 >
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const isClickable = true;
                    const Wrapper = isClickable ? 'a' : 'div';
                    const href = getHref(info.type, info.content);
                    const wrapperProps = isClickable
                      ? { href, className: `block border-0 shadow-lg rounded-lg bg-white transition-shadow duration-200 hover:shadow-xl cursor-pointer`, target: "_blank", rel: "noopener noreferrer" }
                      : { className: `block border-0 shadow-lg rounded-lg bg-white` };

                    return (
                      <Wrapper key={index} {...wrapperProps}>
                        <div className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              {info.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold text-goumzug-blue mb-1">
                                {info.title}
                              </h3>
                              <p className="text-lg font-medium text-gray-900 mb-1">
                                {info.content}
                              </p>
                              <p className="text-sm text-gray-600">
                                {info.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Wrapper>
                    );
                  })}
                </div>
              </div>

              <div className="border-0 shadow-lg rounded-lg bg-white">
                <div className="p-6">
                  <h3 className="text-xl text-goumzug-blue font-semibold pb-4">
                    Was Sie erwarten können
                  </h3>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-goumzug-success mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - No External iframes, Pure CSS Solution */}
      <section className="py-20 bg-goumzug-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-goumzug-blue mb-12">
            Unser Standort
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* Visual Map Representation with CSS */}
            <div className="relative border-0 shadow-lg overflow-hidden rounded-lg bg-white h-96 mb-8">
              <div className="relative w-full h-full bg-gradient-to-br from-green-100 via-green-50 to-blue-50 overflow-hidden">
                {/* Map Background Pattern */}
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
                
                {/* Roads/Streets */}
                <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-400 transform -translate-y-1/2"></div>
                <div className="absolute top-0 bottom-0 left-1/3 w-2 bg-gray-400"></div>
                <div className="absolute top-0 bottom-0 right-1/4 w-1 bg-gray-300"></div>
                
                {/* Location Pin - Your Address */}
                <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-full">
                  <div className="relative">
                    <div className="w-8 h-8 bg-goumzug-orange rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                    <div className="absolute top-full left-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-goumzug-orange transform -translate-x-1/2"></div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white px-3 py-1 rounded shadow-md whitespace-nowrap">
                    <span className="text-sm font-semibold text-goumzug-blue">GoUmzug</span>
                  </div>
                </div>
                
                {/* Landmark Buildings */}
                <div className="absolute bottom-1/4 left-1/4 w-4 h-6 bg-gray-600"></div>
                <div className="absolute bottom-1/4 right-1/3 w-3 h-5 bg-gray-500"></div>
                <div className="absolute top-1/4 right-1/4 w-5 h-4 bg-gray-600"></div>
                
                {/* Area Labels */}
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded text-sm font-medium text-gray-700">
                  München-Solln
                </div>
                <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded text-xs text-gray-600">
                  81475 München
                </div>
                
                {/* Compass */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center border-2 border-gray-200">
                  <div className="text-xs font-bold text-gray-700">N</div>
                  <div className="absolute top-1 w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-red-500"></div>
                </div>
                
                {/* Click overlay for map services */}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer"
                     onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Engadiner+Str.+52,+81475+München', '_blank')}>
                  <div className="bg-white bg-opacity-95 px-6 py-3 rounded-lg shadow-lg">
                    <ExternalLink className="inline mr-2 h-5 w-5 text-goumzug-blue" />
                    <span className="font-medium text-goumzug-blue">Karte in Google Maps öffnen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Location Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Address Card */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-goumzug-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-goumzug-blue mb-2">Unsere Adresse</h3>
                  <p className="text-lg text-gray-700 mb-2 font-medium">Engadiner Str. 52</p>
                  <p className="text-lg text-gray-700 mb-4 font-medium">81475 München</p>
                  <p className="text-sm text-gray-600">Stadtteil: München-Solln</p>
                </div>
                
                <div className="space-y-3">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Engadiner+Str.+52,+81475+München"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-goumzug-blue hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Google Maps Route
                  </a>
                  <a
                    href="https://maps.apple.com/?daddr=Engadiner+Str.+52,+81475+München"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Apple Maps Route
                  </a>
                  <a
                    href="https://www.waze.com/ul?q=Engadiner%20Str.%2052%2C%2081475%20München&navigate=yes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Waze Navigation
                  </a>
                </div>
              </div>

              {/* Transportation & Directions */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-goumzug-blue mb-6 text-center">
                  Anfahrt & Verkehrsanbindung
                </h3>
                
                <div className="space-y-5">
                  <div className="flex items-start space-x-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl">🚗</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Mit dem Auto</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Über A95 (Ausfahrt München-Süd) oder A96
                      </p>
                      <p className="text-xs text-gray-500">
                        Parkplätze vor Ort verfügbar
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl">🚊</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Öffentlich</h4>
                      <p className="text-sm text-gray-600 mb-1">
                        S-Bahn S7 bis Haltestelle Solln
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        Bus 135 bis "Engadiner Straße"
                      </p>
                      <p className="text-xs text-gray-500">
                        Ca. 5 Min. Fußweg zur Haltestelle
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Hilfe beim Finden</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Rufen Sie uns gerne an: <br/>
                        <strong>+49 15 256 136 380</strong>
                      </p>
                      <p className="text-xs text-gray-500">
                        Wir helfen Ihnen bei der Wegfindung
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Location Context */}
            <div className="mt-6 bg-white rounded-lg shadow-lg p-6 text-center">
              <h4 className="text-lg font-semibold text-goumzug-blue mb-3">Unser Standort in München</h4>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Wir befinden uns in München-Solln, einem ruhigen Stadtteil im Süden Münchens. 
                Die Lage bietet eine gute Anbindung an alle Stadtteile und ist optimal für 
                Umzüge im gesamten Münchener Raum sowie bayernweit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-goumzug-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Bereit für Ihren stressfreien Umzug?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Wir freuen uns darauf, Ihnen bei Ihrem nächsten Umzug zu helfen und
            diesen für Sie so angenehm wie möglich zu gestalten!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4915256136380"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-colors duration-200 rounded-lg shadow-md bg-goumzug-success hover:bg-green-600"
            >
              <Phone className="mr-2 h-5 w-5" />
              Jetzt anrufen
            </a>
            <a
              href="mailto:info@goumzug.eu"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium transition-colors duration-200 bg-white border-2 rounded-lg shadow-md text-goumzug-blue border-goumzug-blue hover:bg-gray-100"
            >
              <Mail className="mr-2 h-5 w-5" />
                E-Mail senden
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
