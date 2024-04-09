package com.AUT.test1.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long coId;
    private String coName;
    private String coFaculty;
    private Integer coCredits;
    private Long coPrice;
    private Long cId; // Reference to the Campus ID

    public Course() {
    }

    public Course(Long coId, String coName, String coFaculty, Integer coCredits, Long coPrice, Long cId) {
        this.coId = coId;
        this.coName = coName;
        this.coFaculty = coFaculty;
        this.coCredits = coCredits;
        this.coPrice = coPrice;
        this.cId = cId;
    }

    public Long getCoId() {
        return coId;
    }

    public String getCoName() {
        return coName;
    }

    public String getCoFaculty() {
        return coFaculty;
    }

    public Integer getCoCredits() {
        return coCredits;
    }
    
    public Long getCoPrice() {
        return coPrice;
    }

    public Long getcId() {
        return cId;
    }

    public void setCoId(Long coId) {
        this.coId = coId;
    }

    public void setCoName(String coName) {
        this.coName = coName;
    }

    public void setCoFaculty(String coFaculty) {
        this.coFaculty = coFaculty;
    }

    public void setCoCredits(Integer coCredits) {
        this.coCredits = coCredits;
    }
    
    public void setCoPrice(Long coPrice) {
        this.coPrice = coPrice;
    }

    public void setcId(Long cId) {
        this.cId = cId;
    }

    @Override
    public String toString() {
        return "Course{" +
                "coId=" + coId +
                ", coName='" + coName + '\'' +
                ", coFaculty='" + coFaculty + '\'' +
                ", coCredits=" + coCredits +
                ", coPrice=" + coPrice +
                ", cId=" + cId +
                '}';
    }
}
