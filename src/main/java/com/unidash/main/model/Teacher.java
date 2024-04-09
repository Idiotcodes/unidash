package com.unidash.main.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tId;
    private String tName;
    private String tFaculty;
    private String tPlace;
    private Long cId; // Reference to the Campus ID
    private Integer tAge; 

 
    public Teacher() {
    }

    
    public Teacher(Long tId, String tName, String tFaculty, String tPlace, Long cId, Integer tAge) {
        this.tId = tId;
        this.tName = tName;
        this.tFaculty = tFaculty;
        this.tPlace = tPlace;
        this.cId = cId;
        this.tAge = tAge; 
    }

  
    public Long gettId() {
        return tId;
    }

    public String gettName() {
        return tName;
    }

    public String gettFaculty() {
        return tFaculty;
    }

    public String gettPlace() {
        return tPlace;
    }

    public Long getcId() {
        return cId;
    }

    public Integer gettAge() { 
        return tAge;
    }

   
    public void settId(Long tId) {
        this.tId = tId;
    }

    public void settName(String tName) {
        this.tName = tName;
    }

    public void settFaculty(String tFaculty) {
        this.tFaculty = tFaculty;
    }

    public void settPlace(String tPlace) {
        this.tPlace = tPlace;
    }

    public void setcId(Long cId) {
        this.cId = cId;
    }

    public void settAge(Integer tAge) { 
        this.tAge = tAge;
    }

    
    @Override
    public String toString() {
        return "Teacher{" +
                "tId=" + tId +
                ", tName='" + tName + '\'' +
                ", tFaculty='" + tFaculty + '\'' +
                ", tPlace='" + tPlace + '\'' +
                ", cId=" + cId +
                ", tAge=" + tAge + 
                '}';
    }
}
