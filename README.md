# Vale Therapy Services

Website for Vale Therapy Services — person-centred counselling with Donna Brush, MBACP,
based in Evesham and available online across the UK.

Plain static HTML/CSS/JS, no build step, deployed with GitHub Pages.

## Structure

```
index.html          Single-page site (Home, About, First Session, FAQ, Contact)
css/styles.css       Design system + layout
js/main.js           Mobile nav toggle, footer year, contact form -> mailto
assets/favicon.svg   Site icon
assets/images/       Drop logo, headshot and BACP badge files here (see its README)
CNAME                Custom domain: valetherapyservices.co.uk
```

## Before going live

1. **Replace placeholder contact details** in `index.html` (`#contact` section):
   the phone number is a placeholder, and the email defaults to
   `hello@valetherapyservices.co.uk` — update both to the real ones.
2. **Add real images** — see `assets/images/README.md` for the logo, headshot and
   official BACP badge.
3. **Contact form** currently opens the visitor's email client with a pre-filled
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
