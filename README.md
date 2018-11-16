# 👨‍🎨 Mojito

A frontend for movemaison.com

### Developer setup

Super simple!

Clone this repo.

```
$ git clone git@github.com:jckw/mojito.git
```

Move into the newly-cloned directory:

```
$ cd mojito
```

Install all the relevant dependencies with Yarn:

```
$ yarn
```

Now we'll probably want a second window open in the `mojito` directory, since we're running two commands.

Auto-update the GraphQL files when we update our Relay queries:

```
$ yarn relay --watch
```

Run the app!

```
$ yarn start
```

### Deployment

Deployment is done with Netlify, which is watching the master branch of `jckw/mojito`.
Pushing to that branch will push an update.