"use client";
import { BookMarked, Briefcase, Github, House, MessageSquare, User } from 'lucide-react';
import Dock from './ui/Dock';
import React from 'react'

const Header = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // External link function
  const openExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const items = [
    {
      icon: <House size={18} />,
      label: 'Home',
      onClick: () => scrollToSection('home')
    },
    {
      icon: <Briefcase size={18} />,
      label: 'Projects',
      onClick: () => scrollToSection('projects')
    },
    {
      icon: <MessageSquare size={18} />,
      label: 'Testimonials',
      onClick: () => scrollToSection('testimonials')
    },
    {
      icon: <User size={18} />,
      label: 'About',
      onClick: () => scrollToSection('about')
    },
    {
      icon: <BookMarked size={18} />,
      label: 'Blog',
      onClick: () => openExternalLink('https://abhiraj.dev')
    },
    {
      icon: <Github size={18} />,
      label: 'Github',
      onClick: () => openExternalLink('https://github.com/yourusername') // Replace with your GitHub URL
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  )
}

export default Header
