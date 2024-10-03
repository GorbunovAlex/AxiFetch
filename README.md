# AxiFetch
A small axios based class for making requests

## Usage

### install as npm module
```
pnpm add -D axifetch
```

### import in a project and use
```
import { AxiFetch } from 'axifetch';

const response = await AxiFetch.send('get', 'https://jsonplaceholder.typicode.com/todos/1');
```
