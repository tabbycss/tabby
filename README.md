<p align="center">
<img alt="Logo Banner" src="https://raw.githubusercontent.com/tabbycss/tabby/main/banner/tabby.gif"/>
<br/>

[![](https://data.jsdelivr.com/v1/package/npm/@tabbycss/tabby/badge)](https://www.jsdelivr.com/package/npm/@tabbycss/tabby)

<div align="left">Tabby is an accessible tab library built with keyboard navigation support.</div>
<div align="left">

[Demo](https://codepen.io/GreenestGoat/pen/dyxGLEQ)

## Quick start

### Usage from CDN

You can use [jsDelivr CDN](https://www.jsdelivr.com/package/npm/@tabbycss/tabby) to link Tabby

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabbycss/tabby@latest/css/tabby.min.css" />

<script src="https://cdn.jsdelivr.net/npm/@tabbycss/tabby/js/tabby.min.js"></script>
```

### Install with NPM

```shell
npm install @tabbycss/tabby
```

### Usage in HTML

```index.html```

```html
<div role="tablist" class="tabby">
    <button role="tab" class="tab" selected>
        Movies
        <div class="tab-border"></div>
    </button>
    <button role="tab" class="tab">
        Shows
        <div class="tab-border"></div>
    </button>
    <button role="tab" class="tab">
        Music
        <div class="tab-border"></div>
    </button>
</div>
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
  --tabby-tab-width: 100%;
  --tabby-tab-height: 100%;
  --tabby-tab-background-color: transparent;
  --tabby-tab-selected-background-color: #fee8e8;
  --tabby-tab-hover-background-color: #d6d6d64d;
  --tabby-tab-focus-background-color: #d6d6d64d;
  --tabby-tab-active-background-color: #d6d6d64d;
  --tabby-tab-color: #202124;
  --tabby-tab-selected-color: #bc1818;
  --tabby-tab-font-family: inherit;
  --tabby-tab-font-size: 14px;
  --tabby-tab-font-weight: 500;
  --tabby-tab-line-height: normal;
  --tabby-tab-radius: 6px 6px 0px 0px;
  --tabby-tab-padding-left: 20px;
  --tabby-tab-padding-right: 20px;
  --tabby-tab-padding: 0px var(--tab-span-padding-left) 0px var(--tab-span-padding-right);
  --tabby-tab-disabled-opacity: 0.4;
  --tabby-tab-border-color: transparent;
  --tabby-tab-selected-border-color: #bc1818;
  --tabby-tab-border-radius: 0px;
  --tabby-tab-border-width: 100%;
  --tabby-tab-border-height: 2.6px;
}
```

## Copyright and license

Licensed under the MIT License, Copyright © 2024-present tabbycss.

See [LICENSE](https://github.com/tabbycss/tabby/blob/main/LICENSE) for more information.
