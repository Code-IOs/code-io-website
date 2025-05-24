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

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Local Bakery Co.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      quote: "Code IO transformed our online presence completely. Our new website increased our orders by 150% in just 3 months!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Tech Startup",
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094",
      quote: "The mobile app they built for us is exactly what we envisioned. Professional, fast, and our users love it!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Code IO.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-8 relative overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url('${testimonial.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-fluorescent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-lg text-gray-200 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-fluorescent text-sm">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="gradient-text">Project?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge technology solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-fluorescent rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-prussian" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-400">hello@codeio.dev</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-fluorescent rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-prussian" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-400">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-fluorescent rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-prussian" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-400">Remote & Global</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 focus:outline-none"
                  placeholder="Your Company (Optional)"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg form-input text-white placeholder-gray-400 focus:outline-none resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary py-4 rounded-lg font-semibold text-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website typically takes 2-4 weeks, while complex web applications or mobile apps can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern, industry-standard technologies including React, Node.js, Python, React Native, Flutter, and cloud platforms like AWS and Google Cloud. We choose the best tech stack for each project's specific needs."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer comprehensive support packages including maintenance, updates, hosting, and technical support. We're here to ensure your application continues to perform optimally long after launch."
    },
    {
      question: "What's included in your pricing?",
      answer: "Our pricing includes design, development, testing, deployment, and initial training. We provide transparent, fixed-price quotes with no hidden fees. Additional features or changes during development are discussed and approved before implementation."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! We can help improve, maintain, or completely redesign existing applications. We'll analyze your current setup and provide recommendations for enhancements or necessary updates."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are some common questions about our services and process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card rounded-xl mb-4 overflow-hidden">
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => setOpenItem(openItem === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <svg 
                  className={`w-6 h-6 transition-transform ${openItem === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-6">
                  <div className="section-divider mb-4"></div>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-3xl font-bold gradient-text mb-4">
              Code<span className="text-fluorescent">IO</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming businesses through innovative web and mobile development solutions. 
              Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-fluorescent hover:text-prussian transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-fluorescent hover:text-prussian transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-fluorescent hover:text-prussian transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.083.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.749-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-fluorescent transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-fluorescent transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-fluorescent transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-fluorescent transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-fluorescent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-fluorescent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-fluorescent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-fluorescent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="section-divider my-8"></div>
        
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Code IO. All rights reserved. Crafted with ❤️ for amazing businesses.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
