package com.unidash.main.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sId;
    private String sName;
    private String sCourse;
    private String sPlace;
    private Long tId; // Reference to the Teacher's ID
    private Integer sAge; 

   
    public Student() {
    }


    public Student(Long sId, String sName, String sCourse, String sPlace, Long tId, Integer sAge) {
        this.sId = sId;
        this.sName = sName;
        this.sCourse = sCourse;
        this.sPlace = sPlace;
        this.tId = tId;
        this.sAge = sAge; 
    }

  
    public Long getsId() {
        return sId;
    }

    public String getsName() {
        return sName;
    }

    public String getsCourse() {
        return sCourse;
    }

    public String getsPlace() {
        return sPlace;
    }

    public Long gettId() {
        return tId;
    }

    public Integer getsAge() { 
        return sAge;
    }


    public void setsId(Long sId) {
        this.sId = sId;
    }

    public void setsName(String sName) {
        this.sName = sName;
    }

    public void setsCourse(String sCourse) {
        this.sCourse = sCourse;
    }

    public void setsPlace(String sPlace) {
        this.sPlace = sPlace;
    }

    public void settId(Long tId) {
        this.tId = tId;
    }

    public void setsAge(Integer sAge) { 
        this.sAge = sAge;
    }

   
    @Override
    public String toString() {
        return "Student{" +
                "sId=" + sId +
                ", sName='" + sName + '\'' +
                ", sCourse='" + sCourse + '\'' +
                ", sPlace='" + sPlace + '\'' +
                ", tId=" + tId +
                ", sAge=" + sAge + 
                '}';
    }
}
