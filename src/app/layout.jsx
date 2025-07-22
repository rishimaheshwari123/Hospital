// import Navbar from "@/components/comman/Navbar";
import "./globals.css";
import SubNavbar from "@/components/comman/SubNav";
import Footer from "@/components/comman/Footer";
import { Nav2 } from "@/components/comman/Nav2";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="hidden lg:block">
          <SubNavbar />
        </div>
        {/* <Navbar /> */}
        <Nav2 />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
export const generateMetadata = () => {
  return {
    title: "Orlando Heart & Vascular",
    description: "Orlando Heart & Vascular",
    keywords: "Orlando Heart & Vascular",
    url: "https://www.heartorlando.com",
    image: "/android-chrome-192x192.png",

    // Open Graph Tags
    openGraph: {
      type: "website",
      url: "Orlando Heart & Vascular",
      title: "Orlando Heart & Vascular",
      description: "Orlando Heart & Vascular",
      image: "/android-chrome-192x192.png",
    },
  };
};
