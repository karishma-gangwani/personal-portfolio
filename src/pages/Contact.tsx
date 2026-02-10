import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "gangwani.karishma22@gmail.com",
      link: "mailto:gangwani.karishma22@gmail.com",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/karishmagangwani",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9561731600",
      link: "tel:+919561731600",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangalore, India",
      link: null,
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6">Let's Work Together</h1>
            <p className="text-xl text-slate-700">
              Ready to transform your business? Get in touch to discuss your project and 
              explore how strategic consulting can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-6">Send a Message</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and I'll get back to you within 24-48 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-600 text-xl mb-2">✓ Message Sent!</div>
                  <p className="text-slate-700">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      className="mt-1 min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>

                  <p className="text-sm text-slate-500">
                    * Required fields. Your information will be kept confidential.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8">
                I'm always interested in hearing about new projects and opportunities. 
                Choose your preferred way to connect.
              </p>

              <div className="space-y-4 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <Card
                      key={index}
                      className={`hover:shadow-lg transition-shadow ${
                        info.link ? "cursor-pointer" : ""
                      }`}
                    >
                      <CardContent className="p-6 flex items-start">
                        <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg mb-1">{info.title}</h3>
                          <p
                            className={`text-slate-600 ${
                              info.link ? "hover:text-blue-600" : ""
                            }`}
                          >
                            {info.value}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  );

                  return info.link ? (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  );
                })}
              </div>

              {/* What to Expect */}
              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-xl mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">1</span>
                    </div>
                    <div>
                      <p className="text-slate-700">
                        Initial consultation to understand your needs
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">2</span>
                    </div>
                    <div>
                      <p className="text-slate-700">
                        Proposal with scope, timeline, and investment
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">3</span>
                    </div>
                    <div>
                      <p className="text-slate-700">
                        Collaborative execution with regular updates
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">4</span>
                    </div>
                    <div>
                      <p className="text-slate-700">
                        Measurable results and ongoing support
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">What types of projects do you take on?</h3>
                <p className="text-slate-600">
                  I work on strategic consulting projects across research, operations, marketing, 
                  and communications, as well as product development initiatives. Projects range 
                  from short-term engagements (2-4 weeks) to ongoing partnerships (6+ months).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">What industries do you serve?</h3>
                <p className="text-slate-600">
                  I specialize in science, healthcare, technology, and education sectors, though 
                  my process optimization and marketing expertise applies across industries. 
                  I'm particularly passionate about projects with social impact.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">What's your typical engagement process?</h3>
                <p className="text-slate-600">
                  It starts with a free consultation to understand your needs. Then I provide a 
                  detailed proposal outlining scope, timeline, and investment. Once approved, we 
                  begin with discovery, move to strategy development, and then implementation with 
                  regular check-ins and updates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Do you work remotely or on-site?</h3>
                <p className="text-slate-600">
                  I'm flexible and can work both remotely and on-site depending on project needs. 
                  Many engagements are hybrid, with some on-site time for workshops and key meetings, 
                  and remote work for ongoing execution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}