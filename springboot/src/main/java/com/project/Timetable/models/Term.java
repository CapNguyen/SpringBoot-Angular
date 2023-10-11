package com.project.Timetable.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Term {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(nullable = false)
    private String season;

    @Column(nullable = false)
    private String year;

    @OneToMany(mappedBy = "term")
    @ToString.Exclude
    private List<Course> courses;

    @ManyToOne
    @JoinColumn(name = "campus_id")
    private Campus campus;
}
