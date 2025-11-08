import React from 'react';
import { Brain, FileText, Users, CheckCircle2, Search, GraduationCap, Sparkles } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, children }) => (
  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
    </div>
    <div className="prose prose-sm mt-4 max-w-none text-gray-600">
      {children}
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50/50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Your Complete Academic Super-App</h2>
          <p className="mt-4 text-gray-600">A powerful yet simple workspace that combines AI tutoring, research, and a supportive community.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <FeatureCard icon={Brain} title="AI Center (Your 24/7 AI Tutor)">
            <ul className="mt-2 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                <span>Use <strong>Homework AI</strong> for step-by-step solutions [cite: 214]</span>
              </li>
              <li className="flex items-start gap-2"><Sparkles className="mt-0.5 h-4 w-4 text-blue-600" />
                <span><strong>Explain AI</strong> breaks down complex concepts [cite: 237]</span>
              </li>
              <li className="flex items-start gap-2"><GraduationCap className="mt-0.5 h-4 w-4 text-blue-600" />
                <span><strong>Quiz AI</strong> generates practice tests on any subject</span>
              </li>
            </ul>
          </FeatureCard>

          <FeatureCard icon={FileText} title="Pro-Level Research Tools">
            <ul className="mt-2 space-y-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                <span><strong>Citation AI</strong> generates APA, Chicago, Harvard, and more [cite: 266, 269]</span>
              </li>
              <li className="flex items-start gap-2"><Search className="mt-0.5 h-4 w-4 text-blue-600" />
                <span><strong>Search AI</strong> for deep web research</span>
              </li>
              <li className="flex items-start gap-2"><FileText className="mt-0.5 h-4 w-4 text-blue-600" />
                <span><strong>Document AI</strong> drafts entire essays and outlines</span>
              </li>
            </ul>
          </FeatureCard>

          <FeatureCard icon={Users} title="Community & Productivity">
            <ul className="mt-2 space-y-2">
              <li className="flex items-start gap-2"><Users className="mt-0.5 h-4 w-4 text-blue-600" />
                <span>Join the <strong>Social</strong> hub to discuss topics [cite: 92]</span>
              </li>
              <li className="flex items-start gap-2"><Search className="mt-0.5 h-4 w-4 text-blue-600" />
                <span>Discover peer-shared notes in the <strong>Explore</strong> feed [cite: 89]</span>
              </li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                <span>Manage your schedule with <strong>Todo</strong>, Pomodoro, and flashcards</span>
              </li>
            </ul>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
