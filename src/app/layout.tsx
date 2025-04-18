import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "../components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
