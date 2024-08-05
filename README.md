# With Tesing
---

## Installation

### Install Node.js (version 18 or higher)

```bash
# installs nvm (Node Version Manager)
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
# download and install Node.js
$ nvm install 18
# verifies the right Node.js version is in the environment
$ node -v # should print `v18.20.3`
```

### Install yarn package manager and project dependent packages


```bash
# If Yarn is not installed, please install it.
$ npm install --global yarn

# Install project dependent packages.
$ yarn install
```

### Running the App

Run `yarn dev`. The app will be found at [http://localhost:3000]

```bash
$ yarn dev
```

---

## This repository...
- Practice TDD, using jest & cypress and next.js.
- Practice custom ESLint configuration.
- Practice CI yml scripts