import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
} from "../../portfolio";

function SeoHeader() {
  const sameAs =
    socialMediaLinks
      ?.filter(
        (media) =>
          !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
      )
      ?.map((media) => media.link) || [];

  const mailObj = socialMediaLinks?.find((media) =>
    media.link.startsWith("mailto")
  );

  let mail = mailObj ? mailObj.link.substring("mailto:".length) : "";

  let job =
    experience?.sections?.find((section) => section.work)?.experiences?.[0] ||
    {};

  let credentials = [];

  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting?.title || "Portfolio",
    url: seo?.og?.url,
    email: mail,
    telephone: contactPageData?.phoneSection?.subtitle,
    sameAs: sameAs,
    worksFor: {
      "@type": "Organization",
      name: job?.company || "Unknown Company",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData?.addressSection?.locality,
      addressRegion: contactPageData?.addressSection?.region,
      addressCountry: contactPageData?.addressSection?.country,
      postalCode: contactPageData?.addressSection?.postalCode,
      streetAddress: contactPageData?.addressSection?.streetAddress,
    },
    hasCredential: credentials,
  };

  return (
    <Helmet>
      <title>{seo?.title}</title>
      <meta name="description" content={seo?.description} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
