package com.unidash.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unidash.main.model.Campus;

public interface CampusRepository extends JpaRepository<Campus, Long> {}
