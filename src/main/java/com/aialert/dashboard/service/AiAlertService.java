package com.aialert.dashboard.service;
import com.aialert.dashboard.entity.AiAlert;
import com.aialert.dashboard.repository.AiAlertRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class AiAlertService {
    private final AiAlertRepository repo;
    public AiAlertService(AiAlertRepository repo) { this.repo = repo; }
    public List<AiAlert> getAllAlerts() { return repo.findAll(); }
    public AiAlert saveAlert(AiAlert alert) { return repo.save(alert); }
    public long getCount() { return repo.count(); }
}