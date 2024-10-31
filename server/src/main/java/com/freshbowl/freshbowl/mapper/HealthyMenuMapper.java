package com.freshbowl.freshbowl.mapper;

import com.freshbowl.freshbowl.dto.HealthyMenuDto;
import com.freshbowl.freshbowl.entity.HealthyMenu;

public class HealthyMenuMapper {

    public static HealthyMenuDto mapToHealthyMenuDto(HealthyMenu healthyMenu) {
        return new HealthyMenuDto(
                healthyMenu.getId(),
                healthyMenu.getName(),
                healthyMenu.getPrice(),
                healthyMenu.getImageUrl(),
                healthyMenu.getDescription(),
                healthyMenu.getCategory()
        );
    }

    public static HealthyMenu mapToHealthyMenu(HealthyMenuDto healthyMenuDto) {
        return new HealthyMenu(
                healthyMenuDto.getId(),
                healthyMenuDto.getName(),
                healthyMenuDto.getPrice(),
                healthyMenuDto.getImageUrl(),
                healthyMenuDto.getDescription(),
                healthyMenuDto.getCategory()
        );
    }
}
