package com.AUT.test1.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Campus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cId;
    private String cName;
    private String cFaculty;
    private String cPlace;
    private Integer cCapacity;
    private String cLabFacilities;

    public Campus() {
    }

    public Campus(Long cId, String cName, String cFaculty, String cPlace, Integer cCapacity,String cLabFacilities) {
        this.cId = cId;
        this.cName = cName;
        this.cFaculty = cFaculty;
        this.cPlace = cPlace;
        this.cCapacity = cCapacity;
        this.cLabFacilities = cLabFacilities;
    }

    public Long getcId() {
        return cId;
    }

    public String getcName() {
        return cName;
    }

    public String getcFaculty() {
        return cFaculty;
    }

    public String getcPlace() {
        return cPlace;
    }
    
    public String getcLabFacilities() {
        return cLabFacilities;
    }

    public Integer getcCapacity() {
        return cCapacity;
    }

    public void setcId(Long cId) {
        this.cId = cId;
    }

    public void setcName(String cName) {
        this.cName = cName;
    }

    public void setcFaculty(String cFaculty) {
        this.cFaculty = cFaculty;
    }

    public void setcPlace(String cPlace) {
        this.cPlace = cPlace;
    }

    public void setcCapacity(Integer cCapacity) {
        this.cCapacity = cCapacity;
    }
    
    public void setcLabFacilities(String cLabFacilities) {
        this.cLabFacilities = cLabFacilities;
    }

    @Override
    public String toString() {
        return "Campuses{" +
                "cId=" + cId +
                ", cName='" + cName + '\'' +
                ", cFaculty='" + cFaculty + '\'' +
                ", cPlace='" + cPlace + '\'' +
                ", cLabFacilities='" + cLabFacilities + '\'' +
                ", cCapacity=" + cCapacity +
                '}';
    }
}
