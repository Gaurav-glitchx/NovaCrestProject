import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, timeline, message, honeypot } = body;

    // Spam bot honeypot detection
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    // Required fields validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please provide your name, email, and a brief description of your project." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Log internally for developer / server records
    console.log("[NovaCrest Contact Form Submission]:", {
      name,
      email,
      phone: phone || "Not specified",
      company: company || "Not specified",
      service: service || "General Inquiry",
      budget: budget || "Not specified",
      timeline: timeline || "Not specified",
      messageLength: message.length,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out. A NovaCrest technical partner will review your requirements and reach out within 24 hours under NDA."
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Unable to process inquiry. Please email hello@novacrest.tech directly." },
      { status: 500 }
    );
  }
}
