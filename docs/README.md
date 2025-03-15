# nuxeo-scripts

This repo is just a small playground for testing out small scripts related to making working with Nuxeo a bit simpler. 

## Scripts

- __src/generate.ts__
>  This script loads a DocType via the REST API and creates a TS type from it.
  It's just a small experiment for now, looking to see what can be done, and it could be expanded on in the future if we find any use for it.

  One could probably get away with using just the `Schema` for now, instead at loading the `DocType`, but on the other hand, I guess we should/could use other information from the `DocType` to get a better generated type instead of only using the fields from the `Schema`.


## Assets

I've included the current `DocType` and `Schema` for the Contract (contract) from our tutorial setup as .jsonc-files, just to have something easy to look at.

>[Contract DocType](../assets/Contract.docType.jsonc) | [contract Schema](../assets/contract.schema.jsonc)

## Runtime Info

I played around a bit with the new experimental support for running TS directly in Node v23, and while it seems to work well for these small tests, I guess that compiling it with tsc or a bundler of your choice would be recommended in any production scenario.

Set the `NUXEO_AUTHORIZATION` environment variable to your auth like in the `angular_example`, and run the example with:

```bash
> NUXEO_AUTHORIZATION="Basic <your value>" node src/generate.ts
```

or export the value once, and run the code.

```bash

# Do this once
> export NUXEO_AUTHORIZATION="Basic <your value>"

# And you can run the code without specifying that for every invocation 
> node src/generate.ts
```
