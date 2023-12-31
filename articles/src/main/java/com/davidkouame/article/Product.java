package com.davidkouame.article;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String label;
    private Double price;
    private String description;

    @Lob
    @Column(name="image", length=512)
    private byte[] image;
}
