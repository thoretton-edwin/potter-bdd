Feature:
  Scenario: One Harry Potter book purchase costs $8
    Given The user has one book in the basket
    When The user requests the price
    Then The price is $8