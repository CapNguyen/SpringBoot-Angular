package com.project.Timetable.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class Campus {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false,unique = true)
    private String name;

    @OneToMany(mappedBy = "campus")
    @ToString.Exclude
    private List<User> users;

    @OneToMany(mappedBy = "campus")
    @ToString.Exclude
    private List<Term> terms;
}
