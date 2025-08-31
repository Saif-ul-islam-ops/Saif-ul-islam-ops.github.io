"use client";


import { useState } from "react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/xblkayyl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-slide-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 cyber-text">📞 Contact</h2>
          <p className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 cyber-text animate-pulse-neon px-4 sm:px-0">
            "Let's Create Something Iconic — Together!"
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Reach out for small trainings, mini-tasks, or just to explore learning together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <Card className="glass-card p-6 sm:p-8 neon-glow animate-slide-in-left">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-xl bg-cyber-blue/20 animate-float flex-shrink-0">
                  <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-cyber-blue" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 cyber-text">Location</h3>
                  <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed">
                    📍 Mohalla Negar, Village Alooli<br />
                    Haripur, Pakistan
                  </p>
                </div>
              </div>
            </Card>

            {/* Decorative animated elements */}
            <div className="hidden lg:block space-y-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 bg-cyber-blue/20 rounded-full blur-xl animate-float"></div>
              </div>
              <div className="flex justify-end">
                <div className="w-16 h-16 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card p-6 sm:p-8 neon-glow animate-slide-in-up">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base sm:text-lg font-medium">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="bg-steel-dark/50 border-steel/50 focus:border-cyber-blue/50 h-10 sm:h-12 text-base sm:text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base sm:text-lg font-medium">Your Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="bg-steel-dark/50 border-steel/50 focus:border-cyber-blue/50 h-10 sm:h-12 text-base sm:text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-base sm:text-lg font-medium">Your message ...?</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What's your message ..."
                  required
                  rows={4}
                  className="bg-steel-dark/50 border-steel/50 focus:border-cyber-blue/50 text-base sm:text-lg resize-none min-h-[100px] sm:min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-metallic w-full h-12 sm:h-14 text-base sm:text-lg neon-glow group relative overflow-hidden"
                variant="outline"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-2 border-cyber-blue mr-2 sm:mr-3"></div>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:text-cyber-blue transition-colors" />
                    Send Message
                  </>
                )}
                
                {/* Ripple effect on click */}
                <div className="absolute inset-0 bg-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;