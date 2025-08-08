package com.example.backend.Model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table (name="users")
public class User {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastname;
    private String username;
    private String email;
    private String password;
    @ManyToMany
            @JoinTable(
                    name="user_saved_courses",
                    joinColumns = @JoinColumn(name="user_id"),
                    inverseJoinColumns = @JoinColumn(name ="course_id")
            )
    private Set<Course> savedCourses;
    @ManyToMany
    @JoinTable(
            name="user_saved_quizzes",
            joinColumns = @JoinColumn(name="user_id"),
            inverseJoinColumns = @JoinColumn(name ="quiz_id"))
   private Set<Quiz> savedQuizzes;
    public User(){}
    public User(String name, String lastname, String username, String email, String password) {
        this.name = name;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.savedCourses = new HashSet<>();
        this.savedQuizzes = new HashSet<>();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLastname() {
        return lastname;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setSavedCourses(Set<Course> savedCourses) {
        this.savedCourses = savedCourses;
    }

    public void setSavedQuizzes(Set<Quiz> savedQuizzes) {
        this.savedQuizzes = savedQuizzes;
    }

    public Set<Course> getSavedCourses() {
        return savedCourses;
    }

    public Set<Quiz> getSavedQuizzes() {
        return savedQuizzes;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", lastname='" + lastname + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
