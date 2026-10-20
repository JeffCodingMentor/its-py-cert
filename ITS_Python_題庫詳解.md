# ITS Python 題庫詳解 / Concise Bilingual Explanations

適用：網站 v3.2，共 82 題；Q78–Q82 對應原補充1–補充5。每題的中英文說明可依網頁語言擇一顯示。

For website v3.2, covering all 82 questions. Q78–Q82 are the five former supplements. Display only the explanation matching the selected language.

「題庫答案」沿用現有網站；原題有筆誤、條件不足或答案爭議時，詳解會簡短註明 Python 的實際行為。本檔不變更網站題目或判分。

“Answer key” preserves the current website answers. Explanations flag typos, missing assumptions, or conflicting answers and distinguish them from actual Python behavior. This file does not change questions or grading.

## Q01

- 題庫答案 / Answer key：C
- 中文：`input()` 從主控台讀取一行文字，並以 `str` 傳回；輸入結果存入 `data`。
- English: `input()` reads a line from the console and returns a `str`. The result is assigned to `data`.

## Q02

- 題庫答案 / Answer key：C、D
- 中文：C 用格式化、D 用字串串接，兩者都只替 `item` 加雙引號，再以逗號接上 `sales`。本題的兩次 `input()` 都傳回字串。
- English: C uses formatting and D uses concatenation. Both quote only `item` and separate it from `sales` with a comma. Both `input()` calls return strings.

## Q03

- 題庫答案 / Answer key：(1) B；(2) B；(3) C；(4) D
- 中文：`+1E10` 與 `5.0` 都是 `float`；`"True"` 有引號，是 `str`；`False` 沒有引號，是 `bool`。
- English: `+1E10` and `5.0` are floats. Quoted `"True"` is a string; unquoted `False` is a Boolean.

## Q04

- 題庫答案 / Answer key：B
- 中文：`name = input()` 會呼叫輸入函式，並把結果存入 `name`，供下一行列印。`name = input` 只會儲存函式本身。
- English: `name = input()` calls the function and stores the entered text for printing. `name = input` stores the function itself instead.

## Q05

- 題庫答案 / Answer key：(1) F；(2) E；(3) D
- 中文：格式欄位依序是 `{0:10}`、`{1:5.1f}`、`{2:7.2f}`。字串預設靠左；數字預設靠右，`.1f`、`.2f` 分別保留 1、2 位小數。
- English: Use `{0:10}`, `{1:5.1f}`, and `{2:7.2f}`. Strings align left by default, while numbers align right. `.1f` and `.2f` display one and two decimal places.

## Q06

- 題庫答案 / Answer key：(1) B；(2) A；(3) B
- 中文：`input()` 使 `age` 為 `str`。假設年份與年齡輸入為整數文字，`eval()` 後相減得到 `int`；`str(born)` 讓組合後的 `message` 為 `str`。
- English: `age` is a string because it comes from `input()`. Assuming integer inputs, subtracting their evaluated values produces an integer. Converting `born` with `str()` makes `message` a string.

## Q07

- 題庫答案 / Answer key：(1) C；(2) D；(3) B
- 中文：字典的鍵是整數、值是字串，但 `input()` 取得的 `room` 是字串，因此 `"1"` 不等於鍵 `1`。先用 `int()` 轉型才能依房號查找。
- English: The dictionary has integer keys and string values, but `room` is a string. Thus `"1"` does not match key `1`. Convert the input with `int()` before lookup.

## Q08

- 題庫答案 / Answer key：C
- 中文：`%B` 是月份全名、`%d` 是兩位日期、`%y` 是兩位年份。題庫選 C；英語地區設定下實際輸出為 `April-07-17`，不會自動變成全大寫。
- English: `%B` gives the full month name, `%d` the two-digit day, and `%y` the two-digit year. The key is C, but an English locale produces `April-07-17`, not uppercase `APRIL`.

## Q09

- 題庫答案 / Answer key：(1) A；(2) C；(3) D
- 中文：用 `float(input(...))` 讀入數值，遇到 `-1` 停止；`format(average, '.2f')` 會產生兩位小數的字串，再用 `+` 串接輸出。注意 C 中的 `{}` 不會被代換，會原樣顯示。
- English: Read numeric ratings with `float(input(...))` and stop at `-1`. Built-in `format(average, '.2f')` returns a string with two decimal places; `+` joins it to the message. The `{}` in option C remains literal rather than being replaced.

## Q10

- 題庫答案 / Answer key：(1) B；(2) A
- 中文：用 `==` 比較清單內容，再用 `else:` 處理不相等的情況。`=` 是指派，不能代替相等比較。
- English: Use `==` to compare list contents and `else:` for the unequal case. `=` assigns a value; it is not an equality comparison.

## Q11

- 題庫答案 / Answer key：A
- 中文：第一個條件不成立；第二個條件中的 `rank > 3` 也不成立。因此執行 `else`，得到 `76 - 5 = 71`。
- English: The first condition fails, and `rank > 3` makes the second condition false too. The `else` branch gives `76 - 5 = 71`.

## Q12

- 題庫答案 / Answer key：(1) A；(2) B；(3) A；(4) A
- 中文：依比較式判讀：`==` 判斷相等、`<=` 包含相等、`>` 判斷大於；最後的 `=` 不是比較。原程式含語法錯誤，實際整份執行時不會先列印前面的結果。
- English: Reading the comparisons individually: `==` tests equality, `<=` includes equality, and `>` means greater than. The final `=` is invalid here. As written, the syntax error prevents the entire script from running.

## Q13

- 題庫答案 / Answer key：(1) A；(2) A；(3) C
- 中文：先判斷年滿 5 歲且在校者收 10 元；非在校者再依是否滿 18 歲收 20 或 50 元。未滿 5 歲不進入這些分支，維持 `rate = 0`。
- English: Charge students aged five or older 10. For nonstudents aged five or older, charge 20 through age 17 and 50 afterward. Younger children keep the initial rate of zero.

## Q14

- 題庫答案 / Answer key：(1) A；(2) B；(3) A
- 中文：先檢查 `-10 < num < 10`，再以 `elif` 檢查 `-100 < num < 100`，其餘交給 `else`。使用 `elif` 可避免一位數又被覆判為兩位數。
- English: Check `-10 < num < 10` first, then `-100 < num < 100` with `elif`, and use `else` for the rest. `elif` prevents a one-digit number from being classified again.

## Q15

- 題庫答案 / Answer key：(1) B；(2) D；(3) D；(4) D
- 中文：依 90、80、70、65 由高到低檢查，第一個使用 `if`，後續使用 `elif`。`>=` 才能包含各級距的下限，剩餘分數為 F。
- English: Check thresholds 90, 80, 70, and 65 from highest to lowest. Start with `if`, then use `elif`. `>=` includes each lower boundary; remaining grades receive F.

## Q16

- 題庫答案 / Answer key：(1) A；(2) B；(3) A；(4) A；(5) B；(6) D；(7) D
- 中文：外層用 `if/else`；內層依序用 `if/elif/elif/else`。C 級須同時符合 `grade < 80` 與 `grade > 69`，所以用 `and`；原碼只檢查上限，完整驗證應再加 `grade >= 0`。
- English: Use an outer `if/else` and an inner `if/elif/elif/else`. Grade C requires both `grade < 80` and `grade > 69`, so use `and`. The original upper-bound check should also include `grade >= 0` for full validation.

## Q17

- 題庫答案 / Answer key：(1) B；(2) B；(3) A；(4) A
- 中文：原本兩個清單既非同一物件，內容也不同，所以前兩次都是 `False`。執行 `numList = alphaList` 後，兩個名稱指向同一清單，後兩次都是 `True`。
- English: Initially the lists are different objects with different contents, so both tests are false. After `numList = alphaList`, both names refer to the same list, making both tests true.

## Q18

- 題庫答案 / Answer key：(1) A；(2) A
- 中文：任一參數為 `None` 就代表缺值，因此用 `or`。接著以 `elif denominator == 0:` 排除除以零，其餘才執行除法。
- English: Use `or` because either `None` argument means a missing value. Then check `denominator == 0` before performing division.

## Q19

- 題庫答案 / Answer key：(1) B；(2) A；(3) A
- 中文：`.lower()` 把逾時回答轉為 `n`，此時加算一晚；`.capitalize()` 使星期名稱可與 `Sunday`、`Thursday` 比較。兩者分別乘上 0.7 與 0.5。
- English: `.lower()` normalizes a late-return answer to `n`, adding one night. `.capitalize()` lets the weekday match `Sunday` or `Thursday`, which apply factors of 0.7 and 0.5.

## Q20

- 題庫答案 / Answer key：(1) A；(2) E；(3) B；(4) C
- 中文：先讀取 `name`，再比較小寫版本與原字串；不符時再比較大寫版本，最後處理混合大小寫。此判法會把不含字母的輸入也歸入第一類。
- English: Read `name`, compare it with its lowercase form, then with its uppercase form, and use `else` for mixed case. Inputs without letters also match the first branch.

## Q21

- 題庫答案 / Answer key：D
- 中文：`readline()` 在檔尾傳回 `''`，空白行則通常是 `'\n'`。先排除檔尾，再跳過空白行；到檔尾才關閉檔案。
- English: `readline()` returns `''` at end of file, while a blank line is usually `'\n'`. Check for end of file first, skip blank lines, and close the file when reading finishes.

## Q22

- 題庫答案 / Answer key：(1) A；(2) C；(3) B；(4) C
- 中文：依題目指定規則，先判斷 `a >= 0`，否則依 `a % 2` 分支。數學上這個規則有誤：負數能否開實數根應看根次 `b` 的奇偶，而不是 `a`；`b` 也不可為 0。
- English: The supplied rules first test `a >= 0`, then the parity of `a`. Mathematically, negative radicands require checking whether the root degree `b` is odd, not whether `a` is odd; `b` must also be nonzero.

## Q23

- 題庫答案 / Answer key：(1) D；(2) E；(3) C；(4) B；(5) A；(6) F
- 中文：本題由先到後為括號、次方、一元運算、乘除、加減、`and`。其中 `~` 是位元反相，不是邏輯運算子 `not`。
- English: The order here is parentheses, exponentiation, unary operations, multiplication/division, addition/subtraction, then `and`. `~` means bitwise inversion, not logical `not`.

## Q24

- 題庫答案 / Answer key：C
- 中文：Python 以 `#` 開始單行註解，直到該行結束。`//` 是整除運算子，其餘選項也不是 Python 註解語法。
- English: A Python line comment starts with `#` and continues to the end of the line. `//` means floor division; the other options are not Python comment syntax.

## Q25

- 題庫答案 / Answer key：(1) A；(2) B；(3) B；(4) A
- 中文：前四行是註解，內容不作為程式執行；移除 `#` 就不再是註解。引號內的 `#` 只是字串字元，最後一行的 `#` 才是行內註解。
- English: The first four lines are comments, not executable statements; their `#` markers are required. A `#` inside quotes is part of a string. The final line has an inline comment.

## Q26

- 題庫答案 / Answer key：D
- 中文：`9 % 4 = 1`，括號內為 10；`2.0 ** 3.0 = 8.0`，所以 `10 // 8.0 + 4 = 5.0`。D 對應計算結果；原碼沒有 `print()`，實際不會顯示它。
- English: `9 % 4` is 1, making the parenthesized value 10. Then `2.0 ** 3.0` is 8.0, so `10 // 8.0 + 4` is 5.0. D matches the value, but no `print()` displays it.

## Q27

- 題庫答案 / Answer key：(1) B；(2) A；(3) G；(4) C；(5) D；(6) F
- 中文：依序組成 `(-a) ** 2`。括號讓取負先完成，再平方；若寫成 `-a ** 2`，通常會先平方，再取負。
- English: The pieces form `(-a) ** 2`. Parentheses apply negation before squaring. Without them, `-a ** 2` evaluates as `-(a ** 2)`.

## Q28

- 題庫答案 / Answer key：A、B
- 中文：題庫選 A、B：`int()` 朝 0 截斷，`//` 向下取整，正餘額時結果相同。但 D 也會得到沒有小數部分的浮點值，原題答案不唯一；負數時 A、B 亦可能不同。
- English: The key is A, B: `int()` truncates toward zero, while `//` floors; they agree for positive balances. D also produces a float with no fractional part, making the wording ambiguous. A and B can differ for negatives.

## Q29

- 題庫答案 / Answer key：D
- 中文：D 使用合法的 `#` 註解，且函式內程式有正確縮排。`/*...*/`、`//` 和未成對的單引號都不符合此處的 Python 語法。
- English: D uses a valid `#` comment and correctly indented function code. `/*...*/`, `//`, and an unmatched quote are invalid for this purpose in Python.

## Q30

- 題庫答案 / Answer key：(1) D；(2) B；(3) C
- 中文：文件字串慣例使用三個雙引號，並作為函式內第一個陳述式。可用 `cube.__doc__` 取得，再交給 `print()` 顯示。
- English: Docstrings conventionally use triple double quotes and appear as the function's first statement. Read one through `cube.__doc__` and display it with `print()`.

## Q31

- 題庫答案 / Answer key：(1) B；(2) A
- 中文：字串不可變；`a += 'Config2'` 讓 `a` 指向新字串，不會改到 `b`。因此後兩次輸出為 `Config1Config2`、`Config1`。
- English: Strings are immutable. `a += 'Config2'` assigns a new string to `a` without changing `b`. The last two outputs are `Config1Config2` and `Config1`.

## Q32

- 題庫答案 / Answer key：A
- 中文：清單的 `+` 是串接，`* 3` 是重複整份清單三次，不是把元素各乘 3。結果為 `[1, 2, 3, 4]` 的三次連續排列。
- English: For lists, `+` concatenates and `* 3` repeats the whole list three times. It does not multiply individual elements. The result contains three consecutive copies of `[1, 2, 3, 4]`.

## Q33

- 題庫答案 / Answer key：B
- 中文：`.format(z, y, x)` 中，索引 0、1、2 分別是 bananas、apples、oranges。依 `{1}`、`{0}`、`{2}` 排列，得到 `apples and bananas and oranges`。
- English: In `.format(z, y, x)`, positions 0, 1, and 2 are bananas, apples, and oranges. Ordering them as `{1}`, `{0}`, `{2}` gives `apples and bananas and oranges`.

## Q34

- 題庫答案 / Answer key：(1) A；(2) B
- 中文：切片包含起點、不包含終點。索引從 0 開始，所以 `[3:6]` 是 `def`，省略起點的 `[:6]` 是 `abcdef`。
- English: Slices include the start and exclude the stop. With zero-based indexing, `[3:6]` gives `def`, while `[:6]` gives `abcdef`.

## Q35

- 題庫答案 / Answer key：(1) D；(2) A
- 中文：`range(len(employee_pay))` 才會走訪所有索引；平均值用 `/`，避免整除截去小數。原題迴圈另有多餘括號，完整寫法應為 `for index in range(len(employee_pay)):`。
- English: `range(len(employee_pay))` visits every index. Use `/` for the average rather than floor division. Remove the extra parenthesis in the original loop: `for index in range(len(employee_pay)):`.

## Q36

- 題庫答案 / Answer key：D、E
- 中文：`[:-5]` 與 `[0:-5]` 相同，都從第一個元素取到倒數第 5 個之前，剛好排除最後 5 位主管。
- English: `[:-5]` and `[0:-5]` are equivalent. Both start at the first employee and stop before the last five, excluding all five managers.

## Q37

- 題庫答案 / Answer key：(1) A；(2) E；(3) B；(4) F
- 中文：切片依序得到 `defghijklmno`、`dgjm`、`pmjg`、`zwtqnkheb`。步長為 3 表示每次跳 3 格；負步長表示由右往左，終點仍不包含。
- English: The slices produce `defghijklmno`, `dgjm`, `pmjg`, and `zwtqnkheb`. A step of 3 moves three positions each time; a negative step moves left. The stop remains excluded.

## Q38

- 題庫答案 / Answer key：(1) C；(2) A；(3) C
- 中文：外層 `while` 重複處理，直到輸入 `QUIT`；內層 `for char in x` 逐字元計數。空格也是字元，因此也會計入長度。
- English: The outer `while` repeats until `QUIT` is entered. The inner `for char in x` counts each character, including spaces.

## Q39

- 題庫答案 / Answer key：(1) B；(2) G；(3) C；(4) E
- 中文：每次處理新數字都重設 `is_prime = True`，再以 `%` 檢查能否整除；找到因數就 `break`。最後增加 `p`，繼續檢查下一個數字。
- English: Reset `is_prime = True` for each number. Use `%` to detect a divisor and `break` when one is found. Increment `p` after checking each number.

## Q40

- 題庫答案 / Answer key：(1) G；(2) A；(3) B
- 中文：`chance` 從 1 開始，`while chance <= 3:` 允許三次猜測。猜對用 `break` 立即離開，未猜對則以 `chance += 1` 更新次數。
- English: Starting at 1, `while chance <= 3:` allows three guesses. `break` exits immediately after a correct guess; otherwise `chance += 1` advances the attempt count.

## Q41

- 題庫答案 / Answer key：B
- 中文：第一次列印 10，第二次列印 40；第二次將 `n` 減為 3 後執行 `break`。因此共有 2 行輸出。
- English: The first iteration prints 10 and the second prints 40. The second decrement makes `n` equal 3, triggering `break`. There are two output lines.

## Q42

- 題庫答案 / Answer key：(1) B；(2) D
- 中文：`for word in word_list:` 逐一取出單字，再用 `letter in word` 檢查字母是否出現。每個符合的單字只加 1，不是計算字母出現總次數。
- English: `for word in word_list:` visits each word, and `letter in word` checks for the letter. Each matching word adds one, regardless of how many times the letter appears.

## Q43

- 題庫答案 / Answer key：(1) A；(2) B
- 中文：`while` 與 `if` 標頭都要以冒號結尾；清單取值用 `numbers[index]`，不是函式呼叫形式 `numbers(index)`。
- English: Both `while` and `if` headers need trailing colons. Access a list item with `numbers[index]`, not the function-call form `numbers(index)`.

## Q44

- 題庫答案 / Answer key：(1) B；(2) C
- 中文：`range(2, 13)` 產生 2 到 12，因為終點 13 不包含。內外兩層都用此範圍；內層列印乘積，外層每次完成後換行。
- English: `range(2, 13)` generates 2 through 12 because 13 is excluded. Use it in both loops. The inner loop prints products, and the outer loop starts a new line after each row.

## Q45

- 題庫答案 / Answer key：(1) A；(2) D；(3) C
- 中文：`while` 依索引逐一檢查，遇到產品 6 就 `break`，否則增加 `index`。因為先列印再判斷，輸出包含 0 到 6。
- English: Use `while` to inspect successive indices, `break` at product 6, and increment `index` otherwise. Printing occurs before the check, so the output includes 0 through 6.

## Q46

- 題庫答案 / Answer key：(1) C；(2) C
- 中文：`range(1, 6)` 產生 5 列，`range(1, 5)` 產生 4 欄。第 1、3、5 列全部加星號，其餘列只在第一欄加星號。
- English: `range(1, 6)` gives five rows, and `range(1, 5)` gives four columns. Rows 1, 3, and 5 fill every column; the other rows fill only the first.

## Q47

- 題庫答案 / Answer key：(1) C；(2) B
- 中文：用 `range(len(salary_list))` 取得所有有效索引。薪資達 150000 時用 `continue` 跳過本次更新，其餘套用 `薪資 × 1.03 + 500`。
- English: `range(len(salary_list))` covers all valid indices. `continue` skips updates for salaries of 150000 or more; the rest receive `salary * 1.03 + 500`.

## Q48

- 題庫答案 / Answer key：(1) A；(2) B
- 中文：`while index < 10:` 控制合法索引範圍，`if numbers[index] == 6:` 找到 6 就停止。兩個標頭都必須有冒號。
- English: `while index < 10:` keeps the index within bounds. `if numbers[index] == 6:` stops the loop at 6. Both headers require colons.

## Q49

- 題庫答案 / Answer key：(1) A；(2) D；(3) C
- 中文：以 `while` 重複查找，找到 6 就 `break`；未找到時用 `index += 1` 前進。若不更新索引，就會一直停在同一個元素。
- English: Repeat with `while`, exit with `break` at 6, and advance with `index += 1` otherwise. Without updating the index, the loop would keep checking the same item.

## Q50

- 題庫答案 / Answer key：(1) A；(2) B；(3) A；(4) B
- 中文：先將識別碼設為空字串，以 `123` 作為離開值；每次檢查前重設 `valid = False`，三段長度與數字檢查都通過才改為 `True`。原迴圈選項須補冒號，並把重設與驗證放在迴圈內。
- English: Initialize the ID to an empty string and use `123` as the exit value. Reset `valid = False` each iteration, setting it true only after all checks pass. Add the missing loop colon and indent both reset and validation inside the loop.

## Q51

- 題庫答案 / Answer key：(1) F；(2) A；(3) B；(4) E；(5) C；(6) D
- 中文：順序是定義函式、逐項搜尋、比較、找到後 `break`。這裡的 `else` 對應 `for`；只有完整走完、未經 `break` 時，才顯示找不到。
- English: Define the function, iterate, compare, and `break` when found. The `else` belongs to the `for`, so it runs only when the loop finishes without `break`.

## Q52

- 題庫答案 / Answer key：(1) A；(2) B；(3) A；(4) B
- 中文：可有多個 `except`，也可搭配一個 `finally`；單獨的 `try...finally` 同樣合法。因此 Python 實際判斷應為 A、A、A、B，與題庫第 2 小題選 B 不同。
- English: Multiple `except` clauses and one `finally` are allowed. A standalone `try...finally` is also valid. Python therefore gives A, A, A, B, differing from the stored B for part 2.

## Q53

- 題庫答案 / Answer key：(1) A；(2) C
- 中文：`'a'` 模式會保留舊內容並在檔尾追加，檔案不存在時則建立；`file.write()` 寫入文字。原題 `file.write()` 前多餘的縮排應移除。
- English: Mode `'a'` preserves existing content and appends at the end, creating the file if needed. `file.write()` writes the text. Remove the extra indentation before that call in the original.

## Q54

- 題庫答案 / Answer key：(1) D；(2) C
- 中文：`os.path.isfile()` 檢查指定路徑是否為檔案，`file.read()` 讀取內容，再用 `print()` 顯示。只列印檔名並不會讀出內容。
- English: `os.path.isfile()` checks whether the path is a file. `file.read()` reads its contents, and `print()` displays them. Printing the filename alone does not read the file.

## Q55

- 題庫答案 / Answer key：D
- 中文：程式使用 `os.path.isfile()`，卻沒有先 `import os`，因此找不到名稱 `os`。匯入模組後才能使用其中的功能。
- English: The code uses `os.path.isfile()` without first importing `os`, so the name is undefined. Import the module before using its functions.

## Q56

- 題庫答案 / Answer key：(1) A；(2) B；(3) A
- 中文：`'a'` 會建立不存在的檔案，並追加而非覆寫內容。`close()` 關閉檔案後，其他程式碼可重新開啟；前提是具備相應權限。
- English: Mode `'a'` creates a missing file and appends instead of overwriting. After `close()`, other code can reopen the file, assuming the necessary permissions.

## Q57

- 題庫答案 / Answer key：(1) A；(2) C
- 中文：把轉型放在 `try` 內，用 `except ValueError:` 處理無法轉成整數的輸入。轉型成功才執行 `break`，否則提示後重新輸入。
- English: Place conversion inside `try` and handle invalid integer text with `except ValueError:`. A successful conversion reaches `break`; a failure displays a message and retries.

## Q58

- 題庫答案 / Answer key：(1) E；(2) B；(3) C
- 中文：`try` 執行 `process()`，`except` 處理例外並記錄；`finally` 在正常完成或發生例外後都會執行，因此適合呼叫 `displayResult()`。
- English: `try` runs `process()`, `except` logs an exception, and `finally` runs after either normal completion or an exception, making it suitable for `displayResult()`.

## Q59

- 題庫答案 / Answer key：D
- 中文：`'w'` 可建立或清空檔案，但只允許寫入。題目同時要求讀取與寫入，因此依完整需求應選 A 的 `'w+'`；題庫所列 D 並不完整符合。
- English: `'w'` creates or truncates a file but allows writing only. Because the prompt requires both reading and writing, A (`'w+'`) satisfies all requirements; the stored answer D does not.

## Q60

- 題庫答案 / Answer key：A
- 中文：`'w+'` 會自動建立不存在的 `out.txt`，因此檔案不存在本身不會報錯；假設 `in.txt` 存在且權限正常，選 A。若開檔失敗，原例外處理中的 `file_name` 也未定義。
- English: `'w+'` creates a missing `out.txt`, so its absence is not an error. A assumes `in.txt` exists and permissions allow access. If opening fails, the original handler also refers to an undefined `file_name`.

## Q61

- 題庫答案 / Answer key：(1) A；(2) F
- 中文：`get_name()` 的呼叫沒有引數，因此定義不需參數。`calc_calories()` 接收兩個值，參數名稱須對應函式內使用的 `miles` 與 `calories_per_mile`。
- English: `get_name()` is called without arguments, so it needs no parameters. `calc_calories()` takes two values, with parameter names matching the body's `miles` and `calories_per_mile`.

## Q62

- 題庫答案 / Answer key：(1) B；(2) B
- 中文：最後一個索引是 `len(backward_name) - 1`。從該位置逐字往前加入新字串，直到索引小於 0，所以 `nohtyp` 反轉後為 `python`。
- English: The last index is `len(backward_name) - 1`. Append characters while moving backward to index zero. Reversing `nohtyp` therefore produces `python`.

## Q63

- 題庫答案 / Answer key：(1) B；(2) A
- 中文：`randint(1, 50)` 包含兩端，`choice(groupList)` 隨機選一個組別。原碼先占用房號 1，實際只剩 49 間；若輸入第 50 人，會卡在抽房號迴圈。
- English: `randint(1, 50)` includes both endpoints, and `choice(groupList)` selects one group. The original code reserves room 1 in advance, leaving only 49 rooms; a 50th participant would get stuck in the room-selection loop.

## Q64

- 題庫答案 / Answer key：(1) B；(2) A；(3) C；(4) A
- 中文：先匯入 `unittest`，測試類別繼承 `unittest.TestCase`，方法名稱以 `test_` 開頭。`self.assertIsInstance(obj, cls)` 檢查物件是否為指定類別或其子類別的實例。
- English: Import `unittest`, inherit from `unittest.TestCase`, and start the method name with `test_`. `self.assertIsInstance(obj, cls)` checks whether the object is an instance of the class or a subclass.

## Q65

- 題庫答案 / Answer key：B、C
- 中文：`randint(1, 20) * 5` 可得到 5 到 100 的倍數。`randrange(5, 105, 5)` 也得到相同範圍，因為終點 105 不包含。
- English: `randint(1, 20) * 5` produces multiples of five from 5 to 100. `randrange(5, 105, 5)` covers the same values because the stop value 105 is excluded.

## Q66

- 題庫答案 / Answer key：(1) B；(2) B；(3) A
- 中文：所有參數都有預設值，因此可不帶引數呼叫。`pass` 只略過該敘述、不會離開函式，傳入 `salary=50000` 仍回傳 1000；計件呼叫則先回傳 `500 × 4 = 2000`。
- English: All parameters have defaults, so a no-argument call is valid. `pass` does not exit the function; `salary=50000` still returns 1000. The piecework call returns early with `500 * 4 = 2000`.

## Q67

- 題庫答案 / Answer key：(1) A；(2) A；(3) B；(4) A；(5) B
- 中文：用 `points=1` 設定預設值；缺少必填引數會報錯，不會自動變成 `None`。函式內重綁整數 `points` 不改到外部變數；一般位置參數有預設值後，後續位置參數也須有預設值。
- English: Use `points=1` for the default. Missing required arguments raise an error rather than becoming `None`. Reassigning the integer parameter does not change the outer variable. After a defaulted positional parameter, later positional parameters also need defaults.

## Q68

- 題庫答案 / Answer key：D
- 中文：`sys.argv[0]` 是程式檔名，之後才是命令列引數。索引 1 為 `Cheese`、索引 2 為 `Bacon`，所以選 D。
- English: `sys.argv[0]` is the script name, followed by command-line arguments. Index 1 is `Cheese` and index 2 is `Bacon`, so D is correct.

## Q69

- 題庫答案 / Answer key：(1) B；(2) A；(3) B
- 中文：`input()` 能正常讀入字串，但字串不能執行 `**`；第 5 行呼叫會在函式第 2 行引發 `TypeError`。先轉數值；之後輸出仍須用 `str(result)` 或 f-string，不能直接把數值與字串相加。
- English: `input()` successfully returns strings, but strings do not support `**`. The call on line 5 raises `TypeError` inside line 2. Convert inputs to numbers; afterward, use `str(result)` or an f-string rather than adding a number to text.

## Q70

- 題庫答案 / Answer key：B、C
- 中文：`randrange(5, 12, 1)` 不包含 12，因此產生 5 到 11；`randint(5, 11)` 包含兩端，也符合範圍。
- English: `randrange(5, 12, 1)` excludes 12, producing 5 through 11. `randint(5, 11)` includes both endpoints and gives the same range.

## Q71

- 題庫答案 / Answer key：A、C
- 中文：A 以位置引數傳姓名、關鍵字引數傳年級；C 以兩個位置引數呼叫，兩者都合法。B 的變數未定義，D 使用了不存在的參數名稱 `name`，應為 `student`。
- English: A passes the student positionally and the year by keyword; C passes both positionally. B uses undefined variables. D uses the wrong keyword `name` instead of `student`.

## Q72

- 題庫答案 / Answer key：(1) A；(2) C；(3) D
- 中文：`assertEqual` 比較值，`assertIs` 比較是否同一物件，`assertIn` 檢查是否為成員。正式測試中通常以 `self.assertEqual(...)` 等方式呼叫。
- English: `assertEqual` compares values, `assertIs` checks object identity, and `assertIn` checks membership. In a test method, call them through `self`, such as `self.assertEqual(...)`.

## Q73

- 題庫答案 / Answer key：A、B
- 中文：先用 `math.fabs(x)` 取浮點數絕對值，再用 `math.floor()` 向下取整。應組成 `math.floor(math.fabs(x))`；先取絕對值可避免負數取整方向造成不同結果。
- English: Apply `math.fabs(x)` first, then floor the nonnegative result: `math.floor(math.fabs(x))`. Taking the absolute value first avoids different rounding results for negative inputs.

## Q74

- 題庫答案 / Answer key：(1) C；(2) A；(3) C
- 中文：`datetime.datetime.now()` 取得目前日期時間，`strftime('%A')` 取得星期全名。`weekday()` 從星期一的 0 到星期日的 6，因此 `6 - now.weekday()` 是距離本週日的天數。
- English: `datetime.datetime.now()` gets the current date and time, and `strftime('%A')` gives the full weekday name. `weekday()` uses Monday=0 through Sunday=6, so subtracting it from 6 gives days until Sunday.

## Q75

- 題庫答案 / Answer key：(1) B；(2) A；(3) B
- 中文：本題與 Q69 相同：輸入階段不報錯，呼叫後才因字串做次方而失敗。先將輸入轉為數值，再用 f-string 或 `str(result)` 輸出；一次執行會在第一個未處理例外處停止。
- English: As in Q69, input succeeds but exponentiation fails because the values are strings. Convert them to numbers and format the result with an f-string or `str()`. One execution stops at the first unhandled exception.

## Q76

- 題庫答案 / Answer key：(1) B；(2) B；(3) B
- 中文：省略 `breed` 時使用預設值 `"none"`；關鍵字可換順序，也可放在位置引數之後。函式沒有明寫 `return`，實際隱含回傳 `None`，題庫把它視為未回傳計算結果。
- English: Omitting `breed` uses `"none"`. Keyword arguments may be reordered or follow positional arguments. With no explicit `return`, the function implicitly returns `None`; the key treats this as returning no computed result.

## Q77

- 題庫答案 / Answer key：(1) E；(2) A；(3) C；(4) D；(5) B
- 中文：先用 `isfile()` 確認檔案存在，再以 `with open(..., 'r')` 讀取第一行。不存在時回傳 `None`；離開 `with` 時，即使使用 `return` 也會關閉檔案。
- English: Check existence with `isfile()`, then read the first line inside `with open(..., 'r')`. Return `None` when absent. Leaving the `with` block closes the file even when returning from inside it.

## Q78

- 題庫答案 / Answer key：A
- 中文：`12` 是 `int`、`False` 是 `bool`、`"David"` 是 `str`、`64.5` 是 `float`、`"545"` 有引號所以仍是 `str`。
- English: `12` is an integer, `False` a Boolean, `"David"` a string, and `64.5` a float. Quoted `"545"` is also a string, despite containing digits.

## Q79

- 題庫答案 / Answer key：B
- 中文：題庫選 B，但 `int(input(...))` 只能直接轉換整數格式文字；輸入 `3.5` 會發生 `ValueError`。若要接受小數文字後截去小數，可用 `int(float(input(...)))`。
- English: The key is B, but `int(input(...))` accepts integer-form text, not `3.5`; that raises `ValueError`. To accept decimal text and truncate toward zero, use `int(float(input(...)))`.

## Q80

- 題庫答案 / Answer key：B
- 中文：`num % 2 == 0` 表示除以 2 餘數為 0，因此為偶數；其餘由 `else` 判為奇數。原題兩個 `print()` 都須縮排到各自的分支內。
- English: `num % 2 == 0` identifies an even number; `else` handles odd numbers. In the original snippet, indent each `print()` inside its corresponding branch.

## Q81

- 題庫答案 / Answer key：A
- 中文：`/` 做一般除法，得到 `4.2`；`//` 做向下整除，得到 `4`；`%` 取餘數，得到 `1`。
- English: `/` performs true division, giving `4.2`. `//` performs floor division, giving `4`. `%` returns the remainder, giving `1`.

## Q82

- 題庫答案 / Answer key：C
- 中文：`in` 檢查元素是否存在清單中，回傳布林值。因為清單包含 `'f'`，所以輸出 `True`，不是索引或元素個數。
- English: `in` checks list membership and returns a Boolean. Since `'f'` is present, the output is `True`, not an index or a count.

---

## 核對依據 / Verification references

原題與答案取自網站的 `its-py-cert/assets/questions.js` 與 `its-py-cert/assets/questions-en.js`。計算結果與部分語法另以本機 Python 3 驗證。

Questions and answer keys come from the website's Chinese and English question banks. Calculations and selected syntax were also checked with local Python 3.

- Q12、Q50、Q51、Q52、Q58、Q67：[Python 複合陳述式與函式定義 / Compound statements and function definitions](https://docs.python.org/3/reference/compound_stmts.html)
- Q28、Q53、Q56、Q59、Q60、Q76、Q79：[Python 內建函式 / Built-in functions](https://docs.python.org/3/library/functions.html)
- Q08、Q74：[Python 日期時間格式 / Date and time formatting](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-format-codes)
- Q23、Q26、Q27：[Python 運算子優先順序 / Operator precedence](https://docs.python.org/3/reference/expressions.html#operator-precedence)
