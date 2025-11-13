import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, Users, Building, Plane, Package } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const PackagesPage = () => {
  const packages = [
    {
      id: 'smart',
      title: 'Smart-Paket',
      description: 'Für alle, die selbst mit anpacken.',
      price: 'Ab 79 € / Std.',
      icon: <Users className="h-8 w-8 text-goumzug-orange" />,
      features: [
        'Transporter mit Fahrer',
        'Hilfe beim Be- und Entladen',
        'Flexible Stundenabrechnung',
        'Ideal für kleine Umzüge'
      ],
      idealFor: 'Kleine Umzüge, Studierende oder Kunden mit geringem Budget',
      popular: false
    },
    {
      id: 'flex',
      title: 'Flex-Paket',
      description: 'Sie packen – wir tragen und montieren.',
      price: 'Ab 119 € / Std.',
      icon: <Package className="h-8 w-8 text-goumzug-orange" />,
      features: [
        '2 erfahrene Umzugshelfer',
        'Transporter inklusive',
        'Möbelmontage inklusive',
        'Professionelle Ausrüstung'
      ],
      idealFor: 'Kunden, die eine umfassendere Unterstützung wünschen',
      popular: true
    },
    {
      id: 'express',
      title: 'Express-Paket',
      description: 'Schnell, günstig, perfekt für WG-Zimmer oder Studios.',
      price: 'Ab 69 € / Std.',
      icon: <Star className="h-8 w-8 text-goumzug-orange" />,
      features: [
        'Kurzfristige Termine möglich',
        'Ideal für Beiladungen',
        'Schnelle Abwicklung',
        'Günstigster Preis'
      ],
      idealFor: 'Studierende, Singles oder spontane Umzüge',
      popular: false
    },
    {
      id: 'business',
      title: 'Business-Paket',
      description: 'Professionelle Firmenumzüge – reibungslos und effizient.',
      price: 'Individuelles Angebot',
      icon: <Building className="h-8 w-8 text-goumzug-orange" />,
      features: [
        'Planung ohne Ausfallzeiten',
        'Professionelle Durchführung',
        'Spezielle Büroausstattung',
        'Wochenend- und Abendtermine'
      ],
      idealFor: 'Büros, Praxen, Kanzleien und andere Gewerberäume',
      popular: false
    },
    {
      id: 'komfort',
      title: 'Komfort-Plus',
      description: 'Zurücklehnen – wir übernehmen alles.',
      price: 'Festpreis nach Besichtigung',
      icon: <Check className="h-8 w-8 text-goumzug-orange" />,
      features: [
        'Packen, Tragen, Möbel aufbauen',
        'Kompletter Rundum-Service',
        'Optional: Reinigung & Entsorgung',
        'Maximaler Komfort'
      ],
      idealFor: 'Kunden, die maximalen Komfort wünschen',
      popular: false
    },
    {
      id: 'fernumzug',
      title: 'Fernumzüge Deutschland & EU',
      description: 'Weite Strecken? Kein Problem.',
      price: 'Pauschalpreis auf Anfrage',
      icon: <Plane className="h-8 w-8 text-goumzug-orange" />,
      features: [
        'Deutschland- & europaweit',
        'Auch Beiladung möglich',
        'Sichere Langstreckentransporte',
        'Internationale Erfahrung'
      ],
      idealFor: 'Umzüge über große Distanzen',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
     <Helmet>
  {/* SEO Meta Tags */}
  <title>Unsere Pakete | GoUmzug - Umzugsservice München</title> {/* */}
  <meta 
    name="description" 
    content="Wählen Sie aus unseren fairen und transparenten Umzugspaketen das passende für Ihre Bedürfnisse. Von Smart bis Business gibt es für jede Situation eine Lösung." 
  /> {/* */}
  <meta 
    name="keywords" 
    content="Umzugspakete, Umzug Kosten, Smart-Paket, Flex-Paket, Business-Paket, Fernumzüge, GoUmzug Preise" 
  />
  <link rel="canonical" href="https://goumzug.eu/packages" /> {/* */}

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://goumzug.eu/packages" />
  <meta property="og:title" content="Unsere Pakete | GoUmzug - Umzugsservice München" /> {/* */}
  <meta 
    property="og:description" 
    content="Wählen Sie aus unseren fairen und transparenten Umzugspaketen das passende für Ihre Bedürfnisse." 
  /> {/* */}
  <meta property="og:site_name" content="GoUmzug" /> {/* */}
  <meta property="og:locale" content="de_DE" />
  {/* TODO: Replace with a direct URL to a high-quality image for social sharing (e.g., https://goumzug.eu/social-packages.jpg) */}
  <meta property="og:image" content="https://goumzug.eu/assets/57ijwef8234gt834bgg-6McvUA4V.png" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Unsere Pakete | GoUmzug - Umzugsservice München" /> {/* */}
  <meta 
    name="twitter:description" 
    content="Wählen Sie aus unseren fairen und transparenten Umzugspaketen das passende für Ihre Bedürfnisse." 
  /> {/* */}
  {/* TODO: Replace with the same image URL used for og:image */}
  <meta name="twitter:image" content="https://goumzug.eu/assets/57ijwef8234gt834bgg-6McvUA4V.png" />
</Helmet>
      {/* Page Header */}
      <section className="bg-goumzug-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Unsere Pakete
            </h1>
            <p className="text-xl leading-relaxed mb-8">
              Bei GoUmzug glauben wir an faire und transparente Preise. Wählen Sie das Paket, 
              das am besten zu Ihren Bedürfnissen und Ihrem Budget passt.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
              <p className="text-lg font-semibold">
                ✓ Faire Preise – transparente Angebote
              </p>
              <p className="text-lg font-semibold">
                ✓ Keine versteckten Kosten
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-goumzug-gray">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`package-card relative border-0 shadow-lg h-full ${
                  pkg.popular ? 'featured' : ''
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-goumzug-orange text-white px-4 py-1">
                    Beliebteste Wahl
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-2xl text-goumzug-blue mb-2">
                    {pkg.title}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">
                    {pkg.description}
                  </p>
                  <div className="text-3xl font-bold text-goumzug-orange">
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-goumzug-success mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 font-medium mb-2">Ideal für:</p>
                    <p className="text-sm text-gray-700">{pkg.idealFor}</p>
                  </div>
                  <Button 
                    asChild
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-goumzug-orange hover:bg-orange-600' 
                        : 'bg-goumzug-blue hover:bg-blue-700'
                    } text-white`}
                  >
                    <Link to="/contact">
                      Angebot anfordern
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-goumzug-blue mb-8">
              Unsere Preisphilosophie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-goumzug-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-goumzug-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-goumzug-blue mb-4">
                    Transparente Preise
                  </h3>
                  <p className="text-gray-600">
                    Keine versteckten Kosten. Sie wissen von Anfang an, 
                    was auf Sie zukommt.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-goumzug-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-goumzug-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-goumzug-blue mb-4">
                    Faire Konditionen
                  </h3>
                  <p className="text-gray-600">
                    Wir glauben an Ehrlichkeit und Vertrauen. 
                    Das spiegelt sich in unserer Preispolitik wider.
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unsere Philosophie ist einfach: <strong>Faire Preise – transparente Angebote.</strong> 
              Wir versprechen Ihnen keine versteckten Kosten – Sie wissen von Anfang an, was auf Sie zukommt. 
              Bei GoUmzug erhalten Sie stets ein klares und verständliches Angebot, das alle Leistungen detailliert auflistet.
            </p>
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <section className="py-20 bg-goumzug-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-goumzug-blue mb-16">
            Welches Paket passt zu Ihnen?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-goumzug-blue mb-4">
                  Kleine Umzüge
                </h3>
                <p className="text-gray-600 mb-6">
                  WG-Zimmer, Studios, wenige Möbel
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-goumzug-orange text-goumzug-orange">
                    Express-Paket
                  </Badge>
                  <Badge variant="outline" className="border-goumzug-blue text-goumzug-blue">
                    Smart-Paket
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-goumzug-blue mb-4">
                  Familien-Umzüge
                </h3>
                <p className="text-gray-600 mb-6">
                  Wohnungen, Häuser, komplette Haushalte
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-goumzug-orange text-goumzug-orange">
                    Flex-Paket
                  </Badge>
                  <Badge variant="outline" className="border-goumzug-blue text-goumzug-blue">
                    Komfort-Plus
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-goumzug-blue mb-4">
                  Firmen-Umzüge
                </h3>
                <p className="text-gray-600 mb-6">
                  Büros, Praxen, Gewerberäume
                </p>
                <div className="space-y-2">
                  <Badge variant="outline" className="border-goumzug-orange text-goumzug-orange">
                    Business-Paket
                  </Badge>
                  <Badge variant="outline" className="border-goumzug-blue text-goumzug-blue">
                    Fernumzüge
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-goumzug-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Noch unsicher? Wir beraten Sie gerne!
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Unser erfahrenes Team hilft Ihnen dabei, das perfekte Paket für Ihren Umzug zu finden. 
            Kontaktieren Sie uns für eine kostenlose und unverbindliche Beratung.
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
              <Link to="/services">
                Alle Leistungen
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
