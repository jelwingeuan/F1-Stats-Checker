package com.example.f1statschecker;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Driver implements Serializable {
    private static final long serialVersionUID = 1L;

    private String name;
    private String team;
    private int championships;

    public Driver(String name, String team) {
        this.name = name;
        this.team = team;
        this.championships = 0;
    }
}
