import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Play, Briefcase, Building2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export interface Story {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  location: string;
  title: string;
  bio: string;
  situation: string;
  approach: string;
  image: string;
}

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  story: Story | null;
}

export function StoryModal({ isOpen, onClose, story }: StoryModalProps) {
  if (!story) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl p-0 bg-white rounded-4xl sm:rounded-[2.5rem] overflow-hidden border-none shadow-2xl z-100 outline-none flex flex-col lg:flex-row h-[92vh] lg:h-auto lg:max-h-[90vh]">

        {/* Audio/Visual Panel - Top on mobile, Top-Right on desktop */}
        <div className="w-full lg:w-[360px] lg:order-2 bg-slate-50 p-6 sm:p-10 flex items-start justify-center border-b lg:border-b-0 lg:border-l border-slate-100 shrink-0">
          <div className="relative w-full aspect-video lg:aspect-4/5 max-w-[320px] rounded-[1.5rem] lg:rounded-4xl overflow-hidden shadow-xl group cursor-pointer mt-4 lg:mt-0">
            <img
              src={story.image}
              alt={story.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-transform group-hover:scale-110">
                <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Audio Waveform Animation */}
            <div className="absolute bottom-6 left-0 right-0 px-6">
              <div className="flex items-end justify-center gap-1 h-12">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-white rounded-full opacity-80"
                    animate={{
                      height: [
                        Math.random() * 15 + 15,
                        Math.random() * 35 + 15,
                        Math.random() * 15 + 15
                      ],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      repeatType: "mirror",
                      delay: i * 0.1,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Area - Independently Scrollable */}
        <div className="flex-1 lg:order-1 overflow-y-auto scrollbar-hide overscroll-contain">
          <div className="p-8 sm:p-10 lg:p-12">
            <DialogHeader className="mb-8 text-left space-y-4">
              <div className="space-y-3">
                <DialogTitle className="text-3xl sm:text-4xl font-bold text-navy tracking-tight">
                  {story.name}
                </DialogTitle>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-semibold border border-navy/10">
                    <Briefcase className="w-3.5 h-3.5" />
                    {story.role}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy/5 text-navy text-xs font-semibold border border-navy/10">
                    <Building2 className="w-3.5 h-3.5" />
                    {story.company}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4 sm:w-5 sm:h-5",
                      i < Math.floor(story.rating)
                        ? "fill-orange text-orange"
                        : i < story.rating
                          ? "fill-orange/50 text-orange"
                          : "text-slate-200"
                    )}
                  />
                ))}
                <span className="ml-2 text-sm font-bold text-navy">{story.rating}</span>
              </div>
            </DialogHeader>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-4 leading-tight">
                  {story.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base sm:text-lg italic">
                  "{story.bio}"
                </p>
              </div>

              <div className="grid gap-6 pb-6">
                <div className="bg-slate-50/50 p-6 sm:p-8 rounded-[1.5rem] border border-slate-100">
                  <h4 className="text-sm font-black text-navy uppercase tracking-widest mb-4 opacity-50">The Situation</h4>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {story.situation}
                  </p>
                </div>

                <div className="bg-slate-50/50 p-6 sm:p-8 rounded-[1.5rem] border border-slate-100">
                  <h4 className="text-sm font-black text-navy uppercase tracking-widest mb-4 opacity-50">Our Approach</h4>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {story.approach}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
