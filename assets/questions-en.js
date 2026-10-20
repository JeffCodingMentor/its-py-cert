// English edition aligned with the Chinese IDs, choice order, and answers.
window.ITS_QUESTION_SOURCE_EN =
"## 題目 1\n" +
"\n" +
"**主題：** Input and Output : 4-6\n" +
"\n" +
"What does the following statement do?\n" +
"\n" +
"```python\n" +
"data = input()\n" +
"```\n" +
"\n" +
"- A. Creates an HTML input element\n" +
"- B. Displays a message box that allows user input\n" +
"- C. Allows a user to enter text in the console\n" +
"- D. Displays all input peripheral devices on the computer\n" +
"\n" +
"**正確答案：** C\n" +
"\n" +
"## 題目 2\n" +
"\n" +
"**主題：** Input and Output : 4-3\n" +
"\n" +
"You are creating an eCommerce script that accepts user input and outputs comma-separated data.\n" +
"\n" +
"You write the following code to accept input:\n" +
"\n" +
"```python\n" +
"item = input(\"Enter the item name: \")\n" +
"sales = input(\"Enter the quantity: \")\n" +
"```\n" +
"\n" +
"The output must meet these requirements:\n" +
"\n" +
"- Enclose strings in double quotes.\n" +
"- Do not enclose numbers in quotes or other characters.\n" +
"- Separate items with commas.\n" +
"\n" +
"Which two code segments could you use? (Choose two.)\n" +
"\n" +
"- A. `print(\"{0},{1}\".format(item, sales))`\n" +
"- B. `print(item + ',' + sales)`\n" +
"- C. `print('\"{0}\",{1}'.format(item, sales))`\n" +
"- D. `print('\"' + item + '\",' + sales)`\n" +
"\n" +
"**正確答案：** C, D\n" +
"\n" +
"## 題目 3\n" +
"\n" +
"**主題：** Variables and Data Types : 1-5\n" +
"\n" +
"DRAG DROP\n" +
"\n" +
"You need to identify the data types of various type operations.\n" +
"Move the appropriate data types from the list on the left to the correct type operations on the right. You may use each data type once, more than once, or not at all.\n" +
"Note: You will receive partial credit for each correct match.\n" +
"\n" +
"### Data Types\n" +
"\n" +
"- A. `int`\n" +
"- B. `float`\n" +
"- C. `str`\n" +
"- D. `bool`\n" +
"\n" +
"### Answer Area\n" +
"\n" +
"1. `type(+1E10)`\n" +
"2. `type(5.0)`\n" +
"3. `type(\"True\")`\n" +
"4. `type(False)`\n" +
"\n" +
"**正確答案：** (1) B; (2) B; (3) C; (4) D\n" +
"\n" +
"## 題目 4\n" +
"\n" +
"**主題：** Input and Output : 4-5\n" +
"\n" +
"You are developing a Python application for your company.\n" +
"\n" +
"You need to accept user input and output the information to the user's screen.\n" +
"\n" +
"You start with the following code.\n" +
"\n" +
"Which code should you write on line 02?\n" +
"\n" +
"```python\n" +
"print(\"What is your name?\")\n" +
"_(1)_\n" +
"print(name)\n" +
"```\n" +
"1. Blank (1):\n" +
"  - A. `input(\"name\")`\n" +
"  - B. `name = input()`\n" +
"  - C. `input(name)`\n" +
"  - D. `name = input`\n" +
"\n" +
"**正確答案：** B\n" +
"\n" +
"## 題目 5\n" +
"\n" +
"**主題：** Input and Output : 4-2\n" +
"\n" +
"You are writing a function to read a data file and print the results or format a table. You write code to read a line of data into a list named `fields`.\n" +
"\n" +
"The printed output must meet the following formatting requirements:\n" +
"\n" +
"- Fruit name `fields[0]`: left-aligned in a field 10 spaces wide.\n" +
"- Weight `fields[1]`: right-aligned in a field 5 spaces wide, with 1 decimal place.\n" +
"- Price `fields[2]`: right-aligned in a field 7 spaces wide, with 2 decimal places.\n" +
"\n" +
"The following shows a single-line example of the output:\n" +
"\n" +
"`Oranges   5.6  1.33`\n" +
"\n" +
"Complete the formatting code:\n" +
"\n" +
"```python\n" +
"print(\"_(1)__(2)__(3)_\".format(fields[0], eval(fields[1]), eval(fields[2])))\n" +
"```\n" +
"\n" +
"Choices:A. `{10:0}`；B. `{5:1f}`；C. `{7:2f}`；D. `{2:7.2f}`；E. `{1:5.1f}`；F. `{0:10}`\n" +
"\n" +
"1. Blank (1):\n" +
"2. Blank (2):\n" +
"3. Blank (3):\n" +
"\n" +
"**正確答案：** (1) F; (2) E; (3) D\n" +
"\n" +
"## 題目 6\n" +
"\n" +
"**主題：** Variables and Data Types : 1-3\n" +
"\n" +
"You are writing a program to calculate a user's approximate year of birth. The program asks the user to enter their age (`age`) and the current year (`year`), and then includes the user's approximate year of birth (`born`) in a message (`message`).\n" +
"\n" +
"You write the following code. Line numbers are included for reference only.\n" +
"\n" +
"Evaluate the code, and then select the correct option from each drop-down list to answer the questions.\n" +
"\n" +
"```python\n" +
"age = input(\"Enter your age: \")\n" +
"year = input(\"Enter the four-digit year: \")\n" +
"born = eval(year) - eval(age)\n" +
"message = \"You were born in \" + str(born)\n" +
"print(message)\n" +
"```\n" +
"\n" +
"Choices:A. `int`；B. `str`；C. `float`；D. `bool`\n" +
"\n" +
"Identify the data type for each of the following items:\n" +
"\n" +
"1. `age` on line 01\n" +
"2. `born` on line 03\n" +
"3. `message` on line 05\n" +
"\n" +
"**正確答案：** (1) B; (2) A; (3) B\n" +
"\n" +
"## 題目 7\n" +
"\n" +
"**主題：** Strings and Lists : 3-9\n" +
"\n" +
"You create the following program to find a meeting room and display its name.\n" +
"\n" +
"A coworker reports that when the value 1 or 2 is entered, the program outputs `Room does not exist.`.\n" +
"\n" +
"You must troubleshoot the program. Evaluate the code, and then select the correct options to answer the questions.\n" +
"\n" +
"```python\n" +
"rooms = {1: 'Foyer', 2: 'Conference Room'}\n" +
"room = input('Enter the room number: ')\n" +
"if not room in rooms:\n" +
"    print('Room does not exist.')\n" +
"else:\n" +
"    print(\"The room name is \" + rooms[room])\n" +
"```\n" +
"\n" +
"1. Which two data types does the dictionary on line 01 contain?\n" +
"   - A. Booleans and strings\n" +
"   - B. Floating-point numbers and Booleans\n" +
"   - C. Integers and strings\n" +
"   - D. Floating-point numbers and integers\n" +
"2. What is the data type of `room` on line 02?\n" +
"   - A. `bool`\n" +
"   - B. `float`\n" +
"   - C. `int`\n" +
"   - D. `str`\n" +
"3. Why does line 03 fail to find the room?\n" +
"   - A. Invalid syntax\n" +
"   - B. Mismatched data types\n" +
"   - C. An incorrectly named variable\n" +
"\n" +
"**正確答案：** (1) C; (2) D; (3) B\n" +
"\n" +
"## 題目 8\n" +
"\n" +
"**主題：** Modules : 0-0\n" +
"\n" +
"※You write the following code:\n" +
"\n" +
"You run the program. What is the output?\n" +
"\n" +
"```python\n" +
"import datetime\n" +
"d = datetime.datetime(2017, 4, 7)\n" +
"print('{:%B-%d-%y}'.format(d))\n" +
"```\n" +
"\n" +
"- A. `04-07-17`\n" +
"- B. `2017-APRIL-07`\n" +
"- C. `APRIL-07-17`\n" +
"- D. `04-07-2017`\n" +
"\n" +
"**正確答案：** C\n" +
"\n" +
"## 題目 9\n" +
"\n" +
"**主題：** Input and Output : 4-7\n" +
"\n" +
"※A food company needs a simple program that its customer service center can use to enter survey data for a new type of coffee. The program must perform the following tasks:\n" +
"- Accept input (rating).\n" +
"- Return the average rating (average) on a five-star rating scale.\n" +
"- Round the output to two decimal places.\n" +
"\n" +
"```python\n" +
"sum = count = done = 0\n" +
"average = 0.0\n" +
"while done != -1:\n" +
"    rating = _(1)_\n" +
"    if rating == -1:\n" +
"        break\n" +
"    sum += rating\n" +
"    count += 1\n" +
"    average = float(sum / count)\n" +
"_(2)_+_(3)_\n" +
"```\n" +
"\n" +
"1. Code for blank (1):\n" +
"  - A. `float(input(\"Enter next rating (1-5, -1 for done)\"))`\n" +
"  - B. `input \"Enter next rating (1-5, -1 for done)\"`\n" +
"  - C. `input(\"Enter next rating (1-5, -1 for done)\")`\n" +
"  - D. `print(\"Enter next rating (1-5, -1 for done)\")`\n" +
"2. Code for blank (2):\n" +
"  - A. `console.input(\"The average star rating for the new coffee is:\")`\n" +
"  - B. `output(\"The average star rating for the new coffee is:\")`\n" +
"  - C. `print(\"The average star rating for the new coffee is: {}\"`\n" +
"  - D. `printline(\"The average star rating for the new coffee is:\")`\n" +
"3. Code for blank (3):\n" +
"  - A. `{average, '.2f}`\n" +
"  - B. `format.average.{2d}`\n" +
"  - C. `format(average, '.2d'))`\n" +
"  - D. `format(average, '.2f'))`\n" +
"\n" +
"**正確答案：** (1) A; (2) C; (3) D\n" +
"\n" +
"## 題目 10\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-5\n" +
"\n" +
"HOTSPOT\n" +
"\n" +
"You develop a Python application for your company.\n" +
"You need to complete the code so that the print statements are accurate.\n" +
"Complete the code by selecting the correct code segment from each drop-down list.\n" +
"\n" +
"```python\n" +
"numList = [1, 2, 3, 4, 5]\n" +
"alphaList = [\"a\", \"b\", \"c\", \"d\", \"e\"]\n" +
"_(1)_\n" +
"    print(\"The values in numList are equal to alphaList\")\n" +
"_(2)_\n" +
"    print(\"The values in numList are not equal to alphaList\")\n" +
"```\n" +
"\n" +
"### Answer Area\n" +
"\n" +
"1. `_(1)_`\n" +
"\n" +
"   - A. `if numList = alphaList:`\n" +
"   - B. `if numList == alphaList:`\n" +
"   - C. `if numList += alphaList:`\n" +
"\n" +
"2. `_(2)_`\n" +
"\n" +
"   - A. `else:`\n" +
"   - B. `elif:`\n" +
"   - C. `elseif:`\n" +
"\n" +
"**正確答案：** (1) B; (2) A\n" +
"\n" +
"## 題目 11\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-3\n" +
"\n" +
"You write the following code to determine a student's final grade based on their current grade (grade) and rank (rank):\n" +
"\n" +
"```python\n" +
"grade = 76\n" +
"rank = 3\n" +
"\n" +
"if grade > 80 and rank >= 3:\n" +
"    grade += 10\n" +
"elif grade >= 70 and rank > 3:\n" +
"    grade += 5\n" +
"else:\n" +
"    grade -= 5\n" +
"\n" +
"print(grade)\n" +
"```\n" +
"\n" +
"What value will print?\n" +
"\n" +
"- A. 71\n" +
"- B. 76\n" +
"- C. 81\n" +
"- D. 86\n" +
"\n" +
"**正確答案：** A\n" +
"\n" +
"## 題目 12\n" +
"\n" +
"**主題：** Operators : 2-12\n" +
"\n" +
"HOTSPOT\n" +
"\n" +
"You are creating a Python program that compares numbers.\n" +
"You write the following code. Line numbers are included for reference only.\n" +
"\n" +
"```text\n" +
"01 num1 = eval(input (\"Please enter the first number: \"))\n" +
"02 num2 = eval(input (\"Please enter the second number: \"))\n" +
"03 if num1 == num2:\n" +
"04     print(\"The two numbers are equal.\")\n" +
"05 if num1 <= num2:\n" +
"06     print(\"Number 1 is less than number 2.\")\n" +
"07 if num1 > num2:\n" +
"08     print(\"Number 1 is greater than number 2.\")\n" +
"09 if num2 = num1:\n" +
"10     print(\"The two numbers are the same.\")\n" +
"```\n" +
"\n" +
"You need to ensure that the comparisons are accurate.\n" +
"For each statement, select True or False.\n" +
"Note: You will receive partial credit for each correct selection.\n" +
"\n" +
"### Answer Area\n" +
"\n" +
"- A. True\n" +
"- B. False\n" +
"\n" +
"1. The print statement at line 04 will print only if the two numbers are equal in value.\n" +
"2. The print statement at line 06 will print only if num1 is less than num2.\n" +
"3. The print statement at line 08 will print only if num1 is greater than num2.\n" +
"4. The statement on line 09 is an invalid comparison.\n" +
"\n" +
"**正確答案：** (1) A; (2) B; (3) A; (4) A\n" +
"\n" +
"## 題目 13\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-6\n" +
"\n" +
"HOTSPOT\n" +
"\n" +
"You are creating a function to calculate admission fees (admission_fее) based on the\n" +
"following rules:\n" +
"\n" +
"- Anyone under age 5 = free admission\n" +
"- Anyone age 5 or older who is in school = $10\n" +
"- Anyone age 5 to 17 who is not in school = $20\n" +
"- Anyone older than age 17 who is not in school = $50\n" +
"\n" +
"rate represents the price in dollars.\n" +
"Complete the code by selecting the correct code segment from each drop-down list.\n" +
"\n" +
"```python\n" +
"def admission_fee(age, school):\n" +
"    rate = 0\n" +
"    _(1)_\n" +
"        rate = 10\n" +
"    _(2)_\n" +
"        _(3)_\n" +
"            rate = 20\n" +
"        else:\n" +
"            rate = 50\n" +
"    return rate\n" +
"```\n" +
"\n" +
"### Answer Area\n" +
"\n" +
"1. `_(1)_`\n" +
"\n" +
"   - A. `if age >= 5 and school == True:`\n" +
"   - B. `if age >= 5 and age <=17:`\n" +
"   - C. `if age >= 5 and school == False:`\n" +
"\n" +
"2. `_(2)_`\n" +
"\n" +
"   - A. `elif age >= 5 and school == False:`\n" +
"   - B. `else age >= 5 and school == False:`\n" +
"   - C. `elif age >= 5 and school == True:`\n" +
"\n" +
"3. `_(3)_`\n" +
"\n" +
"   - A. `if age >= 5 and school == True:`\n" +
"   - B. `if age >= 5 and school == False:`\n" +
"   - C. `if age <=17:`\n" +
"\n" +
"**正確答案：** (1) A; (2) A; (3) C\n" +
"\n" +
"## 題目 14\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-7\n" +
"\n" +
"HOTSPOT\n" +
"\n" +
"You are writing a Python program to determine if a number (num) the user inputs is one, two, or more than two digits (digits).\n" +
"Complete the code by selecting the correct code segment from each drop-down list.\n" +
"\n" +
"```python\n" +
"num = int(input(\"Enter a number with 1 or 2 digits: \"))\n" +
"digits = \"0\"\n" +
"_(1)_\n" +
"    digits = \"1\"\n" +
"_(2)_\n" +
"    digits = \"2\"\n" +
"_(3)_\n" +
"    digits = \">2\"\n" +
"print(digits + \" digits.\")\n" +
"```\n" +
"\n" +
"### Answer Area\n" +
"\n" +
"1. `_(1)_`\n" +
"\n" +
"   - A. `if num > -10 and num < 10:`\n" +
"   - B. `if num > -100 and num < 100:`\n" +
"\n" +
"2. `_(2)_`\n" +
"\n" +
"   - A. `if num > -100 and num < 100:`\n" +
"   - B. `elif num > -100 and num < 100:`\n" +
"   - C. `if num > -10 and num < 10:`\n" +
"   - D. `elif num > -10 and num < 10:`\n" +
"\n" +
"3. `_(3)_`\n" +
"\n" +
"   - A. `else:`\n" +
"   - B. `elif:`\n" +
"\n" +
"**正確答案：** (1) A; (2) B; (3) A\n" +
"\n" +
"## 題目 15\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-1\n" +
"\n" +
"You are designing a decision structure to convert a student's numeric grade (grade) to a letter grade (letter_grade). The program must assign letter grades as specified in the following table:\n" +
"For example, if the user enters 90, the output should be \"Your letter grade is A\". Similarly, if the user enters 89, the output should be \"Your letter grade is B\"\n" +
"\n" +
"| Percentage range | Letter grade |\n" +
"|---|---|\n" +
"| 90–100 | A |\n" +
"| 80–89 | B |\n" +
"| 70–79 | C |\n" +
"| 65–69 | D |\n" +
"| 0–64 | F |\n" +
"\n" +
"```python\n" +
"grade = int(input(\"Enter a numeric grade\"))\n" +
"_(1)_\n" +
"    letter_grade = 'A'\n" +
"_(2)_\n" +
"    letter_grade = 'B'\n" +
"_(3)_\n" +
"    letter_grade = 'C'\n" +
"_(4)_\n" +
"    letter_grade = 'D'\n" +
"else:\n" +
"    letter_grade = 'F'\n" +
"print(\"Your letter grade is \", letter_grade)\n" +
"```\n" +
"\n" +
"1. Code for blank (1):\n" +
"  - A. `if grade <= 90:`\n" +
"  - B. `if grade >= 90:`\n" +
"  - C. `elif grade > 90:`\n" +
"  - D. `elif grade >= 90:`\n" +
"2. Code for blank (2):\n" +
"  - A. `if grade > 80:`\n" +
"  - B. `if grade >= 80:`\n" +
"  - C. `elif grade > 80:`\n" +
"  - D. `elif grade >= 80:`\n" +
"3. Code for blank (3):\n" +
"  - A. `if grade > 70:`\n" +
"  - B. `if grade >= 70:`\n" +
"  - C. `elif grade > 70:`\n" +
"  - D. `elif grade >= 70:`\n" +
"4. Code for blank (4):\n" +
"  - A. `if grade > 65:`\n" +
"  - B. `if grade >= 65:`\n" +
"  - C. `elif grade > 65:`\n" +
"  - D. `elif grade >= 65:`\n" +
"\n" +
"**正確答案：** (1) B; (2) D; (3) D; (4) D\n" +
"\n" +
"## 題目 16\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-17\n" +
"\n" +
"You are writing code to return a letter grade based on the following criteria:\n" +
"\n" +
"- The variable `grade` stores a numeric grade as an integer from 0 to 100.\n" +
"- A grade from 90 to 100 = A.\n" +
"- A grade from 80 to 89 = B.\n" +
"- A grade from 70 to 79 = C.\n" +
"- All other grades are failing grades.\n" +
"\n" +
"Complete the code by selecting the correct code segment.\n" +
"\n" +
"```python\n" +
"_(1)_ grade <= 100:\n" +
"    _(2)_ grade >= 90:\n" +
"        print(\"Your grade is A.\")\n" +
"    _(3)_ grade >= 80:\n" +
"        print(\"Your grade is B.\")\n" +
"    _(4)_ grade < 80 _(5)_ grade > 69:\n" +
"        print(\"Your grade is C.\")\n" +
"    _(6)_\n" +
"        print(\"Your grade is failing.\")\n" +
"_(7)_\n" +
"    print(\"Invalid grade entered.\")\n" +
"```\n" +
"\n" +
"1. Blank (1):\n" +
"   - A. `if`\n" +
"   - B. `elif`\n" +
"   - C. `for`\n" +
"   - D. `else`\n" +
"2. Blank (2):\n" +
"   - A. `elif`\n" +
"   - B. `if`\n" +
"   - C. `for`\n" +
"   - D. `else`\n" +
"3. Blank (3):\n" +
"   - A. `elif`\n" +
"   - B. `if`\n" +
"   - C. `for`\n" +
"   - D. `else`\n" +
"4. Blank (4):\n" +
"   - A. `elif`\n" +
"   - B. `if`\n" +
"   - C. `for`\n" +
"   - D. `else`\n" +
"5. Blank (5):\n" +
"   - A. `or`\n" +
"   - B. `and`\n" +
"   - C. `not`\n" +
"6. Blank (6):\n" +
"   - A. `elif:`\n" +
"   - B. `if:`\n" +
"   - C. `for:`\n" +
"   - D. `else:`\n" +
"7. Blank (7):\n" +
"   - A. `elif:`\n" +
"   - B. `if:`\n" +
"   - C. `for:`\n" +
"   - D. `else:`\n" +
"\n" +
"**正確答案：** (1) A; (2) B; (3) A; (4) A; (5) B; (6) D; (7) D\n" +
"\n" +
"## 題目 17\n" +
"\n" +
"**主題：** Strings and Lists : 3-3\n" +
"\n" +
"You are developing a Python application for your company. You write the following code:\n" +
"\n" +
"Evaluate the code, and then select the correct options to answer the questions.\n" +
"\n" +
"```python\n" +
"numList = [1, 2, 3, 4, 5]\n" +
"alphaList = [\"a\", \"b\", \"c\", \"d\", \"e\"]\n" +
"print(numList is alphaList)\n" +
"print(numList == alphaList)\n" +
"numList = alphaList\n" +
"print(numList is alphaList)\n" +
"print(numList == alphaList)\n" +
"```\n" +
"\n" +
"1. What does the first `print` display?\n" +
"   - A. `True`\n" +
"   - B. `False`\n" +
"2. What does the second `print` display?\n" +
"   - A. `True`\n" +
"   - B. `False`\n" +
"3. What does the third `print` display?\n" +
"   - A. `True`\n" +
"   - B. `False`\n" +
"4. What does the fourth `print` display?\n" +
"   - A. `True`\n" +
"   - B. `False`\n" +
"\n" +
"**正確答案：** (1) B; (2) B; (3) A; (4) A\n" +
"\n" +
"## 題目 18\n" +
"\n" +
"**主題：** Strings and Lists : 3-8\n" +
"\n" +
"You are writing a function to safely divide numbers.\n" +
"\n" +
"You need to ensure that the denominator and numerator are passed to the function and that the denominator is not zero.\n" +
"\n" +
"Complete the code by selecting the correct code segment.\n" +
"\n" +
"```python\n" +
"def safe_divide(numerator, denominator):\n" +
"    _(1)_\n" +
"        print(\"A required value is missing.\")\n" +
"    _(2)_\n" +
"        print(\"The denominator is zero.\")\n" +
"    else:\n" +
"        return numerator / denominator\n" +
"```\n" +
"\n" +
"1. Blank (1):\n" +
"  - A. `if numerator is None or denominator is None:`\n" +
"  - B. `if numerator is None and denominator is None:`\n" +
"  - C. `if numerator = None or denominator = None:`\n" +
"  - D. `if numerator = None and denominator = None:`\n" +
"2. Blank (2):\n" +
"  - A. `elif denominator == 0:`\n" +
"  - B. `elif denominator = 0:`\n" +
"  - C. `elif denominator != 0:`\n" +
"  - D. `elif denominator in 0:`\n" +
"\n" +
"**正確答案：** (1) A; (2) A\n" +
"\n" +
"## 題目 19\n" +
"\n" +
"**主題：** Operators : 2-10\n" +
"\n" +
"You are writing a program to calculate DVD rental charges. The pricing structure is as follows:\n" +
"\n" +
"- The default charge (cost_per_night) is $1.59 per night.\n" +
"- If a customer returns a DVD after 8 PM, one night's charge must be paid.\n" +
"- DVDs rented on Sunday receive a 30% discount for the entire rental period.\n" +
"- DVDs rented on Thursday receive a 50% discount for the entire rental period.\n" +
"\n" +
"Select the correct code segment to complete the code to meet the requirements.\n" +
"\n" +
"```python\n" +
"ontime = input(\"Was the video returned before 8 PM? Y or N\").lower()\n" +
"days_rented = int(input(\"How many days was the video rented?\"))\n" +
"weekday = input(\"What day was the video rented?\").capitalize()\n" +
"cost_per_night = 1.59\n" +
"if ontime _(1)_\n" +
"    days_rented += 1\n" +
"if weekday _(2)_\n" +
"    total = (days_rented * cost_per_night) * 0.7\n" +
"elif weekday _(3)_\n" +
"    total = (days_rented * cost_per_night) * 0.5\n" +
"else:\n" +
"    total = days_rented * cost_per_night\n" +
"print(\"Cost of the DVD rental is: $\", total)\n" +
"```\n" +
"\n" +
"1. Code for blank (1):\n" +
"   - A. `!=\"n\":`\n" +
"   - B. `==\"n\":`\n" +
"   - C. `==\"y\":`\n" +
"2. Code for blank (2):\n" +
"   - A. `==\"Sunday\":`\n" +
"   - B. `>=\"Sunday\":`\n" +
"   - C. `is \"Sunday\":`\n" +
"3. Code for blank (3):\n" +
"   - A. `==\"Thursday\":`\n" +
"   - B. `<=\"Thursday\":`\n" +
"   - C. `is \"Thursday\":`\n" +
"\n" +
"**正確答案：** (1) B; (2) A; (3) A\n" +
"\n" +
"## 題目 20\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-9\n" +
"\n" +
"You are creating a Python script to evaluate text input and check for uppercase and lowercase letters.\n" +
"\n" +
"Which four code segments should you use in sequence to develop the solution? Move the four code segments to the answer area, and arrange them in the correct order.\n" +
"\n" +
"```python\n" +
"_(1)_\n" +
"_(2)_\n" +
"_(3)_\n" +
"_(4)_\n" +
"```\n" +
"\n" +
"Choices:\n" +
"- A. \n" +
"  ```python\n" +
"name = input(\"Enter your name\")\n" +
"  ```\n" +
"- B. \n" +
"  ```python\n" +
"elif name.upper() == name:\n" +
"    print(name, \"is all upper case.\")\n" +
"  ```\n" +
"- C.\n" +
"  ```python\n" +
"else:\n" +
"    print(name, \"is mixed case.\")\n" +
"  ```\n" +
"- D.\n" +
"  ```python\n" +
"else:\n" +
"    print(name, \"is upper case.\")\n" +
"  ```\n" +
"- E.\n" +
"  ```python\n" +
"if name.lower() == name:\n" +
"    print(name, \"is all lower case.\")\n" +
"  ```\n" +
"\n" +
"1. Blank (1):\n" +
"2. Blank (2):\n" +
"3. Blank (3):\n" +
"4. Blank (4):\n" +
"\n" +
"**正確答案：** (1) A; (2) E; (3) B; (4) C\n" +
"\n" +
"## 題目 21\n" +
"\n" +
"**主題：** Input and Output : 4-11\n" +
"\n" +
"You are writing a Python program for a retail store to automate inventory tracking. Your first task is to read an inventory transaction file. The file contains the previous day's sales, including product IDs, prices, and quantities.\n" +
"An example of the file's data is shown below:\n" +
"```csv\n" +
"10, 200, 5\n" +
"20, 100, 1\n" +
"```\n" +
"\n" +
"The code must perform the following tasks:\n" +
"- Read and print each line of the file.\n" +
"- Ignore blank lines.\n" +
"- Close the file after reading all the lines.\n" +
"\n" +
"You write the following code. Which code should you write on lines 05 and 06?\n" +
"\n" +
"```python\n" +
"inventory = open(\"inventory.txt\", 'r')\n" +
"eof = False\n" +
"while eof == False:\n" +
"    line = inventory.readline()\n" +
"    _______\n" +
"        ________\n" +
"            print(line)\n" +
"    else:\n" +
"        print(\"End of file\")\n" +
"        eof = True\n" +
"        inventory.close()\n" +
"```\n" +
"\n" +
"Select the code for lines 05 and 06:\n" +
"\n" +
"- A. \n" +
"  ```python start=5\n" +
"    if line != '\\n':\n" +
"        if line != \"\"\n" +
"    ```\n" +
"- B. \n" +
"  ```python start=5\n" +
"    if line != '':\n" +
"        if line != \"\"\n" +
"    ```python\n" +
"- C.\n" +
"  ```python start=5\n" +
"    if line != '\\n':\n" +
"        if line != None:\n" +
"    ```\n" +
"- D.\n" +
"  ```python start=5\n" +
"    if line != '':\n" +
"        if line != \"\\n\":\n" +
"  ```\n" +
"\n" +
"**正確答案：** D\n" +
"\n" +
"## 題目 22\n" +
"\n" +
"**主題：** Custom Functions : 0-0\n" +
"\n" +
"You are using Python to write code for a math utility. You are writing a function to calculate roots.\n" +
"\n" +
"The function must meet the following requirements:\n" +
"\n" +
"- When `a` is nonnegative, return `a ** (1 / b)`.\n" +
"- When `a` is a negative even number, return `\"Result is an imaginary number\"`.\n" +
"- When `a` is a negative odd number, return `-(-a) ** (1 / b)`.\n" +
"\n" +
"Complete the code by selecting the correct code segment.\n" +
"\n" +
"```python\n" +
"def safe_root(a, b):\n" +
"    _(1)_\n" +
"        answer = a ** (1 / b)\n" +
"    _(2)_\n" +
"        _(3)_\n" +
"            answer = \"Result is an imaginary number\"\n" +
"        _(4)_\n" +
"            answer = -(-a) ** (1 / b)\n" +
"    return answer\n" +
"```\n" +
"\n" +
"Choices:A. `if a >= 0:`；B. `if a % 2 == 0:`；C. `else:`；D. `elif:`\n" +
"\n" +
"**正確答案：** (1) A; (2) C; (3) B; (4) C\n" +
"\n" +
"## 題目 23\n" +
"\n" +
"**主題：** Operators : 2-9\n" +
"\n" +
"You are writing a Python application with multiple operations on the same line. Determine the order of operations, from first to last.\n" +
"\n" +
"Available choices:\n" +
"A. Addition and subtraction `+, -`\n" +
"B. Multiplication and division `*, /, //, %`\n" +
"C. Unary positive `+`, negative `-`, and bitwise inversion `~`\n" +
"D. Parentheses `()`\n" +
"E. Exponentiation `**`\n" +
"F. Logical AND `and`\n" +
"\n" +
"1. First operation type\n" +
"2. Second operation type\n" +
"3. Third operation type\n" +
"4. Fourth operation type\n" +
"5. Fifth operation type\n" +
"6. Sixth operation type\n" +
"\n" +
"> Proofreading note: Here, \"not\" refers to unary bitwise inversion `~`, not logical `not`.\n" +
"\n" +
"**正確答案：** (1) D; (2) E; (3) C; (4) B; (5) A; (6) F\n" +
"\n" +
"## 題目 24\n" +
"\n" +
"**主題：** Custom Functions : 6-10\n" +
"\n" +
"You develop a Python application for your company.\n" +
"\n" +
"You want to add notes to your code so that other team members can understand it.\n" +
"\n" +
"Which of the following actions should you take?\n" +
"\n" +
"- A. Place notes after `//` on any line.\n" +
"- B. Place notes between `/*` and `*/` in any code segment.\n" +
"- C. Place notes after `#` on any line.\n" +
"- D. Place notes between `<!--` and `-->` in any code segment.\n" +
"\n" +
"**正確答案：** C\n" +
"\n" +
"## 題目 25\n" +
"\n" +
"**主題：** Custom Functions : 6-2\n" +
"\n" +
"You create the following Python function to calculate powers of numbers. Line numbers are included for reference only.\n" +
"\n" +
"```python\n" +
"# The calc_power function calculates exponents\n" +
"# x is the base\n" +
"# y is the exponent\n" +
"# The value of x raised to the y power is returned\n" +
"def calc_power(x, y):\n" +
"    comment = \"# Return the value\"\n" +
"    return x ** y  # raise x to the y power\n" +
"```\n" +
"\n" +
"Evaluate the following statements:\n" +
"\n" +
"1. Python does not check the syntax of lines 01 through 04.\n" +
"2. The hash signs `#` on lines 02 and 03 are optional.\n" +
"3. The string on line 06 will be interpreted as a comment.\n" +
"4. Line 07 contains an inline comment.\n" +
"\n" +
"The choices for each item are: A. True; B. False\n" +
"\n" +
"**正確答案：** (1) A; (2) B; (3) B; (4) A\n" +
"\n" +
"## 題目 26\n" +
"\n" +
"**主題：** Operators : 2-15\n" +
"\n" +
"A friend asks you to refactor and document the following Python code:\n" +
"\n" +
"```python\n" +
"value1 = 9\n" +
"value2 = 4\n" +
"answer = (value1 % value2 * 10) // 2.0 ** 3.0 + value2\n" +
"```\n" +
"\n" +
"You run the code.\n" +
"What is the result?\n" +
"\n" +
"- A. The value 129 is displayed.\n" +
"- B. A syntax error occurs.\n" +
"- C. The value 5.667 is displayed.\n" +
"- D. The value 5.0 is displayed.\n" +
"\n" +
"**正確答案：** D\n" +
"\n" +
"## 題目 27\n" +
"\n" +
"**主題：** Operators : 2-14\n" +
"\n" +
"You are writing a Python program to evaluate an arithmetic formula.\n" +
"\n" +
"The formula states that `b` equals `a` multiplied by negative one and then squared. Here, `a` is the grade to be entered, and `b` is the result.\n" +
"\n" +
"The code segment you create is shown below. Line numbers are included for reference only.\n" +
"\n" +
"You need to ensure that the result is correct.\n" +
"\n" +
"Select the appropriate code segments for positions (1) through (6) to complete the code on line 02. Each code segment may be used once, more than once, or not at all.\n" +
"\n" +
"Note: You will receive partial credit for each correct code placement.\n" +
"\n" +
"```python\n" +
"a = eval(input(\"Enter a number for the question:\"))\n" +
"b = _(1)__(2)__(3)__(4)__(5)__(6)_\n" +
"```\n" +
"\n" +
"Choices:A. `-`；B. `(`；C. `)`；D. `**`；E. `**2`；F. `2`；G. `a`\n" +
"\n" +
"1. Blank (1):\n" +
"2. Blank (2):\n" +
"3. Blank (3):\n" +
"4. Blank (4):\n" +
"5. Blank (5):\n" +
"6. Blank (6):\n" +
"\n" +
"**正確答案：** (1) B; (2) A; (3) G; (4) C; (5) D; (6) F\n" +
"\n" +
"## 題目 28\n" +
"\n" +
"**主題：** Operators : 2-1\n" +
"\n" +
"A bank must generate a report that shows the daily average for all customers. The report must truncate the fractional part of the balance.\n" +
"\n" +
"Which two code segments can accomplish the goal?\n" +
"\n" +
"- A. `average_blance = int(total_deposits / number_of_customers)`\n" +
"- B. `average_blance = total_deposits // number_of_customers`\n" +
"- C. `average_blance = total_deposits ** number_of_customers`\n" +
"- D. `average_blance = float(total_deposits // number_of_customers)`\n" +
"\n" +
"**正確答案：** A, B\n" +
"\n" +
"## 題目 29\n" +
"\n" +
"**主題：** Custom Functions : 6-1\n" +
"\n" +
"A bank wants to migrate its legacy banking transaction code to Python.\n" +
"\n" +
"The bank hires you to document the migrated code.\n" +
"\n" +
"Which documentation syntax is correct?\n" +
"\n" +
"- A.\n" +
"  ```python\n" +
"  def get_balance():\n" +
"  /* Returns the current balance of the bank account */\n" +
"  return balance\n" +
"  ```\n" +
"- B.\n" +
"  ```python\n" +
"  // Returns the current balance of the bank account\n" +
"  def get_balance():\n" +
"      return balance\n" +
"  ```\n" +
"- C.\n" +
"  ```python\n" +
"  ' Returns the current balance of the bank account\n" +
"  def get_balance():\n" +
"      return balance\n" +
"  ```\n" +
"- D.\n" +
"  ```python\n" +
"  def get_balance():\n" +
"      # Returns the current balance of the bank account\n" +
"      return balance\n" +
"  ```\n" +
"\n" +
"**正確答案：** D\n" +
"\n" +
"## 題目 30\n" +
"\n" +
"**主題：** Custom Functions : 6-7\n" +
"\n" +
"Select the correct options to answer the questions about documenting Python code.\n" +
"\n" +
"1. Which characters mark the beginning and end of a single-line docstring?\n" +
"   - A. Single quotation marks `'`\n" +
"   - B. Double quotation marks `\"`\n" +
"   - C. Two double quotation marks `\"\"`\n" +
"   - D. Three double quotation marks `\"\"\"`\n" +
"2. When documenting a function, where is the standard location for the docstring?\n" +
"   - A. Before the function declaration block\n" +
"   - B. Immediately after the function header\n" +
"   - C. After the function declaration block\n" +
"   - D. At the end of the program\n" +
"3. Review the following function. Which command prints the docstring?\n" +
"\n" +
"   ```python\n" +
"   def cube(n):\n" +
"       \"\"\"Returns the cube of number n\"\"\"\n" +
"       return n * n * n\n" +
"   ```\n" +
"\n" +
"   - A. `print(__doc__)`\n" +
"   - B. `print(cube(doc))`\n" +
"   - C. `print(cube.__doc__)`\n" +
"   - D. `print(cube(docstring))`\n" +
"\n" +
"**正確答案：** (1) D; (2) B; (3) C\n" +
"\n" +
"## 題目 31\n" +
"\n" +
"**主題：** Operators : 2-7\n" +
"\n" +
"You write the following code:\n" +
"\n" +
"```python\n" +
"a = 'Config1'\n" +
"print(a)\n" +
"b = a\n" +
"a += 'Config2'\n" +
"print(a)\n" +
"print(b)\n" +
"```\n" +
"\n" +
"What is the output of the second and third `print` statements?\n" +
"\n" +
"1. What does the second `print` display?\n" +
"- A. `Config1`\n" +
"- B. `Config1Config2`\n" +
"- C. `Config2`\n" +
"- D. `Config2Config1`\n" +
"2. What does the third `print` display?\n" +
"- A. `Config1`\n" +
"- B. `Config1Config2`\n" +
"- C. `Config2`\n" +
"- D. `Config2Config1`\n" +
"\n" +
"**正確答案：** (1) B; (2) A\n" +
"\n" +
"## 題目 32\n" +
"\n" +
"**主題：** Strings and Lists : 3-1\n" +
"\n" +
"You write the following code.\n" +
"\n" +
"You run the code. What is the output value?\n" +
"\n" +
"```python\n" +
"list_1 = [1, 2]\n" +
"list_2 = [3, 4]\n" +
"list_3 = list_1 + list_2\n" +
"list_4 = list_3 * 3\n" +
"print(list_4)\n" +
"```\n" +
"\n" +
"- A. `[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4,]`\n" +
"- B. `[[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]`\n" +
"- C. `[3, 6, 9, 12]`\n" +
"- D. `[[1, 2], [3, 4], [1, 2], [3, 4], [1, 2], [3, 4]]`\n" +
"\n" +
"**正確答案：** A\n" +
"\n" +
"## 題目 33\n" +
"\n" +
"**主題：** Input and Output : 4-4\n" +
"\n" +
"Review the following code:\n" +
"\n" +
"```python\n" +
"x = \"oranges\"\n" +
"y = \"apples\"\n" +
"z = \"bananas\"\n" +
"data = \"{1} and {0} and {2}\"\n" +
"print(data.format(z, y, x))\n" +
"```\n" +
"\n" +
"What is the output of the `print` statement?\n" +
"\n" +
"- A. `bananas and oranges and apples`\n" +
"- B. `apples and bananas and oranges`\n" +
"- C. `apples and oranges and bananas`\n" +
"- D. `orages and apples and bananas`\n" +
"\n" +
"**正確答案：** B\n" +
"\n" +
"## 題目 34\n" +
"\n" +
"**主題：** Strings and Lists : 3-5\n" +
"\n" +
"DRAG DROP\n" +
"\n" +
"You need to identify the results of performing various slicing operations on the following sequence structure:\n" +
"\n" +
"```python\n" +
"alph = \"abcdefghijklmnopqrstuvwxyz\"\n" +
"```\n" +
"\n" +
"Move the appropriate results from the list on the left to the correct slicing operations on the right. You may use each result once, more than once, or not at all.\n" +
"Note: You will receive partial credit for each correct match.\n" +
"\n" +
"### Results\n" +
"\n" +
"- A. `def`\n" +
"- B. `abcdef`\n" +
"- C. `cde`\n" +
"- D. `defg`\n" +
"- E. `cdef`\n" +
"- F. `abcde`\n" +
"\n" +
"### Answer Area\n" +
"\n" +
"1. `alph[3:6]`\n" +
"2. `alph[:6]`\n" +
"\n" +
"**正確答案：** (1) A; (2) B\n" +
"\n" +
"## 題目 35\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-23\n" +
"\n" +
"A company asks you to debug some code that is causing payroll problems. They ask you to identify the source of the payroll errors.\n" +
"\n" +
"The declared variables are as follows:\n" +
"\n" +
"```python\n" +
"employee_pay = [15000, 120000, 35000, 45000]\n" +
"count = 0\n" +
"sum = 0\n" +
"```\n" +
"\n" +
"The following code contains two errors:\n" +
"\n" +
"```python\n" +
"for index in range(0, len(employee_pay)-1)):\n" +
"    count += 1\n" +
"    sum += employee_pay[index]\n" +
"average = sum // count\n" +
"print(\"The total payroll is:\", sum)\n" +
"```\n" +
"Which code should you use to correct the errors? Select the appropriate code segments.\n" +
"\n" +
"1. `for index in range ______:`\n" +
"  - A. `size(employee_pay)`\n" +
"  - B. `size(employee_pay)-1`\n" +
"  - C. `len(employee_pay)+1`\n" +
"  - D. `len(employee_pay)`\n" +
"2. `average = ______`\n" +
"  - A. `sum / count`\n" +
"  - B. `sum ** count`\n" +
"  - C. `sum * count`\n" +
"\n" +
"**正確答案：** (1) D; (2) A\n" +
"\n" +
"## 題目 36\n" +
"\n" +
"**主題：** Strings and Lists : 3-10\n" +
"\n" +
"You develop a Python application for your company.\n" +
"\n" +
"A list named `employees` contains 200 employee names. The last five employees are company management. You need to filter the list to display all employees except management.\n" +
"\n" +
"Which two code segments should you use? Each correct answer presents a complete solution. (Choose two.)\n" +
"\n" +
"- A. `employees[1:-5]`\n" +
"- B. `employees[1:-4]`\n" +
"- C. `employees[0:-4]`\n" +
"- D. `employees[:-5]`\n" +
"- E. `employees[0:-5]`\n" +
"\n" +
"**正確答案：** D, E\n" +
"\n" +
"## 題目 37\n" +
"\n" +
"**主題：** Strings and Lists : 3-5\n" +
"\n" +
"You need to identify the results of performing various slicing operations on the following sequence structure:\n" +
"\n" +
"`alph = \"abcdefghijklmnopqrstuvwxyz\"`\n" +
"\n" +
"Match the choices to the correct slicing operations. Each result may be used once, more than once, or not at all.\n" +
"\n" +
"\n" +
"```python\n" +
"alph = \"abcdefghijklmnopqrstuvwxyz\"\n" +
"```\n" +
"\n" +
"Choices:A. `defghijklmno`；B. `pmjg`；C. `defghijklmnop`；D. `ponmlkjihgfe`；E. `dgjm`；F. `zwtqnkheb`\n" +
"\n" +
"Match the choices to the following four items:\n" +
"\n" +
"1. `alph[3:15]`\n" +
"2. `alph[3:15:3]`\n" +
"3. `alph[15:3:-3]`\n" +
"4. `alph[::-3]`\n" +
"\n" +
"**正確答案：** (1) A; (2) E; (3) B; (4) F\n" +
"\n" +
"## 題目 38\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-20\n" +
"\n" +
"HOTSPOT\n" +
"\n" +
"You are writing code to meet the following requirements:\n" +
"\n" +
"- Allow users to repeatedly enter words.\n" +
"- Output the number of characters in each word\n" +
"\n" +
"Complete the code by selecting the correct option from each drop-down list.\n" +
"\n" +
"Note: You will receive partial credit for each correct selection.\n" +
"\n" +
"```python\n" +
"x = \"Hello\"\n" +
"_(1)_ x != \"QUIT\":\n" +
"    num = 0\n" +
"    _(2)_ char _(3)_ x:\n" +
"        num += 1\n" +
"    print(num)\n" +
"    x = input(\"Enter a new word or QUIT to exit: \")\n" +
"```\n" +
"\n" +
"1. `_(1)_`\n" +
"\n" +
"   - A. `for`\n" +
"   - B. `if`\n" +
"   - C. `while`\n" +
"\n" +
"2. `_(2)_`\n" +
"\n" +
"   - A. `for`\n" +
"   - B. `if`\n" +
"   - C. `while`\n" +
"\n" +
"3. `_(3)_`\n" +
"\n" +
"   - A. `and`\n" +
"   - B. `or`\n" +
"   - C. `in`\n" +
"   - D. `not`\n" +
"\n" +
"**正確答案：** (1) C; (2) A; (3) C\n" +
"\n" +
"## 題目 39\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-12\n" +
"\n" +
"You are building a Python program to display all prime numbers from 2 to 100. A prime number is divisible only by itself and 1.\n" +
"\n" +
"Choose code segments to fill blanks (1) through (4). Each segment may be used once, more than once, or not at all.\n" +
"\n" +
"```python\n" +
"_(1)_\n" +
"    _(2)_\n" +
"        _(3)_\n" +
"    if is_prime == True:\n" +
"        print(p)\n" +
"    _(4)_\n" +
"```\n" +
"\n" +
"Code segments:\n" +
"- A. \n" +
"  ```python\n" +
"p = 2\n" +
"is_prime = True\n" +
"while p <= 100:\n" +
"  ```\n" +
"- B. \n" +
"  ```python\n" +
"p = 2\n" +
"while p <= 100:\n" +
"    is_prime = True\n" +
"  ```\n" +
"- C. \n" +
"  ```python\n" +
"            break\n" +
"  ```\n" +
"- D.\n" +
"  ```python\n" +
"            continue\n" +
"  ```\n" +
"- E.\n" +
"  ```python\n" +
"    p = p + 1\n" +
"  ```\n" +
"- F.\n" +
"  ```python\n" +
"    for i in range(2,p):\n" +
"        if p/i==0:\n" +
"            is_prime=False\n" +
"  ```\n" +
"- G.\n" +
"  ```python\n" +
"    for i in range(2,p):\n" +
"        if p%i==0:\n" +
"            is_prime=False\n" +
"  ```\n" +
"\n" +
"1. Blank (1):\n" +
"2. Blank (2):\n" +
"3. Blank (3):\n" +
"4. Blank (4):\n" +
"\n" +
"**正確答案：** (1) B; (2) G; (3) C; (4) E\n" +
"\n" +
"## 題目 40\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-8\n" +
"\n" +
"You are creating a Python program that lets users guess a number from 1 to 10. It must allow up to three guesses and stop asking when the user guesses correctly.\n" +
"\n" +
"Complete blanks (1) through (3) on lines 05, 13, and 14. Line numbers are for reference only. Each code segment may be used once, more than once, or not at all.\n" +
"\n" +
"```python\n" +
"from random import randint\n" +
"target = randint(1, 10)\n" +
"chance = 1\n" +
"print(\"Guess an integer from 1 to 10. You will have 3 chances. \")\n" +
"_(1)_\n" +
"    guess = int(input(\"Guess an integer: \"))\n" +
"    if guess > target:\n" +
"        print(\"Guess is too high\")\n" +
"    elif guess < target:\n" +
"        print(\"Guess is too low\")\n" +
"    else:\n" +
"        print(\"Guess is just right!\")\n" +
"        _(2)_\n" +
"    _(3)_\n" +
"```\n" +
"\n" +
"Code segments:\n" +
"   - A. `break`\n" +
"   - B. `chance += 1`\n" +
"   - C. `chance = 2`\n" +
"   - D. `pass`\n" +
"   - E. `while chance < 3`\n" +
"   - F. `while chance < 3:`\n" +
"   - G. `while chance <= 3:`\n" +
"\n" +
"1. Blank (1), line 05:\n" +
"2. Blank (2), line 13:\n" +
"3. Blank (3), line 14:\n" +
"\n" +
"**正確答案：** (1) G; (2) A; (3) B\n" +
"\n" +
"## 題目 41\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 0-0\n" +
"\n" +
"Review the following code segment:\n" +
"\n" +
"How many lines of output will this code print?\n" +
"\n" +
"```python\n" +
"product = 2\n" +
"n = 5\n" +
"while (n != 0):\n" +
"    product *= n\n" +
"    print(product)\n" +
"    n -= 1\n" +
"    if n == 3:\n" +
"        break\n" +
"```\n" +
"\n" +
"How many lines of output will this code print?\n" +
"\n" +
"Choices:A. `1`；B. `2`；C. `3`；D. `4`\n" +
"\n" +
"**正確答案：** B\n" +
"\n" +
"## 題目 42\n" +
"\n" +
"**主題：** Custom Functions : 6-13\n" +
"\n" +
"HOTSPOT\n" +
"\n" +
"A game development company needs a way to find the number of words in a list that contain a specific letter.\n" +
"\n" +
"Complete the code by selecting the correct code segment from each drop-down list.\n" +
"\n" +
"Note: You will receive partial credit for each correct selection.\n" +
"\n" +
"```python\n" +
"# Function accepts list of words and letter to search for.\n" +
"# Returns count of the number of words that contain that letter.\n" +
"def count_letter(letter, word_list):\n" +
"    count = 0\n" +
"    for _(1)_\n" +
"        if _(2)_\n" +
"            count += 1\n" +
"    return count\n" +
"\n" +
"# word_list is populated by the readWords() function. Code not shown.\n" +
"word_list = readWords()\n" +
"\n" +
"letter = input(\"Which letter would you like to count\")\n" +
"letter_count = count_letter(letter, word_list)\n" +
"print(\"There are: \", letter_count, \" words that contain \", letter)\n" +
"```\n" +
"\n" +
"1. `_(1)_`\n" +
"\n" +
"   - A. `word_list in word:`\n" +
"   - B. `word in word_list:`\n" +
"   - C. `word == word_list:`\n" +
"   - D. `word is word_list:`\n" +
"\n" +
"2. `_(2)_`\n" +
"\n" +
"   - A. `word is letter:`\n" +
"   - B. `letter is word:`\n" +
"   - C. `word in letter:`\n" +
"   - D. `letter in word:`\n" +
"\n" +
"**正確答案：** (1) B; (2) D\n" +
"\n" +
"## 題目 43\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-21\n" +
"\n" +
"You find errors while evaluating the following code. Line numbers are included for reference only.\n" +
"\n" +
"You must correct the code on lines 03 and 06.\n" +
"\n" +
"Evaluate the code, and select the correct options to answer the questions.\n" +
"\n" +
"```python\n" +
"numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n" +
"index = 0\n" +
"while (index < 10)\n" +
"    print(numbers[index])\n" +
"\n" +
"    if numbers(index)==6\n" +
"        break\n" +
"    else:\n" +
"        index += 1\n" +
"```\n" +
"\n" +
"1. Which code segment should replace line 03?\n" +
"   - A. `while (index < 10):`\n" +
"   - B. `while [index < 10]`\n" +
"   - C. `while (index < 5):`\n" +
"   - D. `while [index < 5]`\n" +
"2. Which code segment should replace line 06?\n" +
"   - A. `if numbers[index] == 6`\n" +
"   - B. `if numbers[index] == 6:`\n" +
"   - C. `if numbers(index) = 6:`\n" +
"   - D. `if numbers(index) != 6`\n" +
"\n" +
"**正確答案：** (1) A; (2) B\n" +
"\n" +
"## 題目 44\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-11\n" +
"\n" +
"You are creating an interactive multiplication-table helper program for elementary school children.\n" +
"\n" +
"You need to complete a function named `times_tables` to calculate and display all multiplication-table combinations from 2 to 12, as shown below:\n" +
"```\n" +
"4 6 8 10 12 14 16 18 20 22 24 \n" +
"6 9 12 15 18 21 24 27 30 33 36 \n" +
"8 12 16 20 24 28 32 36 40 44 48 \n" +
"10 15 20 25 30 35 40 45 50 55 60 \n" +
"12 18 24 30 36 42 48 54 60 66 72 \n" +
"14 21 28 35 42 49 56 63 70 77 84 \n" +
"16 24 32 40 48 56 64 72 80 88 96 \n" +
"18 27 36 45 54 63 72 81 90 99 108 \n" +
"20 30 40 50 60 70 80 90 100 110 120 \n" +
"22 33 44 55 66 77 88 99 110 121 132 \n" +
"24 36 48 60 72 84 96 108 120 132 144\n" +
"```\n" +
"\n" +
"```python\n" +
"# Displays time tables 2 - 12\n" +
"def times_tables():\n" +
"    _(1)_\n" +
"        _(2)_\n" +
"            print(row * col, end = \" \")\n" +
"        print()\n" +
"\n" +
"# main\n" +
"times_tables()\n" +
"```\n" +
"\n" +
"1. Code for blank (1):\n" +
"  - A. `for col in range(13):`\n" +
"  - B. `for col in range(2, 13):`\n" +
"  - C. `for col in range(2, 12, 1):`\n" +
"  - D. `for col in range(12):`\n" +
"2. Code for blank (2):\n" +
"  - A. `for row in range(13):`\n" +
"  - B. `for row in range(2, 12, 1):`\n" +
"  - C. `for row in range(2, 13):`\n" +
"  - D. `for row in range(12):`\n" +
"\n" +
"**正確答案：** (1) B; (2) C\n" +
"\n" +
"## 題目 45\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-21\n" +
"\n" +
"You are developing a Python program for an online product distribution company.\n" +
"\n" +
"The program must iterate through the product list (`productIdList`) and exit when a specific product ID is found.\n" +
"\n" +
"```python\n" +
"productIdList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n" +
"index = 0\n" +
"_(1)_ (index < 10):\n" +
"    print(productIdList[index])\n" +
"    if productIdList[index] == 6:\n" +
"        _(2)_\n" +
"    else:\n" +
"        _(3)_\n" +
"```\n" +
"\n" +
"1. Blank (1):\n" +
"   - A. `while`\n" +
"   - B. `for`\n" +
"   - C. `if`\n" +
"   - D. `break`\n" +
"2. Blank (2):\n" +
"   - A. `while`\n" +
"   - B. `for`\n" +
"   - C. `if`\n" +
"   - D. `break`\n" +
"3. Blank (3):\n" +
"   - A. `continue`\n" +
"   - B. `break`\n" +
"   - C. `index += 1`\n" +
"   - D. `index = 1`\n" +
"\n" +
"**正確答案：** (1) A; (2) D; (3) C\n" +
"\n" +
"## 題目 46\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-16\n" +
"\n" +
"You are writing code to create the letter E using asterisks. You need to print five lines of code, with four asterisks each on the first, third, and fifth lines, and one asterisk each on the second and fourth lines, as shown below.\n" +
"\n" +
"Enter the correct numbers in the boxes to complete the code. Enter each integer.\n" +
"\n" +
"```text\n" +
"****\n" +
"*\n" +
"****\n" +
"*\n" +
"****\n" +
"```\n" +
"\n" +
"```python\n" +
"result_str = \"\"\n" +
"for row in range(1, _(1)_):\n" +
"    for column in range(1, _(2)_):\n" +
"        if (row == 1 or row == 3 or row == 5):\n" +
"            result_str = result_str + \"*\"\n" +
"        elif column == 1:\n" +
"            result_str = result_str + \"*\"\n" +
"    result_str = result_str + \"\\n\"\n" +
"print(result_str)\n" +
"```\n" +
"\n" +
"Choices:\n" +
"\n" +
"1. Blank (1):\n" +
"   - A. `1`\n" +
"   - B. `5`\n" +
"   - C. `6`\n" +
"   - D. `0`\n" +
"2. Blank (2):\n" +
"   - A. `1`\n" +
"   - B. `4`\n" +
"   - C. `5`\n" +
"   - D. `6`\n" +
"\n" +
"**正確答案：** (1) C; (2) C\n" +
"\n" +
"## 題目 47\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-10\n" +
"\n" +
"A company decides to give bonuses to all employees who earn less than $150,000 per year. The following formula, based on base salary and a fixed bonus, is applied to each employee:\n" +
"\n" +
"New salary = current salary × 103% + a $500 bonus.\n" +
"\n" +
"You write code to read employee salaries into a variable named `salary_list`.\n" +
"\n" +
"You need to complete the code that applies the salary increase formula to each eligible employee's salary.\n" +
"\n" +
"Complete the code by selecting the correct code segment.\n" +
"\n" +
"```python\n" +
"#Each salary in the list is updated based on increase. Employees making \n" +
"#$150,000 or more will not get a raise. \n" +
"#Salary list is populated from employee database, code not shown. \n" +
"_(1)_\n" +
"    if salary_list[index] >= 150000:\n" +
"        _(2)_\n" +
"    salary_list[index] = (salary_list[index] * 1.03) + 500\n" +
"```\n" +
"\n" +
"1. Blank (1):\n" +
"  - A. `for index in range(len(salary_list) + 1):`\n" +
"  - B. `for index in range(len(salary_list) - 1):`\n" +
"  - C. `for index in range(len(salary_list)):`\n" +
"  - D. `for index in salary_list:`\n" +
"2. Blank (2):\n" +
"   - A. `exit()`\n" +
"   - B. `continue`\n" +
"   - C. `break`\n" +
"   - D. `end`\n" +
"\n" +
"**正確答案：** (1) C; (2) B\n" +
"\n" +
"## 題目 48\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-21\n" +
"\n" +
"You must complete the code on lines 03 and 05.\n" +
"\n" +
"Evaluate the code, and select the correct options to answer the questions.\n" +
"\n" +
"\n" +
"```python\n" +
"numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n" +
"index = 0\n" +
"_(1)_\n" +
"    print(numbers[index])\n" +
"    _(2)_\n" +
"        break\n" +
"    else:\n" +
"        index += 1\n" +
"```\n" +
"\n" +
"1. Which code segment should be used for blank (1) on line 03?\n" +
"   - A. `while index < 10:`\n" +
"   - B. `while [index < 10]`\n" +
"   - C. `while (index < 5)`\n" +
"   - D. `while [index < 5]`\n" +
"2. Which code segment should be used for blank (2) on line 05?\n" +
"   - A. `if numbers[index] == 6`\n" +
"   - B. `if numbers[index] == 6:`\n" +
"   - C. `if numbers(index) = 6:`\n" +
"   - D. `if numbers(index) != 6`\n" +
"\n" +
"**正確答案：** (1) A; (2) B\n" +
"\n" +
"## 題目 49\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-21\n" +
"\n" +
"You are developing a Python program for an online product distribution company.\n" +
"\n" +
"The program must iterate through the product list (`productIdList`) and exit when a specific product ID is found.\n" +
"\n" +
"```python\n" +
"productIdList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n" +
"index = 0\n" +
"_(1)_ (index < 10):\n" +
"    print(productIdList[index])\n" +
"    if productIdList[index] == 6:\n" +
"        _(2)_\n" +
"    else:\n" +
"        _(3)_\n" +
"```\n" +
"\n" +
"1. Blank (1):\n" +
"   - A. `while`\n" +
"   - B. `for`\n" +
"   - C. `if`\n" +
"   - D. `break`\n" +
"2. Blank (2):\n" +
"   - A. `while`\n" +
"   - B. `for`\n" +
"   - C. `if`\n" +
"   - D. `break`\n" +
"3. Blank (3):\n" +
"   - A. `continue`\n" +
"   - B. `break`\n" +
"   - C. `index += 1`\n" +
"   - D. `index = 1`\n" +
"\n" +
"**正確答案：** (1) A; (2) D; (3) C\n" +
"\n" +
"## 題目 50\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-14\n" +
"\n" +
"You are writing a Python program to validate employee IDs.\n" +
"\n" +
"The ID must have the format `ddd-dd-dddd` and contain only digits and hyphens. If the format is correct, the program must print `True`; if the format is incorrect, it must print `False`.\n" +
"\n" +
"```python\n" +
"_(1)_\n" +
"parts = \"\"\n" +
"_(2)_\n" +
"_(3)_\n" +
"  employee_number = input(\"Enter employee number (ddd-dd-dddd): \")\n" +
"  parts = employee_number.split('-')\n" +
"  if len(parts) == 3:\n" +
"    if len(parts[0]) == 3 and len(parts[1]) == 2 and len(parts[2]) == 4:\n" +
"      if parts[0].isdigit() and parts[1].isdigit() and parts[2].isdigit():\n" +
"        _(4)_\n" +
"  print(valid)\n" +
"```\n" +
"\n" +
"1. Blank (1):\n" +
"   - A. `employee_number = \"\"`\n" +
"   - B. `employee_number = \"123\"`\n" +
"2. Blank (2):\n" +
"   - A. `while employee_number != \"\"`\n" +
"   - B. `while employee_number != \"123\"`\n" +
"3. Blank (3):\n" +
"   - A. `valid = False`\n" +
"   - B. `valid = True`\n" +
"4. Blank (4):\n" +
"   - A. `valid = False`\n" +
"   - B. `valid = True`\n" +
"\n" +
"**正確答案：** (1) A; (2) B; (3) A; (4) B\n" +
"\n" +
"## 題目 51\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 5-13\n" +
"\n" +
"You are writing a Python function that must perform the following tasks:\n" +
"\n" +
"- Accept a list and a string as arguments.\n" +
"- Search for the string in the list.\n" +
"- If the string exists in the list, print a message indicating that the string was found, and then stop iterating through the list.\n" +
"- If the string is not in the list, print a message indicating that the string was not found.\n" +
"\n" +
"In what order should you arrange the code segments to complete the function?\n" +
"\n" +
"```python\n" +
"_(1)_\n" +
"    _(2)_\n" +
"        _(3)_\n" +
"            _(4)_\n" +
"    _(5)_\n" +
"        _(6)_\n" +
"```\n" +
"\n" +
"Choices:\n" +
"- A. \n" +
"  ```\n" +
"    for i in range(len(items)):\n" +
"  ```\n" +
"- B. \n" +
"  ```\n" +
"        if items[i] == term:\n" +
"            print(\"{0} was found in the list.\".format(term))\n" +
"  ```\n" +
"- C. \n" +
"  ```\n" +
"    else:\n" +
"  ```\n" +
"- D. \n" +
"  ```\n" +
"        print(\"{0} was not found in the list.\".format(term))\n" +
"  ```\n" +
"- E. \n" +
"  ```\n" +
"            break\n" +
"  ```\n" +
"- F. \n" +
"  ```\n" +
"def search(items, term):\n" +
"  ```\n" +
"  \n" +
"1. Code for blank (1):\n" +
"2. Code for blank (2):\n" +
"3. Code for blank (3):\n" +
"4. Code for blank (4):\n" +
"5. Code for blank (5):\n" +
"6. Code for blank (6):\n" +
"\n" +
"**正確答案：** (1) F; (2) A; (3) B; (4) E; (5) C; (6) D\n" +
"\n" +
"## 題目 52\n" +
"\n" +
"**主題：** Error Handling and Unit Testing : 8-1\n" +
"\n" +
"For each statement about the `try` statement, select True or False.\n" +
"\n" +
"1. A `try` statement can contain one or more `except` clauses.\n" +
"2. A `try` statement can contain a `finally` clause without an `except` clause.\n" +
"3. A `try` statement can contain a `finally` clause and an `except` clause.\n" +
"4. A `try` statement can contain one or more `finally` clauses.\n" +
"\n" +
"The choices for each item are: A. True; B. False\n" +
"\n" +
"\n" +
"\n" +
"> Proofreading note: The official answer to item 2 is \"**False**\". Choose B when answering.\n" +
"\n" +
"**正確答案：** (1) A; (2) B; (3) A; (4) B\n" +
"\n" +
"## 題目 53\n" +
"\n" +
"**主題：** Modules : 7-10\n" +
"\n" +
"A company needs help updating its file system. You must create a simple file-manipulation program that performs the following actions:\n" +
"\n" +
"- Create a file using the specified name.\n" +
"- Append the phrase `End of listing` to the file.\n" +
"\n" +
"You need to complete the code to meet the requirements.\n" +
"\n" +
"Complete the code by selecting the correct code segment.\n" +
"\n" +
"```python\n" +
"import os\n" +
"file = _(1)_\n" +
"    _(2)_(\"End of listing\")\n" +
"file.close()\n" +
"```\n" +
"\n" +
"1. Code for blank (1):\n" +
"  - A. `open('myFile.txt', 'a')`\n" +
"  - B. `open('myFile.txt', 'r')`\n" +
"  - C. `open('myFile.txt', 'w')`\n" +
"2. Code for blank (2):\n" +
"  - A. `append`\n" +
"  - B. `file.add`\n" +
"  - C. `file.write`\n" +
"  - D. `write`\n" +
"\n" +
"**正確答案：** (1) A; (2) C\n" +
"\n" +
"## 題目 54\n" +
"\n" +
"**主題：** Modules : 7-9\n" +
"\n" +
"HOTSPOT\n" +
"\n" +
"A company needs help updating their file system. You must create a simple file-manipulation program that performs the following actions:\n" +
"\n" +
"- Checks to see whether a file exists.\n" +
"- If the file exists, displays its contents.\n" +
"\n" +
"Complete the code by selecting the correct code segment from each drop-down list.\n" +
"\n" +
"Note: You will receive partial credit for each correct selection.\n" +
"\n" +
"```python\n" +
"import os\n" +
"if _(1)_\n" +
"    file = open('myFile.txt')\n" +
"    _(2)_\n" +
"    file.close()\n" +
"```\n" +
"\n" +
"1. `_(1)_`\n" +
"\n" +
"   - A. `isfile('myFile.txt'):`\n" +
"   - B. `os.exist('myFile.txt'):`\n" +
"   - C. `os.find('myFile.txt'):`\n" +
"   - D. `os.path.isfile('myFile.txt'):`\n" +
"\n" +
"2. `_(2)_`\n" +
"\n" +
"   - A. `output('myFile.txt')`\n" +
"   - B. `print(file.get('myFile.txt'))`\n" +
"   - C. `print(file.read())`\n" +
"   - D. `print('myFile.txt')`\n" +
"\n" +
"**正確答案：** (1) D; (2) C\n" +
"\n" +
"## 題目 55\n" +
"\n" +
"**主題：** Modules : 7-2\n" +
"\n" +
"You write the following function to read a data file and print each line of the file. Line numbers are included for reference only.\n" +
"\n" +
"When you run the program, you receive an error on line 03.\n" +
"\n" +
"What causes this error?\n" +
"\n" +
"```python\n" +
"def read_file(file):\n" +
"    line = None\n" +
"    if os.path.isfile(file):\n" +
"        data = open(file, 'r')\n" +
"        for line in data:\n" +
"            print(line)\n" +
"```\n" +
"\n" +
"An error occurs on line 03 when the program runs. What is the cause?\n" +
"\n" +
"- A. The `path` method does not exist in the `os` object.\n" +
"- B. The `isfile` method does not accept a single argument.\n" +
"- C. The `isfile` method does not exist in the `path` object.\n" +
"- D. You need to import the `os` library.\n" +
"\n" +
"**正確答案：** D\n" +
"\n" +
"## 題目 56\n" +
"\n" +
"**主題：** Modules : 7-10\n" +
"\n" +
"HOTSPOT\n" +
"\n" +
"Review the following code segment:\n" +
"\n" +
"```python\n" +
"f = open(\"python.txt\", \"a\")\n" +
"f.write(\"This is a line of text. \")\n" +
"f.close()\n" +
"```\n" +
"\n" +
"For each statement about the code segment, select True or False.\n" +
"\n" +
"Choices: A. True; B. False\n" +
"\n" +
"1. A file named python.txt is created if it does not exist.\n" +
"2. The data in the file will be overwritten.\n" +
"3. Other code can open the file after this code runs.\n" +
"\n" +
"**正確答案：** (1) A; (2) B; (3) A\n" +
"\n" +
"## 題目 57\n" +
"\n" +
"**主題：** Error Handling and Unit Testing : 8-2\n" +
"\n" +
"You are creating a program that accepts user input. The program must convert the input to an integer and correctly handle errors when the conversion fails.\n" +
"\n" +
"Complete the code by selecting the correct code segment.\n" +
"\n" +
"```python\n" +
"while True:\n" +
"    _(1)_\n" +
"        x = int(input(\"Please enter a number: \"))\n" +
"        break\n" +
"    _(2)_ ValueError:\n" +
"        print(\"Not a valid number. Try again...\")\n" +
"```\n" +
"\n" +
"1. Blank (1):\n" +
"   - A. `try:`\n" +
"   - B. `else:`\n" +
"   - C. `except:`\n" +
"   - D. `raise:`\n" +
"   - E. `finally:`\n" +
"2. Blank (2):\n" +
"   - A. `try`\n" +
"   - B. `else`\n" +
"   - C. `except`\n" +
"   - D. `raise`\n" +
"   - E. `finally`\n" +
"\n" +
"**正確答案：** (1) A; (2) C\n" +
"\n" +
"## 題目 58\n" +
"\n" +
"**主題：** Error Handling and Unit Testing : 8-5\n" +
"\n" +
"You need to write code that performs the following tasks:\n" +
"\n" +
"- Call the `process()` function.\n" +
"- If the `process()` function throws an error, call the `logError()` function.\n" +
"- Always call the `displayResult()` function after calling the `process()` function.\n" +
"\n" +
"Select the appropriate code segments to complete the code. Each code segment may be used once, more than once, or not at all.\n" +
"\n" +
"Choices:A. `assert:`；B. `except:`；C. `finally:`；D. `raise:`；E. `try:`。\n" +
"\n" +
"```python\n" +
"_(1)_\n" +
"    process()\n" +
"_(2)_\n" +
"    logError()\n" +
"_(3)_\n" +
"    displayResult()\n" +
"```\n" +
"\n" +
"Choices:A. `assert:`；B. `except:`；C. `finally:`；D. `raise:`；E. `try:`\n" +
"\n" +
"1. Blank (1):\n" +
"2. Blank (2):\n" +
"3. Blank (3):\n" +
"\n" +
"**正確答案：** (1) E; (2) B; (3) C\n" +
"\n" +
"## 題目 59\n" +
"\n" +
"**主題：** Input and Output : 0-0\n" +
"\n" +
"You are developing a Python application for a school. The application must read and write data to a text file. If the file does not exist, the application must create it. If the file contains data, the application must delete the contents.\n" +
"\n" +
"Which code segment should you use?\n" +
"\n" +
"- A. `open(\"local_data\", \"w+\")`\n" +
"- B. `open(\"local_data\", \"r\")`\n" +
"- C. `open(\"local_data\", \"r+\")`\n" +
"- D. `open(\"local_data\", \"w\")`\n" +
"\n" +
"**正確答案：** D\n" +
"\n" +
"## 題目 60\n" +
"\n" +
"**主題：** Error Handling and Unit Testing : 8-7\n" +
"\n" +
"You write the following code:\n" +
"\n" +
"The `out.txt` file does not exist. You run the code.\n" +
"\n" +
"Which of the following statements is correct?\n" +
"\n" +
"```python\n" +
"import sys\n" +
"try:\n" +
"    file_in = open(\"in.txt\", 'r')\n" +
"    file_out = open(\"out.txt\", 'w+')\n" +
"except IOError:\n" +
"    print('cannot open', file_name)\n" +
"else:\n" +
"    i = 1\n" +
"    for line in file_in:\n" +
"        print(line.rstrip())\n" +
"        file_out.write(\"line \" + str(i) + \": \" + line)\n" +
"        i = i + 1\n" +
"    file_in.close()\n" +
"    file_out.close()\n" +
"```\n" +
"\n" +
"The `out.txt` file does not exist. Which statement is correct when the code runs?\n" +
"\n" +
"- A. The code will run correctly without errors.\n" +
"- B. The code will run but will produce a logic error.\n" +
"- C. The code will produce a runtime error.\n" +
"- D. The code will produce a syntax error.\n" +
"\n" +
"**正確答案：** A\n" +
"\n" +
"## 題目 61\n" +
"\n" +
"**主題：** Custom Functions : 6-3\n" +
"\n" +
"A bicycle company is creating a program that allows customers to record the number of miles they ride. The program sends messages based on the miles recorded by the customers.\n" +
"\n" +
"You write the following Python code. Line numbers are included for reference only.\n" +
"\n" +
"You need to define the two required functions.\n" +
"\n" +
"Which two code segments should you use for lines 01 and 04? Each correct answer is part of the solution. (Choose two.)\n" +
"\n" +
"```python\n" +
"_(1)_\n" +
"    name = input(\"What is your name? \")\n" +
"    return name\n" +
"_(2)_\n" +
"    calories = miles * calories_per_mile\n" +
"    return calories\n" +
"\n" +
"distance = int(input(\"How many miles did you bike this week? \"))\n" +
"burn_rate = 50\n" +
"biker = get_name()\n" +
"calories_burned = calc_calories(distance, burn_rate)\n" +
"print(biker, \", you burned about \", calories_burned, \" calories.\")\n" +
"```\n" +
"1. Blank (1):\n" +
"  - A. Line 01 `def get_name():`\n" +
"  - B. Line 01 `def get_name(biker):`\n" +
"  - C. Line 01 `def get_name(name):`\n" +
"2. Blank (2):\n" +
"  - D. Line 04 `def calc_calories():`\n" +
"  - E. Line 04 `def calc_calories(miles, burn_rate):`\n" +
"  - F. Line 04 `def calc_calories(miles, calories_per_mile):`\n" +
"\n" +
"**正確答案：** (1) A; (2) F\n" +
"\n" +
"## 題目 62\n" +
"\n" +
"**主題：** Strings and Lists : 3-4\n" +
"\n" +
"HOTSPOT\n" +
"\n" +
"A coworker wrote a program that inputs names into a database. Unfortunately, the program reversed the letters in each name.\n" +
"\n" +
"You need to write a Python function that outputs the characters in a name in the correct order.\n" +
"\n" +
"Complete the code by selecting the code segment from each drop-down list.\n" +
"\n" +
"Note: You will receive partial credit for each correct selection.\n" +
"\n" +
"```python\n" +
"#Function reverses characters in a string.\n" +
"#returns new string in reversed order.\n" +
"\n" +
"def reverse_name(backward_name):\n" +
"    forward_name = \"\"\n" +
"    length = _(1)_\n" +
"    while length >= 0:\n" +
"        forward_name += _(2)_\n" +
"        length = length-1\n" +
"    return forward_name\n" +
"```\n" +
"\n" +
"1. `_(1)_`\n" +
"\n" +
"   - A. `backward_name:`\n" +
"   - B. `len(backward_name)-1`\n" +
"   - C. `range(0,len(backward_name),-1)`\n" +
"   - D. `range(len(backward_name)-1,-1,-1)`\n" +
"\n" +
"2. `_(2)_`\n" +
"\n" +
"   - A. `backward_name[index]`\n" +
"   - B. `backward_name[length]`\n" +
"   - C. `backward_name[length+1]`\n" +
"   - D. `backward_name[len(backward_name)-len(forward_name)]`\n" +
"\n" +
"**正確答案：** (1) B; (2) B\n" +
"\n" +
"## 題目 63\n" +
"\n" +
"**主題：** Modules : 7-8\n" +
"\n" +
"You are writing a program to randomly assign rooms (`room_number`) and team-building groups (`group`) for a company training event.\n" +
"\n" +
"Complete the code by selecting the correct code segment.\n" +
"\n" +
"```python\n" +
"import random\n" +
"roomsAssigned = [1]\n" +
"room_number = 1\n" +
"groupList = [\"Ropes\", \"Rafting\", \"Obstacle\", \"Wellness\"]\n" +
"count = 0\n" +
"print(\"Welcome to CompanyPro's Team-Building Weekend!\")\n" +
"name = input(\"Please enter your name (q to quit)? \")\n" +
"while name != 'q' and count < 50:\n" +
"    while room_number in roomsAssigned:\n" +
"        _(1)_\n" +
"    print(f\"{name}, your room number is {room_number}\")\n" +
"    roomsAssigned.append(room_number)\n" +
"    _(2)_\n" +
"    print(f\"You will meet with the {group} Group this afternoon. \")\n" +
"    count += 1\n" +
"    name = input(\"Please enter your name (Q to quit)? \")\n" +
"```\n" +
"\n" +
"1. Code for blank (1):\n" +
"  - A. `room_number = random(1, 50)`\n" +
"  - B. `room_number = random.randint(1, 50)`\n" +
"  - C. `room_number = random.shuffle(1, 50)`\n" +
"  - D. `room_number = random.random(1, 50)`\n" +
"2. Code for blank (2):\n" +
"  - A. `group = random.choice(groupList)`\n" +
"  - B. `group = random.randange(groupList)`\n" +
"  - C. `group = random.shuffle(groupList)`\n" +
"  - D. `group = random.sample(groupList)`\n" +
"\n" +
"**正確答案：** (1) B; (2) A\n" +
"\n" +
"## 題目 64\n" +
"\n" +
"**主題：** Error Handling and Unit Testing : 8-4\n" +
"\n" +
"You need to test whether an object is an instance of a specific class.\n" +
"\n" +
"How should you configure the unit test?\n" +
"\n" +
"Select the correct options to complete the code.\n" +
"\n" +
"```python\n" +
"_(1)_ unittest\n" +
"class TestIsInstance((2)):\n" +
"    def _(3)_\n" +
"        _(4)_\n" +
"\n" +
"if __name__ == '__main__':\n" +
"    unittest.main()\n" +
"```\n" +
"\n" +
"1. Blank (1):\n" +
"   - A. `define`\n" +
"   - B. `import`\n" +
"   - C. `include`\n" +
"   - D. `using`\n" +
"2. Blank (2):\n" +
"   - A. `unittest.TestCase`\n" +
"   - B. `test.TestCase`\n" +
"   - C. `TestCase.unittest`\n" +
"   - D. `TestCase.test`\n" +
"3. Blank (3):\n" +
"   - A. `assert_isInstance(self):`\n" +
"   - B. `eval_isInstance(self):`\n" +
"   - C. `test_isInstance(self):`\n" +
"   - D. `try_isInstance(self):`\n" +
"4. Blank (4):\n" +
"   - A. `self.assertIsInstance(obj, cls, msg=None)`\n" +
"   - B. `test.assertIsInstance(obj, cls, msg=None)`\n" +
"   - C. `this.assertIsInstance(obj, cls, msg=None)`\n" +
"\n" +
"**正確答案：** (1) B; (2) A; (3) C; (4) A\n" +
"\n" +
"## 題目 65\n" +
"\n" +
"**主題：** Modules : 7-5\n" +
"\n" +
"You work on a game development team.\n" +
"\n" +
"You need to write code to generate random numbers that meet the following requirements:\n" +
"\n" +
"- The number is a multiple of 5.\n" +
"- The minimum number is 5.\n" +
"- The maximum number is 100.\n" +
"\n" +
"Which two code segments will meet the requirements? Each correct answer presents a complete solution. (Choose two.)\n" +
"\n" +
"- A.\n" +
"  ```python\n" +
"from random import randrange\n" +
"print(randrange(0, 100, 5))\n" +
"  ```\n" +
"- B.\n" +
"  ```python\n" +
"from random import randint\n" +
"print(randint(1, 20) * 5)\n" +
"  ```\n" +
"- C.\n" +
"  ```python\n" +
"from random import randrange\n" +
"print(randrange(5, 105, 5))\n" +
"  ```\n" +
"- D.\n" +
"  ```python\n" +
"from random import randint\n" +
"print(randint(0, 20) * 5)\n" +
"  ```\n" +
"\n" +
"**正確答案：** B, C\n" +
"\n" +
"## 題目 66\n" +
"\n" +
"**主題：** Custom Functions : 6-6\n" +
"\n" +
"For each statement about the following function, select True or False.\n" +
"\n" +
"\n" +
"```python\n" +
"def grosspay(hours=40, rate=25, pieces=0, piecerate=0, salary=0):\n" +
"    overtime = 0\n" +
"    if pieces > 0:\n" +
"        return pieces * piecerate\n" +
"    if salary > 0:\n" +
"        pass\n" +
"    if hours > 40:\n" +
"        overtime = (hours - 40) * (1.5 * rate)\n" +
"        return overtime + (40 * rate)\n" +
"    else:\n" +
"        return hours * rate\n" +
"```\n" +
"\n" +
"Evaluate the following statements:\n" +
"\n" +
"1. The function call `grosspay()` will produce a syntax error.\n" +
"2. The function call `grosspay(salary=50000)` will not return a result.\n" +
"3. The function call `grosspay(pieces=500, piecerate=4)` will return 2000.\n" +
"\n" +
"The choices for each item are: A. True; B. False\n" +
"\n" +
"**正確答案：** (1) B; (2) B; (3) A\n" +
"\n" +
"## 題目 67\n" +
"\n" +
"**主題：** Custom Functions : 6-5\n" +
"\n" +
"You are writing a function to increase a player's score in a game.\n" +
"\n" +
"The function has the following requirements:\n" +
"\n" +
"- If no value is specified for `points`, the initial value of `points` is one.\n" +
"- If `bonus` is `True`, `points` must be doubled.\n" +
"\n" +
"You write the following code. Line numbers are included for reference only.\n" +
"\n" +
"For each statement, select True or False.\n" +
"\n" +
"```python\n" +
"def increment_score(score, bonus, points):\n" +
"    if bonus == True:\n" +
"        points = points * 2\n" +
"    score = score + points\n" +
"    return score\n" +
"points = 5\n" +
"score = 10\n" +
"new_score = increment_score(score, True, points)\n" +
"```\n" +
"\n" +
"Evaluate:\n" +
"\n" +
"1. To meet the requirements, line 01 should be changed to `def increment_score(score, bonus, points=1)`.\n" +
"2. If line 01 is not changed and the function is called with only two arguments, an error will occur.\n" +
"3. Line 03 will also modify the value of the variable `points` declared on line 06.\n" +
"4. After any parameter is defined with a default value, all parameters to its right must also be defined with default values.\n" +
"5. If line 01 is not changed and the function is called with only two arguments, the value of the third parameter will be `None`.\n" +
"\n" +
"The choices for each item are: A. True; B. False\n" +
"\n" +
"**正確答案：** (1) A; (2) A; (3) B; (4) A; (5) B\n" +
"\n" +
"## 題目 68\n" +
"\n" +
"**主題：** Modules : 7-11\n" +
"\n" +
"The `Script.py` file contains the following code:\n" +
"\n" +
"You run the command shown below.\n" +
"\n" +
"What is the output of this command?\n" +
"\n" +
"```python\n" +
"import sys\n" +
"print(sys.argv[2])\n" +
"```\n" +
"\n" +
"Command:\n" +
"\n" +
"```text\n" +
"python Script.py Cheese Bacon Bread\n" +
"```\n" +
"\n" +
"What is the output?\n" +
"\n" +
"- A. `Cheese`\n" +
"- B. `Bread`\n" +
"- C. `Script.py`\n" +
"- D. `Bacon`\n" +
"\n" +
"**正確答案：** D\n" +
"\n" +
"## 題目 69\n" +
"\n" +
"**主題：** Custom Functions : 6-11\n" +
"\n" +
"The following function calculates the value of an expression that uses exponents.\n" +
"\n" +
"```python\n" +
"def calc_power(a, b):\n" +
"    return a ** b\n" +
"base = input(\"Enter the number for the base:\")\n" +
"exponent = input(\"Enter the number for the exponent:\")\n" +
"result = calc_power(base, exponent)\n" +
"print(\"The result is \" + result)\n" +
"```\n" +
"\n" +
"Evaluate:\n" +
"\n" +
"1. The code will produce errors on lines 03 and 04.\n" +
"2. The code will produce errors on lines 02 and 05.\n" +
"3. The code will correctly output data to the console.\n" +
"\n" +
"The choices for each item are: A. True; B. False\n" +
"\n" +
"**正確答案：** (1) B; (2) A; (3) B\n" +
"\n" +
"## 題目 70\n" +
"\n" +
"**主題：** Modules : 7-3\n" +
"\n" +
"You are writing code to generate a random integer with a minimum value of 5 and a maximum value of 11.\n" +
"\n" +
"Which two functions should you use? Each correct answer presents a complete solution.\n" +
"\n" +
"- A. `random.randint(5, 12)`\n" +
"- B. `random.randrange(5, 12, 1)`\n" +
"- C. `random.randint(5, 11)`\n" +
"- D. `random.randrange(5, 11, 1)`\n" +
"\n" +
"**正確答案：** B, C\n" +
"\n" +
"## 題目 71\n" +
"\n" +
"**主題：** Custom Functions : 6-9\n" +
"\n" +
"Students are attending an activity night at school. The following function tells students where to go for the activities:\n" +
"\n" +
"Which two function calls are correct? (Choose two.)\n" +
"\n" +
"\n" +
"```python\n" +
"def roomAssignment(student, year):\n" +
"    \"\"\"Assign rooms to students\"\"\"\n" +
"    if year == 1:\n" +
"        print(f\"\\n{student.title()}, please report to room 115\")\n" +
"    elif year == 2:\n" +
"        print(f\"\\n{student.title()}, please report to room 210\")\n" +
"    elif year == 3:\n" +
"        print(f\"\\n{student.title()}, please report to room 320\")\n" +
"    elif year == 4:\n" +
"        print(f\"\\n{student.title()}, please report to room 405\")\n" +
"    elif year == 5:\n" +
"        print(f\"\\n{student.title()}, please report to room 515\")\n" +
"    else:\n" +
"        print(f\"\\n{student.title()}, please report to room 625\")\n" +
"```\n" +
"\n" +
"Which two function calls are correct?\n" +
"\n" +
"- A.\n" +
"  ```python\n" +
"name = input(\"What is your name?\")\n" +
"grade = 0\n" +
"while grade not in (1, 2, 3, 4, 5, 6):\n" +
"    grade = int(input(\"What grade are you in (1-6)?\"))\n" +
"roomAssignment(name, year=grade)\n" +
"  ```\n" +
"- B.\n" +
"  ```python\n" +
"name = input(\"What is your name?\")\n" +
"grade = 0\n" +
"while grade not in (1, 2, 3, 4, 5, 6):\n" +
"    grade = int(input(\"What grade are you in (1-6)?\"))\n" +
"roomAssignment(student, year)\n" +
"  ```\n" +
"- C. \n" +
"  ```python\n" +
"roomAssignment(\"Sherlock Sassafrass\", 4)\n" +
"  ```\n" +
"- D. \n" +
"  ```python\n" +
"roomAssignment(year=6, name=\"Minnie George\")\n" +
"  ```\n" +
"\n" +
"**正確答案：** A, C\n" +
"\n" +
"## 題目 72\n" +
"\n" +
"**主題：** Error Handling and Unit Testing : 8-3\n" +
"\n" +
"Select the correct option from each drop-down list to complete the statements about `assert` methods.\n" +
"\n" +
"Note: You will receive partial credit for each correct selection.\n" +
"\n" +
"Select the appropriate `assert` method:\n" +
"\n" +
"1. To test whether the variables `a` and `b` have the same value:\n" +
"   - A. `assertEqual(a, b)`\n" +
"   - B. `assertTrue(x)`\n" +
"   - C. `assertIs(a, b)`\n" +
"   - D. `assertIn(a, b)`\n" +
"2. To test whether the objects `a` and `b` are the same:\n" +
"   - A. `assertEqual(a, b)`\n" +
"   - B. `assertTrue(x)`\n" +
"   - C. `assertIs(a, b)`\n" +
"   - D. `assertIn(a, b)`\n" +
"3. To test whether a value exists in a list:\n" +
"   - A. `assertEqual(a, b)`\n" +
"   - B. `assertTrue(x)`\n" +
"   - C. `assertIs(a, b)`\n" +
"   - D. `assertIn(a, b)`\n" +
"\n" +
"**正確答案：** (1) A; (2) C; (3) D\n" +
"\n" +
"## 題目 73\n" +
"\n" +
"**主題：** Modules : 7-6\n" +
"\n" +
"You are creating a function that treats numbers passed to it as floating-point (`float`) values. The function must perform the following tasks:\n" +
"\n" +
"- Extract the absolute value of the floating-point (`float`) number.\n" +
"- Remove any decimal point after the integer.\n" +
"\n" +
"Which two math functions should you use? Each correct answer is part of the solution. (Choose two.)\n" +
"\n" +
"- A. `math.floor(x)`\n" +
"- B. `math.fabs(x)`\n" +
"- C. `math.frexp(x)`\n" +
"- D. `math.fmod(x)`\n" +
"\n" +
"**正確答案：** A, B\n" +
"\n" +
"## 題目 74\n" +
"\n" +
"**主題：** Modules : 7-7\n" +
"\n" +
"You are writing a program to display specials for My Healthy Eats Delivery. Select the correct option from each drop-down list to complete the code on lines 04, 05, and 15.\n" +
"\n" +
"```python\n" +
"import datetime\n" +
"dailySpecials = (\"Spaghetti\", \"Macaroni & Cheese\", \"Meatloaf\", \"Fried Chicken\")\n" +
"weekendSpecials = (\"Lobster\", \"Prime Rib\", \"Parmesan-Crusted Cod\")\n" +
"_(1)_\n" +
"_(2)_\n" +
"print(\"My Healthy Eats Delivery\")\n" +
"if today == \"Friday\" or today == \"Saturday\" or today == \"Sunday\":\n" +
"    print(\"The weekend specials include:\")\n" +
"    for item in weekendSpecials:\n" +
"        print(item)\n" +
"else:\n" +
"    print(\"The weekday specials include: \")\n" +
"    for item in dailySpecials:\n" +
"        print(item)\n" +
"_(3)_\n" +
"print(f\"Pricing specials change in {daysLeft} days\")\n" +
"```\n" +
"\n" +
"1. Blank (1), line 04, retrieve the current date:\n" +
"   - A. `now = datetime()`\n" +
"   - B. `now = datetime.date()`\n" +
"   - C. `now = datetime.datetime.now()`\n" +
"   - D. `now = new date()`\n" +
"2. Blank (2), line 05, retrieve the full name of the weekday:\n" +
"   - A. `today = now.strftime(\"%A\")`\n" +
"   - B. `today = now.strftime(\"%B\")`\n" +
"   - C. `today = now.strftime(\"%W\")`\n" +
"   - D. `today = now.strftime(\"%Y\")`\n" +
"3. Blank (3), line 15, calculate the number of days remaining in the week:\n" +
"   - A. `daysLeft = now - now.weekday()`\n" +
"   - B. `daysLeft = today - today.weekday()`\n" +
"   - C. `daysLeft = 6 - now.weekday()`\n" +
"   - D. `daysLeft = 6 - datetime.datetime.weekday()`\n" +
"\n" +
"**正確答案：** (1) C; (2) A; (3) C\n" +
"\n" +
"## 題目 75\n" +
"\n" +
"**主題：** Custom Functions : 6-11\n" +
"\n" +
"※The following function calculates the value of an expression that uses exponents.\n" +
"\n" +
"For each statement, select True or False.\n" +
"\n" +
"```python\n" +
"def calc_power(a, b):\n" +
"    return a ** b\n" +
"base = input(\"Enter the number for the base:\")\n" +
"exponent = input(\"Enter the number for the exponent:\")\n" +
"result = calc_power(base, exponent)\n" +
"print(\"The result is \" + result)\n" +
"```\n" +
"\n" +
"Evaluate:\n" +
"\n" +
"1. The code will produce errors on lines 03 and 04.\n" +
"2. The code will produce errors on lines 02 and 05.\n" +
"3. The code will correctly output data to the console.\n" +
"\n" +
"The choices for each item are: A. True; B. False\n" +
"\n" +
"**正確答案：** (1) B; (2) A; (3) B\n" +
"\n" +
"## 題目 76\n" +
"\n" +
"**主題：** Custom Functions : 6-8\n" +
"\n" +
"Review the following program. Line numbers are included for reference only.\n" +
"\n" +
"For each statement about the program, select True or False.\n" +
"\n" +
"```python\n" +
"def petStore(category, species, breed=\"none\"):\n" +
"    print(f\"\\nYou have selected an animal from the {category} category.\")\n" +
"    if breed == \"none\":\n" +
"        print(f\"The {category} you selected is a {species}\")\n" +
"    else:\n" +
"        print(f\"The {category} you selected is a {species} {breed}\")\n" +
"\n" +
"category = input(\"What animal category are you interested in?\")\n" +
"species = input(\"What species are they from (canine, feline, Scarlet Macaw, Blue and Gold Macaw?\")\n" +
"if category == \"dog\" or category == \"cat\":\n" +
"    breed = input(\"What breed are you interested in?\")\n" +
"    petStore(category, species, breed)\n" +
"else:\n" +
"    petStore(category, species)\n" +
"petStore(breed=\"Maltese\", species=\"Canine\", category=\"dog\")\n" +
"petStore(\"bird\", species=\"Scarlet Macaw\")\n" +
"```\n" +
"\n" +
"Evaluate the following statements:\n" +
"\n" +
"1. The function returns a value.\n" +
"2. The function calls on lines 12 and 15 are invalid.\n" +
"3. The function calls on lines 14 and 16 produce errors.\n" +
"\n" +
"The choices for each item are: A. True; B. False\n" +
"\n" +
"**正確答案：** (1) B; (2) B; (3) B\n" +
"\n" +
"## 題目 77\n" +
"\n" +
"**主題：** Input and Output : 4-9\n" +
"\n" +
"You are writing a function that handles files.\n" +
"- You need to ensure that the function returns None if the file does not exist.\n" +
"- If the file exists, the function must return the first line.\n" +
"\n" +
"You write the following code:\n" +
"\n" +
"Select the correct code segment.\n" +
"\n" +
"```python\n" +
"import os\n" +
"def get_first_line(filename, mode):\n" +
"    _(1)_\n" +
"        _(2)_\n" +
"            _(3)_\n" +
"    _(4)_\n" +
"        _(5)_\n" +
"```\n" +
"\n" +
"Choices:\n" +
"- A. `with open(filename, 'r') as file:`\n" +
"- B. `return None`\n" +
"- C. `return file.readline()`\n" +
"- D. `else:`\n" +
"- E. `if os.path.isfile(filename):`\n" +
"\n" +
"1. Blank (1):\n" +
"2. Blank (2):\n" +
"3. Blank (3):\n" +
"4. Blank (4):\n" +
"5. Blank (5):\n" +
"\n" +
"**正確答案：** (1) E; (2) A; (3) C; (4) D; (5) B\n" +
"\n" +
"## 題目 補充1\n" +
"\n" +
"**主題：** Variables and Data Types : 1-2\n" +
"\n" +
"A school is developing a program to record student data and store it in a database. The program will handle various types of data.\n" +
"\n" +
"After the following variables are declared, what are their data types in order?\n" +
"\n" +
"```python\n" +
"age = 12\n" +
"minor = False\n" +
"name = \"David\"\n" +
"weight = 64.5\n" +
"zip = \"545\"\n" +
"```\n" +
"\n" +
"- A. `int`、`bool`、`str`、`float`、`str`\n" +
"- B. `int`、`str`、`str`、`float`、`int`\n" +
"- C. `float`、`str`、`str`、`float`、`str`\n" +
"- D. `int`、`bool`、`str`、`int`、`int`\n" +
"\n" +
"**正確答案：** A\n" +
"\n" +
"## 題目 補充2\n" +
"\n" +
"**主題：** Variables and Data Types : 1-6\n" +
"\n" +
"In a Python program, if you want the program to automatically convert user input to an integer for calculations even when a decimal is entered, which of the following code segments should you use?\n" +
"\n" +
"- A. `total = input(\"Please enter the total?\")`\n" +
"- B. `total = int(input(\"Please enter the total?\"))`\n" +
"- C. `total = str(input(\"Please enter the total?\"))`\n" +
"- D. `total = float(input(\"Please enter the total?\"))`\n" +
"\n" +
"\n" +
"\n" +
"> Proofreading note: `int(input(...))` can convert text in integer format to an integer; if `3.5` is entered, a `ValueError` will occur and it cannot be converted directly. **The question is incorrect, but still choose B**\n" +
"\n" +
"**正確答案：** B\n" +
"\n" +
"## 題目 補充3\n" +
"\n" +
"**主題：** Conditionals and Loop Control : 0-0\n" +
"\n" +
"You develop code to determine whether an integer is odd or even:\n" +
"\n" +
"```python\n" +
"from random import randint\n" +
"num = randint(1, 100)\n" +
"_(1)_\n" +
"print(\"%d is even\" % num)\n" +
"_(2)_\n" +
"print(\"%d is odd\" % num)\n" +
"```\n" +
"\n" +
"The code for the blanks in the code above is, in order:\n" +
"\n" +
"- A. (1) `if num / 2 == 0:`；(2) `if num / 2 != 0:`\n" +
"- B. (1) `if num % 2 == 0:`；(2) `else:`\n" +
"- C. (1) `if num / 2 = 0:`；(2) `if num / 2 <> 0:`\n" +
"- D. (1) `if num % 2 == 0:`；(2) `elif num / 2 == 0:`\n" +
"\n" +
"**正確答案：** B\n" +
"\n" +
"## 題目 補充4\n" +
"\n" +
"**主題：** Operators : 2-11\n" +
"\n" +
"You design a Python program for mathematical calculations. The code is as follows:\n" +
"\n" +
"```python\n" +
"a = 21\n" +
"b = 5\n" +
"print(a / b)\n" +
"print(a // b)\n" +
"print(a % b)\n" +
"```\n" +
"\n" +
"What are the results of the following mathematical expressions, in order?\n" +
"\n" +
"- A. `4.2`、`4`、`1`\n" +
"- B. `4`、`4`、`4`\n" +
"- C. `1`、`4`、`4.2`\n" +
"\n" +
"**正確答案：** A\n" +
"\n" +
"## 題目 補充5\n" +
"\n" +
"**主題：** Strings and Lists : 3-2\n" +
"\n" +
"In the following code:\n" +
"\n" +
"```python\n" +
"slist = ['a', 'b', 'c', 'd', 'e', 'f']\n" +
"print('f' in slist)\n" +
"```\n" +
"\n" +
"What is printed after execution?\n" +
"\n" +
"- A. `5`\n" +
"- B. `6`\n" +
"- C. `True`\n" +
"- D. `False`\n" +
"\n" +
"\n" +
"\n" +
"\n" +
"---\n" +
"\n" +
"**正確答案：** C";
