# Stubbing console log/error with Cypress component testing

See https://twitter.com/penx/status/1430896114597728259

To get started, run

```
yarn
yarn cypress open-ct
```

In Button.spec.jsx I have commented out:

```
cy.get('@consoleError').to.have.callCount(0);
```

If I uncomment this, it fails with "Cannot read property 'have' of undefined" due to the stub not existing. I don't know how to stub console.error in component testing due to not having access to onBeforeLoad or the window object.

Once stubbed correctly, I would expect the test to fail, as my Button component throws an error to the console.
