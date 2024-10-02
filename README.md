<p align="center">
<img alt="Logo Banner" src="https://raw.githubusercontent.com/tabbycss/tabby/main/banner/tabby.gif"/>
<br/>

[![](https://data.jsdelivr.com/v1/package/npm/@tabbycss/tabby/badge)](https://www.jsdelivr.com/package/npm/@tabbycss/tabby)

<div align="left">Tabby is an accessible tab library built entirely with CSS.</div>
<div align="left">

[Demo](https://codepen.io/GreenestGoat/pen/dyxGLEQ)

## Quick start

There are 3 ways to get started with tabby.css:

### Install manually

[Download Tabby](https://raw.githubusercontent.com/tabbycss/tabby/refs/heads/main/css/tabby.min.css) and link `css/tabby.min.css` in the `<head>` of your website.

```html
<link rel="stylesheet" href="css/tabby.min.css" />
```

### Usage from CDN

Alternatively, you can use [jsDelivr CDN](https://www.jsdelivr.com/package/npm/@tabbycss/tabby) to link tabby.css

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabbycss/tabby/css/tabby.min.css" />
```

### Install with NPM

```shell
npm install @tabbycss/tabby
```

### Usage in HTML

```index.html```

```html
<div role="tablist" class="tabby">
    <a role="tab" class="tab" selected>
        Movies
        <div class="tab-border"></div>
    </a>
    <a role="tab" class="tab">
        Shows
        <div class="tab-border"></div>
    </a>
    <a role="tab" class="tab" disabled>
        Disabled
        <div class="tab-border"></div>
    </a>
</div>
```

To add functionality to tabby we can add this snippet of javascript.

```index.html```

```html
<script>
  const Tabby = document.querySelectorAll('.tabby');
  
  Tabby.forEach(container => {
    const Tabs = container.querySelectorAll('.tab');

    Tabs.forEach(item => {
      item.addEventListener('click', () => {
        Tabs.forEach(i => i.removeAttribute('selected'));
        item.setAttribute('selected', '');
      });
    });
  });
</script>
```

Check out the demo on [codepen.](https://codepen.io/GreenestGoat/pen/dyxGLEQ)

### Customization

Tabby can be easily customized by altering its default variables in the ```:root``` of your CSS.

```CSS```

```CSS
:root {
  /* Tabby default variables */

  --tabby-width: 100%;
  --tabby-height: 48px;
  --tabby-tab-width: var(--tabby-width);
  --tabby-tab-height: var(--tabby-height);
  --tabby-tab-background-color: transparent;
  --tabby-tab-selected-background-color: #E8F0FE;
  --tabby-tab-hover-background-color: #d6d6d64d;
  --tabby-tab-focus-background-color: #d6d6d64d;
  --tabby-tab-active-background-color: #d6d6d64d;
  --tabby-tab-color: #202124;
  --tabby-tab-selected-color: #185ABC;
  --tabby-tab-font-family: inherit;
  --tabby-tab-font-size: 14px;
  --tabby-tab-font-weight: 500;
  --tabby-tab-line-height: normal;
  --tabby-tab-radius: 0px;
  --tabby-tab-padding-left: 20px;
  --tabby-tab-padding-right: 20px;
  --tabby-tab-padding: 0px var(--tab-span-padding-left) 0px var(--tab-span-padding-right);
  --tabby-tab-disabled-opacity: 0.4;
  --tabby-tab-border-color: transparent;
  --tabby-tab-selected-border-color: #185ABC;
  --tabby-tab-border-radius: 0px;
  --tabby-tab-border-width: 100%;
  --tabby-tab-border-height: 2.6px;
}
```

## Copyright and license

Licensed under the MIT License, Copyright © 2024-present tabbycss.

See [LICENSE](https://github.com/tabbycss/tabby/blob/main/LICENSE) for more information.
