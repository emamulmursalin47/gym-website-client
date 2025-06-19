'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Lock, 
  Phone, 
  Calendar, 
  MapPin, 
  CreditCard,
  Shield,
  CheckCircle,
  Star,
  Zap,
  Crown,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const membershipPlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 29,
    period: 'month',
    description: 'Perfect for getting started',
    icon: Zap,
    features: [
      'Access to gym equipment',
      'Locker room access',
      'Basic mobile app',
      'Community forum access',
      'Email support',
    ],
    gradient: 'from-slate-600 to-slate-700',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 59,
    period: 'month',
    description: 'Most popular choice',
    icon: Star,
    popular: true,
    features: [
      'Everything in Basic',
      'Group fitness classes',
      '2 personal training sessions/month',
      'Nutrition consultation',
      'Premium mobile app features',
      'Priority booking',
      'Guest passes (2/month)',
    ],
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 99,
    period: 'month',
    description: 'Ultimate fitness experience',
    icon: Crown,
    features: [
      'Everything in Pro',
      'Unlimited personal training',
      'Premium locker with towel service',
      'Massage therapy (2 sessions/month)',
      'Nutrition meal planning',
      'VIP parking',
      'Guest passes (unlimited)',
      '24/7 concierge support',
    ],
    gradient: 'from-purple-600 to-pink-600',
  },
];

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    address: '',
    city: '',
    zipCode: '',
    emergencyContact: '',
    emergencyPhone: '',
    fitnessGoals: [],
    medicalConditions: '',
    agreeToTerms: false,
    agreeToMarketing: false,
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData, selectedPlan);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Join <span className="gradient-text">PowerHouse</span> Today
            </h1>
            <p className="text-slate-400 text-lg">
              Start your fitness journey with us in just a few simple steps
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-slate-400">Step {step} of {totalSteps}</span>
              <span className="text-sm text-slate-400">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </motion.div>

          {/* Form Steps */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Step 1: Membership Plan */}
            {step === 1 && (
              <Card className="glass border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Choose Your Plan</CardTitle>
                  <CardDescription>
                    Select the membership plan that best fits your fitness goals and lifestyle.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup
                    value={selectedPlan}
                    onValueChange={setSelectedPlan}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                  >
                    {membershipPlans.map((plan) => {
                      const Icon = plan.icon;
                      return (
                        <motion.div
                          key={plan.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Label
                            htmlFor={plan.id}
                            className={`relative glass-card cursor-pointer transition-all duration-300 ${
                              selectedPlan === plan.id 
                                ? 'ring-2 ring-blue-500/50 bg-blue-500/10' 
                                : 'hover:bg-white/5'
                            }`}
                          >
                            <div className="flex items-center space-x-2 absolute top-4 right-4">
                              <RadioGroupItem value={plan.id} id={plan.id} />
                              {plan.popular && (
                                <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs">
                                  Popular
                                </Badge>
                              )}
                            </div>

                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} p-3 mb-4`}>
                              <Icon className="w-full h-full text-white" />
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                            <p className="text-slate-400 text-sm mb-4">{plan.description}</p>

                            <div className="flex items-center mb-4">
                              <span className="text-3xl font-bold text-white">${plan.price}</span>
                              <span className="text-slate-400 ml-2">/{plan.period}</span>
                            </div>

                            <div className="space-y-2">
                              {plan.features.slice(0, 4).map((feature) => (
                                <div key={feature} className="flex items-center space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span className="text-slate-300 text-sm">{feature}</span>
                                </div>
                              ))}
                              {plan.features.length > 4 && (
                                <div className="text-slate-400 text-sm">
                                  +{plan.features.length - 4} more features
                                </div>
                              )}
                            </div>
                          </Label>
                        </motion.div>
                      );
                    })}
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Personal Information */}
            {step === 2 && (
              <Card className="glass border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Personal Information</CardTitle>
                  <CardDescription>
                    Tell us about yourself so we can create your account.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="pl-10 bg-white/5 border-white/20"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="pl-10 bg-white/5 border-white/20"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="pl-10 bg-white/5 border-white/20"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="pl-10 bg-white/5 border-white/20"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="dateOfBirth"
                        type="date"
                        className="pl-10 bg-white/5 border-white/20"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Create a password"
                          className="pl-10 bg-white/5 border-white/20"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          className="pl-10 bg-white/5 border-white/20"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Address & Emergency Contact */}
            {step === 3 && (
              <Card className="glass border-white/20">
                <CardHeader>
                  <CardTitle className="text-2xl gradient-text">Address & Emergency Contact</CardTitle>
                  <CardDescription>
                    We need this information for safety and communication purposes.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="address"
                        placeholder="Enter your street address"
                        className="pl-10 bg-white/5 border-white/20"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="Enter your city"
                        className="bg-white/5 border-white/20"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        placeholder="Enter your ZIP code"
                        className="bg-white/5 border-white/20"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Emergency Contact</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                        <Input
                          id="emergencyContact"
                          placeholder="Full name"
                          className="bg-white/5 border-white/20"
                          value={formData.emergencyContact}
                          onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                        <Input
                          id="emergencyPhone"
                          type="tel"
                          placeholder="Phone number"
                          className="bg-white/5 border-white/20"
                          value={formData.emergencyPhone}
                          onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Final Details & Payment */}
            {step === 4 && (
              <div className="space-y-6">
                <Card className="glass border-white/20">
                  <CardHeader>
                    <CardTitle className="text-2xl gradient-text">Almost Done!</CardTitle>
                    <CardDescription>
                      Final details to complete your membership registration.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <Label>Fitness Goals (Select all that apply)</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          'Weight Loss',
                          'Muscle Building',
                          'Cardio Fitness', 
                          'Strength Training',
                          'Flexibility',
                          'Sports Performance'
                        ].map((goal) => (
                          <div key={goal} className="flex items-center space-x-2">
                            <Checkbox
                              id={goal}
                              checked={formData.fitnessGoals.includes(goal)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  handleInputChange('fitnessGoals', [...formData.fitnessGoals, goal]);
                                } else {
                                  handleInputChange('fitnessGoals', formData.fitnessGoals.filter(g => g !== goal));
                                }
                              }}
                            />
                            <Label htmlFor={goal} className="text-sm">{goal}</Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="medicalConditions">Medical Conditions or Injuries</Label>
                      <textarea
                        id="medicalConditions"
                        placeholder="Please list any medical conditions or injuries we should be aware of (optional)"
                        className="w-full min-h-[100px] px-3 py-2 bg-white/5 border border-white/20 rounded-md text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.medicalConditions}
                        onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                        />
                        <Label htmlFor="agreeToTerms" className="text-sm">
                          I agree to the{' '}
                          <Link href="/terms" className="text-blue-400 hover:underline">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link href="/privacy" className="text-blue-400 hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="agreeToMarketing"
                          checked={formData.agreeToMarketing}
                          onCheckedChange={(checked) => handleInputChange('agreeToMarketing', checked)}
                        />
                        <Label htmlFor="agreeToMarketing" className="text-sm">
                          I would like to receive marketing emails and updates from PowerHouse Gym
                        </Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Order Summary */}
                <Card className="glass border-white/20">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CreditCard className="h-5 w-5" />
                      <span>Order Summary</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {(() => {
                      const plan = membershipPlans.find(p => p.id === selectedPlan);
                      const Icon = plan?.icon || Star;
                      return (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 glass rounded-xl">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${plan?.gradient} p-2`}>
                                <Icon className="w-full h-full text-white" />
                              </div>
                              <div>
                                <div className="font-semibold text-white">{plan?.name} Membership</div>
                                <div className="text-sm text-slate-400">Monthly subscription</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-white">${plan?.price}/month</div>
                            </div>
                          </div>

                          <div className="border-t border-white/10 pt-4 space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-400">Subtotal</span>
                              <span className="text-white">${plan?.price}.00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-green-400">First Month Discount (30%)</span>
                              <span className="text-green-400">-${Math.round((plan?.price || 0) * 0.3)}.00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-slate-400">Setup Fee</span>
                              <span className="text-green-400 line-through">$25.00</span>
                              <span className="text-green-400 ml-2">FREE</span>
                            </div>
                            <div className="border-t border-white/10 pt-2 flex justify-between font-semibold">
                              <span className="text-white">Total Today</span>
                              <span className="text-white">${Math.round((plan?.price || 0) * 0.7)}.00</span>
                            </div>
                          </div>

                          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                            <div className="flex items-center space-x-2 text-green-400 text-sm">
                              <Shield className="h-4 w-4" />
                              <span>7-day free trial included • Cancel anytime</span>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </CardContent>
                </Card>
              </div>
            )}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-between mt-8"
          >
            <Button
              variant="ghost"
              onClick={handlePrev}
              disabled={step === 1}
              className="btn-secondary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>

            <div className="flex items-center space-x-2 text-sm text-slate-400">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i + 1 <= step ? 'bg-blue-500' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>

            {step < totalSteps ? (
              <Button onClick={handleNext} className="btn-primary">
                Next Step
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="btn-primary" disabled={!formData.agreeToTerms}>
                Complete Registration
                <CheckCircle className="ml-2 h-4 w-4" />
              </Button>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}