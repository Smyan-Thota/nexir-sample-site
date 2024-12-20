import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">NEXIR<span className="text-[#FF7F50]">AI</span></h3>
            <p className="text-sm">
              Transforming businesses through innovative AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="hover:text-[#FF7F50] transition-colors cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-[#FF7F50] transition-colors cursor-pointer">About</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:text-[#FF7F50] transition-colors cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-[#FF7F50] transition-colors cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>Machine Learning</li>
              <li>Data Analytics</li>
              <li>AI Infrastructure</li>
              <li>Custom Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Cleveland, OH</li>
              <li>+1 (216) 301-9280</li>
              <li>smyan@nexirai.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} NexirAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;