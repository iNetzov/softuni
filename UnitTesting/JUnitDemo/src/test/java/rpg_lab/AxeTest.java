package rpg_lab;

import org.junit.Assert;
import org.junit.Test;

public class AxeTest {

    @Test
    public void testDurabilityLossAfterAttackShouldLoseExactOnePoint() {
        //AAA Pattern
        //A -> Arrange
        Axe axe = new Axe(0, 10);
        Dummy dummy = new Dummy(100, 100);
        //AA -> Act
        axe.attack(dummy);
        //AAA -> Assertion
        int actualPoints = axe.getDurabilityPoints();
        int expectedPoints = 9;
        Assert.assertEquals(expectedPoints, actualPoints);
    }

    @Test(expected = IllegalStateException.class)
    public void testAttackWithBrokenAxeShouldThrow() {
        //AAA Pattern
        //A Arrange
        Axe axe = new Axe(0, 0);
        Dummy dummy = new Dummy(100, 100);
        //AA Act
        axe.attack(dummy);
        //AAA Assertion
        throw new IllegalStateException();
    }

}
