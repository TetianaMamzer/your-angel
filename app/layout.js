import "./globals.scss";
import { Comfortaa } from "next/font/google";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  title: "Your Angel",
  description: "Їстівні букети",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <body className={comfortaa.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
