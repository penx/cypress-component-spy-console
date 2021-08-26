run

```
yarn
yarn cypress open-ct
```

In Button.spec.jsx I have commented out:

```
cy.get('@consoleError').to.have.callCount(0);
```

This currently fails. I don't know how to stub console.error in component testing due to not having access to onBeforeLoad or the window object.
