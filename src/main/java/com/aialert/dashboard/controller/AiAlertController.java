package com.aialert.dashboard.controller;
import com.aialert.dashboard.entity.AiAlert;
import com.aialert.dashboard.service.AiAlertService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AiAlertController {
    private final AiAlertService service;
    public AiAlertController(AiAlertService service) { this.service = service; }

    @GetMapping("/dashboard")
    public List<AiAlert> getDashboard() { return service.getAllAlerts(); }

    @GetMapping("/test")
    public String test() { return "App Working da! Count: " + service.getCount(); }
    
    @PostMapping("/alert")
    public AiAlert create(@RequestBody AiAlert alert) { return service.saveAlert(alert); }
}