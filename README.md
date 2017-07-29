# Data component to display result stats for a given url

```ResultAll``` to render the whole list of results.

```javascript
<ResultAll 
    url={url}
    />

```

```ResultEmbed``` to render a filtered list. It has a textfield to enter the id to search among the results.

```javascript
<ResultEmbed
    url={url}
    id={id}
    />
```

example app: https://appbaseio-apps.github.io/appbase-status-example/

app repo: https://github.com/appbaseio-apps/appbase-status-example