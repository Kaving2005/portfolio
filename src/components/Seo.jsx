import { useEffect } from "react";

const DEFAULT_KEYWORDS = [
  "Kavin G",
  "portfolio",
  "full stack developer",
  "React developer",
  "frontend developer",
  "JavaScript",
  "MUI",
  "Framer Motion",
  "web developer",
];

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      element.setAttribute(key, value);
    }
  });

  return element;
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
  return element;
}

export default function Seo({
  title,
  description,
  image = "/images/port.jpg",
  path = "https://kaving.vercel.app/",
  keywords = DEFAULT_KEYWORDS,
  type = "website",
  siteName = "Kavin G",
  schema,
}) {
  useEffect(() => {
    const baseUrl = import.meta.env.google_site_verification || window.location.origin;
    const canonicalUrl = new URL(path, baseUrl).href;
    const imageUrl = new URL(image, baseUrl).href;
    const keywordContent = keywords.filter(Boolean).join(", ");

    document.title = title;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: keywordContent,
    });
    upsertMeta('meta[name="author"]', {
      name: "author",
      content: "Kavin G",
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow",
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: type,
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: siteName,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });
    upsertLink("canonical", canonicalUrl);

    const existingSchema = document.getElementById("seo-jsonld");
    if (existingSchema) {
      existingSchema.remove();
    }

    if (schema) {
      const script = document.createElement("script");
      script.id = "seo-jsonld";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, image, path, keywords, siteName, schema, type]);

  return null;
}
