import { useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";

const PAGE_TITLE =
  "FBR Digital Invoicing Integration Services in Pakistan | Winny Web";
const PAGE_DESCRIPTION =
  "Winny Web provides FBR Digital Invoicing Integration for ERPs, accounting systems, business portals, and custom software in Pakistan. Contact us for secure API integration support.";
const PAGE_KEYWORDS =
  "FBR digital invoicing integration, FBR invoice API integration, digital invoicing Pakistan, ERP FBR integration, FBR e invoice integration";
const PAGE_CANONICAL =
  "https://winnyweb.com/services/fbr-digital-invoicing";
const DEFAULT_TITLE =
  "WinnyWeb — Web & Mobile Apps, Cloud, E‑Commerce | Pakistan & Worldwide";
const DEFAULT_DESCRIPTION =
  "WinnyWeb builds responsive web apps, iOS and Android products, e‑commerce, cloud infrastructure on AWS and Azure, APIs, and UX/UI — based in Multan, Pakistan, serving clients worldwide.";
const DEFAULT_CANONICAL = "https://winnyweb.com/";

export const FbrDigitalInvoicing = () => {
  const contact = JsonData.Contact;
  const whatsappHref = contact.whatsapp;
  const emailAddress = contact.email;
  const whatsappDisplay = contact.phoneDisplayLocal || "03396127442";

  useEffect(() => {
    document.title = PAGE_TITLE;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", PAGE_DESCRIPTION);
    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement("meta");
      metaKw.setAttribute("name", "keywords");
      document.head.appendChild(metaKw);
    }
    metaKw.setAttribute("content", PAGE_KEYWORDS);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", PAGE_CANONICAL);

    return () => {
      document.title = DEFAULT_TITLE;
      metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", DEFAULT_DESCRIPTION);
      metaKw = document.querySelector('meta[name="keywords"]');
      if (metaKw) metaKw.remove();
      canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute("href", DEFAULT_CANONICAL);
    };
  }, []);

  const mailtoHref = `mailto:${emailAddress}`;

  return (
    <div id="fbr-service">
      <Navigation />
      <div className="fbr-disclaimer">
        <div className="container">
          <strong>Independent service.</strong> Winny Web is not FBR or a
          government entity and is not officially endorsed by FBR. We provide
          third-party integration help so your software can work with digital
          invoicing workflows.
        </div>
      </div>

      <header className="fbr-page-head">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 text-center">
              <h1>FBR Digital Invoicing Integration</h1>
              <p>
                We connect ERPs, accounting systems, and custom software to FBR
                digital invoicing workflows using secure, backend-driven
                integration—for businesses and advisors in Pakistan.
              </p>
              <div className="fbr-hero-cta-row">
                <a
                  className="btn btn-custom"
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp
                  Us
                </a>
                <a
                  className="btn btn-custom fbr-btn-outline-light"
                  href={mailtoHref}
                >
                  <i className="fa fa-envelope-o" aria-hidden="true"></i> Email
                  Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="fbr-simple-main">
        <div className="container">
          <div className="col-md-10 col-md-offset-1">
            <div className="fbr-simple-visual-wrap">
              <img
                src="/img/fbr-fb-ad-2.png"
                alt="Winny Web — FBR digital invoicing integration for Pakistani businesses"
                className="img-responsive"
              />
            </div>
            <section className="fbr-simple-block">
              <h2 className="fbr-simple-h2">What this service covers</h2>
              <p>
                Engineering-led integration so invoicing stays controlled and
                traceable inside your own systems.
              </p>
              <ul>
                <li>API integration with FBR digital invoicing workflows</li>
                <li>
                  ERP and accounting software integration (connectors and
                  middleware as needed)
                </li>
                <li>
                  Invoice validation workflow (rules, checks, error handling)
                </li>
                <li>
                  Digital invoice submission orchestration from your backend
                </li>
                <li>
                  Secure credential handling and sandbox vs production
                  separation
                </li>
                <li>Sandbox testing and production readiness</li>
                <li>
                  Implementation support for retail, manufacturing, services,
                  SaaS, and custom apps
                </li>
              </ul>
            </section>

            <section className="fbr-simple-block">
              <h2 className="fbr-simple-h2">Who this is for</h2>
              <p>
                Businesses that must issue digital invoices, accountants and tax
                consultants, ERP vendors and partners, SaaS billing products,
                owners of custom portals, and high-volume trading or service
                operations.
              </p>
            </section>

            <section className="fbr-simple-block">
              <h2 className="fbr-simple-h2">What we integrate</h2>
              <ul>
                <li>Billing and finance modules inside your ERP or accounting tool</li>
                <li>
                  Middleware for queues, retries, and visibility when something
                  fails
                </li>
                <li>
                  Sandbox and production credentials with sensible deployment
                  practice
                </li>
                <li>
                  Optional lightweight operator views for finance or IT when you
                  need them
                </li>
              </ul>
            </section>

            <section className="fbr-simple-block">
              <h2 className="fbr-simple-h2">Benefits</h2>
              <ul>
                <li>Less manual work between billing and submission</li>
                <li>Fewer submission mistakes via validation before send</li>
                <li>Better readiness for digital invoicing expectations</li>
                <li>Keep your existing ERP or accounting system as source of truth</li>
                <li>Server-side integration patterns instead of fragile scripts</li>
                <li>Clearer handoff between validation results and submission fixes</li>
              </ul>
            </section>

            <section className="fbr-simple-block">
              <h2 className="fbr-simple-h2">Implementation process</h2>
              <ol>
                <li>
                  <strong>Discovery</strong> — systems, invoice formats,
                  environments, responsibilities (we do not represent FBR).
                </li>
                <li>
                  <strong>Architecture</strong> — APIs, validation, submission
                  order, monitoring, rollback-friendly releases.
                </li>
                <li>
                  <strong>Sandbox</strong> — realistic scenarios and failure paths
                  before production.
                </li>
                <li>
                  <strong>Production</strong> — controlled cutover and runbooks
                  for alerts and exceptions.
                </li>
                <li>
                  <strong>Support</strong> — optional ongoing changes as rules or
                  your workflows evolve.
                </li>
              </ol>
            </section>
          </div>
        </div>
      </main>

      <section className="fbr-simple-cta">
        <div className="container">
          <h2>Need this integration?</h2>
          <p>
            WhatsApp or email Winny Web—we respond with a practical next step for
            your environment.
          </p>
          <div className="fbr-hero-cta-row">
            <a
              className="btn btn-custom btn-lg"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-whatsapp" aria-hidden="true"></i> WhatsApp:{" "}
              {whatsappDisplay}
            </a>
            <a
              className="btn btn-custom btn-lg fbr-btn-outline-light"
              href={mailtoHref}
            >
              <i className="fa fa-envelope-o" aria-hidden="true"></i> Email:{" "}
              {emailAddress}
            </a>
          </div>
        </div>
      </section>

      <Contact data={JsonData.Contact} />
    </div>
  );
};
