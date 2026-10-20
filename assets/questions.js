// 唯一題庫來源。內容為 Markdown；修改後兩種模式會一起更新。
// 使用 JSON 字串串接，保留原始換行、反斜線與程式碼。
window.ITS_QUESTION_SOURCE =
"# Certiport ITS Python 77 題練習題（校稿版）\n" +
"\n" +
"## 題目 01\n" +
"\n" +
"**主題：** `輸入與輸出 : 4-6`\n" +
"\n" +
"請問下列陳述式有何功能？\n" +
"\n" +
"```python\n" +
"data = input()\n" +
"```\n" +
"\n" +
"- A. 顯示電腦上的所有輸入周邊裝置\n" +
"- B. 顯示允許使用者輸入的訊息方塊\n" +
"- C. 允許使用者在主控台中輸入文字\n" +
"- D. 建立 HTML 輸入元素\n" +
"\n" +
"**正確答案：** C\n" +
"\n" +
"## 題目 02\n" +
"\n" +
"**主題：** `輸入與輸出 : 4-3`\n" +
"\n" +
"您正在建立一個電子商務指令碼來接受使用者輸入，並以逗點分隔格式輸出資料。\n" +
"\n" +
"您撰寫了下列程式碼以接受輸入：\n" +
"\n" +
"```python\n" +
"item = input(\"Enter the item name: \")\n" +
"sales = input(\"Enter the quantity: \")\n" +
"```\n" +
"\n" +
"輸出必須符合下列需求：\n" +
"\n" +
"- 以雙引號括住字串。\n" +
"- 不以引號或其他字元括住數字。\n" +
"- 以逗點分隔項目。\n" +
"\n" +
"請問您可以使用哪兩個程式碼片段？\n" +
"\n" +
"- A. `print(\"{0},{1}\".format(item, sales))`\n" +
"- B. `print(item + ',' + sales)`\n" +
"- C. `print('\"{0}\",{1}'.format(item, sales))`\n" +
"- D. `print('\"' + item + '\",' + sales)`\n" +
"\n" +
"**正確答案：** C、D\n" +
"\n" +
"## 題目 03\n" +
"\n" +
"**主題：** `變數與資料型態 : 1-5`\n" +
"\n" +
"您必須識別各種類型作業的資料類型。\n" +
"\n" +
"請將資料類型配對至正確的作業。每種資料類型可能使用一次、多次或完全不用。\n" +
"\n" +
"預選答案：A. `int`；B. `float`；C. `str`；D. `bool`\n" +
"\n" +
"請將預選答案配對至下列 4 個小題：\n" +
"\n" +
"1. `type(+1E10)`\n" +
"2. `type(5.0)`\n" +
"3. `type(\"True\")`\n" +
"4. `type(False)`\n" +
"\n" +
"**正確答案：** (1) B；(2) B；(3) C；(4) D\n" +
"\n" +
"## 題目 04\n" +
"\n" +
"**主題：** `輸入與輸出 : 4-5`\n" +
"\n" +
"您正在為公司開發一個 Python 應用程式。\n" +
"\n" +
"您需要接受使用者的輸入並將該資訊輸出至使用者的畫面。\n" +
"\n" +
"您從下列程式碼開始著手。\n" +
"\n" +
"請問您應該在第 02 行撰寫哪個程式碼？\n" +
"\n" +
"```python\n" +
"print(\"What is your name?\")\n" +
"_(1)_\n" +
"print(name)\n" +
"```\n" +
"1. 第(1)個空格：\n" +
"  - A. `input(\"name\")`\n" +
"  - B. `name = input()`\n" +
"  - C. `input(name)`\n" +
"  - D. `name = input`\n" +
"\n" +
"**正確答案：** B\n" +
"\n" +
"## 題目 05\n" +
"\n" +
"**主題：** `輸入與輸出 : 4-2`\n" +
"\n" +
"您正在撰寫一個函式來讀取資料檔案並將結果列印或格式化資料表。您編寫程式碼將一行資料讀入名為 `fields` 的清單。\n" +
"\n" +
"列印輸出的格式必須符合以下要求：\n" +
"\n" +
"- 水果名稱 `fields[0]`：左對齊，資料行寬 10 個空格。\n" +
"- 權重 `fields[1]`：右對齊，資料行寬 5 個空格，小數點後 1 位。\n" +
"- 價格 `fields[2]`：右對齊，資料行寬 7 個空格，小數點後 2 位。\n" +
"\n" +
"以下顯示了輸出的單行範例：\n" +
"\n" +
"`Oranges   5.6  1.33`\n" +
"\n" +
"請完成格式化程式碼：\n" +
"\n" +
"```python\n" +
"print(\"_(1)__(2)__(3)_\".format(fields[0], eval(fields[1]), eval(fields[2])))\n" +
"```\n" +
"\n" +
"預選答案：A. `{10:0}`；B. `{5:1f}`；C. `{7:2f}`；D. `{2:7.2f}`；E. `{1:5.1f}`；F. `{0:10}`\n" +
"\n" +
"1. 第(1)個空格：\n" +
"2. 第(2)個空格：\n" +
"3. 第(3)個空格：\n" +
"\n" +
"**正確答案：** (1) F；(2) E；(3) D\n" +
"\n" +
"## 題目 06\n" +
"\n" +
"**主題：** `變數與資料型態 : 1-3`\n" +
"\n" +
"您正在撰寫一個程式來計算使用者的約略出生年份。此程式會要求使用者輸入使用者年齡 (`age`) 和目前年份 (`year`)，然後在訊息 (`message`) 中輸入使用者的約略出生年份 (`born`)。\n" +
"\n" +
"您撰寫了以下這段程式碼。加上行號僅為參考之用。\n" +
"\n" +
"請評估這段程式碼，然後從每個下拉式清單中選取正確的選項以回答問題。\n" +
"\n" +
"```python\n" +
"age = input(\"Enter your age: \")\n" +
"year = input(\"Enter the four-digit year: \")\n" +
"born = eval(year) - eval(age)\n" +
"message = \"You were born in \" + str(born)\n" +
"print(message)\n" +
"```\n" +
"\n" +
"預選答案：A. `int`；B. `str`；C. `float`；D. `bool`\n" +
"\n" +
"請判斷下列小題的資料類型：\n" +
"\n" +
"1. 第 01 行的 `age`\n" +
"2. 第 03 行的 `born`\n" +
"3. 第 05 行的 `message`\n" +
"\n" +
"**正確答案：** (1) B；(2) A；(3) B\n" +
"\n" +
"## 題目 07\n" +
"\n" +
"**主題：** `字串與資料串列 : 3-9`\n" +
"\n" +
"您建立了下列程式來找出會議室並顯示房間名稱。\n" +
"\n" +
"同事回報指出，當輸入值 1 或 2 時，程式輸出為 `Room does not exist.`。\n" +
"\n" +
"您必須對此程式進行疑難排解。請評估這段程式碼，然後選取正確的選項以回答問題。\n" +
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
"1. 第 01 行的字典包含哪兩種資料類型？\n" +
"   - A. 布林值和字串\n" +
"   - B. 浮點數和布林值\n" +
"   - C. 整數和字串\n" +
"   - D. 浮點數和整數\n" +
"2. 第 02 行的 `room` 是哪種資料類型？\n" +
"   - A. `bool`\n" +
"   - B. `float`\n" +
"   - C. `int`\n" +
"   - D. `str`\n" +
"3. 為什麼第 03 行無法尋找房間？\n" +
"   - A. 無效的語法\n" +
"   - B. 不符合的資料類型\n" +
"   - C. 命名錯誤的變數\n" +
"\n" +
"**正確答案：** (1) C；(2) D；(3) B\n" +
"\n" +
"## 題目 08\n" +
"\n" +
"**主題：** `模組 : 0-0`\n" +
"\n" +
"※您撰寫了以下這段程式碼：\n" +
"\n" +
"執行程式。請問輸出為何？\n" +
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
"## 題目 09\n" +
"\n" +
"**主題：** `輸入與輸出 : 4-7`\n" +
"\n" +
"※某間食品公司需要一套簡易程式，讓他們的客服中心能夠用來輸入新咖啡種類的問卷調查資料。此程式必須執行下列工作：\n" +
"- 接受輸入(rating)。\n" +
"- 傳回五星評比標準的平均評分(average)。\n" +
"- 將輸出四捨五入到兩位小數。\n" +
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
"1. 第(1)個空格的程式碼應為：\n" +
"  - A. `float(input(\"Enter next rating (1-5, -1 for done)\"))`\n" +
"  - B. `input \"Enter next rating (1-5, -1 for done)\"`\n" +
"  - C. `input(\"Enter next rating (1-5, -1 for done)\")`\n" +
"  - D. `print(\"Enter next rating (1-5, -1 for done)\")`\n" +
"2. 第(2)個空格的程式碼應為：\n" +
"  - A. `console.input(\"The average star rating for the new coffee is:\")`\n" +
"  - B. `output(\"The average star rating for the new coffee is:\")`\n" +
"  - C. `print(\"The average star rating for the new coffee is: {}\"`\n" +
"  - D. `printline(\"The average star rating for the new coffee is:\")`\n" +
"3. 第(3)個空格的程式碼應為：\n" +
"  - A. `{average, '.2f}`\n" +
"  - B. `format.average.{2d}`\n" +
"  - C. `format(average, '.2d'))`\n" +
"  - D. `format(average, '.2f'))`\n" +
"\n" +
"**正確答案：** (1) A；(2) C；(3) D\n" +
"\n" +
"## 題目 10\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-5`\n" +
"\n" +
"您為公司開發了一個Python應用程式。\n" +
"您需要完成程式碼,好讓print陳述式正確。\n" +
"請從每個下拉式清單中選取正確的程式碼片段以完成程式碼。\n" +
"\n" +
"```python\n" +
"numList = [1, 2, 3, 4, 5]\n" +
"alphaList = [\"a\", \"b\", \"c\", \"d\", \"e\"]\n" +
"\n" +
"_(1)_\n" +
"    print(\"The value in numList are equal to alphaList\")\n" +
"_(2)_\n" +
"    print(\"The value in numList are not equal to alphaList\")\n" +
"```\n" +
"\n" +
"1. 第(1)個空格的程式碼應為：\n" +
"  - A. `if numList = alphaList:`\n" +
"  - B. `if numList == alphaList:`\n" +
"  - C. `if numList += alphaList:`\n" +
"2. 第(2)個空格的程式碼應為：\n" +
"  - A. `else:`\n" +
"  - B. `elif:`\n" +
"  - C. `elseif:`\n" +
"\n" +
"**正確答案：** (1) B；(2) A\n" +
"\n" +
"## 題目 11\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-3`\n" +
"\n" +
"您撰寫了下列程式碼來根據學生目前的成績(grade)和排名(rank)判斷學生的最終成績:\n" +
"\n" +
"```python\n" +
"grade = 76\n" +
"rank = 3\n" +
"if grade > 80 and rank >= 3:\n" +
"    grade += 10\n" +
"elif grade > 70 and rank > 3:\n" +
"    grade += 5\n" +
"else:\n" +
"    grade -= 5\n" +
"print(grade)\n" +
"```\n" +
"\n" +
"請問將會列印何值？\n" +
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
"**主題：** `運算子 : 2-12`\n" +
"\n" +
"您正在建立一個比較數字的Python程式。\n" +
"您撰寫了以下這段程式碼。加上行號僅為參考之用。\n" +
"您需要確保比較正確。\n" +
"對於下列每一項敘述，請選取[正確]或[錯誤]。\n" +
"\n" +
"```python\n" +
"num1 = eval(input(\"Please enter the first number: \"))\n" +
"num2 = eval(input(\"Please enter the second number: \"))\n" +
"if num1 == num2:\n" +
"    print(\"The two numbers are equal. \")\n" +
"if num1 <= num2:\n" +
"    print(\"Number 1 is less than number 2. \")\n" +
"if num1 > num2:\n" +
"    print(\"Number 1 is greater than number 2. \")\n" +
"if num2 = num1:\n" +
"    print(\"The two numbers are the same. \")\n" +
"```\n" +
"\n" +
"請判斷下列敘述：\n" +
"\n" +
"1. 第 04 行的 `print` 陳述式只有在這兩個數字的值相等時才會列印。\n" +
"2. 第 06 行的 `print` 陳述式只有在 `num1` 小於 `num2` 時才會列印。\n" +
"3. 第 08 行的 `print` 陳述式只有在 `num1` 大於 `num2` 時才會列印。\n" +
"4. 第 09 行的陳述式是無效的比較。\n" +
"\n" +
"每個小題的選項皆為：A. 正確；B. 錯誤\n" +
"\n" +
"**正確答案：** (1) A；(2) B；(3) A；(4) A\n" +
"\n" +
"## 題目 13\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-6`\n" +
"\n" +
"您正在建立一個函式來根據下列規則計算入場費 (`admission_fee`)。\n" +
"\n" +
"- 未滿5歲的任何人：免費。\n" +
"- 年滿5歲以上的任何在校學生：10 美元。\n" +
"- 5至17歲的任何非在校人士：20 美元。\n" +
"- 超過17歲的任何非在校人士：50 美元。\n" +
"\n" +
"`rate` 代表美元價格。\n" +
"\n" +
"請選取正確的程式碼片段以完成程式碼。\n" +
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
"1. 第(1)個空格程式碼應為：\n" +
"  - A. `if age >= 5 and school == True:`\n" +
"  - B. `if age >= 5 and age <= 17:`\n" +
"  - C. `if age >= 5 and school == False:`\n" +
"2. 第(2)個空格程式碼應為：\n" +
"  - A. `elif age >= 5 and school == False:`\n" +
"  - B. `else age >= 5 and school == False:`\n" +
"  - C. `elif age >= 5 and school == True:`\n" +
"3. 第(3)個空格程式碼應為：\n" +
"  - A. `if age >= 5 and school == True:`\n" +
"  - B. `if age >= 5 and school == False:`\n" +
"  - C. `if age <= 17:`\n" +
"\n" +
"**正確答案：** (1) A；(2) A；(3) C\n" +
"\n" +
"## 題目 14\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-7`\n" +
"\n" +
"您正在撰寫一個Python程式來判斷使用者輸入的數字(num)是一位數、兩位數,還是超過兩位數(digits)。\n" +
"\n" +
"請選取正確的程式碼片段以完成程式碼。\n" +
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
"1. 第(1)個空格的程式碼應為：\n" +
"  - A. `if num > -10 and num < 10:`\n" +
"  - B. `if num > -100 and num < 100:`\n" +
"2. 第(2)個空格的程式碼應為：\n" +
"  - A. `if num > -100 and num < 100:`\n" +
"  - B. `elif num > -100 and num < 100:`\n" +
"  - C. `if num > -10 and num < 10:`\n" +
"  - D. `elif num > -10 and num < 10:`\n" +
"3. 第(3)個空格的程式碼應為：\n" +
"  - A. `else:`\n" +
"  - B. `elif:`\n" +
"\n" +
"**正確答案：** (1) A；(2) B；(3) A\n" +
"\n" +
"## 題目 15\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-1`\n" +
"\n" +
"您正在設計一個決策結構,以將學生的數字成績(grade)轉換成字母成績(letter_grade)。此程式必須依照下表的指定內容指派字母成績:\n" +
"舉例來說,如果使用者輸入90,輸出就應該是\"Your letter grade is A\"。同樣地,如果使用者輸入89,輸出就應該是\"Your letter grade is B\"\n" +
"\n" +
"| 百分比範圍 | 字母成績 |\n" +
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
"1. 第(1)個空格的程式碼應為：\n" +
"  - A. `if grade <= 90:`\n" +
"  - B. `if grade >= 90:`\n" +
"  - C. `elif grade > 90:`\n" +
"  - D. `elif grade >= 90:`\n" +
"2. 第(2)個空格的程式碼應為：\n" +
"  - A. `if grade > 80:`\n" +
"  - B. `if grade >= 80:`\n" +
"  - C. `elif grade > 80:`\n" +
"  - D. `elif grade >= 80:`\n" +
"3. 第(3)個空格的程式碼應為：\n" +
"  - A. `if grade > 70:`\n" +
"  - B. `if grade >= 70:`\n" +
"  - C. `elif grade > 70:`\n" +
"  - D. `elif grade >= 70:`\n" +
"4. 第(4)個空格的程式碼應為：\n" +
"  - A. `if grade > 65:`\n" +
"  - B. `if grade >= 65:`\n" +
"  - C. `elif grade > 65:`\n" +
"  - D. `elif grade >= 65:`\n" +
"\n" +
"**正確答案：** (1) B；(2) D；(3) D；(4) D\n" +
"\n" +
"## 題目 16\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-17`\n" +
"\n" +
"您正在撰寫程式碼來根據下列準則傳回字母成績：\n" +
"\n" +
"- 變數 `grade` 會將數字成績儲存成 0 到 100 之間的整數。\n" +
"- 90 到 100 的成績 = A。\n" +
"- 80 到 89 的成績 = B。\n" +
"- 70 到 79 的成績 = C。\n" +
"- 其他所有成績都不及格。\n" +
"\n" +
"請選取正確的程式碼片段以完成程式碼。\n" +
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
"1. 第(1)個空格：\n" +
"   - A. `if`\n" +
"   - B. `elif`\n" +
"   - C. `for`\n" +
"   - D. `else`\n" +
"2. 第(2)個空格：\n" +
"   - A. `elif`\n" +
"   - B. `if`\n" +
"   - C. `for`\n" +
"   - D. `else`\n" +
"3. 第(3)個空格：\n" +
"   - A. `elif`\n" +
"   - B. `if`\n" +
"   - C. `for`\n" +
"   - D. `else`\n" +
"4. 第(4)個空格：\n" +
"   - A. `elif`\n" +
"   - B. `if`\n" +
"   - C. `for`\n" +
"   - D. `else`\n" +
"5. 第(5)個空格：\n" +
"   - A. `or`\n" +
"   - B. `and`\n" +
"   - C. `not`\n" +
"6. 第(6)個空格：\n" +
"   - A. `elif:`\n" +
"   - B. `if:`\n" +
"   - C. `for:`\n" +
"   - D. `else:`\n" +
"7. 第(7)個空格：\n" +
"   - A. `elif:`\n" +
"   - B. `if:`\n" +
"   - C. `for:`\n" +
"   - D. `else:`\n" +
"\n" +
"**正確答案：** (1) A；(2) B；(3) A；(4) A；(5) B；(6) D；(7) D\n" +
"\n" +
"## 題目 17\n" +
"\n" +
"**主題：** `字串與資料串列 : 3-3`\n" +
"\n" +
"您正在為公司開發一個 Python 應用程式。您撰寫了以下這段程式碼：\n" +
"\n" +
"請評估這段程式碼，然後選取正確的選項以回答問題。\n" +
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
"1. 第 1 個 `print`顯示的內容為何?：\n" +
"   - A. `True`\n" +
"   - B. `False`\n" +
"2. 第 2 個 `print`顯示的內容為何?：\n" +
"   - A. `True`\n" +
"   - B. `False`\n" +
"3. 第 3 個 `print`顯示的內容為何?：\n" +
"   - A. `True`\n" +
"   - B. `False`\n" +
"4. 第 4 個 `print`顯示的內容為何?：\n" +
"   - A. `True`\n" +
"   - B. `False`\n" +
"\n" +
"**正確答案：** (1) B；(2) B；(3) A；(4) A\n" +
"\n" +
"## 題目 18\n" +
"\n" +
"**主題：** `字串與資料串列 : 3-8`\n" +
"\n" +
"您正在撰寫一個函式來執行數字的安全除法。\n" +
"\n" +
"您需要確保分母和分子會傳遞給函式，而且分母不為零。\n" +
"\n" +
"請選取正確的程式碼片段以完成程式碼。\n" +
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
"1. 第(1)個空格：\n" +
"  - A. `if numerator is None or denominator is None:`\n" +
"  - B. `if numerator is None and denominator is None:`\n" +
"  - C. `if numerator = None or denominator = None:`\n" +
"  - D. `if numerator = None and denominator = None:`\n" +
"2. 第(2)個空格：\n" +
"  - A. `elif denominator == 0:`\n" +
"  - B. `elif denominator = 0:`\n" +
"  - C. `elif denominator != 0:`\n" +
"  - D. `elif denominator in 0:`\n" +
"\n" +
"**正確答案：** (1) A；(2) A\n" +
"\n" +
"## 題目 19\n" +
"\n" +
"**主題：** `運算子 : 2-10`\n" +
"\n" +
"您正在撰寫一個程式來計算 DVD 租借金額。費用結構如下所示：\n" +
"\n" +
"- 預設費用(cost_per_night)是每晚1.59美元。\n" +
"- 如果客戶在晚上8點過後歸還DVD,則需支付一晚的費用。\n" +
"- 星期日(Sunday)租借的DVD可享整個租借期間七折優惠。\n" +
"- 星期四(Thursday)租借的DVD可享整個租借期間五折優惠。\n" +
"\n" +
"請選取正確的程式碼片段，以完成符合需求的程式碼。\n" +
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
"1. 第(1)個空格的程式碼應為：\n" +
"   - A. `!=\"n\":`\n" +
"   - B. `==\"n\":`\n" +
"   - C. `==\"y\":`\n" +
"2. 第(2)個空格的程式碼應為：\n" +
"   - A. `==\"Sunday\":`\n" +
"   - B. `>=\"Sunday\":`\n" +
"   - C. `is \"Sunday\":`\n" +
"3. 第(3)個空格的程式碼應為：\n" +
"   - A. `==\"Thursday\":`\n" +
"   - B. `<=\"Thursday\":`\n" +
"   - C. `is \"Thursday\":`\n" +
"\n" +
"**正確答案：** (1) B；(2) A；(3) A\n" +
"\n" +
"## 題目 20\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-9`\n" +
"\n" +
"您正在建立一個 Python 指令碼以評估文字輸入，並檢查是否有大寫和小寫。\n" +
"\n" +
"請問您應該依序使用哪四個程式碼片段來開發解決方案？請將四個程式碼片段移至作答區中，然後按照正確的順序排列。\n" +
"\n" +
"```python\n" +
"_(1)_\n" +
"_(2)_\n" +
"_(3)_\n" +
"_(4)_\n" +
"```\n" +
"\n" +
"預選答案：\n" +
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
"1. 第(1)個空格：\n" +
"2. 第(2)個空格：\n" +
"3. 第(3)個空格：\n" +
"4. 第(4)個空格：\n" +
"\n" +
"**正確答案：** (1) A；(2) E；(3) B；(4) C\n" +
"\n" +
"## 題目 21\n" +
"\n" +
"**主題：** `輸入與輸出 : 4-11`\n" +
"\n" +
"您正在為某間零售商店撰寫Python程式,將庫存追蹤自動化。您的第一項工作是讀取庫存交易的檔案。該檔案包含前一天的銷售量,包括商品識別碼、價格和數量。\n" +
"該檔案的資料範例如下所示:\n" +
"```csv\n" +
"10, 200, 5\n" +
"20, 100, 1\n" +
"```\n" +
"\n" +
"程式碼必須執行下列工作:\n" +
"- 讀取並列印檔案的每一行。\n" +
"- 忽略空白行。\n" +
"- 讀取所有行之後關閉檔案。\n" +
"\n" +
"您撰寫了以下這段程式碼，請問您應該針對第05行和第06行撰寫哪些程式碼?\n" +
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
"請選擇第 05 行與第 06 行的程式碼：\n" +
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
"**主題：** `自訂函式 : 0-0`\n" +
"\n" +
"您正在使用 Python 編寫數學公用程式的程式碼。您正在撰寫一個函式來方根。\n" +
"\n" +
"此函式必須符合下列需求:\n" +
"\n" +
"- `a` 為非負數時，回傳 `a ** (1 / b)`。\n" +
"- `a` 為負偶數時，回傳 `\"Result is an imaginary number\"`。\n" +
"- `a` 為負奇數時，回傳 `-(-a) ** (1 / b)`。\n" +
"\n" +
"請選取正確的程式碼片段以完成程式碼\n" +
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
"預選答案：A. `if a >= 0:`；B. `if a % 2 == 0:`；C. `else:`；D. `elif:`\n" +
"\n" +
"**正確答案：** (1) A；(2) C；(3) B；(4) C\n" +
"\n" +
"## 題目 23\n" +
"\n" +
"**主題：** `運算子 : 2-9`\n" +
"\n" +
"您正在編寫一個 Python 應用程式，其中在同一行程式碼上包含多個作業。您需要確定正確的作業順序。\n" +
"\n" +
"預選答案：\n" +
"A. 加法和減法 `+, -`\n" +
"B. 乘法和除法 `*, /, //, %`\n" +
"C. 一元正 `+`、負 `-`、非 `~`\n" +
"D. 括弧 `()`\n" +
"E. 指數 `**`\n" +
"F. 且 `and`\n" +
"\n" +
"1. 第 1 個執行的運算類別\n" +
"2. 第 2 個執行的運算類別\n" +
"3. 第 3 個執行的運算類別\n" +
"4. 第 4 個執行的運算類別\n" +
"5. 第 5 個執行的運算類別\n" +
"6. 第 6 個執行的運算類別\n" +
"\n" +
"**正確答案：** (1) D；(2) E；(3) C；(4) B；(5) A；(6) F\n" +
"\n" +
"> 校稿註記：這題的\"非\"不是邏輯非 `not` 而是一元非 `~` 即二補數取反。\n" +
"\n" +
"## 題目 24\n" +
"\n" +
"**主題：** `自訂函式 : 6-10`\n" +
"\n" +
"您為公司開發了一個 Python 應用程式。\n" +
"\n" +
"您想要在自己的程式碼中加入附註，好讓其他團隊成員能夠了解。\n" +
"\n" +
"請問您應該採取下列哪一項做法？\n" +
"\n" +
"- A. 在任何一行的 `//` 後面放置附註。\n" +
"- B. 在任何程式碼片段的 `/*` 和 `*/` 之間放置附註。\n" +
"- C. 在任何一行的 `#` 後面放置附註。\n" +
"- D. 在任何程式碼片段的 `<!--` 和 `-->` 之間放置附註。\n" +
"\n" +
"**正確答案：** C\n" +
"\n" +
"## 題目 25\n" +
"\n" +
"**主題：** `自訂函式 : 6-2`\n" +
"\n" +
"您建立了下列 Python 函式來計算數字的次方。加上行號僅為參考之用。\n" +
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
"請判斷下列敘述：\n" +
"\n" +
"1. Python 不會檢查第 01 到 04 行的語法。\n" +
"2. 第 02 和 03 行的井字號 `#` 是選擇性的。\n" +
"3. 第 06 行的字串將解釋為註解。\n" +
"4. 第 07 行包含內嵌註解。\n" +
"\n" +
"每個小題的選項皆為：A. 正確；B. 錯誤\n" +
"\n" +
"**正確答案：** (1) A；(2) B；(3) B；(4) A\n" +
"\n" +
"## 題目 26\n" +
"\n" +
"**主題：** `運算子 : 2-15`\n" +
"\n" +
"某位朋友要求您重構並記錄下列 Python 程式碼：\n" +
"\n" +
"Python 運算子順序如下：\n" +
"\n" +
"```python\n" +
"value1 = 9\n" +
"value2 = 4\n" +
"answer = (value1 % value2 * 10) // 2.0 ** 3.0 + value2\n" +
"```\n" +
"\n" +
"您執行程式碼。請問結果為何？\n" +
"\n" +
"- A. 顯示值 129。\n" +
"- B. 發生語法錯誤。\n" +
"- C. 顯示值 5.667。\n" +
"- D. 顯示值 5.0。\n" +
"\n" +
"**正確答案：** D\n" +
"\n" +
"## 題目 27\n" +
"\n" +
"**主題：** `運算子 : 2-14`\n" +
"\n" +
"您正在撰寫一個 Python 程式來評估算數公式。\n" +
"\n" +
"此公式描述為 `b` 等於 `a` 乘以負一之後再平方。其中 `a` 是即將輸入的成績，而 `b` 是結果。\n" +
"\n" +
"您所建立的程式碼片段如下。加上行號僅為參考之用。\n" +
"\n" +
"您需要確保結果正確。\n" +
"\n" +
"請選擇適當的程式碼片段至(1)~(6)位置，以完成第 02 行的程式碼。每個程式碼片段可能只使用一次，也可能使用多次，甚至完全用不到。\n" +
"\n" +
"請注意：每一個放置正確的程式碼都能獲得部分分數。\n" +
"\n" +
"```python\n" +
"a = eval(input(\"Enter a number for the question:\"))\n" +
"b = _(1)__(2)__(3)__(4)__(5)__(6)_\n" +
"```\n" +
"\n" +
"預選答案：A. `-`；B. `(`；C. `)`；D. `**`；E. `**2`；F. `2`；G. `a`\n" +
"\n" +
"1. 第(1)個空格：\n" +
"2. 第(2)個空格：\n" +
"3. 第(3)個空格：\n" +
"4. 第(4)個空格：\n" +
"5. 第(5)個空格：\n" +
"6. 第(6)個空格：\n" +
"\n" +
"**正確答案：** B → A → G → C → D → F\n" +
"\n" +
"## 題目 28\n" +
"\n" +
"**主題：** `運算子 : 2-1`\n" +
"\n" +
"某間銀行必須產生一份報表來顯示所有客戶每天的平均。這份報表必須截斷餘額的小數部分。\n" +
"\n" +
"請問哪兩個程式碼片段可達成目標？\n" +
"\n" +
"- A. `average_blance = int(total_deposits / number_of_customers)`\n" +
"- B. `average_blance = total_deposits // number_of_customers`\n" +
"- C. `average_blance = total_deposits ** number_of_customers`\n" +
"- D. `average_blance = float(total_deposits // number_of_customers)`\n" +
"\n" +
"**正確答案：** A、B\n" +
"\n" +
"## 題目 29\n" +
"\n" +
"**主題：** `自訂函式 : 6-1`\n" +
"\n" +
"某間銀行要將他們舊有的銀行交易程式碼轉至 Python。\n" +
"\n" +
"該銀行雇用您來記錄已移轉的程式碼。\n" +
"\n" +
"請問哪個文件記錄語法是正確的？\n" +
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
"**主題：** `自訂函式 : 6-7`\n" +
"\n" +
"請從選取正確的選項，以回答有關記錄 Python 程式碼的問題。\n" +
"\n" +
"1. 哪些字元代表單行文件字串的開頭和結尾？\n" +
"   - A. 單引號 `'`\n" +
"   - B. 雙引號 `\"`\n" +
"   - C. 兩個雙引號 `\"\"`\n" +
"   - D. 三個雙引號 `\"\"\"`\n" +
"2. 在記錄函式時，文件字串的標準位置在哪裡？\n" +
"   - A. 在函式宣告區塊前\n" +
"   - B. 緊接在函式標頭後面\n" +
"   - C. 在函式宣告區塊後\n" +
"   - D. 在程式的最後\n" +
"3. 請檢閱下列函式，哪個命令可列印文件字串？\n" +
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
"**正確答案：** (1) D；(2) B；(3) C\n" +
"\n" +
"## 題目 31\n" +
"\n" +
"**主題：** `運算子 : 2-7`\n" +
"\n" +
"您撰寫了以下這段程式碼：\n" +
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
"請問第二個與第三個 `print` 的輸出為何？\n" +
"\n" +
"1. 第二個 `print`顯示的內容為何?：\n" +
"- A. `Config1`\n" +
"- B. `Config1Config2`\n" +
"- C. `Config2`\n" +
"- D. `Config2Config1`\n" +
"2. 第三個 `print`顯示的內容為何?：\n" +
"- A. `Config1`\n" +
"- B. `Config1Config2`\n" +
"- C. `Config2`\n" +
"- D. `Config2Config1`\n" +
"\n" +
"**正確答案：** (1) B；(2) A\n" +
"\n" +
"## 題目 32\n" +
"\n" +
"**主題：** `字串與資料串列 : 3-1`\n" +
"\n" +
"您撰寫了以下這段程式碼。\n" +
"\n" +
"您執行程式碼。請問輸出值為何？\n" +
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
"**主題：** `輸入與輸出 : 4-4`\n" +
"\n" +
"請檢閱下列程式碼：\n" +
"\n" +
"```python\n" +
"x = \"oranges\"\n" +
"y = \"apples\"\n" +
"z = \"bananas\"\n" +
"data = \"{1} and {0} and {2}\"\n" +
"print(data.format(z, y, x))\n" +
"```\n" +
"\n" +
"請問 `print` 陳述式的輸出為何？\n" +
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
"**主題：** `字串與資料串列 : 3-5`\n" +
"\n" +
"您需要識別針對下列順序結構執行各種切片作業的結果：\n" +
"\n" +
"```python\n" +
"alph = \"abcdefghijklmnopqrstuvwxyz\"\n" +
"```\n" +
"\n" +
"預選答案：A. `def`；B. `abcdef`；C. `cde`；D. `defg`；E. `cdef`；F. `abcde`\n" +
"\n" +
"請將預選答案配對至下列 2 個小題。每種結果可能只使用一次，也可能使用多次，甚至完全用不到。\n" +
"\n" +
"1. `alph[3:6]`\n" +
"2. `alph[:6]`\n" +
"\n" +
"**正確答案：** (1) A；(2) B\n" +
"\n" +
"## 題目 35\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-23`\n" +
"\n" +
"某間公司要求您為造成薪資問題的部分程式碼偵錯。他們要求您找出薪資錯誤的來源。\n" +
"\n" +
"已宣告的變數如下：\n" +
"\n" +
"```python\n" +
"employee_pay = [15000, 120000, 35000, 45000]\n" +
"count = 0\n" +
"sum = 0\n" +
"```\n" +
"\n" +
"下列程式碼有兩個錯誤：\n" +
"\n" +
"```python\n" +
"for index in range(0, len(employee_pay)-1)):\n" +
"    count += 1\n" +
"    sum += employee_pay[index]\n" +
"average = sum // count\n" +
"print(\"The total payroll is:\", sum)\n" +
"```\n" +
"請問您應該使用哪個程式碼來修正錯誤？請選取適當的程式碼片段。\n" +
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
"**正確答案：** (1) D；(2) A\n" +
"\n" +
"## 題目 36\n" +
"\n" +
"**主題：** `字串與資料串列 : 3-10`\n" +
"\n" +
"您為公司開發了一個 Python 應用程式。\n" +
"\n" +
"有一份名為 `employees` 的清單包含 200 個員工姓名，最後五位員工是公司管理階層。您需要對清單進行篩選，以顯示不包含管理階層的所有員工。\n" +
"\n" +
"請問您應該使用哪兩個程式碼片段？每個正確答案都是一個完整的解決方案。（請選擇 2 個答案。）\n" +
"\n" +
"- A. `employees[1:-5]`\n" +
"- B. `employees[1:-4]`\n" +
"- C. `employees[0:-4]`\n" +
"- D. `employees[:-5]`\n" +
"- E. `employees[0:-5]`\n" +
"\n" +
"**正確答案：** D、E\n" +
"\n" +
"## 題目 37\n" +
"\n" +
"**主題：** `字串與資料串列 : 3-5`\n" +
"\n" +
"您需要識別針對下列順序結構執行各種切片作業的結果：\n" +
"\n" +
"`alph = \"abcdefghijklmnopqrstuvwxyz\"`\n" +
"\n" +
"請將預選答案配對至正確的切片作業。每種結果可能只使用一次，也可能使用多次，甚至完全用不到。\n" +
"\n" +
"\n" +
"```python\n" +
"alph = \"abcdefghijklmnopqrstuvwxyz\"\n" +
"```\n" +
"\n" +
"預選答案：A. `defghijklmno`；B. `pmjg`；C. `defghijklmnop`；D. `ponmlkjihgfe`；E. `dgjm`；F. `zwtqnkheb`\n" +
"\n" +
"請將預選答案配對至下列 4 個小題：\n" +
"\n" +
"1. `alph[3:15]`\n" +
"2. `alph[3:15:3]`\n" +
"3. `alph[15:3:-3]`\n" +
"4. `alph[::-3]`\n" +
"\n" +
"**正確答案：** (1) A；(2) E；(3) B；(4) F\n" +
"\n" +
"## 題目 38\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-20`\n" +
"\n" +
"您正在撰寫符合下列需求的程式碼：\n" +
"\n" +
"- 允許使用者不斷輸入字詞。\n" +
"- 輸出每個字詞的字元數。\n" +
"\n" +
"請中選取正確的選項以完成程式碼。\n" +
"\n" +
"```python\n" +
"x = \"Hello World\"\n" +
"_(1)_ x != \"QUIT\":\n" +
"    num = 0\n" +
"    _(2)_ char _(3)_ x:\n" +
"        num += 1\n" +
"    print(num)\n" +
"    x = input(\"Enter a new word or QUIT to exit: \")\n" +
"```\n" +
"\n" +
"1. 第(1)個空格：\n" +
"   - A. `for`\n" +
"   - B. `if`\n" +
"   - C. `while`\n" +
"2. 第(2)個空格：\n" +
"   - A. `for`\n" +
"   - B. `if`\n" +
"   - C. `while`\n" +
"3. 第(3)個空格：\n" +
"   - A. `and`\n" +
"   - B. `or`\n" +
"   - C. `in`\n" +
"   - D. `not`\n" +
"\n" +
"**正確答案：** (1) C；(2) A；(3) C\n" +
"\n" +
"## 題目 39\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-12`\n" +
"\n" +
"您正在建置一個 Python 程式來顯示 2 到 100 之間的所有質數（質數是指只有該數字本身和 1 能整除的任何數字）。\n" +
"\n" +
"請選擇適當的程式碼片段填入(1)~(5)位置，以完成程式碼。每個程式碼片段可能只使用一次，也可能使用多次，甚至完全用不到。\n" +
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
"預選答案：\n" +
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
"1. 第(1)個空格：\n" +
"2. 第(2)個空格：\n" +
"3. 第(3)個空格：\n" +
"4. 第(4)個空格：\n" +
"\n" +
"**正確答案：** (1) B；(2) G；(3) C；(4) E\n" +
"\n" +
"## 題目 40\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-8`\n" +
"\n" +
"您正在建立一個 Python 程式，讓使用者猜測 1 到 10 之間的數字。使用者最多可以猜三次。此程式必須允許三次猜測。如果使用者猜到正確的數字，此程式就必須停止要求猜測。\n" +
"\n" +
"您撰寫了以下這段程式碼。加上行號僅為參考之用。請選擇適當的程式碼片段填入(1)~(5)位置，以完成第 05、13 和 14 行。每個程式碼片段可能只使用一次，也可能使用多次，甚至完全用不到。\n" +
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
"預選答案：\n" +
"   - A. `break`\n" +
"   - B. `chance += 1`\n" +
"   - C. `chance = 2`\n" +
"   - D. `pass`\n" +
"   - E. `while chance < 3`\n" +
"   - F. `while chance < 3:`\n" +
"   - G. `while chance <= 3:`\n" +
"\n" +
"1. 第(1)個空格第05行的程式碼片段應為：\n" +
"2. 第(2)個空格第13行的程式碼片段應為：\n" +
"3. 第(3)個空格第14行的程式碼片段應為：\n" +
"\n" +
"**正確答案：** (1) G；(2) A；(3) B\n" +
"\n" +
"## 題目 41\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 0-0`\n" +
"\n" +
"請檢閱下列程式碼片段：\n" +
"\n" +
"請問此程式碼會列印幾行輸出？\n" +
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
"請問此程式碼會列印幾行輸出？\n" +
"\n" +
"選項：A. `1`；B. `2`；C. `3`；D. `4`\n" +
"\n" +
"**正確答案：** B\n" +
"\n" +
"## 題目 42\n" +
"\n" +
"**主題：** `自訂函式 : 6-13`\n" +
"\n" +
"某間遊戲開發公司需要設法找出清單中包含特定字母的單字數。\n" +
"\n" +
"請選取正確的程式碼片段以完成程式碼。\n" +
"\n" +
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
"\n" +
"letter = input(\"which letter would you like to count\")\n" +
"letter_count = count_letter(letter, word_list)\n" +
"print(\"There are: \", letter_count, \" word that contain \", letter)\n" +
"```\n" +
"\n" +
"1. 第(1)個空格：\n" +
"  - A. `word_list in word:`\n" +
"  - B. `word in word_list:`\n" +
"  - C. `word == word_list:`\n" +
"  - D. `word is word_list:`\n" +
"2. 第(2)個空格：\n" +
"  - A. `word is letter:`\n" +
"  - B. `letter is word:`\n" +
"  - C. `word in letter:`\n" +
"  - D. `letter in word:`\n" +
"\n" +
"**正確答案：** (1) B；(2) D\n" +
"\n" +
"## 題目 43\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-21`\n" +
"\n" +
"您在評估下列程式碼時發現錯誤。加上行號僅為參考之用。\n" +
"\n" +
"您必須更正第 03 行和第 06 行的程式碼。\n" +
"\n" +
"請評估這段程式碼，選取正確的選項以回答問題。\n" +
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
"1. 第 03 行應修改為哪個程式碼片段？：\n" +
"   - A. `while (index < 10):`\n" +
"   - B. `while [index < 10]`\n" +
"   - C. `while (index < 5):`\n" +
"   - D. `while [index < 5]`\n" +
"2. 第 06 行應修改為哪個程式碼片段？：\n" +
"   - A. `if numbers[index] == 6`\n" +
"   - B. `if numbers[index] == 6:`\n" +
"   - C. `if numbers(index) = 6:`\n" +
"   - D. `if numbers(index) != 6`\n" +
"\n" +
"**正確答案：** (1) A；(2) B\n" +
"\n" +
"## 題目 44\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-11`\n" +
"\n" +
"您正在建立一套適用於小學孩童的互動式乘法表助手程式。\n" +
"\n" +
"您需要完成一個名為 `times_tables` 的函式，以計算並顯示所有 2 到 12 的乘法表組合。如下所示：\n" +
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
"1. 第(1)個空格的程式碼應為：\n" +
"  - A. `for col in range(13):`\n" +
"  - B. `for col in range(2, 13):`\n" +
"  - C. `for col in range(2, 12, 1):`\n" +
"  - D. `for col in range(12):`\n" +
"2. 第(2)個空格的程式碼應為：\n" +
"  - A. `for row in range(13):`\n" +
"  - B. `for row in range(2, 12, 1):`\n" +
"  - C. `for row in range(2, 13):`\n" +
"  - D. `for row in range(12):`\n" +
"\n" +
"**正確答案：** (1) B；(2) C\n" +
"\n" +
"## 題目 45\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-21`\n" +
"\n" +
"您正在為某間線上產品配銷公司開發一個 Python 程式。\n" +
"\n" +
"此程式必須逐一查看產品清單 (`productIdList`)，然後在找到特定產品識別碼時逸出。\n" +
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
"1. 第(1)個空格：\n" +
"   - A. `while`\n" +
"   - B. `for`\n" +
"   - C. `if`\n" +
"   - D. `break`\n" +
"2. 第(2)個空格：\n" +
"   - A. `while`\n" +
"   - B. `for`\n" +
"   - C. `if`\n" +
"   - D. `break`\n" +
"3. 第(3)個空格：\n" +
"   - A. `continue`\n" +
"   - B. `break`\n" +
"   - C. `index += 1`\n" +
"   - D. `index = 1`\n" +
"\n" +
"**正確答案：** (1) A；(2) D；(3) C\n" +
"\n" +
"## 題目 46\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-16`\n" +
"\n" +
"您正在撰寫程式碼以使用星號建立 E 字形。您需要列印五行程式碼，其中第一行、第三行和第五行各有四個星號，而第二行和第四行各有一個星號。如下所示。\n" +
"\n" +
"請在方塊中輸入正確的數字以完成程式碼。請輸入每個整數數字。\n" +
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
"選項：\n" +
"\n" +
"1. 第(1)個空格：\n" +
"   - A. `1`\n" +
"   - B. `5`\n" +
"   - C. `6`\n" +
"   - D. `0`\n" +
"2. 第(2)個空格：\n" +
"   - A. `1`\n" +
"   - B. `4`\n" +
"   - C. `5`\n" +
"   - D. `6`\n" +
"\n" +
"**正確答案：** (1) C；(2) C\n" +
"\n" +
"## 題目 47\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-10`\n" +
"\n" +
"某間公司決定要發獎金給每年所得低於 150,000 美元的所有員工。下列公式會根據基本薪資和固定獎金套用至每位員工：\n" +
"\n" +
"新的薪資 = 目前薪資 × 103% + 500 美元獎金。\n" +
"\n" +
"您撰寫了程式碼，將員工薪資讀取到名為 `salary_list` 的變數中。\n" +
"\n" +
"您需要完成針對每位合格員工薪資套用加薪公式的程式碼。\n" +
"\n" +
"請選取正確的程式碼片段以完成程式碼。\n" +
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
"1. 第(1)個空格：\n" +
"  - A. `for index in range(len(salary_list) + 1):`\n" +
"  - B. `for index in range(len(salary_list) - 1):`\n" +
"  - C. `for index in range(len(salary_list)):`\n" +
"  - D. `for index in salary_list:`\n" +
"2. 第(2)個空格：\n" +
"   - A. `exit()`\n" +
"   - B. `continue`\n" +
"   - C. `break`\n" +
"   - D. `end`\n" +
"\n" +
"**正確答案：** (1) C；(2) B\n" +
"\n" +
"## 題目 48\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-21`\n" +
"\n" +
"您必須完成第 03 行和第 05 行的程式碼。\n" +
"\n" +
"請評估這段程式碼，選取正確的選項以回答問題。\n" +
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
"1. 第(1)個空格，在第03行使用哪個程式碼片段：\n" +
"   - A. `while index < 10:`\n" +
"   - B. `while [index < 10]`\n" +
"   - C. `while (index < 5)`\n" +
"   - D. `while [index < 5]`\n" +
"2. 第(2)個空格，在第05行使用哪個程式碼片段：\n" +
"   - A. `if numbers[index] == 6`\n" +
"   - B. `if numbers[index] == 6:`\n" +
"   - C. `if numbers(index) = 6:`\n" +
"   - D. `if numbers(index) != 6`\n" +
"\n" +
"**正確答案：** (1) A；(2) B\n" +
"\n" +
"## 題目 49\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-21`\n" +
"\n" +
"您正在為某間線上產品配銷公司開發一個 Python 程式。\n" +
"\n" +
"此程式必須逐一查看產品清單 (`productIdList`)，然後在找到特定產品識別碼時逸出。\n" +
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
"1. 第(1)個空格：\n" +
"   - A. `while`\n" +
"   - B. `for`\n" +
"   - C. `if`\n" +
"   - D. `break`\n" +
"2. 第(2)個空格：\n" +
"   - A. `while`\n" +
"   - B. `for`\n" +
"   - C. `if`\n" +
"   - D. `break`\n" +
"3. 第(3)個空格：\n" +
"   - A. `continue`\n" +
"   - B. `break`\n" +
"   - C. `index += 1`\n" +
"   - D. `index = 1`\n" +
"\n" +
"**正確答案：** (1) A；(2) D；(3) C\n" +
"\n" +
"## 題目 50\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-14`\n" +
"\n" +
"您正在撰寫一個 Python 程式來驗證員工識別碼。\n" +
"\n" +
"識別碼的格式必須是 `ddd-dd-dddd`，而且只能包含數字和虛線。如果格式正確，此程式必須列印 `True`；如果格式不正確，則列印 `False`。\n" +
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
"1. 第(1)個空格：\n" +
"   - A. `employee_number = \"\"`\n" +
"   - B. `employee_number = \"123\"`\n" +
"2. 第(2)個空格：\n" +
"   - A. `while employee_number != \"\"`\n" +
"   - B. `while employee_number != \"123\"`\n" +
"3. 第(3)個空格：\n" +
"   - A. `valid = False`\n" +
"   - B. `valid = True`\n" +
"4. 第(4)個空格：\n" +
"   - A. `valid = False`\n" +
"   - B. `valid = True`\n" +
"\n" +
"**正確答案：** (1) A；(2) B；(3) A；(4) B\n" +
"\n" +
"## 題目 51\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 5-13`\n" +
"\n" +
"您正在撰寫一個必須執行下列工作的 Python 函式：\n" +
"\n" +
"- 接受清單和字串做為參數。\n" +
"- 在清單中搜尋字串。\n" +
"- 如果字串存在清單中，則列印一則訊息，指出找到字串，然後停止逐一查看清單。\n" +
"- 如果字串不在清單中，則列印一則訊息，指出找不到字串。\n" +
"\n" +
"請問您應該按什麼順序排列程式碼片段以完成此函式？\n" +
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
"預選答案：\n" +
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
"1. 第(1)個空格的程式碼應為：\n" +
"2. 第(2)個空格的程式碼應為：\n" +
"3. 第(3)個空格的程式碼應為：\n" +
"4. 第(4)個空格的程式碼應為：\n" +
"5. 第(5)個空格的程式碼應為：\n" +
"6. 第(6)個空格的程式碼應為：\n" +
"\n" +
"\n" +
"**正確答案：** (1) F；(2) A；(3) B；(4) E；(5) C；(6) D\n" +
"\n" +
"## 題目 52\n" +
"\n" +
"**主題：** `錯誤處理與單元測試 : 8-1`\n" +
"\n" +
"對於下列每一項有關 `try` 陳述式的敘述，請選取[正確]或[錯誤]。\n" +
"\n" +
"1. `try` 陳述式可以包含一個或多個 `except` 子句。\n" +
"2. `try` 陳述式可以包含一個 `finally` 子句，但不含 `except` 子句。\n" +
"3. `try` 陳述式可以包含一個 `finally` 子句以及一個 `except` 子句。\n" +
"4. `try` 陳述式可以包含一個或多個 `finally` 子句。\n" +
"\n" +
"每個小題的選項皆為：A. 正確；B. 錯誤\n" +
"\n" +
"**正確答案：** (1) A；(2) B；(3) A；(4) B\n" +
"\n" +
"> 校稿註記：第2小題官方答案是\"**錯誤**\"，答題時選B。\n" +
"\n" +
"## 題目 53\n" +
"\n" +
"**主題：** `模組 : 7-10`\n" +
"\n" +
"某間公司需要有人協助更新他們的檔案系統。您必須建立一個執行下列動作的簡易檔案操作程式：\n" +
"\n" +
"- 使用指定的名稱建立檔案。\n" +
"- 將 `End of listing` 這段片語附加至檔案。\n" +
"\n" +
"您需要完成符合需求的程式碼。\n" +
"\n" +
"請選取正確的程式碼片段以完成程式碼。\n" +
"\n" +
"```python\n" +
"import os\n" +
"file = _(1)_\n" +
"    _(2)_(\"End of listing\")\n" +
"file.close()\n" +
"```\n" +
"\n" +
"1. 第(1)個空格的程式碼應為：\n" +
"  - A. `open('myFile.txt', 'a')`\n" +
"  - B. `open('myFile.txt', 'r')`\n" +
"  - C. `open('myFile.txt', 'w')`\n" +
"2. 第(2)個空格的程式碼應為：\n" +
"  - A. `append`\n" +
"  - B. `file.add`\n" +
"  - C. `file.write`\n" +
"  - D. `write`\n" +
"\n" +
"**正確答案：** (1) A；(2) C\n" +
"\n" +
"## 題目 54\n" +
"\n" +
"**主題：** `模組 : 7-9`\n" +
"\n" +
"某間公司需要有人協助更新他們的檔案系統。您必須建立一個執行下列動作的簡易檔案操作程式：\n" +
"\n" +
"- 查看檔案是否存在。\n" +
"- 如果檔案存在，則顯示檔案內容。\n" +
"\n" +
"您需要完成符合需求的程式碼。\n" +
"\n" +
"請選取正確的程式碼片段以完成程式碼。\n" +
"\n" +
"```python\n" +
"import os\n" +
"if _(1)_\n" +
"    file = open('myFile.txt')\n" +
"    _(2)_\n" +
"    file.close()\n" +
"```\n" +
"\n" +
"1. 第(1)個空格：\n" +
"  - A. `isfile('myFile.txt'):`\n" +
"  - B. `os.exist('myFile.txt'):`\n" +
"  - C. `os.find('myFile.txt'):`\n" +
"  - D. `os.path.isfile('myFile.txt'):`\n" +
"2. 第(2)個空格：\n" +
"  - A. `output('myFile.txt')`\n" +
"  - B. `print(file.get('myFile.txt'))`\n" +
"  - C. `print(file.read())`\n" +
"  - D. `print('myFile.txt')`\n" +
"\n" +
"**正確答案：** (1) D；(2) C\n" +
"\n" +
"## 題目 55\n" +
"\n" +
"**主題：** `模組 : 7-2`\n" +
"\n" +
"您撰寫了下列函式來讀取資料檔案並列印該檔案的每一行。加上行號僅為參考之用。\n" +
"\n" +
"當您執行程式時，卻收到第 03 行的錯誤。\n" +
"\n" +
"請問造成此錯誤的原因是什麼？\n" +
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
"執行程式時第 03 行發生錯誤，原因是什麼？\n" +
"\n" +
"- A. `path` 方法不存在 `os` 物件中。\n" +
"- B. `isfile` 方法不接受單一參數。\n" +
"- C. `isfile` 方法不存在 `path` 物件中。\n" +
"- D. 您需要匯入 `os` 程式庫。\n" +
"\n" +
"**正確答案：** D\n" +
"\n" +
"## 題目 56\n" +
"\n" +
"**主題：** `模組 : 7-10`\n" +
"\n" +
"請檢閱下列程式碼片段：\n" +
"\n" +
"```python\n" +
"f = open(\"python.txt\", \"a\")\n" +
"f.write(\"This is a line of text.\")\n" +
"f.close()\n" +
"```\n" +
"\n" +
"對於下列每一項有關程式碼片段的敘述，請選取正確或錯誤。\n" +
"\n" +
"1. 若 `python.txt` 不存在，就會建立此檔案。\n" +
"2. 此檔案中的資料會被覆寫。\n" +
"3. 其他程式碼可以在這段程式碼執行完畢後開啟此檔案。\n" +
"\n" +
"每個小題的選項皆為：A. 正確；B. 錯誤\n" +
"\n" +
"**正確答案：** (1) A；(2) B；(3) A\n" +
"\n" +
"## 題目 57\n" +
"\n" +
"**主題：** `錯誤處理與單元測試 : 8-2`\n" +
"\n" +
"您正在建立一個接受使用者輸入的程式。此程式必須將輸入轉型為整數，並且在無法轉型時正確處理錯誤。\n" +
"\n" +
"請選取正確的程式碼片段以完成程式碼。\n" +
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
"1. 第(1)個空格：\n" +
"   - A. `try:`\n" +
"   - B. `else:`\n" +
"   - C. `except:`\n" +
"   - D. `raise:`\n" +
"   - E. `finally:`\n" +
"2. 第(2)個空格：\n" +
"   - A. `try`\n" +
"   - B. `else`\n" +
"   - C. `except`\n" +
"   - D. `raise`\n" +
"   - E. `finally`\n" +
"\n" +
"**正確答案：** (1) A；(2) C\n" +
"\n" +
"## 題目 58\n" +
"\n" +
"**主題：** `錯誤處理與單元測試 : 8-5`\n" +
"\n" +
"您需要撰寫執行下列工作的程式碼：\n" +
"\n" +
"- 呼叫 `process()` 函式。\n" +
"- 如果 `process()` 函式擲回錯誤，則呼叫 `logError()` 函式。\n" +
"- 呼叫 `process()` 函式之後一律呼叫 `displayResult()` 函式。\n" +
"\n" +
"請選取適當的程式碼片段以完成程式碼。每個程式碼片段可能只使用一次，也可能使用多次，甚至完全用不到。\n" +
"\n" +
"預選答案：A. `assert:`；B. `except:`；C. `finally:`；D. `raise:`；E. `try:`。\n" +
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
"預選答案：A. `assert:`；B. `except:`；C. `finally:`；D. `raise:`；E. `try:`\n" +
"\n" +
"1. 第(1)個空格：\n" +
"2. 第(2)個空格：\n" +
"3. 第(3)個空格：\n" +
"\n" +
"**正確答案：** (1) E；(2) B；(3) C\n" +
"\n" +
"## 題目 59\n" +
"\n" +
"**主題：** `輸入與輸出 : 0-0`\n" +
"\n" +
"您正在為學校開發一個 Python 應用程式。此應用程式必須讀取並寫入資料至文字檔案。如果檔案不存在，此應用程式就必須建立檔案。如果檔案含有內容，此應用程式就必須刪除內容。\n" +
"\n" +
"請問您應該使用哪個程式碼片段？\n" +
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
"**主題：** `錯誤處理與單元測試 : 8-7`\n" +
"\n" +
"您撰寫了以下這段程式碼：\n" +
"\n" +
"`out.txt` 檔案不存在。您執行程式碼。\n" +
"\n" +
"請問以下哪一項敘述是正確的？\n" +
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
"`out.txt` 檔案不存在，執行程式碼時哪一項敘述正確？\n" +
"\n" +
"- A. 程式碼將正確執行，不會發生錯誤。\n" +
"- B. 程式碼將執行，但會產生邏輯錯誤。\n" +
"- C. 程式碼將產生執行階段錯誤。\n" +
"- D. 程式碼將產生語法錯誤。\n" +
"\n" +
"**正確答案：** A\n" +
"\n" +
"## 題目 61\n" +
"\n" +
"**主題：** `自訂函式 : 6-3`\n" +
"\n" +
"某間自行車公司正在建立一個程式，讓客戶能夠記錄騎乘英里數。此程式會根據客戶所記錄的英里數傳送訊息。\n" +
"\n" +
"您撰寫了以下這段 Python 程式碼。加上行號僅為參考之用。\n" +
"\n" +
"您需要定義兩個必要的函式。\n" +
"\n" +
"請問您應該針對第 01 行和第 04 行使用哪兩個程式碼片段？每個正確答案都是解決方案的一部份。（請選擇 2 個答案。）\n" +
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
"1. 第(1)個空格：\n" +
"  - A. 第 01 行 `def get_name():`\n" +
"  - B. 第 01 行 `def get_name(biker):`\n" +
"  - C. 第 01 行 `def get_name(name):`\n" +
"2. 第(2)個空格：\n" +
"  - D. 第 04 行 `def calc_calories():`\n" +
"  - E. 第 04 行 `def calc_calories(miles, burn_rate):`\n" +
"  - F. 第 04 行 `def calc_calories(miles, calories_per_mile):`\n" +
"\n" +
"**正確答案：** (1) A；(2) F\n" +
"\n" +
"## 題目 62\n" +
"\n" +
"**主題：** `字串與資料串列 : 3-4`\n" +
"\n" +
"某位同事撰寫了一個程式來輸入名稱至資料庫中。然而，此程式卻將每個名稱中的字母前後顛倒。\n" +
"\n" +
"您需要撰寫一個 Python 函式來按照正確順序輸出名稱中的字元。\n" +
"\n" +
"```python\n" +
"#Function reverses characters in a string.\n" +
"#returns new string in reversed order.\n" +
"def reverse_name(backward_name):\n" +
"    forward_name = \"\"\n" +
"    length = _(1)_\n" +
"    while length >= 0:\n" +
"        forward_name += _(2)_\n" +
"        length = length - 1\n" +
"    return forward_name\n" +
"\n" +
"print(reverse_name(\"nohtyp\"))\n" +
"```\n" +
"\n" +
"1. 第(1)個空格：\n" +
"  - A. `backward_name`\n" +
"  - B. `len(backward_name) - 1`\n" +
"  - C. `range(0, len(backward_name), -1)`\n" +
"  - D. `range(len(backward_name) - 1, -1, -1)`\n" +
"2. 第(2)個空格：\n" +
"  - A. `backward_name[index]`\n" +
"  - B. `backward_name[length]`\n" +
"  - C. `backward_name[length + 1]`\n" +
"  - D. `backward_name[len(backward_name) - len(forward_name)]`\n" +
"\n" +
"**正確答案：** (1) B；(2) B\n" +
"\n" +
"## 題目 63\n" +
"\n" +
"**主題：** `模組 : 7-8`\n" +
"\n" +
"您正在撰寫一個程式來隨機指派房間 (`room_number`) 和團隊建立組別 (`group`) 以進行公司培訓活動。\n" +
"\n" +
"請選取正確的程式碼片段以完成程式碼。\n" +
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
"1. 第(1)個空格的程式碼應為：\n" +
"  - A. `room_number = random(1, 50)`\n" +
"  - B. `room_number = random.randint(1, 50)`\n" +
"  - C. `room_number = random.shuffle(1, 50)`\n" +
"  - D. `room_number = random.random(1, 50)`\n" +
"2. 第(2)個空格的程式碼應為：\n" +
"  - A. `group = random.choice(groupList)`\n" +
"  - B. `group = random.randange(groupList)`\n" +
"  - C. `group = random.shuffle(groupList)`\n" +
"  - D. `group = random.sample(groupList)`\n" +
"\n" +
"**正確答案：** (1) B；(2) A\n" +
"\n" +
"## 題目 64\n" +
"\n" +
"**主題：** `錯誤處理與單元測試 : 8-4`\n" +
"\n" +
"您需要測試某個物件是否為特定類別的執行個體。\n" +
"\n" +
"請問您應該如何設定單元測試？\n" +
"\n" +
"請選取正確的選項以完成程式碼。\n" +
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
"1. 第(1)個空格：\n" +
"   - A. `define`\n" +
"   - B. `import`\n" +
"   - C. `include`\n" +
"   - D. `using`\n" +
"2. 第(2)個空格：\n" +
"   - A. `unittest.TestCase`\n" +
"   - B. `test.TestCase`\n" +
"   - C. `TestCase.unittest`\n" +
"   - D. `TestCase.test`\n" +
"3. 第(3)個空格：\n" +
"   - A. `assert_isInstance(self):`\n" +
"   - B. `eval_isInstance(self):`\n" +
"   - C. `test_isInstance(self):`\n" +
"   - D. `try_isInstance(self):`\n" +
"4. 第(4)個空格：\n" +
"   - A. `self.assertIsInstance(obj, cls, msg=None)`\n" +
"   - B. `test.assertIsInstance(obj, cls, msg=None)`\n" +
"   - C. `this.assertIsInstance(obj, cls, msg=None)`\n" +
"\n" +
"**正確答案：** (1) B；(2) A；(3) C；(4) A\n" +
"\n" +
"## 題目 65\n" +
"\n" +
"**主題：** `模組 : 7-5`\n" +
"\n" +
"您任職於某個遊戲開發團隊。\n" +
"\n" +
"您需要撰寫程式碼來產生符合下列需求的隨機數字：\n" +
"\n" +
"- 此數字是 5 的倍數。\n" +
"- 最低數字是 5。\n" +
"- 最高數字是 100。\n" +
"\n" +
"請問哪兩個程式碼片段將符合需求？每個正確答案都是一個完整的解決方案。（請選擇 2 個答案。）\n" +
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
"**正確答案：** B、C\n" +
"\n" +
"## 題目 66\n" +
"\n" +
"**主題：** `自訂函式 : 6-6`\n" +
"\n" +
"對於下列每一項有關以下函式的敘述，請選取[正確]或[錯誤]。\n" +
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
"請判斷下列敘述：\n" +
"\n" +
"1. `grosspay()` 的函式呼叫會產生語法錯誤。\n" +
"2. `grosspay(salary=50000)` 的函式呼叫不會傳回任何結果。\n" +
"3. `grosspay(pieces=500, piecerate=4)` 的函式呼叫所傳回的結果為 2000。\n" +
"\n" +
"每個小題的選項皆為：A. 正確；B. 錯誤\n" +
"\n" +
"**正確答案：** (1) B；(2) B；(3) A\n" +
"\n" +
"## 題目 67\n" +
"\n" +
"**主題：** `自訂函式 : 6-5`\n" +
"\n" +
"您正在撰寫一個函式來增加遊戲內的玩家分數。\n" +
"\n" +
"此函式具有下列需求：\n" +
"\n" +
"- 如果沒有針對 `points` 指定任何值，則 `points` 的起始值為一。\n" +
"- 如果 `bonus` 為 `True`，則 `points` 必須加倍。\n" +
"\n" +
"您撰寫了以下這段程式碼。加上行號僅為參考之用。\n" +
"\n" +
"對於下列每一項敘述，請選取[正確]或[錯誤]。\n" +
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
"請判斷：\n" +
"\n" +
"1. 為符合需求，第 01 行應變更為 `def increment_score(score, bonus, points=1)`。\n" +
"2. 若不變更第 01 行，而僅使用兩個參數呼叫函式，就會發生錯誤。\n" +
"3. 第 03 行也會修改第 06 行宣告之變數 `points` 的值。\n" +
"4. 以預設值定義任何參數之後，右側的所有參數也必須使用預設值來定義。\n" +
"5. 若不變更第 01 行，而僅使用兩個參數來呼叫此函式，第三個參數的值將為 `None`。\n" +
"\n" +
"每個小題的選項皆為：A. 正確；B. 錯誤\n" +
"\n" +
"**正確答案：** (1) A；(2) A；(3) B；(4) A；(5) B\n" +
"\n" +
"## 題目 68\n" +
"\n" +
"**主題：** `模組 : 7-11`\n" +
"\n" +
"`Script.py` 檔案包含下列程式碼：\n" +
"\n" +
"您執行下列命令：\n" +
"\n" +
"請問此命令的輸出為何？\n" +
"\n" +
"```python\n" +
"import sys\n" +
"print(sys.argv[2])\n" +
"```\n" +
"\n" +
"執行命令：\n" +
"\n" +
"```text\n" +
"python Script.py Cheese Bacon Bread\n" +
"```\n" +
"\n" +
"輸出為何？\n" +
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
"**主題：** `自訂函式 : 6-11`\n" +
"\n" +
"下列函式會計算使用指數之運算式的值。\n" +
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
"請判斷：\n" +
"\n" +
"1. 程式碼將在第 03 行和第 04 行產生錯誤。\n" +
"2. 程式碼將在第 02 行和第 05 行產生錯誤。\n" +
"3. 程式碼將正確地將資料輸出到控制台。\n" +
"\n" +
"每個小題的選項皆為：A. 正確；B. 錯誤\n" +
"\n" +
"**正確答案：** (1) B；(2) A；(3) B\n" +
"\n" +
"## 題目 70\n" +
"\n" +
"**主題：** `模組 : 7-3`\n" +
"\n" +
"您正在撰寫程式碼來產生一個最小值 5 與最大值 11 的隨機整數。\n" +
"\n" +
"請問您應該使用哪兩個函式？每個正確答案都是一個完整的解決方案。\n" +
"\n" +
"- A. `random.randint(5, 12)`\n" +
"- B. `random.randrange(5, 12, 1)`\n" +
"- C. `random.randint(5, 11)`\n" +
"- D. `random.randrange(5, 11, 1)`\n" +
"\n" +
"**正確答案：** B、C\n" +
"\n" +
"## 題目 71\n" +
"\n" +
"**主題：** `自訂函式 : 6-9`\n" +
"\n" +
"學生們正在參加學校的活動之夜。下列函式會告訴學生該前往何處參加活動：\n" +
"\n" +
"請問哪兩個函式呼叫是正確的？（請選擇 2 個答案。）\n" +
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
"哪兩個函式呼叫正確？\n" +
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
"**正確答案：** A、C\n" +
"\n" +
"## 題目 72\n" +
"\n" +
"**主題：** `錯誤處理與單元測試 : 8-3`\n" +
"\n" +
"請從每個下拉式清單中選取正確的選項，以完成有關 `assert` 方法的敘述。\n" +
"\n" +
"請注意：每一個答對的項目都能獲得部分分數。\n" +
"\n" +
"請選擇適合的 `assert` 方法：\n" +
"\n" +
"1. 若要測試變數 `a` 與 `b` 的值是否相同：\n" +
"   - A. `assertEqual(a, b)`\n" +
"   - B. `assertTrue(x)`\n" +
"   - C. `assertIs(a, b)`\n" +
"   - D. `assertIn(a, b)`\n" +
"2. 若要測試物件 `a` 與 `b` 是否相同：\n" +
"   - A. `assertEqual(a, b)`\n" +
"   - B. `assertTrue(x)`\n" +
"   - C. `assertIs(a, b)`\n" +
"   - D. `assertIn(a, b)`\n" +
"3. 若要測試清單中是否存在某個值：\n" +
"   - A. `assertEqual(a, b)`\n" +
"   - B. `assertTrue(x)`\n" +
"   - C. `assertIs(a, b)`\n" +
"   - D. `assertIn(a, b)`\n" +
"\n" +
"**正確答案：** (1) A；(2) C；(3) D\n" +
"\n" +
"## 題目 73\n" +
"\n" +
"**主題：** `模組 : 7-6`\n" +
"\n" +
"您正在建立一個函式，將傳入函式的數字當作浮點數 (`float`) 值操作。此函式必須執行下列工作：\n" +
"\n" +
"- 提取浮點數 (`float`) 的絕對值。\n" +
"- 移除整數後面的任何小數點。\n" +
"\n" +
"請問您應該使用哪兩個數學函式？每個正確答案都是解決方案的一部分。（請選擇 2 個答案。）\n" +
"\n" +
"- A. `math.floor(x)`\n" +
"- B. `math.fabs(x)`\n" +
"- C. `math.frexp(x)`\n" +
"- D. `math.fmod(x)`\n" +
"\n" +
"**正確答案：** A、B\n" +
"\n" +
"## 題目 74\n" +
"\n" +
"**主題：** `模組 : 7-7`\n" +
"\n" +
"您正在撰寫一個程式來顯示 My Healthy Eats Delivery 的特價優惠。請從每個下拉式清單中選取正確的選項，以完成第 04、05 和 15 行的程式碼。\n" +
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
"1. 第(1)個空格，第 04 行，擷取目前日期：\n" +
"   - A. `now = datetime()`\n" +
"   - B. `now = datetime.date()`\n" +
"   - C. `now = datetime.datetime.now()`\n" +
"   - D. `now = new date()`\n" +
"2. 第(2)個空格，第 05 行，擷取工作日的完整名稱：\n" +
"   - A. `today = now.strftime(\"%A\")`\n" +
"   - B. `today = now.strftime(\"%B\")`\n" +
"   - C. `today = now.strftime(\"%W\")`\n" +
"   - D. `today = now.strftime(\"%Y\")`\n" +
"3. 第(3)個空格，第 15 行，計算當週剩餘天數：\n" +
"   - A. `daysLeft = now - now.weekday()`\n" +
"   - B. `daysLeft = today - today.weekday()`\n" +
"   - C. `daysLeft = 6 - now.weekday()`\n" +
"   - D. `daysLeft = 6 - datetime.datetime.weekday()`\n" +
"\n" +
"**正確答案：** (1) C；(2) A；(3) C\n" +
"\n" +
"## 題目 75\n" +
"\n" +
"**主題：** `自訂函式 : 6-11`\n" +
"\n" +
"※下列函式會計算使用指數之運算式的值。\n" +
"\n" +
"對於下列每一項敘述，請選取[正確]或[錯誤]。\n" +
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
"請判斷：\n" +
"\n" +
"1. 程式碼將在第 03 行和第 04 行產生錯誤。\n" +
"2. 程式碼將在第 02 行和第 05 行產生錯誤。\n" +
"3. 程式碼將正確地將資料輸出到控制台。\n" +
"\n" +
"每個小題的選項皆為：A. 正確；B. 錯誤\n" +
"\n" +
"**正確答案：** (1) B；(2) A；(3) B\n" +
"\n" +
"## 題目 76\n" +
"\n" +
"**主題：** `自訂函式 : 6-8`\n" +
"\n" +
"請檢閱下列程式。行號僅為參考之用。\n" +
"\n" +
"對於下列每一項有關程式的敘述，請選取[正確]或[錯誤]。\n" +
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
"請判斷下列敘述：\n" +
"\n" +
"1. 此函式會傳回一個值。\n" +
"2. 第 12 和 15 行的函式呼叫無效。\n" +
"3. 第 14 和 16 行的函式呼叫會產生錯誤。\n" +
"\n" +
"每個小題的選項皆為：A. 正確；B. 錯誤\n" +
"\n" +
"**正確答案：** (1) B；(2) B；(3) B\n" +
"\n" +
"## 題目 77\n" +
"\n" +
"**主題：** `輸入與輸出 : 4-9`\n" +
"\n" +
"您正在撰寫一個處理檔案的函式。\n" +
"- 您需要確保此函式會在檔案不存在時傳回None。\n" +
"- 如果檔案存在,此函式必須傳回第一行。\n" +
"\n" +
"您撰寫了以下這段程式碼：\n" +
"\n" +
"請選擇正確程式碼片段。\n" +
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
"預選答案：\n" +
"- A. `with open(filename, 'r') as file:`\n" +
"- B. `return None`\n" +
"- C. `return file.readline()`\n" +
"- D. `else:`\n" +
"- E. `if os.path.isfile(filename):`\n" +
"\n" +
"1. 第(1)個空格：\n" +
"2. 第(2)個空格：\n" +
"3. 第(3)個空格：\n" +
"4. 第(4)個空格：\n" +
"5. 第(5)個空格：\n" +
"\n" +
"**正確答案：** (1) E；(2) A；(3) C；(4) D；(5) B\n" +
"\n" +
"## 題目 補充1\n" +
"\n" +
"**主題：** `變數與資料型態 : 1-2`\n" +
"\n" +
"學校正在開發一個程式記錄學生資料並且儲存到資料庫。在這個程式中將會處理各種型態的資料。\n" +
"\n" +
"以下的變數宣告後，它們的資料類別依序是？\n" +
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
"**主題：** `變數與資料型態 : 1-6`\n" +
"\n" +
"在 Python 程式中，如果希望使用者輸入時，即使輸入了小數，程式也能自動轉為整數來進行運算，你應該使用以下哪個程式碼片段？\n" +
"\n" +
"- A. `total = input(\"請輸入總數？\")`\n" +
"- B. `total = int(input(\"請輸入總數？\"))`\n" +
"- C. `total = str(input(\"請輸入總數？\"))`\n" +
"- D. `total = float(input(\"請輸入總數？\"))`\n" +
"\n" +
"**正確答案：** B\n" +
"\n" +
"> 校稿註記：`int(input(...))` 可將整數格式的文字轉成整數；若實際輸入 `3.5`，則會產生 `ValueError`，無法直接轉換。**題目有錯，但還是選B**\n" +
"\n" +
"## 題目 補充3\n" +
"\n" +
"**主題：** `判斷式與迴圈流程控制 : 0-0`\n" +
"\n" +
"你開發一個程式碼用來判斷整數是奇數還是偶數：\n" +
"\n" +
"```python\n" +
"from random import randint\n" +
"num = randint(1, 100)\n" +
"_(1)_\n" +
"print(\"%d 是偶數\" % num)\n" +
"_(2)_\n" +
"print(\"%d 是奇數\" % num)\n" +
"```\n" +
"\n" +
"以上程式碼的空格中的程式碼依序為：\n" +
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
"**主題：** `運算子 : 2-11`\n" +
"\n" +
"你設計了一個數學運算的 Python 程式，程式碼如下：\n" +
"\n" +
"```python\n" +
"a = 21\n" +
"b = 5\n" +
"print(a / b)\n" +
"print(a // b)\n" +
"print(a % b)\n" +
"```\n" +
"\n" +
"下列每個數學運算式的結果依序是？\n" +
"\n" +
"- A. `4.2`、`4`、`1`\n" +
"- B. `4`、`4`、`4`\n" +
"- C. `1`、`4`、`4.2`\n" +
"\n" +
"**正確答案：** A\n" +
"\n" +
"## 題目 補充5\n" +
"\n" +
"**主題：** `字串與資料串列 : 3-2`\n" +
"\n" +
"在下列的程式碼中：\n" +
"\n" +
"```python\n" +
"slist = ['a', 'b', 'c', 'd', 'e', 'f']\n" +
"print('f' in slist)\n" +
"```\n" +
"\n" +
"執行後會輸出列印的內容？\n" +
"\n" +
"- A. `5`\n" +
"- B. `6`\n" +
"- C. `True`\n" +
"- D. `False`\n" +
"\n" +
"**正確答案：** C\n";
