package com.example.demo.sla;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;

import java.util.stream.Collectors;

@Aspect
@Component
public class SLOAspect {

    private static final Logger LOGGER = LoggerFactory.getLogger(SLOAspect.class);


    private final SLOsConfig slosConfig;

    public SLOAspect(SLOsConfig slosConfig) {
        this.slosConfig = slosConfig;
    }

    @Around(value = "@annotation(TrackLatency)")
    public Object trackLatency(ProceedingJoinPoint pjp, TrackLatency TrackLatency) throws Throwable {
        String latencyId = TrackLatency.latency();
        SLOsConfig.SLOConfig config = slosConfig.getSlos().
                stream().
                filter(s -> s.getId().equals(latencyId)).
                findAny().
                orElseThrow(() -> new IllegalStateException("SLO with ID " + latencyId + " is not configured."));

        StopWatch stopWatch = new StopWatch();
        stopWatch.start();
        Object result = pjp.proceed();
        stopWatch.stop();

        long actualExecutionTime = stopWatch.getLastTaskTimeMillis();
        if (actualExecutionTime > config.getTreshold()) {
            // Basically we can have very complex calculations here, we just log.
            LOGGER.warn("Method {} was too slow. Execution time {} millis.",
                    latencyId, actualExecutionTime);
        }

        return result;
    }
}
