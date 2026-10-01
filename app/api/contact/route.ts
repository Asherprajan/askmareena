import { NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  honeypot?: string; // Bot trap
}

const ALLOWED_SERVICES = [
  "Company Formation",
  "Corporate Structuring",
  "Tax & Accounting",
  "Compliance",
  "Visa / Residency",
  "Other",
];

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    const { name, email, phone, service, message, honeypot } = body;

    // 1. Anti-spam honeypot detection
    if (honeypot && honeypot.trim() !== "") {
      // Fake delay and success response to confuse automated bots
      return NextResponse.json(
        { success: true, message: "Enquiry received successfully." },
        { status: 200 }
      );
    }

    // 2. Server-side validation
    const errors: Record<string, string> = {};

    if (!name || name.trim().length < 2) {
      errors.name = "Please provide your full name (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      errors.email = "Please provide a valid email address.";
    }

    if (!service || !ALLOWED_SERVICES.includes(service)) {
      errors.service = "Please select a valid service requirement.";
    }

    if (!message || message.trim().length < 10) {
      errors.message = "Please include a brief message (minimum 10 characters).";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Validation failed." },
        { status: 400 }
      );
    }

    // 3. Sanitized payload ready for email dispatch / CRM
    const submissionData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "Not provided",
      service,
      message: message.trim(),
      receivedAt: new Date().toISOString(),
      source: "askmareena.com contact form",
    };

    const recipientEmail = process.env.CONTACT_EMAIL || "askmareena@gmail.com";
    console.log("[Contact Submission Received]:", {
      from: submissionData.name,
      email: submissionData.email,
      phone: submissionData.phone,
      service: submissionData.service,
      forwardTo: recipientEmail,
      timestamp: submissionData.receivedAt,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. Mareena has received your enquiry and will respond directly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while submitting your enquiry. Please try again or reach out directly.",
      },
      { status: 500 }
    );
  }
}
