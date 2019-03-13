[![Build Status](https://travis-ci.org/JayaKrishnaNamburu/highlighter.svg?branch=master)](https://travis-ci.org/JayaKrishnaNamburu/highlighter)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Text Hilighter

## 📝

A simple hilighter for hilighting the key that is passed from the given text.

### Imprt

```
import highlighter from "simple-text-highlighter";
```

### Usage

```
<span
    dangerouslySetInnerHTML={{
        __html: highlighter("test", "test test test maketestdsfk test")
    }}
/>
```

### Preview

![Preview](example.png?raw=true "Preview")
