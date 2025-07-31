import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Linkedin, Camera } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:rifatul.hastiya@gmail.com',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/toool.z',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/rif-atulmadhan-trihastiya-25b854245/',
    },
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="glass-card border-t mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Camera className="w-6 h-6 text-primary" />
              <span className="text-xl font-display font-bold">Rif'atulmadhan</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional videographer and video editor transforming visions into visual stories. 
              Specializing in promotional content, documentaries, and creative visual storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:rifatul.hastiya@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                rifatul.hastiya@gmail.com
              </a>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Rif'atulmadhan Trihastiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
