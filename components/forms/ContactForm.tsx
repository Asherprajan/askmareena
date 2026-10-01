"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  honeypot: string; // Anti-spam hidden field
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
        // Reset form
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
        className="p-8 sm:p-10 bg-white rounded-sm border border-[#E8E4DC] shadow-sm text-center space-y-5"
        role="alert"
        aria-live="polite"
      >
        <div className="w-14 h-14 rounded-full bg-[#F3EFEA] border border-[#B8976C] flex items-center justify-center mx-auto text-[#9E7B4F]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#14171A]">
          Enquiry Received
        </h3>

        <p className="text-base text-[#525866] max-w-md mx-auto leading-relaxed">
          {successMessage}
        </p>

        <p className="text-xs text-[#7A8291] max-w-sm mx-auto">
          Mareena reviews every message personally and will be in touch via email or WhatsApp to schedule your initial consultation.
        </p>

        <div className="pt-4">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="text-xs uppercase tracking-wider font-semibold text-[#14171A] hover:text-[#9E7B4F] underline underline-offset-4"
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
      className="p-8 sm:p-10 bg-white rounded-sm border border-[#E8E4DC] shadow-sm space-y-6"
    >
      {/* Honeypot field for bot mitigation - hidden from visual users and screen readers */}
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
          className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm rounded-sm flex items-start gap-2.5"
          role="alert"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errors.general}</span>
        </div>
      )}

      {/* Name Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="contact-name"
          className="block text-xs uppercase tracking-wider font-semibold text-[#14171A]"
        >
          Full Name <span className="text-red-500">*</span>
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
          className={`w-full px-4 py-3 rounded-sm border text-sm text-[#14171A] placeholder-[#7A8291]/60 focus:bg-white focus:outline-none transition-colors ${
            errors.name
              ? "border-red-500 bg-red-50/20"
              : "border-[#E8E4DC] bg-[#FAF8F5] focus:border-[#B8976C]"
          }`}
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-red-600 mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="contact-email"
          className="block text-xs uppercase tracking-wider font-semibold text-[#14171A]"
        >
          Email Address <span className="text-red-500">*</span>
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
          className={`w-full px-4 py-3 rounded-sm border text-sm text-[#14171A] placeholder-[#7A8291]/60 focus:bg-white focus:outline-none transition-colors ${
            errors.email
              ? "border-red-500 bg-red-50/20"
              : "border-[#E8E4DC] bg-[#FAF8F5] focus:border-[#B8976C]"
          }`}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-red-600 mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone / WhatsApp Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="contact-phone"
          className="block text-xs uppercase tracking-wider font-semibold text-[#14171A]"
        >
          Phone or WhatsApp Number <span className="text-[#7A8291] font-normal lowercase">(optional)</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="e.g. +971 50 000 0000"
          className="w-full px-4 py-3 rounded-sm border border-[#E8E4DC] bg-[#FAF8F5] text-sm text-[#14171A] placeholder-[#7A8291]/60 focus:bg-white focus:border-[#B8976C] focus:outline-none transition-colors"
        />
      </div>

      {/* Service Requirement Selection */}
      <div className="space-y-1.5">
        <label
          htmlFor="contact-service"
          className="block text-xs uppercase tracking-wider font-semibold text-[#14171A]"
        >
          Primary Service Area <span className="text-red-500">*</span>
        </label>
        <select
          id="contact-service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-sm border border-[#E8E4DC] bg-[#FAF8F5] text-sm text-[#14171A] focus:bg-white focus:border-[#B8976C] focus:outline-none transition-colors cursor-pointer"
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message Field */}
      <div className="space-y-1.5">
        <label
          htmlFor="contact-message"
          className="block text-xs uppercase tracking-wider font-semibold text-[#14171A]"
        >
          Tell Mareena About Your Requirement <span className="text-red-500">*</span>
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
          className={`w-full px-4 py-3 rounded-sm border text-sm text-[#14171A] placeholder-[#7A8291]/60 focus:bg-white focus:outline-none transition-colors resize-y ${
            errors.message
              ? "border-red-500 bg-red-50/20"
              : "border-[#E8E4DC] bg-[#FAF8F5] focus:border-[#B8976C]"
          }`}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-600 mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submission Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full py-3.5 px-6 rounded-sm bg-[#14171A] text-white text-sm font-semibold tracking-tight uppercase hover:bg-[#B8976C] active:bg-[#9E7B4F] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer"
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

      <p className="text-[11px] text-[#7A8291] text-center leading-relaxed">
        Your enquiry details are handled confidentially and evaluated exclusively to provide guidance on your UAE business setup.
      </p>
    </form>
  );
}
