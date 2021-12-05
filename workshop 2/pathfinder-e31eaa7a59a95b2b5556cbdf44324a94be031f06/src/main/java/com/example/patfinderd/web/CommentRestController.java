package com.example.patfinderd.web;

import com.example.patfinderd.model.binding.NewCommentBindingModel;
import com.example.patfinderd.model.service.CommentServiceModel;
import com.example.patfinderd.model.validation.ApiError;
import com.example.patfinderd.model.view.CommentViewModel;
import com.example.patfinderd.service.CommentService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.security.Principal;
import java.util.List;

@RestController
public class CommentRestController {

    private final CommentService commentService;
    private final ModelMapper modelMapper;
    
    

    public CommentRestController(CommentService commentService, ModelMapper modelMapper) {
        this.commentService = commentService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/api/{routhId}/comments")
    public ResponseEntity<List<CommentViewModel>> getComments(@PathVariable Long routhId,
                                                              Principal principal)
    {

        return ResponseEntity.ok(commentService.getComments(routhId));
    }
    @PostMapping("/api/{routeId}/comments")
    public ResponseEntity<CommentViewModel>newComment(
            @AuthenticationPrincipal UserDetails principal,
            @PathVariable Long routeId,
            @RequestBody @Valid NewCommentBindingModel newCommentBindingModel){
        
        CommentServiceModel commentServiceModel = modelMapper.map(newCommentBindingModel,CommentServiceModel.class);
        commentServiceModel.setRouteId(routeId);
        CommentViewModel comment = commentService.createComment(commentServiceModel);
        URI uri = URI.create(String.format("/api/%s/comments/%s", routeId, comment.getCommentId()));
        return ResponseEntity.created(uri).body(comment);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ApiError> onValidationFailure(MethodArgumentNotValidException exc){
        ApiError apiError = new ApiError(HttpStatus.BAD_REQUEST);
        exc.getFieldErrors().forEach(fe -> apiError.addFieldWithError(fe.getField()));
        return ResponseEntity.badRequest().body(apiError);
    }

}
