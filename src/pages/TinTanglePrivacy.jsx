import { useEffect } from "react";

const PAGE_TITLE = "TinTangle Privacy Policy | WinnyWeb";
const PAGE_DESCRIPTION =
  "Privacy policy for TinTangle (Tin Tangle) by Nabeel Shafique — how the Android and iOS puzzle game handles analytics, advertising, purchases and local progress.";
const PAGE_CANONICAL = "https://winnyweb.com/tintangle/privacy";
const DEFAULT_TITLE =
  "WinnyWeb — Web & Mobile Apps, Cloud, E‑Commerce | Pakistan & Worldwide";
const DEFAULT_DESCRIPTION =
  "WinnyWeb builds responsive web apps, iOS and Android products, e‑commerce, cloud infrastructure on AWS and Azure, APIs, and UX/UI — based in Multan, Pakistan, serving clients worldwide.";
const DEFAULT_CANONICAL = "https://winnyweb.com/";

export const TinTanglePrivacy = () => {
  useEffect(() => {
    document.title = PAGE_TITLE;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", PAGE_DESCRIPTION);
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
      canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute("href", DEFAULT_CANONICAL);
    };
  }, []);

  return (
    <div id="tintangle-privacy">
      <header className="legal-page-head">
        <div className="container">
          <p className="legal-page-brand">TinTangle</p>
          <h1>Privacy Policy</h1>
          <p className="legal-page-updated">Last updated: 16 October 2026</p>
        </div>
      </header>

      <main className="legal-page-main">
        <div className="container">
          <article className="legal-page-article">
            <p>
              This policy explains how TinTangle (also displayed as Tin Tangle),
              published by Nabeel Shafique, handles information on Android and
              iOS. The app identifier is{" "}
              <code>com.winnyweb.tintangle</code>.
            </p>
            <p>
              Privacy contact:{" "}
              <a href="mailto:contact@winnyweb.com">contact@winnyweb.com</a>
              <br />
              Publisher location: Pakistan
            </p>

            <section>
              <h2>Playing and saving progress</h2>
              <p>
                You can play without creating a TinTangle account. Puzzle
                progress, saved puzzles, scores, badges, preferences and cached
                purchase entitlement are stored locally on your device. We do
                not operate an account system or a cloud progress-sync service.
              </p>
              <p>
                The game does not request access to your contacts, camera,
                microphone or precise device location. Internet access is used
                for optional analytics, advertising, store purchases and related
                services. Core puzzles remain playable when these services are
                unavailable.
              </p>
              <p>
                Device or operating-system backups may retain app data according
                to your device and platform settings.
              </p>
            </section>

            <section>
              <h2>Optional gameplay analytics</h2>
              <p>
                We use Google Analytics for Firebase to understand how the game
                is used and improve puzzle difficulty and usability. Gameplay
                analytics is off by default. You can enable or disable it in
                Settings → Gameplay analytics.
              </p>
              <p>
                When enabled, we send events such as starting, completing or
                failing a puzzle; puzzle number and mode; moves and hints used;
                tutorial and daily-challenge activity; and applicable advertising
                or purchase activity. Purchase analytics does not contain
                receipts, purchase tokens or payment-card details.
              </p>
              <p>
                Firebase may also process app-instance identifiers, device and
                operating-system information, app versions, session/activity
                information and automatically generated events. Network services
                receive technical connection information such as IP addresses. We
                do not send your name, email address or payment-card information
                as gameplay event parameters.
              </p>
              <p>
                Our Firebase integration is configured to deny advertising
                storage, advertising user-data and advertising-personalization
                consent, and to disable Firebase advertising-ID collection.
                Advertising through AdMob has separate controls, described below.
              </p>
              <p>
                Turning Gameplay analytics off stops further analytics collection
                through our integration and resets its local analytics data. This
                does not automatically delete information previously sent to
                Google.
              </p>
            </section>

            <section>
              <h2>Advertising and privacy choices</h2>
              <p>
                TinTangle uses Google AdMob and Google&apos;s User Messaging
                Platform to support advertising and manage applicable privacy
                choices. Advertising may involve processing IP addresses (which
                can indicate approximate location), device or app identifiers, ad
                interactions and diagnostic/performance information. The
                information processed depends on the platform, SDK configuration,
                applicable consent choices and ad-serving mode. Ads that are not
                personalized can still involve data processing for delivery,
                measurement, security and fraud prevention.
              </p>
              <p>
                Our current ad requests are configured as non-personalized. Where
                applicable, a consent message provides information and choices
                about advertising data use. You can revisit available choices
                using Settings → Advertising privacy. Device settings may offer
                additional advertising-identifier and privacy controls. Gameplay
                analytics consent is separate from advertising choices.
              </p>
              <p>
                Interstitial ads are restricted to natural transitions between
                completed puzzles. Core gameplay does not depend on ads loading.
                The Remove Ads purchase disables interstitial advertising; it
                does not automatically change your separate gameplay-analytics
                preference. Hints are free in the current version.
              </p>
            </section>

            <section>
              <h2>Purchases</h2>
              <p>
                Android purchases are handled by Google Play; iOS purchases are
                handled by Apple. Those platforms process your payment
                information under their own terms and privacy policies. We do not
                receive your full payment-card details.
              </p>
              <p>
                The app processes product identifiers and platform transaction or
                purchase-verification information to verify purchases,
                acknowledge applicable transactions, restore purchases and
                maintain entitlement. A local entitlement cache supports offline
                access. Purchase verification involves communication with
                platform services when needed. The app does not send receipts,
                purchase tokens or transaction signatures to gameplay analytics.
              </p>
            </section>

            <section>
              <h2>Information you send to support</h2>
              <p>
                If you contact us, we receive the information you choose to
                provide, such as your email address, message and attachments. We
                use it to respond and resolve the issue. Please do not send
                payment-card details, passwords or other sensitive information.
              </p>
            </section>

            <section>
              <h2>Providers and international processing</h2>
              <p>
                Information is handled by the services described above to provide
                analytics, advertising, consent management and purchases. These
                providers may process information outside your country, subject
                to their applicable terms and safeguards.
              </p>
              <ul>
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    How Google uses information from apps and sites
                  </a>
                </li>
                <li>
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Firebase privacy information
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.apple.com/legal/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apple Privacy Policy
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2>Retention and deletion</h2>
              <p>
                Local game information remains on your device until it is removed
                through your device&apos;s app-data controls or the app is
                uninstalled, subject to platform backups and retained platform
                records. Removing local data can erase progress; it does not
                cancel a purchase or automatically delete store transaction
                records or previously transmitted analytics.
              </p>
              <p>
                Analytics information is retained according to the retention
                settings applied to our Google Analytics property and Google’s
                applicable retention practices. Some aggregated reports may
                remain available after underlying event data expires. Advertising
                and store providers retain information according to their own
                policies and applicable legal obligations. We retain support
                correspondence as needed to address your request and meet
                applicable legal obligations; contact us to request deletion of
                correspondence we control.
              </p>
              <p>
                Contact{" "}
                <a href="mailto:contact@winnyweb.com">contact@winnyweb.com</a>{" "}
                for privacy questions or requests concerning data we control. We
                will explain what information we can identify and act on; because
                the game has no player accounts, we may not be able to associate
                analytics records with your email address. We will not request
                unnecessary identifying information. Requests concerning Google
                or Apple account/payment records may need to be directed to the
                relevant provider.
              </p>
            </section>

            <section>
              <h2>Your rights</h2>
              <p>
                Depending on your location, you may have rights to access,
                correct, delete or restrict processing of your personal
                information, receive a copy, object to certain processing, or
                withdraw consent. Contact{" "}
                <a href="mailto:contact@winnyweb.com">contact@winnyweb.com</a>{" "}
                to make a request. Withdrawing consent does not affect processing
                that occurred before withdrawal. Where applicable, you may
                complain to your local data-protection authority.
              </p>
              <p>
                Where applicable, we rely on your consent for optional analytics
                and advertising-related processing that requires consent. We
                process purchase information to provide purchased features and
                support messages to respond to your requests. We may also process
                information to meet legal obligations or protect the security of
                the app. Depending on applicable law, you may have rights to opt
                out of certain advertising-related uses or sharing of personal
                information. Use the available Advertising privacy controls or
                contact us to exercise these rights.
              </p>
            </section>

            <section>
              <h2>Children and teenagers</h2>
              <p>
                TinTangle is intended for teenagers and adults aged 13 and older.
                It is not directed to children under 13. If you believe a child
                under 13 has provided personal information through the app,
                contact Nabeel Shafique at{" "}
                <a href="mailto:contact@winnyweb.com">contact@winnyweb.com</a>{" "}
                so we can investigate and take appropriate action concerning
                information we control.
              </p>
              <p>
                Players aged 13–17 may have additional privacy protections under
                applicable laws. Where parental or guardian authorization is
                required for particular processing, that processing must not
                occur without the required authorization. Parents or guardians
                may contact us with questions or requests concerning a
                teenager’s information.
              </p>
            </section>

            <section>
              <h2>Security</h2>
              <p>
                We use reasonable measures to protect information, including
                limiting app event parameters and using provider-supported secure
                connections. No method of storage or transmission is completely
                secure.
              </p>
            </section>

            <section>
              <h2>Changes</h2>
              <p>
                We may update this policy as the app or its services change. We
                will update the date above and provide additional notice or
                obtain new consent when required.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                Nabeel Shafique
                <br />
                <a href="mailto:contact@winnyweb.com">contact@winnyweb.com</a>
                <br />
                Pakistan
              </p>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
};
