package com.davidkouame.article;

import lombok.Data;

import javax.persistence.*;
import java.sql.Blob;

@Entity
@Data
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String label;
    private Double price;
    private String description;

    @Lob
    @Column(name="CONTENT", length=512)
    private String image;
}
