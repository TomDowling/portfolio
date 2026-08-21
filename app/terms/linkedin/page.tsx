import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy — LinkedIn App | Tom Dowling",
    description:
        "Privacy Policy for the LinkedIn Application: how information is collected, used, and shared when you use our App to post content to LinkedIn.",
    openGraph: {
        title: "Privacy Policy — LinkedIn App | Tom Dowling",
        description:
            "Privacy Policy for the LinkedIn Application: how information is collected, used, and shared when you use our App to post content to LinkedIn.",
        url: "https://digital-space.io/terms/linkedin",
        siteName: "Digital Space | Tom Dowling",
        locale: "en_GB",
        type: "website"
    }
};

export default function LinkedInPrivacyPolicyPage() {
    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-3xl font-bold text-center tracking-tighter sm:text-4xl xl:text-5xl/none">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-center text-muted-foreground">Effective Date: August 21, 2026</p>
                </div>
            </section>

            <section className="w-full py-12 md:py-16 lg:py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <div className="space-y-8 text-foreground/90 leading-relaxed">
                        <p>
                            This Privacy Policy describes how your information is collected, used, and shared when you
                            use our LinkedIn Application (the &quot;App&quot;) to post content to LinkedIn member
                            profiles and organisation pages. By using the App, you agree to the collection and use of
                            information in accordance with this policy.
                        </p>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">1. Information We Collect</h2>
                            <p className="mb-3">
                                When you use the App to post to LinkedIn, we may access certain information from your
                                LinkedIn account via LinkedIn&apos;s APIs. This includes:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong className="text-foreground">Public Profile Information:</strong> Name,
                                    profile picture, member ID, and the organisation pages you administer.
                                </li>
                                <li>
                                    <strong className="text-foreground">Permissions:</strong> We request specific OAuth
                                    scopes (for example,{" "}
                                    <code className="text-sm bg-background px-1 py-0.5 rounded">openid</code>,{" "}
                                    <code className="text-sm bg-background px-1 py-0.5 rounded">profile</code>,{" "}
                                    <code className="text-sm bg-background px-1 py-0.5 rounded">w_member_social</code>,{" "}
                                    <code className="text-sm bg-background px-1 py-0.5 rounded">
                                        w_organization_social
                                    </code>
                                    ) required to perform the posting actions you initiate.
                                </li>
                                <li>
                                    <strong className="text-foreground">Access Tokens:</strong> The OAuth access and
                                    refresh tokens issued by LinkedIn, which allow the App to act on your behalf. We
                                    never receive or store your LinkedIn password.
                                </li>
                                <li>
                                    <strong className="text-foreground">Content:</strong> The text, images, or links you
                                    specifically choose to post through the App, and the delivery status of those posts.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">2. How We Use Your Information</h2>
                            <p className="mb-4">We use the information collected for the following purposes:</p>
                            <div className="overflow-x-auto rounded-lg border bg-background">
                                <table className="w-full text-sm text-left">
                                    <thead>
                                        <tr className="border-b bg-muted/50">
                                            <th className="px-4 py-3 font-semibold">Purpose</th>
                                            <th className="px-4 py-3 font-semibold">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 align-top font-medium">Functionality</td>
                                            <td className="px-4 py-3">
                                                To allow you to create, schedule, and manage posts on your LinkedIn
                                                profile or the organisation pages you administer.
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 align-top font-medium">Authentication</td>
                                            <td className="px-4 py-3">
                                                To verify your identity via Sign In with LinkedIn and to refresh your
                                                session so scheduled posts continue to publish.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 align-top font-medium">Improvement</td>
                                            <td className="px-4 py-3">
                                                To monitor the technical performance of the App and fix bugs.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-4">
                                We do not use LinkedIn content or metrics to train machine learning models, and we do
                                not build advertising or marketing profiles from it.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">3. Data Sharing and Disclosure</h2>
                            <p className="mb-3">We do not sell your personal data to third parties. Your information is only shared in the following circumstances:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>
                                    <strong className="text-foreground">With LinkedIn:</strong> Information is sent to
                                    LinkedIn servers to execute the posting functionality.
                                </li>
                                <li>
                                    <strong className="text-foreground">Hosting Providers:</strong> Data is stored on our
                                    hosting infrastructure located in the European Union, under a data processing
                                    agreement.
                                </li>
                                <li>
                                    <strong className="text-foreground">Legal Requirements:</strong> If required by law
                                    to comply with legal obligations or protect our rights.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">4. Data Retention and Deletion</h2>
                            <p>
                                We only retain your information for as long as necessary to provide the App&apos;s
                                services. You can revoke access at any time in your LinkedIn Settings under &quot;Data
                                privacy&quot; then &quot;Permitted services,&quot; which immediately stops all further
                                access. For full instructions on removing your data, see our{" "}
                                <Link
                                    href="/terms/data-deletion"
                                    className="text-rose-600 hover:text-rose-700 underline underline-offset-4">
                                    Data Deletion page
                                </Link>
                                , or contact us directly to request deletion.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">5. Security</h2>
                            <p>
                                The security of your data is important to us. All traffic is served over HTTPS, access
                                tokens are encrypted at rest, and administrative access is limited to named personnel
                                protected by multi-factor authentication.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">6. Changes to This Policy</h2>
                            <p>
                                We may update our Privacy Policy from time to time. We will notify you of any changes by
                                posting the new Privacy Policy on this page.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">7. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:{" "}
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
