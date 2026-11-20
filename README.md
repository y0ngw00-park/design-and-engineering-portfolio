# Yongwoo Park — Design & Engineering Portfolio

A hand-written static website (plain HTML + CSS + JavaScript). There is **no framework, no build step, no `npm install`**. What you see in the files is exactly what gets published. The site is styled like a retro Windows desktop: a grid of "file" cards, and clicking a card opens a "Project Viewer" window.

Git remote: `https://github.com/y0ngw00-park/design-and-engineering-portfolio` (branch `main`).

---

## 1. Repository Map

```
.
├── index.html            ← The page. Holds the profile, "More About Me" tab,
│                           and ONE CARD PER PROJECT in the grid (the thumbnails).
├── js/
│   └── main.js           ← The PROJECTS list at the top = ALL the project text,
│                           captions, and media lists shown in the popup viewer.
├── css/
│   └── style.css         ← All styling. You normally never need to touch this.
├── assets/               ← All images, videos, PDFs. One sub-folder per project.
│   ├── pandemonium/
│   ├── motor_pestle/
│   ├── chop_waiting_room/
│   ├── rockstar/
│   ├── battle_bot/
│   ├── helix_vault/
│   ├── senior_thesis/
│   ├── turntable_isolation/
│   ├── new_project/      ← PLACEHOLDER entry's folder (see "Placeholder entry" below)
│   └── profile/          ← Profile photo and the hockey photo (About tab)
└── .claude/              ← Local AI-tool settings. Ignore it.
```

**A project lives in TWO places that must be kept in sync:**

| What                          | File                                          | Purpose                                             |
| ----------------------------- | --------------------------------------------- | --------------------------------------------------- |
| The**card** on the grid | `index.html` (search `id="project-grid"`) | Cover thumbnail + card name                         |
| The**project data**     | `js/main.js` (the `PROJECTS` array)       | Title, subtitle, description, media, captions, link |

The two are linked **by order**: the card with `data-index="3"` opens the 4th item (counting from 0) in `PROJECTS`. So:

> **Card order in `index.html` must match the order in `PROJECTS`, and `data-index` must be 0, 1, 2, ... with no gaps.**

The "1 / 9" counter and Previous/Next buttons in the popup update automatically from the length of `PROJECTS`.

Current order: 0 Pandemonium, 1 Motor & Pestle, 2 CHOP Waiting Room, 3 Rockstar, 4 Battle Bot, 5 Helix Vault, 6 Senior Thesis, 7 Turntable Isolation, 8 **[Project Name] (placeholder)**.

---

## 2. How to Add a New Project

1. **Make a media folder**: `assets/<project_id>/` (lowercase, underscores, no spaces — e.g. `assets/smart_lamp/`). Put the images/videos in it.
2. **Add the data** to the `PROJECTS` array in `js/main.js`: paste the template below **just before the final `];`** (add it at the end so existing numbers don't shift). Mind the comma after the previous `},`.
3. **Add the card** in `index.html`: paste the card template at the end of the `<div class="file-grid" id="project-grid">` block, after the last `</button>`. Set `data-index` to the next number (the new project's position in `PROJECTS`, starting from 0).
4. **Preview** locally (section 6), click through the new project, then publish.

### Template: project data (`js/main.js`)

```js
  {
    id: "my_project",                        // same as the assets folder name
    title: "My Project Title",               // big title in the viewer
    subtitle: "University of Pennsylvania - Course or Category",  // small line above the title
    description: [                           // each string = one paragraph
      "First paragraph.",
      "Second paragraph.",
      "Third paragraph."
    ],
    meta: ["Tag 1", "Tag 2", "2026"],        // tags (currently stored but not displayed by the site)
    media: [                                 // order here = order of thumbnails
      { type: "image", src: "assets/my_project/cover.jpg" },
      { type: "image", src: "assets/my_project/detail.jpg" },
      { type: "video", src: "assets/my_project/demo.mp4" },
    ],
    link: { url: "https://example.com", label: "Live site ↗" },   // OPTIONAL: delete this line if none
    captions: [                              // ONE caption per media item, SAME order. "" = no caption
      "Caption for cover.jpg",
      "Caption for detail.jpg",
      "Caption for demo.mp4",
    ],
  },
```

### Template: grid card (`index.html`)

```html
            <button class="file-card" data-index="9" aria-label="Open My Project">
              <div class="file-card__thumb"><img src="assets/my_project/cover.jpg" alt="" loading="lazy" /></div>
              <span class="file-card__name">My Project Title</span>
            </button>
```

Notes:

- Use `&amp;` instead of `&` in the HTML card name (e.g. `Motor &amp; Pestle`).
- The card's thumbnail is its own `<img src>`. It does **not** have to be the first media item.
- Inside JS strings, a double quote must be escaped: `\"like this\"`. Or use single quotes inside the text.
- Description paragraphs can contain simple HTML (`<b>bold</b>`, `<a href="...">`). A paragraph starting with `"• "` renders as a bullet point.
- Only **one** `link` per project is supported (it appears as a button under the description).

### The placeholder entry already in the repo

A ninth entry, `[Project Name]`, was added as a ready-to-fill example (card in `index.html` with `data-index="8"`, data in `js/main.js` with `id: "new_project"`). To finish it:

1. Rename `assets/new_project/` to your real folder name and drop your images there; delete `placeholder_cover.svg`.
2. In `js/main.js`, replace every `[...]` value, fix the `src` paths, and uncomment/add the extra media, captions, and `link` lines.
3. In `index.html`, update the card's `aria-label`, `<img src>`, and `file-card__name`.

**Until you do this, the placeholder card is visible on the live site if you publish.** If you want to publish other changes first, delete the placeholder (section 3) or don't commit it.

---

## 3. How to Edit or Remove a Project

### Edit

- **Text / title / subtitle / tags / link:** edit that project's block in `js/main.js`.
- **Captions:** edit its `captions` array (keep the same order and count as `media`).
- **Card name or cover thumbnail:** edit the matching card in `index.html`.
- **Swap a photo:** easiest is to overwrite the file in `assets/<project>/` using the **same filename**; nothing else needs to change. (If you change the filename, update `src` in `main.js`, and the card `<img src>` if it is the cover.)
- **Reorder projects:** move the block in `main.js` AND the card in `index.html`, then renumber `data-index` 0, 1, 2, ... top to bottom.

### Remove a project cleanly

1. In `js/main.js`, delete the whole `{ id: "...", ... },` block for that project.
2. In `index.html`, delete that project's `<button class="file-card" ...> ... </button>` card.
3. **Renumber `data-index`** on every card below it so they run 0, 1, 2, ... with no gaps.
4. Delete its media folder:
   ```bash
   git rm -r assets/<project_id>
   ```

   (Before deleting, check nothing else uses the files: `grep -rn "assets/<project_id>" index.html js css`.)
5. Preview, then publish.

### Remove just one image/video from a project

Delete its line from `media` **and** the same-position line in `captions` (they must stay aligned), then `git rm assets/<project_id>/<file>`. If it was the card's cover, change the card's `<img src>` too.

---

## 4. Images, Videos, and Captions

### Images

- Location: `assets/<project_id>/<file>`. One folder per project.
- Naming used by the repo: **lowercase with underscores, no spaces**, descriptive (`angled_view.jpg`, `pre_op_render.jpg`). Case matters on the live server: `Photo.JPG` ≠ `photo.jpg`. Spaces or accented characters in a filename can cause trouble in URLs — avoid them.
- Formats used: `.jpg`, `.jpeg`, `.png`. Compress large photos first (the repo already went through a "pics compressed" pass); aim for well under ~1 MB each (around 1600 px on the long side is plenty).
- Add to the project's `media` list:
  ```js
  { type: "image", src: "assets/my_project/detail.jpg" },
  ```

### Local video files (`.mp4`)

- Put the file in `assets/<project_id>/` (e.g. `assets/my_project/demo.mp4`). Use H.264 `.mp4` so every browser plays it.
- Add to `media`:
  ```js
  { type: "video", src: "assets/my_project/demo.mp4" },
  ```
- The viewer shows it with play controls, looping, and extracts a still frame for the thumbnail automatically.
- GitHub rejects single files over 100 MB and warns above 50 MB. Compress long videos (e.g. with HandBrake) before adding.

### Hosted videos (YouTube / Vimeo)

**The project viewer only supports `<video>` files, not YouTube/Vimeo embeds.** Options:

- Easiest: download/export the video as `.mp4` and use it as a local file (above).
- Or link out: use the project's single `link` field, e.g.
  `link: { url: "https://youtu.be/XXXX", label: "Watch on YouTube ↗" },`
- YouTube embeds exist only on the "More About Me" tab (see the `<iframe>` in `index.html`):
  ```html
  <div class="about-video">
    <iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Description" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
  ```

  (Use the `embed/` form of the URL, not `watch?v=`.)

### Captions

- Captions live in the project's `captions` array in `js/main.js`, **matched to `media` by position**: caption #1 goes with media #1, etc.
- They render as plain text under the main image (the styled caption bar). HTML is **not** interpreted in captions.
- Use `""` for "no caption". Missing entries simply show nothing.
- The caption also appears as the tooltip when hovering a thumbnail.

### Alt text

- **Project viewer images:** alt text is set automatically to the **project title** (it can't be set per image without editing `main.js`).
- **Grid card covers:** `alt=""` is intentional; the card's `aria-label="Open ..."` describes it. Keep both when you add a card.
- **About tab images** (`index.html`): write alt text directly, e.g. `<img src="assets/profile/hockey.jpg" alt="Hockey" class="about-media" />`.

---

## 5. Things that can silently break the site

- A missing comma between project blocks in `main.js`, or an unescaped `"` inside text → **the whole project list fails to load**. If the popup stops working, open the browser DevTools console (Cmd+Option+J) to see which line is wrong.
- `media` and `captions` having different lengths (captions go out of sync).
- `data-index` numbers that skip or repeat, or cards in a different order than `PROJECTS`.
- Wrong file path or capitalization in `src` (works on your Mac, fails on GitHub Pages).
- Not committing the new files in `assets/` (the page would publish with broken images).

---

## 6. Previewing & Publishing

### Preview locally

There is no build. Either:

- **Quick:** double-click `index.html` to open it in your browser (works for everything except the auto-generated video thumbnails, which need a server), **or**
- **Recommended:** run a tiny local server from the repo folder:
  ```bash
  cd "/Users/yongwoo/Desktop/Penn/job search/design-and-engineering-portfolio"
  python3 -m http.server 8000
  ```

  then visit http://localhost:8000. Press `Ctrl+C` in the terminal to stop it. After editing, refresh with Cmd+Shift+R to bypass cache.

Check: card appears, opens, images/videos load, captions line up, Previous/Next works, the counter shows the right total.

### Publish

The repo has no deployment config file (no GitHub Actions, no `CNAME`, no `netlify.toml`), so it is deployed as a plain static site straight from the `main` branch of the GitHub repo, which is how GitHub Pages works. (I could not see your GitHub settings from here — to confirm or change it, go to the repo on GitHub → **Settings → Pages** and check that the source is "Deploy from a branch", branch `main`, folder `/ (root)`.) Pushing to `main` is what updates the live site; it usually takes 1–2 minutes.

```bash
cd "/Users/yongwoo/Desktop/Penn/job search/design-and-engineering-portfolio"
git status                      # see what changed
git add -A                      # stage everything (new/edited/deleted files)
git commit -m "Add <project name> project"
git push origin main
```

If `git push` is rejected because the remote has newer commits: `git pull --rebase origin main`, then `git push origin main`.

To undo a bad publish quickly: `git revert HEAD` then `git push origin main`.

### Housekeeping tips

- macOS creates `.DS_Store` files, and some are already committed. They are harmless. To stop adding more, create a file named `.gitignore` containing the line `.DS_Store`.
- `assets/senior_thesis/thesis_physics_yongwoo_park.pdf` is in the repo but not currently linked from any project. To link it, add `link: { url: "assets/senior_thesis/thesis_physics_yongwoo_park.pdf", label: "Read the thesis ↗" },` to the senior thesis block in `main.js`.
