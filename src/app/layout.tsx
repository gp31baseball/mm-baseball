import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "MM Baseball",
  description: "Private Baseball Training - Pitching, Hitting, Player Development",
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
