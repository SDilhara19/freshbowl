package com.freshbowl.freshbowl.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.GetMapping;


@Getter
@Setter
@Entity
@Table(name="healthy_menus")
public class HealthyMenus {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private long id;

    @Column(name="name")
    private String name;

    @Column(name="price")
    private double price;


    @Column(name="image_url")
    private String image_url;
}
