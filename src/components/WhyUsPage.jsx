import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Clock, Shield, Heart, CheckCircle, Star, Truck } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

// Import images directly from the src/assets folder
import imageExperience from '/src/assets/d65KJR5VbC1E.jpg';
import imageSatisfaction from '/src/assets/uxbOoxr7JT63.jpeg';
import imageFlexibility from '/src/assets/GQmUJpOog2Rt.jpg';
import imageTransparency from '/src/assets/kyem840KEiY1.jpg';

const WhyUsPage = () => {
  const features = [
    {
      icon: <Award className="h-12 w-12 text-goumzug-orange" />,
      title: "Erfahrung und Kompetenz",
      description: "Unser Team besteht aus erfahrenen und gut geschulten Fachleuten, die ihr Handwerk verstehen. Jeder Mitarbeiter bei GoUmzug ist darauf spezialisiert, Ihren Umzug mit größter Sorgfalt, Effizienz und Professionalität zu managen. Wir wissen, wie man auch die komplexesten Umzugsherausforderungen meistert, und setzen unser Wissen und unsere Fähigkeiten ein, um Ihnen den bestmöglichen Service zu bieten.",
      image: imageExperience
    },
    {
      icon: <Heart className="h-12 w-12 text-goumzug-orange" />,
      title: "Kundenzufriedenheit",
      description: "Ihre Zufriedenheit ist unser oberstes Ziel. Wir sind stolz auf die positiven Rückmeldungen unserer Kunden und arbeiten kontinuierlich daran, unsere Dienstleistungen zu verbessern. Von der ersten Anfrage bis zum Abschluss Ihres Umzugs stehen wir Ihnen mit Rat und Tat zur Seite und stellen sicher, dass alle Ihre Bedürfnisse erfüllt werden. Wir hören zu, passen uns an und liefern Ergebnisse, die Ihre Erwartungen übertreffen.",
      image: imageSatisfaction
    },
    {
      icon: <Clock className="h-12 w-12 text-goumzug-orange" />,
      title: "Flexibilität",
      description: "Jeder Umzug ist einzigartig, und wir verstehen, dass Ihre Bedürfnisse variieren können. Deshalb bieten wir ein hohes Maß an Flexibilität, um unsere Dienstleistungen an Ihre individuellen Anforderungen anzupassen. Ob Sie kurzfristig umziehen müssen, spezielle Transportbedürfnisse haben oder zusätzliche Services wie Entrümpelung oder Ein-/Auspacken benötigen – wir finden die passende Lösung für Sie.",
      image: imageFlexibility
    },
    {
      icon: <Shield className="h-12 w-12 text-goumzug-orange" />,
      title: "Transparente Preise",
      description: "Bei GoUmzug gibt es keine versteckten Kosten. Unsere Preisgestaltung ist klar, fair und transparent. Sie erhalten ein detailliertes Angebot, das alle Leistungen auflistet, sodass Sie von Anfang an genau wissen, welche Kosten auf Sie zukommen. Wir glauben an Ehrlichkeit und Vertrauen, und das spiegelt sich in unserer Preispolitik wider.",
      image: imageTransparency
    }
  ];

  const stats = [
    { number: "500+", label: "Zufriedene Kunden", icon: <Users className="h-8 w-8" /> },
    { number: "5+", label: "Jahre Erfahrung", icon: <Award className="h-8 w-8" /> },
    { number: "24/7", label: "Erreichbarkeit", icon: <Clock className="h-8 w-8" /> },
    { number: "100%", label: "Versicherungsschutz", icon: <Shield className="h-8 w-8" /> }
  ];

  const services = [
    "Professionelle Montage und Demontage",
    "Sicherer und zuverlässiger Transport",
    "Umweltgerechte Entsorgung",
    "Ein- und Auspackservice",
    "Kurzfristige Terminverfügbarkeit",
    "Deutschlandweite und EU-weite Abdeckung"
  ];

  const testimonials = [
    {
      name: "Familie Weber",
      text: "GoUmzug hat unseren Umzug von München nach Hamburg perfekt organisiert. Das Team war pünktlich, professionell und sehr sorgfältig mit unseren Möbeln. Wir würden sie jederzeit wieder beauftragen!",
      rating: 5,
      location: "München → Hamburg"
    },
    {
      name: "Dr. Schneider",
      text: "Als Arztpraxis war es wichtig, dass unser Umzug ohne Ausfallzeiten stattfindet. GoUmzug hat das perfekt hinbekommen. Freitag abgebaut, Montag war alles wieder einsatzbereit.",
      rating: 5,
      location: "Praxisumzug München"
    },
    {
      name: "Lisa M.",
      text: "Spontaner Umzug innerhalb einer Woche? Kein Problem für GoUmzug! Faire Preise, keine versteckten Kosten und super freundliches Team. Absolut empfehlenswert!",
      rating: 5,
      location: "WG-Umzug München"
    }
  ];

  return (
    <div className="min-h-screen">
     <Helmet>
  {/* SEO Meta Tags */}
  <title>Warum GoUmzug? | Ihr Umzugspartner</title> {/* */}
  <meta 
    name="description" 
    content="Erfahren Sie, warum GoUmzug der beste Partner für Ihren Umzug ist. Kompetenz, Kundenzufriedenheit und transparente Preise." 
  /> {/* */}
  <meta 
    name="keywords" 
    content="Warum GoUmzug, Umzugsfirma Erfahrung, transparente Preise Umzug, Kundenzufriedenheit, zuverlässiger Umzugspartner" 
  />
  <link rel="canonical" href="https://goumzug.eu/why-us" /> {/* */}

  {/* Open Graph / Facebook Meta Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://goumzug.eu/why-us" />
  <meta property="og:title" content="Warum GoUmzug? | Ihr Umzugspartner" /> {/* */}
  <meta 
    property="og:description" 
    content="Erfahren Sie, warum GoUmzug der beste Partner für Ihren Umzug ist: Erfahrung, Flexibilität und faire Preise." 
  /> {/* */}
  <meta property="og:site_name" content="GoUmzug" />
  <meta property="og:locale" content="de_DE" />
  {/* TODO: Replace with a direct URL to a high-quality image for social sharing (e.g., https://goumzug.eu/social-why-us.jpg) */}
  <meta property="og:image" content="https://goumzug.eu/assets/57ijwef8234gt834bgg-6McvUA4V.png" />

  {/* Twitter Card Meta Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Warum GoUmzug? | Ihr Umzugspartner" /> {/* */}
  <meta 
    name="twitter:description" 
    content="Erfahren Sie, warum GoUmzug der beste Partner für Ihren Umzug ist: Erfahrung, Flexibilität und faire Preise." 
  /> {/* */}
  {/* TODO: Replace with the same image URL used for og:image */}
  <meta name="twitter:image" content="https://goumzug.eu/assets/57ijwef8234gt834bgg-6McvUA4V.png" />
</Helmet>

      {/* Page Header */}
      <section className="bg-goumzug-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Warum GoUmzug?
            </h1>
            <p className="text-xl leading-relaxed">
              Wir sind mehr als nur ein Umzugsunternehmen. Wir sind Ihr Partner, 
              der den Stress aus Ihrem Umzug nimmt und Ihnen einen reibungslosen 
              Übergang in Ihr neues Leben ermöglicht.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-goumzug-orange">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-goumzug-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-goumzug-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-goumzug-blue mb-16">
            Was uns auszeichnet
          </h2>
          <div className="space-y-20">
            {features.map((feature, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <Card className="border-0 shadow-lg h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        {feature.icon}
                        <h3 className="text-3xl font-bold text-goumzug-blue ml-4">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="lg:w-1/2">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rundum-Service Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-goumzug-blue mb-8">
              Rundum-Service: Montage, Transport, Entsorgung
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Wir bieten einen umfassenden Rundum-Service, der alle Aspekte Ihres Umzugs abdeckt. 
              Mit GoUmzug müssen Sie sich um nichts kümmern – wir packen an, Sie lehnen sich zurück.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-goumzug-gray rounded-lg">
                <CheckCircle className="h-6 w-6 text-goumzug-success mr-4 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-goumzug-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-goumzug-blue mb-16">
            Das sagen unsere Kunden
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-goumzug-blue">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-goumzug-blue mb-12">
              Vertrauen Sie den Profis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-goumzug-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-goumzug-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-goumzug-blue mb-4">
                    Vollversichert
                  </h3>
                  <p className="text-gray-600">
                    Ihre Güter sind während des gesamten Transports vollständig versichert.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-goumzug-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-goumzug-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-goumzug-blue mb-4">
                    Zertifiziert
                  </h3>
                  <p className="text-gray-600">
                    Alle unsere Mitarbeiter sind geschult und zertifiziert.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-goumzug-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-goumzug-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-goumzug-blue mb-4">
                    Moderne Flotte
                  </h3>
                  <p className="text-gray-600">
                    Unsere Fahrzeuge sind modern, sauber und bestens ausgestattet.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-goumzug-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Überzeugt? Lassen Sie uns Ihren Umzug planen!
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Erleben Sie selbst, warum so viele Kunden GoUmzug für ihren Umzug wählen. 
            Kontaktieren Sie uns für ein unverbindliches Angebot.
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

export default WhyUsPage;
