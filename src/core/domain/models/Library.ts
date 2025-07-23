export enum LibraryType {
  Public = 'PUBLIC',
  Academic = 'ACADEMIC',
  Private = 'PRIVATE',
  Specialized = 'SPECIALIZED'
}

export enum LibraryStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Maintenance = 'MAINTENANCE',
  Closed = 'CLOSED'
}

export interface OperatingHours {
  [day: string]: {
    open: string;
    close: string;
    isClosed: boolean;
  };
}

export interface ContactInfo {
  phone: string;
  email: string;
  website?: string;
}

export interface Library {
  id: string;
  name: string;
  location: string;
  type: LibraryType;
  operatingHours: OperatingHours;
  contactInfo: ContactInfo;
  capacity: number;
  status: LibraryStatus;
  createdAt: Date;
  updatedAt: Date;
} 