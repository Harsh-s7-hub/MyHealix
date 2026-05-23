import {
  Activity,
  Brain,
  FileBarChart,
  HeartPulse,
  LayoutDashboard,
  Pill,
  ShieldAlert,
  Smartphone,
  Sparkles,
} from "lucide-react";

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "AI Assistant", href: "#ai" },
  { label: "Health Monitoring", href: "#preview" },
  { label: "Download", href: "#download" },
  { label: "Docs", href: "#" },
  { label: "GitHub", href: "https://github.com" },
];

export const features = [
  {
    icon: Brain,
    title: "AI Health Assistant",
    description:
      "Gemini & Groq powered conversational healthcare AI that understands context and delivers intelligent guidance.",
    gradient: "from-cyan-500/20 to-blue-600/10",
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description:
      "Track vital health information, daily wellness metrics, and stay connected to your health journey.",
    gradient: "from-blue-500/20 to-indigo-600/10",
  },
  {
    icon: FileBarChart,
    title: "Health Reports & Insights",
    description:
      "Beautiful analytics dashboards and visual reports that turn data into actionable health intelligence.",
    gradient: "from-teal-500/20 to-cyan-600/10",
  },
  {
    icon: ShieldAlert,
    title: "Emergency Support",
    description:
      "Smart alerts and quick assistance features designed for critical moments when every second counts.",
    gradient: "from-rose-500/20 to-orange-600/10",
  },
  {
    icon: Pill,
    title: "Medicine & Routine Assistance",
    description:
      "Medication reminders, health routines, and personalized schedules that keep you on track effortlessly.",
    gradient: "from-violet-500/20 to-purple-600/10",
  },
  {
    icon: LayoutDashboard,
    title: "Modern Healthcare Dashboard",
    description:
      "Elegant real-time health overview with a UI crafted for clarity, speed, and daily confidence.",
    gradient: "from-emerald-500/20 to-cyan-600/10",
  },
];

export const workflowSteps = [
  {
    step: "01",
    title: "Open Healix",
    description: "Launch the app and enter your intelligent health ecosystem in seconds.",
  },
  {
    step: "02",
    title: "Add Health Information",
    description: "Securely input vitals, symptoms, medications, and daily wellness data.",
  },
  {
    step: "03",
    title: "AI Processes Your Inputs",
    description: "Advanced models analyze patterns with semantic understanding of your health context.",
  },
  {
    step: "04",
    title: "Get Intelligent Insights",
    description: "Receive clear analytics, trends, and personalized health intelligence reports.",
  },
  {
    step: "05",
    title: "Receive Personalized Assistance",
    description: "Continuous AI support, reminders, and guidance tailored to your unique profile.",
  },
];

export const stats = [
  { label: "AI Health Conversations", value: 284000, suffix: "+" },
  { label: "Health Reports Generated", value: 156000, suffix: "+" },
  { label: "User Sessions", value: 920000, suffix: "+" },
  { label: "Real-time Assistance Events", value: 412000, suffix: "+" },
];

export const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Digital Health Researcher",
    avatar: "SC",
    quote:
      "Healix represents the next generation of patient-centric AI. The interface clarity and intelligent insights are genuinely impressive.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "Health Tech Founder",
    avatar: "MR",
    quote:
      "We've evaluated dozens of health apps. Healix's AI assistant and monitoring dashboard feel enterprise-grade — built for real users.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Early Access User",
    avatar: "PS",
    quote:
      "Finally a healthcare app that doesn't feel clinical and cold. It's beautiful, smart, and actually helps me stay on top of my wellness.",
    rating: 5,
  },
];

export const appScreens = [
  {
    title: "AI Assistant",
    description: "Conversational health guidance",
    color: "from-cyan-500/30 to-blue-600/20",
    icon: Sparkles,
  },
  {
    title: "Health Dashboard",
    description: "Real-time vitals overview",
    color: "from-blue-500/30 to-indigo-600/20",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    description: "Visual health reports",
    color: "from-teal-500/30 to-emerald-600/20",
    icon: FileBarChart,
  },
  {
    title: "Monitoring",
    description: "Daily wellness tracking",
    color: "from-violet-500/30 to-purple-600/20",
    icon: HeartPulse,
  },
];

export const platformBadges = [
  { icon: Smartphone, label: "Android App" },
  { icon: Sparkles, label: "AI Powered" },
  { icon: HeartPulse, label: "Smart Health Assistant" },
];
