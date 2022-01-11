package com.company;

public class ShowStudentInfoCommand {

    private Student student;

    public ShowStudentInfoCommand(Student student) {
        this.student = student;
    }


    public String execute() {
        return  this.student != null ? this.student.toString() : null;
    }
}
