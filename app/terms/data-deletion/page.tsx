import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Data Deletion Instructions | Tom Dowling",
    description:
        "How to disconnect a social media account and permanently delete the data held about it, for the Facebook, Instagram, TikTok, X, and LinkedIn Applications.",
    openGraph: {
        title: "Data Deletion Instructions | Tom Dowling",
        description:
            "How to disconnect a social media account and permanently delete the data held about it, for the Facebook, Instagram, TikTok, X, and LinkedIn Applications.",
        url: "https://digital-space.io/terms/data-deletion",
        siteName: "Digital Space | Tom Dowling",
        locale: "en_GB",
        type: "website"
    }
};

export default function DataDeletionPage() {
    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-3xl font-bold text-center tracking-tighter sm:text-4xl xl:text-5xl/none">
                        Data Deletion Instructions
                    </h1>
                    <p className="mt-4 text-center text-muted-foreground">Effective Date: August 21, 2026</p>
                </div>
            </section>

            <section className="w-full py-12 md:py-16 lg:py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <div className="space-y-8 text-foreground/90 leading-relaxed">
                        <p>
                            This page explains how to disconnect a social media account from our Applications and have
                            every piece of data we hold about it permanently deleted. It applies to our Facebook,
                            Instagram, TikTok, X, and LinkedIn Applications.
                        </p>
                        <p>
                            Deleting data here does <strong className="text-foreground">not</strong> delete anything from
                            the social platform itself. Posts already published remain live on your account until you
                            remove them there.
                        </p>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">
                                1. Revoke Access from the Platform
                            </h2>
                            <p className="mb-3">
                                The fastest route, and it takes effect immediately. Removing the App from your account
                                settings stops all further API access at once. We detect the revoked token and purge the
                                associated records automatically.
                            </p>
                            <div className="overflow-x-auto rounded-lg border bg-background">
                                <table className="w-full text-sm text-left">
                                    <thead>
                                        <tr className="border-b bg-muted/50">
                                            <th className="px-4 py-3 font-semibold">Platform</th>
                                            <th className="px-4 py-3 font-semibold">Where to go</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 align-top font-medium">Facebook</td>
                                            <td className="px-4 py-3">
                                                Settings &amp; Privacy → Settings → Apps and Websites → remove our App
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 align-top font-medium">Instagram</td>
                                            <td className="px-4 py-3">
                                                Settings → Website Permissions → Apps and Websites
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 align-top font-medium">TikTok</td>
                                            <td className="px-4 py-3">
                                                Settings and privacy → Security and permissions → Manage app permissions
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="px-4 py-3 align-top font-medium">X</td>
                                            <td className="px-4 py-3">
                                                Settings → Security and account access → Apps and sessions → Connected
                                                apps
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 align-top font-medium">LinkedIn</td>
                                            <td className="px-4 py-3">
                                                Settings → Data privacy → Permitted services
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">2. Request Deletion by Email</h2>
                            <p className="mb-3">
                                You can also ask us directly. Email{" "}
                                <Link
                                    href="mailto:tom@digital-space.io?subject=Data%20deletion%20request"
                                    className="text-rose-600 hover:text-rose-700 underline underline-offset-4">
                                    tom@digital-space.io
                                </Link>{" "}
                                with the subject <strong className="text-foreground">Data deletion request</strong>, and
                                include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The social account handle or page name you want removed</li>
                                <li>The email address associated with your account</li>
                                <li>Whether you want everything deleted, or just that one connected account</li>
                            </ul>
                            <p className="mt-3">
                                We may ask one question to verify you control the account before acting. We acknowledge
                                requests within 3 working days.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">3. What Gets Deleted</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>OAuth access and refresh tokens, and the record of granted permissions</li>
                                <li>Account identifiers, handles, display names, and profile pictures</li>
                                <li>Drafted and scheduled posts, including any uploaded media</li>
                                <li>Publishing history and stored performance metrics</li>
                            </ul>
                            <p className="mt-3">
                                Live records are erased immediately. Encrypted backups roll off on their normal cycle and
                                are fully purged within <strong className="text-foreground">30 days</strong>. We retain
                                only what the law requires, such as invoices and financial records, which contain no
                                social platform data.
                            </p>
                            <p className="mt-3">
                                Once complete we email you a confirmation. This is irreversible, so please export
                                anything you want to keep first.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">4. More Information</h2>
                            <p>
                                Full detail on what we hold and why is in the privacy policy for each Application:{" "}
                                <Link
                                    href="/terms/facebook"
                                    className="text-rose-600 hover:text-rose-700 underline underline-offset-4">
                                    Facebook
                                </Link>
                                ,{" "}
                                <Link
                                    href="/terms/tiktok"
                                    className="text-rose-600 hover:text-rose-700 underline underline-offset-4">
                                    TikTok
                                </Link>
                                ,{" "}
                                <Link
                                    href="/terms/x"
                                    className="text-rose-600 hover:text-rose-700 underline underline-offset-4">
                                    X
                                </Link>
                                , and{" "}
                                <Link
                                    href="/terms/linkedin"
                                    className="text-rose-600 hover:text-rose-700 underline underline-offset-4">
                                    LinkedIn
                                </Link>
                                .
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold tracking-tight mb-3">5. Contact Us</h2>
                            <p>
                                If you have any questions about deleting your data, please contact us at:{" "}
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
