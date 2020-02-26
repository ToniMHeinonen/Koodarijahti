package io.github.tonimheinonen.koodarijahti;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Counter {

    @Id
    private int id;

    private int timesClicked;

    /**
     * Initializes new empty instance of Counter.
     */
    public Counter() {}

    /**
     * Initializes new instance of Counter.
     * 
     * @param id counter's id
     * @param timesClicked how many times button has been clicked
     */
    public Counter(int id, int timesClicked) {
        this.id = id;
        this.timesClicked = timesClicked;
    }

    /**
     * Getter for timesClicked.
     * 
     * @return amount of times button has been clicked
     */
    public int getTimesClicked() {
        return timesClicked;
    }

    /**
     * Setter for timesClicked.
     * 
     * @param timesClicked how many times button has been clicked
     */
    public void setTimesClicked(int timesClicked) {
        this.timesClicked = timesClicked;
    }

    /**
     * Prints id and times clicked when printing this object.
     */
    @Override
    public String toString() {
        return "Counter [id=" + id + ", timesClicked=" + timesClicked + "]";
    }

}
