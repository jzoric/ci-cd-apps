package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type resp struct {
	Name string `json:"name"`
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(&resp{Name:"demo-2.builder"})
	})

	log.Fatal(http.ListenAndServe(":8080",nil))
}
