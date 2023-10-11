package com.project.Timetable.models.Enum;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {

    LECTURER_READ("lecturer:read"),
    LECTURER_UPDATE("lecturer:update"),
    LECTURER_CREATE("lecturer:create"),
    LECTURER_DELETE("lecturer:delete"),
    STUDENT_READ("student:read"),
    STUDENT_UPDATE("student:update"),
    STUDENT_CREATE("student:create"),
    STUDENT_DELETE("student:delete")

    ;

    @Getter
    private final String permission;
}
