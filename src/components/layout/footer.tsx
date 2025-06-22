import Link from 'next/link';
import { 
  Dumbbell, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/story' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Personal Training', href: '/personal-training' },
    { name: 'Group Classes', href: '/classes' },
    { name: 'Nutrition Coaching', href: '/nutrition' },
    { name: 'Corporate Wellness', href: '/corporate' },
  ],
  community: [
    { name: 'Blog', href: '/blog' },
    { name: 'Forum', href: '/forum' },
    { name: 'Events', href: '/events' },
    { name: 'Success Stories', href: '/success-stories' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
];

export function Footer() {
  return (
    <footer className="glass border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold gradient-text">PowerHouse</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Transform your body and mind at PowerHouse Gym. Join our community of fitness enthusiasts and achieve your goals with world-class facilities and expert guidance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-500" />
                <span>123 Fitness St, Health City, HC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-500" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-500" />
                <span>info@powerhousegym.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>Mon-Sun: 5:00 AM - 11:00 PM</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            <div className="lg:max-w-md">
              <h3 className="text-white font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="text-slate-400 text-sm">
                Get the latest fitness tips, workout routines, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 lg:max-w-sm lg:flex-1 lg:ml-8">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border-white/20 text-white placeholder:text-slate-400"
              />
              <Button className="btn-primary whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <p className="text-slate-400 text-sm">
            © 2024 PowerHouse Gym. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-slate-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}