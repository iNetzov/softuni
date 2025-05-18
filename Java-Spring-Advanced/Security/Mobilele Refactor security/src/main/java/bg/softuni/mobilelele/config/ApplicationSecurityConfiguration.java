package bg.softuni.mobilelele.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class ApplicationSecurityConfiguration extends WebSecurityConfigurerAdapter {


    private final UserDetailsService userDetailsService;
    private final  PasswordEncoder passwordEncoder;

    public ApplicationSecurityConfiguration(
            @Qualifier("applicationUserServiceImpl") UserDetailsService userDetailsService,
            PasswordEncoder passwordEncoder) {


        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.
                authorizeRequests().
                //Adding access to Static recourses
                requestMatchers(PathRequest.toStaticResources().atCommonLocations()).permitAll()
                // Adding access to Pages with global access HOME,REGISTER, LOGIN
                .antMatchers("/","/users/register","/users/login").permitAll()
                //next we forbit all other pages for un-logged users
                .antMatchers("/**").authenticated()
                .and().
                //configure login with login HTML FORM two input fields
                formLogin()
                //login page located at /users/login;
                .loginPage("/users/login")
                //this is the name of the <input> in the login form where user enters his email/username ect.
                //this value from input will be presented to out User details service
                //this is constant that is the name of the field in html
                .usernameParameter(UsernamePasswordAuthenticationFilter.SPRING_SECURITY_FORM_USERNAME_KEY)
                //the name of the <input> field that holds the password in the html form
                .passwordParameter(UsernamePasswordAuthenticationFilter.SPRING_SECURITY_FORM_PASSWORD_KEY)
                //if logged in successfully loggged in redirect to page '/' --> home page
                .defaultSuccessUrl("/")
                //if logged in NOT successfully redirect to page.
                .failureForwardUrl("/users/login-error")
                //LOGOUT Logic
                .and()
                .logout()
                //this is URL witch spring will implement for me and will log the user out.
                .logoutUrl("/users/logout")
                // if logout successfully you are redirected to  '/'home page
                .logoutSuccessUrl("/")
                //removing HTTP session
                .invalidateHttpSession(true)
                //delete the cookie that references my session
                .deleteCookies("JSESSIONID");
    }





    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        auth
                .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder);

    }
}
