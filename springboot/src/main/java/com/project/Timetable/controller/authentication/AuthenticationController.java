package com.project.Timetable.controller.authentication;

import com.project.Timetable.auth.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody RegisterRequest request
    ) {
        var response = service.register(request);
        if (request.isMfaEnabled()) {
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.accepted().build();
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @PostMapping("/verify")
    public ResponseEntity<?> verifyCode(
            @RequestBody VerificationRequest verificationRequest
    ) {
        return ResponseEntity.ok(service.verifyCode(verificationRequest));
    }


}
