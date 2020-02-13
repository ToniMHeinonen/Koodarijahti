package io.github.tonimheinonen.koodarijahti;

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

  public int countPoints() {
        if (counter % 500 == 0)
          return 250;
        else if (counter % 100 == 0)
            return 40;
        else if (counter % 10 == 0)
            return 5;
    }

    public void countNeededPresses() {

    }
}