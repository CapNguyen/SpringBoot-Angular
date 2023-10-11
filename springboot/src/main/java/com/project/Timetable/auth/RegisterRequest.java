package com.project.Timetable.auth;

import com.project.Timetable.models.Enum.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

  private String fullName;
  private String email;
  private String password;
  private Role role;
  private boolean mfaEnabled;
}
