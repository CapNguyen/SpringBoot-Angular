export interface RegisterRequest {
  fullName?: string;
  email?: string;
  password?: string;
  role?: string;
  campus_id?: number;
  mfaEnabled?: string;
}
