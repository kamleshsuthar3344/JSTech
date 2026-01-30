import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
    return (
        <div className="pt-32 pb-20 min-h-[80vh] flex items-center justify-center text-center">
            <Helmet>
                <title>Page Not Found | JS_Tech Business Solutions</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <div className="container px-4">
                <div className="bg-slate-800/50 p-6 rounded-full inline-flex mb-8 animate-bounce">
                    <AlertTriangle className="w-16 h-16 text-primary" />
                </div>

                <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    404
                </h1>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Oops! Page Not Found
                </h2>

                <p className="text-lg text-slate-400 max-w-lg mx-auto mb-10">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <Button to="/" variant="primary" className="h-12 px-8">
                    <Home className="w-5 h-5 mr-2" /> Back to Home
                </Button>
            </div>
        </div>
    );
}
