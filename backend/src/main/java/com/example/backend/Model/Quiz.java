package com.example.backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Quiz {
    @Id
     @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    private String author;
    private String image;
    private String length;

    private String title;

    public Quiz(String image, String length, String author, String title) {
        this.image = image;
        this.length = length;
        this.author = author;
        this.title=title;
    }
    public Quiz(){}

    public Long getId() {
        return id;
    }

    public String getImage() {
        return image;
    }

    public String getLength() {
        return length;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setLength(String length) {
        this.length = length;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    @Override
    public String toString() {
        return "Quiz{" +
                "id=" + id +
                ", image='" + image + '\'' +
                ", length='" + length + '\'' +
                ", author='" + author + '\'' +
                '}';
    }

}
