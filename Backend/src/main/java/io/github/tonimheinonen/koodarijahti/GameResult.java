package io.github.tonimheinonen.koodarijahti;

public class GameResult {
    private int pointsWon, neededPressesForWin;

    public GameResult(int points, int numberOfNeededPresses) {
        this.pointsWon = points;
        this.neededPressesForWin = numberOfNeededPresses;
    }

    public int getPointsWon() {
        return pointsWon;
    }

    public void setPointsWon(int pointsWon) {
        this.pointsWon = pointsWon;
    }

    public int getNeededPressesForWin() {
        return neededPressesForWin;
    }

    public void setNeededPressesForWin(int neededPressesForWin) {
        this.neededPressesForWin = neededPressesForWin;
    }
}