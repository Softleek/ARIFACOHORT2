import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className="bg-gray-900 text-gray-100">
        <Navbar />

        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
