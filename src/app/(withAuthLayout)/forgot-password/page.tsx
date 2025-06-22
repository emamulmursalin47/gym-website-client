/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';
import { 
  Mail, 
  ArrowLeft,
  Shield,
  CheckCircle,
  Clock
} from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/src/components/layout/header';
import { Footer } from '@/src/components/layout/footer';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-4">
                  <Shield className="w-full h-full text-white" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {isSubmitted ? 'Check Your Email' : 'Forgot Password?'}
              </h1>
              <p className="text-slate-400">
                {isSubmitted 
                  ? 'We\'ve sent password reset instructions to your email'
                  : 'No worries! Enter your email and we\'ll send you reset instructions'
                }
              </p>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="glass border-white/20">
                <CardContent className="p-6">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="pl-10 bg-white/5 border-white/20"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full btn-primary">
                        Send Reset Instructions
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center space-y-6">
                      <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-green-400" />
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Email Sent!</h3>
                        <p className="text-slate-400 text-sm mb-4">
                          We've sent password reset instructions to <strong>{email}</strong>
                        </p>
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-left">
                          <div className="flex items-center space-x-2 mb-2">
                            <Clock className="h-4 w-4 text-blue-400" />
                            <span className="text-sm font-medium text-blue-400">What's next?</span>
                          </div>
                          <ul className="text-sm text-slate-300 space-y-1">
                            <li>• Check your email inbox (and spam folder)</li>
                            <li>• Click the reset link in the email</li>
                            <li>• Create a new secure password</li>
                            <li>• Sign in with your new password</li>
                          </ul>
                        </div>
                      </div>

                      <Button 
                        onClick={() => setIsSubmitted(false)} 
                        variant="ghost" 
                        className="btn-secondary"
                      >
                        Send to Different Email
                      </Button>
                    </div>
                  )}

                  {/* Back to Login */}
                  <div className="text-center mt-6">
                    <Link
                      href="/login"
                      className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Sign In
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Help Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 text-center"
            >
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-white mb-2">Need Help?</h4>
                <p className="text-xs text-slate-400 mb-3">
                  If you don't receive the email within a few minutes, check your spam folder 
                  or contact our support team.
                </p>
                <Link
                  href="/contact"
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}