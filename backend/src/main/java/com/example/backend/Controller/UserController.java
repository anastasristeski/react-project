package com.example.backend.Controller;

import com.example.backend.Login.JwtUtil;
import com.example.backend.Model.User;
import com.example.backend.Records.LoginDto;
import com.example.backend.Records.SignUpDto;
import com.example.backend.Repositories.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    @GetMapping
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
    @PostMapping("/login")
    public ResponseEntity<Map<String,Object>> login(@RequestBody LoginDto loginDto){
        Optional<User> userOptional = userRepository.findByEmail(loginDto.email());
        if(userOptional.isPresent()){
            User user = userOptional.get();
            if(loginDto.password().equals(user.getPassword())){


                String token = JwtUtil.generateToken(user.getEmail());
                Map<String,Object> response = new HashMap<>();
                response.put("token", token);
                response.put("userId", user.getId());
                response.put("name", user.getName());
                response.put("lastname", user.getLastname());
                response.put("username", user.getUsername());
                response.put("email", user.getEmail());

                return ResponseEntity.ok(response);
            }else{
                Map<String,Object> error = new HashMap<>();
                error.put("Invalid credentials","Check credentials");

                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
            }
        }
        else{
            Map<String,Object> error = new HashMap<>();
            error.put("error","User does not exist, sign up");
            return  ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
        }
    }
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest httpServletRequest){
        return ResponseEntity.ok("logged out");
    }
    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignUpDto signupDto){
        Optional<User> user = userRepository.findByEmail(signupDto.email());
        if(user.isPresent()){
            return new  ResponseEntity<>("User with this email exists", HttpStatus.UNAUTHORIZED);
        }else{
            System.out.println(signupDto);
            User newUser = new User();
            newUser.setName(signupDto.name());
            newUser.setLastname(signupDto.lastname());
            newUser.setUsername(signupDto.username());
            newUser.setEmail(signupDto.email());
            newUser.setPassword(signupDto.password());
            userRepository.save(newUser);
            return new ResponseEntity<>("User created", HttpStatus.CREATED);

        }
    }

}
