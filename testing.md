# Terminal 1

First, run rollup to watch your src/ module and automatically recompile it into dist/ whenever you make changes.

```
yarn start # runs rollup with watch flag
```

The second part will be running the example/ create-react-app that's linked to the local version of your module.

# Terminal2

```
cd example
yarn start # runs create-react-app dev server
```

# Browser

Open ```http://localhost:3000/matrix-card```