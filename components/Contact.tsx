'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 animate-slideUp">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            📞 Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
            Let's Build Your Future
          </h2>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            Ready to start your architectural journey? Reach out to our team and let's create something extraordinary together.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16 md:mb-24">
          {/* Contact Info Cards */}
          <div className="group animate-slideUp">
            <div className="h-full p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 backdrop-blur-sm hover:bg-white/5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary mb-6 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-foreground/70">+1 (555) 123-4567</p>
              <p className="text-foreground/70">+1 (555) 987-6543</p>
            </div>
          </div>

          <div className="group animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <div className="h-full p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 backdrop-blur-sm hover:bg-white/5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary mb-6 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-foreground/70">hello@architech.com</p>
              <p className="text-foreground/70">projects@architech.com</p>
            </div>
          </div>

          <div className="group animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <div className="h-full p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 backdrop-blur-sm hover:bg-white/5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 text-primary mb-6 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
              <p className="text-foreground/70">123 Design Plaza, Singapore</p>
              <p className="text-foreground/70">SG 123456</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto animate-slideUp">
          <div className="p-8 md:p-12 rounded-3xl border border-border/50 backdrop-blur-sm bg-white/2 hover:border-primary/50 transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border/50 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground placeholder-foreground/50"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border/50 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground placeholder-foreground/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border/50 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground placeholder-foreground/50"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border/50 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground"
                  >
                    <option value="">Select Type...</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="interior">Interior Design</option>
                    <option value="landscape">Landscape</option>
                    <option value="renovation">Renovation</option>
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border/50 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-foreground"
                >
                  <option value="">Select Range...</option>
                  <option value="0-100k">$0 - $100K</option>
                  <option value="100k-500k">$100K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m+">$1M+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-border/50 hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none text-foreground placeholder-foreground/50"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitted ? '✓ Message Sent!' : 'Send Message'}
                  <Send size={18} className={isSubmitted ? 'hidden' : 'group-hover:translate-x-1 transition-transform'} />
                </span>
              </button>
            </form>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-12 text-center animate-slideUp">
            <p className="text-foreground/70 mb-4">Prefer to chat on WhatsApp?</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/30 rounded-full text-green-600 hover:bg-green-500/20 transition-all duration-300 font-medium">
              <MessageSquare size={20} />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
