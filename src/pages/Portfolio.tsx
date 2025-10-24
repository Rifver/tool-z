import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Eye, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Promotional', 'Documentary/Interview', 'Comedy', 'Animation', 'Graphic Design', 'Educational'];

  const projects = [
    {
      id: 1,
      title: 'Product Promotion',
      category: 'Promotional',
      role: 'Videographer & Editor',
      year: '2023',
      description: 'A comprehensive product promotion showcasing product values through dynamic storytelling and professional cinematography.',
      thumbnail: 'https://i.postimg.cc/CMP6PbKG/Screenshot-2025-07-31-030328.png',
      tags: ['Premiere Pro', 'Capcut', 'Color Grading']
    },
    {
      id: 2,
      title: 'Advertising Motion Graphic',
      category: 'Animation',
      role: 'Graphic Designer & Animator',
      year: '2024',
      description: 'High-energy product video with dynamic transitions and motion graphics.',
      thumbnail: 'https://i.postimg.cc/Y9hdLfG2/Screenshot-2025-07-30-211636.png',
      tags: ['After Effects', 'Motion Graphics', 'Product']
    },
    {
      id: 3,
      title: 'Product Testimonials',
      category: 'Documentary/Interview',
      role: 'Videographer & Editor',
      year: '2023',
      description: 'Professional interview setup with multiple camera angles and thoughtful lighting design for executive content.',
      thumbnail: 'https://i.postimg.cc/y8QT0pqq/Screenshot-2025-07-31-050749.png',
      tags: ['Interview', 'Audio Design', 'Multi-cam']
    },
    {
      id: 4,
      title: 'Educational Content Series',
      category: 'Educational',
      role: 'Director & Editor',
      year: '2023',
      description: 'Engaging educational videos with animated explanations and clear visual storytelling.',
      thumbnail: 'https://i.postimg.cc/wMMqRBDY/Screenshot-2025-07-31-050704.png',
      tags: ['Education', 'Content Strategy', 'Storytelling']
    },
    {
      id: 5,
      title: 'UI and Graphics Design',
      category: 'Graphic Design',
      role: 'Editor',
      year: '2025',
      description: 'Various UI and Graphic Design projects with modern and easy to read style',
      thumbnail: 'https://imgur.com/IebNKkb',
      tags: ['Graphic Design', 'UI Design']
    },
    {
      id: 6,
      title: 'Comedy Sketch',
      category: 'Comedy',
      role: 'Videographer & Editor',
      year: '2024',
      description: 'Engaging comedy content, featuring creative scriptwriting and dynamic editing techniques.',
      thumbnail: 'https://i.postimg.cc/qvRFf34T/Screenshot-2025-07-31-050851.png',
      tags: ['Comedy', 'Comedy Timing', 'Creative Edit']
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <Layout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              My <span className="portfolio-gradient bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of creative video projects across various industries and formats
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="transition-all hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex space-x-3">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.id === 1 ? "https://drive.google.com/file/d/1zaBcCZ2TowwfJylotFHMyOZ719NDFsdn/view?usp=sharing" : project.id === 2 ? "https://drive.google.com/file/d/1RFepNuXkBcpjUxdWzgeQQnzkpLgqso5h/view?usp=sharing" : project.id === 3 ? "https://drive.google.com/file/d/1gr_LdZuMa9zcK7Vzut8vjO38jq6FkcnP/view?usp=sharing" : project.id === 4 ? "https://drive.google.com/file/d/1Gq7uChS7nSRIwQTFvhuHAD3sdDIZD1sW/view?usp=sharing" : project.id === 5 ? "https://drive.google.com/drive/folders/1s0wvUSjuH7GqO_RLNJz0Vjp4miUb0joA?usp=drive_link" : project.id === 6 ? "https://drive.google.com/file/d/1wdNTp9D_KxjjZtRuOeYADZJ7ZvaXzVhL/view?usp=sharing" : "#"} target="_blank" rel="noopener noreferrer">
                          <Play className="w-4 h-4 mr-2" />
                          Play
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.id === 1 ? "https://drive.google.com/drive/folders/16AwSrFkyuCnYOLUkGFBcleuDIuc9RLY4?usp=drive_link" : project.id === 2 ? "https://drive.google.com/drive/folders/178aVLPm5qZJ-mpxfp4dCe_dq72Y-xY8_?usp=drive_link" : project.id === 3 ? "https://drive.google.com/drive/folders/15PaatHHil10xu8aHub9G30NlWup91p2L?usp=drive_link" : project.id === 4 ? "https://drive.google.com/drive/folders/1fBQhmw0jX6X6oSSCbbS6KNzmDK8NqTUb?usp=drive_link" : project.id === 5 ? "https://drive.google.com/drive/folders/1XEAYIY1pXYishOuhavr99acNmjq3IiC_?usp=drive_link" : project.id === 6 ? "https://drive.google.com/drive/folders/1_MJJq0QINIHnbf392FfNxGXOjQO3ucl_?usp=drive_link" : "#"} target="_blank" rel="noopener noreferrer">
                          <Eye className="w-4 h-4 mr-2" />
                          Details
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{project.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.year}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{project.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-secondary/50 text-xs rounded-md text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Get in <span className="portfolio-gradient bg-clip-text text-transparent">Touch!</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate to create exceptional video content that tells your story and engages your audience. Get in touch to discuss your vision and requirements.
              </p>
              <Button size="lg" className="portfolio-gradient" asChild>
                <Link to="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
