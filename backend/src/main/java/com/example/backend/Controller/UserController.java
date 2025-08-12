package com.example.backend.Controller;
import com.example.backend.Config.AuthenticationService;
import com.example.backend.Login.JwtUtil;
import com.example.backend.Model.User;
import com.example.backend.Records.*;
import com.example.backend.Repositories.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final AuthenticationService service;

    public UserController(UserRepository userRepository, JwtUtil jwtUtil, AuthenticationService service) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.service = service;
    }
    @GetMapping
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest httpServletRequest){
        return ResponseEntity.ok("logged out");
    }

    public User getCurrentUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentUserEmail = authentication.getName();
        return userRepository.findByEmail(currentUserEmail).orElseThrow(()->new RuntimeException("User not found"));
    }
@PostMapping("/signup")
public ResponseEntity<AuthenticationResponse> signup(@RequestBody RegisterRequest request){

        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest request){
        var resp = service.authenticate(request);
        System.out.println(resp);

        return ResponseEntity.ok(resp);
    }

}
