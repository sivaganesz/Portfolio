import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, Mail, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { Bio } from '../data/constants';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.send(
        'service_zrtjoaf',
        'template_qorcyb9',
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: Bio.name,
        },
        'plNC_MUAdGbQ11mR-'
      );

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Something went wrong. Please try again later or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: Bio.email,
      href: `mailto:${Bio.email}`
    },
    {
      icon: <SiLinkedin size={20} />,
      label: 'LinkedIn',
      value: Bio.shortName,
      href: Bio.linkedin
    },
    {
      icon: <SiGithub size={20} />,
      label: 'GitHub',
      value: 'sivaganesz',
      href: Bio.github
    }
  ];

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Contact Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Col - Info */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold text-light-text-primary dark:text-dark-text-primary">
              Let's work together!
            </h3>
            <p className="text-dark-text-secondary text-lg max-md:text-base max-w-md">
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={idx}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-dark-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-dark-primary/10 flex items-center justify-center text-dark-primary group-hover:bg-dark-primary group-hover:text-white transition-all">
                  {info.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono text-dark-text-secondary uppercase tracking-widest">{info.label}</span>
                  <span className="font-bold text-light-text-primary dark:text-dark-text-primary">{info.value}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <h4 className="text-sm font-mono text-dark-text-secondary uppercase tracking-widest">Follow Me</h4>
            <div className="flex gap-4">
              <a href={Bio.twitter} target="_blank" rel="noopener noreferrer" aria-label="Follow me on Twitter" className="p-3 rounded-full bg-white/5 border border-white/10 text-dark-text-secondary hover:text-dark-primary transition-all"><FaXTwitter size={20} /></a>
              <a href={Bio.insta} target="_blank" rel="noopener noreferrer" aria-label="Follow me on Instagram" className="p-3 rounded-full bg-white/5 border border-white/10 text-dark-text-secondary hover:text-dark-primary transition-all"><SiInstagram size={20} /></a>
            </div>
          </div>
        </div>

        {/* Right Col - Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass p-8 max-md:p-6 rounded-3xl border border-white/10 relative z-10 overflow-hidden">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-10 gap-4 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-2">
                    <CheckCircle size={48} />
                  </div>
                  <h4 className="text-2xl font-bold dark:text-white">Message Sent!</h4>
                  <p className="text-dark-text-secondary">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => setIsSuccess(false)}
                    className="mt-4"
                  >
                    Send Another
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-bold text-dark-text-secondary ml-1">Your Name</label>
                      <input
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                        placeholder="white"
                        className={`bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 outline-none focus:border-dark-primary transition-colors text-light-text-primary dark:text-dark-text-primary`}
                      />
                      {errors.name && <span className="text-xs text-red-500 ml-1">{errors.name.message}</span>}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-bold text-dark-text-secondary ml-1">Email Address</label>
                      <input
                        id="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                        })}
                        placeholder="white@example.com"
                        className={`bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 outline-none focus:border-dark-primary transition-colors text-light-text-primary dark:text-dark-text-primary`}
                      />
                      {errors.email && <span className="text-xs text-red-500 ml-1">{errors.email.message}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm font-bold text-dark-text-secondary ml-1">Subject</label>
                    <input
                      id="subject"
                      {...register('subject', { required: 'Subject is required' })}
                      placeholder="Project Discussion"
                      className={`bg-white/5 border ${errors.subject ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 outline-none focus:border-dark-primary transition-colors text-light-text-primary dark:text-dark-text-primary`}
                    />
                    {errors.subject && <span className="text-xs text-red-500 ml-1">{errors.subject.message}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-bold text-dark-text-secondary ml-1">Message</label>
                    <textarea
                      id="message"
                      {...register('message', { required: 'Message is required' })}
                      placeholder="Hi Siva, I'd like to talk about..."
                      rows={5}
                      className={`bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 outline-none focus:border-dark-primary transition-colors text-light-text-primary dark:text-dark-text-primary resize-none`}
                    />
                    {errors.message && <span className="text-xs text-red-500 ml-1">{errors.message.message}</span>}
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                      <AlertCircle size={18} />
                      <span className="text-sm">{error}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    icon={isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Background Blobs */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-dark-primary/20 blur-[100px] rounded-full -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-dark-secondary/20 blur-[100px] rounded-full -z-10" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
