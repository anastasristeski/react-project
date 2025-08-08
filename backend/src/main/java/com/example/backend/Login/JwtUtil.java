package com.example.backend.Login;

import io.jsonwebtoken.Jwt;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

public class JwtUtil {
    private static final Key SECRET_KEY = Keys.hmacShaKeyFor("mykeymykeymykeymykeymykeymykeymykeymykey".getBytes()); // at least 256-bit key
    private static final long EXPIRATION_TIME=300_300_30;
    public static String generateToken(String email){
        return Jwts.builder()
                .subject(email)
                .signWith(SECRET_KEY)
                .compact();
    }
}
