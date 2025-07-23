import React, { useState } from 'react';

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
    <div className="bg-gray-50 rounded p-4 mb-4">
      <div className="flex items-center mb-2">
        <h2 className="font-semibold text-lg flex-1">Reglas de la comunidad</h2>
        {editable && (
          <button className="text-blue-600 text-sm" onClick={() => setEditing(!editing)}>
            {editing ? 'Guardar' : 'Editar'}
          </button>
        )}
      </div>
      <ul className="list-disc pl-6 text-gray-700">
        {rules.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
      {editable && editing && (
        <div className="mt-2 flex gap-2">
          <input
            className="border rounded px-2 py-1 flex-1"
            value={newRule}
            onChange={e => setNewRule(e.target.value)}
            placeholder="Nueva regla"
          />
          <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={handleAddRule}>
            Agregar
          </button>
        </div>
      )}
    </div>
  );
};

export default CommunityRules; 