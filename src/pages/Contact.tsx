import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };
  const contactInfo = [{
    icon: Mail,
    label: 'Email',
    value: 'rifatul.hastiya@gmail.com',
    href: 'mailto:rifatul.hastiya@gmail.com'
  }, {
    icon: Instagram,
    label: 'Instagram',
    value: '@toool.z',
    href: 'https://instagram.com/toool.z'
  }, {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Rif\'atulmadhan Trihastiya',
    href: 'https://linkedin.com/in/rifatulmadhan-trihastiya'
  }, {
    icon: MapPin,
    label: 'Location',
    value: 'Yogyakarta, Indonesia',
    href: '#'
  }];
  const services = ['Videography & Cinematography', 'Video Editing & Post-Production', 'Motion Graphics & Animation', 'Green Screen Productions', 'Corporate Event Documentation', 'Educational Content Creation', 'Social Media Video Content', 'Promotional & Advertisement Videos'];
  return <Layout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Get In <span className="portfolio-gradient bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required className="mt-1" placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="mt-1" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleInputChange} required className="mt-1" placeholder="What's this about?" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required className="mt-1 min-h-[120px]" placeholder="Tell me about your project, timeline, and any specific requirements..." />
                </div>
                
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full portfolio-gradient">
                  {isSubmitting ? 'Sending...' : <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return <div key={index} className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-lg portfolio-gradient flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href !== '#' ? <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                              {info.value}
                            </a> : <p className="text-foreground">{info.value}</p>}
                        </div>
                      </div>;
                })}
                </div>
              </div>

              {/* Services Overview */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6">Skills</h2>
                <div className="space-y-3">
                  {services.map((service, index) => <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
                    </div>)}
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-4">Response Time</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I typically respond to all inquiries within 24 hours. For urgent projects, 
                  please mention it in your message, and I'll prioritize getting back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Prefer a Direct <span className="portfolio-gradient bg-clip-text text-transparent">Conversation?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out directly via email or connect with me on social media. 
                I'm always excited to discuss new projects and creative collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:rifatul.hastiya@gmail.com">
                    <Mail className="mr-2 w-4 h-4" />
                    Email Directly
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://instagram.com/toool.z" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 w-4 h-4" />
                    Follow on Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Contact;