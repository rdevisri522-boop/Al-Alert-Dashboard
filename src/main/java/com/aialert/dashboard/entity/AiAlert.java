package com.aialert.dashboard.entity;
import jakarta.persistence.*;

@Entity
public class AiAlert {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String message;
    private String severity;
    
    public AiAlert() {}
    public AiAlert(String message, String severity) {
        this.message = message;
        this.severity = severity;
    }
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public String getSeverity() { return severity; }
    public void setSeverity(String severity) { this.severity = severity; }
}