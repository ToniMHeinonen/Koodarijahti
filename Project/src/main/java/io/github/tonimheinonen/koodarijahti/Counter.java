package io.github.tonimheinonen.koodarijahti;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Counter {

    @Id
    private int id;

    private int timesClicked;

    public Counter() {}

    public Counter(int id, int timesClicked) {
        this.id = id;
        this.timesClicked = timesClicked;
    }

    public int getTimesClicked() {
        return timesClicked;
    }

    public void setTimesClicked(int timesClicked) {
        this.timesClicked = timesClicked;
    }

    @Override
    public String toString() {
        return "Counter [id=" + id + ", timesClicked=" + timesClicked + "]";
    }

}
