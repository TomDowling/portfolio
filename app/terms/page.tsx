import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service | Tom Dowling",
    description:
        "Terms of Service for the Digital Space social media scheduling applications and the services provided through them.",
    openGraph: {
        title: "Terms of Service | Tom Dowling",
        description:
            "Terms of Service for the Digital Space social media scheduling applications and the services provided through them.",
        url: "https://digital-space.io/terms",
        siteName: "Digital Space | Tom Dowling",
        locale: "en_GB",
        type: "website"
    }
};

const policies = [
    { href: "/terms/facebook", label: "Facebook & Instagram" },
    { href: "/terms/tiktok", label: "TikTok" },
    { href: "/terms/x", label: "X" },
    { href: "/terms/linkedin", label: "LinkedIn" },
    { href: "/terms/data-deletion", label: "Data Deletion" }
];

export default function TermsOfServicePage() {
    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-3xl font-bold text-center tracking-tighter sm:text-4xl xl:text-5xl/none">
                        Terms of Service
                    </h1>
                    <p className="mt-4 text-center text-muted-foreground">Effective Date: August 21, 2026</p>
                </div>
            </section>

            <section className="w-full py-12 md:py-16 lg:py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <div className="space-y-8 text-foreground/90 leading-relaxed">
                        <p>
                            These Terms of Service govern your use of the social media scheduling applications operated
                            by Digital Space (the &quot;Apps&quot;), which allow you to connect your social media
                            accounts and create, schedule, publish and review content on them. By using the Apps, you
                            agree to these terms.
                        </p>
                        <p>
                            Where you have a signed engagement letter or statement of work with us, that document takes
                            precedence over these terms if the two conflict.
                        </p>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">1. Accounts and Access</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    You are responsible for keeping your credentials secure and for all activity under
                                    your account.
                                </li>
                                <li>
                                    You must have the right to connect each social media account you authorise, and to
                                    publish on behalf of the business or person it represents.
                                </li>
                                <li>
                                    Access is granted per workspace. You must not attempt to access another
                                    customer&apos;s workspace or data.
                                </li>
                                <li>Tell us promptly if you believe your account has been accessed without permission.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">2. Your Content</h2>
                            <p>
                                You keep all ownership of the content you upload, schedule and publish. You grant us a
                                limited licence to store, process and transmit it for the sole purpose of delivering the
                                service you asked for, such as delivering a post to a platform at its scheduled time.
                                You are responsible for your content being lawful, accurate and cleared for use,
                                including rights in any images, video, music and third-party trade marks.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">3. Acceptable Use</h2>
                            <p className="mb-3">You must not use the Apps to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Publish unlawful, defamatory, harassing, hateful or infringing material</li>
                                <li>Send spam, run engagement farms, or carry out coordinated inauthentic behaviour</li>
                                <li>Impersonate any person or organisation, or misrepresent your affiliation</li>
                                <li>
                                    Breach the terms, community guidelines or developer policies of any connected
                                    platform
                                </li>
                                <li>Circumvent rate limits, scrape platform data, or resell data obtained through the Apps</li>
                                <li>Probe, attack or disrupt our infrastructure</li>
                            </ul>
                            <p className="mt-3">
                                We may suspend access immediately where we reasonably believe this section has been
                                breached, or where a platform requires us to.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">4. Third-Party Platforms</h2>
                            <p>
                                The Apps depend on APIs operated by Meta, TikTok, X, LinkedIn and others. Your use of
                                each connected account is also governed by that provider&apos;s own terms, and you must
                                comply with them. We do not control those APIs: they can change, rate-limit, deprecate
                                features, reject a post, or suspend an account without notice to us. We are not liable
                                for a failure to publish caused by a third-party platform&apos;s outage, policy decision
                                or API change, though we will tell you when we detect one.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">5. Availability</h2>
                            <p>
                                We aim for high availability but do not guarantee uninterrupted service unless a
                                separate service level agreement says otherwise. We may take the Apps down for
                                maintenance, and will give reasonable notice of planned work where we can.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">6. Privacy and Data Protection</h2>
                            <p className="mb-3">
                                How we handle personal data is set out in the privacy policy for each application:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                {policies.map((p) => (
                                    <li key={p.href}>
                                        <Link
                                            href={p.href}
                                            className="text-rose-600 hover:text-rose-700 underline underline-offset-4">
                                            {p.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-3">
                                Where we process personal data on your behalf we do so as your processor, on your
                                documented instructions. You can request erasure at any time.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">7. Intellectual Property</h2>
                            <p>
                                The Apps, and the software, designs and documentation behind them, remain our property
                                or that of our licensors. Nothing here transfers ownership of them to you. Deliverables
                                produced under a specific engagement are governed by that engagement&apos;s terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">8. Liability</h2>
                            <p className="mb-3">
                                Nothing in these terms limits liability for death or personal injury caused by
                                negligence, for fraud, or for anything else that cannot lawfully be limited.
                            </p>
                            <p className="mb-3">
                                Subject to that, neither party is liable for indirect or consequential loss, loss of
                                profit, loss of goodwill or loss of anticipated savings. Our total liability arising in
                                connection with the service in any 12-month period is limited to the fees you paid us in
                                that period.
                            </p>
                            <p>
                                The service is otherwise provided &quot;as is&quot;, and we exclude implied warranties
                                to the fullest extent the law allows.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">9. Termination</h2>
                            <p>
                                You may stop using the Apps and disconnect your accounts at any time. We may terminate
                                or suspend access for material breach of these terms. On termination we disconnect your
                                social accounts, cancel scheduled posts, and delete your data within 30 days — see the{" "}
                                <Link
                                    href="/terms/data-deletion"
                                    className="text-rose-600 hover:text-rose-700 underline underline-offset-4">
                                    Data Deletion page
                                </Link>
                                . Tell us before that window closes if you want an export.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">10. Changes to These Terms</h2>
                            <p>
                                We may update these terms. The date at the top of this page reflects the current
                                version, and we will give active customers reasonable notice of any material change.
                                Continuing to use the service after a change takes effect means you accept it.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">11. Governing Law</h2>
                            <p>
                                These terms are governed by the laws of England and Wales, and the courts of England and
                                Wales have exclusive jurisdiction over any dispute.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">12. Contact Us</h2>
                            <p>
                                If you have any questions about these terms, please contact us at:{" "}
                                <Link
                                    href="mailto:tom@digital-space.io"
                                    className="text-rose-600 hover:text-rose-700 underline underline-offset-4">
                                    tom@digital-space.io
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
