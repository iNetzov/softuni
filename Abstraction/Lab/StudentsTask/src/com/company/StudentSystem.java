package com.company;

import java.util.HashMap;
import java.util.Map;

public class StudentSystem {
    private Map<String, Student> studentsByNames;

    public StudentSystem() {
        this.studentsByNames = new HashMap<>();
    }

    public Map<String, Student> getStudentsByNames() {
        return this.studentsByNames;
    }


    public String parseCommand(String[] args) {

        String result = null;

        if (args[0].equals("Create")) {
            Student student = CreateStudentCommand.createStudent(args);
            studentsByNames.putIfAbsent(student.getName(), student);
        } else if (args[0].equals("Show")) {
            ShowStudentInfoCommand showStudentInfoCommand = new ShowStudentInfoCommand(studentsByNames.get(args[1]));
            result = showStudentInfoCommand.execute();
        } else {
            return new ExitCommand().execute();
        }
        return result;
    }
}
