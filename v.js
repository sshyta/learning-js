const budget = { income: +prompt(), expenses: +prompt(), calculateProfile(){ if (budget.income > budget.expenses) { return `Ваша прибыль составляет ${budget.income - budget.expenses} рублей` } else if (budget.income < budget.expenses) { return `Вы ушли в минус на ${budget.expenses - budget.income} рублей` } else { return `Вы отработали в ноль` }} }; budget.calculateProfile();


