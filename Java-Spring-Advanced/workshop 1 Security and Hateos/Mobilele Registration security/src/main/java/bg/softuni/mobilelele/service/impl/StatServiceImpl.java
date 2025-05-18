package bg.softuni.mobilelele.service.impl;

import bg.softuni.mobilelele.model.view.StatsViewModel;
import bg.softuni.mobilelele.service.StatService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class StatServiceImpl implements StatService {

    private int anonymousRequests;
    private int authRequests;

    @Override
    public void onRequest() {
        Authentication authentication = SecurityContextHolder
                .getContext()
                .getAuthentication();
        if (authentication != null && (authentication.getPrincipal() instanceof UserDetails)){
            authRequests++;
        } else {
            anonymousRequests++;
        }
    }

    @Override
    public StatsViewModel getStats() {
        return new StatsViewModel(authRequests,anonymousRequests);
    }
}
