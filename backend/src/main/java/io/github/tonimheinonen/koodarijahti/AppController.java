package io.github.tonimheinonen.koodarijahti;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class AppController {

    private final int COUNTER_ID = 1;

    @Autowired
	CounterRepository counterRepository;

    /**
     * Increments the number of times clicked.
     * 
     * @return how many points user won and how many needed for next win
     */
    @RequestMapping(value = "/increment", method= RequestMethod.POST)
    public GameResult increment() {
        // get counter used for counting clicks
        Counter counter = counterRepository.findById(COUNTER_ID).orElse(null);
        
        // If counter is null, create new counter
        if (counter == null)
            counter = new Counter(COUNTER_ID, 0);

        // Get times clicked from counter and increment it by 1
        int timesClicked = counter.getTimesClicked();
        timesClicked++;
        // Check if user won any points
        int points = countPoints(timesClicked);
        // Check how many presses needed for next win
        int numberOfNeededPresses = countNeededPresses(timesClicked);
        // Save incremented times clicked
        counter.setTimesClicked(timesClicked);
        counterRepository.save(counter);

        System.out.println(timesClicked);
        return new GameResult(points, numberOfNeededPresses);
    }

    /**
     * Checks the reward amount for press.
     * 
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