package com.example.f1statschecker;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class F1Service {

    public List<Driver> getDrivers() {
        return Arrays.asList(
                new Driver("Lewis Hamilton", "Mercedes", 7),
                new Driver("Max Verstappen", "Red Bull Racing", 2),
                new Driver("Sebastian Vettel", "Retired", 4)
        );
    }

    public List<Team> getTeams() {
        return Arrays.asList(
                new Team("Mercedes", 8),
                new Team("Red Bull Racing", 5),
                new Team("Ferrari", 16)
        );
    }
}
