import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Truck, Wrench, Trash2, Package, Plane } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

// Import images directly from the src/assets folder
import imageMontage from '/src/assets/d65KJR5VbC1E.jpg';
import imageEntruempelung from '/src/assets/GQmUJpOog2Rt.jpg';
import imageEinpackservice from '/src/assets/uxbOoxr7JT63.jpeg';

const ServicesPage = () => {
  const movingServices = [
    {
      icon: <MapPin className="h-8 w-8 text-goumzug-orange" />,
      title: "Lokale Umzüge",
      description: "Ein Umzug innerhalb Münchens oder in die umliegenden Gebiete? GoUmzug sorgt für einen schnellen und effizienten Transport Ihrer Güter. Wir kennen die lokalen Gegebenheiten und garantieren einen reibungslosen Ablauf, damit Sie sich schnell in Ihrem neuen Zuhause oder Büro einleben können.",
      features: ["Schnelle Abwicklung", "Lokale Expertise", "Flexible Termine", "Günstige Preise"]
    },
    {
      icon: <Truck className="h-8 w-8 text-goumzug-orange" />,
      title: "Fernumzüge (Deutschland)",
      description: "Wenn Ihr Weg Sie in eine andere Stadt innerhalb Deutschlands führt, ist GoUmzug Ihr verlässlicher Partner. Wir planen und realisieren Ihren Fernumzug mit höchster Präzision und Sorgfalt, um sicherzustellen, dass Ihr Hab und Gut sicher und pünktlich am Ziel ankommt.",
      features: ["Deutschlandweite Abdeckung", "Sichere Verpackung", "Pünktliche Lieferung", "Versicherungsschutz"]
    },
    {
      icon: <Plane className="h-8 w-8 text-goumzug-orange" />,
      title: "Internationale Umzüge (EU)",
      description: "Ein Umzug ins europäische Ausland erfordert besondere Expertise und Kenntnisse der jeweiligen Bestimmungen. GoUmzug verfügt über langjährige Erfahrung und ein weitreichendes Netzwerk, um Ihren Umzug in jedes EU-Land stressfrei zu gestalten.",
      features: ["EU-weite Abdeckung", "Zollabwicklung", "Mehrsprachiger Service", "Internationale Erfahrung"]
    }
  ];

  const additionalServices = [
    {
      icon: <Wrench className="h-8 w-8 text-goumzug-orange" />,
      title: "Möbelmontage & Demontage",
      description: "Unsere erfahrenen Spezialisten übernehmen den professionellen Auf- und Abbau Ihrer Möbel. Egal ob es sich um komplexe Schrankwände, Betten, Küchenmöbel oder einfache Regale handelt – wir sorgen dafür, dass alles fachgerecht demontiert, transportiert und am neuen Standort wieder präzise montiert wird.",
      image: imageMontage
    },
    {
      icon: <Trash2 className="h-8 w-8 text-goumzug-orange" />,
      title: "Entrümpelung & Entsorgung",
      description: "Schaffen Sie Platz und befreien Sie sich von Unnötigem! GoUmzug bietet professionelle Entrümpelungsdienste für Wohnungen, Häuser, Keller, Dachböden und Büros. Wir sortieren, demontieren und entsorgen nicht mehr benötigte Gegenstände umweltfreundlich und fachgerecht.",
      image: imageEntruempelung
    },
    {
      icon: <Package className="h-8 w-8 text-goumzug-orange" />,
      title: "Ein- & Auspackservice",
      description: "Auf Wunsch übernehmen wir auch das Ein- und Auspacken Ihres gesamten Hausrats. Unsere geschulten Mitarbeiter verpacken Ihre Wertgegenstände sicher und effizient, beschriften die Kartons übersichtlich und packen am Zielort alles wieder aus.",
      image: imageEinpackservice
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
  {/* SEO Meta Tags */}
  <title>Unsere Leistungen | GoUmzug - Umzugsservice München</title> {/* */}
  <meta 
    name="description" 
    content="Entdecken Sie das umfassende Angebot an Umzugsdienstleistungen von GoUmzug, von lokalen Umzügen bis zu internationalen Umzügen und ergänzenden Services." 
  /> {/* */}
  <meta 
    name="keywords" 
    content="Umzugsdienstleistungen, Lokale Umzüge, Fernumzüge, Möbelmontage, Entrümpelung, Einpackservice, GoUmzug Leistungen" 
  />
  <link rel="canonical" href="https://goumzug.eu/services" /> {/* */}

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://goumzug.eu/services" />
  <meta property="og:title" content="Unsere Leistungen | GoUmzug - Umzugsservice München" /> {/* */}
  <meta 
    property="og:description" 
    content="Entdecken Sie das umfassende Angebot an Umzugsdienstleistungen von GoUmzug in München und ganz Europa." 
  /> {/* */}
  <meta property="og:site_name" content="GoUmzug" />
  <meta property="og:locale" content="de_DE" />
  {/* TODO: Replace with a direct URL to a high-quality image for social sharing (e.g., https://goumzug.eu/social-services.jpg) */}
  <meta property="og:image" content="https://goumzug.eu/assets/57ijwef8234gt834bgg-6McvUA4V.png" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Unsere Leistungen | GoUmzug - Umzugsservice München" /> {/* */}
  <meta 
    name="twitter:description" 
    content="Entdecken Sie das umfassende Angebot an Umzugsdienstleistungen von GoUmzug in München und ganz Europa." 
  /> {/* */}
  {/* TODO: Replace with the same image URL used for og:image */}
  <meta name="twitter:image" content="https://goumzug.eu/assets/57ijwef8234gt834bgg-6McvUA4V.png" />
</Helmet>

      {/* Page Header */}
      <section className="bg-goumzug-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Unsere Leistungen
            </h1>
            <p className="text-xl leading-relaxed">
              GoUmzug bietet Ihnen ein umfassendes Spektrum an Umzugsdienstleistungen, 
              die speziell auf Ihre individuellen Bedürfnisse zugeschnitten sind.
            </p>
          </div>
        </div>
      </section>

      {/* Moving Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-goumzug-blue mb-16">
            Umzüge in Deutschland und Europa
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {movingServices.map((service, index) => (
              <Card key={index} className="service-card border-0 shadow-lg h-full">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-goumzug-blue">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-goumzug-orange rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Beiladung Info */}
          <div className="mt-12 bg-goumzug-gray p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-goumzug-blue mb-4">
              Beiladung - Kostengünstige Option
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Für nationale und internationale Fernumzüge bieten wir auch die kostengünstige Option der Beiladung an. 
              Dies ist ideal, wenn Sie flexibel sind und nur wenige Gegenstände transportieren möchten. 
              Ihre Güter werden dabei mit anderen Transporten kombiniert, was die Kosten senkt, ohne die Sicherheit zu beeinträchtigen.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-goumzug-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-goumzug-blue mb-16">
            Zusätzliche Services
          </h2>
          <div className="space-y-12">
            {additionalServices.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <Card className="service-card border-0 shadow-lg h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        {service.icon}
                        <h3 className="text-2xl font-bold text-goumzug-blue ml-4">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport & Delivery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-goumzug-blue mb-8">
              Transport & Lieferung
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Neben kompletten Umzügen bieten wir auch flexible Transport- und Lieferdienste an. 
              Ob einzelne Möbelstücke, Haushaltsgeräte oder andere Güter – wir transportieren Ihre Artikel 
              sicher und zuverlässig an den gewünschten Ort. "Unser Job IHR UMZUG" bedeutet, dass wir für 
              jede Transportaufgabe die passende Lösung finden.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-goumzug-success hover:bg-green-600 text-white px-8 py-4 text-lg font-medium"
            >
              <Link to="/contact">
                Jetzt Angebot anfordern
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-goumzug-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Haben Sie Fragen zu unseren Leistungen?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Unser erfahrenes Team berät Sie gerne und erstellt Ihnen ein maßgeschneidertes Angebot 
            für Ihren individuellen Umzug.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-goumzug-success hover:bg-green-600 text-white px-8 py-4 text-lg font-medium"
            >
              <Link to="/contact">
                Kostenlose Beratung
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="bg-white hover:bg-gray-100 text-goumzug-blue border-2 border-goumzug-blue px-8 py-4 text-lg font-medium"
            >
              <Link to="/packages">
                Pakete ansehen
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
