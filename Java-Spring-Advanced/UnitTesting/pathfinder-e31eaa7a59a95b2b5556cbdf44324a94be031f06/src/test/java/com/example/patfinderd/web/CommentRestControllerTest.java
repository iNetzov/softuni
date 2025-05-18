package com.example.patfinderd.web;
//for import on hand
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

//for import on hand
import com.example.patfinderd.model.entity.Comment;
import com.example.patfinderd.model.entity.Route;
import com.example.patfinderd.model.entity.User;
import com.example.patfinderd.repository.CommentRepository;
import com.example.patfinderd.repository.RouteRepository;
import com.example.patfinderd.repository.UserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;
import java.util.List;

@SpringBootTest
@AutoConfigureMockMvc
@WithMockUser(username = "admin",roles = {"ADMIN"})
class CommentRestControllerTest {

    private static final String COMMENT_1 = "someting";
    private static final String COMMENT_2 = "sometingElse";

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private RouteRepository routeRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

    private User testUser;

    @BeforeEach
    void setUp(){
        testUser = new User();
        testUser.setUsername("ivn9812");
        testUser.setPassword("12345");
        testUser.setFullName("Ivailo Netzov");
        userRepository.save(testUser);
    }

    @AfterEach
    void tearDown(){
        routeRepository.deleteAll();
        userRepository.deleteAll();
    }

    @Test
    void testGetComments() throws Exception {
        long routeId = initRoute();
        mockMvc.perform(get("/api/"+routeId+"/comments"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$",hasSize(2))).
                andExpect(jsonPath("$.[0].message", is(COMMENT_1))).
                andExpect(jsonPath("$.[1].message", is(COMMENT_2)));
    }

    private long initRoute(){
        Route testRoute = new Route();
        testRoute.setName("Testing route");
        routeRepository.save(testRoute);

        Comment comment1 = new Comment();
        comment1.setCreated(LocalDateTime.now());
        comment1.setAuthor(testUser);
        comment1.setTextContent(COMMENT_1);
        comment1.setApproved(true);
        comment1.setRoute(testRoute);

        Comment comment2 = new Comment();
        comment2.setCreated(LocalDateTime.now());
        comment2.setAuthor(testUser);
        comment2.setTextContent(COMMENT_2);
        comment2.setApproved(true);
        comment2.setRoute(testRoute);



        testRoute.setComments(List.of(comment1,comment2));
       return routeRepository.save(testRoute).getId();

    }


}
