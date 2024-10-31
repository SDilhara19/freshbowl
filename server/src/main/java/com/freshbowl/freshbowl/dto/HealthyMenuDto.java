package com.freshbowl.freshbowl.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HealthyMenuDto {
    private Long id;
    private String name;
    private double price;
    private String imageUrl;
    private String description;
    private String category;
}
