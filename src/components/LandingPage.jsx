import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Globe, Star, Users, Award, TrendingUp, ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const LandingPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleGetStarted = () => {
    console.log('Get started clicked with email:', email);
    alert('Thank you for your interest! We will contact you soon.');
    setEmail('');
  };

  const stats = [
    { icon: Users, value: '5,000+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '$50M+', label: 'Taxes Saved' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' }
  ];

  const benefits = [
    'Save 15-30% on taxes',
    'Year-round support',
    'Audit protection included',
    'Expert CPAs'
  ];

  const services = [
    {
      title: 'Individual Tax Filing',
      description: 'Complete tax preparation and filing services for individuals and families.',
      price: 'Starting at $149',
      features: ['Federal & State Returns', 'Tax Optimization', 'Audit Support']
    },
    {
      title: 'Business Tax Services', 
      description: 'Comprehensive tax solutions for small to medium businesses.',
      price: 'Starting at $299',
      features: ['Quarterly Returns', 'Business Deductions', 'Strategic Planning']
    },
    {
      title: 'Corporate Accounting',
      description: 'Full-service accounting and financial management for corporations.',
      price: 'Custom Pricing',
      features: ['Financial Statements', 'Cash Flow Management', 'CFO Services']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@taxpro.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Serving nationwide with local expertise</span>
            </div>
            <LanguageSwitcher variant="ghost" size="sm" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TP</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">{t('company')}</div>
                <div className="text-xs text-gray-500">{t('tagline')}</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['services', 'about', 'pricing', 'resources', 'contact'].map((item) => (
                <button
                  key={item}
                  className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <LanguageSwitcher variant="outline" size="sm" />
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Client Login
              </Button>
              <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white">
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">{t('hero.trusted')}</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
              <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {t('hero.subtitle')}
              </span>
              {t('hero.partner')}
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>

            {/* Key benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="max-w-md mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 border-2 border-gray-200 focus:border-emerald-500 rounded-lg outline-none"
                />
                <Button 
                  onClick={handleGetStarted}
                  className="h-12 px-8 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-3">Free consultation • No obligation • Expert advice</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                    <stat.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Professional Services
              <span className="block text-emerald-600">For Your Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From individual tax returns to complex corporate accounting, we provide expert services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="text-emerald-600 font-bold text-lg mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white">
                  Get Quote
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TP</span>
              </div>
              <div>
                <div className="text-2xl font-bold">{t('company')}</div>
                <div className="text-sm text-gray-400">{t('tagline')}</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Professional tax and accounting services you can trust. We help individuals and businesses optimize their financial strategies.
            </p>
            <div className="flex justify-center space-x-4">
              <LanguageSwitcher variant="ghost" size="sm" />
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 {t('company')}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
