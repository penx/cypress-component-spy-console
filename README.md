# Stubbing console log/error with Cypress component testing

See https://twitter.com/penx/status/1430896114597728259

To get started, run

```sh
yarn
yarn cypress open-ct
```

In Button.spec.jsx I have:

```js
  cy.get('@consoleError').should('not.be.called')
```

This fails with "could not find a registered alias for: @consoleError" due to the stub not existing. I don't know how to stub console.error in component testing due to not having access to onBeforeLoad or the window object.

Once stubbed correctly, I would expect the test to fail, as my Button component throws an error to the console.
