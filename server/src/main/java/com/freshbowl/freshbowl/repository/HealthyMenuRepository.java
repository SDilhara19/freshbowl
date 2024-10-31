package com.freshbowl.freshbowl.repository;

import com.freshbowl.freshbowl.entity.HealthyMenu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface HealthyMenuRepository extends JpaRepository<HealthyMenu, Long> {

}
