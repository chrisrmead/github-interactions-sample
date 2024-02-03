# github-interactions-sample

## Overview
* Uses github search API on a keyword to return results
* Opens playwright with first search result HTML url and asserts that page loads

## Creation
This was created with:
```npm install -D @playwright/test@latest```

## Installation
```
git clone git@github.com:chrisrmead/github-interactions-sample.git
npm install
npx playwright install 
```

## Run Tests
### Headless

```
npx playwright test
npx playwright show-report
```

### Interactive Debugging
```npx playwright test --ui```

Then click the arrow next to the test name to run the test in interactive mode.

