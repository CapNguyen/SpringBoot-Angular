package com.project.Timetable.models;

import com.project.Timetable.models.Enum.Role;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false, unique = true)

    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    private boolean mfaEnabled;

    private String secret;

    @ManyToOne
    @JoinColumn(name = "campus_id")
    @ToString.Exclude
    private Campus campus;

    @ManyToMany(mappedBy = "users")
    @ToString.Exclude
    private List<Group> sgroups;

    @OneToMany(mappedBy = "user")
    @ToString.Exclude
    private List<Session> sessions;

    @OneToMany(mappedBy = "user")
    @ToString.Exclude
    private List<Attendance> attendance;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return role.getAuthorities();
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}










