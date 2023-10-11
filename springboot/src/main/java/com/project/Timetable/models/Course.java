package com.project.Timetable.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(nullable = false,unique = true)
    private String code;

    @Column(nullable = false)
    private String name;

    @ManyToMany(mappedBy = "courses")
    @ToString.Exclude
    private List<Group> sgroups;

    @OneToMany(mappedBy = "course")
    @ToString.Exclude
    private List<Session> sessions;

    @ManyToOne
    @JoinColumn(name = "term_id")
    private Term term;
}
