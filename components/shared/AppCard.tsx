import React from 'react';
import { Link } from 'react-router-dom';

interface AppCardProps {
    title: string;
    description: string;
    link: string;
    icon?: React.ReactNode;
}

const AppCard: React.FC<AppCardProps> = ({ title, description, link, icon }) => {
    return (
        <Link to={link} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            {icon && <div className="mb-4 text-blue-600">{icon}</div>}
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{description}</p>
        </Link>
    );
};

export default AppCard;