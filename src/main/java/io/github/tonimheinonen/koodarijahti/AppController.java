package io.github.tonimheinonen.koodarijahti;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

    private int counter;

    @GetMapping("increment")
    public GameResult increment() {
        counter++;
        int points = countPoints();
        int numberOfNeededPresses = countNeededPresses();
        return new GameResult(points, numberOfNeededPresses);
  }

  /**
   * Checks the reward amount for press.
   * @return int reward amount
   */
  public int countPoints() {
        if (counter % 500 == 0)
          return 250;
        else if (counter % 100 == 0)
            return 40;
        else if (counter % 10 == 0)
            return 5;
        else
            return 0;
    }

    /**
     * Checks how many presses needed for next reward.
     * 
     * It only needs to check for number 10, since all the
     * rewards are dividable by 10.
     * @return int needed presses for reward
     */
    public int countNeededPresses() {
        // Check how many leftovers after dividing counter by 10
        int needed = counter % 10;

        // Reduce needed from the value 10
        needed = 10 - needed;
        return needed;
    }
}