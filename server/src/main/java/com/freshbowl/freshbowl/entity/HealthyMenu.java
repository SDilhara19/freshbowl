package com.freshbowl.freshbowl.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="healthy_menus")
public class HealthyMenu {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private long id;

    @Column(name="name")
    private String name;

    @Column(name="price")
    private double price;


    @Column(name="image_url")
    private String imageUrl;

    @Column(name="description")
    private String description;

    @Column(name="category")
    private String category;

}