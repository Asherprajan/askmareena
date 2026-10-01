"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  general?: string;
}

const serviceOptions = [
  "Company Formation",
  "Corporate Structuring",
  "Tax & Accounting",
  "Compliance",
  "Visa / Residency",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "Company Formation",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [successMessage, setSuccessMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service requirement.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please include a brief message (minimum 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("submitting");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setSuccessMessage(
          result.message ||
            "Thank you. Your enquiry has been sent directly to Mareena."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Company Formation",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setErrors({
            general: result.message || "Failed to submit enquiry. Please try again.",
          });
        }
      }
    } catch {
      setStatus("error");
      setErrors({
        general: "A network error occurred. Please check your connection and try again.",
      });
    }
  };

  if (status === "success") {
    return (
      <div
        className="p-8 sm:p-10 bg-[#0E1216] rounded-sm border border-white/15 text-center space-y-5 shadow-2xl"
        role="alert"
        aria-live="polite"
      >
        <div className="w-14 h-14 rounded-full bg-white/10 border border-white/30 flex items-center justify-center mx-auto text-white">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
          Enquiry Received
        </h3>

        <p className="text-base text-[#C5CCD6] max-w-md mx-auto leading-relaxed">
          {successMessage}
        </p>

        <p className="text-xs text-[#8E99A8] max-w-sm mx-auto">
          Mareena reviews every message personally and will be in touch via email or WhatsApp to schedule your initial consultation.
        </p>

        <div className="pt-4">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-xs uppercase tracking-wider font-semibold text-white hover:text-[#EAE6DF] underline underline-offset-4 cursor-pointer"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-8 sm:p-10 bg-[#0E1216] rounded-sm border border-white/10 shadow-2xl space-y-6"
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="form-website-field">Leave this empty</label>
        <input
          id="form-website-field"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errors.general && (
        <div
          className="p-4 bg-red-950/40 border border-red-500/40 text-red-200 text-xs sm:text-sm rounded-xs flex items-start gap-2.5"
          role="alert"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-400" />
          <span>{errors.general}</span>
        </div>
      )}

      {/* Name Field */}
      <div className="space-y-2">
        <label
          htmlFor="contact-name"
          className="block text-xs uppercase tracking-[0.14em] font-medium text-[#C5CCD6]"
        >
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          placeholder="e.g. Alexander Vance"
          className={`w-full px-4 py-3 rounded-xs border text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
            errors.name
              ? "border-red-500 bg-red-950/20"
              : "border-white/15 bg-[#13171D] focus:border-white"
          }`}
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-red-400 mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label
          htmlFor="contact-email"
          className="block text-xs uppercase tracking-[0.14em] font-medium text-[#C5CCD6]"
        >
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          placeholder="e.g. alexander@company.com"
          className={`w-full px-4 py-3 rounded-xs border text-sm text-white placeholder-white/30 focus:outline-none transition-colors ${
            errors.email
              ? "border-red-500 bg-red-950/20"
              : "border-white/15 bg-[#13171D] focus:border-white"
          }`}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-red-400 mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone Field */}
      <div className="space-y-2">
        <label
          htmlFor="contact-phone"
          className="block text-xs uppercase tracking-[0.14em] font-medium text-[#C5CCD6]"
        >
          Phone or WhatsApp Number <span className="text-[#8E99A8] font-normal lowercase">(optional)</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="e.g. +971 50 000 0000"
          className="w-full px-4 py-3 rounded-xs border border-white/15 bg-[#13171D] text-sm text-white placeholder-white/30 focus:border-white focus:outline-none transition-colors"
        />
      </div>

      {/* Service Requirement */}
      <div className="space-y-2">
        <label
          htmlFor="contact-service"
          className="block text-xs uppercase tracking-[0.14em] font-medium text-[#C5CCD6]"
        >
          Primary Service Area <span className="text-red-400">*</span>
        </label>
        <select
          id="contact-service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xs border border-white/15 bg-[#13171D] text-sm text-white focus:border-white focus:outline-none transition-colors cursor-pointer"
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-[#13171D] text-white">
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="block text-xs uppercase tracking-[0.14em] font-medium text-[#C5CCD6]"
        >
          Tell Mareena About Your Requirement <span className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Briefly outline your proposed activities, current stage, target timeline, or specific questions..."
          className={`w-full px-4 py-3 rounded-xs border text-sm text-white placeholder-white/30 focus:outline-none transition-colors resize-y ${
            errors.message
              ? "border-red-500 bg-red-950/20"
              : "border-white/15 bg-[#13171D] focus:border-white"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-400 mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full py-4 px-6 rounded-xs bg-[#EAE6DF] text-[#080A0C] text-sm font-semibold tracking-tight uppercase hover:bg-white active:bg-[#DCD7CE] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Enquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Enquiry to Mareena</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <p className="text-[11px] text-[#8E99A8] text-center leading-relaxed">
        Your enquiry details are handled confidentially and evaluated exclusively to provide guidance on your UAE business setup.
      </p>
    </form>
  );
}
