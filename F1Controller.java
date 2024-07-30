package com.example.f1statschecker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class F1Controller {

    private final F1Service f1Service;

    @Autowired
    public F1Controller(F1Service f1Service) {
        this.f1Service = f1Service;
    }

    @GetMapping("/drivers")
    public ResponseEntity<List<Driver>> getDrivers() {
        List<Driver> drivers = f1Service.getDrivers();
        return ResponseEntity.ok(drivers);
    }

    @GetMapping("/teams")
    public ResponseEntity<List<Team>> getTeams() {
        List<Team> teams = f1Service.getTeams();
        return ResponseEntity.ok(teams);
    }
}
