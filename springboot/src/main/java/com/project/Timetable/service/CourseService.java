package com.project.Timetable.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.Timetable.models.Course;
import com.project.Timetable.repository.CourseRepository;

import java.util.List;

@Service
public class CourseService {
    @Autowired
    private CourseRepository courseRepository;

    public List<Course> findByTermId(int termId){
        return courseRepository.findByTermId(termId);
    }
}

