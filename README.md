# ankdev.me

This repo is for my personal website.

## Setup

### Requirements

1. Node - v16: Download [nodejs](https://nodejs.org/en/)
2. Hugo - v0.89.4: Download [hugo](https://gohugo.io/getting-started/installing/)
2. git: Download [git](https://git-scm.com/downloads)

### Cloning the repository

First step is to clone this repo. Run:

```bash
git clone https://github.com/ankitskvmdam/ankitskvmdam.github.io.
```

> Note for some reason the above will not work on windows. On Windows you are not allowed to create a folder with `.` at the end. On Windows the following command will work:

```bash
git clone https://github.com/ankitskvmdam/ankitskvmdam.github.io. website
```

The above command means that we want to clone this repository to website folder.

After clone change you directory, Run

```bash
cd ankitskvmdam.github.io.
or on Windows
cd website
```

### Install dependencies

To install dependencies run:

```bash
npm i
# or using yarn
yarn
```

### Run in development mode

To run this project in dev mode run:

```bash
npm run dev
# or
yarn dev
```

### Build

To build this project run:

```bash
npm run build
# or
yarn build
```
### Deploy

To deploy run:

```bash
npm run deploy
# or
yarn deploy
```

> Note: `deploy` script will first build the project and then deploy it as GitHub Pages.


# License
Licensed under the MIT license.