package com.example.demo.web;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND,reason = "Product not found")
public class ObjectNotFoundException extends RuntimeException{

    private  final Long objectId;

    public ObjectNotFoundException(Long objectId) {
        super("Cannot find object with id: "+objectId);
        this.objectId = objectId;
    }

    public Long getObjectId() {
        return objectId;
    }
}
