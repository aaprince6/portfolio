"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, X } from "lucide-react";

interface CaptchaDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

function generateChallenge(): { a: number; b: number; answer: number } {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { a, b, answer: a + b };
}

export default function CaptchaDialog({ open, onClose, onSuccess }: CaptchaDialogProps) {
  const [challenge, setChallenge] = useState(generateChallenge);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = useCallback(() => {
    const num = parseInt(input, 10);
    if (num === challenge.answer) {
      setError(false);
      setInput("");
      onSuccess();
    } else {
      setError(true);
      setChallenge(generateChallenge());
      setInput("");
    }
  }, [input, challenge, onSuccess]);

  const handleClose = useCallback(() => {
    setInput("");
    setError(false);
    setChallenge(generateChallenge());
    onClose();
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
          <motion.div
            className="relative w-full max-w-sm rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-1 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-border)]/50 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <div>
                <h3 className="font-semibold text-[var(--color-text)]">Verify You're Human</h3>
                <p className="text-xs text-[var(--color-text-muted)]">Solve this to download the CV</p>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                What is {challenge.a} + {challenge.b}?
              </label>
              <input
                type="number"
                value={input}
                onChange={(e) => { setInput(e.target.value); setError(false); }}
                onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(); }}
                className="w-full px-3 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] outline-none focus:border-[var(--color-primary)] transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                autoFocus
              />
              {error && (
                <p className="text-sm text-red-400 mt-1">Wrong answer. Try a new one.</p>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleClose}
                className="flex-1 px-4 py-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-border)]/30 transition-colors text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                Verify & Download
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
