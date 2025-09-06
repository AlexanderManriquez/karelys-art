import { ContactForm } from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="bg-gray-50">
      <header>
        <Navbar />
      </header>

      <main className="min-h-screen flex items-center justify-center">
        <ContactForm />
      </main>

      <footer>
        <Footer />
      </footer>
      
    </div>
  )
}