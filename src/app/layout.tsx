import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "MM Baseball | Train with Purpose",
  description:
    "Professional baseball training programs led by former MLB pitcher Matt Maysey. Focused on pitching, hitting, player development, and modern performance analytics.",
  keywords:
    "baseball training, pitching lessons, hitting lessons, player development, baseball coach, Matt Maysey, MM Baseball, Houston baseball, elite baseball training, youth baseball, video analysis",
  openGraph: {
    title: "MM Baseball | Train with Purpose",
    description:
      "Professional baseball training programs by former MLB pitcher Matt Maysey. Hitting, pitching, and video analysis built for player development and performance.",
    url: "https://mm-baseball.vercel.app",
    siteName: "MM Baseball",
    images: [
      {
        url: "/images/mm-hero.png",
        width: 1200,
        height: 630,
        alt: "MM Baseball Training",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MM Baseball | Train with Purpose",
    description:
      "Private baseball training programs from former MLB pitcher Matt Maysey. Hitting, pitching, and player development built for results.",
    images: ["/images/mm-hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-[Poppins] bg-[#42B3E0] text-[#0A2351]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
