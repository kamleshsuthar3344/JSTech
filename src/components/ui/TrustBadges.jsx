import React from 'react';
import { Award } from 'lucide-react';

export default function TrustBadges({ className = "" }) {
    const badges = [
        { name: "Google Partner", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
        { name: "Meta Verified", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
        { name: "MSME Reg.", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
        { name: "ISO Certified", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    ];

    return (
        <div className={`flex flex-wrap gap-3 ${className}`}>
            {badges.map((badge) => (
                <div
                    key={badge.name}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border ${badge.bg} ${badge.color} ${badge.border}`}
                >
                    <Award className="w-3 h-3" />
                    {badge.name}
                </div>
            ))}
        </div>
    );
}
