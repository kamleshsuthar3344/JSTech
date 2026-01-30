import React from 'react';

export default function TickerBar() {
    return (
        <div className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold py-1 overflow-hidden relative z-50">
            <div className="whitespace-nowrap animate-marquee inline-block">
                <span className="mx-4">🚀 Special Offer: Get a Business Website for just ₹4,999! Limited Time Only.</span>
                <span className="mx-4">✨ Verified Google Partner Agency</span>
                <span className="mx-4">🔥 50% OFF on SEO Packages</span>
                <span className="mx-4">📞 Call Now: +91 76654 60093</span>
                {/* Duplicate for seamless loop */}
                <span className="mx-4">🚀 Special Offer: Get a Business Website for just ₹4,999! Limited Time Only.</span>
                <span className="mx-4">✨ Verified Google Partner Agency</span>
                <span className="mx-4">🔥 50% OFF on SEO Packages</span>
                <span className="mx-4">📞 Call Now: +91 76654 60093</span>
            </div>
        </div>
    );
}
