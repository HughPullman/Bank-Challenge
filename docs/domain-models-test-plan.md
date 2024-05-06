# Domain Models and Test Plan

## User stories

1. As a user,
I want to be able to create an account and access it,
So that I can use my account.

2. As a user,
I want to be able to deposit funds into my account,
So that I can deposit my money.

3. As a user,
I want to be able to withdraw funds from my account,
So that I have access to my money.

4. As a user,
I want to only be able to withdraw up to the amount I have available in account,
So that I don't spend more than I have.

5. As a user,
I want to be able to have all my transactions recorded in order,
So that I can see changes to my account.

6. As a user,
I want to be able to print out an account statement,
So that I can keep track of my account changes.

----------------------------------

## Domain models

**User Story 1**
| Objects     | Properties                                          | Messages          | Output   |
|-------------|-----------------------------------------------------|-------------------|----------|
| BankAccount | accountId @Integer , name @String , balance @ float | accessAccount(Id) | @Boolean |

</br>

**User Story 2**
| Objects     | Properties     | Messages        | Output  |
|-------------|----------------|-----------------|---------|
| BankAccount | balance @float | deposit(@float) | @String |

</br>

**User Story 3**
| Objects     | Properties     | Messages         | Output  |
|-------------|----------------|------------------|---------|
| BankAccount | balance @float | withdraw(@float) | @String |


</br>

**User Story 4**
| Objects     | Properties     | Messages         | Output  |
|-------------|----------------|------------------|---------|
| BankAccount | balance @float | withdraw(@float) | @String |

</br>

**User Story 5**
| Objects      | Properties                                  | Messages                    | Output |
|--------------|---------------------------------------------|-----------------------------|--------|
| Transactions | transactions @Array [@Transaction]          | addTransaction(transaction) | @void  |
| Transaction  | date @String , debit @Float , credit @Float |                             | @void  |

</br>

**User Story 6**
| Objects        | Properties                                         | Messages                   | Output   |
|----------------|----------------------------------------------------|----------------------------|----------|
| BankAccount    | balance @float , transactions @array, name @String |                            |          |
| PrintStatement |                                                    | printStatement(@accountId) | @Boolean |


</br>

## Additional Features

**User Story 7**

As a user,
I want to have my statement print green for credit and positive balances,
So that I can clearly see them.

**User Story 8**

As a user,
I want to have my statement print red for debit and negative balances,
So that I can clearly see them.

**User Story 9**

As a user,
I want to have be able to set up an overdraft with a set amount,
So that I can withdraw more than I have if needed.

**User Story 10**

As a user,
I want to have be able to withdraw up to my overdraft amount,
So that I can access more money if I run out.

-----------------------------------------------------------

**Domain Model - User Story 7**

| Objects        | Properties                                         | Messages                   | Output   |
|----------------|----------------------------------------------------|----------------------------|----------|
| BankAccount    | balance @float , transactions @array, name @String |                            |          |
| PrintStatement |                                                    | printStatement(@accountId) | @Boolean |

**Domain Model - User Story 8**

| Objects        | Properties                                         | Messages                   | Output   |
|----------------|----------------------------------------------------|----------------------------|----------|
| BankAccount    | balance @float , transactions @array, name @String |                            |          |
| PrintStatement |                                                    | printStatement(@accountId) | @Boolean |

**Domain Model - User Story 9**
| Objects     | Properties                               | Messages                                         | Output |
|-------------|------------------------------------------|--------------------------------------------------|--------|
| BankAccount | overdraft @Boolean, overdraftAmount @Int | setOverdraft(@Boolean), setOverdraftAmount(@int) | @Void  |

**Domain Model - User Story 10**
| Objects     | Properties                           | Messages         | Output  |
|-------------|--------------------------------------|------------------|---------|
| BankAccount | balance @float, overdraftAmount @Int | withdraw(@float) | @String |