package bg.softuni.mobilelele.service;

import bg.softuni.mobilelele.model.view.StatsViewModel;

public interface StatService {
    void onRequest();

    StatsViewModel getStats();
}
