import React from 'react';

interface PlanBadgeProps {
  tipoPlan: 'freemium' | 'pro' | 'master';
  capacidadInteg: number;
}

const planColors = {
  freemium: 'bg-green-200 text-green-800',
  pro: 'bg-yellow-200 text-yellow-800',
  master: 'bg-purple-200 text-purple-800',
};

const planLabels = {
  freemium: 'Freemium',
  pro: 'Pro',
  master: 'Master Master DU',
};

const PlanBadge: React.FC<PlanBadgeProps> = ({ tipoPlan, capacidadInteg }) => (
  <span className={`px-2 py-1 rounded text-xs font-bold ${planColors[tipoPlan]}`}
    title={`Hasta ${tipoPlan === 'master' ? 'ilimitado' : capacidadInteg + ' personas'}`}
  >
    {planLabels[tipoPlan]}{tipoPlan !== 'master' && ` (${capacidadInteg})`}
  </span>
);

export default PlanBadge; 