package com.project.Timetable.models.Enum;

import com.project.Timetable.models.Enum.Permission;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public enum Role {

  USER(Collections.emptySet()),
  LECTURER(
          Set.of(
                  Permission.LECTURER_READ,
                  Permission.LECTURER_UPDATE,
                  Permission.LECTURER_DELETE,
                  Permission.LECTURER_CREATE,
                  Permission.STUDENT_READ,
                  Permission.STUDENT_UPDATE,
                  Permission.STUDENT_DELETE,
                  Permission.STUDENT_CREATE
          )
  ),
  STUDENT(
          Set.of(
                  Permission.STUDENT_READ,
                  Permission.STUDENT_UPDATE,
                  Permission.STUDENT_DELETE,
                  Permission.STUDENT_CREATE
          )
  )

  ;

  @Getter
  private final Set<Permission> permissions;

  public List<SimpleGrantedAuthority> getAuthorities() {
    var authorities = getPermissions()
            .stream()
            .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
            .collect(Collectors.toList());
    authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
    return authorities;
  }
}