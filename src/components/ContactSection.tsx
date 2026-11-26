import { FormEvent, useState } from 'react';
import {
  AlertCircle,
  Check,
  Copy,
  Github,
  Globe,
  Info,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Facebook,
} from 'lucide-react';
import { Language, PROFILE } from '../data/portfolioData';

interface ContactSectionProps {
  lang: Language;
}

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<'idle' | 'validation_error' | 'no_backend'>('idle');
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const validate = (form: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.name.trim()) {
      nextErrors.name = lang === 'bn' ? 'অনুগ্রহ করে আপনার নাম লিখুন।' : 'Please enter your name.';
    } else if (form.name.trim().length < 2) {
      nextErrors.name =
        lang === 'bn' ? 'নাম কমপক্ষে ২ অক্ষরের হতে হবে।' : 'Name must be at least 2 characters.';
    }

    if (!form.email.trim()) {
      nextErrors.email =
        lang === 'bn' ? 'অনুগ্রহ করে আপনার ইমেইল ঠিকানা লিখুন।' : 'Please enter your email address.';
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email =
        lang === 'bn' ? 'একটি সঠিক ইমেইল ঠিকানা লিখুন।' : 'Please enter a valid email address.';
    }

    if (!form.subject.trim()) {
      nextErrors.subject = lang === 'bn' ? 'অনুগ্রহ করে একটি বিষয় লিখুন।' : 'Please enter a subject.';
    } else if (form.subject.trim().length < 3) {
      nextErrors.subject =
        lang === 'bn'
          ? 'বিষয় কমপক্ষে ৩ অক্ষরের হতে হবে।'
          : 'Subject must be at least 3 characters.';
    }

    if (!form.message.trim()) {
      nextErrors.message =
        lang === 'bn' ? 'অনুগ্রহ করে আপনার বার্তা লিখুন।' : 'Please write your message.';
    } else if (form.message.trim().length < 10) {
      nextErrors.message =
        lang === 'bn'
          ? 'বার্তাটি কমপক্ষে ১০ অক্ষরের হতে হবে।'
          : 'Message must be at least 10 characters.';
    }

    return nextErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCopiedDraft(false);
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitState('validation_error');
      return;
    }

    // Honest behavior: No backend mail endpoint is connected, so do NOT claim message was sent.
    setSubmitState('no_backend');
  };

  const handleCopyDraft = async () => {
    const formatted = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\nSubject: ${values.subject.trim()}\n\nMessage:\n${values.message.trim()}`;
    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedDraft(true);
      setTimeout(() => setCopiedDraft(false), 3000);
    } catch {
      setCopiedDraft(false);
    }
  };

  const handleFieldChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
    if (submitState !== 'idle') {
      setSubmitState('idle');
    }
  };

  const socialLinks = [
    {
      label: 'Facebook',
      url: PROFILE.contactPlaceholders.facebook,
      icon: Facebook,
    },
    {
      label: 'LinkedIn',
      url: PROFILE.contactPlaceholders.linkedin,
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      url: PROFILE.contactPlaceholders.github,
      icon: Github,
    },
    {
      label: 'X / Portfolio',
      url: PROFILE.contactPlaceholders.x,
      icon: Globe,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-slate-50 py-16 transition-colors duration-200 dark:bg-[#060B18] sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Contact Details & Social Placeholders */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {lang === 'bn' ? 'যোগাযোগ' : 'Contact Me'}
            </p>
            <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
              {lang === 'bn'
                ? 'আসুন নতুন প্রজেক্ট বা আইডিয়া নিয়ে কথা বলি'
                : "Let's Connect & Build Something Meaningful"}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {lang === 'bn'
                ? 'AI প্রজেক্ট, ওয়েব ডিজাইন বা ডিজিটাল অটোমেশন সংক্রান্ত যেকোনো আলোচনা বা সহযোগিতার জন্য নিচের ফর্মের মাধ্যমে বার্তা প্রস্তুত করতে পারেন।'
                : 'Reach out for AI experiments, website design collaborations, or creative digital projects.'}
            </p>

            {/* Direct Info List */}
            <div className="mt-8 space-y-4 border-t border-slate-200 pt-6 dark:border-slate-800">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {lang === 'bn' ? 'ঠিকানা' : 'Address'}
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {PROFILE.location[lang]}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {lang === 'bn' ? 'ইমেইল (Placeholder)' : 'Email (Placeholder)'}
                  </p>
                  <p className="font-mono-num text-sm font-semibold text-slate-900 dark:text-white">
                    {PROFILE.contactPlaceholders.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {lang === 'bn' ? 'ফোন (Placeholder)' : 'Phone (Placeholder)'}
                  </p>
                  <p className="font-mono-num text-sm font-semibold text-slate-900 dark:text-white">
                    {PROFILE.contactPlaceholders.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {lang === 'bn'
                  ? 'সোশ্যাল মিডিয়া (Placeholder লিংক)'
                  : 'Social Profiles (Customizable Placeholders)'}
              </p>

              <div className="mt-3 flex flex-wrap gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <button
                      key={social.label}
                      type="button"
                      onClick={() =>
                        setSocialNotice(
                          lang === 'bn'
                            ? `${social.label} প্রোফাইল লিংক Placeholder হিসেবে আছে: ${social.url}`
                            : `${social.label} link is currently a placeholder: ${social.url}`,
                        )
                      }
                      className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 transition-colors hover:border-blue-500/50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 whitespace-nowrap shrink-0 dark:border-slate-800 dark:bg-[#0D1629] dark:text-slate-200 dark:hover:border-blue-400/50 dark:hover:text-blue-400 cursor-pointer"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      <span>{social.label}</span>
                    </button>
                  );
                })}
              </div>

              {socialNotice && (
                <div
                  role="status"
                  className="mt-3 flex items-start gap-2 rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-600 dark:border-slate-800 dark:bg-[#0D1629] dark:text-slate-300"
                >
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  <span className="break-all">{socialNotice}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Contact Form with Validation & Honest Delivery Status */}
          <div className="lg:col-span-7">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#0D1629] sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-200"
                  >
                    {lang === 'bn' ? 'আপনার নাম' : 'Your Name'}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    placeholder={lang === 'bn' ? 'পূর্ণ নাম লিখুন' : 'Enter your full name'}
                    aria-invalid={Boolean(errors.name)}
                    className={`mt-2 w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 dark:bg-[#060B18] dark:text-white dark:placeholder:text-slate-500 ${
                      errors.name
                        ? 'border-rose-500 focus:ring-rose-500/40'
                        : 'border-slate-200 focus:border-blue-600 focus:ring-blue-600/30 dark:border-slate-700'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-slate-700 dark:text-slate-200"
                  >
                    {lang === 'bn' ? 'ইমেইল ঠিকানা' : 'Email Address'}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    placeholder="name@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className={`mt-2 w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 dark:bg-[#060B18] dark:text-white dark:placeholder:text-slate-500 ${
                      errors.email
                        ? 'border-rose-500 focus:ring-rose-500/40'
                        : 'border-slate-200 focus:border-blue-600 focus:ring-blue-600/30 dark:border-slate-700'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div className="mt-5">
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-200"
                >
                  {lang === 'bn' ? 'বিষয়' : 'Subject'}
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={(e) => handleFieldChange('subject', e.target.value)}
                  placeholder={
                    lang === 'bn' ? 'আপনার বার্তার বিষয় লিখুন' : 'What would you like to discuss?'
                  }
                  aria-invalid={Boolean(errors.subject)}
                  className={`mt-2 w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 dark:bg-[#060B18] dark:text-white dark:placeholder:text-slate-500 ${
                    errors.subject
                      ? 'border-rose-500 focus:ring-rose-500/40'
                      : 'border-slate-200 focus:border-blue-600 focus:ring-blue-600/30 dark:border-slate-700'
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-200"
                >
                  {lang === 'bn' ? 'বার্তা' : 'Message'}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => handleFieldChange('message', e.target.value)}
                  placeholder={
                    lang === 'bn'
                      ? 'আপনার প্রজেক্ট বা মতামত বিস্তারিত লিখুন...'
                      : 'Write your message or project details here...'
                  }
                  aria-invalid={Boolean(errors.message)}
                  className={`mt-2 w-full resize-y rounded-lg border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 dark:bg-[#060B18] dark:text-white dark:placeholder:text-slate-500 ${
                    errors.message
                      ? 'border-rose-500 focus:ring-rose-500/40'
                      : 'border-slate-200 focus:border-blue-600 focus:ring-blue-600/30 dark:border-slate-700'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Validation Error Summary */}
              {submitState === 'validation_error' && (
                <div
                  role="alert"
                  className="mt-5 flex items-start gap-2.5 rounded-xl border border-rose-500/30 bg-rose-50 p-4 text-xs font-medium text-rose-800 dark:border-rose-500/30 dark:bg-rose-950/40 dark:text-rose-200"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" aria-hidden="true" />
                  <span>
                    {lang === 'bn'
                      ? 'ফর্মটি জমা দেওয়ার আগে অনুগ্রহ করে উপরে চিহ্নিত ভুলগুলো ঠিক করুন।'
                      : 'Please correct the highlighted fields above before submitting.'}
                  </span>
                </div>
              )}

              {/* Honest No-Backend Notice (Never falsely reports "Message Sent") */}
              {submitState === 'no_backend' && (
                <div
                  role="status"
                  className="mt-5 rounded-xl border border-amber-500/40 bg-amber-50 p-4 text-xs text-amber-950 dark:border-amber-500/30 dark:bg-amber-950/30 dark:text-amber-100"
                >
                  <div className="flex items-start gap-2.5">
                    <Info
                      className="mt-0.5 h-4 w-4 shrink-0 text-amber-700 dark:text-amber-400"
                      aria-hidden="true"
                    />
                    <div className="space-y-2">
                      <p className="font-bold">
                        {lang === 'bn'
                          ? 'তথ্য যাচাই সম্পন্ন হয়েছে — ব্যাকএন্ড সংযুক্ত নেই'
                          : 'Form Validated — No Backend Mail Service Connected'}
                      </p>
                      <p className="leading-relaxed text-amber-900/90 dark:text-amber-200/90">
                        {lang === 'bn'
                          ? 'এই পোর্টফোলিও সাইটে এখনো কোনো ব্যাকএন্ড সার্ভার বা ইমেইল API সংযুক্ত না থাকায় বার্তাটি সরাসরি সার্ভারে পাঠানো হয়নি। আপনি চাইলে নিচের বাটন থেকে আপনার লেখা বার্তাটি কপি করে রাখতে পারেন।'
                          : 'Because no backend mail server or contact endpoint is currently connected to this portfolio, your message has not been transmitted. You can copy your validated message below.'}
                      </p>
                      <button
                        type="button"
                        onClick={handleCopyDraft}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-amber-600/30 bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 transition-colors hover:bg-amber-100 dark:border-amber-400/30 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 cursor-pointer"
                      >
                        {copiedDraft ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                            <span>
                              {lang === 'bn' ? 'বার্তা কপি হয়েছে' : 'Message Copied'}
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>
                              {lang === 'bn' ? 'বার্তা কপি করুন' : 'Copy Formatted Message'}
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0D1629] sm:w-auto whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
