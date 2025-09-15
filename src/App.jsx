import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowRight, Clock, TrendingUp, Users, CheckCircle, Phone, MessageSquare, Globe, BarChart3, Zap, Target, Award, Play, Heart, DollarSign, AlertTriangle, Star, Settings, Database, Shield, BarChart } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

// Import images
import businessTeam from './assets/QV4jITO78zJ9.jpg'
import dashboard from './assets/eUfCMf7JqNvG.png'
import workflow from './assets/multi_industry_workflow.png'
import automation from './assets/UkjcrjzvHd2R.png'
import analytics from './assets/6KcrWqlPcL3M.png'
import chloeHero from './assets/chloe_pomeranian_hero.webp'
import chloeAnalytics from './assets/chloe_with_analytics.webp'
import chloeJumping from './assets/chloe_jumping.webp'
import chloeChart from './assets/chloe_with_chart.webp'
import chloeHeadset from './assets/chloe_with_headset.webp'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const handleContactClick = () => {
    window.open('https://chloeconsulting.co/contact-chloe', '_blank')
  }

  const handleLogoClick = () => {
    window.open('https://chloeconsulting.co', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={handleLogoClick}>
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-slate-800 text-lg">Chloe Consulting</span>
          </div>
          <Button 
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg"
            onClick={handleContactClick}
          >
            Get Your Free Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-6 bg-pink-100 text-pink-700 hover:bg-pink-200 border-pink-300">
                Technical Case Study
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
              variants={fadeInUp}
            >
              How We Saved Pro Insurance Group{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">$2.3M in Lost Revenue</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              A complete RevOps transformation using HubSpot, custom automation, and data-driven optimization. 
              From 24-hour response times to 2-minute responses. From 12% to 340% conversion rates.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg" onClick={handleContactClick}>
                Get Your FREE Revenue Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-100 to-transparent opacity-50"></div>
      </section>

      {/* Results Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              { icon: Clock, value: "2 Min", label: "Response Time", color: "text-green-600", detail: "Down from 24+ hours" },
              { icon: DollarSign, value: "$2.3M", label: "Revenue Recovered", color: "text-green-600", detail: "In first 12 months" },
              { icon: TrendingUp, value: "340%", label: "Conversion Rate", color: "text-blue-600", detail: "Industry avg: 12%" },
              { icon: Users, value: "89%", label: "Customer Retention", color: "text-purple-600", detail: "Up from 22%" }
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                    <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                    <div className="text-slate-600 font-semibold mb-1">{stat.label}</div>
                    <div className="text-slate-500 text-sm">{stat.detail}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Challenge Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                The Technical Challenge: 16 Industry Verticals, Zero Integration
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                Pro Insurance Group was operating 16 completely separate lead management systems across different industry verticals. 
                Each vertical had its own forms, tracking systems, and follow-up processes with zero data integration.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-bold text-red-700 mb-2">Data Silos & Integration Issues:</h4>
                  <ul className="text-slate-700 space-y-1">
                    <li>• 16 separate CRM instances with no data sync</li>
                    <li>• Manual lead routing taking 2-4 hours per lead</li>
                    <li>• No unified reporting across verticals</li>
                    <li>• Duplicate data entry across 5 different systems</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-orange-700 mb-2">Response Time Bottlenecks:</h4>
                  <ul className="text-slate-700 space-y-1">
                    <li>• Lead notifications sent via email only</li>
                    <li>• No automated lead scoring or prioritization</li>
                    <li>• Manual follow-up scheduling across time zones</li>
                    <li>• No integration with their existing phone systems</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-700 mb-2">Revenue Impact:</h4>
                  <ul className="text-slate-700 space-y-1">
                    <li>• 78% lead loss rate due to slow response times</li>
                    <li>• $2.3M annual revenue loss from missed opportunities</li>
                    <li>• 22% customer retention rate (industry avg: 65%)</li>
                    <li>• No visibility into conversion funnel performance</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <img 
                src={workflow} 
                alt="Complex multi-industry system architecture before integration" 
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              The Technical Solution: Unified HubSpot Architecture
            </h2>
            <p className="text-xl text-slate-600">
              We built a comprehensive RevOps system using HubSpot as the central platform, 
              with custom integrations, automation workflows, and real-time data synchronization.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-2 lg:order-1 relative"
            >
              <img 
                src={chloeAnalytics} 
                alt="Chloe implementing the unified HubSpot system" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                AFTER: Unified System
              </div>
            </motion.div>
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="order-1 lg:order-2"
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Technical Implementation Details:
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Database,
                    title: "HubSpot Data Migration & Integration",
                    description: "Migrated all 16 verticals into a single HubSpot instance with custom properties for each industry. Built API integrations to sync data from their existing systems in real-time, eliminating manual data entry and ensuring 100% data accuracy.",
                    technical: "Custom API endpoints, webhook integrations, data mapping automation"
                  },
                  {
                    icon: Zap,
                    title: "Automated Lead Routing & Scoring",
                    description: "Implemented intelligent lead scoring algorithms that automatically categorize and route leads based on industry vertical, lead source, and engagement level. Built custom workflows that trigger within 30 seconds of lead submission.",
                    technical: "HubSpot Workflows, custom lead scoring formulas, conditional logic automation"
                  },
                  {
                    icon: MessageSquare,
                    title: "Multi-Channel Response System",
                    description: "Created automated response sequences that send personalized emails, and calendar invites within 2 minutes of lead submission. Integrated with their existing phone system for immediate call routing.",
                    technical: "HubSpot Sequences, calendar API connections"
                  },
                  {
                    icon: BarChart,
                    title: "Real-Time Analytics Dashboard",
                    description: "Built comprehensive reporting dashboards that track conversion rates, response times, and revenue attribution across all 16 verticals. Custom reports provide actionable insights for optimization.",
                    technical: "HubSpot Custom Reports, data visualization, automated reporting workflows"
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <div className="flex items-start space-x-3">
                      <feature.icon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-green-800 mb-2">{feature.title}</h4>
                        <p className="text-slate-700 mb-3">{feature.description}</p>
                        <div className="bg-green-100 p-2 rounded text-sm">
                          <span className="font-semibold text-green-800">Technical Stack:</span> {feature.technical}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Results Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Technical Performance Metrics & Results
            </h2>
            <p className="text-xl text-slate-600">
              The unified system delivered measurable improvements across all technical and business metrics 
              within the first 90 days of implementation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { 
                icon: Clock, 
                value: "2 Min", 
                label: "Average Response Time", 
                color: "text-green-600",
                before: "24+ hours",
                improvement: "99.9% faster"
              },
              { 
                icon: DollarSign, 
                value: "$2.3M", 
                label: "Revenue Recovered", 
                color: "text-green-600",
                before: "$0 recovered",
                improvement: "100% ROI"
              },
              { 
                icon: TrendingUp, 
                value: "340%", 
                label: "Lead Conversion Rate", 
                color: "text-blue-600",
                before: "12%",
                improvement: "28x better"
              },
              { 
                icon: Users, 
                value: "89%", 
                label: "Customer Retention", 
                color: "text-purple-600",
                before: "22%",
                improvement: "4x improvement"
              }
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow border-green-200 bg-white">
                  <CardContent className="pt-6">
                    <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                    <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                    <div className="text-slate-800 font-semibold mb-2">{stat.label}</div>
                    <div className="text-slate-600 text-sm mb-2">Before: {stat.before}</div>
                    <div className="text-green-600 font-bold text-sm">{stat.improvement}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technical Implementation Timeline */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Implementation Timeline & Technical Milestones</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Week 1-2: Data Migration</h4>
                <p className="text-slate-600 text-sm">Migrated all 16 verticals into unified HubSpot instance. Built custom properties and data mapping automation.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Week 3-4: Automation Setup</h4>
                <p className="text-slate-600 text-sm">Implemented lead scoring, routing workflows, and automated response sequences across all channels.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-2">Week 5-6: Integration & Testing</h4>
                <p className="text-slate-600 text-sm">Connected external systems, built reporting dashboards, and conducted comprehensive testing across all verticals.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Client Video Testimonial
              </h2>
              <p className="text-xl text-slate-600">
                Hear directly from Pro Insurance Group's CEO about the transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Video Placeholder */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg shadow-lg overflow-hidden aspect-video">
                  {/* Video Placeholder Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">Client Testimonial Video</h3>
                      <p className="text-slate-600">Pro Insurance Group CEO</p>
                      <p className="text-sm text-slate-500 mt-2">Duration: 2:30</p>
                    </div>
                  </div>
                  
                  {/* Video Overlay Elements */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    LIVE
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                    2:30
                  </div>
                  
                  {/* Subtle animation overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>
              
              {/* Testimonial Text */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg border-l-4 border-pink-500">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-2xl text-slate-800 mb-6 italic">
                    "The technical implementation was flawless. Chloe's team didn't just migrate our data - they built us a revenue-generating machine. 
                    The HubSpot integration eliminated 6 hours of daily manual work, and the automated lead scoring increased our conversion rate by 340%. 
                    We went from losing $2.3M annually to recovering every penny and then some. The system works 24/7 without us lifting a finger."
                  </blockquote>
                  <div className="text-slate-600">
                    <p className="font-semibold">- Pro Insurance Group CEO</p>
                    <p className="text-sm">$50M+ Annual Revenue Company</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Urgency Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-red-800 mb-6">
              ⚠️ Your Technical Debt Is Costing You Millions
            </h2>
            <p className="text-xl text-red-700 mb-8">
              Every day you operate with disconnected systems, manual processes, and slow response times, 
              you're losing revenue to competitors who have already implemented unified RevOps systems.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-red-200 mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">The Technical Reality Check:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="font-bold text-red-600 mb-4">Without Unified RevOps:</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>78% of leads lost due to slow response times</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>6+ hours daily spent on manual data entry</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No visibility into conversion funnel performance</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Competitors stealing customers with faster systems</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-600 mb-4">With Our Unified System:</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>2-minute response times with automated routing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Zero manual data entry with real-time sync</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Real-time analytics and conversion tracking</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>340% conversion rates with intelligent automation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg" onClick={handleContactClick}>
                Get Your FREE Technical Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Technical Infrastructure?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the companies that have eliminated technical debt and transformed their revenue with our proven RevOps system. 
              Your competitors are already using unified systems like this. Don't get left behind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 shadow-lg" onClick={handleContactClick}>
                Get Your FREE Technical Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-75">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Free technical consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Custom RevOps strategy</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Proven technical results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default App
