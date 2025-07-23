import React, { useState } from 'react';
import { Plus, Save, X } from 'lucide-react';

interface CommunityRulesProps {
  reglas: string[];
  editable?: boolean;
}

const CommunityRules: React.FC<CommunityRulesProps> = ({ reglas, editable }) => {
  const [editing, setEditing] = useState(false);
  const [rules, setRules] = useState(reglas);
  const [newRule, setNewRule] = useState('');

  const handleAddRule = () => {
    if (newRule.trim()) {
      setRules([...rules, newRule.trim()]);
      setNewRule('');
    }
  };

  return (
    <div className="card">
      <div className="card-body">
      <div className="flex items-center mb-2">
        <h2 className="font-semibold text-lg flex-1">Reglas de la comunidad</h2>
        {editable && (
          <button 
            className={`btn btn-sm ${editing ? 'btn-success' : 'btn-secondary'}`}
            onClick={() => setEditing(!editing)}
          >
            {editing ? <><Save size={16} /> Guardar</> : 'Editar'}
          </button>
        )}
      </div>
      <ul className="list-disc pl-6 text-gray-700">
        {rules.map((r, i) => (
          <li key={i} className="mb-1">{r}</li>
        ))}
      </ul>
      {editable && editing && (
        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
          <div className="flex gap-2">
          <input
            className="form-input flex-1"
            value={newRule}
            onChange={e => setNewRule(e.target.value)}
            placeholder="Nueva regla"
          />
          <button className="btn btn-success" onClick={handleAddRule}>
            <Plus size={16} />
            Agregar
          </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default CommunityRules; 