import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiCheck, FiSend, FiExternalLink } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { tisSchoolInfo } from '../data/tisData';
import { fadeLeft, fadeRight } from '../utils/animations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: 'Class IX',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Please enter a valid full name';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[0-9+\s-]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, '')) || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or query';
    } else if (formData.message.trim().length < 5) {
      newErrors.message = 'Message must be at least 5 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend validation & async submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      grade: 'Class IX',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-white relative overflow-hidden"
      aria-label="Contact Tulas International School"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Connect with TIS"
          title="Reach Out to Our"
          highlight="Admissions Office"
          description="Have questions regarding admissions, boarding life, or curriculum? Our admissions counselors are here to assist your family."
          align="center"
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Verified TIS Contact Details & Map Card */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Campus Address Card */}
            <div className="p-6 rounded-3xl bg-[#f8f5f0] border border-neutral-200/80">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#b90124] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#1c1c1c]">Campus Location</h3>
                  <p className="mt-1 text-sm text-neutral-600 leading-relaxed">
                    {tisSchoolInfo.location}
                  </p>
                  <a
                    href={tisSchoolInfo.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold uppercase tracking-wider text-[#b90124] hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone Numbers */}
            <div className="p-6 rounded-3xl bg-[#f8f5f0] border border-neutral-200/80">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#c09d59] text-neutral-950 flex items-center justify-center shrink-0 shadow-sm">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#1c1c1c]">Call Admissions Helpline</h3>
                  <div className="mt-1 flex flex-col gap-1 text-sm text-neutral-600">
                    <a href={`tel:${tisSchoolInfo.phone}`} className="hover:text-[#b90124] font-semibold transition-colors">
                      Admissions: {tisSchoolInfo.phone}
                    </a>
                    <a href={`tel:${tisSchoolInfo.altPhone}`} className="hover:text-[#b90124] transition-colors">
                      Alternate: {tisSchoolInfo.altPhone}
                    </a>
                    <p className="text-xs text-neutral-500 mt-1">
                      Landlines: {tisSchoolInfo.landline}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email & Visiting Hours */}
            <div className="p-6 rounded-3xl bg-[#f8f5f0] border border-neutral-200/80">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#60bab1] text-neutral-900 flex items-center justify-center shrink-0 shadow-sm">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#1c1c1c]">Email & Office Hours</h3>
                  <a href={`mailto:${tisSchoolInfo.email}`} className="mt-1 block text-sm font-semibold text-[#b90124] hover:underline">
                    {tisSchoolInfo.email}
                  </a>
                  <p className="mt-2 text-xs text-neutral-500 flex items-center gap-1.5">
                    <FiClock /> Monday – Saturday: 9:00 AM to 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Accessible Frontend Form with Client Validation */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 bg-[#faf9f6] rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-md relative"
          >
            <h3 className="font-display font-extrabold text-2xl text-[#1c1c1c]">
              Send an Admission Enquiry
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-500">
              Fill in your details below and our counseling counselor will connect with you within 24 hours.
            </p>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-8 p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                    <FiCheck className="text-3xl" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-emerald-900">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="mt-2 text-sm text-emerald-700 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our Tulas International admissions team has received your details for <strong>{formData.grade}</strong> and will contact you shortly at <strong>{formData.phone}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Submit Another Query
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Full Name <span className="text-[#b90124]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${
                        errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-300'
                      } text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#b90124] transition-all`}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-600 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Email Address <span className="text-[#b90124]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rajesh@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${
                          errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-300'
                        } text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#b90124] transition-all`}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-600 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Mobile Number <span className="text-[#b90124]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98379 83791"
                        className={`w-full px-4 py-3 rounded-xl bg-white border ${
                          errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-300'
                        } text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#b90124] transition-all`}
                        aria-invalid={errors.phone ? 'true' : 'false'}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-red-600 font-medium">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Grade Selection */}
                  <div>
                    <label htmlFor="grade" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Class Seeking Admission
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#b90124] transition-all"
                    >
                      <option value="Class IV">Class IV (Primary School)</option>
                      <option value="Class V">Class V (Primary School)</option>
                      <option value="Class VI">Class VI (Middle School)</option>
                      <option value="Class VII">Class VII (Middle School)</option>
                      <option value="Class VIII">Class VIII (Middle School)</option>
                      <option value="Class IX">Class IX (Secondary School)</option>
                      <option value="Class X">Class X (Secondary School)</option>
                      <option value="Class XI - Science">Class XI (Science Stream)</option>
                      <option value="Class XI - Commerce">Class XI (Commerce Stream)</option>
                      <option value="Class XI - Humanities">Class XI (Humanities)</option>
                      <option value="Class XII">Class XII</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5">
                      Your Message / Questions <span className="text-[#b90124]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please let us know your queries regarding admission fees, hostel boarding, or sports coaching..."
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${
                        errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-neutral-300'
                      } text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#b90124] transition-all`}
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-600 font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-white bg-gradient-to-r from-[#b90124] to-[#8c001a] hover:from-[#d62249] hover:to-[#b90124] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Admission Enquiry</span>
                        <FiSend />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-neutral-500 text-center mt-2">
                    🔒 We respect your privacy. Your information is protected under TIS Admission Policy.
                  </p>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
