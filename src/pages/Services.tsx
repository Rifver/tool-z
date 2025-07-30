import React from 'react';
import { Camera, Edit3, Palette, Monitor, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: 'Professional Videography',
      description: 'Expert camera operation with professional lighting setup and equipment to capture high-quality footage for any project.',
      features: [
        'Multi-camera setups',
        'Professional lighting',
        'Green screen production',
        'Event documentation',
        'Corporate videos'
      ],
      price: 'Custom Quote'
    },
    {
      icon: Edit3,
      title: 'Video Editing & Post-Production',
      description: 'Comprehensive video editing services using industry-standard software to bring your vision to life.',
      features: [
        'Adobe Premiere Pro editing',
        'Color correction & grading',
        'Audio mixing & mastering',
        'Transitions & effects',
        'Final delivery in multiple formats'
      ],
      price: 'Starting from $50'
    },
    {
      icon: Palette,
      title: 'Motion Graphics & Animation',
      description: 'Creative motion graphics and animation services to enhance your video content with engaging visual elements.',
      features: [
        'After Effects animation',
        'Logo animations',
        'Text overlays & titles',
        'Visual effects (VFX)',
        'Basic 3D animations'
      ],
      price: 'Starting from $75'
    },
    {
      icon: Monitor,
      title: 'Content Strategy & Consulting',
      description: 'Strategic guidance on video content creation, storytelling approaches, and visual communication best practices.',
      features: [
        'Content planning',
        'Storyboard creation',
        'Visual storytelling guidance',
        'Trend analysis',
        'Brand video strategies'
      ],
      price: 'Starting from $30/hour'
    }
  ];

  const addOnServices = [
    { icon: Zap, title: 'Rush Delivery', description: '24-48 hour turnaround for urgent projects' },
    { icon: Users, title: 'Team Collaboration', description: 'Work with your team throughout the production process' },
    { icon: Monitor, title: 'Multiple Formats', description: 'Optimized videos for different platforms and devices' }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              My <span className="portfolio-gradient bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional videography and editing services tailored to bring your creative vision to life
            </p>
          </div>

          {/* Main Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-8 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg portfolio-gradient flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add-on Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold text-center mb-8">
              Additional <span className="portfolio-gradient bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addOnServices.map((addon, index) => {
                const Icon = addon.icon;
                return (
                  <div key={index} className="glass-card p-6 text-center">
                    <Icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <h4 className="font-semibold text-foreground mb-2">{addon.title}</h4>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Process Section */}
          <div className="glass-card p-8 mb-16">
            <h2 className="text-3xl font-display font-bold text-center mb-8">
              My <span className="portfolio-gradient bg-clip-text text-transparent">Process</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Consultation', desc: 'Discuss your vision and requirements' },
                { step: '02', title: 'Planning', desc: 'Create detailed project timeline and strategy' },
                { step: '03', title: 'Production', desc: 'Professional filming and content creation' },
                { step: '04', title: 'Post-Production', desc: 'Expert editing and final delivery' }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full portfolio-gradient flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{phase.step}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start Your <span className="portfolio-gradient bg-clip-text text-transparent">Project?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your video production needs and create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="portfolio-gradient" asChild>
                  <Link to="/contact">Get Free Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/portfolio">View Previous Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;