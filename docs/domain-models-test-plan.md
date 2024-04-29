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
| Objects        | Properties                                         | Messages                   | Output   |
|----------------|----------------------------------------------------|----------------------------|----------|
| BankAccount    | balance @float , transactions @array, name @String |                            |          |
| PrintStatement |                                                    | printStatement(@accountId) | @Boolean |


</br>

## Additional Features

**User Story 7**

As an air traffic controller,
I want to ensure that planes cannot land during stormy weather conditions,
So that I can maintain safety protocols and prevent accidents.

**User Story 8**

As an air traffic controller,
I want to ensure that planes cannot take off during stormy weather conditions,
To mitigate the risk of accidents and ensure passenger safety.

-----------------------------------------------------------

**Domain Model - User Story 7**

| Objects | Properties        | Messages       | Output   |
|---------|-------------------|----------------|----------|
| Airport |                   | checkWeather() | @Boolean |
| Weather | isStormy @Boolean |                |          |

**Domain Model - User Story 7**

| Objects | Properties        | Messages       | Output   |
|---------|-------------------|----------------|----------|
| Airport |                   | checkWeather() | @Boolean |
| Weather | isStormy @Boolean |                |          |