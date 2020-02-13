package io.github.tonimheinonen.koodarijahti;

public class GameResult {
    private int pointsWon, neededPressesForWin;

    public GameResult(int points, int numberOfNeededPresses) {
        this.pointsWon = points;
        this.neededPressesForWin = numberOfNeededPresses;
    }
}