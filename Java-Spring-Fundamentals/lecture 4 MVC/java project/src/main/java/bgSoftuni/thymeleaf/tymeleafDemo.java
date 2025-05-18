package bgSoftuni.thymeleaf;

import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver;
import org.thymeleaf.templateresolver.ITemplateResolver;

public class tymeleafDemo {

    public static void main(String[] args) {

        ITemplateResolver resolver = new ClassLoaderTemplateResolver();

        TemplateEngine templateEngine = new TemplateEngine();
        templateEngine.setTemplateResolver(resolver);

        Context context = new Context();
        context.setVariable("personToGreet","Netzov");
        String result = templateEngine.process("test.html", context);
        System.out.println(result);

    }
}
