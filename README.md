<p align="center">
<img alt="Logo Banner" src="https://raw.githubusercontent.com/tabbycss/tabby/main/banner/banner.svg"/>
<br/>

[![Published on npm](https://img.shields.io/npm/v/tabbycss)](https://www.npmjs.com/package/tabbycss)
[![](https://data.jsdelivr.com/v1/package/npm/open-loadr/badge)](https://www.jsdelivr.com/package/npm/open-loadr)
<!--[![npm Downloads](https://img.shields.io/npm/dm/open-emojify?label=npm%20downloads)](https://npm-stat.com/charts.html?package=open-emojify)-->

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
  <a role="tab" class="tab" selected>Movies</a>
  <a role="tab" class="tab">Shows</a>
  <a role="tab" class="tab">Music</a>
</div>
```

To add functionality to tabby we can add this simple js.

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

Check out the Demo on [Codepen.](https://codepen.io/GreenestGoat/pen/yLdRzPN)

### Extra step
Lets add some styling to the ```<img>``` element.

```style.css```

```css
img {
  height: 300px;
  width: 300px;
  object-fit: cover;
  border-radius: 15px;
  overflow: hidden;
}
```

## Customization

Loadr comes with variables that can be easily customized.

```index.html```

```html
<script>
  new Loadr({
    async: false,
    cache: true,
    delay: '750'
  });
</script>
```

Check out the Customization Demo on [Codepen.](https://codepen.io/GreenestGoat/pen/BagqdNR)

## Copyright and license

Licensed under the MIT License, Copyright © 2024-present open-loadr.

See [LICENSE](https://github.com/open-loadr/loadr/blob/main/LICENSE) for more information.
