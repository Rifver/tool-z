import React from 'react';
import { Calendar, MapPin, Award, Code } from 'lucide-react';
import Layout from '@/components/Layout';

const Experience = () => {
  const experiences = [
    {
      title: 'Videographer & Video Editor',
      company: 'PT. Adanu Adhinata Semesta',
      period: 'Feb 2023 – Feb 2024',
      location: 'Indonesia',
      type: 'Full-time',
      description: 'Led comprehensive video production and editing projects for corporate communications and marketing initiatives.',
      achievements: [
        'Managed full-cycle video production from concept to final delivery',
        'Created engaging content for social media platforms and corporate communications',
        'Collaborated with marketing teams to develop visual content strategies',
        'Improved video production efficiency by implementing standardized workflows',
        'Delivered high-quality videos that increased client engagement by 40%'
      ],
      skills: ['Adobe Premiere Pro', 'Video Production', 'Social Media Content', 'Corporate Communications']
    },
    {
      title: 'Laboratory Assistant',
      company: 'Ahmad Dahlan University',
      period: 'Feb 2022 – Jul 2022',
      location: 'Yogyakarta, Indonesia',
      type: 'Part-time',
      description: 'Assisted in computer laboratory operations and supported students with technical and educational needs.',
      achievements: [
        'Provided technical support for computer lab equipment and software',
        'Assisted students with programming assignments and multimedia projects',
        'Maintained lab equipment and ensured optimal working conditions',
        'Developed teaching materials for multimedia and video editing workshops',
        'Mentored students in video editing techniques and software usage'
      ],
      skills: ['Technical Support', 'Teaching', 'Multimedia Software', 'Student Mentoring']
    },
    {
      title: 'Intern Photographer & UI/UX Designer',
      company: 'Lazismu DIY',
      period: 'Feb 2021 – Jul 2021',
      location: 'Yogyakarta, Indonesia',
      type: 'Internship',
      description: 'Gained foundational experience in visual content creation and digital design for non-profit organization.',
      achievements: [
        'Captured professional photography for organizational events and campaigns',
        'Designed user interface elements for digital platforms',
        'Created visual content for social media and marketing materials',
        'Learned fundamentals of brand consistency and visual storytelling',
        'Contributed to increasing social media engagement through visual content'
      ],
      skills: ['Photography', 'UI/UX Design', 'Adobe Photoshop', 'Social Media Design']
    }
  ];

  const certifications = [
    {
      title: 'Adobe Certified Expert - Premiere Pro',
      issuer: 'Adobe',
      year: '2023',
      description: 'Advanced certification in video editing and post-production workflows'
    },
    {
      title: 'Video Production Fundamentals',
      issuer: 'Online Course Platform',
      year: '2022',
      description: 'Comprehensive course covering camera operation, lighting, and production techniques'
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Professional <span className="portfolio-gradient bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My journey in videography, video editing, and visual content creation
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-primary" />
              Work Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="glass-card p-8 relative">
                  {/* Timeline Line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-4 top-16 w-0.5 h-full bg-primary/30"></div>
                  )}
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-8 w-4 h-4 rounded-full portfolio-gradient"></div>
                  
                  <div className="ml-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location} • {exp.type}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-secondary/50 text-xs rounded-full text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <Code className="w-6 h-6 mr-3 text-primary" />
              Education
            </h2>
            <div className="glass-card p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">BSc in Informatics Engineering</h3>
                  <p className="text-primary font-medium">Ahmad Dahlan University</p>
                  <p className="text-sm text-muted-foreground">Concentration: Game Development</p>
                </div>
                <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Expected 2025
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Pursuing a Bachelor's degree in Informatics Engineering with a focus on game development. 
                This technical background provides a strong foundation for understanding multimedia technologies, 
                digital content creation, and the technical aspects of video production and editing.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">
              Certifications & <span className="portfolio-gradient bg-clip-text text-transparent">Training</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-primary font-medium mb-2">{cert.issuer} • {cert.year}</p>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;