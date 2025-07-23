import React, { useState } from 'react';
import { Plus, Save, X, Edit3, Trash2 } from 'lucide-react';

interface CommunityRulesProps {
  reglas: string[];
  editable?: boolean;
}

const CommunityRules: React.FC<CommunityRulesProps> = ({ reglas, editable = false }) => {
  const [editing, setEditing] = useState(false);
  const [rules, setRules] = useState(reglas);
  const [newRule, setNewRule] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');

  const handleAddRule = () => {
    if (newRule.trim()) {
      setRules([...rules, newRule.trim()]);
      setNewRule('');
    }
  };

  const handleEditRule = (index: number) => {
    setEditingIndex(index);
    setEditingText(rules[index]);
  };

  const handleSaveEdit = () => {
    if (editingIndex !== null && editingText.trim()) {
      const updatedRules = [...rules];
      updatedRules[editingIndex] = editingText.trim();
      setRules(updatedRules);
      setEditingIndex(null);
      setEditingText('');
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditingText('');
  };

  const handleDeleteRule = (index: number) => {
    setRules(rules.filter((_, i) => i !== index));
  };

  const handleSaveChanges = () => {
    // Aquí iría la lógica para guardar las reglas en el backend
    console.log('Guardando reglas:', rules);
    setEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Reglas de la Comunidad</h3>
          <p className="text-slate-600">
            {editable 
              ? 'Establece las normas que deben seguir los miembros de tu comunidad'
              : 'Normas que deben seguir todos los miembros de esta comunidad'
            }
          </p>
        </div>
        {editable && (
          <div className="flex gap-2">
            {editing ? (
              <>
                <button 
                  className="btn btn-secondary btn-sm"
                  onClick={() => setEditing(false)}
                >
                  <X size={16} />
                  Cancelar
                </button>
                <button 
                  className="btn btn-success btn-sm"
                  onClick={handleSaveChanges}
                >
                  <Save size={16} />
                  Guardar Cambios
                </button>
              </>
            ) : (
              <button 
                className="btn btn-primary btn-sm"
                onClick={() => setEditing(true)}
              >
                <Edit3 size={16} />
                Editar Reglas
              </button>
            )}
          </div>
        )}
      </div>

      {/* Rules List */}
      <div className="card">
        <div className="card-body">
          {rules.length > 0 ? (
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    {editingIndex === index ? (
                      <div className="space-y-3">
                        <textarea
                          value={editingText}
                          onChange={(e) => setEditingText(e.target.value)}
                          className="form-textarea"
                          rows={2}
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={handleSaveEdit}
                            className="btn btn-success btn-sm"
                          >
                            <Save size={14} />
                            Guardar
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            className="btn btn-secondary btn-sm"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start justify-between">
                        <p className="text-slate-700 leading-relaxed">{rule}</p>
                        {editing && (
                          <div className="flex gap-1 ml-4">
                            <button
                              onClick={() => handleEditRule(index)}
                              className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Editar regla"
                            >
                              <Edit3 size={16} />
                            </button>
                            <button
                              onClick={() => handleDeleteRule(index)}
                              className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Eliminar regla"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state py-8">
              <div className="empty-state-icon">📋</div>
              <h4 className="empty-state-title">No hay reglas establecidas</h4>
              <p className="empty-state-description">
                {editable 
                  ? 'Añade reglas para mantener un ambiente positivo en tu comunidad'
                  : 'Esta comunidad aún no ha establecido reglas específicas'
                }
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Add New Rule */}
      {editable && editing && (
        <div className="card">
          <div className="card-header">
            <h4 className="text-lg font-semibold text-slate-900">Añadir Nueva Regla</h4>
            <p className="text-slate-600">Escribe una regla clara y específica para tu comunidad</p>
          </div>
          <div className="card-body">
            <div className="space-y-4">
              <textarea
                value={newRule}
                onChange={(e) => setNewRule(e.target.value)}
                className="form-textarea"
                placeholder="Ej: Mantener un lenguaje respetuoso en todas las interacciones..."
                rows={3}
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setNewRule('')}
                  className="btn btn-secondary btn-sm"
                  disabled={!newRule.trim()}
                >
                  Limpiar
                </button>
                <button
                  onClick={handleAddRule}
                  className="btn btn-primary btn-sm"
                  disabled={!newRule.trim()}
                >
                  <Plus size={16} />
                  Añadir Regla
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityRules;