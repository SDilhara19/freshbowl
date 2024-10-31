package com.freshbowl.freshbowl.controller;

        import com.freshbowl.freshbowl.dto.HealthyMenuDto;
        import com.freshbowl.freshbowl.service.HealthyMenuService;
        import lombok.AllArgsConstructor;
        import lombok.NoArgsConstructor;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RestController;

        import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/healthy_menus")
public class Healthy_Menus {

    private HealthyMenuService healthyMenuService;

//    @GetMapping
//    public ResponseEntity<String> getHealthyMenu() {
//        return new ResponseEntity<>("{Hello}", HttpStatus.OK);
//    }

    @GetMapping
    public ResponseEntity<List<HealthyMenuDto>> getAllMenus() {
       List<HealthyMenuDto> healthyMenus = healthyMenuService.getAllHealthyMenus();
        return ResponseEntity.ok(healthyMenus);

    }

}
