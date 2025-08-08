package com.example.backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.servlet.Servlet;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@Entity
public class Course {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    private String author;
    private String image;
    private String length;
    private String price;

    private String title;

public Course(){}
    public Course(String image, String price, String length, String title, String author) {
        this.image = image;
        this.price = price;
        this.length = length;
        this.title = title;
        this.author = author;
    }

    public Long getId() {
        return id;
    }

    public String getImage() {
        return image;
    }

    public String getPrice() {
        return price;
    }

    public String getLength() {
        return length;
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

    public void setPrice(String price) {
        this.price = price;
    }

    public void setLength(String length) {
        this.length = length;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    @Override
    public String toString() {
        return "Course{" +
                "id=" + id +
                ", image='" + image + '\'' +
                ", price=" + price +
                ", length=" + length +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                '}';
    }

}
