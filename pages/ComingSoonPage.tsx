import React from 'react';

const ComingSoonPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh] bg-slate-50">
            <div className="text-center p-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Coming Soon</h1>
                <p className="mt-4 text-lg text-slate-600">
                    We're working hard to bring you something amazing. Stay tuned!
                </p>
            </div>
        </div>
    );
};

export default ComingSoonPage;