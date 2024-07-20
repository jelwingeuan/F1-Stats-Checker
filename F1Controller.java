package com.example.f1statschecker;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class F1Controller {

    @GetMapping("/drivers")
    public List<Driver> getDrivers() {
        return Arrays.asList(
                new Driver("Lewis Hamilton", "Mercedes", 7),
                new Driver("Max Verstappen", "Red Bull Racing", 2),
                new Driver("Sebastian Vettel", "Retired", 4)
        );
    }

    @GetMapping("/teams")
    public List<Team> getTeams() {
        return Arrays.asList(
                new Team("Mercedes", 8),
                new Team("Red Bull Racing", 5),
                new Team("Ferrari", 16)
        );
    }

    static class Driver {
        private String name;
        private String team;
        private int championships;

        public Driver(String name, String team, int championships) {
            this.name = name;
            this.team = team;
            this.championships = championships;
        }

        // Getters and setters
    }

    static class Team {
        private String name;
        private int championships;

        public Team(String name, int championships) {
            this.name = name;
            this.championships = championships;
        }

        // Getters and setters
    }
}