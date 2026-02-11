import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div>
      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="text-green-600 text-xl mb-2">✓ Message Sent!</div>
          <p className="text-slate-700">Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your full name" className="mt-1" />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className="mt-1" />
          </div>

          <div>
            <Label htmlFor="subject">Subject *</Label>
            <Input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} placeholder="What's this about?" className="mt-1" />
          </div>

          <div>
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Tell me about your project or inquiry..." className="mt-1 min-h-[150px]" />
          </div>

          <Button type="submit" size="lg" className="w-full">Send Message</Button>

          <p className="text-sm text-slate-500">* Required fields. Your information will be kept confidential.</p>
        </form>
      )}
    </div>
  );
}
