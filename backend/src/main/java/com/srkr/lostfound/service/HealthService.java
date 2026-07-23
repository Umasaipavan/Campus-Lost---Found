package com.srkr.lostfound.service;

import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class HealthService {
    public Map<String, String> health() {
        return Map.of("message", "Backend Running");
    }
}
