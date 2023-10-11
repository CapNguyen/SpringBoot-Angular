package com.project.Timetable.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.Timetable.models.Group;
@Repository
public interface GroupRepository extends JpaRepository<Group,Integer> {
}