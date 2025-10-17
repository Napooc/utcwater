import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
export const Footer = () => {
  return <footer className="bg-gradient-wave relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            <h3 className="text-3xl font-bold text-secondary mb-4">UTC WATER</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Engineering Excellence in Water Treatment Since 2005
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Facebook].map((Icon, index) => <motion.a key={index} whileHover={{
              scale: 1.2,
              rotate: 360
            }} transition={{
              duration: 0.3
            }} href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </motion.a>)}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} viewport={{
          once: true
        }}>
            <h4 className="text-xl font-bold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Equipment", "Services", "Industries", "About Us", "Contact"].map(link => <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-300 inline-block hover:translate-x-2 transition-transform">
                    {link}
                  </a>
                </li>)}
            </ul>
          </motion.div>

          {/* UK Office */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <h4 className="text-xl font-bold mb-6 text-foreground">Office</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground text-sm">
                  UTC WATER LTD<br />
                  128 City Road, London EC1V<br />
                  United Kingdom
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+447707366467" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                  +44 7707 366467
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:utcwater@utcwater.com" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                  utcwater@utcwater.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Morocco Office */}
          
        </div>

        {/* Newsletter */}
        

        {/* Bottom Bar */}
        <div className="border-t border-muted/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 UTC WATER. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};