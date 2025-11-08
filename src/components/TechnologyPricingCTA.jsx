import React from 'react';
import { Cpu, Shield, Zap, Check } from 'lucide-react';
import { Apple, Play } from 'lucide-react';

const TechSection = () => (
  <section className="bg-white py-20">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Powered by World-Class AI</h2>
        <p className="mt-4 text-gray-600">
          Solearn integrates the most advanced Large Language Models, including <strong>ChatGPT and Gemini</strong>, all
          unified through the <strong>Amazon Bedrock</strong> platform[cite: 34, 82, 162]. This gives you access to the best
          AI for every task.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <img src="https://images.unsplash.com/photo-1678555086112-4755b12b0a57?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbWF6b24lMjBCZWRyb2NrfGVufDB8MHx8fDE3NjI1ODY3Nzl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Amazon Bedrock" className="h-10" />
        </div>
        <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="ChatGPT" className="h-10" />
        </div>
        <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <img src="https://images.unsplash.com/photo-1710993011904-8f1162b9806d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHZW1pbml8ZW58MHwwfHx8MTc2MjU4Njc4MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Gemini" className="h-10" />
        </div>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section className="bg-gradient-to-b from-blue-50/60 to-white py-20" id="pricing">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Get Started for Free. Upgrade for Unlimited Power.</h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900">Free</h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-600" /> Access to Core AI Tools</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-600" /> Community Access</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-600" /> Daily limits on advanced tools</li>
          </ul>
        </div>
        <div className="rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">Solearn PRO</h3>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-600" /> Everything in Free</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-600" /> <strong>Unlimited Access</strong> to all AI Tools (Citation, Document, Presentation AI)</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-blue-600" /> Access to <strong>Premium AI Models</strong> (e.g., ChatGPT 5)</li>
          </ul>
          <a href="#upgrade" className="mt-6 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-blue-700">Upgrade to PRO</a>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="bg-white py-20">
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Join Thousands of Ambitious Students.</h2>
          <p className="mt-4 text-gray-600">Download Solearn today and start learning smarter, not harder.</p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#app-store"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-50"
            >
              <Apple className="h-5 w-5" />
              Download on the App Store
            </a>
            <a
              href="#google-play"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-50"
            >
              <Play className="h-5 w-5" />
              Get it on Google Play
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-2xl border border-gray-100 bg-gradient-to-br from-blue-50 via-white to-blue-100 p-8">
            <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-blue-200">
              <div className="text-center">
                <Cpu className="mx-auto h-10 w-10 text-blue-600" />
                <p className="mt-2 text-sm text-gray-600">Solearn on your device</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TechnologyPricingCTA = () => (
  <>
    <TechSection />
    <PricingSection />
    <FinalCTA />
  </>
);

export default TechnologyPricingCTA;
