package com.example.patfinderd.service.impl;

import com.example.patfinderd.model.entity.Comment;
import com.example.patfinderd.model.entity.Route;
import com.example.patfinderd.model.service.CommentServiceModel;
import com.example.patfinderd.model.view.CommentViewModel;
import com.example.patfinderd.repository.RouteRepository;
import com.example.patfinderd.service.CommentService;
import com.example.patfinderd.service.exeptions.ObjectNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {

    private final RouteRepository routeRepository;


    public CommentServiceImpl(RouteRepository routeRepository) {
        this.routeRepository = routeRepository;
    }

    @Override
    public CommentViewModel createComment(CommentServiceModel commentServiceModel) {
        throw new UnsupportedOperationException("not Yet");
    }

    @Transactional
    @Override
    public List<CommentViewModel> getComments(Long routeId) {
        Optional<Route> routeOpt = routeRepository.findById(routeId);
        if (routeOpt.isEmpty()){
            throw new ObjectNotFoundException("Route with id: " + routeId + " was not found");
        }
        return routeOpt.get()
                .getComments()
                .stream()
                .map(c->mapAsComment(c))
                .collect(Collectors.toList());
    }

    private CommentViewModel mapAsComment(Comment commentEntity){
        CommentViewModel viewModel = new CommentViewModel();
        viewModel.setCommentId(commentEntity.getId());
        viewModel.setCanApproved(true);
        viewModel.setCanDelete(true);
        viewModel.setCreated(commentEntity.getCreated());
        viewModel.setMessage(commentEntity.getTextContent());
        viewModel.setUser(commentEntity.getAuthor().getFullName());

        return viewModel;
    }

}
