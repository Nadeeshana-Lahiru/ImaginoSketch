import { FaGithub, FaLinkedin, FaGoogle, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center text-center py-6 bg-gray-950 text-white w-full">
      <div className="flex space-x-6 mb-2">
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl hover:text-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl hover:text-blue-400" />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <FaGoogle className="text-2xl hover:text-red-400" />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-2xl hover:text-gray-400" />
        </a>
      </div>
      <p className="text-sm">&copy; 2025 Nadeeshana Lahiru. All rights reserved.</p>
    </footer>
  );
}
