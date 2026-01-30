import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

export default function PricingCard({ plan, price, features, recommended = false }) {
    return (
        <div className={`relative p-8 rounded-2xl border transition-all duration-300 ${recommended
                ? 'border-primary shadow-[0_0_30px_-5px_var(--color-primary)] scale-105 glass-card bg-slate-900/80 z-10'
                : 'border-slate-800 hover:border-primary/50 hover:shadow-lg bg-slate-900/50'
            }`}>
            {recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                    Most Popular
                </div>
            )}

            <h3 className={`text-xl font-bold mb-2 ${recommended ? 'text-white' : 'text-slate-200'}`}>{plan}</h3>
            <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">₹{price}</span>
                <span className="text-sm text-slate-500">/project</span>
            </div>

            <ul className="space-y-3 mb-8">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        {feature}
                    </li>
                ))}
            </ul>

            <Button
                to="/contact"
                variant={recommended ? 'primary' : 'outline'}
                className="w-full justify-center"
            >
                Choose Plan
            </Button>
        </div>
    );
}
