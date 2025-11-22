# ⚡ SEO QUICK START - DO THIS NOW (30 Minutes)

## Step 1: Update Meta Tags (10 min)

### pages/index.tsx
Replace lines 60-65 with:
```tsx
<title>Freshozz - Premium Flavoured Soda India | Mojito Masala Fizz</title>
<meta name="description" content="India's first premium mojito-style masala soda. Clean caffeine, low sugar, high fizz. A new category of flavoured drinks." />
<meta property="og:title" content="Freshozz - Premium Soda India Never Had" />
<meta property="og:description" content="Mojito energy × Masala soul × High fizz. Coming soon." />
<link rel="canonical" href="https://freshozz.in" />
```

### pages/product.tsx
Replace lines 48-49 with:
```tsx
<title>Premium Flavoured Soda | Clean Caffeine Mojito Masala - Freshozz</title>
<meta name="description" content="Low-sugar mojito masala soda with clean caffeine. Triple-filtered fizz. Premium Indian fizzy drink worth ₹100+." />
<link rel="canonical" href="https://freshozz.in/product" />
```

## Step 2: Add Schema (5 min)

### pages/_app.tsx
Add before closing </Head>:
```tsx
<script type="application/ld+json">
  {`{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Freshozz",
    "url": "https://freshozz.in",
    "logo": "https://freshozz.in/logo.png",
    "description": "India's first premium mojito-style masala soda"
  }`}
</script>
```

## Step 3: Fix Image Alt Text (10 min)

Search for all `<Image` tags and add descriptive alt text:
```tsx
<Image alt="Freshozz premium flavoured soda India logo copper design" />
```

## Step 4: Add Internal Links (5 min)

In pages/index.tsx, add links:
```tsx
<p>Between tradition and innovation, <Link href="/product">the premium beverage world</Link> forgot to evolve.</p>
```

---

## ✅ DONE! Now run:
```bash
git add .
git commit -m "SEO optimization: meta tags, schema, alt text, internal links"
git push
```

## 📊 Check Results After Deploy:
1. Google Search Console
2. PageSpeed Insights
3. Rich Results Test (search.google.com/test/rich-results)
