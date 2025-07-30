import React from 'react';
import { GraduationCap, Globe, Camera, Code } from 'lucide-react';
import Layout from '@/components/Layout';
import profilePhoto from '@/assets/profile-photo.png';

const About = () => {
  const skills = [
    'Adobe Premiere Pro',
    'Adobe Photoshop', 
    'Adobe Illustrator',
    'After Effects',
    'CapCut',
    'Green Screen Setup',
    'Motion Graphics',
    'Video Production'
  ];

  const languages = [
    { name: 'Indonesian', level: 'Native' },
    { name: 'English', level: 'Professional' }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About <span className="portfolio-gradient bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating compelling visual stories through professional videography and editing
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Profile Image */}
            <div className="lg:col-span-1">
              <div className="glass-card p-8 text-center">
                <img
                  src={profilePhoto}
                  alt="Rif'atulmadhan Trihastiya"
                  className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-primary/20 shadow-xl"
                />
                <h2 className="text-2xl font-display font-bold mb-2">Rif'atulmadhan Trihastiya</h2>
                <p className="text-primary font-medium">Videographer & Video Editor</p>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Camera className="w-6 h-6 mr-3 text-primary" />
                  Professional Background
                </h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A videographer with approximately one year of experience, with a strong interest and professional 
                    background in video production. Skilled in various types of video shooting and proficient in video 
                    and image editing applications such as Adobe Premiere Pro, Illustrator, Photoshop, CapCut, and 
                    basic knowledge of After Effects.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Experienced in producing video content for advertisements, product promotions, and corporate events. 
                    Driven with a passion for delivering services to companies, and committed to contributing to their events.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Offering ideas and visuals to spark new trends about videography and video editing, constantly 
                    evolving with the latest techniques and technologies in the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Education */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">BSc in Informatics Engineering</h4>
                  <p className="text-primary font-medium">Ahmad Dahlan University</p>
                  <p className="text-muted-foreground">2025 Graduate</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <Code className="w-4 h-4 inline mr-2" />
                    Concentration: Game Development
                  </p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-primary" />
                Language Proficiency
              </h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{lang.name}</span>
                    <span className="text-primary text-sm font-medium">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Technical <span className="portfolio-gradient bg-clip-text text-transparent">Skills</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-secondary/50 rounded-lg p-4 text-center hover:bg-secondary/70 transition-colors"
                >
                  <span className="text-sm font-medium text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;