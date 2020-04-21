package com.jovicazoric.backend.tech;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechService {
    public List<String> getAll(){
        return List.of("Kubernetes","Openshift","Docker","Tekton","Keel");
    }
}
