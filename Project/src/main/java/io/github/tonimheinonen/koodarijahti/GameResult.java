package io.github.tonimheinonen.koodarijahti;

public class GameResult {
    private int pointsWon, neededPressesForWin;

    /**
     * Creates instance of GameResult.
     * @param points how many points user won
     * @param numberOfNeededPresses how many presses needed for winning
     */
    public GameResult(int points, int numberOfNeededPresses) {
        this.pointsWon = points;
        this.neededPressesForWin = numberOfNeededPresses;
    }

    /**
     * Getter for pointsWon.
     * @return amount of points won
     */
    public int getPointsWon() {
        return pointsWon;
    }

    /**
     * Setter for pointsWon
     * @param pointsWon how many points user won
     */
    public void setPointsWon(int pointsWon) {
        this.pointsWon = pointsWon;
    }

    /**
     * Getter for neededPressesForWin.
     * @return amount of presses needed for next win
     */
    public int getNeededPressesForWin() {
        return neededPressesForWin;
    }

    /**
     * Setter for neededPressesForWin.
     * @param neededPressesForWin how many presses needed for next win
     */
    public void setNeededPressesForWin(int neededPressesForWin) {
        this.neededPressesForWin = neededPressesForWin;
    }
}