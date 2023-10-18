export interface AuthenticationResponse {
  accessToken?: string;
  mfaEnabled?: string;
  secretImageUri?: string;
  role?: string;
  user_id?: string;
  fullname?: string;
}
