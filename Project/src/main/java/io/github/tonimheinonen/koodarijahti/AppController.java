package io.github.tonimheinonen.koodarijahti;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class AppController {

    private final int COUNTER_ID = 1;

    @Autowired
	CounterRepository counterRepository;
    
    /*@GetMapping("increment")
    public GameResult increment() {
        counter++;
        int points = countPoints();
        int numberOfNeededPresses = countNeededPresses();
        return new GameResult(points, numberOfNeededPresses);
    }*/

    // https://shrouded-fjord-28724.herokuapp.com/increment
    @RequestMapping(value = "/increment", method= RequestMethod.POST)
    public GameResult increment() {
        Counter counter = counterRepository.findById(COUNTER_ID).orElse(null);
        if (counter == null) {
            System.out.println("null");
            counter = new Counter(COUNTER_ID, 0);
        } else {
            System.out.println("notnull");
        }

        int timesClicked = counter.getTimesClicked();
        timesClicked++;
        int points = countPoints(timesClicked);
        int numberOfNeededPresses = countNeededPresses(timesClicked);
        counter.setTimesClicked(timesClicked);
        counterRepository.save(counter);
        System.out.println(timesClicked);
        return new GameResult(points, numberOfNeededPresses);
    }

    /**
     * Checks the reward amount for press.
     * @return int reward amount
     */
    private int countPoints(int counter) {
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
    private int countNeededPresses(int counter) {
        // Check how many leftovers after dividing counter by 10
        int needed = counter % 10;

        // Reduce needed from the value 10
        needed = 10 - needed;
        return needed;
    }
}