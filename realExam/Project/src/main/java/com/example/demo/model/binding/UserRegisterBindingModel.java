package com.example.demo.model.binding;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class UserRegisterBindingModel {

    private String username;
    private String fullName;
    private String email;
    private String password;
    private String confirmPassword;

    public UserRegisterBindingModel() {
    }


    @Size(min = 3,max = 10,message = "Username length must be between 3 and 10 characters")
    @NotNull(message = "cannot be null")
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Size(min = 5,max = 20,message = "fullName length must be between 5 and 20 characters.")
    @NotNull(message = "cannot be null")
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    @Email(message = "Needs @")
    @NotNull(message = "cannot be null")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Size(min = 3,message = "needs to be 3 symbols or more")
    @NotNull(message = "cannot be null")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Size(min = 3,message = "needs to be 3 symbols or more")
    @NotNull(message = "cannot be null")
    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }
}
