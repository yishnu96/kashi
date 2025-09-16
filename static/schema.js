const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://your-docusaurus-site.example.com/#article",
      "headline": "Exploring Kashi: A Sacred Journey",
      "description": "Discover the temples, culture, and spiritual heritage of Kashi (Varanasi)",
      "author": {
        "@type": "Person",
        "@id": "https://your-docusaurus-site.example.com/#author",
        "name": "Vishnu",
        "url": "https://twitter.com/yishnu_"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Kashi",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://your-docusaurus-site.example.com/#logo"
        }
      },
      "datePublished": "2025-09-16",
      "dateModified": "2025-09-16"
    },
    {
      "@type": "WebSite",
      "@id": "https://your-docusaurus-site.example.com/#website",
      "url": "https://your-docusaurus-site.example.com",
      "name": "Kashi",
      "description": "Discover the temples, culture, and spiritual heritage of Kashi (Varanasi)",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://your-docusaurus-site.example.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ImageObject",
      "@id": "https://your-docusaurus-site.example.com/#logo",
      "url": "https://your-docusaurus-site.example.com/img/logo.svg",
      "contentUrl": "https://your-docusaurus-site.example.com/img/logo.svg",
      "caption": "Kashi Logo"
    },
    {
      "@type": "VideoObject",
      "@id": "https://your-docusaurus-site.example.com/#video",
      "name": "Introduction to Kashi",
      "description": "A virtual tour of the sacred city of Kashi (Varanasi)",
      "thumbnailUrl": "https://your-docusaurus-site.example.com/img/video-thumbnail.jpg",
      "uploadDate": "2025-09-16",
      "duration": "PT2M30S",
      "contentUrl": "https://your-docusaurus-site.example.com/videos/kashi-intro.mp4"
    },
    {
      "@type": "WebPage",
      "@id": "https://your-docusaurus-site.example.com/#webpage",
      "url": "https://your-docusaurus-site.example.com",
      "name": "Kashi - Exploring the Sacred City",
      "isPartOf": {"@id": "https://your-docusaurus-site.example.com/#website"},
      "primaryImageOfPage": {"@id": "https://your-docusaurus-site.example.com/#logo"},
      "description": "Discover the temples, culture, and spiritual heritage of Kashi (Varanasi)"
    },
    {
      "@type": "Person",
      "@id": "https://your-docusaurus-site.example.com/#person",
      "name": "Vishnu",
      "url": "https://twitter.com/yishnu_"
    },
    {
      "@type": "ReadAction",
      "@id": "https://your-docusaurus-site.example.com/#readaction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://your-docusaurus-site.example.com/docs/{document}",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "expectsAcceptanceOf": {
        "@type": "Offer",
        "category": "free"
      }
    },
    {
      "@type": "PropertyValueSpecification",
      "@id": "https://your-docusaurus-site.example.com/#searchspec",
      "valueRequired": true,
      "valueName": "search_term_string",
      "valuePattern": ".*",
      "description": "Enter your search terms",
      "defaultValue": "",
      "minValue": 3,
      "maxValue": 100
    }
  ]
};

const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schemaData);
document.head.appendChild(script);