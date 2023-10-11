package com.project.Timetable.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.project.Timetable.models.Campus;
import com.project.Timetable.repository.CampusRepository;

import java.util.List;
@Service
public class CampusService {
    @Autowired
    private CampusRepository campusRepository;
    public List<Campus> findAll(){
        return campusRepository.findAll(Sort.by(Sort.Direction.ASC, "id"));
    };

}
