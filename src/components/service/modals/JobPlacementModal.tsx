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
import { Upload, X, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface JobPlacementModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JobPlacementModal({ isOpen, onOpenChange }: JobPlacementModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 2 * 1024 * 1024) {
        toast.error("File size must be less than 2MB");
        return;
      }
      setFile(selectedFile);
      toast.success("Resume uploaded successfully!");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please upload your resume");
      return;
    }
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    if (file) {
      formData.append("resume", file);
    }
    // Use Access Key from .env
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY || "");
    formData.append("subject", "New ATS Score Request - HireUp");
    formData.append("from_name", "HireUp Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Your ATS score is being calculated. We'll email you the results!");
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
              Calculate ATS score of your resume <br />
              <span className="text-orange">Free of cost</span>
            </DialogTitle>
            <DialogDescription className="text-navy-soft font-medium text-sm mt-2">
              Upload your resume and get instant feedback on your ATS compatibility
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-8 pt-2 scrollbar-hide">
            <input type="hidden" name="source" value="Job Placement" />

            <div className="space-y-4">
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <Input
                    name="jobRole"
                    required
                    placeholder="Applying for which role?"
                    className="rounded-2xl bg-accent/50 border-none px-4 py-6 font-semibold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold mb-2 ml-1">Upload Resume (PDF/DOCX)</label>
                <div
                  className={`relative border-2 border-dashed rounded-3xl p-8 transition-all ${file ? "border-orange bg-orange/5" : "border-navy/20 bg-accent/30 hover:border-orange/50"
                    }`}
                >
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="flex flex-col items-center justify-center text-center">
                    {file ? (
                      <>
                        <div className="w-12 h-12 rounded-full bg-orange/20 text-orange flex items-center justify-center mb-3">
                          <FileText className="h-6 w-6" />
                        </div>
                        <p className="font-bold text-navy truncate max-w-full px-4">{file.name}</p>
                        <button
                          type="button"
                          onClick={(e) => { e.preventDefault(); setFile(null); }}
                          className="mt-2 text-xs text-orange hover:underline font-bold flex items-center gap-1 z-20"
                        >
                          <X className="h-3 w-3" /> Remove file
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="w-12 h-12 rounded-full bg-navy/10 text-navy/40 flex items-center justify-center mb-3">
                          <Upload className="h-6 w-6" />
                        </div>
                        <p className="font-bold text-navy/60">Click to upload or drag & drop</p>
                        <p className="text-xs text-navy/40 mt-1">Maximum file size: 2MB</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-accent/30 p-6 mt-6">
              <h4 className="font-bold text-sm mb-4">Why ATS Score Matters:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm font-medium text-navy/80">
                  <CheckCircle2 className="h-5 w-5 text-orange shrink-0" />
                  75% of resumes are rejected by ATS before a human sees them
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-navy/80">
                  <CheckCircle2 className="h-5 w-5 text-orange shrink-0" />
                  Higher score increases your chances of getting an interview
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-navy/80">
                  <AlertCircle className="h-5 w-5 text-orange shrink-0" />
                  We provide personalized tips to improve your score
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
              {isSubmitting ? "Calculating..." : "Calculate Score"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
