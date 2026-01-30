import React from 'react';
import { Truck, Users, Star, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
    const stats = [
        { icon: <Truck className="w-4 h-4" />, text: "50,000+ Orders" },
        { icon: <Users className="w-4 h-4" />, text: "5,000+ Clients" },
        { icon: <Star className="w-4 h-4" />, text: "4.9/5 Ratings" },
        { icon: <ShieldCheck className="w-4 h-4" />, text: "100% Secure" },
    ];

    return (
        <div className="bg-gradient-to-r from-slate-900 to-slate-950 border-b border-slate-800 text-slate-300 py-2 px-4 hidden md:block">
            <div className="container mx-auto flex justify-between items-center text-xs font-medium">
                <div className="flex gap-6">
                    {stats.map((stat, i) => (
                        <span key={i} className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-default">
                            {stat.icon} {stat.text}
                        </span>
                    ))}
                </div>
                <div>
                    <span className="bg-primary/20 text-primary border border-primary/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">Verified Agency</span>
                </div>
            </div>
        </div>
    );
}
