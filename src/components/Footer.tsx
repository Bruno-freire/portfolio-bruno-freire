import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Bruno-freire", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/bruno-freire-174294240/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:brunofreire1717@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-foreground text-background py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                &lt;Bruno Freire/&gt;
              </span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-full bg-background/10 hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-background/70">
              <p>
                © {currentYear} Desenvolvedor Full Stack. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
