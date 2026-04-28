import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Calendar, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface ItTrainingModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ItTrainingModal({ isOpen, onOpenChange }: ItTrainingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    // Use Access Key from .env
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY || "");
    formData.append("subject", "New Lead from IT Training - HireUp");
    formData.append("from_name", "HireUp Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Details submitted successfully! We'll be in touch soon.");
        onOpenChange(false);
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to connect to the mail server. Please check your internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 rounded-3xl bg-white text-navy max-h-[90vh] flex flex-col overflow-hidden">
        {/* Fixed Header */}
        <div className="p-8 pb-4">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold leading-tight">
              Start your Journey Today
            </DialogTitle>
            <DialogDescription className="text-navy-soft font-medium text-sm mt-2">
              Schedule a free consultant to discuss your career goals
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-8 pt-2 scrollbar-hide">
            <input type="hidden" name="source" value="IT Training" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  name="fullName"
                  required
                  placeholder="Full Name"
                  className="rounded-2xl bg-accent/50 border-none px-4 py-6 font-semibold"
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className="rounded-2xl bg-accent/50 border-none px-4 py-6 font-semibold"
                />
              </div>
              <div className="space-y-2">
                <Input
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone number"
                  className="rounded-2xl bg-accent/50 border-none px-4 py-6 font-semibold"
                />
              </div>
              <div className="space-y-2">
                <Select name="visaStatus" required>
                  <SelectTrigger className="rounded-2xl bg-accent/50 border-none px-4 h-[50px] font-semibold">
                    <SelectValue placeholder="Current Visa Status" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-none shadow-lg">
                    <SelectItem value="F1 (Student)">F1 (Student)</SelectItem>
                    <SelectItem value="H1B / H4">H1B / H4</SelectItem>
                    <SelectItem value="USC / GC">USC / GC</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <Select name="howDidYouHear" required>
                <SelectTrigger className="rounded-2xl bg-accent/50 border-none px-4 h-[50px] font-semibold w-full">
                  <SelectValue placeholder="How did you hear about us?" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-none shadow-lg">
                  <SelectItem value="Friend">Friend</SelectItem>
                  <SelectItem value="Linkedin">Linkedin</SelectItem>
                  <SelectItem value="Google">Google</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 mt-4">
              <Textarea
                name="careerGoals"
                required
                placeholder="Tell us about your career goals"
                className="rounded-2xl bg-accent/50 border-none px-4 py-4 min-h-[100px] font-semibold resize-none"
              />
            </div>

            <div className="rounded-3xl bg-accent/30 p-6 mt-6">
              <h4 className="font-bold text-sm mb-4">What happens after you submit:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm font-medium text-navy/80">
                  <Clock className="h-5 w-5 text-orange shrink-0" />
                  We'll review your information within 24 hours
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-navy/80">
                  <Calendar className="h-5 w-5 text-orange shrink-0" />
                  We will schedule a free 30-minute call
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-navy/80">
                  <MessageCircle className="h-5 w-5 text-orange shrink-0" />
                  And will discuss your personalized job placement or training roadmap
                </li>
              </ul>
            </div>
          </div>

          {/* Fixed Footer */}
          <div className="p-8 pt-4 border-t bg-white rounded-b-3xl flex items-center justify-between">
            <p className="text-[10px] text-navy/50 max-w-[200px] leading-tight font-medium">
              By submitting this form, you agree to our{" "}
              <a href="#" className="underline">terms of service</a> and{" "}
              <a href="#" className="underline">Privacy Policy</a>
            </p>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-navy hover:bg-orange px-8 py-6 text-base font-bold text-white shadow-xl shadow-navy/10 transition-all"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
