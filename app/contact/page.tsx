'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="graffiti-heading mb-6">GET IN TOUCH</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Questions? Feedback? Collaboration ideas? We'd love to hear from you.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="card-graffiti">
          <h2 className="text-3xl font-bold mb-6 graffiti-text text-white">
            SEND US A MESSAGE
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-bold mb-2" htmlFor="name">
                NAME *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-white font-bold mb-2" htmlFor="email">
                EMAIL *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-white font-bold mb-2" htmlFor="subject">
                SUBJECT *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="order">Order Support</option>
                <option value="wholesale">Wholesale/Partnership</option>
                <option value="press">Press & Media</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-white font-bold mb-2" htmlFor="message">
                MESSAGE *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border-2 border-graffiti-purple text-white rounded-lg focus:outline-none focus:border-graffiti-pink transition-colors"
                placeholder="Tell us what's on your mind..."
              />
            </div>
            <button type="submit" className="graffiti-button w-full">
              {submitted ? '✓ MESSAGE SENT!' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="card-graffiti">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-2xl font-bold text-white mb-2 graffiti-text">EMAIL</h3>
            <p className="text-gray-400">info@ivoryreign.com</p>
            <p className="text-gray-400">support@ivoryreign.com</p>
          </div>

          <div className="card-graffiti">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-2xl font-bold text-white mb-2 graffiti-text">LOCATION</h3>
            <p className="text-gray-400">
              123 Street Culture Ave<br />
              Urban District, CA 90001<br />
              United States
            </p>
          </div>

          <div className="card-graffiti">
            <div className="text-5xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold text-white mb-2 graffiti-text">HOURS</h3>
            <p className="text-gray-400">
              Monday - Friday: 9AM - 6PM PST<br />
              Saturday: 10AM - 4PM PST<br />
              Sunday: Closed
            </p>
          </div>

          <div className="card-graffiti">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold text-white mb-2 graffiti-text">SOCIAL MEDIA</h3>
            <p className="text-gray-400 mb-4">
              Follow us for the latest drops, behind-the-scenes content, and community vibes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-3xl hover:text-graffiti-pink transition-colors">📱</a>
              <a href="#" className="text-3xl hover:text-graffiti-purple transition-colors">📷</a>
              <a href="#" className="text-3xl hover:text-graffiti-blue transition-colors">🐦</a>
              <a href="#" className="text-3xl hover:text-graffiti-yellow transition-colors">💬</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
