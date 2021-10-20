package DataAccess;

/**
 * This class represents an account holder at the bank
 */
class AccountHolder {
    private String name;
    private int accountNumber;
    private int creditScore;
    private float savings;
    private float monthlyBudget;

    void setName(String name) {this.name = name;}

    void setAccountNumber(int accountNumber) {this.accountNumber = accountNumber;}

    void setCreditScore(int creditScore) {this.creditScore = creditScore;}

    void setSavings(float savings) {this.savings = savings;}

    void setMonthlyBudget(float monthlyBudget) {this.monthlyBudget = monthlyBudget;}

    String getName() {return this.name;}

    int getAccountNumber() {return this.accountNumber;}

    int getCreditScore() {return this.creditScore;}

    float getSavings() {return this.savings;}

    float getMonthlyBudget() {return this.monthlyBudget;}
}
