"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">
            Effective Date: February 11, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground text-justify">
                Welcome to Lumio AI (&quot;Company,&quot; &quot;we,&quot;
                &quot;our,&quot; or &quot;us&quot;). We are committed to
                safeguarding your privacy and ensuring the security of your
                personal information. This Privacy Policy outlines how we
                collect, use, disclose, and protect your data when you interact
                with our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground text-justify">
                  <strong className="text-foreground">
                    Personal Information:
                  </strong>{" "}
                  We may collect personal details such as your name, email
                  address, phone number, and company information when you engage
                  with us, for instance, by filling out contact forms or
                  subscribing to our services.
                </p>
                <p className="text-muted-foreground text-justify">
                  <strong className="text-foreground">Usage Data:</strong>{" "}
                  Information about your interactions with our website,
                  including IP addresses, browser types, pages visited, and the
                  duration of visits, may be collected to enhance user
                  experience.
                </p>
                <p className="text-muted-foreground text-justify">
                  <strong className="text-foreground">
                    Cookies and Tracking Technologies:
                  </strong>{" "}
                  We utilize cookies and similar technologies to personalize
                  your experience, analyze site traffic, and understand user
                  behavior. You can manage your cookie preferences through your
                  browser settings.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc text-justify list-inside space-y-2 text-muted-foreground">
                <li>
                  To provide and improve our AI-driven services tailored to your
                  business needs.
                </li>
                <li>
                  To communicate with you regarding inquiries, updates,
                  promotional materials, and service-related information.
                </li>
                <li>
                  To analyze website usage and optimize our digital offerings.
                </li>
                <li>
                  To comply with legal obligations and protect our rights and
                  interests.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground text-justify">
                  <strong className="text-foreground">
                    Service Providers:
                  </strong>{" "}
                  We may share your information with trusted third-party service
                  providers who assist us in operating our business, such as
                  hosting services, analytics providers, and marketing partners.
                  These parties are obligated to protect your information and
                  use it solely for the purposes we specify.
                </p>
                <p className="text-muted-foreground text-justify">
                  <strong className="text-foreground">Legal Compliance:</strong>{" "}
                  We may disclose your information if required by law,
                  regulation, or legal process, or to protect the rights,
                  property, or safety of Lumio AI, our clients, or others.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground text-justify">
                We implement industry-standard security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the internet or electronic storage is completely secure,
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4 text-justify">
                Depending on your jurisdiction, you may have the following
                rights regarding your personal data:
              </p>
              <ul className="list-disc text-justify list-inside space-y-2 text-muted-foreground">
                <li>
                  Access: Request a copy of the personal data we hold about you.
                </li>
                <li>
                  Correction: Request correction of any inaccurate or incomplete
                  data.
                </li>
                <li>
                  Deletion: Request deletion of your personal data, subject to
                  certain exceptions.
                </li>
                <li>
                  Objection: Object to the processing of your personal data
                  under specific circumstances.
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground text-justify">
                To exercise these rights, please contact us at privacy@lumio.ai
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Third-Party Links
              </h2>
              <p className="text-muted-foreground text-justify">
                Our website may contain links to external sites not operated by
                us. We are not responsible for the privacy practices or content
                of these third-party websites. We encourage you to review their
                privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Changes to This Privacy Policy
              </h2>
              <p className="text-muted-foreground text-justify">
                We may update this Privacy Policy periodically to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any significant
                changes by posting the new policy on our website with an updated
                effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground mr-2 text-justify">
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us at{" "}
                <Link href="mailto:contact@teamlumio.ai" target="_blank">
                  contact@teamlumio.ai
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
