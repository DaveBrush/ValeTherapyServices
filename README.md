# Vale Therapy Services

Website for Vale Therapy Services — person-centred counselling with Donna Brush, MBACP,
based in Evesham and available online across the UK.

Plain static HTML/CSS/JS, no build step, deployed with GitHub Pages.

## Structure

```
index.html          Single-page site (Home, About, First Session, FAQ, Contact)
css/styles.css       Design system + layout
js/main.js           Mobile nav toggle, footer year, contact form -> mailto
assets/favicon.png   Site icon (cropped from the real logo)
assets/images/       Logo, headshot, therapy room and BACP badge (see its README)
CNAME                Custom domain: valetherapyservices.co.uk
```

## Before going live

1. **Confirm the contact email** in `index.html` (`#contact` section) — it currently
   defaults to `hello@valetherapyservices.co.uk`; update it if Donna uses a different
   inbox. The phone number is already the real one.
2. **Contact form** currently opens the visitor's email client with a pre-filled
   message (works with zero backend, fine for GitHub Pages). If you'd rather receive
   submissions directly without that extra click, sign up for a free form service like
   Formspree or Netlify Forms and swap the form's behaviour in `js/main.js`.

## Deploying with GitHub Pages

1. Push this branch and merge it into the repository's default branch (Pages serves
   from a branch, not from a feature branch).
2. In the repo on GitHub: **Settings → Pages → Source**, choose the default branch
   and `/ (root)`.
3. Under **Settings → Pages → Custom domain**, enter `valetherapyservices.co.uk`
   (the `CNAME` file in this repo already declares it).
4. At your domain registrar, point `valetherapyservices.co.uk` at GitHub Pages:
   - an `A` record for the apex domain to GitHub's Pages IPs, or
   - a `CNAME` record for `www` to `<username>.github.io`.
   See GitHub's ["Managing a custom domain"](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) docs for the exact records.
