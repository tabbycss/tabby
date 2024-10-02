<p align="center">
<img alt="Logo Banner" src="https://raw.githubusercontent.com/tabbycss/tabby/main/banner/tabby.gif"/>
<br/>

[![](https://data.jsdelivr.com/v1/package/npm/@tabbycss/tabby/badge)](https://www.jsdelivr.com/package/npm/@tabbycss/tabby)

<div align="left">Tabby is an accessible tab library built entirely with CSS.</div>
<div align="left">

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
    <a role="tab" class="tab">
        Music
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

Check out the demo on [codepen.](https://codepen.io/GreenestGoat/pen/dyxGLEQ?editors=1000)

## Copyright and license

Licensed under the MIT License, Copyright © 2024-present tabbycss.

See [LICENSE](https://github.com/tabbycss/tabby/blob/main/LICENSE) for more information.
