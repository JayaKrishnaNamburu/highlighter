## Text Hilighter

A simple hilighter for hilighting the key that is passed from the given text.

[![Build Status](https://travis-ci.org/JayaKrishnaNamburu/highlighter.svg?branch=master)](https://travis-ci.org/JayaKrishnaNamburu/highlighter)

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
