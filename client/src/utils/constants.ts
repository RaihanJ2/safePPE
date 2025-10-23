// API endpoints
export const API_ENDPOINTS = {
  MONITORING: '/api/monitoring',
  CAMERAS: '/api/cameras',
  UPDATES: '/api/updates',
  LICENSE: '/api/license'
} as const;

// Status types
export const STATUS_TYPES = {
  ACTIVE: 'active',
  OFFLINE: 'offline',
  WARNING: 'warning',
  ERROR: 'error'
} as const;

// Alert types
export const ALERT_TYPES = {
  INFO: 'info',
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success'
} as const;

// Theme colors
export const COLORS = {
  primary: '#EAB308', // Yellow-500
  success: '#22C55E', // Green-500
  warning: '#F59E0B', // Yellow-600
  danger: '#EF4444',  // Red-500
  info: '#3B82F6'     // Blue-500
} as const;