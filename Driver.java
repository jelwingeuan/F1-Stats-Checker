package com.example.f1statschecker;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Optional;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Driver implements Serializable {
    private static final long serialVersionUID = 1L;

    private String name;
    private String team;
    private int championships;

    public Optional<String> getName() {
        return Optional.ofNullable(name);
    }

    public Optional<String> getTeam() {
        return Optional.ofNullable(team);
    }

    public int getChampionships() {
        return championships;
    }
}
