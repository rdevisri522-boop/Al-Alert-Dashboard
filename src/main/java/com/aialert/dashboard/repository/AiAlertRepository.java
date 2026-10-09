package com.aialert.dashboard.repository;

import com.aialert.dashboard.entity.AiAlert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AiAlertRepository extends JpaRepository<AiAlert, Long> {
}