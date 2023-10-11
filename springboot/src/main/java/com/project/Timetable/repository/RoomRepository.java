package com.project.Timetable.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.Timetable.models.Room;
@Repository
public interface RoomRepository extends JpaRepository<Room,Integer> {
}
