package com.project.Timetable.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "sgroup")
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @ManyToMany
    @JoinTable(
            name = "users_sgroup",
            joinColumns = @JoinColumn(name = "sgroup_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    @ToString.Exclude
    private List<User> users;

    @ManyToMany
    @JoinTable(
            name = "course_sgroup",
            joinColumns = @JoinColumn(name = "sgroup_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id")
    )
    @ToString.Exclude
    private List<Course> courses;

    @OneToMany(mappedBy = "group")
    private List<Session> sessions;
}
