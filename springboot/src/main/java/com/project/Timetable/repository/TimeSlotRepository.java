package com.project.Timetable.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.Timetable.models.TimeSlot;
@Repository
public interface TimeSlotRepository extends JpaRepository<TimeSlot,Integer> {
}