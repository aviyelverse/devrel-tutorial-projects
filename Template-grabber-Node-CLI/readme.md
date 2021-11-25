<p align="center">
<img src="https://user-images.githubusercontent.com/37651620/140509922-a36601f8-9045-48ab-a169-341558bf9584.png" width=500>
</p>

###### Command Line Interface ( to automatically setup pre-configured React , viteReact and JavaScript initial project template ) crafted using NodeJS and external third-party library like:

- inquirer (for prompting missing values)
- args ( for parsing cli arguments)
- ncp (for recursive copying)
- chalk (for coloring output commands)
- execa (for running external commands)
- listr (for specifying list of tasks)

<h4 align="center">
⚠️ This is not for developing production application.
</h4>

## Installation Guide

```
npx template-grabber

```

or (generating javascript)

```
npx template-grabber javascript

```

or(generating create-react-app)

```
npx template-grabber react

```

or(generating vite react) [Highly recommended]

```
npx template-grabber viteReact

```

### Generating template with initilized GIT

```
npx template-grabber javascript --git

```

---

```
npx template-grabber react --git

```

---

```
npx template-grabber viteReact --git

```

### Generating template with initilized GIT and installing all dpendencies.

```
npx template-grabber javascript --git --install

```

---

```
npx template-grabber react --git --install

```

---

```
npx template-grabber viteReact --git --install

```

## license

MIT
