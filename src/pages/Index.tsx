import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import heroBackground from '@/assets/hero-background.jpg';
import profilePhoto from '@/assets/profile-photo.png';

const Index = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '3+' },
    { icon: Users, label: 'Projects Completed', value: '100+' },
    { icon: Play, label: 'Video Content', value: 'Various' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="mb-8">
              <img
                src={profilePhoto}
                alt="Rif'atulmadhan Trihastiya"
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20 shadow-2xl animate-float"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
              Rif'atulmadhan <span className="portfolio-gradient bg-clip-text text-transparent">Trihastiya</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
              Videographer & Video Editor
            </h2>
            
            <p className="text-lg md:text-xl text-accent mb-4 font-medium italic">
              "Transforming visions into visual stories."
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              A passionate videographer with professional experience in video production, skilled in 
              creating compelling visual content that brings stories to life through expert cinematography and editing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="portfolio-gradient hover:scale-105 transition-transform" asChild>
                <Link to="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform" asChild>
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={stat.label} 
                    className="glass-card p-6 text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Introduction */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Creating <span className="portfolio-gradient bg-clip-text text-transparent">Visual Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With expertise in Adobe Premiere Pro, Illustrator, Capcut and modern video production techniques, 
              I specialize in bringing creative visions to life through professional videography and post-production.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">Videography</h3>
                <p className="text-muted-foreground">
                  Professional camera operation, lighting setup, and green screen production for various content types.
                </p>
              </div>
              <div className="glass-card p-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">Post-Production</h3>
                <p className="text-muted-foreground">
                  Expert video editing, motion graphics, and visual storytelling to enhance your content's impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
