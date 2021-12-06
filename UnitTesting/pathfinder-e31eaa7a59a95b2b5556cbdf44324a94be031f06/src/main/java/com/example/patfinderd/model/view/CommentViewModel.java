package com.example.patfinderd.model.view;

import java.time.Instant;
import java.time.LocalDateTime;

public class CommentViewModel {

    private Long commentId;
    private String message;
    private String user;
    private LocalDateTime created;
    private boolean canApproved;
    private boolean canDelete;

    public CommentViewModel() {
    }

    public Long getCommentId() {
        return commentId;
    }

    public void setCommentId(Long commentId) {
        this.commentId = commentId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public LocalDateTime getCreated() {
        return created;
    }

    public void setCreated(LocalDateTime created) {
        this.created = created;
    }

    public boolean isCanApproved() {
        return canApproved;
    }

    public void setCanApproved(boolean canApproved) {
        this.canApproved = canApproved;
    }

    public boolean isCanDelete() {
        return canDelete;
    }

    public void setCanDelete(boolean canDelete) {
        this.canDelete = canDelete;
    }
}
