package com.project.Timetable.repository;

import com.project.Timetable.models.Campus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CampusRepository extends JpaRepository<Campus,Integer> {
    List<Campus> findAll();
}