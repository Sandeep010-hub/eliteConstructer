import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <Helmet>
      <title>Contact Elite Construction & Design | Get a Free Quote</title>
      <meta name="description" content="Contact Elite Construction & Design for a free quote on custom homes, renovations, and commercial projects in Southern California. Our team is ready to help you build your dream." />
      <script type="application/ld+json">{`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Elite Construction & Design",
      "image": "https://eliteconstruction.com/og-image.jpg",
      "@id": "https://eliteconstruction.com",
      "url": "https://eliteconstruction.com",
      "telephone": "+1-555-0123",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Construction Ave",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "postalCode": "90210",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      "sameAs": [
        "https://instagram.com/eliteconstruction",
        "https://facebook.com/eliteconstruction"
      ]
    }
  `}</script>
    </Helmet>
  );
};

export default Contact; 