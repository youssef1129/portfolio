import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useForm } from '@formspree/react';

const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_API_MAIL || '');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-7">
          <h2 className="text-2xl lg:text-4xl font-bold mb-6">
            <span className="text-purple-400">@getInTouch</span>
            <span className="text-white">()</span>{' '}
            <span className="text-white">{'// '}</span>
            <span className="text-xl text-slate-300 mb-4">
              <span className="text-green-400">"Let's build something amazing together!"</span>
            </span>
          </h2>
        </div>

        <div style={{
          maxHeight: 'calc(100dvh - 200px)',
          overflow: 'auto',
        }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-5">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-800 rounded-lg p-8 border border-cyan-400/20">
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-green-400" size={24} />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-slate-300">maazouzyoussef11@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <MapPin className="text-purple-400" size={24} />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-slate-300">Ile-de-France</p>
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/youssef-maazouz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block">
                    <button className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-all duration-300 hover:scale-110">
                      <Github className="text-white" size={20} />
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/youssef-maazouz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block">
                    <button className="bg-slate-700 p-3 rounded-lg hover:bg-slate-600 transition-all duration-300 hover:scale-110">
                      <Linkedin className="text-white" size={20} />
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-green-400/20">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-slate-400 ml-4">status.js</span>
              </div>
              <div className="font-mono text-sm">
                <div className="text-green-400">
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-400">status</span>{' '}
                  <span className="text-white">=</span>{' '}
                  <span className="text-white">{'{'}</span>
                </div>
                <div className="ml-4 text-green-400">
                  <span className="text-cyan-400">availability</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-yellow-400">"Open to work"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-4 text-green-400">
                  <span className="text-cyan-400">response_time</span>
                  <span className="text-white">:</span>{' '}
                  <span className="text-yellow-400">
                    "Within 24 hours"{" "}
                    <span className="line-through text-green-300/60 text-xs align-super ml-2">408</span>
                  </span>
                </div>
                <div className="text-green-400">
                  <span className="text-white">{'};'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {state.succeeded ?
            <div className="bg-slate-800 rounded-lg p-8 border border-green-400/20 flex flex-col items-center justify-center">
              <div className="flex items-center mb-4">
              <span className="text-green-400 text-3xl mr-2">200</span>
              <span className="text-slate-300 text-lg">OK</span>
              </div>
              <h3 className="text-2xl font-semibold text-green-400 mb-4">Message Sent!</h3>
              <p className="text-slate-300 text-center">Thank you for reaching out. I will get back to you soon!</p>
              <Send className="text-green-400 mt-6" size={48} />
            </div>

            : <div className="bg-slate-800 rounded-lg p-8 border border-purple-400/20">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit" disabled={state.submitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-400/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>}

        </div>
      </div>
    </section>
  );
};

export default ContactSection;