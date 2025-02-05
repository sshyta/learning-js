let bankAccount = {
  balance: 500,

  deposit(amount) {
    this.balance += amount
    return this.balance
  },

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount
      return this.balance
    } else {
      return "Недостаточно средств на счете"
    }
  },

};

const amount = Number(prompt());
const choice = prompt()
if (choice === "внести") {
  console.log(bankAccount.deposit(amount, bankAccount.balance))
} 
else if (choice === "снять") {
  console.log(bankAccount.withdraw(amount, bankAccount.balance))
}
