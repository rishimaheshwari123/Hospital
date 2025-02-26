import Navbar from "@/components/comman/Navbar";
import "./globals.css";
import SubNavbar from "@/components/comman/SubNav";
import Footer from "@/components/comman/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="hidden lg:block">
          <SubNavbar />
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
