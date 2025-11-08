import React from 'react';
import { AlertTriangle, CalendarClock, BookOpen } from 'lucide-react';

const ProblemCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
    </div>
    <p className="mt-3 text-sm text-gray-600">{desc}</p>
  </div>
);

const ProblemSection = () => {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Tired of Academic Pressure?</h2>
          <p className="mt-4 text-gray-600">
            Academic stress is rising. 25% of students struggle to adapt in their first year of university[cite: 31].
            Solearn is designed to be the supportive, smart ecosystem to help you manage your workload and understand
            complex topics efficiently.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <ProblemCard icon={AlertTriangle} title="Stress" desc="Anxiety from heavy workloads and constant performance pressure." />
          <ProblemCard icon={CalendarClock} title="Deadlines" desc="Multiple due dates pile up fast, making it hard to prioritize." />
          <ProblemCard icon={BookOpen} title="Complex Topics" desc="Hard-to-grasp concepts slow down progress and confidence." />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
