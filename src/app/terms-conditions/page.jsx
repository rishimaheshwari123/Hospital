import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Orlando Heart & Vascular Institute</title>
        <meta
          name="description"
          content="Terms and Conditions of Orlando Heart & Vascular Institute"
        />
      </Head>
      <br />
      <br />
      <br />

      <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 mb-10">Last Updated: 07/01/2025</p>

        <section className="space-y-8">
          <div>
            <h2 className="font-semibold text-xl mb-2">
              1. Medical Disclaimer
            </h2>
            <p>
              The content on this Site is for informational purposes only and is
              not intended as medical advice or a substitute for professional
              healthcare. Do not use this Site to diagnose or treat a medical
              condition. Always consult a qualified healthcare provider
              regarding any medical questions or concerns.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">2. Use of Site</h2>
            <p>
              You agree to use this Site for lawful purposes only. You may not
              use the Site:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
              <li>In any way that violates applicable laws or regulations.</li>
              <li>To engage in any harmful or fraudulent activity.</li>
              <li>
                To access or attempt to access restricted areas without
                authorization.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">
              3. Intellectual Property
            </h2>
            <p>
              All content on this Site, including text, graphics, logos, images,
              and software, is the property of Orlando Heart & Vascular
              Institute or its licensors and is protected by copyright,
              trademark, and other intellectual property laws. You may not
              reproduce, distribute, or create derivative works without our
              written permission.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">4. Patient Privacy</h2>
            <p>
              Any personal information submitted through this Site is governed
              by our Privacy Policy. We comply with HIPAA regulations to protect
              patient health information.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">
              5. Links to Other Websites
            </h2>
            <p>
              This Site may contain links to third-party websites. We are not
              responsible for the content, accuracy, or privacy practices of
              those sites. Inclusion of a link does not imply endorsement.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">
              6. Appointments and Online Services
            </h2>
            <p>
              Online appointment requests or contact forms are not intended for
              emergencies. For urgent health concerns, call 911 or go to the
              nearest emergency room.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">7. No Warranty</h2>
            <p>
              We make no warranties or representations about the accuracy or
              completeness of this Site’s content. The Site is provided “as is”
              and “as available” without warranties of any kind.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">
              8. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Orlando Heart & Vascular
              Institute shall not be liable for any direct, indirect,
              incidental, or consequential damages arising from your use of this
              Site.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes
              will be effective immediately upon posting. Your continued use of
              the Site constitutes acceptance of any updates.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Florida,
              without regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">
              11. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <p className="mt-2">
              <strong>Office Phone:</strong>{" "}
              <span className="text-gray-700">(407) 767-8554</span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
