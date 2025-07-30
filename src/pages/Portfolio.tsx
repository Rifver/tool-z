import React, { useState } from 'react';
import { Play, Eye, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Promotional', 'Documentary/Interview', 'Comedy', 'Animation', 'Green Screen', 'Educational'];

  const projects = [
    {
      id: 1,
      title: 'Corporate Brand Video',
      category: 'Promotional',
      role: 'Director & Editor',
      year: '2024',
      description: 'A compelling brand story video for PT. Adanu Adhinata Semesta showcasing company values and vision.',
      thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80',
      tags: ['Premiere Pro', 'Corporate', 'Branding']
    },
    {
      id: 2,
      title: 'Advertising Motion Graphic',
      category: 'Animation',
      role: 'Videographer & Editor',
      year: '2024',
      description: 'High-energy product launch video with dynamic transitions and motion graphics.',
      thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=500&q=80',
      tags: ['After Effects', 'Motion Graphics', 'Product']
    },
    {
      id: 3,
      title: 'Executive Interview Series',
      category: 'Documentary/Interview',
      role: 'Director of Photography',
      year: '2023',
      description: 'Professional interview setup with proper lighting and multi-camera angles.',
      thumbnail: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&q=80',
      tags: ['Interview', 'Corporate', 'Multi-cam']
    },
    {
      id: 4,
      title: 'Educational Content Series',
      category: 'Educational',
      role: 'Producer & Editor',
      year: '2024',
      description: 'Engaging educational videos with animated explanations and clear visual storytelling.',
      thumbnail: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=500&q=80',
      tags: ['Education', 'Animation', 'Storytelling']
    },
    {
      id: 5,
      title: 'Green Screen Productions',
      category: 'Green Screen',
      role: 'Technical Director',
      year: '2023',
      description: 'Various green screen projects with seamless background integration and color matching.',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&q=80',
      tags: ['Green Screen', 'VFX', 'Compositing']
    },
    {
      id: 6,
      title: 'Comedy Short Film',
      category: 'Comedy',
      role: 'Director & Editor',
      year: '2023',
      description: 'Light-hearted comedy short with creative editing and timing for maximum comedic effect.',
      thumbnail: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500&q=80',
      tags: ['Comedy', 'Short Film', 'Creative Edit']
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
                        <a href={project.id === 2 ? "https://drive.google.com/file/d/1RFepNuXkBcpjUxdWzgeQQnzkpLgqso5h/view?usp=sharing" : "#"} target="_blank" rel="noopener noreferrer">
                          <Play className="w-4 h-4 mr-2" />
                          Play
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.id === 2 ? "https://drive.google.com/drive/folders/178aVLPm5qZJ-mpxfp4dCe_dq72Y-xY8_?usp=drive_link" : "#"} target="_blank" rel="noopener noreferrer">
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
                Ready to Start Your <span className="portfolio-gradient bg-clip-text text-transparent">Project?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate to bring your vision to life with professional videography and editing services.
              </p>
              <Button size="lg" className="portfolio-gradient" asChild>
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;