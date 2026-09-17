# ITS Python 證照題庫 v2.0

原生 HTML、CSS、JavaScript 靜態網站，包含 77 題與 5 題補充題。不需要安裝套件、建置或後端。

[開啟網站](https://jeffcodingmentor.github.io/its-py-cert/) · [GitHub 儲存庫](https://github.com/JeffCodingMentor/its-py-cert)

## 使用方式

- 開啟或重新整理網站，預設進入「複習模式」。標題 v2.0 旁的「複習／答題」圖形開關可切換模式，網址不變。
- 複習模式可搜尋題目、選項、主題與答案，並按主題篩選。左側搜尋結果與題目區同步只顯示符合條件的題目；點選結果會移至對應題目。清空關鍵字並選擇「全部主題」可恢復全部題目。
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
     app.js
   ```

   可一併上傳本說明。不要把整個 `its-py-cert` 資料夾包在儲存庫下一層；其內容才是網站根目錄。

3. 到儲存庫的 **Settings → Pages → Build and deployment**。
4. **Source** 選 **Deploy from a branch**；分支選實際上傳的分支（通常為 `main`），資料夾選 **/(root)**，按 **Save**。
5. 等待部署完成後，分享 Pages 顯示的網址，例如 `https://你的帳號.github.io/儲存庫名稱/`。使用者不必輸入 `index.html`，兩種模式共用同一網址。

免費帳號通常使用公開儲存庫。完整設定請參閱 [GitHub Pages 官方文件](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

部署不需要 `answer.html`、原始 PDF、暫存工具或 `archive` 備份。此儲存庫使用 `main` 分支根目錄作為 GitHub Pages 發布來源；後續推送至 `main` 會更新網站。

## 維護題庫

- `assets/questions.js` 是兩種模式唯一共用的題庫來源；內容保留原始 Markdown，以 JavaScript 字串分行串接。
- 修改題目時保留固定題號（含「補充1」至「補充5」），不要以陣列位置替代題號。變更答案或大幅更換題庫時應同步考慮既有作答紀錄的相容性。
- `assets/app.js` 負責呈現、搜尋、判分與保存；`assets/styles.css` 負責桌面及手機版面。
- localStorage 使用 `its-py-cert:answers:v1:` 加網站所在目錄作為專屬鍵值；「清除紀錄」只刪除此網站題庫的紀錄。
- 原始兩個 HTML 保留在上一層，額外備份位於上一層 `archive/pre-github-日期時間/`，不需上傳。
