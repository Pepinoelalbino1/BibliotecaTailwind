import React from 'react';
import { Crown, Star, Zap } from 'lucide-react';

interface PlanBadgeProps {
  tipoPlan: 'freemium' | 'pro' | 'master';
  capacidadInteg: number;
}

const planConfig = {
  freemium: {
    label: 'Freemium',
    icon: Zap,
    className: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    description: 'Plan básico'
  },
  pro: {
    label: 'Pro',
    icon: Star,
    className: 'bg-blue-100 text-blue-700 border border-blue-200',
    description: 'Plan profesional'
  },
  master: {
    label: 'Master',
    icon: Crown,
    className: 'bg-purple-100 text-purple-700 border border-purple-200',
    description: 'Plan premium'
  },
};

const PlanBadge: React.FC<PlanBadgeProps> = ({ tipoPlan, capacidadInteg }) => {
  const config = planConfig[tipoPlan];
  const Icon = config.icon;
  
  const capacityText = tipoPlan === 'master' 
    ? 'Ilimitado' 
    : `${capacidadInteg} miembros`;

  return (
    <div 
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${config.className}`}
      title={`${config.description} - ${capacityText}`}
    >
      <Icon size={14} />
      <span>{config.label}</span>
      {tipoPlan !== 'master' && (
        <span className="opacity-75">({capacidadInteg})</span>
      )}
    </div>
  );
};

export default PlanBadge;