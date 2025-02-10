import { Button } from "@/components/ui/button";
import { LinkedinIcon } from "lucide-react";
import { Ubuntu } from "next/font/google";
import Link from "next/link";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const links = {
    company: ["About", "Blog", "Careers", "Newsletter"],
    resources: ["Contact Us", "Privacy Policy", "Terms of Service"],
    featured: [
      "Transform Inbound with AI",
      "Automate Research with AI",
      "Filter Applications with AI",
      "Generate Leads using AI",
      "Improve Staff Training using AI",
    ],

    social: [
      // { name: "Twitter", icon: TwitterIcon },
      {
        name: "LinkedIn",
        icon: LinkedinIcon,
        href: "https://www.linkedin.com/company/lumio-ai",
      },
      // { name: "Facebook", icon: FacebookIcon },
    ],
  };

  const handleLinkClick = (link: string) => {
    switch (link.toLowerCase()) {
      case "privacy policy":
        setCurrentPage("privacy-policy");
        break;
      case "terms of service":
        setCurrentPage("terms-of-service");
        break;
      case "blog":
        setCurrentPage("blog");
        break;
      case "careers":
        setCurrentPage("careers");
        break;
      default:
        // Handle other links if needed
        break;
    }
  };

  return (
    <footer className="border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8">
                  <img src="/images/logos/Lumio AI.png" />
                </div>
                <span
                  className={`text-xl font-bold text-primary ${ubuntu.className}`}
                >
                  Lumio AI
                </span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-sm">
                Empowering businesses with intelligent AI workers for a more
                productive and efficient future.
              </p>
              <div className="flex gap-4">
                {links.social.map((social, index) => (
                  <Link
                    key={social.name}
                    id={`90gbu0_${index}`}
                    href={social.href}
                    target="_blank"
                  >
                    <Button variant="ghost" size="icon">
                      <social.icon className="h-5 w-5" id={`s19iip_${index}`} />
                    </Button>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 w-full md:w-2/3">
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  {links.company.map((link, index) => (
                    <li key={link} id={`7n1i06_${index}`}>
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="text-muted-foreground hover:text-foreground"
                        id={`c0mmm7_${index}`}
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  {links.resources.map((link, index) => (
                    <li key={link} id={`w5vb2m_${index}`}>
                      <button
                        onClick={() => handleLinkClick(link)}
                        className="text-muted-foreground hover:text-foreground"
                        id={`i0ciem_${index}`}
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Featured Stories</h3>
                <ul className="space-y-3">
                  {links.featured.map((link, index) => (
                    <li key={link} id={`5n230i_${index}`}>
                      <button
                        className="text-muted-foreground hover:text-foreground text-left"
                        id={`b7rs5y_${index}`}
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>© 2025 Lumio AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
