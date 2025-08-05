import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Programs', href: '#programs' },
    { name: 'Volunteer', href: '#volunteer' },
    { name: 'Donate', href: '#donate' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
  ];

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4">HopeForward</h3>
              <p className="text-white/90 leading-relaxed max-w-md">
                Building hope and changing lives through community-driven initiatives. 
                Together, we create sustainable impact that lasts for generations.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/80" />
                <span className="text-white/90">hello@hopeforward.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/80" />
                <span className="text-white/90">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white/80" />
                <span className="text-white/90">Hope Forward Foundation, 27 Unity Lane, Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter and Social */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Stay Connected</h4>
            
            {/* Newsletter Signup */}
<div className="mb-8">
  <p className="text-white/90 mb-4">
    Get updates on our latest initiatives and impact stories.
  </p>
 <div className="flex flex-col sm:flex-row gap-2">
  <input
    type="email"
    placeholder="Your email"
    className="w-full sm:w-48 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
  />
</div>

  <br></br>
    <button className="px-6 py-2 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors duration-200">
      Subscribe
    </button>
  
</div>


            {/* Social Media */}
            <div>
              <p className="text-white/90 mb-4">Follow our journey</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200 group"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5 text-white/80 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm">
              © 2025 HopeForward. All rights reserved. Built with ❤️ for positive change.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#terms" className="text-white/80 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#privacy" className="text-white/80 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
