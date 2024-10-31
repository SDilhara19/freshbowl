package com.freshbowl.freshbowl.service.Impl;

import com.freshbowl.freshbowl.dto.HealthyMenuDto;
import com.freshbowl.freshbowl.entity.HealthyMenu;
import com.freshbowl.freshbowl.mapper.HealthyMenuMapper;
import com.freshbowl.freshbowl.repository.HealthyMenuRepository;
import com.freshbowl.freshbowl.service.HealthyMenuService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class HealthyMenuServiceImpl implements HealthyMenuService {

    private HealthyMenuRepository healthyMenuRepository;

    @Override
    public List<HealthyMenuDto> getAllHealthyMenus() {
        List<HealthyMenu> healthyMenuList = healthyMenuRepository.findAll();
        return healthyMenuList.stream().map((menu) -> HealthyMenuMapper.mapToHealthyMenuDto(menu))
                .collect(Collectors.toList());
    }

}
