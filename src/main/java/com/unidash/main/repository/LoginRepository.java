package com.unidash.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unidash.main.model.User;

public interface LoginRepository extends JpaRepository<User, String> {
}
