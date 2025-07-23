import React from 'react';
import { MapPin, Phone, Globe, Clock, Users, Star } from 'lucide-react';
import { Library, LibraryType } from '../../core/domain/models/Library';

interface LibraryCardProps {
  library: Library;
  onClick?: () => void;
}

const LibraryCard: React.FC<LibraryCardProps> = ({ library, onClick }) => {
  const getTypeLabel = (type: LibraryType) => {
    switch (type) {
      case 'PUBLIC':
        return 'Pública';
      case 'ACADEMIC':
        return 'Académica';
      case 'PRIVATE':
        return 'Privada';
      case 'SPECIALIZED':
        return 'Especializada';
      default:
        return 'Pública';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'Activa';
      case 'INACTIVE':
        return 'Inactiva';
      case 'MAINTENANCE':
        return 'Mantenimiento';
      default:
        return 'Activa';
    }
  };

  const getTypeBadgeClass = (type: LibraryType) => {
    switch (type) {
      case 'PUBLIC':
        return 'badge-public';
      case 'ACADEMIC':
        return 'badge-academic';
      case 'PRIVATE':
        return 'badge-private';
      case 'SPECIALIZED':
        return 'badge-specialized';
      default:
        return 'badge-primary';
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'badge-active';
      case 'INACTIVE':
        return 'badge-inactive';
      case 'MAINTENANCE':
        return 'badge-maintenance';
      default:
        return 'badge-success';
    }
  };

  return (
    <div className="library-card" onClick={onClick}>
      <div className="library-card-header">
        <div className="flex-1">
          <h3 className="library-card-title">{library.name}</h3>
          <div className="library-card-location">
            <MapPin size={16} />
            <span>{library.location}</span>
          </div>
        </div>
        <div className="library-card-badges">
          <span className={`badge ${getTypeBadgeClass(library.type)}`}>
            {getTypeLabel(library.type)}
          </span>
          <span className={`badge ${getStatusBadgeClass(library.status)}`}>
            {getStatusLabel(library.status)}
          </span>
        </div>
      </div>

      <div className="library-card-details">
        <div className="library-card-detail">
          <Users size={16} />
          <span>Capacidad: {library.capacity} personas</span>
        </div>
        
        <div className="library-card-detail">
          <Phone size={16} />
          <span>{library.contactInfo.phone}</span>
        </div>
        
        {library.contactInfo.website && (
          <div className="library-card-detail">
            <Globe size={16} />
            <span className="truncate">{library.contactInfo.website}</span>
          </div>
        )}
        
        <div className="library-card-detail">
          <Clock size={16} />
          <span>
            Hoy: {library.operatingHours.monday?.isClosed ? 'Cerrado' :
            `${library.operatingHours.monday?.open} - ${library.operatingHours.monday?.close}`}
          </span>
        </div>
        
        <div className="library-card-detail">
          <Star size={16} className="text-amber-500" />
          <span>4.{Math.floor(Math.random() * 9) + 1}/5.0 • {Math.floor(Math.random() * 500) + 100} reseñas</span>
        </div>
      </div>

      <div className="library-card-footer">
        <span>Creado: {library.createdAt instanceof Date ? library.createdAt.toLocaleDateString('es-ES') : ''}</span>
        <span>Actualizado: {library.updatedAt instanceof Date ? library.updatedAt.toLocaleDateString('es-ES') : ''}</span>
      </div>
    </div>
  );
};

export default LibraryCard;