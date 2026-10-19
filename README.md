# ITS Python 證照題庫 v3.0

原生 HTML、CSS、JavaScript 靜態網站，提供繁體中文與英文完整介面及 82 題題庫（原 77 題加 5 題補充題，畫面連續編號 01–82）。不需要安裝套件、建置或後端。

[開啟網站](https://jeffcodingmentor.github.io/its-py-cert/) · [GitHub 儲存庫](https://github.com/JeffCodingMentor/its-py-cert)

## v3.0 更新（2026-10-19）

- 新增完整英文介面與英文題庫；進站先選繁體中文或 English，F5 重整或再次進站都重新選擇，不保存語言偏好。
- 語言選擇頁僅保留標題與兩個按鈕。
- 中英文題目、選項與答案已對齊，共用既有作答紀錄。
- 英文左側清單使用 Q01–Q82；分類簡化為 Input, Output、Variables, Data Types、Strings, Lists、Conditions, Loop、Functions、Error, Testing 等，讓每題維持一行。
- 中英文的最後 5 題均接續編為 78–82。
- 修正桌面左側清單捲動範圍，可在右側題目未捲到底時獨立捲到最後一題。
- 網站標題與瀏覽器分頁標題統一更新為 v3.0；Git 標籤為 `v3.0`。

## 使用方式

- 開啟或重新整理網站，先選擇「繁體中文／English」，再進入所選語言的「複習模式」。語言僅保留在本次頁面記憶體，不寫入 localStorage、sessionStorage、Cookie 或網址；下次進站或 F5 重整都重新選擇。
- 中英文共用題目識別碼與答題紀錄，換語言後仍會還原已送出的答案。
- 標題 v3.0 旁的「複習／答題」圖形開關可切換模式，網址不變。
- 複習模式可搜尋題目、選項、主題與答案，並按主題篩選。左側搜尋結果與題目區同步只顯示符合條件的題目；點選結果會移至對應題目。清空關鍵字並選擇「全部主題」可恢復全部題目。
- 英文複習清單以 Q01–Q82 顯示題號，分類使用縮寫（例如 Input, Output、Conditions, Loop）；桌面左側清單可獨立捲動到底，不需先捲動右側題目。
- 左側的 `<<` 收合搜尋區、`>>` 展開搜尋區；收合再展開保留條件與結果。切換模式後，複習搜尋恢復初始狀態。
- 答題模式在完整送出後保存選項及判分。題目下拉選單以 🔴 答錯、🟢 答對、⚪ 未答標示狀態，多小題須全部正確才算答對。
- 已答題目會還原答案並鎖定；「清除紀錄」經確認後清除所有題目的作答，才能重新作答。
- 切至答題模式從第一題開始，切回複習模式從清單頂端開始；已送出的紀錄不會因切換模式、關閉或重新整理網頁而清除。尚未送出的選項不保存。

## 本機預覽

可直接開啟 `index.html`。為了穩定測試紀錄保存，建議從此目錄執行 `python -m http.server 8000`，再開啟 `http://localhost:8000/`。

紀錄使用瀏覽器 localStorage，限定同一裝置、瀏覽器與網站路徑，不會跨裝置或跨網址同步。本機預覽的紀錄不會自動移到 GitHub Pages；無痕模式、手動清除網站資料或瀏覽器清理可能移除紀錄。無法儲存時，頁面會顯示提示。

## GitHub Pages 部署

1. 在 GitHub 建立或開啟要使用的儲存庫。
2. 將下列檔案放到儲存庫根目錄，保持 `assets` 資料夾結構：

   ```text
   index.html
   .nojekyll
   assets/
     styles.css
     questions.js
     questions-en.js
     app.js
   ```

   可一併上傳本說明。不要把整個 `its-py-cert` 資料夾包在儲存庫下一層；其內容才是網站根目錄。

3. 到儲存庫的 **Settings → Pages → Build and deployment**。
4. **Source** 選 **Deploy from a branch**；分支選實際上傳的分支（通常為 `main`），資料夾選 **/(root)**，按 **Save**。
5. 等待部署完成後，分享 Pages 顯示的網址，例如 `https://你的帳號.github.io/儲存庫名稱/`。使用者不必輸入 `index.html`，兩種模式共用同一網址。

免費帳號通常使用公開儲存庫。完整設定請參閱 [GitHub Pages 官方文件](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

部署不需要 `answer.html`、原始 PDF、暫存工具或 `archive` 備份。此儲存庫使用 `main` 分支根目錄作為 GitHub Pages 發布來源；後續推送至 `main` 會更新網站。

## 維護題庫

- `assets/questions.js` 為中文題庫，`assets/questions-en.js` 為英文題庫，兩種模式共用所選語言的資料。內容保留 Markdown，以 JavaScript 字串分行串接。
- 英文題庫以現有英文校稿稿為基礎；第 2、23、26、33、39、40、68 題已依線上中文版調整選項順序或補齊小題。英文第 78–82 題使用固定識別碼「補充1」至「補充5」，中英文畫面均接續顯示第 78–82 題。
- 中英文更新後執行 `node tests/question-parity.cjs`，確認 82 題的識別碼、答案與選項群組一致。
- 修改題目時保留固定題號（含「補充1」至「補充5」），不要以陣列位置替代題號。變更答案或大幅更換題庫時應同步考慮既有作答紀錄的相容性。
- `assets/app.js` 負責呈現、搜尋、判分與保存；`assets/styles.css` 負責桌面及手機版面。
- localStorage 使用 `its-py-cert:answers:v1:` 加網站所在目錄作為專屬鍵值；「清除紀錄」只刪除此網站題庫的紀錄。
- 原始兩個 HTML 保留在上一層，額外備份位於上一層 `archive/pre-github-日期時間/`，不需上傳。
