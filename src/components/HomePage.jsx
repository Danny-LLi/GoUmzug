import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Truck, Clock, Shield, Euro, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

// Import images directly from the src/assets folder
import image1 from '/src/assets/uxbOoxr7JT63.jpeg';
import image2 from '/src/assets/d65KJR5VbC1E.jpg';
import image3 from '/src/assets/GQmUJpOog2Rt.jpg';

const HomePage = () => {
  const valueProps = [
    {
      icon: <Euro className="h-8 w-8 text-goumzug-orange" />,
      title: "Faire Preise",
      description: "Transparente Angebote ohne versteckte Kosten"
    },
    {
      icon: <Shield className="h-8 w-8 text-goumzug-orange" />,
      title: "Erfahrene Profis",
      description: "Gut geschulte Fachleute aus München"
    },
    {
      icon: <Clock className="h-8 w-8 text-goumzug-orange" />,
      title: "Kurzfristige Termine",
      description: "Flexibel und schnell verfügbar"
    },
    {
      icon: <Truck className="h-8 w-8 text-goumzug-orange" />,
      title: "Rundum-Service",
      description: "Montage, Transport, Entsorgung"
    }
  ];

  const services = [
    {
      title: "Umzüge",
      description: "Lokale, nationale und internationale Umzüge für Privat- und Geschäftskunden",
      image: image1
    },
    {
      title: "Möbelmontage",
      description: "Professioneller Auf- und Abbau Ihrer Möbel von einfachen Regalen bis zu komplexen Schrankwänden",
      image: image2
    },
    {
      title: "Entrümpelung",
      description: "Fachgerechte Entrümpelung und umweltfreundliche Entsorgung von nicht mehr benötigten Gegenständen",
      image: image3
    }
  ];

  const testimonials = [
    {
      name: "Familie Müller",
      text: "GoUmzug hat unseren Umzug von München nach Berlin perfekt organisiert. Alles lief reibungslos!",
      rating: 5
    },
    {
      name: "Praxis Dr. Schmidt",
      text: "Professioneller Firmenumzug ohne Ausfallzeiten. Sehr empfehlenswert!",
      rating: 5
    },
    {
      name: "Anna K.",
      text: "Schnell, zuverlässig und faire Preise. Genau wie versprochen!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
  {/* SEO Meta Tags */}
  <title>GoUmzug - Umzugspartner in München | Zuverlässig & Fair</title> {/* */}
  <meta 
    name="description" 
    content="GoUmzug – Ihr Partner für stressfreie Umzüge, Möbelmontage und Entrümpelung in München und europaweit. Faire Preise, erfahrene Profis, schnelle Termine." 
  /> {/* */}
  <meta 
    name="keywords" 
    content="Umzug München, Umzugsfirma, Möbelmontage, Entrümpelung, GoUmzug, Firmenumzug, stressfreier Umzug" 
  />
  <link rel="canonical" href="https://goumzug.eu/" />

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://goumzug.eu/" />
  <meta property="og:title" content="GoUmzug - Umzugspartner in München | Zuverlässig & Fair" /> {/* */}
  <meta 
    property="og:description" 
    content="GoUmzug – Ihr Partner für stressfreie Umzüge, Möbelmontage und Entrümpelung in München und europaweit." 
  /> {/* */}
  <meta property="og:site_name" content="GoUmzug" /> {/* */}
  <meta property="og:locale" content="de_DE" />
  {/* TODO: Replace with a direct URL to a high-quality image for social sharing (e.g., https://goumzug.eu/social-home.jpg) */}
  <meta property="og:image" content="https://goumzug.eu/assets/57ijwef8234gt834bgg-6McvUA4V.png" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="GoUmzug - Umzugspartner in München | Zuverlässig & Fair" /> {/* */}
  <meta 
    name="twitter:description" 
    content="GoUmzug – Ihr Partner für stressfreie Umzüge, Möbelmontage und Entrümpelung in München und europaweit." 
  /> {/* */}
  {/* TODO: Replace with the same image URL used for og:image */}
  <meta name="twitter:image" content="https://goumzug.eu/assets/57ijwef8234gt834bgg-6McvUA4V.png" />
</Helmet>

      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center text-white relative">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            GoUmzug
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light text-orange-200">
            Ihr Partner für Umzug, Möbel- und Küchenmontage
          </p>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Ihr Umzug, unser Job!
          </p>
          <p className="text-xl md:text-2xl mb-8 text-orange-200">
            Planen. Packen. Umziehen.
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Wir machen Ihren Umzug einfach, schnell und zuverlässig.
            Von der Planung bis zum letzten Möbelstück – GoUmzug kümmert sich um alles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-goumzug-success hover:bg-green-600 text-white px-8 py-4 text-lg font-medium"
            >
              <Link to="/contact">
                Kostenloses Angebot erhalten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-gray-100 text-goumzug-blue border-2 border-goumzug-blue px-8 py-4 text-lg font-medium"
            >
              <Link to="/services">
                Unsere Leistungen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-goumzug-blue mb-8">
              Stress? Nicht mit uns!
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Willkommen bei GoUmzug, Ihrem zuverlässigen Partner für stressfreie Umzüge in München und ganz Europa.
              Wir verstehen, dass ein Umzug mehr ist als nur der Transport von Möbeln – es ist ein Neuanfang.
              Deshalb haben wir es uns zur Aufgabe gemacht, diesen Übergang für Sie so einfach, schnell und
              zuverlässig wie möglich zu gestalten.
            </p>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-goumzug-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-goumzug-blue mb-16">
            Warum GoUmzug?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <Card key={index} className="service-card bg-white border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold text-goumzug-blue mb-4">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600">
                    {prop.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-goumzug-blue mb-16">
            Unsere Leistungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card overflow-hidden border-0 shadow-lg">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-goumzug-blue mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-goumzug-blue text-goumzug-blue hover:bg-goumzug-blue hover:text-white"
                  >
                    <Link to="/services">
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-goumzug-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-goumzug-blue mb-16">
            Was unsere Kunden sagen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-goumzug-blue">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-goumzug-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Bereit für einen stressfreien Umzug?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Kontaktieren Sie uns noch heute, um ein unverbindliches Angebot zu erhalten
            und Ihren Umzug mit GoUmzug zu planen!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Button
              asChild
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

export default HomePage;
