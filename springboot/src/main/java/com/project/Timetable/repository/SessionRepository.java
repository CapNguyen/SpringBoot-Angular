package com.project.Timetable.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.Timetable.models.Session;

import java.util.List;
@Repository
public interface SessionRepository extends JpaRepository<Session,Integer> {
    List<Session> findAllByRoomId(int id);
}
