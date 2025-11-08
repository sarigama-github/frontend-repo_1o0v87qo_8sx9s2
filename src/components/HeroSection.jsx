import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Apple, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">Solearn: AI Learning Center</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Stop Stressing. <span className="text-blue-600">Start Solearning.</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              The all-in-one AI Learning Center designed for ambitious students. From high school homework to
              university-level research, we're here to help you succeed together.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#download"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Download for Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <div className="flex items-center gap-3">
                <a
                  href="#app-store"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  <Apple className="h-5 w-5" />
                  App Store
                </a>
                <a
                  href="#google-play"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  <Play className="h-5 w-5" />
                  Google Play
                </a>
              </div>
            </div>

            <p className="mt-4 text-sm text-blue-700">The Place to be Ambitious Together!</p>
          </div>

          <div className="relative h-[420px] w-full rounded-2xl border border-gray-100 bg-white/60 shadow-lg ring-1 ring-gray-100">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/0 via-white/0 to-white/0" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[600px] opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_0%,_black,_transparent)]">
        <div className="mx-auto h-full max-w-7xl px-6">
          <div className="h-full rounded-b-[3rem] bg-gradient-to-br from-blue-200 via-indigo-100 to-blue-100" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
