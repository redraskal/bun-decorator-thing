# repro

## To install dependencies:

The "bin" package.json feature does not seem to work with GitHub dependencies, so you have to do this fun dance.

```bash
bun i
bun rm gateway
bun i redraskal/gateway
```

## To run the server:

```bash
bun start
```

This project was created with [Bun](https://bun.sh), a fast all-in-one JavaScript runtime.
