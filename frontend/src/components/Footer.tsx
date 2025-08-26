import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-800 text-white py-1 px-2 flex flex-col md:flex-row justify-between items-center fixed bottom-0">
            <p>© 2025 Karelys ART. Todos los derechos reservados.</p>
            <div className="flex space-x-4">
                <a href="/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-red-100"><FaInstagram size={24} /></a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-red-100"><FaFacebook size={24} /></a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-red-100"><FaTwitter size={24} /></a>
            </div>
        </footer>
    )
}