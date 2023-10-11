package com.project.Timetable.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.Timetable.models.User;
import project.Timetable.repository.UserRepository;
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

}
