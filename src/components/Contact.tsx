
import React, { useState } from 'react';
import { Send, Mail, Linkedin, Github, Twitter, InstagramIcon, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50 dark:bg-secondary/10">
      <div className="section-container">
        <h2 className="section-title text-center">Get in Touch</h2>
        <p className="section-subtitle text-center mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="glass-panel rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-input"
                  required
                ></textarea>
              </div>
              
              <Button
                type="submit"
                className="w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <div className="glass-panel rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a 
                    href="mailto:hussainaakash11@gmail.com" 
                    className="hover:text-primary transition-colors"
                  >
                    hussainaakash11@gmail.com
                  </a>
                </p>
                
                <p className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a 
                    href="https://www.linkedin.com/in/aakash-hussain11/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Aakash Hussain
                  </a>
                </p>
                
                <p className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a 
                    href="https://github.com/Hussainaakash11" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Hussainaakash11
                  </a>
                </p>
                
                <p className="flex items-center gap-3">
                  <Youtube className="h-5 w-5 text-primary" />
                  <a 
                    href="https://www.youtube.com/@l1h2m3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Lost Hope Music
                  </a>
                </p>
              </div>
            </div>
            
            <div className="glass-panel rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Location</h3>
              <p className="text-muted-foreground">
                Based in Anantnag, Jammu and Kashmir, India
                <br />
                Available for remote work worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
