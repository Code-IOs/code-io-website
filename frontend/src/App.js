import React, { useState, useEffect } from "react";
import "./App.css";

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">
          Code<span className="text-fluorescent">IO</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="hover:text-fluorescent transition-colors">Home</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-fluorescent transition-colors">Services</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-fluorescent transition-colors">About</button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-fluorescent transition-colors">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-fluorescent transition-colors">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full glass md:hidden">
            <div className="flex flex-col p-6 space-y-4">
              <button onClick={() => scrollToSection('home')} className="hover:text-fluorescent transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-fluorescent transition-colors text-left">Services</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-fluorescent transition-colors text-left">About</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-fluorescent transition-colors text-left">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-fluorescent transition-colors text-left">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden hero-pattern">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 49, 83, 0.8), rgba(0, 26, 46, 0.9)), url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Transform Your Business with
            <span className="gradient-text block"> Premium Development</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up" style={{animationDelay: '0.2s'}}>
            We craft exceptional web and mobile applications that drive growth for small businesses and empower consumers with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-4 rounded-full text-lg font-semibold text-white"
            >
              Start Your Project
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary px-8 py-4 rounded-full text-lg font-semibold"
            >
              View Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-fluorescent to-transparent rounded-full opacity-20 floating" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-transparent to-fluorescent rounded-full opacity-10 floating" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-fluorescent to-prussian rounded-full opacity-15 floating" style={{animationDelay: '4s'}}></div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Node.js, and cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern Tech Stack"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that convert visitors into customers through strategic user experience optimization.",
      image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive development services tailored to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-8 service-card group"
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-prussian/70 to-transparent"></div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 gradient-text">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 text-fluorescent mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Code IO</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              We're a passionate team of developers and designers dedicated to empowering small businesses and consumers with innovative technology solutions.
            </p>
            <p className="text-gray-400 mb-8">
              Founded with the mission to make premium development accessible, we combine technical expertise with creative problem-solving to deliver solutions that not only meet your needs but exceed your expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center glass-card rounded-xl p-6">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center glass-card rounded-xl p-6">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-8 py-4 rounded-full font-semibold text-white"
            >
              Let's Work Together
            </button>
          </div>
          
          <div className="relative">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-fluorescent rounded-full flex items-center justify-center text-prussian font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Discovery & Planning</h4>
                    <p className="text-gray-400 text-sm">We understand your business goals and technical requirements.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-fluorescent rounded-full flex items-center justify-center text-prussian font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Design & Development</h4>
                    <p className="text-gray-400 text-sm">Create beautiful, functional solutions using modern technologies.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-fluorescent rounded-full flex items-center justify-center text-prussian font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Testing & Launch</h4>
                    <p className="text-gray-400 text-sm">Rigorous testing followed by smooth deployment and ongoing support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </div>
  );
}
